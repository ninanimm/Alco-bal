# REST API 명세서 (API Specification)

본 문서는 `FUNCTIONS.md`의 기능 요구사항과 `mockData.ts`의 데이터 구조를 바탕으로 작성된 백엔드 연동용 RESTful API 명세서입니다.

## 1. 최근 검색어 조회 (Recent Searches)
- **Endpoint**: `GET /api/v1/search/recent`
- **Description**: 사용자가 최근에 검색한 지역/키워드 목록을 반환합니다. (자동완성 및 검색어 추천용)
- **Response**:
```json
[
  "강남역",
  "홍대입구",
  "이태원",
  "성수"
]
```

## 2. 핫플레이스 조회 (Hot Places)
- **Endpoint**: `GET /api/v1/places/hot`
- **Description**: 현재 인기 있는 지역(핫플레이스) 목록을 이미지와 함께 반환합니다.
- **Response**:
```json
[
  {
    "id": 1,
    "name": "강남역",
    "imageUrl": "https://..."
  },
  {
    "id": 2,
    "name": "종로/익선",
    "imageUrl": "https://..."
  }
]
```

## 3. 식당 검색 및 밸런스 리스팅 (Restaurant Search & Balance Listing)
- **Endpoint**: `GET /api/v1/restaurants`
- **Description**: 지역 검색어, 날짜, 인원수 및 슬라이더로 조절한 '음주인 비율(Drinker Ratio)'을 기반으로 밸런스 점수(Balance Score)가 계산되어 정렬된 식당 리스트를 반환합니다.
- **Query Parameters**:
  - `keyword` (string, 필수): 모임 장소 검색어 (예: "성수동")
  - `date` (string, 선택): 모임 날짜 (예: "2024-12-25")
  - `total_people` (integer, 선택): 전체 인원수
  - `drinker_ratio` (integer, 필수): 전체 인원 중 음주인의 비율 (예: 0~100) - 이 값을 바탕으로 밸런스 알고리즘 가중치 반영
- **Response**:
```json
[
  {
    "id": 1,
    "name": "미도인 성수",
    "location": "성수동1가",
    "distance": "320m",
    "balanceScore": 98,
    "imageUrl": "https://...",
    "isFavorite": true,
    "tags": ["#논알콜와인", "#콜키지프리", "#무알콜맥주"]
  }
]
```

## 4. 식당 상세 정보 조회 (Restaurant Details)
- **Endpoint**: `GET /api/v1/restaurants/{id}`
- **Description**: 특정 식당의 상세 정보를 반환합니다. 특히 프론트엔드 요구사항에 맞춰 '논알콜 라인업' 및 '콜키지 정책'이 강조되어 포함됩니다.
- **Path Parameters**:
  - `id` (integer, 필수): 식당의 고유 ID
- **Response**:
```json
{
  "id": 1,
  "name": "미도인 성수",
  "location": "성수동1가",
  "distance": "320m",
  "balanceScore": 98,
  "imageUrl": "https://...",
  "isFavorite": true,
  "tags": ["#논알콜와인", "#콜키지프리", "#무알콜맥주"],
  "nonAlcoholOptions": ["논알콜 와인", "무알콜 맥주"],
  "corkageInfo": "콜키지 프리 (외부 주류 및 논알콜 음료 반입 가능)"
}
```
