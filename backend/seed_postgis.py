import pandas as pd
import random
import math
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from pyproj import Transformer
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
    
    print("Reading CSV...")
    df = pd.read_csv('../jongro.csv')
    df = df.dropna(subset=['좌표정보(X)', '좌표정보(Y)'])
    
    # epsg:2097 (Bessel Korea Middle Belt) to epsg:4326 (WGS84)
    transformer = Transformer.from_crs("epsg:2097", "epsg:4326", always_xy=True)
    
    count = 0
    for idx, row in df.iterrows():
        try:
            name = str(row.get('사업장명', f'Restaurant {idx}'))
            address = str(row.get('도로명주소', '서울 종로구'))
            if pd.isna(address) or address == 'nan':
                address = str(row.get('지번주소', '서울 종로구'))
                
            x = float(row['좌표정보(X)'])
            y = float(row['좌표정보(Y)'])
            
            lon, lat = transformer.transform(x, y)
            
            if math.isnan(lon) or math.isnan(lat):
                continue
                
            location = f"SRID=4326;POINT({lon} {lat})"
            
            alk_score = random.randint(30, 99)
            non_alk_score = random.randint(30, 99)
            
            r = Restaurant(
                name=name,
                address=address,
                location=location,
                alcohol_score=alk_score,
                non_alcohol_score=non_alk_score,
                image_url=f"https://picsum.photos/seed/{idx}/300/200"
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
            if count % 100 == 0:
                print(f"Inserted {count} restaurants...")
                
        except Exception as e:
            print(f"Error on row {idx}: {e}")
            continue
            
    db.commit()
    db.close()
    print(f"Seeding completed successfully! Total inserted: {count}")

if __name__ == "__main__":
    seed()
