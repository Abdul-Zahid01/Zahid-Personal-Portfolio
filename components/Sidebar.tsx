import React from 'react';
import { NAV_ITEMS } from '../constants';
import { User, Bell, Search } from 'lucide-react';

interface SidebarProps {
    onNavigate: (view: string, id?: string) => void;
    currentView: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate, currentView }) => {
  
  const handleNavClick = (e: React.MouseEvent, id: string) => {
      e.preventDefault();
      if (id === 'projects') {
          onNavigate('projects');
      } else {
          onNavigate('home', id);
      }
  };

  return (
    <div className="hidden md:flex flex-col w-64 h-screen bg-black fixed left-0 top-0 z-50 overflow-y-auto border-r border-zinc-800/50 pb-10">
      {/* Logo Area */}
      <div className="p-8 pb-4">
        <h1 className="text-3xl font-black tracking-tighter text-red-600 uppercase" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.5)' }}>
          ABDUL ZAHID
        </h1>
        <p className="text-xs text-zinc-400 mt-1 tracking-widest uppercase">Personal Portfolio</p>
      </div>

      {/* Main Nav */}
      <div className="px-4 mt-6">
        <h3 className="text-xs font-bold text-zinc-500 uppercase px-4 mb-2">Discover</h3>
        <nav className="flex flex-col space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = currentView === 'projects' && item.id === 'projects';
            return (
                <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`flex items-center px-4 py-3 rounded-md transition-all group ${isActive ? 'bg-zinc-900 text-white' : 'text-zinc-300 hover:text-white hover:bg-zinc-900'}`}
                >
                <item.icon className={`w-5 h-5 mr-3 transition-colors ${isActive ? 'text-red-600' : 'text-zinc-500 group-hover:text-red-500'}`} />
                <span className={`font-medium ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
                </a>
            );
          })}
        </nav>
      </div>

      {/* Secondary / Socials */}
      <div className="mt-auto px-4 mb-8">
        <div className="h-px w-full bg-zinc-800 mb-6"></div>
        <div className="flex items-center px-4 text-zinc-400 space-x-4">
            <User className="w-6 h-6 hover:text-white cursor-pointer" />
            <Bell className="w-6 h-6 hover:text-white cursor-pointer" />
            <Search className="w-6 h-6 hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;