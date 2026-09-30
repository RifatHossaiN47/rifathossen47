"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowRight,
  BookOpen,
  Code2,
  Award,
} from "lucide-react";
import { FaOrcid, FaResearchgate } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import rifatImg from "../../public/rifat.jpg";
import { siteConfig } from "../../lib/portfolio-data";

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = siteConfig.personal.titles;

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative min-h-[94vh] flex items-center justify-center pt-24 pb-16 px-5 sm:px-8 bg-ambient-glow"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text & Impact Summary (7 Columns) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Professional Role Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#D96B27] bg-[#D96B27]/10 border border-[#D96B27]/30 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D96B27] animate-pulse" />
              <span>SOFTWARE ENGINEER & ML RESEARCHER</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight leading-none text-neutral-900 dark:text-[#F5EFE6] uppercase">
                MD RIFAT <span className="text-[#D96B27]">HOSSEN</span>
              </h1>

              {/* Dynamic Role Switcher */}
              <div className="h-8 flex items-center justify-center lg:justify-start">
                <p className="font-mono text-sm sm:text-base font-semibold tracking-wider text-[#D96B27] dark:text-[#E27429] uppercase">
                  {titles[titleIndex]}
                </p>
              </div>

              {/* Humanized Professional Summary */}
              <p className="text-sm sm:text-base text-neutral-600 dark:text-[#C7C2BA] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal pt-1">
                Full-stack developer and applied AI researcher specializing in scalable web and mobile systems, low-resource Bengali NLP, and explainable computer vision. Technical Lead at KREMS Technologies with 6 peer-reviewed papers published in Springer Nature (Q2 Journal) and IEEE.
              </p>
            </div>

            {/* Metrics Highlights Grid */}
            <div className="pt-2">
              <p className="text-[11px] font-mono tracking-wider text-neutral-400 dark:text-[#8C877D] uppercase mb-2.5">
                KEY HIGHLIGHTS //
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 bg-white dark:bg-[#181716] rounded-xl border border-[#E6E0D6] dark:border-[#2B2824] text-center lg:text-left shadow-xs hover:border-[#D96B27]/40 transition-colors">
                  <p className="font-display text-3xl tracking-wide text-neutral-900 dark:text-[#F5EFE6]">
                    06
                  </p>
                  <p className="text-[11px] font-mono text-neutral-500 dark:text-[#A39E95]">
                    Published Papers
                  </p>
                </div>
                <div className="p-3.5 bg-white dark:bg-[#181716] rounded-xl border border-[#E6E0D6] dark:border-[#2B2824] text-center lg:text-left shadow-xs hover:border-[#D96B27]/40 transition-colors">
                  <p className="font-display text-3xl tracking-wide text-[#D96B27]">
                    3.60
                  </p>
                  <p className="text-[11px] font-mono text-neutral-500 dark:text-[#A39E95]">
                    Graduated CGPA
                  </p>
                </div>
                <div className="p-3.5 bg-white dark:bg-[#181716] rounded-xl border border-[#E6E0D6] dark:border-[#2B2824] text-center lg:text-left shadow-xs hover:border-[#D96B27]/40 transition-colors">
                  <p className="font-display text-3xl tracking-wide text-neutral-900 dark:text-[#F5EFE6]">
                    LEAD
                  </p>
                  <p className="text-[11px] font-mono text-neutral-500 dark:text-[#A39E95]">
                    KREMS Technologies
                  </p>
                </div>
                <div className="p-3.5 bg-white dark:bg-[#181716] rounded-xl border border-[#E6E0D6] dark:border-[#2B2824] text-center lg:text-left shadow-xs hover:border-[#D96B27]/40 transition-colors">
                  <p className="font-display text-3xl tracking-wide text-[#D96B27]">
                    834+
                  </p>
                  <p className="text-[11px] font-mono text-neutral-500 dark:text-[#A39E95]">
                    Active Transit Users
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => scrollTo("projects")}
                className="px-6 py-3 bg-[#D96B27] hover:bg-[#C85A17] dark:bg-[#D96B27] dark:hover:bg-[#E27429] text-white rounded-xl font-mono text-xs font-semibold uppercase tracking-wider transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>→ View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo("publications")}
                className="px-6 py-3 bg-neutral-100 dark:bg-[#1C1B19] text-neutral-800 dark:text-[#F5EFE6] rounded-xl font-mono text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 dark:hover:bg-[#252320] transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer border border-[#E6E0D6] dark:border-[#2B2824]"
              >
                <BookOpen className="w-4 h-4 text-[#D96B27]" />
                <span>→ Research Papers</span>
              </button>

              <a
                href={siteConfig.personal.cvUrl}
                download="Rifat_Hossen_CV.pdf"
                className="px-6 py-3 border border-neutral-300 dark:border-[#38342F] text-neutral-700 dark:text-[#F5EFE6] rounded-xl font-mono text-xs font-semibold uppercase tracking-wider hover:bg-neutral-100 dark:hover:bg-[#1C1B19] transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#D96B27]" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Academic & Professional Social Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              <a
                href={siteConfig.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neutral-100 dark:bg-[#181716] text-neutral-700 dark:text-[#A39E95] hover:text-[#D96B27] dark:hover:text-[#F5EFE6] hover:bg-neutral-200 dark:hover:bg-[#201E1C] transition-all border border-transparent dark:border-[#2B2824]"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neutral-100 dark:bg-[#181716] text-neutral-700 dark:text-[#A39E95] hover:text-[#D96B27] dark:hover:text-[#F5EFE6] hover:bg-neutral-200 dark:hover:bg-[#201E1C] transition-all border border-transparent dark:border-[#2B2824]"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.personal.social.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neutral-100 dark:bg-[#181716] text-neutral-700 dark:text-[#A39E95] hover:text-[#D96B27] dark:hover:text-[#F5EFE6] hover:bg-neutral-200 dark:hover:bg-[#201E1C] transition-all border border-transparent dark:border-[#2B2824]"
                aria-label="Google Scholar"
                title="Google Scholar"
              >
                <SiGooglescholar className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.personal.social.researchgate}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neutral-100 dark:bg-[#181716] text-neutral-700 dark:text-[#A39E95] hover:text-[#D96B27] dark:hover:text-[#F5EFE6] hover:bg-neutral-200 dark:hover:bg-[#201E1C] transition-all border border-transparent dark:border-[#2B2824]"
                aria-label="ResearchGate"
                title="ResearchGate"
              >
                <FaResearchgate className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.personal.social.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-neutral-100 dark:bg-[#181716] text-neutral-700 dark:text-[#A39E95] hover:text-[#D96B27] dark:hover:text-[#F5EFE6] hover:bg-neutral-200 dark:hover:bg-[#201E1C] transition-all border border-transparent dark:border-[#2B2824]"
                aria-label="ORCID"
                title="ORCID"
              >
                <FaOrcid className="w-4 h-4" />
              </a>
              <span className="h-4 w-px bg-neutral-300 dark:bg-[#2B2824] mx-1" />
              <a
                href={`mailto:${siteConfig.personal.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-neutral-600 dark:text-[#A39E95] hover:text-[#D96B27] transition-colors font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-[#D96B27]" />
                <span>{siteConfig.personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Formal Refined Portrait Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Soft ambient backglow */}
              <div className="absolute inset-0 bg-[#D96B27]/20 rounded-3xl blur-2xl -z-10 group-hover:bg-[#D96B27]/30 transition-colors" />

              {/* Formal Double Frame for Profile Picture */}
              <div className="p-2 rounded-3xl bg-white dark:bg-[#181716] border-2 border-[#E6E0D6] dark:border-[#2B2824] shadow-xl hover:border-[#D96B27]/50 transition-colors">
                <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-80 md:h-80 xl:w-88 xl:h-88 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-[#141312]">
                  <Image
                    src={rifatImg}
                    alt={siteConfig.personal.name}
                    fill
                    sizes="(max-width: 768px) 320px, 384px"
                    priority
                    className="object-cover object-top hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Dignified Formal Status Caption Below Picture */}
            <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#181716] border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs font-mono text-xs text-neutral-700 dark:text-[#A39E95]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Software & AI Engineering Roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
