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

def search_restaurants(db: Session, keyword: str, date: str = None, total_people: int = None, drinker_ratio: int = 50, user_id: int = 1):
    # 1. 키워드로 이름이나 지역을 검색합니다.
    query = db.query(models.Restaurant)
    if keyword:
        query = query.filter(
            or_(
                models.Restaurant.name.ilike(f"%{keyword}%"),
                models.Restaurant.location.ilike(f"%{keyword}%")
            )
        )
    
    restaurants = query.all()
    
    # 2. 검색된 식당들을 API 양식에 맞게 포장합니다.
    result = []
    for r in restaurants:
        # (임시) 찜 여부 계산 - 추후 유저 기능 연동 시 실제 DB 조회로 변경
        is_favorite = False
        
        # (임시) 밸런스 점수 계산 - 실제로는 음주 비율(drinker_ratio) 등을 활용한 복잡한 알고리즘 필요
        base_score = 80 + random.randint(0, 20)
        
        # (임시) 거리 계산 - 실제로는 위경도 기반 계산 필요
        distance = f"{random.randint(100, 2000)}m"

        result.append(schemas.RestaurantListResponse(
            id=r.id,
            name=r.name,
            location=r.location,
            distance=distance,
            balance_score=base_score,
            image_url=r.image_url,
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
        location=r.location,
        distance=distance,
        balance_score=balance_score,
        image_url=r.image_url,
        is_favorite=is_favorite,
        tags=[tag.name for tag in r.tags],
        non_alcohol_options=[opt.name for opt in r.non_alcohol_options],
        corkage_info=r.corkage_info
    )
