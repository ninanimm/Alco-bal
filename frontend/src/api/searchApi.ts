import { RECENT_SEARCHES, HOT_PLACES, type HotPlace, RESTAURANT_RESULTS, type Restaurant } from './mockData';

// 실제 백엔드 연동 전까지 Mock Data를 반환하는 API 함수들

export const getRecentSearches = async (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(RECENT_SEARCHES);
    }, 300); // 300ms 지연으로 네트워크 요청 시뮬레이션
  });
};

export const getHotPlaces = async (): Promise<HotPlace[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(HOT_PLACES);
    }, 300);
  });
};

export const getRestaurants = async (): Promise<Restaurant[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(RESTAURANT_RESULTS);
    }, 300);
  });
};
