import { RESTAURANT_RESULTS } from './mockData';
import type { Restaurant } from './mockData';

export const getSearchResults = async (): Promise<Restaurant[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(RESTAURANT_RESULTS);
    }, 500); // 500ms 지연으로 네트워크 요청 시뮬레이션
  });
};
