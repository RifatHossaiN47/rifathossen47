"use client";

import { useState } from "react";
import {
  GraduationCap,
  Award,
  Github,
  Trophy,
  CheckCircle2,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  educationList as defaultEducationList,
  certificationsList as defaultCertificationsList,
  leadershipList as defaultLeadershipList,
} from "../../lib/portfolio-data";
import { useSectionData } from "../../lib/use-section-data";

export function Education() {
  const educationList = useSectionData("education", defaultEducationList);
  const certificationsList = useSectionData("certifications", defaultCertificationsList);
  const leadershipList = useSectionData("leadership", defaultLeadershipList);
  const [activeTab, setActiveTab] = useState<"education" | "certifications" | "leadership">("education");
  const [certFilter, setCertFilter] = useState<string>("All");
  const [showAllCerts, setShowAllCerts] = useState(false);

  const certCategories = ["All", "Data & AI", "Development", "Programming", "Conferences"];

  const filteredCerts = certificationsList.filter((c) => {
    if (certFilter === "All") return true;
    return c.category === certFilter;
  });

  const displayedCerts = showAllCerts ? filteredCerts : filteredCerts.slice(0, 6);
  const hasMoreCerts = filteredCerts.length > 6;

  return (
    <section id="credentials" className="py-20 px-5 sm:px-8 border-t border-[#E6E0D6] dark:border-[#2B2824] bg-neutral-50/50 dark:bg-[#151413]/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider text-[#D96B27] bg-[#D96B27]/10 border border-[#D96B27]/30 mb-2 uppercase">
              <GraduationCap className="w-3.5 h-3.5 text-[#D96B27]" />
              <span>ACADEMIC & PROFESSIONAL CREDENTIALS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-900 dark:text-[#F5EFE6] uppercase">
              05 // <span className="text-[#D96B27]">EDUCATION & CREDENTIALS</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-[#A39E95] mt-1 max-w-2xl font-normal leading-relaxed">
              Academic degree in Computer Science & Engineering at CUET alongside verified professional specializations and leadership tenures.
            </p>
          </div>

          {/* Tab Switcher - Slim single-row pill matching other sections */}
          <div className="grid grid-cols-3 sm:flex sm:items-center gap-1 sm:gap-1.5 p-1 bg-neutral-100 dark:bg-[#181716] rounded-xl border border-[#E6E0D6] dark:border-[#2B2824] font-mono shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("education")}
              className={`px-2 sm:px-3.5 py-2 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === "education"
                  ? "bg-[#D96B27] text-white shadow-xs font-bold"
                  : "text-neutral-600 dark:text-[#A39E95] hover:text-neutral-900 dark:hover:text-[#F5EFE6]"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 shrink-0" />
              <span>Degrees</span>
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`px-2 sm:px-3.5 py-2 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === "certifications"
                  ? "bg-[#D96B27] text-white shadow-xs font-bold"
                  : "text-neutral-600 dark:text-[#A39E95] hover:text-neutral-900 dark:hover:text-[#F5EFE6]"
              }`}
            >
              <Award className="w-3.5 h-3.5 shrink-0" />
              <span>Certs (14+)</span>
            </button>
            <button
              onClick={() => setActiveTab("leadership")}
              className={`px-2 sm:px-3.5 py-2 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === "leadership"
                  ? "bg-[#D96B27] text-white shadow-xs font-bold"
                  : "text-neutral-600 dark:text-[#A39E95] hover:text-neutral-900 dark:hover:text-[#F5EFE6]"
              }`}
            >
              <Trophy className="w-3.5 h-3.5 shrink-0" />
              <span>Leadership</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Education Timeline */}
        {activeTab === "education" && (
          <div className="space-y-6 animate-in fade-in duration-200 max-w-4xl mx-auto">
            {educationList.map((edu, index) => (
              <div
                key={index}
                className="wireframe-bracket bg-white dark:bg-[#181716] rounded-2xl p-6 sm:p-7 border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-5 hover:border-[#D96B27]/40 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D96B27] shrink-0" />
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-[#F5EFE6]">
                      {edu.degree}
                    </h3>
                    {edu.gradeBadge && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md font-mono text-xs font-bold bg-[#D96B27]/10 text-[#D96B27] border border-[#D96B27]/30 tracking-wide">
                        {edu.gradeBadge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-neutral-700 dark:text-[#A39E95]">
                    {edu.institution}
                  </p>
                  {edu.details && (
                    <p className="text-xs text-neutral-500 dark:text-[#8C877D] max-w-xl leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>

                <div className="sm:text-right shrink-0 font-mono">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-neutral-800 dark:text-[#F5EFE6] bg-neutral-100 dark:bg-[#201E1C] border border-neutral-300 dark:border-[#38342F]">
                    {edu.duration}
                  </span>
                  {edu.location && (
                    <p className="text-[11px] text-neutral-400 mt-1">
                      {edu.location}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Certifications Grid */}
        {activeTab === "certifications" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
              {certCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCertFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg uppercase tracking-wider transition-colors cursor-pointer ${
                    certFilter === cat
                      ? "bg-[#D96B27] text-white font-bold"
                      : "bg-white dark:bg-[#181716] text-neutral-600 dark:text-[#A39E95] border border-[#E6E0D6] dark:border-[#2B2824] hover:text-neutral-900 dark:hover:text-[#F5EFE6]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Certifications Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayedCerts.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#181716] rounded-2xl p-5 border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs flex flex-col justify-between hover:border-[#D96B27]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3 font-mono">
                      <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-md bg-neutral-100 dark:bg-[#201E1C] text-neutral-600 dark:text-[#A39E95]">
                        {cert.category}
                      </span>
                      <span className="text-xs text-neutral-400">
                        {cert.year}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-neutral-900 dark:text-[#F5EFE6] leading-snug">
                      {cert.name}
                    </h4>

                    <p className="mt-1 text-xs text-neutral-500 dark:text-[#A39E95]">
                      {cert.issuer}
                    </p>

                    {cert.verifyId && (
                      <p className="mt-2 text-[11px] font-mono text-neutral-400 dark:text-[#8C877D]">
                        ID: <span className="text-[#D96B27]">{cert.verifyId}</span>
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E6E0D6] dark:border-[#2B2824] flex items-center justify-between font-mono">
                    {cert.score ? (
                      <span className="text-xs font-semibold text-[#D96B27]">
                        Score: {cert.score}
                      </span>
                    ) : (
                      <span className="text-xs text-neutral-400 inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#D96B27]" /> Verified
                      </span>
                    )}

                    {cert.featured && (
                      <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-[#D96B27]/10 text-[#D96B27] border border-[#D96B27]/30 uppercase">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Expand / Collapse More Certifications Button */}
            {hasMoreCerts && (
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => setShowAllCerts(!showAllCerts)}
                  className="px-6 py-2.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-[#181716] text-neutral-800 dark:text-[#F5EFE6] hover:border-[#D96B27] transition-all flex items-center gap-2 cursor-pointer border border-[#E6E0D6] dark:border-[#2B2824]"
                >
                  {showAllCerts ? (
                    <>
                      <ChevronUp className="w-4 h-4 text-[#D96B27]" />
                      <span>Show Fewer Certifications</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 text-[#D96B27]" />
                      <span>View All Certifications ({filteredCerts.length})</span>
                    </>
                  )}
                </button>
              </div>
            )}

            <div className="pt-2 flex justify-center">
              <a
                href="https://github.com/RifatHossaiN47/professional-certifications"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider bg-white dark:bg-[#181716] text-neutral-700 dark:text-[#F5EFE6] hover:border-[#D96B27] border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs"
              >
                <Github className="w-4 h-4 text-[#D96B27]" />
                <span>View All Verified Certificates on GitHub</span>
              </a>
            </div>
          </div>
        )}

        {/* Tab 3: Leadership & Competitions */}
        {activeTab === "leadership" && (
          <div className="space-y-6 animate-in fade-in duration-200 max-w-4xl mx-auto">
            {leadershipList.map((item, index) => (
              <div
                key={index}
                className="wireframe-bracket bg-white dark:bg-[#181716] rounded-2xl p-6 sm:p-7 border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs hover:border-[#D96B27]/40 transition-colors space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-[#F5EFE6]">
                        {item.role}
                      </h3>
                      {item.badge && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md font-mono text-[11px] font-semibold bg-[#D96B27]/10 text-[#D96B27] border border-[#D96B27]/30">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-neutral-700 dark:text-[#A39E95] mt-0.5">
                      {item.organization}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-500 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-[#D96B27]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#A39E95] leading-relaxed">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="pt-2 border-t border-[#E6E0D6] dark:border-[#2B2824] space-y-1.5">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-[#A39E95]">
                        <span className="text-[#D96B27] font-bold">›</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
