import type { HotPlace, Restaurant } from './mockData';

const BASE_URL = 'http://localhost:8080/api/v1'; // [변경됨] 진짜 백엔드 서버 주소로 변경했습니다.

export const getRecentSearches = async (): Promise<string[]> => {
  const response = await fetch(`${BASE_URL}/search/recent`); // [추가] 백엔드에 최근 검색어를 요청합니다.
  if (!response.ok) {
    throw new Error('Failed to fetch recent searches');
  }
  return response.json();
};

export const getHotPlaces = async (): Promise<HotPlace[]> => {
  const response = await fetch(`${BASE_URL}/places/hot`);
  if (!response.ok) {
    throw new Error('Failed to fetch hot places');
  }
  return response.json();
};

export const getRestaurants = async (keyword: string = ""): Promise<Restaurant[]> => {
  const url = new URL(`${BASE_URL}/restaurants`);
  if (keyword) {
    url.searchParams.append('keyword', keyword);
  } else {
    // 백엔드는 keyword를 필수로 받게 되어있지만 빈문자열도 허용합니다. (query = query)
    url.searchParams.append('keyword', '');
  }
  
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('Failed to fetch restaurants');
  }
  return response.json();
};
