"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Download,
  Figma,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { projects, ProjectItem } from "../../lib/portfolio-data";
import { useSectionData } from "../../lib/use-section-data";

type FilterCategory = "All" | "Web" | "Mobile" | "ML/AI" | "Systems";

export function Projects() {
  const projectList = useSectionData("projects", projects);
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");
  const [showAll, setShowAll] = useState(false);

  const categories: FilterCategory[] = ["All", "Web", "Mobile", "ML/AI", "Systems"];

  const filteredProjects = projectList.filter((p) => {
    if (activeCategory === "All") return true;
    return p.category.includes(activeCategory);
  });

  // Display top 6 initially (or all if toggled)
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const hasMore = filteredProjects.length > 6;

  return (
    <section id="projects" className="py-20 px-5 sm:px-8 border-t border-[#E6E0D6] dark:border-[#2B2824]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider text-[#D96B27] bg-[#D96B27]/10 border border-[#D96B27]/30 mb-2 uppercase">
              <Layers className="w-3.5 h-3.5 text-[#D96B27]" />
              <span>SOFTWARE & AI ENGINEERING</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-900 dark:text-[#F5EFE6] uppercase">
              02 // <span className="text-[#D96B27]">FEATURED PROJECTS</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-[#A39E95] mt-1 max-w-2xl font-normal leading-relaxed">
              Full-stack web applications, native mobile architectures, and applied machine learning models built for production.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 dark:bg-[#181716] rounded-xl border border-[#E6E0D6] dark:border-[#2B2824] shrink-0 font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#D96B27] text-white shadow-xs font-bold"
                    : "text-neutral-600 dark:text-[#A39E95] hover:text-neutral-900 dark:hover:text-[#F5EFE6]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-[#181716] rounded-2xl overflow-hidden border border-[#E6E0D6] dark:border-[#2B2824] hover:border-[#D96B27]/50 transition-all duration-300 flex flex-col shadow-xs hover:shadow-md"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-[#121110]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#121110]/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-mono text-[#F5EFE6] border border-[#2B2824] flex items-center gap-1.5 shadow-xs uppercase">
                  <span>{project.emoji}</span>
                  <span>{project.category.join(", ")}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl tracking-wide text-neutral-900 dark:text-[#F5EFE6] group-hover:text-[#D96B27] transition-colors uppercase">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-[#A39E95] line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="mt-5 pt-4 border-t border-[#E6E0D6] dark:border-[#2B2824]">
                  <div className="flex flex-wrap gap-1.5 mb-4 font-mono">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-neutral-100 dark:bg-[#201E1C] text-neutral-700 dark:text-[#F5EFE6] border border-[#E6E0D6] dark:border-[#2B2824]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-neutral-100 dark:bg-[#201E1C] text-neutral-500 font-mono">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Link Buttons */}
                  <div className="flex items-center gap-2 flex-wrap font-mono text-xs">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D96B27] hover:bg-[#C85A17] text-white uppercase tracking-wider transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.links.download && (
                      <a
                        href={project.links.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white uppercase tracking-wider transition-colors"
                      >
                        <Download className="w-3 h-3" />
                        <span>Download</span>
                      </a>
                    )}
                    {project.links.figma && (
                      <a
                        href={project.links.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-[#201E1C] text-neutral-700 dark:text-[#F5EFE6] hover:bg-neutral-200 dark:hover:bg-[#2B2824] transition-colors"
                      >
                        <Figma className="w-3 h-3 text-[#D96B27]" />
                        <span>Figma</span>
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-[#38342F] text-neutral-700 dark:text-[#F5EFE6] hover:bg-neutral-100 dark:hover:bg-[#201E1C] transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.links.githubFrontend && (
                      <a
                        href={project.links.githubFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-[#38342F] text-neutral-700 dark:text-[#F5EFE6] hover:bg-neutral-100 dark:hover:bg-[#201E1C] transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        <span>Frontend</span>
                      </a>
                    )}
                    {project.links.githubBackend && (
                      <a
                        href={project.links.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-[#38342F] text-neutral-700 dark:text-[#F5EFE6] hover:bg-neutral-100 dark:hover:bg-[#201E1C] transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        <span>Backend</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expand / Collapse More Projects Button */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {hasMore && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-[#181716] text-neutral-800 dark:text-[#F5EFE6] hover:border-[#D96B27] transition-all flex items-center gap-2 cursor-pointer border border-[#E6E0D6] dark:border-[#2B2824]"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4 text-[#D96B27]" />
                  <span>Show Fewer Projects</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 text-[#D96B27]" />
                  <span>View All Projects ({filteredProjects.length})</span>
                </>
              )}
            </button>
          )}

          <a
            href="https://github.com/RifatHossaiN47?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] hover:text-[#D96B27] transition-colors flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repositories Archive →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
