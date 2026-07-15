import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopAppBar } from '../components/search-result/TopAppBar';
import { BalanceSummary } from '../components/search-result/BalanceSummary';
import { SortingBar } from '../components/search-result/SortingBar';
import { RestaurantCard } from '../components/search-result/RestaurantCard';
import { BottomNavBar } from '../components/common/BottomNavBar';
import { getSearchResults } from '../api/restaurantApi';
import type { Restaurant } from '../api/mockData';

export const SearchResultPage: React.FC = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 현재 밸런스 비율 상태 (임시로 70:30 사용)
  const [alcoholRatio] = useState(70);
  const [nonAlcoholRatio] = useState(30);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getSearchResults();
      setRestaurants(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSearchClick = () => {
    alert("검색을 다시 수행합니다.");
  };

  const handleBalanceChangeClick = () => {
    alert("비율 변경 팝업 또는 화면이 나타납니다.");
  };

  const handleSortClick = () => {
    alert("정렬 기준을 선택할 수 있는 메뉴가 나타납니다.");
  };

  const handleCardClick = (restaurant: Restaurant) => {
    alert(`'${restaurant.name}' 상세 페이지로 진입합니다.`);
  };


  return (
    <div className="min-h-screen bg-canvas pb-[130px] md:pb-[80px] relative">
      <TopAppBar 
        onBackClick={handleBackClick}
        onSearchClick={handleSearchClick}
      />

      {/* Main Content Area - max-w-2xl 적용하여 모바일 가독성 고려 */}
      <main className="px-4 mt-14 max-w-2xl mx-auto flex flex-col">
        <BalanceSummary 
          alcoholRatio={alcoholRatio}
          nonAlcoholRatio={nonAlcoholRatio}
          onChangeClick={handleBalanceChangeClick}
        />

        {isLoading ? (
          <div className="py-20 text-center text-body-md text-[#5e5e5e]">
            매칭 결과를 불러오는 중입니다...
          </div>
        ) : (
          <>
            <SortingBar 
              totalCount={restaurants.length}
              currentSort="밸런스 점수순"
              onSortClick={handleSortClick}
            />

            {/* 카드 리스트 목록 */}
            <div className="flex flex-col gap-4 pb-10">
              {restaurants.map(restaurant => (
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                  onClick={() => handleCardClick(restaurant)}

                />
              ))}
            </div>
          </>
        )}
      </main>

      <BottomNavBar />
    </div>
  );
};
