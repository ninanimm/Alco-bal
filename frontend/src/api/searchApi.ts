import type { HotPlace, Restaurant } from './mockData';

const BASE_URL = 'https://alco-bal.vercel.app/api/v1'; // [변경됨] 진짜 백엔드 서버 주소로 변경했습니다.

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

export const getRestaurants = async (
  keyword: string = "",
  drinker_ratio: number = 50,
  date: string = "",
  total_people: string = ""
): Promise<Restaurant[]> => {
  const url = new URL(`${BASE_URL}/restaurants`);
  
  url.searchParams.append('keyword', keyword);
  url.searchParams.append('drinker_ratio', drinker_ratio.toString());
  
  if (date) {
    url.searchParams.append('date', date);
  }
  
  if (total_people) {
    // 백엔드는 int를 받으므로 숫자만 추출하거나 그냥 전달합니다. (백엔드가 Optional[int]로 받음)
    const peopleInt = parseInt(total_people.replace(/[^0-9]/g, ''));
    if (!isNaN(peopleInt)) {
      url.searchParams.append('total_people', peopleInt.toString());
    }
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('Failed to fetch restaurants');
  }
  return response.json();
};
