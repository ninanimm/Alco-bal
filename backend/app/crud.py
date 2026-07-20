from sqlalchemy.orm import Session
from sqlalchemy import or_
from . import models, schemas

# ==============================================================================
# CRUD 로직: 데이터베이스 창고에서 물건을 가져오거나 넣는 '창고 관리자'의 역할입니다.
# ==============================================================================

def get_recent_searches(db: Session, user_id: int = 1):
    searches = (
        db.query(models.RecentSearch)
        .filter(models.RecentSearch.user_id == user_id)
        .order_by(models.RecentSearch.created_at.desc())
        .limit(5).all()
    )
    return [search.keyword for search in searches]

def get_hot_places(db: Session):
    places = db.query(models.Place).limit(10).all()
    return places

def _build_reason_from_info(
    nai,           # NonAlcoholInfo 객체 (has_zero_beer, has_zero_wine, corkage_type 등)
    alk_score: float,
    non_alk_score: float,
    menu: list,
) -> tuple[str, list, str | None]:
    """
    NonAlcoholInfo 데이터로 추천 이유 / 논알콜 옵션 목록 / 콜키지 정보를 만듭니다.

    비유: 식당 스펙표(nai)를 읽어 '이 식당을 고른 이유' 라는 광고 문구를 자동 작성하는 것.
    반환: (recommendation_reason, non_alcohol_options, corkage_info)
    """
    reasons = []
    non_alc_opts = []
    corkage_info = None

    if nai:
        # 논알콜 옵션 리스트 생성 (실제 DB 필드 기반)
        if nai.has_zero_beer:
            non_alc_opts.append("무알콜 맥주")
        if nai.has_zero_wine:
            non_alc_opts.append("무알콜 와인")

        # 콜키지 정보
        if nai.corkage_type == 'FREE':
            corkage_info = 'FREE'
            reasons.append("콜키지 프리 🍾")
        elif nai.corkage_type == 'CHARGE' and nai.corkage_price:
            corkage_info = f"{nai.corkage_price:,}원"
            reasons.append(f"콜키지 {nai.corkage_price:,}원")

        # 논알콜 옵션이 있으면 이유에 추가
        if non_alc_opts:
            reasons.append(f"논알콜 메뉴: {' · '.join(non_alc_opts)}")

    # 점수 기반 이유
    if non_alk_score >= 80:
        reasons.append("논알콜 친화 맛집 🥤")
    if alk_score >= 80 and non_alk_score >= 70:
        reasons.append("음주·비음주 모두 만족 ✨")
    elif alk_score >= 80:
        reasons.append("주류 라인업 풍부 🍻")

    # 아무 이유도 없으면 메뉴로 fallback
    if not reasons and menu:
        reasons.append(f"대표 메뉴: {menu[0]}")

    recommendation_reason = " · ".join(reasons) if reasons else None
    return recommendation_reason, non_alc_opts, corkage_info


def search_restaurants(
    db: Session, keyword: str, lat: float, lng: float,
    date: str = None, total_people: int = None,
    drinker_ratio: int = 50, user_id: int = 1
):
    from sqlalchemy import func
    from sqlalchemy.orm import selectinload

    alk_ratio = drinker_ratio / 100.0
    non_alk_ratio = 1.0 - alk_ratio
    user_location = f"SRID=4326;POINT({lng} {lat})"

    # 1. 식당 조회 + non_alcohol_info도 함께 로드 (JOIN 없이 lazy→eager 로드)
    query = db.query(
        models.Restaurant,
        func.ST_Distance(
            models.Restaurant.location,
            func.ST_GeographyFromText(user_location)
        ).label("distance_m")
    ).options(
        selectinload(models.Restaurant.tags),
        selectinload(models.Restaurant.non_alcohol_options),
        selectinload(models.Restaurant.non_alcohol_info)  # ← 핵심: NonAlcoholInfo 로드
    )

    if keyword:
        query = query.filter(
            (models.Restaurant.name.ilike(f"%{keyword}%")) |
            (models.Restaurant.address.ilike(f"%{keyword}%"))
        )
    else:
        query = query.filter(
            func.ST_DWithin(
                models.Restaurant.location,
                func.ST_GeographyFromText(user_location), 2000
            )
        )

    restaurants_with_dist = query.all()

    # 2. 검색된 식당들을 API 양식에 맞게 포장 및 밸런스 계산
    result = []
    for r, dist_m in restaurants_with_dist:
        alk_score = float(r.alcohol_score or 0)
        non_alk_score = float(r.non_alcohol_score or 0)
        balance_score = (alk_ratio * alk_score) + (non_alk_ratio * non_alk_score)

        # non_alcohol_info(has_zero_beer 등)를 기반으로 추천 이유 생성
        recommendation_reason, non_alc_opts, corkage_info = _build_reason_from_info(
            r.non_alcohol_info, alk_score, non_alk_score, r.menu or []
        )

        result.append(schemas.RestaurantListResponse(
            id=r.id,
            name=r.name,
            location=r.address,
            distance=f"{int(dist_m)}m",
            balance_score=int(balance_score),
            image_url=r.image_url or "https://via.placeholder.com/300?text=No+Image",
            is_favorite=False,
            tags=[tag.name for tag in r.tags],
            non_alcohol_options=non_alc_opts,       # has_zero_beer 등에서 생성
            corkage_info=corkage_info,               # corkage_type에서 생성
            menu=r.menu or [],
            recommendation_reason=recommendation_reason
        ))

    # 3. 밸런스 점수 높은 순으로 정렬
    result.sort(key=lambda x: x.balance_score, reverse=True)
    return result


def get_restaurant_detail(db: Session, restaurant_id: int, user_id: int = 1):
    from sqlalchemy.orm import selectinload
    r = db.query(models.Restaurant).options(
        selectinload(models.Restaurant.tags),
        selectinload(models.Restaurant.non_alcohol_options),
        selectinload(models.Restaurant.non_alcohol_info)
    ).filter(models.Restaurant.id == restaurant_id).first()
    if not r:
        return None

    alk_score = float(r.alcohol_score or 0)
    non_alk_score = float(r.non_alcohol_score or 0)
    balance_score = int((alk_score + non_alk_score) / 2)  # 상세 페이지용 단순 평균

    recommendation_reason, non_alc_opts, corkage_info = _build_reason_from_info(
        r.non_alcohol_info, alk_score, non_alk_score, r.menu or []
    )

    return schemas.RestaurantDetailResponse(
        id=r.id,
        name=r.name,
        location=r.address,
        distance="—",
        balance_score=balance_score,
        image_url=r.image_url or "https://via.placeholder.com/300?text=No+Image",
        is_favorite=False,
        tags=[tag.name for tag in r.tags],
        non_alcohol_options=non_alc_opts,
        corkage_info=corkage_info,
        menu=r.menu or [],
        recommendation_reason=recommendation_reason
    )
