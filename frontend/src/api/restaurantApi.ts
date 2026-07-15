import type { Restaurant } from './mockData';

const BASE_URL = 'http://localhost:8080/api/v1'; // [변경됨] 진짜 백엔드 서버 주소로 연결했습니다.

export const getSearchResults = async (keyword: string = ""): Promise<Restaurant[]> => {
  const url = new URL(`${BASE_URL}/restaurants`); // [추가] 검색어에 맞춰 백엔드에 요청합니다.
  if (keyword) {
    url.searchParams.append('keyword', keyword);
  } else {
    url.searchParams.append('keyword', '');
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error('Failed to fetch search results');
  }
  return response.json();
};
