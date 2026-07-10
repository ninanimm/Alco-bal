import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TopAppBar } from '../components/layout/TopAppBar';
import { BottomNavBar } from '../components/layout/BottomNavBar';
import { RestaurantCard } from '../components/search-result/RestaurantCard';
import { getRestaurants } from '../api/searchApi';
import type { Restaurant } from '../api/mockData';

export const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  
  // 기본값 설정
  const drinking = location.state?.drinking ?? 70;
  const nonDrinking = location.state?.nonDrinking ?? 30;

  useEffect(() => {
    const fetchResults = async () => {
      const data = await getRestaurants();
      setRestaurants(data);
    };
    fetchResults();
  }, []);

  const handleChangeBalance = () => {
    navigate('/balance-filter');
  };

  return (
    <div className="bg-background text-on-surface min-h-screen pb-24">
      <TopAppBar showSearch={true} />

      <main className="mt-14 p-gutter max-w-[672px] mx-auto">
        {/* Balance Summary Section */}
        <section className="mb-8 pt-4">
          <div className="flex justify-between items-end mb-3">
            <div>
              <p className="text-secondary font-body-sm mb-1">설정된 밸런스</p>
              <h2 className="font-display-md-mobile text-display-md-mobile text-primary font-bold">
                음주 {drinking}% : 비음주 {nonDrinking}%
              </h2>
            </div>
            <button 
              onClick={handleChangeBalance}
              className="text-primary font-body-md-strong border-b border-primary pb-0.5 hover:opacity-70 transition-opacity"
            >
              변경
            </button>
          </div>
          
          {/* Progress Bar Visualization */}
          <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden flex">
            <div className="h-full bg-primary transition-all duration-500" style={{ width: `${drinking}%` }}></div>
            <div className="h-full bg-surface-container-highest transition-all duration-500" style={{ width: `${nonDrinking}%` }}></div>
          </div>
          <div className="flex justify-between mt-2 font-body-sm text-secondary">
            <span>Alcohol-Friendly</span>
            <span>Non-Alcohol-Ready</span>
          </div>
        </section>

        {/* Sorting Info */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-secondary font-body-sm">총 {restaurants.length}개의 검색 결과</span>
          <div className="flex items-center gap-1 text-primary font-body-md-strong cursor-pointer">
            <span>밸런스 점수순</span>
            <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
          </div>
        </div>

        {/* Restaurant List */}
        <div className="space-y-4">
          {restaurants.map(restaurant => (
            <RestaurantCard 
              key={restaurant.id} 
              restaurant={restaurant} 
            />
          ))}
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
};
