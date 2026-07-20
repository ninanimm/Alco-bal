import json
import random
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import sys
import os
from dotenv import load_dotenv

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
load_dotenv()

from app.models import Base, Restaurant, NonAlcoholInfo
from app.database import SQLALCHEMY_DATABASE_URL

def seed():
    print("Connecting to DB...")
    engine = create_engine(SQLALCHEMY_DATABASE_URL)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    
    # Drop all existing tables to ensure clean schema, then create
    print("Dropping old tables and recreating schema...")
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
            
    db = SessionLocal()
    
    # Clear existing data for fresh seed
    print("Clearing old data...")
    db.query(Restaurant).delete()
    db.commit()
    
    print("Reading restaurants.json (Seongsu data)...")
    try:
        with open("restaurants.json", "r", encoding="utf-8") as f:
            restaurants = json.load(f)
    except FileNotFoundError:
        print("restaurants.json 파일을 찾을 수 없습니다. 크롤러를 먼저 실행해주세요.")
        return

    count = 0
    random.seed(42) # 결과 재현성을 위해 시드 고정
    
    for idx, r_data in enumerate(restaurants):
        try:
            name = r_data.get('name', f'Restaurant {idx}')
            address = r_data.get('address', '서울 성동구 성수동')
            tel = r_data.get('tel', '')
            menu = r_data.get('menu', [])
            
            # 성수동 부근 임의의 좌표 생성 (약 37.544, 127.055 부근)
            lat = 37.544 + random.uniform(-0.005, 0.005)
            lon = 127.055 + random.uniform(-0.005, 0.005)
                
            location = f"SRID=4326;POINT({lon} {lat})"
            
            # 음주/비음주 점수 부여 (테스트용)
            if idx % 3 == 0:
                alk_score = random.randint(85, 99)
                non_alk_score = random.randint(30, 50)
            elif idx % 3 == 1:
                alk_score = random.randint(30, 60)
                non_alk_score = random.randint(85, 99)
            else:
                alk_score = random.randint(70, 85)
                non_alk_score = random.randint(70, 85)
            
            r = Restaurant(
                name=name,
                address=address,
                location=location,
                alcohol_score=alk_score,
                non_alcohol_score=non_alk_score,
                image_url=f"https://picsum.photos/seed/{idx+1000}/300/200",
                tel=tel,
                menu=menu
            )
            db.add(r)
            db.flush()
            
            n = NonAlcoholInfo(
                restaurant_id=r.id,
                has_zero_beer=random.choice([True, False]),
                has_zero_wine=random.choice([True, False]),
                corkage_type=random.choice(['FREE', 'CHARGE', 'NONE']),
                corkage_price=random.choice([0, 10000, 20000, 30000])
            )
            db.add(n)
            
            count += 1
            if count % 10 == 0:
                print(f"Inserted {count} restaurants...")
                
        except Exception as e:
            print(f"Error on row {idx}: {e}")
            continue
            
    db.commit()
    db.close()
    print(f"Seeding completed successfully! Total inserted: {count}")

if __name__ == "__main__":
    seed()
