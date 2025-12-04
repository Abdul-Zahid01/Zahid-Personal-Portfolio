import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { PlayCircle, Plus, ThumbsUp, ChevronDown } from 'lucide-react';

interface CardProps {
  item: PortfolioItem;
  isPortrait?: boolean;
  onClick?: (item: PortfolioItem) => void;
}

const Card: React.FC<CardProps> = ({ item, isPortrait, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick(item);
    } else if (item.externalLink) {
      window.open(item.externalLink, '_blank');
    }
  };

  return (
    <div
      className={`relative flex-shrink-0 transition-all duration-300 ease-in-out cursor-pointer group ${
        isPortrait ? 'w-[200px] h-[300px]' : 'w-[280px] md:w-[320px] aspect-video'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Base Image */}
      <img
        src={item.thumbnailUrl}
        alt={item.title}
        className={`w-full h-full object-cover rounded-md ${isPortrait ? '' : ''}`}
      />

      {/* Hover Overlay / Pop-out Logic */}
      <div className={`absolute inset-0 bg-zinc-900 rounded-md shadow-2xl overflow-hidden transition-all duration-300 origin-center z-50 ${isHovered ? 'scale-110 shadow-black/50 ring-2 ring-zinc-700' : 'opacity-0 scale-100 pointer-events-none'}`}>
        
        {/* Hover Image */}
        <div className="relative h-1/2 w-full">
             <img
                src={item.thumbnailUrl}
                alt={item.title}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hover Content */}
        <div className="p-3 flex flex-col justify-between h-1/2 bg-zinc-900">
           
           {/* Actions */}
           <div className="flex items-center justify-between mb-2">
              <div className="flex space-x-2">
                 <button className="bg-white rounded-full p-1 hover:bg-zinc-200 text-black">
                    <PlayCircle className="w-5 h-5 fill-current" />
                 </button>
                 <button className="border-2 border-zinc-500 rounded-full p-1 hover:border-white text-zinc-400 hover:text-white">
                    <Plus className="w-4 h-4" />
                 </button>
                 <button className="border-2 border-zinc-500 rounded-full p-1 hover:border-white text-zinc-400 hover:text-white">
                    <ThumbsUp className="w-4 h-4" />
                 </button>
              </div>
              <button className="border-2 border-zinc-500 rounded-full p-1 hover:border-white text-zinc-400 hover:text-white">
                 <ChevronDown className="w-4 h-4" />
              </button>
           </div>

           {/* Metadata */}
           <div>
              <div className="flex items-center space-x-2 text-xs mb-1">
                 <span className="text-green-400 font-bold">{item.matchScore}% Match</span>
                 <span className="border border-zinc-600 px-1 text-[10px] text-zinc-400 uppercase">HD</span>
                 <span className="text-zinc-400">{item.year}</span>
              </div>
              
              <h4 className="text-white font-bold text-sm truncate">{item.title}</h4>
              
              <div className="flex flex-wrap gap-1 mt-1">
                 {item.tags.slice(0, 3).map(tag => (
                     <span key={tag} className="text-[10px] text-zinc-500 flex items-center">
                        <span className="w-1 h-1 bg-zinc-600 rounded-full mr-1"></span>
                        {tag}
                     </span>
                 ))}
              </div>
           </div>

        </div>
      </div>
      
      {/* Static Title */}
      {!isHovered && !isPortrait && (
          <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/90 to-transparent rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-sm font-bold truncate">{item.title}</p>
          </div>
      )}
    </div>
  );
};

export default Card;