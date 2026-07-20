from sqlalchemy import Column, Integer, String, Text, DateTime, DECIMAL, ForeignKey, Table, Boolean, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from geoalchemy2 import Geography
from .database import Base

# ==============================================================================
# 모델(Models): 데이터베이스 건물을 짓기 위한 각 방(테이블)들의 설계도입니다.
# ==============================================================================

# 다대다 관계를 위한 연결(매핑) 테이블들
# 예: 하나의 식당에 여러 태그가 달리고, 하나의 태그가 여러 식당에 쓰일 수 있으므로 이를 이어주는 역할을 합니다.

restaurant_tags = Table(
    "restaurant_tags",
    Base.metadata,
    Column("restaurant_id", Integer, ForeignKey("restaurants.id"), primary_key=True),
    Column("tag_id", Integer, ForeignKey("tags.id"), primary_key=True)
)

restaurant_non_alcohols = Table(
    "restaurant_non_alcohols",
    Base.metadata,
    Column("restaurant_id", Integer, ForeignKey("restaurants.id"), primary_key=True),
    Column("option_id", Integer, ForeignKey("non_alcohol_options.id"), primary_key=True)
)

favorite_restaurants = Table(
    "favorite_restaurants",
    Base.metadata,
    Column("user_id", Integer, ForeignKey("users.id"), primary_key=True),
    Column("restaurant_id", Integer, ForeignKey("restaurants.id"), primary_key=True)
)

class Place(Base):
    __tablename__ = "places"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=False)
    image_url = Column(String(255), nullable=False)

class Restaurant(Base):
    __tablename__ = "restaurants"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    address = Column(String(255), nullable=False, default="서울 종로구")
    location = Column(Geography('POINT', srid=4326), nullable=False)
    alcohol_score = Column(DECIMAL(3, 1), default=0.0)
    non_alcohol_score = Column(DECIMAL(3, 1), default=0.0)
    image_url = Column(String(255))
    corkage_info = Column(String(255))
    tel = Column(String(50))
    menu = Column(JSON)

    # 관계 설정 (파이썬 코드에서 쉽게 데이터를 불러오기 위함)
    tags = relationship("Tag", secondary=restaurant_tags, back_populates="restaurants")
    non_alcohol_options = relationship("NonAlcoholOption", secondary=restaurant_non_alcohols, back_populates="restaurants")
    non_alcohol_info = relationship("NonAlcoholInfo", back_populates="restaurant", uselist=False, cascade="all, delete-orphan")

class NonAlcoholInfo(Base):
    __tablename__ = "non_alcohol_info"

    restaurant_id = Column(Integer, ForeignKey("restaurants.id", ondelete="CASCADE"), primary_key=True)
    has_zero_beer = Column(Boolean, default=False)
    has_zero_wine = Column(Boolean, default=False)
    corkage_type = Column(String(20)) # 'FREE', 'CHARGE', 'NONE'
    corkage_price = Column(Integer, default=0)
    updated_at = Column(DateTime, server_default=func.now())

    restaurant = relationship("Restaurant", back_populates="non_alcohol_info")

class Tag(Base):
    __tablename__ = "tags"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), unique=True, nullable=False)

    restaurants = relationship("Restaurant", secondary=restaurant_tags, back_populates="tags")

class NonAlcoholOption(Base):
    __tablename__ = "non_alcohol_options"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), unique=True, nullable=False)

    restaurants = relationship("Restaurant", secondary=restaurant_non_alcohols, back_populates="non_alcohol_options")

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    nickname = Column(String(50))

    recent_searches = relationship("RecentSearch", back_populates="user")
    favorites = relationship("Restaurant", secondary=favorite_restaurants)

class RecentSearch(Base):
    __tablename__ = "recent_searches"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    keyword = Column(String(50), nullable=False)
    created_at = Column(DateTime, server_default=func.now())

    user = relationship("User", back_populates="recent_searches")
