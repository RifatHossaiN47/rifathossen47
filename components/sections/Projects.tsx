"use client";

import { useState } from "react";
import { ExternalLink, Github, Download, Figma } from "lucide-react";

type ProjectCategory = "All" | "ML/AI" | "Web" | "Mobile" | "Desktop";

interface Project {
  title: string;
  emoji: string;
  description: string;
  tech: string[];
  category: ProjectCategory[];
  links: {
    live?: string;
    api?: string;
    github?: string;
    githubFrontend?: string;
    githubBackend?: string;
    download?: string;
    figma?: string;
  };
  image: string;
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: "MyCUETBus",
      emoji: "🚌",
      description:
        "Real-time university bus tracking with GPS, live map, background location sharing",
      tech: ["React Native", "Expo", "Mapbox GL", "Firebase", "NativeWind"],
      category: ["Mobile"],
      links: {
        download: "https://mycuetbus.web.app/",
        figma:
          "https://www.figma.com/design/vQ2w1PHp8utaXXKp5U1dHc/MyCUETBus-Design?node-id=0-1&t=6BbIdiQS8s5zxyuR-1",
        github: "https://github.com/RifatHossaiN47/MyCUETBus",
      },
      image: "/projects/mycuetbus.png",
    },
    {
      title: "CUET FoodExpress",
      emoji: "🍕",
      description:
        "Modern food ordering platform with Firebase auth, Stripe payments, admin dashboard",
      tech: [
        "React",
        "Node.js",
        "MongoDB",

        "Firebase",
        "Express.js",
        "TailwindCSS",
        "JWT",
        "Stripe",
        "Mailgun",
      ],
      category: ["Web"],
      links: {
        live: "https://cuet-foodexpress-w3.web.app",
        api: "https://cuet-foodexpress-server.vercel.app",
        githubFrontend:
          "https://github.com/RifatHossaiN47/cuet-foodexpress-frontend",
        githubBackend:
          "https://github.com/RifatHossaiN47/cuet-foodexpress-backend",
      },
      image: "/projects/cuetfoodexpress.png",
    },
    {
      title: "Movie Recommendation System",
      emoji: "🎬",
      description:
        "Content-based recommendation using cosine similarity, 5000+ movies",
      tech: ["Python", "Streamlit", "Scikit-learn", "NLTK", "Pandas", "NumPy"],
      category: ["ML/AI"],
      links: {
        live: "https://movie-recommendation-rh47.streamlit.app/",
        github:
          "https://github.com/RifatHossaiN47/ML-Movie-Recommendation-System",
      },
      image: "/projects/movierecommend.jpg",
    },
    {
      title: "Email/SMS Spam Classifier",
      emoji: "📧",
      description:
        "Spam detection using MultinomialNB with TF-IDF vectorization",
      tech: ["Python", "Streamlit", "Scikit-learn", "NLTK", "Cython", "C++"],
      category: ["ML/AI"],
      links: {
        live: "https://email-spam-classifier-ml-model.onrender.com/",
        github:
          "https://github.com/RifatHossaiN47/Email-Spam-Classifier-ML-Model",
      },
      image: "/projects/emailspam.jpg",
    },

    {
      title: "KREMS Technologies",
      emoji: "🏢",
      description:
        "Modern company website for AI & software engineering services",
      tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "EmailJS"],
      category: ["Web"],
      links: {
        live: "https://krems.vercel.app/",
        github: "https://github.com/RifatHossaiN47/krems",
      },
      image: "/projects/krems.png",
    },

    {
      title: "Stadium Ticket Management",
      emoji: "🎫️",
      description: "Ticket booking system with authentication",
      tech: [
        "Java Spring Boot",
        "HTML",
        "CSS",
        "MySQL",
        "JavaScript",
        "Bootstrap",
      ],
      category: ["Web"],
      links: {
        live: "https://stadium-ticket-management-system-production.up.railway.app/",
        github:
          "https://github.com/RifatHossaiN47/Stadium-Ticket-Management-System",
      },
      image: "/projects/tricket.png",
    },

    {
      title: "BMI Calculator",
      emoji: "🏋️",
      description: "Health app with BMI calculation & health classification",
      tech: ["Java", "Android SDK", "Material Design"],
      category: ["Mobile"],
      links: {
        download:
          "https://github.com/RifatHossaiN47/BMI-Calculator-App/releases/download/v1.0.0/BMICalculator.apk",
        github: "https://github.com/RifatHossaiN47/BMI-Calculator-App",
      },
      image: "/projects/bmi.png",
    },
    {
      title: "Tic-Tac-Toe Game",
      emoji: "🎮",
      description: "Classic game with animations & player customization",
      tech: ["Java", "Android Studio", "Material Design"],
      category: ["Mobile"],
      links: {
        download:
          "https://github.com/RifatHossaiN47/Tic-Tac-Toe-Game/releases/download/v1.0.0/Tic-Tac-Toe.apk",
        github: "https://github.com/RifatHossaiN47/Tic-Tac-Toe-Game",
      },
      image: "/projects/tictac.png",
    },
    {
      title: "MyCUETBus Landing Page",
      emoji: "🌐",
      description: "Download page for MyCUETBus app",
      tech: ["HTML", "Firebase Hosting"],
      category: ["Web", "Mobile"],
      links: {
        live: "https://mycuetbus.web.app/",
        github: "https://github.com/RifatHossaiN47/MyCUETBus_Hosting-Firebase",
      },
      image: "/projects/kraken.png",
    },
    {
      title: "CSE Department Database System",
      emoji: "🎓",
      description: "Student-Teacher Database Management for CUET",
      tech: ["C++", "OOP", "File I/O"],
      category: ["Desktop"],
      links: {
        download:
          "https://github.com/RifatHossaiN47/Cpp_OOP_Projects/releases/download/v1.0.0/CSEDatabaseCUET.exe",
        github: "https://github.com/RifatHossaiN47/Cpp_OOP_Projects",
      },
      image: "/projects/datacse.png",
    },
    {
      title: "Quiz Web Application",
      emoji: "📝",
      description: "Interactive quiz platform with Spring Boot backend",
      tech: ["Java Spring Boot", "HTML", "CSS", "MySQL"],
      category: ["Web"],
      links: {
        live: "https://java-spring-boot-quiz-web-app-production.up.railway.app/",
        github:
          "https://github.com/RifatHossaiN47/Java-Spring-boot-Quiz-web-app",
      },
      image: "/projects/quiz.jpg",
    },

    {
      title: "Bash Library Management System",
      emoji: "📚",
      description: "Command-line library system with admin/user roles",
      tech: ["Bash", "Shell Scripting"],
      category: ["Desktop"],
      links: {
        github:
          "https://github.com/RifatHossaiN47/bash-library-management-system",
      },
      image: "/projects/library.png",
    },
    {
      title: "OS Scheduling Algorithms",
      emoji: "⚙️",
      description:
        "CPU Scheduling (FCFS, SJF, Priority, Round Robin, HRRN) & Banker's Algorithm",
      tech: ["C++"],
      category: ["Desktop"],
      links: {
        download:
          "https://github.com/RifatHossaiN47/os-scheduling-algorithms/releases/download/v1.0.0/cpu_scheduling_simulator.exe",
        github: "https://github.com/RifatHossaiN47/os-scheduling-algorithms",
      },
      image:
        "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjU2MzE0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Previous Portfolio",
      emoji: "📄",
      description: "HTML/CSS/JS portfolio website",
      tech: ["HTML", "CSS", "JavaScript"],
      category: ["Web"],
      links: {
        live: "https://rifathossain47.github.io/Rifat_Portfolio/",
        github: "https://github.com/RifatHossaiN47/Rifat_Portfolio",
      },
      image: "/projects/old.png",
    },
  ];

  const filters: ProjectCategory[] = [
    "All",
    "ML/AI",
    "Web",
    "Mobile",
    "Desktop",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  // Show only 6 projects initially
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center md:text-left">
          Featured Projects
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] text-white"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 text-4xl">
                  {project.emoji}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg md:text-xl mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-[#0ea5e9] dark:bg-[#10b981] text-white rounded-lg hover:scale-105 transition-transform text-xs"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live
                    </a>
                  )}
                  {project.links.api && (
                    <a
                      href={project.links.api}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:scale-105 transition-transform text-xs"
                    >
                      API
                    </a>
                  )}
                  {project.links.download && (
                    <a
                      href={project.links.download}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-[#0ea5e9] dark:bg-[#10b981] text-white rounded-lg hover:scale-105 transition-transform text-xs"
                    >
                      <Download className="w-3 h-3" />
                      APK
                    </a>
                  )}
                  {project.links.figma && (
                    <a
                      href={project.links.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:scale-105 transition-transform text-xs"
                    >
                      <Figma className="w-3 h-3" />
                      Design
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 border border-[#0ea5e9] dark:border-[#10b981] text-[#0ea5e9] dark:text-[#10b981] rounded-lg hover:bg-[#0ea5e9] dark:hover:bg-[#10b981] hover:text-white transition-all text-xs"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                  )}
                  {project.links.githubFrontend && (
                    <a
                      href={project.links.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 border border-[#0ea5e9] dark:border-[#10b981] text-[#0ea5e9] dark:text-[#10b981] rounded-lg hover:bg-[#0ea5e9] dark:hover:bg-[#10b981] hover:text-white transition-all text-xs"
                    >
                      <Github className="w-3 h-3" />
                      Frontend
                    </a>
                  )}
                  {project.links.githubBackend && (
                    <a
                      href={project.links.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 border border-[#0ea5e9] dark:border-[#10b981] text-[#0ea5e9] dark:text-[#10b981] rounded-lg hover:bg-[#0ea5e9] dark:hover:bg-[#10b981] hover:text-white transition-all text-xs"
                    >
                      <Github className="w-3 h-3" />
                      Backend
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12 gap-4">
          {hasMoreProjects && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 border-2 border-[#0ea5e9] dark:border-[#10b981] text-[#0ea5e9] dark:text-[#10b981] rounded-full hover:bg-[#0ea5e9] dark:hover:bg-[#10b981] hover:text-white transition-all flex items-center gap-2"
            >
              See More Projects ({filteredProjects.length - 6} more)
            </button>
          )}
          {showAll && hasMoreProjects && (
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-4 border-2 border-[#0ea5e9] dark:border-[#10b981] text-[#0ea5e9] dark:text-[#10b981] rounded-full hover:bg-[#0ea5e9] dark:hover:bg-[#10b981] hover:text-white transition-all flex items-center gap-2"
            >
              Show Less
            </button>
          )}
          <a
            href="https://github.com/RifatHossaiN47?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] text-white rounded-full hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
