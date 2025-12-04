import React, { useRef, useState } from 'react';
import { ContentRowProps } from '../types';
import Card from './Card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ContentRow: React.FC<ContentRowProps> = ({ title, items, isVertical = false, onCardClick }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (isVertical) {
      return (
        <div className="mb-12 px-4 md:px-12 group">
            <h2 className="text-zinc-200 text-lg md:text-2xl font-bold mb-4 flex items-center group-hover:text-white transition-colors">
                {title}
                <span className="hidden group-hover:inline-block ml-2 text-xs text-zinc-500 font-normal opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                    Chronological Order
                </span>
            </h2>
             <div className="space-y-4">
                 {items.map((item, index) => (
                    <div key={item.id} className="flex flex-col md:flex-row bg-zinc-900/50 hover:bg-zinc-800 rounded-lg p-6 border border-zinc-800 transition-all duration-300 items-start md:items-center">
                        <div className="text-4xl font-black text-zinc-700 mr-6 md:w-16 flex-shrink-0 mb-4 md:mb-0">
                            {index + 1}
                        </div>
                        <div className="flex-1">
                             <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <span className="text-zinc-500 text-sm">{item.duration}</span>
                             </div>
                             <p className="text-zinc-400 text-sm mb-4 max-w-2xl">{item.description}</p>
                             <div className="flex flex-wrap gap-2">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-xs border border-zinc-700 text-zinc-300 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                             </div>
                        </div>
                    </div>
                 ))}
             </div>
        </div>
      )
  }

  return (
    <div className="mb-8 md:mb-12 relative group/row pl-4 md:pl-12">
      <h2 className="text-zinc-200 text-lg md:text-xl font-bold mb-2 md:mb-4 hover:text-white transition-colors cursor-pointer inline-flex items-center">
        {title}
        <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover/row:opacity-100 text-cyan-400 transition-opacity text-sm" />
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <div 
            className={`absolute top-0 bottom-0 left-0 z-40 w-16 bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center justify-center cursor-pointer hover:w-20 transition-all duration-300 ${!isMoved ? 'hidden' : 'opacity-0 group-hover/row:opacity-100'}`}
            onClick={() => handleClick('left')}
        >
            <ChevronLeft className="w-10 h-10 text-white transform scale-100 hover:scale-125 transition-transform duration-200 drop-shadow-xl" />
        </div>

        {/* The Row */}
        <div 
            ref={rowRef}
            className="flex space-x-4 overflow-x-scroll scrollbar-hide hide-scrollbar py-8 px-2 -ml-2"
            style={{ scrollBehavior: 'smooth' }}
        >
            {items.map((item) => (
            <Card 
                key={item.id} 
                item={item} 
                isPortrait={item.category === 'Research'}
                onClick={onCardClick}
            />
            ))}
            
            {/* Spacer at the end */}
            <div className="w-12 flex-shrink-0"></div>
        </div>

        {/* Right Arrow */}
        <div 
            className="absolute top-0 bottom-0 right-0 z-40 w-16 bg-gradient-to-l from-black/90 via-black/60 to-transparent flex items-center justify-center cursor-pointer opacity-0 group-hover/row:opacity-100 hover:w-20 transition-all duration-300"
            onClick={() => handleClick('right')}
        >
            <ChevronRight className="w-10 h-10 text-white transform scale-100 hover:scale-125 transition-transform duration-200 drop-shadow-xl" />
        </div>
      </div>
    </div>
  );
};

export default ContentRow;