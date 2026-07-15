-- PostGIS 확장 기능 활성화 (최초 1회 실행 필요)
CREATE EXTENSION IF NOT EXISTS postgis;

-- 1. 식당 기본 정보 테이블
CREATE TABLE IF NOT EXISTS restaurants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location GEOGRAPHY(Point, 4326) NOT NULL, -- 미터(m) 단위 계산을 위해 geography 사용
    alcohol_score NUMERIC(3,1) DEFAULT 0.0,
    non_alcohol_score NUMERIC(3,1) DEFAULT 0.0
);

-- 2. 논알콜 상세 정보 테이블 (1:1 관계)
CREATE TABLE IF NOT EXISTS non_alcohol_info (
    restaurant_id INT PRIMARY KEY REFERENCES restaurants(id) ON DELETE CASCADE, -- PK 겸 FK
    has_zero_beer BOOLEAN DEFAULT FALSE,
    has_zero_wine BOOLEAN DEFAULT FALSE,
    corkage_type VARCHAR(20) CHECK (corkage_type IN ('FREE', 'CHARGE', 'NONE')), -- 데이터 오염 방지
    corkage_price INT DEFAULT 0,
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 성능 최적화를 위한 공간 인덱스 생성 (주변 식당 검색 속도 향상)
CREATE INDEX IF NOT EXISTS idx_restaurants_location ON restaurants USING gist(location);
