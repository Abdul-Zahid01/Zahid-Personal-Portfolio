import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import ContentRow from './components/ContentRow';
import SocialLinks from './components/SocialLinks';
import ProjectDetailView from './components/ProjectDetailView';
import { PROJECTS, RESEARCH, EXPERIENCE } from './constants';
import { Menu } from 'lucide-react';
import { PortfolioItem } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'projects'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleNavigate = (view: string, id?: string) => {
      if (view === 'projects') {
          setCurrentView('projects');
          // Default to first project if none selected yet
          if (!selectedProjectId) {
              setSelectedProjectId(PROJECTS[0].id);
          }
      } else {
          setCurrentView('home');
          if (id) {
            // Allow time for render before scrolling
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
          } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
          }
      }
  };

  const handleProjectSelect = (item: PortfolioItem) => {
      if (item.category === 'Project') {
          setSelectedProjectId(item.id);
          setCurrentView('projects');
      } else if (item.externalLink) {
          window.open(item.externalLink, '_blank');
      }
  };

  // Find currently selected project object
  const currentProject = PROJECTS.find(p => p.id === selectedProjectId) || PROJECTS[0];

  return (
    <div className="flex bg-black text-white min-h-screen font-sans selection:bg-red-600 selection:text-white">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md px-4 py-3 flex justify-between items-center border-b border-zinc-800">
         <span className="text-red-600 font-black text-xl">A.ZAHID</span>
         <Menu className="w-6 h-6" />
      </div>

      {/* Sidebar Navigation */}
      <Sidebar onNavigate={handleNavigate} currentView={currentView} />

      {/* Right Social Links Bar */}
      <SocialLinks />

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 w-full relative overflow-x-hidden">
        
        {currentView === 'home' ? (
            <>
                {/* Hero Section */}
                <Hero />

                {/* Content Stacks */}
                <div className="relative z-20 -mt-24 md:-mt-48 pb-20 bg-gradient-to-t from-black via-black to-transparent pt-20">
                
                <div id="projects">
                    <ContentRow 
                        title="Trending Projects" 
                        items={PROJECTS} 
                        onCardClick={handleProjectSelect}
                    />
                </div>

                <div id="research">
                    <ContentRow 
                        title="Research & Documentaries" 
                        items={RESEARCH} 
                        // Research items generally open links, which is handled by Card default if no onCardClick logic for them specifically
                    />
                </div>

                <div id="experience" className="mt-8">
                    <ContentRow 
                        title="Education & Experience: Limited Series" 
                        items={EXPERIENCE} 
                        isVertical={true}
                    />
                </div>

                {/* Footer */}
                <footer className="mt-20 px-12 text-zinc-500 text-sm pb-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <a href="#" className="hover:underline">Audio Description</a>
                        <a href="#" className="hover:underline">Investor Relations</a>
                        <a href="#" className="hover:underline">Legal Notices</a>
                        <a href="#" className="hover:underline">Service Code</a>
                    </div>
                    <p>&copy; 2024 Abdul Zahid Portfolio. Built with React & Tailwind.</p>
                </footer>

                </div>
            </>
        ) : (
            <ProjectDetailView 
                project={currentProject} 
                allProjects={PROJECTS}
                onProjectSelect={handleProjectSelect}
            />
        )}
      </main>
    </div>
  );
};

export default App;