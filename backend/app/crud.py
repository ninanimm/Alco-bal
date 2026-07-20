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
    return places

def _build_reason(r, alk_score: float, non_alk_score: float, non_alc_opts: list) -> str:
    """식당 데이터를 기반으로 추천 이유 문자열을 만듭니다.
    
    예: '논알콜 메뉴 있음: 무알콜 맥주, 무알콜 와인 · 콜키지 프리 · 음주/비음주 모두 만족'
    """
    reasons = []
    # 논알콜 옵션 정보 (예: 무알콜 맥주, 논알콜 칵테일)
    if non_alc_opts:
        reasons.append(f"논알콜 메뉴: {', '.join(non_alc_opts[:2])}")
    # 콜키지 정보
    if r.corkage_info == 'FREE':
        reasons.append("콜키지 프리")
    elif r.corkage_info == 'CHARGE':
        reasons.append("콜키지 유료 가능")
    # 점수 기반 이유
    if non_alk_score >= 80:
        reasons.append("논알콜 친화 맛집")
    if alk_score >= 80 and non_alk_score >= 70:
        reasons.append("음주/비음주 모두 만족")
    # 메뉴 정보가 있으면 첫 번째 메뉴 소개
    if r.menu and len(r.menu) > 0 and not non_alc_opts:
        reasons.append(f"대표 메뉴: {r.menu[0]}")
    return " · ".join(reasons) if reasons else "밸런스 스코어 높음"

def search_restaurants(db: Session, keyword: str, lat: float, lng: float, date: str = None, total_people: int = None, drinker_ratio: int = 50, user_id: int = 1):
    from sqlalchemy import func
    from sqlalchemy.orm import selectinload

    alk_ratio = drinker_ratio / 100.0
    non_alk_ratio = 1.0 - alk_ratio

    user_location = f"SRID=4326;POINT({lng} {lat})"

    # 1. 식당 조회 및 거리 계산 (검색어가 있으면 거리 제한 해제)
    # selectinload = '관련 데이터를 미리 창고에서 꺼내 두는 것' - 성능 최적화
    query = db.query(
        models.Restaurant,
        func.ST_Distance(models.Restaurant.location, func.ST_GeographyFromText(user_location)).label("distance_m")
    ).options(
        selectinload(models.Restaurant.tags),
        selectinload(models.Restaurant.non_alcohol_options)  # 논알콜 옵션도 함께 로드
    )

    if keyword:
        # 검색어가 있으면 이름이나 주소에서 검색하고, 거리 제한을 두지 않음
        query = query.filter(
            (models.Restaurant.name.ilike(f"%{keyword}%")) |
            (models.Restaurant.address.ilike(f"%{keyword}%"))
        )
    else:
        # 검색어가 없으면 2km 이내만 표시
        query = query.filter(func.ST_DWithin(models.Restaurant.location, func.ST_GeographyFromText(user_location), 2000))

    restaurants_with_dist = query.all()

    # 2. 검색된 식당들을 API 양식에 맞게 포장 및 밸런스 계산
    result = []
    for r, dist_m in restaurants_with_dist:
        is_favorite = False

        alk_score = float(r.alcohol_score or 0)
        non_alk_score = float(r.non_alcohol_score or 0)
        balance_score = (alk_ratio * alk_score) + (non_alk_ratio * non_alk_score)

        non_alc_opts = [opt.name for opt in r.non_alcohol_options]
        recommendation_reason = _build_reason(r, alk_score, non_alk_score, non_alc_opts)

        result.append(schemas.RestaurantListResponse(
            id=r.id,
            name=r.name,
            location=r.address,
            distance=f"{int(dist_m)}m",
            balance_score=int(balance_score),
            image_url=r.image_url or "https://via.placeholder.com/300?text=No+Image",
            is_favorite=is_favorite,
            tags=[tag.name for tag in r.tags],
            non_alcohol_options=non_alc_opts,
            corkage_info=r.corkage_info,
            menu=r.menu or [],
            recommendation_reason=recommendation_reason  # snake_case로 전달
        ))

    # 3. 밸런스 점수 높은 순으로 정렬하여 반환합니다.
    result.sort(key=lambda x: x.balance_score, reverse=True)
    return result

def get_restaurant_detail(db: Session, restaurant_id: int, user_id: int = 1):
    from sqlalchemy.orm import selectinload
    r = db.query(models.Restaurant).options(
        selectinload(models.Restaurant.tags),
        selectinload(models.Restaurant.non_alcohol_options)
    ).filter(models.Restaurant.id == restaurant_id).first()
    if not r:
        return None

    is_favorite = False  # 임시 처리
    distance = "320m"    # 임시 거리
    balance_score = 95   # 임시 점수

    alk_score = float(r.alcohol_score or 0)
    non_alk_score = float(r.non_alcohol_score or 0)
    non_alc_opts = [opt.name for opt in r.non_alcohol_options]
    recommendation_reason = _build_reason(r, alk_score, non_alk_score, non_alc_opts)

    return schemas.RestaurantDetailResponse(
        id=r.id,
        name=r.name,
        location=r.address,
        distance=distance,
        balance_score=balance_score,
        image_url=r.image_url or "https://via.placeholder.com/300?text=No+Image",
        is_favorite=is_favorite,
        tags=[tag.name for tag in r.tags],
        non_alcohol_options=non_alc_opts,
        corkage_info=r.corkage_info,
        menu=r.menu or [],
        recommendation_reason=recommendation_reason  # snake_case
    )
