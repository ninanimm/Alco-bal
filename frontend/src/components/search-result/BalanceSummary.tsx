import React from 'react';

interface BalanceSummaryProps {
  alcoholRatio: number;
  nonAlcoholRatio: number;
  onChangeClick?: () => void;
}

export const BalanceSummary: React.FC<BalanceSummaryProps> = ({
  alcoholRatio,
  nonAlcoholRatio,
  onChangeClick
}) => {
  return (
    <div className="flex flex-col gap-3 py-4">
      <div className="flex justify-between items-center">
        <span className="text-body-md-strong text-ink">
          음주 {alcoholRatio}% : 비음주 {nonAlcoholRatio}%
        </span>
        <button 
          onClick={onChangeClick}
          className="px-3 py-1 bg-[#efefef] text-body-sm text-ink rounded-pill font-medium active:scale-95 transition-transform"
        >
          변경
        </button>
      </div>
      
      {/* 프로그레스 바 */}
      <div className="w-full h-3 bg-[#efefef] rounded-pill overflow-hidden flex">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${alcoholRatio}%` }}
        />
        {/* 비음주 영역은 배경색(연회색)으로 자연스럽게 노출됨 */}
      </div>
    </div>
  );
};
