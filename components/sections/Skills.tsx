"use client";

import { useState } from "react";
import {
  Code2,
  Terminal,
  Trophy,
  ExternalLink,
  Target,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import {
  skillCategories as defaultSkillCategories,
  competitiveProgrammingPlatforms as defaultCpPlatforms,
  problemSolvingTopics as defaultProblemSolvingTopics,
} from "../../lib/portfolio-data";
import { useSectionData } from "../../lib/use-section-data";

export function Skills() {
  const skillCategories = useSectionData("skillCategories", defaultSkillCategories);
  const competitiveProgrammingPlatforms = useSectionData("competitiveProgramming", defaultCpPlatforms);
  const problemSolvingTopics = useSectionData("problemSolvingTopics", defaultProblemSolvingTopics);
  const [activeTab, setActiveTab] = useState<"skills" | "cp">("skills");

  return (
    <section id="skills" className="py-20 px-5 sm:px-8 border-t border-[#E6E0D6] dark:border-[#2B2824]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider text-[#D96B27] bg-[#D96B27]/10 border border-[#D96B27]/30 mb-2 uppercase">
              <Terminal className="w-3.5 h-3.5 text-[#D96B27]" />
              <span>TECHNICAL STACK & PROBLEM SOLVING</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-900 dark:text-[#F5EFE6] uppercase">
              04 // <span className="text-[#D96B27]">SKILLS & PROBLEM SOLVING</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-[#A39E95] mt-1 max-w-2xl font-normal leading-relaxed">
              Core engineering stack, system design tooling, and competitive programming track record across major platforms.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-100 dark:bg-[#181716] rounded-xl border border-[#E6E0D6] dark:border-[#2B2824] overflow-x-auto max-w-full font-mono scrollbar-none">
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                activeTab === "skills"
                  ? "bg-[#D96B27] text-white shadow-xs font-bold"
                  : "text-neutral-600 dark:text-[#A39E95] hover:text-neutral-900 dark:hover:text-[#F5EFE6]"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Stack</span>
            </button>
            <button
              onClick={() => setActiveTab("cp")}
              className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                activeTab === "cp"
                  ? "bg-[#D96B27] text-white shadow-xs font-bold"
                  : "text-neutral-600 dark:text-[#A39E95] hover:text-neutral-900 dark:hover:text-[#F5EFE6]"
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Competitive Coding (500+)</span>
            </button>
          </div>
        </div>

        {/* View 1: Technical Skills Grid */}
        {activeTab === "skills" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white dark:bg-[#181716] rounded-2xl p-6 border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs hover:border-[#D96B27]/40 transition-colors"
              >
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#E6E0D6] dark:border-[#2B2824]">
                  <span className="w-2 h-2 rounded-full bg-[#D96B27]" />
                  <h3 className="font-display text-xl tracking-wider text-neutral-900 dark:text-[#F5EFE6] uppercase">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 font-mono">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-neutral-100 dark:bg-[#201E1C] text-neutral-700 dark:text-[#F5EFE6] border border-[#E6E0D6] dark:border-[#2B2824] hover:border-[#D96B27]/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View 2: Competitive Programming Hub */}
        {activeTab === "cp" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Top Milestone Banner */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-[#D96B27]/10 via-[#181716] to-[#D96B27]/5 rounded-2xl border border-[#D96B27]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D96B27]/20 text-[#D96B27] flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wide text-neutral-900 dark:text-[#F5EFE6] uppercase">
                    500+ Algorithmic Problems Solved
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-[#A39E95] font-sans mt-0.5">
                    Consistent problem solving and contest participation across Codeforces, LeetCode, and CodeChef.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono font-medium text-neutral-700 dark:text-[#F5EFE6]">
                <span className="px-3 py-1 rounded-full bg-white dark:bg-[#181716] border border-[#E6E0D6] dark:border-[#2B2824]">
                  CF Peak: <strong className="text-[#D96B27]">1350</strong>
                </span>
                <span className="px-3 py-1 rounded-full bg-white dark:bg-[#181716] border border-[#E6E0D6] dark:border-[#2B2824]">
                  CodeChef: <strong className="text-[#D96B27]">3-Star</strong>
                </span>
              </div>
            </div>

            {/* Platform Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {competitiveProgrammingPlatforms.map((platform) => (
                <div
                  key={platform.name}
                  className="wireframe-bracket bg-white dark:bg-[#181716] rounded-2xl p-6 border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs flex flex-col justify-between hover:border-[#D96B27]/50 transition-colors"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{platform.logo}</span>
                        <div>
                          <h4 className="font-display text-xl tracking-wider text-neutral-900 dark:text-[#F5EFE6] uppercase">
                            {platform.name}
                          </h4>
                          <p className="text-xs text-neutral-500 font-mono">
                            {platform.username}
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold rounded-md bg-[#D96B27]/10 text-[#D96B27] border border-[#D96B27]/30 uppercase">
                        {platform.badge}
                      </span>
                    </div>

                    {/* Stats List */}
                    <div className="space-y-2 mt-4 font-mono text-xs">
                      {platform.stats.map((s) => (
                        <div
                          key={s.label}
                          className="flex items-center justify-between p-2 rounded-lg bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6]/60 dark:border-[#2B2824]/60"
                        >
                          <span className="text-neutral-600 dark:text-[#A39E95]">
                            {s.label}
                          </span>
                          <span className="font-bold text-[#D96B27]">
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={platform.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full py-2 px-3 text-xs font-mono uppercase tracking-wider rounded-xl bg-neutral-100 dark:bg-[#201E1C] text-neutral-700 dark:text-[#F5EFE6] hover:bg-[#D96B27] hover:text-white transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View {platform.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>

            {/* Core Algorithmic Focus Pills */}
            <div className="p-6 bg-white dark:bg-[#181716] rounded-2xl border border-[#E6E0D6] dark:border-[#2B2824]">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-[#8C877D] mb-3">
                ALGORITHMIC RIGOR // DATA STRUCTURES
              </h4>
              <div className="flex flex-wrap gap-2 font-mono">
                {problemSolvingTopics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-[#201E1C] text-neutral-700 dark:text-[#F5EFE6] border border-[#E6E0D6] dark:border-[#2B2824]"
                  >
                    → {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
