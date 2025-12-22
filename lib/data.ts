// Next.js App Router version - Centralized data
// This file would contain all portfolio data in a real Next.js app
// In production, this could be replaced with API calls or a CMS

import type {
  Experience,
  Publication,
  Project,
  Skill,
  Education,
  Certification,
  DesignWork,
  Video,
  CompetitiveProgrammingProfile,
  Hobby,
} from "./types";

// Personal Information
export const personalInfo = {
  name: "Rifat Hossain",
  title: "Full-Stack Developer & IEEE Published Researcher",
  email: "rifat@example.com",
  location: "Bangladesh",
  bio: "Passionate developer with expertise in modern web technologies and published research in IEEE.",
  social: {
    github: "https://github.com/rifathossain",
    linkedin: "https://linkedin.com/in/rifathossain",
    twitter: "https://twitter.com/rifathossain",
  },
};

// Experience Data
export const experiences: Experience[] = [
  // Add experience data here
  // This would be populated from your actual data
];

// Research Publications
export const publications: Publication[] = [
  // Add publication data here
];

// Projects
export const projects: Project[] = [
  // Add project data here
];

// Skills
export const skills: Skill[] = [
  // Add skills data here
];

// Education
export const education: Education[] = [
  // Add education data here
];

// Certifications
export const certifications: Certification[] = [
  // Add certification data here
];

// Design Portfolio
export const designWorks: DesignWork[] = [
  // Add design work data here
];

// Videos
export const videos: Video[] = [
  // Add video data here
];

// Competitive Programming Profiles
export const competitiveProgrammingProfiles: CompetitiveProgrammingProfile[] = [
  // Add CP profiles here
];

// Hobbies
export const hobbies: Hobby[] = [
  // Add hobbies data here
];

// Helper functions
export function getProjectsByCategory(category: string) {
  return projects.filter((project) => project.category === category);
}

export function getSkillsByCategory(category: string) {
  return skills.filter((skill) => skill.category === category);
}

// Blog functions (these would connect to Supabase or your database in production)
export async function getAllBlogPosts() {
  // In a real Next.js app, this would fetch from Supabase
  // For now, it's a placeholder
  return [];
}

export async function getBlogPostBySlug(slug: string) {
  // Fetch blog post from database
  return null;
}

export async function getRecentBlogPosts(limit: number = 3) {
  // Fetch recent posts
  return [];
}
