import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const SocialLinks: React.FC = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col bg-red-600/90 backdrop-blur-md rounded-l-2xl border-l border-y border-red-500 p-3 gap-8 shadow-2xl">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center text-white hover:text-black transition-all duration-300 hover:scale-110"
          aria-label={link.platform}
        >
          <link.icon className="w-6 h-6" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {link.platform}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;