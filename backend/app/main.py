from fastapi import FastAPI, Depends, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List, Optional
from . import crud, models, schemas
from .database import engine, get_db

# ==============================================================================
# 메인(Main): 손님의 주문을 받는 '점원'이자 전체 식당을 관리하는 곳입니다.
# ==============================================================================

# 데이터베이스에 테이블들을 생성합니다. (미리 만들어둔 도면대로 건물을 짓습니다.)
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Alco-bal API", description="알콜 밸런서(Alco-bal) 백엔드 API")

# 프론트엔드 서버에서 백엔드 서버로 통신할 수 있도록 허락(CORS)해줍니다.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # 실제 운영시에는 프론트엔드 주소만 허용해야 안전합니다.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 1. 최근 검색어 조회
@app.get("/api/v1/search/recent", response_model=List[str])
def get_recent_searches(db: Session = Depends(get_db)):
    return crud.get_recent_searches(db=db)

# 2. 핫플레이스 조회
@app.get("/api/v1/places/hot", response_model=List[schemas.PlaceResponse])
def get_hot_places(db: Session = Depends(get_db)):
    return crud.get_hot_places(db=db)

# 3. 식당 검색 및 리스팅
@app.get("/api/v1/restaurants", response_model=List[schemas.RestaurantListResponse])
def search_restaurants(
    keyword: str = Query("", description="모임 장소 검색어 (예: 성수동)"),
    lat: float = Query(37.5701, description="사용자 위도 (기본값: 종각역)"),
    lng: float = Query(126.9831, description="사용자 경도 (기본값: 종각역)"),
    date: Optional[str] = Query(None, description="모임 날짜 (예: 2024-12-25)"),
    total_people: Optional[int] = Query(None, description="전체 인원수"),
    drinker_ratio: int = Query(50, description="음주인 비율 (0~100)"),
    db: Session = Depends(get_db)
):
    return crud.search_restaurants(db=db, keyword=keyword, lat=lat, lng=lng, date=date, total_people=total_people, drinker_ratio=drinker_ratio)

# 4. 식당 상세 정보 조회
@app.get("/api/v1/restaurants/{id}", response_model=schemas.RestaurantDetailResponse)
def get_restaurant_detail(id: int, db: Session = Depends(get_db)):
    restaurant = crud.get_restaurant_detail(db=db, restaurant_id=id)
    if restaurant is None:
        raise HTTPException(status_code=404, detail="식당을 찾을 수 없습니다.")
    return restaurant
