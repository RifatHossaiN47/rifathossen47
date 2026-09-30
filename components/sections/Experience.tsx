"use client";

import Image from "next/image";
import { ExternalLink, Briefcase, MapPin } from "lucide-react";
import { experiences } from "../../lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-5 sm:px-8 border-t border-[#E6E0D6] dark:border-[#2B2824]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider text-[#D96B27] bg-[#D96B27]/10 border border-[#D96B27]/30 mb-2 uppercase">
            <Briefcase className="w-3.5 h-3.5 text-[#D96B27]" />
            <span>WORK & LEADERSHIP EXPERIENCE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-900 dark:text-[#F5EFE6] uppercase">
            01 // <span className="text-[#D96B27]">WORK EXPERIENCE</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-[#A39E95] mt-1 max-w-2xl font-normal leading-relaxed">
            Software engineering, startup architecture, and technical team leadership in web and AI systems.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="wireframe-bracket bg-white dark:bg-[#181716] rounded-2xl p-6 sm:p-8 border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs hover:border-[#D96B27]/50 transition-all duration-300"
            >
              {/* Header Row: Company Info & Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E6E0D6] dark:border-[#2B2824]">
                <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
                  {exp.logoImage ? (
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-[#E6E0D6] dark:border-[#2B2824] shrink-0 mt-0.5 sm:mt-0">
                      <Image
                        src={exp.logoImage}
                        alt={`${exp.company} Logo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-neutral-100 dark:bg-[#201E1C] flex items-center justify-center font-bold text-base sm:text-lg text-neutral-700 dark:text-neutral-200 shrink-0 mt-0.5 sm:mt-0">
                      {exp.logoText || "E"}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-[#F5EFE6]">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="px-2.5 py-0.5 text-xs font-mono font-semibold rounded-md bg-[#D96B27]/10 text-[#D96B27] border border-[#D96B27]/30 uppercase">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-neutral-500 dark:text-[#A39E95] mt-1 flex-wrap font-mono">
                      <span className="font-semibold text-neutral-800 dark:text-[#F5EFE6]">
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#D96B27]" />
                        {exp.location}
                      </span>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded-xs bg-neutral-100 dark:bg-[#201E1C] text-neutral-600 dark:text-[#A39E95]">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-medium text-neutral-800 dark:text-[#F5EFE6] bg-neutral-100 dark:bg-[#201E1C] border border-neutral-300 dark:border-[#38342F]">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm sm:text-base text-neutral-600 dark:text-[#A39E95] leading-relaxed font-normal">
                {exp.description}
              </p>

              {/* Responsibilities & Achievements (With 47 wallpaper arrow bullets) */}
              <div className="mt-6 space-y-2.5">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-[#8C877D]">
                  KEY DELIVERABLES & IMPACT //
                </h4>
                <div className="space-y-2 font-mono text-xs sm:text-sm">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-[#D96B27] font-bold shrink-0">→</span>
                      <p className="text-neutral-700 dark:text-[#F5EFE6] leading-snug">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips & Action Link */}
              <div className="mt-6 pt-5 border-t border-[#E6E0D6] dark:border-[#2B2824] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-[#201E1C] text-neutral-700 dark:text-[#F5EFE6] border border-[#E6E0D6] dark:border-[#2B2824]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  {exp.website && (
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#D96B27] hover:underline"
                    >
                      <span>→ Visit {exp.company}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {exp.projectUrl && (
                    <a
                      href={exp.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] hover:text-[#D96B27] hover:underline"
                    >
                      <span>→ {exp.projectLabel || "View App"}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
