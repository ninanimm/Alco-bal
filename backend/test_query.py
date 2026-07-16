import sys
import os
from dotenv import load_dotenv

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
load_dotenv()

from app.database import SessionLocal
from app import crud

def test():
    db = SessionLocal()
    try:
        res = crud.search_restaurants(db, keyword="", lat=37.5701, lng=126.9831, drinker_ratio=50)
        print(f"Found {len(res)} restaurants.")
        if res:
            print(res[0])
    finally:
        db.close()

if __name__ == "__main__":
    test()
