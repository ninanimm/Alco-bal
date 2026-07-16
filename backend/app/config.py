from pydantic_settings import BaseSettings, SettingsConfigDict

# Settings(환경 설정)를 관리하는 클래스입니다.
# .env 파일에서 환경변수를 불러옵니다.
class Settings(BaseSettings):
    database_url: str = "postgresql://vibecoder:supersecret@localhost:5432/vibe_db"
    
    # pydantic_settings V2 방식: .env 파일에서 설정값을 읽어옵니다.
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

# 환경설정 인스턴스 생성 (다른 파일에서 가져다 씁니다)
settings = Settings()
