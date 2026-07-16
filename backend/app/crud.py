from sqlalchemy.orm import Session
from sqlalchemy import or_
from . import models, schemas
import random

# ==============================================================================
# CRUD 로직: 데이터베이스 창고에서 물건을 가져오거나 넣는 '창고 관리자'의 역할입니다.
# ==============================================================================

def get_recent_searches(db: Session, user_id: int = 1):
    searches = db.query(models.RecentSearch).filter(models.RecentSearch.user_id == user_id).order_by(models.RecentSearch.created_at.desc()).limit(5).all()
    return [search.keyword for search in searches]

def get_hot_places(db: Session):
    places = db.query(models.Place).limit(10).all()
    # places 엔티티를 바로 반환해도 FastAPI가 schemas.PlaceResponse 형태로 자동 변환해줍니다.
    return places

def search_restaurants(db: Session, keyword: str, lat: float, lng: float, date: str = None, total_people: int = None, drinker_ratio: int = 50, user_id: int = 1):
    from sqlalchemy import func
    
    alk_ratio = drinker_ratio / 100.0
    non_alk_ratio = 1.0 - alk_ratio
    
    user_location = f"SRID=4326;POINT({lng} {lat})"

    # 1. 2km 이내 식당 조회 및 거리 계산
    from sqlalchemy.orm import selectinload
    
    query = db.query(
        models.Restaurant,
        func.ST_Distance(models.Restaurant.location, func.ST_GeographyFromText(user_location)).label("distance_m")
    ).filter(func.ST_DWithin(models.Restaurant.location, func.ST_GeographyFromText(user_location), 2000)).options(
        selectinload(models.Restaurant.tags)
    )
    
    if keyword:
        query = query.filter(models.Restaurant.name.ilike(f"%{keyword}%"))
            
    restaurants_with_dist = query.all()
    
    # 2. 검색된 식당들을 API 양식에 맞게 포장 및 밸런스 계산
    result = []
    for r, dist_m in restaurants_with_dist:
        is_favorite = False
        
        alk_score = float(r.alcohol_score or 0)
        non_alk_score = float(r.non_alcohol_score or 0)
        balance_score = (alk_ratio * alk_score) + (non_alk_ratio * non_alk_score)

        result.append(schemas.RestaurantListResponse(
            id=r.id,
            name=r.name,
            location=r.address,
            distance=f"{int(dist_m)}m",
            balance_score=int(balance_score),
            image_url=r.image_url or "https://via.placeholder.com/300?text=No+Image",
            is_favorite=is_favorite,
            tags=[tag.name for tag in r.tags]
        ))
    
    # 3. 밸런스 점수 높은 순으로 정렬하여 반환합니다.
    result.sort(key=lambda x: x.balanceScore, reverse=True)
    return result

def get_restaurant_detail(db: Session, restaurant_id: int, user_id: int = 1):
    r = db.query(models.Restaurant).filter(models.Restaurant.id == restaurant_id).first()
    if not r:
        return None
        
    is_favorite = False # 임시 처리
    distance = "320m" # 임시 거리
    balance_score = 95 # 임시 점수
    
    return schemas.RestaurantDetailResponse(
        id=r.id,
        name=r.name,
        location=r.address,
        distance=distance,
        balance_score=balance_score,
        image_url=r.image_url or "https://via.placeholder.com/300?text=No+Image",
        is_favorite=is_favorite,
        tags=[tag.name for tag in r.tags],
        non_alcohol_options=[opt.name for opt in r.non_alcohol_options],
        corkage_info=r.corkage_info
    )
