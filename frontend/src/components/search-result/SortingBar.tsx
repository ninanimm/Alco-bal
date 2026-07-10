import React from 'react';

interface SortingBarProps {
  totalCount: number;
  currentSort: string;
  onSortClick?: () => void;
}

export const SortingBar: React.FC<SortingBarProps> = ({
  totalCount,
  currentSort,
  onSortClick
}) => {
  return (
    <div className="flex justify-between items-center py-2 mb-2">
      <span className="text-body-sm font-bold text-ink">
        총 {totalCount}개
      </span>
      <button 
        onClick={onSortClick}
        className="flex items-center gap-1 text-body-sm text-[#5e5e5e] active:scale-95 transition-transform"
      >
        {currentSort}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};
