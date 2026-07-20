import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TopAppBar } from '../components/layout/TopAppBar';
import { BottomNavBar } from '../components/layout/BottomNavBar';

export const BalanceFilterPage: React.FC = () => {
  const locationState = useLocation();
  const navigate = useNavigate();
  const [sliderValue, setSliderValue] = useState(50);
  
  const drinking = 100 - sliderValue;
  const nonDrinking = sliderValue;

  const handleNextStep = () => {
    navigate('/search-result', { 
      state: { 
        ...locationState.state, 
        drinking, 
        nonDrinking 
      } 
    });
  };

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
      <TopAppBar />

      <main className="flex-1 mt-14 mb-24 px-gutter flex flex-col justify-center max-w-[512px] mx-auto w-full">
        {/* Instruction Section */}
        <div className="mb-12 text-center mt-8">
          <h2 className="font-display-md text-display-md mb-2 text-primary">원터치 밸런스 필터</h2>
          <p className="font-body-md text-secondary">함께하는 멤버들의 성향을 조절해주세요</p>
        </div>

        {/* Ratio Display */}
        <div className="flex items-end justify-between mb-8 px-2">
          <div className="text-left" style={{ transform: drinking > nonDrinking ? `scale(${1 + (drinking - 50) / 200})` : 'scale(1)', transition: 'transform 0.2s' }}>
            <span className="font-body-sm text-secondary uppercase block mb-1">DRINKING</span>
            <span className={`font-display-xxl text-display-xxl leading-none ${drinking > nonDrinking ? 'text-primary' : 'text-secondary'}`}>
              {drinking}
            </span>
            <span className="text-display-md font-bold">%</span>
          </div>
          <div className="pb-2">
            <span className="font-display-md text-display-md text-surface-container-highest">:</span>
          </div>
          <div className="text-right" style={{ transform: nonDrinking > drinking ? `scale(${1 + (nonDrinking - 50) / 200})` : 'scale(1)', transition: 'transform 0.2s' }}>
            <span className="font-body-sm text-secondary uppercase block mb-1">NON-DRINKING</span>
            <span className={`font-display-xxl text-display-xxl leading-none ${nonDrinking > drinking ? 'text-primary' : 'text-secondary'}`}>
              {nonDrinking}
            </span>
            <span className="text-display-md font-bold">%</span>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative bg-surface-container-low rounded-xl p-8 mb-8 border border-surface-container-highest">
          <div className="flex justify-between mb-4 font-body-sm text-secondary px-1">
            <span>음주 선호</span>
            <span>비음주 선호</span>
          </div>
          <input 
            className="w-full appearance-none bg-transparent focus:outline-none mb-2" 
            style={{
              WebkitAppearance: 'none',
            }}
            type="range" 
            min="0" 
            max="100" 
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
          />
          {/* Injecting CSS for the slider thumb and track */}
          <style>{`
            input[type=range]::-webkit-slider-runnable-track {
              width: 100%;
              height: 12px;
              cursor: pointer;
              background: #EEEEEE;
              border-radius: 999px;
              border: none;
            }
            input[type=range]::-webkit-slider-thumb {
              height: 32px;
              width: 32px;
              border-radius: 999px;
              background: #000000;
              cursor: pointer;
              -webkit-appearance: none;
              margin-top: -10px;
              box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
              transition: transform 0.1s ease;
            }
            input[type=range]:active::-webkit-slider-thumb {
              transform: scale(1.1);
            }
            @keyframes pulse-subtle {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.6; }
            }
            .animate-pulse-subtle {
              animation: pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
          `}</style>
          
          <div className="mt-8 flex items-center justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-subtle"></div>
            <p className="font-body-sm text-secondary">밸런스 매칭 알고리즘 가중치 반영 중</p>
          </div>
        </div>

        {/* Visual Context Card */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-surface-container rounded-xl p-4 flex flex-col items-center justify-center aspect-square border border-surface-container-highest group hover:bg-white transition-colors duration-300">
            <span className="material-symbols-outlined text-4xl mb-2 text-primary">local_bar</span>
            <span className="font-body-md-strong text-primary">술자리 중심</span>
            <p className="font-body-sm text-secondary text-center mt-1">안주 맛집 & 분위기</p>
          </div>
          <div className="bg-surface-container rounded-xl p-4 flex flex-col items-center justify-center aspect-square border border-surface-container-highest group hover:bg-white transition-colors duration-300">
            <span className="material-symbols-outlined text-4xl mb-2 text-primary">restaurant</span>
            <span className="font-body-md-strong text-primary">식사 중심</span>
            <p className="font-body-sm text-secondary text-center mt-1">카페 & 프리미엄 다이닝</p>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={handleNextStep}
          className="w-full bg-primary text-on-primary h-14 rounded-full font-body-md-strong hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shadow-sm"
        >
          <span>매칭 결과 보기</span>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </main>

      <BottomNavBar />
    </div>
  );
};
