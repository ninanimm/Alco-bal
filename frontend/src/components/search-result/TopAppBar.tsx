import React from 'react';

interface TopAppBarProps {
  title?: string;
  onBackClick?: () => void;
  onSearchClick?: () => void;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({ 
  title = "SUL-BAL 매칭 결과", 
  onBackClick, 
  onSearchClick 
}) => {
  return (
    <div className="fixed top-0 left-0 right-0 h-14 bg-canvas z-50 flex items-center justify-between px-4">
      {/* 뒤로가기 버튼 */}
      <button 
        onClick={onBackClick} 
        className="w-10 h-10 flex items-center justify-start"
        aria-label="뒤로가기"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* 타이틀 */}
      <h1 className="text-body-lg font-bold text-ink truncate flex-1 text-center">
        {title}
      </h1>

      {/* 검색 버튼 */}
      <button 
        onClick={onSearchClick}
        className="w-10 h-10 flex items-center justify-end"
        aria-label="검색"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};
