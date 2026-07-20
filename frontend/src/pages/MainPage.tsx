import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopAppBar } from '../components/layout/TopAppBar';
import { BottomNavBar } from '../components/layout/BottomNavBar';
import { getRecentSearches, getHotPlaces } from '../api/searchApi';
import type { HotPlace } from '../api/mockData';

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [headcount, setHeadcount] = useState('');
  
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [hotPlaces, setHotPlaces] = useState<HotPlace[]>([]);

  useEffect(() => {
    const fetchMockData = async () => {
      const searches = await getRecentSearches();
      const places = await getHotPlaces();
      setRecentSearches(searches);
      setHotPlaces(places);
    };
    fetchMockData();
  }, []);

  const handleNextStep = () => {
    navigate('/balance-filter', { state: { location, date, headcount } });
  };

  const handleClearAll = () => {
    setRecentSearches([]);
  };

  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* TopAppBar */}
      <TopAppBar />

      <main className="pt-20 pb-32 px-gutter max-w-[448px] mx-auto">
        <section className="mb-xxl">
          <h2 className="font-display-md text-display-md text-primary mb-lg">모임을 위한<br/>기본 정보를 알려주세요</h2>
          
          {/* Input Fields Cluster */}
          <div className="space-y-md">
            {/* Location Input */}
            <div className="space-y-xs">
              <label className="font-body-sm text-secondary px-1">모임 장소</label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-4 text-secondary pointer-events-none">location_on</span>
                <input 
                  className="w-full h-14 pl-12 pr-4 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary text-body-md transition-all" 
                  placeholder="예: 강남역, 홍대" 
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            
            {/* Date & People (Grid) */}
            <div className="grid grid-cols-2 gap-md">
              <div className="space-y-xs">
                <label className="font-body-sm text-secondary px-1">날짜</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-secondary pointer-events-none">calendar_today</span>
                  <input 
                    className="w-full h-14 pl-12 pr-4 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary text-body-md transition-all" 
                    placeholder="오늘" 
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-xs">
                <label className="font-body-sm text-secondary px-1">전체 인원수</label>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-secondary pointer-events-none">group</span>
                  <input 
                    className="w-full h-14 pl-12 pr-4 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary text-body-md transition-all" 
                    placeholder="4명" 
                    type="number"
                    value={headcount}
                    onChange={(e) => setHeadcount(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Suggestions */}
        <section className="mb-xxl">
          <div className="flex items-center justify-between mb-sm">
            <h3 className="font-body-md-strong text-primary">최근 검색어</h3>
            <button onClick={handleClearAll} className="text-body-sm text-secondary underline">전체 삭제</button>
          </div>
          <div className="flex flex-wrap gap-xs">
            {recentSearches.map((search, index) => (
              <button 
                key={index}
                onClick={() => setLocation(search)}
                className="px-4 py-2 bg-surface-container-low text-on-surface rounded-full text-body-sm hover:bg-surface-container-high transition-colors active:scale-95"
              >
                {search}
              </button>
            ))}
          </div>
        </section>

        {/* Recommended Destinations (Bento Style) */}
        <section className="mb-xxl">
          <h3 className="font-body-md-strong text-primary mb-md">추천 핫플레이스</h3>
          <div className="grid grid-cols-2 gap-sm">
            {hotPlaces.map(place => (
              <div 
                key={place.id}
                onClick={() => setLocation(place.name)}
                className="relative h-32 rounded-xl overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform"
              >
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" 
                  style={{ backgroundImage: `url('${place.imageUrl}')` }}
                ></div>
                <span className="absolute bottom-3 left-3 z-20 text-white font-body-md-strong">{place.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Button */}
        <button 
          onClick={handleNextStep}
          className="w-full bg-primary text-on-primary h-14 rounded-full font-body-md-strong hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shadow-sm"
        >
          <span>다음 단계</span>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </main>

      {/* BottomNavBar */}
      <BottomNavBar />
    </div>
  );
};
