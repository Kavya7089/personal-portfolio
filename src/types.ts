export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  github?: string;
  live?: string;
  demoVideo?: string;
  featured: boolean;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  color: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other'|'programming';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}