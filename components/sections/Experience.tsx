"use client";

import {
  ExternalLink,
  FolderOpen,
  CheckCircle2,
  Rocket,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export function Experience() {
  const experiences = [
    {
      duration: "2025 - Present",
      position: "AI Engineer and Full-Stack Developer",
      badge: "Technical Lead",
      company: "KREMS Technologies",
      type: "Startup",
      typeIcon: Rocket,
      location: "Remote",
      description:
        "Co-founded and leading technical development of AI-powered software solutions. Architecting full-stack applications, implementing AI/ML systems, and managing technical strategy and team collaboration.",
      responsibilities: [
        "Led development of Next.js company website and multiple client projects",
        "Implemented AI and ML integration for intelligent automation solutions",
        "Responsible for system architecture, technical decisions, and strategy",
        "Team coordination and collaborative technical leadership",
      ],
      techStack: [
        "Next.js",
        "TypeScript",
        "React",
        "Node.js",
        "Python",
        "TensorFlow",
        "Generative AI",
        "Agentic AI",
        "Firebase",
        "Tailwind CSS",
        "MongoDB",
      ],
      website: "https://krems.vercel.app",
      logo: "K",
      color:
        "from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4]",
      borderColor:
        "from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400", // Startup
    },
  ];

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Building innovative solutions and leading technical development
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full md:w-[95%] mx-auto"
            >
              {/* Gradient Left Border */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${exp.borderColor} rounded-l-2xl`}
              />

              {/* Top Row: Logo and Duration */}
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                {/* Company Logo */}
                <div
                  className={`w-[60px] h-[60px] rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                >
                  <Image
                    src="/kremslg.jpg"
                    alt={`${exp.company} logo`}
                    width={60}
                    height={60}
                  />
                </div>

                {/* Duration Badge */}
                <div className="px-4 py-2 bg-gradient-to-r from-[#0ea5e9]/10 to-[#14b8a6]/10 dark:from-[#10b981]/10 dark:to-[#06b6d4]/10 rounded-full border-2 border-[#0ea5e9]/20 dark:border-[#10b981]/20">
                  <span className="font-semibold text-sm md:text-base">
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Job Title */}
              <div className="mb-3">
                <h3 className="text-2xl md:text-[28px] leading-tight">
                  {exp.position}
                  {exp.badge && (
                    <>
                      <span className="mx-3 text-gray-300 dark:text-gray-700">
                        |
                      </span>
                      <span className="bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] bg-clip-text text-transparent">
                        {exp.badge}
                      </span>
                    </>
                  )}
                </h3>
              </div>

              {/* Company Name */}
              <div className="mb-4">
                <p className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100">
                  {exp.company}
                </p>
              </div>

              {/* Type and Location Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                  <exp.typeIcon className="w-4 h-4" />
                  {exp.type}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </span>
              </div>

              {/* Description */}
              <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Key Responsibilities / Achievements */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wide">
                  Key Responsibilities & Achievements
                </h4>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3 uppercase tracking-wide">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-gradient-to-r from-[#0ea5e9]/10 to-[#14b8a6]/10 dark:from-[#10b981]/10 dark:to-[#06b6d4]/10 text-sm font-medium rounded-full border border-[#0ea5e9]/20 dark:border-[#10b981]/20 hover:scale-105 transition-transform cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Future Experience Placeholder - Easy to add more */}
        {/* 
        To add more experiences, add objects to the experiences array:
        
        {
          duration: '2023 - 2024',
          position: 'Full Stack Developer',
          badge: '', // Optional: 'Senior' or 'Lead' etc.
          company: 'Tech Corp',
          type: 'Full-time',
          typeIcon: Briefcase, // Import Briefcase from lucide-react
          location: 'Dhaka, Bangladesh',
          description: 'Your 2-3 line description here...',
          responsibilities: [
            'Responsibility 1',
            'Responsibility 2',
            'Responsibility 3',
          ],
          techStack: ['React', 'Node.js', 'MongoDB'],
          website: 'https://company.com',
          logo: 'TC',
          color: 'from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4]',
          borderColor: 'from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400', // Full-time job
        }
        */}
      </div>
    </section>
  );
}
