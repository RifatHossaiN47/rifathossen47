// Next.js App Router version - TypeScript interfaces and types

export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Publication {
  title: string;
  authors: string;
  conference: string;
  year: string;
  doi?: string;
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image?: string;
  githubLink?: string;
  liveLink?: string;
}

export interface Skill {
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "DevOps"
    | "Tools"
    | "Language";
  icon?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  details?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface DesignWork {
  title: string;
  category: string;
  image: string;
  description?: string;
}

export interface Video {
  title: string;
  thumbnail: string;
  link: string;
  views?: string;
  duration?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
  readTime?: string;
}

export interface Comment {
  id: string;
  blogId: string;
  author: string;
  email: string;
  content: string;
  date: string;
}

export interface CompetitiveProgrammingProfile {
  platform: string;
  username: string;
  rating?: number;
  rank?: string;
  solved?: number;
  link: string;
}

export interface Hobby {
  name: string;
  icon: string;
  description: string;
}
