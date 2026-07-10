import React from 'react';
import { Home, Search, Heart, User } from 'lucide-react';

export const BottomNavBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[56px] bg-canvas border-t border-[#e2e2e2] flex items-center justify-around z-40 pb-safe md:hidden">
      <button className="flex flex-col items-center justify-center text-ink w-full h-full active:bg-canvas-soft transition-colors">
        <Home size={24} />
      </button>
      <button className="flex flex-col items-center justify-center text-[#5e5e5e] w-full h-full active:bg-canvas-soft transition-colors">
        <Search size={24} />
      </button>
      <button className="flex flex-col items-center justify-center text-[#5e5e5e] w-full h-full active:bg-canvas-soft transition-colors">
        <Heart size={24} />
      </button>
      <button className="flex flex-col items-center justify-center text-[#5e5e5e] w-full h-full active:bg-canvas-soft transition-colors">
        <User size={24} />
      </button>
    </div>
  );
};
