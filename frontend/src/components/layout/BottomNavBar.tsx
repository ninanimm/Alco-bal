import React from 'react';

export const BottomNavBar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-gutter py-2 pb-safe bg-surface dark:bg-on-background border-t border-surface-container-highest dark:border-inverse-surface shadow-sm">
      <button className="flex flex-col items-center justify-center text-primary dark:text-on-primary font-body-md-strong hover:bg-surface-container-low dark:hover:bg-inverse-surface transition-transform active:scale-95 duration-200 p-2">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>search</span>
        <span className="font-body-sm text-body-sm">탐색</span>
      </button>
      <button className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-low dark:hover:bg-inverse-surface transition-transform active:scale-95 duration-200 p-2">
        <span className="material-symbols-outlined">favorite</span>
        <span className="font-body-sm text-body-sm">저장</span>
      </button>
      <button className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-low dark:hover:bg-inverse-surface transition-transform active:scale-95 duration-200 p-2">
        <span className="material-symbols-outlined">calendar_today</span>
        <span className="font-body-sm text-body-sm">예약</span>
      </button>
      <button className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-low dark:hover:bg-inverse-surface transition-transform active:scale-95 duration-200 p-2">
        <span className="material-symbols-outlined">person</span>
        <span className="font-body-sm text-body-sm">내 정보</span>
      </button>
    </nav>
  );
};
