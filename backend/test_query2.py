import sys
import os
import logging
from dotenv import load_dotenv

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
load_dotenv()

import logging
logging.basicConfig()
logging.getLogger("sqlalchemy.engine").setLevel(logging.INFO)

from app.database import engine, SessionLocal
from app import crud

def test():
    db = SessionLocal()
    try:
        print("Executing search_restaurants...")
        res = crud.search_restaurants(db, keyword="", lat=37.5701, lng=126.9831, drinker_ratio=50)
        print(f"Found {len(res)} restaurants.")
    except Exception as e:
        print("Error:", e)
    finally:
        db.close()

if __name__ == "__main__":
    test()
