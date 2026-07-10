import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

interface SearchFormProps {
  location: string;
  setLocation: (loc: string) => void;
  date: string;
  setDate: (date: string) => void;
  headcount: string;
  setHeadcount: (count: string) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  location, setLocation, date, setDate, headcount, setHeadcount
}) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Location Input */}
      <div className="relative w-full">
        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5e5e5e]" size={20} />
        <input 
          type="text"
          className="text-input pl-12"
          placeholder="모임 장소 (예: 강남역, 홍대 등)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Date & Headcount Input */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative">
          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5e5e5e]" size={20} />
          <input 
            type="text"
            className="text-input pl-12"
            placeholder="오늘"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="relative">
          <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5e5e5e]" size={20} />
          <input 
            type="number"
            className="text-input pl-12"
            placeholder="4명"
            value={headcount}
            onChange={(e) => setHeadcount(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
