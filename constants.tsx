import { PortfolioItem, SocialItem } from './types';
import { Home, Search, MonitorPlay, BookOpen, Github, Linkedin, Mail } from 'lucide-react';

// PRIMARY: Direct Video URL (Smoother, reliable, no embed errors)
// Using a high-quality cinematic abstract background similar to the requested style.
export const HERO_VIDEO_URL = "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4";

// FALLBACK: YouTube Video ID (If HERO_VIDEO_URL is empty, this will be used)
// Note: Many music/cinematic videos disable embedding (Error 153). 
export const HERO_VIDEO_ID = ""; // "iktSfTR8d9U" was restricted.

export const HERO_DATA = {
  title: "Software Engineer & GenAI Specialist",
  description: "Specializing in Python, AWS, and Generative AI. Experienced in designing and deploying secure, scalable ML and GenAI solutions using TensorFlow, PyTorch, LangChain, and SageMaker.",
  tags: ["Python", "AWS", "GenAI", "React", "TensorFlow"]
};

export const NAV_ITEMS = [
  { label: 'About Me', icon: Home, id: 'about' },
  { label: 'Projects', icon: Search, id: 'projects' },
  { label: 'Education & Experience', icon: MonitorPlay, id: 'experience' },
  { label: 'Research & Articles', icon: BookOpen, id: 'research' },
];

export const SOCIAL_LINKS: SocialItem[] = [
  { platform: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/abdulzahidshaik' },
  { platform: 'GitHub', icon: Github, url: 'https://github.com' }, // Placeholder as not in resume
  { platform: 'Email', icon: Mail, url: 'mailto:abdulzahid1192@gmail.com' },
];

export const PROJECTS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Generative AI Wealth Assistant',
    thumbnailUrl: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800',
    description: 'Built Python FastAPI service integrating OpenAI and AWS SageMaker to generate investment summaries and portfolio insights; achieved response latency < 1.2 s.',
    tags: ['Python', 'FastAPI', 'OpenAI', 'AWS SageMaker'],
    category: 'Project',
    matchScore: 99,
    year: 2024,
    duration: 'Active',
    githubUrl: 'https://github.com',
    liveUrl: 'https://google.com'
  },
  {
    id: 'p2',
    title: 'Medical Chatbot (GenAI)',
    thumbnailUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800',
    description: 'Trained healthcare chatbot with TensorFlow + PyTorch; handled 1.5k queries with 35% accuracy gain via LLM fine-tuning.',
    tags: ['TensorFlow', 'PyTorch', 'LLM', 'Fine-Tuning'],
    category: 'Project',
    matchScore: 97,
    year: 2023,
    duration: 'Completed',
    githubUrl: 'https://github.com'
  },
  {
    id: 'p3',
    title: 'RAG-Based Q&A Platform',
    thumbnailUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    description: 'Implemented Retrieval-Augmented Generation with LangChain and FAISS to enhance contextual understanding for enterprise search.',
    tags: ['LangChain', 'FAISS', 'RAG', 'Search'],
    category: 'Project',
    matchScore: 95,
    year: 2023,
    duration: 'Completed',
    githubUrl: 'https://github.com'
  },
  {
    id: 'p4',
    title: 'AI Model Monitoring Dashboard',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'Developed Flask + React tool for tracking model drift and performance metrics on AWS CloudWatch.',
    tags: ['Flask', 'React', 'AWS CloudWatch', 'Monitoring'],
    category: 'Project',
    matchScore: 92,
    year: 2022,
    duration: 'Deployed',
    liveUrl: 'https://google.com'
  },
  {
    id: 'p5',
    title: 'E-Commerce Front-end Modules',
    thumbnailUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800',
    description: 'Built dynamic e-commerce front-end modules using Angular and Bootstrap, increasing user engagement by 2000+ active users. Integrated RESTful APIs for product recommendations, enhancing click-through rate by 25%.',
    tags: ['Angular', 'Bootstrap', 'Frontend'],
    category: 'Project',
    matchScore: 88,
    year: 2021,
    duration: 'Internship',
    liveUrl: 'https://google.com'
  }
];

export const RESEARCH: PortfolioItem[] = [
  {
    id: 'r1',
    title: 'Responsible AI in Industry',
    thumbnailUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600',
    description: 'Authored internal whitepaper on responsible AI for industrial applications, aligning with privacy and safety standards.',
    tags: ['Ethics', 'AI Safety', 'Policy'],
    category: 'Research',
    matchScore: 96,
    year: 2022,
    duration: 'Whitepaper'
  },
  {
    id: 'r4',
    title: "The Planet's 10 Richest",
    thumbnailUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    description: "Forbes Magazine's latest update on the top 10 richest individuals in the world.",
    tags: ['Forbes', 'Wealth', 'Global Economy'],
    category: 'Research',
    matchScore: 98,
    year: 2024,
    duration: 'Post',
    externalLink: 'https://www.linkedin.com/posts/forbes-magazine_the-planets-10-richest-people-enter-the-activity-7401723293319467008-8VJX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC_KjQcBwjiYxG0smwrQ5x87V8ujNTCcJh4'
  }
];

export const EXPERIENCE: PortfolioItem[] = [
  {
    id: 'e1',
    title: 'Tech Engineer Intern @ TLC, INC',
    thumbnailUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    description: 'Architected Python Flask microservices on AWS Lambda. Integrated OpenAI API & LangChain. CI/CD implementation.',
    tags: ['Python', 'AWS Lambda', 'GenAI', 'CI/CD'],
    category: 'Experience',
    year: 2024,
    duration: 'Present',
    role: 'Tech Engineer Intern'
  },
  {
    id: 'e2',
    title: 'Research Engineer @ PSU',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    description: 'Developed ML pipelines in TensorFlow for manufacturing data. Deployed models to AWS SageMaker.',
    tags: ['TensorFlow', 'SageMaker', 'Research'],
    category: 'Experience',
    year: 2022,
    duration: 'Mar - Dec',
    role: 'Research Engineer'
  },
  {
    id: 'e3',
    title: 'Jr Software Engineer @ Nowcom',
    thumbnailUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    description: 'Implemented backend APIs in Python/Spring Boot. Built data collection dashboards with Flask and React.',
    tags: ['Python', 'Spring Boot', 'React', 'Flask'],
    category: 'Experience',
    year: 2022,
    duration: 'Mar - Dec',
    role: 'Jr Software Engineer'
  },
  {
    id: 'e4',
    title: 'Software Developer Intern @ AgrieTern',
    thumbnailUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800',
    description: 'Built dynamic front-end modules using Angular. Integrated RESTful APIs for product recommendations.',
    tags: ['Angular', 'REST APIs', 'Frontend'],
    category: 'Experience',
    year: 2021,
    duration: 'Jul - Oct',
    role: 'Software Developer Intern'
  },
  {
    id: 'edu1',
    title: 'M.S. Computer Science',
    thumbnailUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
    description: 'Portland State University, OR, USA. GPA: 3.75/4.0',
    tags: ['Masters', 'CS', 'PSU'],
    category: 'Experience',
    year: 2024,
    duration: 'Graduated',
    role: 'Education'
  },
  {
    id: 'edu2',
    title: 'B.E. Information Technology',
    thumbnailUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800',
    description: 'Osmania University, India. GPA: 3.50/4.0',
    tags: ['Bachelors', 'IT', 'Osmania'],
    category: 'Experience',
    year: 2021,
    duration: 'Graduated',
    role: 'Education'
  }
];

export const RESUME_URL = "https://www.linkedin.com/in/abdulzahidshaik"; // Replace with actual resume PDF link when available