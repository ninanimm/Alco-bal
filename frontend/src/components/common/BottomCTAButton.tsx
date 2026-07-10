import React from 'react';

interface BottomCTAButtonProps {
  onClick: () => void;
  label: string;
}

export const BottomCTAButton: React.FC<BottomCTAButtonProps> = ({ onClick, label }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-canvas border-t border-[#e2e2e2] z-50 md:hidden">
      <button 
        className="button-primary active:scale-95 transition-transform"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};
