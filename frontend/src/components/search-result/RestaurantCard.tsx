import React from 'react';
import type { Restaurant } from '../../api/mockData';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick?: () => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onClick }) => {
  return (
    <div
      className="bg-surface-container-lowest rounded-xl p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.05)] border border-surface-container-highest transition-transform active:scale-[0.98] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex gap-4">
        {/* 식당 이미지 */}
        <div className="w-24 h-24 rounded-lg bg-surface-container flex-shrink-0 relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            alt={restaurant.name}
            src={restaurant.imageUrl}
          />
          {restaurant.isFavorite && (
            <div className="absolute top-1 right-1 bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </div>
          )}
        </div>

        {/* 식당 정보 */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {/* 이름 + 점수 */}
            <div className="flex justify-between items-start">
              <h3 className="font-display-md-mobile text-display-md-mobile text-primary">{restaurant.name}</h3>
              <div className="flex flex-col items-end">
                <span className="text-[24px] font-bold text-primary leading-none">{restaurant.balanceScore}</span>
                <span className="text-[10px] text-secondary uppercase tracking-tighter">Score</span>
              </div>
            </div>

            {/* 주소 + 거리 */}
            <div className="flex gap-2 mt-1 items-center text-secondary font-body-sm">
              <span className="material-symbols-outlined text-[14px]">location_on</span>
              <span>{restaurant.location} · {restaurant.distance}</span>
            </div>

            {/* ✅ 추천 이유 (실데이터 기반 표시) */}
            {restaurant.recommendationReason && (
              <div className="mt-1.5 flex items-center gap-1 text-sm font-medium text-primary">
                <span className="material-symbols-outlined text-[14px]">recommend</span>
                <span>{restaurant.recommendationReason}</span>
              </div>
            )}

            {/* ✅ 메뉴 목록 (최대 3개 표시) */}
            {restaurant.menu && restaurant.menu.length > 0 && (
              <div className="mt-1 text-xs text-secondary">
                🍽 {restaurant.menu.slice(0, 3).join(' · ')}
              </div>
            )}

            {/* ✅ 콜키지 정보 */}
            {restaurant.corkageInfo && (
              <div className="mt-1 text-xs flex items-center gap-1 text-primary">
                <span className="material-symbols-outlined text-[12px]">local_bar</span>
                {restaurant.corkageInfo === 'FREE' ? '콜키지 무료' : `콜키지 ${restaurant.corkageInfo}`}
              </div>
            )}
          </div>

          {/* 태그 목록 */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {/* ✅ 논알콜 옵션을 태그처럼 표시 */}
            {restaurant.nonAlcoholOptions && restaurant.nonAlcoholOptions.map((opt, index) => (
              <span key={`noa-${index}`} className="px-2 py-0.5 bg-green-100 text-green-700 font-body-sm rounded-full text-[11px]">
                🥤 {opt}
              </span>
            ))}
            {restaurant.tags && restaurant.tags.map((tag, index) => (
              <span key={`tag-${index}`} className="px-2 py-0.5 bg-surface-container-low text-on-surface-variant font-body-sm rounded-full text-[12px]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
