import React from 'react';

export interface PortfolioItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl?: string; // YouTube ID
  description: string;
  tags: string[];
  category: 'Project' | 'Research' | 'Experience';
  matchScore?: number; // Imitating Netflix "98% Match"
  year: number;
  duration?: string;
  role?: string;
  externalLink?: string;
  githubUrl?: string;
  liveUrl?: string;
  logo?: string;
}

export interface NavItem {
  label: string;
  icon: React.ElementType;
  id: string;
}

export interface SocialItem {
  platform: string;
  icon: React.ElementType;
  url: string;
}

export interface ContentRowProps {
  title: string;
  items: PortfolioItem[];
  isVertical?: boolean; // For "Limited Series" / Experience view
  onCardClick?: (item: PortfolioItem) => void;
}