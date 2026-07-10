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
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-display-md-mobile text-display-md-mobile text-primary">{restaurant.name}</h3>
              <div className="flex flex-col items-end">
                <span className="text-[24px] font-bold text-primary leading-none">{restaurant.balanceScore}</span>
                <span className="text-[10px] text-secondary uppercase tracking-tighter">Score</span>
              </div>
            </div>
            <div className="flex gap-2 mt-1 items-center text-secondary font-body-sm">
              <span className="material-symbols-outlined text-[14px]">location_on</span>
              <span>{restaurant.location} · {restaurant.distance}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {restaurant.tags.map((tag, index) => (
              <span key={index} className="px-2 py-0.5 bg-surface-container-low text-on-surface-variant font-body-sm rounded-full text-[12px]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
