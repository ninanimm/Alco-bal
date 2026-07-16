import os
from sqlalchemy import create_engine, text
import psycopg
from app.config import settings

# [변경] 환경변수(URL)를 config 파일에서 가져옵니다.
db_url = settings.database_url

if db_url.startswith("postgres://") or db_url.startswith("postgresql://"):
    db_url = db_url.replace("postgres://", "postgresql+psycopg://").replace("postgresql://", "postgresql+psycopg://")

if "supabase" in db_url and "sslmode" not in db_url:
    joiner = "&" if "?" in db_url else "?"
    db_url += f"{joiner}sslmode=require"

print("Connecting to:", db_url)
engine = create_engine(db_url, connect_args={"prepare_threshold": None})

with engine.connect() as conn:
    res = conn.execute(text("SELECT 1")).scalar()
    print("Success:", res)
