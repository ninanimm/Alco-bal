import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from pydantic_settings import BaseSettings

# Settings(환경 설정)를 관리하는 클래스입니다.
# DB 접속 주소를 환경변수(DATABASE_URL)에서 가져옵니다. 
class Settings(BaseSettings):
    database_url: str = os.getenv("DATABASE_URL", "postgresql://vibecoder:supersecret@localhost:5432/vibe_db")

settings = Settings()

# create_engine: 식당 창고(DB)로 가는 길을 만듭니다.
engine = create_engine(settings.database_url)

# SessionLocal: 창고 문을 열고 닫는 열쇠(세션)를 복사해주는 기계입니다.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base: 우리가 만들 테이블들의 뼈대(기본 설계도)입니다.
Base = declarative_base()

# get_db: 창고(DB)에 작업을 할 때마다 열쇠(세션)를 빌려주고, 끝나면 반납받는 함수입니다.
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
