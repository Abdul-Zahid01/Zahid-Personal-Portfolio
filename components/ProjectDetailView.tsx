import React, { useEffect } from 'react';
import { PortfolioItem } from '../types';
import ContentRow from './ContentRow';
import { Github, Linkedin, Globe } from 'lucide-react';

interface ProjectDetailViewProps {
  project: PortfolioItem;
  allProjects: PortfolioItem[];
  onProjectSelect: (item: PortfolioItem) => void;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project, allProjects, onProjectSelect }) => {
  
  // Scroll to top when the project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  return (
    <div className="min-h-screen bg-black pt-24 md:pt-32 pb-20 animate-fade-in">
      <div className="px-6 md:px-12 lg:px-20">
        
        {/* Top Section: Split Layout - Modified Ratios */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 mb-20">
          
          {/* Left Column: Image (Smaller now, approx 30-35%) */}
          <div className="w-full md:w-[35%] lg:w-[30%] flex-shrink-0 flex flex-col gap-6">
             <div className="relative aspect-[4/3] md:aspect-[3/4] lg:aspect-square w-full overflow-hidden rounded-lg shadow-2xl shadow-red-900/10 border border-zinc-800">
                <img 
                    src={project.thumbnailUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             </div>

             {/* Tech Stack List - Moved here to fill space under image */}
             <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-medium rounded-full border border-zinc-700">
                            {tag}
                        </span>
                    ))}
                </div>
             </div>
          </div>

          {/* Right Column: Description & Metadata (Larger now, approx 65-70%) */}
          <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col">
            
            {/* Title & Stats */}
            <div className="mb-8">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight">{project.title}</h1>
                <div className="flex items-center space-x-4 text-sm md:text-base font-medium">
                    <span className="text-green-500 font-bold">{project.matchScore}% Match</span>
                    <span className="text-zinc-400">{project.year}</span>
                    <span className="border border-zinc-500 px-1 text-xs text-zinc-300 rounded uppercase">HD</span>
                    <span className="text-zinc-400">{project.duration}</span>
                </div>
            </div>

            {/* Description Box - Expanded */}
            <div className="bg-white text-black p-8 md:p-10 rounded-xl shadow-lg mb-8 flex-grow">
                <h3 className="font-bold text-2xl mb-6 border-b-2 border-red-600 pb-2 inline-block">Project Overview</h3>
                <p className="text-xl md:text-2xl leading-relaxed text-zinc-800 font-light">
                    {project.description}
                </p>
                {/* Simulated extra content structure for 'telling more' */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-bold text-lg mb-2 text-zinc-600">Key Outcomes</h4>
                    <p className="text-zinc-600 leading-relaxed">
                        This project demonstrates proficiency in {project.tags.slice(0,2).join(' and ')}, delivering scalable solutions and measurable performance improvements compliant with modern industry standards.
                    </p>
                </div>
            </div>

            {/* Social Icons / Links */}
            <div className="flex flex-wrap items-center gap-4">
                {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full transition-all font-bold">
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                    </a>
                )}
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all font-bold">
                        <Globe className="w-5 h-5" />
                        <span>Live Demo</span>
                    </a>
                )}
                 <a href="https://linkedin.com/in/abdulzahidshaik" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-full transition-all font-medium ml-auto">
                        <Linkedin className="w-5 h-5" />
                        <span>Connect</span>
                 </a>
            </div>

          </div>
        </div>

      </div>

      {/* "Other Projects" Section */}
      <div className="border-t border-zinc-800 pt-10 pl-6 md:pl-12">
          <ContentRow 
             title="More Like This" 
             items={allProjects.filter(p => p.id !== project.id)}
             onCardClick={onProjectSelect}
          />
      </div>

    </div>
  );
};

export default ProjectDetailView;