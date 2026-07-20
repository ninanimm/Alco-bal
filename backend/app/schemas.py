from pydantic import BaseModel, Field, ConfigDict
from pydantic.alias_generators import to_camel
from typing import List, Optional

# ==============================================================================
# 스키마(Schemas): 서버와 클라이언트(웹/앱)가 주고받을 데이터의 양식(영수증)입니다.
# ==============================================================================

# 핫플레이스 응답 스키마
class PlaceResponse(BaseModel):
    # model_config: 파이썬 snake_case → JSON camelCase 자동 변환 (예: image_url → imageUrl)
    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,
        alias_generator=to_camel  # 모든 필드를 camelCase로 자동 변환합니다.
    )

    id: int
    name: str
    image_url: str

# 식당 목록 응답 스키마 (검색 결과)
class RestaurantListResponse(BaseModel):
    # alias_generator로 snake_case → camelCase 자동 변환
    # 예: balance_score → balanceScore, non_alcohol_options → nonAlcoholOptions
    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,
        alias_generator=to_camel
    )

    id: int
    name: str
    location: str
    distance: str
    balance_score: int = 0          # → balanceScore
    image_url: Optional[str] = None  # → imageUrl
    is_favorite: bool = False        # → isFavorite
    tags: List[str] = []
    non_alcohol_options: List[str] = []   # → nonAlcoholOptions
    corkage_info: Optional[str] = None    # → corkageInfo
    menu: List[str] = []                  # 메뉴 목록 (크롤링 데이터)
    recommendation_reason: Optional[str] = None  # → recommendationReason (추천 이유)

# 식당 상세 응답 스키마
class RestaurantDetailResponse(RestaurantListResponse):
    pass  # 상위 모델의 모든 필드를 그대로 사용합니다.
