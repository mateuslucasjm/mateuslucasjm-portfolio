export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface AboutInfo {
  name: string;
  title: string;
  description: string;
  avatar: string;
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  technologies: string[];
  description: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface PortfolioData {
  about: AboutInfo;
  skills: Skill[];
  projects: Project[];
  social: SocialLinks;
  experience: Experience[];
}
