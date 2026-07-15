from pydantic import BaseModel, Field
from typing import List, Optional

# ==============================================================================
# 스키마(Schemas): 서버와 클라이언트(웹/앱)가 주고받을 데이터의 양식(영수증)입니다.
# ==============================================================================

# 핫플레이스 응답 스키마
class PlaceResponse(BaseModel):
    id: int
    name: str
    imageUrl: str = Field(alias="image_url") # 파이썬(스네이크 케이스)과 프론트엔드(카멜 케이스) 이름 맞추기

    class Config:
        from_attributes = True
        populate_by_name = True

# 식당 목록 응답 스키마 (검색 결과)
class RestaurantListResponse(BaseModel):
    id: int
    name: str
    location: str
    distance: str # 예: "320m"
    balanceScore: int = Field(alias="balance_score") # 예: 98
    imageUrl: Optional[str] = Field(default=None, alias="image_url")
    isFavorite: bool = Field(default=False, alias="is_favorite")
    tags: List[str] = []

    class Config:
        from_attributes = True
        populate_by_name = True

# 식당 상세 응답 스키마 (목록 응답에 논알콜 옵션과 콜키지 정보 추가)
class RestaurantDetailResponse(RestaurantListResponse):
    nonAlcoholOptions: List[str] = Field(default=[], alias="non_alcohol_options")
    corkageInfo: Optional[str] = Field(default=None, alias="corkage_info")
