import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TopAppBarProps {
  showSearch?: boolean;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({ showSearch = false }) => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full z-50 flex items-center justify-between px-gutter h-14 bg-surface dark:bg-on-background border-b border-surface-container-highest dark:border-inverse-surface">
      <div className="flex items-center gap-2">
        <button 
          onClick={() => navigate(-1)}
          className="hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-150"
        >
          <span className="material-symbols-outlined text-primary dark:text-on-primary">arrow_back</span>
        </button>
        <h1 className="font-display-md-mobile text-display-md-mobile font-bold text-primary dark:text-on-primary tracking-tighter ml-2">SUL-BAL</h1>
      </div>
      {showSearch ? (
        <button className="material-symbols-outlined text-primary dark:text-on-primary hover:opacity-80 transition-opacity active:scale-95 duration-150">search</button>
      ) : (
        <div className="w-6"></div> /* Spacer for balance */
      )}
    </header>
  );
};
