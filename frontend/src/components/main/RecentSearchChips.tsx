import React from 'react';

interface RecentSearchChipsProps {
  searches: string[];
  onChipClick: (search: string) => void;
  onClearAll: () => void;
}

export const RecentSearchChips: React.FC<RecentSearchChipsProps> = ({
  searches, onChipClick, onClearAll
}) => {
  if (searches.length === 0) return null;

  return (
    <div className="w-full mt-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-body-md font-bold text-ink">최근 검색어</h3>
        <button 
          onClick={onClearAll}
          className="text-body-sm text-[#5e5e5e] hover:text-ink transition-colors"
        >
          전체 삭제
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {searches.map((search, index) => (
          <button
            key={index}
            onClick={() => onChipClick(search)}
            className="button-subtle px-4 py-2 text-body-sm active:scale-95 transition-transform"
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  );
};
