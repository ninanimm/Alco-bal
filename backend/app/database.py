from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from .config import settings

# [변경] 환경변수 설정 부분을 config.py로 따로 분리하여 불러옵니다. (코드 분리)
# create_engine: 식당 창고(DB)로 가는 길을 만듭니다.
# psycopg (psycopg3) 드라이버를 명시적으로 사용하도록 변경합니다.
db_url = settings.database_url
if db_url.startswith("postgres://") or db_url.startswith("postgresql://"):
    db_url = db_url.replace("postgres://", "postgresql+psycopg://").replace("postgresql://", "postgresql+psycopg://")

if "supabase" in db_url and "sslmode" not in db_url:
    joiner = "&" if "?" in db_url else "?"
    db_url += f"{joiner}sslmode=require"

SQLALCHEMY_DATABASE_URL = db_url
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"prepare_threshold": None})

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
