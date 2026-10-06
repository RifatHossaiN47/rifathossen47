"use client";

import { useState } from "react";
import { ExternalLink, Github, BookOpen, Award, ChevronDown, ChevronUp } from "lucide-react";
import { publications as defaultPublications, PublicationItem } from "../../lib/portfolio-data";
import { useSectionData } from "../../lib/use-section-data";

export function Research() {
  const publications = useSectionData("publications", defaultPublications);
  const [showAllPapers, setShowAllPapers] = useState(false);

  const displayedPapers = showAllPapers ? publications : publications.slice(0, 3);
  const hasMorePapers = publications.length > 3;

  const getPublisherBadge = (publisher: PublicationItem["publisher"]) => {
    switch (publisher) {
      case "IEEE":
        return "bg-sky-500/10 text-sky-500 dark:text-sky-400 border-sky-500/30";
      case "Springer":
        return "bg-[#D96B27]/15 text-[#D96B27] border-[#D96B27]/40";
      case "ACM":
        return "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border-emerald-500/30";
      case "arXiv":
        return "bg-purple-500/10 text-purple-500 dark:text-purple-400 border-purple-500/30";
      case "ResearchGate":
        return "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30";
      default:
        return "bg-neutral-100 dark:bg-[#201E1C] text-neutral-700 dark:text-[#A39E95] border-[#2B2824]";
    }
  };

  return (
    <section id="publications" className="py-20 px-5 sm:px-8 border-t border-[#E6E0D6] dark:border-[#2B2824] bg-neutral-50/50 dark:bg-[#151413]/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider text-[#D96B27] bg-[#D96B27]/10 border border-[#D96B27]/30 mb-2 uppercase">
              <BookOpen className="w-3.5 h-3.5 text-[#D96B27]" />
              <span>PEER-REVIEWED SCIENTIFIC RESEARCH</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-900 dark:text-[#F5EFE6] uppercase">
              03 // <span className="text-[#D96B27]">RESEARCH & PUBLICATIONS</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-[#A39E95] mt-1 max-w-2xl font-normal leading-relaxed">
              Peer-reviewed academic research in deep learning defect classification, computer vision, and Bengali natural language processing.
            </p>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#181716] border border-[#E6E0D6] dark:border-[#2B2824] text-xs font-mono text-neutral-700 dark:text-[#F5EFE6] shrink-0">
            <Award className="w-4 h-4 text-[#D96B27]" />
            <span>6 Peer-Reviewed Papers + 1 Research Poster</span>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayedPapers.map((paper) => (
            <div
              key={paper.id}
              className="wireframe-bracket bg-white dark:bg-[#181716] rounded-2xl p-6 sm:p-7 border border-[#E6E0D6] dark:border-[#2B2824] hover:border-[#D96B27]/50 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                {/* Top Row: Publisher Badge & Venue */}
                <div className="flex items-center justify-between gap-2 mb-4 font-mono text-xs">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`px-2.5 py-0.5 font-bold uppercase rounded-md border ${getPublisherBadge(
                        paper.publisher
                      )}`}
                    >
                      {paper.publisher}
                    </span>
                    <span className="text-neutral-500 dark:text-[#A39E95] text-[11px]">
                      {paper.venue}
                    </span>
                  </div>
                  <span className="text-neutral-400 shrink-0">
                    {paper.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-[#F5EFE6] leading-snug">
                  {paper.title}
                </h3>

                {/* Metric Highlight (The 47 Wallpaper stat style) */}
                {paper.highlightMetric && (
                  <div className="mt-4 p-3 bg-neutral-50 dark:bg-[#121110] rounded-xl border border-[#E6E0D6] dark:border-[#2B2824] flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-600 dark:text-[#A39E95]">
                      {paper.highlightMetric.label}
                    </span>
                    <span className="font-display text-2xl tracking-wider text-[#D96B27]">
                      {paper.highlightMetric.value}
                    </span>
                  </div>
                )}

                {/* Dataset */}
                {paper.dataset && (
                  <p className="mt-3 text-xs font-mono text-neutral-500 dark:text-[#A39E95]">
                    <span className="text-[#D96B27]">Dataset:</span> {paper.dataset}
                  </p>
                )}

                {/* Tech Chips */}
                <div className="mt-4 flex flex-wrap gap-1.5 font-mono">
                  {paper.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-neutral-100 dark:bg-[#201E1C] text-neutral-600 dark:text-[#F5EFE6] border border-[#E6E0D6] dark:border-[#2B2824]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#E6E0D6] dark:border-[#2B2824] flex items-center gap-2 flex-wrap font-mono text-xs">
                {paper.paperUrl && (
                  <a
                    href={paper.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D96B27] hover:bg-[#C85A17] text-white uppercase tracking-wider transition-opacity"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>{paper.publisher === "ResearchGate" ? "DOI / ResearchGate" : "Publication"}</span>
                  </a>
                )}

                {paper.demoUrl && (
                  <a
                    href={paper.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 uppercase tracking-wider transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Live Demo</span>
                  </a>
                )}

                {paper.arxivUrl && (
                  <a
                    href={paper.arxivUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/30 hover:bg-purple-500/20 uppercase tracking-wider transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>arXiv</span>
                  </a>
                )}

                {paper.codeUrl && (
                  <a
                    href={paper.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-700 dark:text-[#A39E95] hover:text-[#D96B27] dark:hover:text-[#F5EFE6] uppercase tracking-wider transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Expand / Collapse More Publications Button */}
        {hasMorePapers && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAllPapers(!showAllPapers)}
              className="px-6 py-2.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-[#181716] text-neutral-800 dark:text-[#F5EFE6] hover:border-[#D96B27] transition-all flex items-center gap-2 cursor-pointer border border-[#E6E0D6] dark:border-[#2B2824]"
            >
              {showAllPapers ? (
                <>
                  <ChevronUp className="w-4 h-4 text-[#D96B27]" />
                  <span>Show Fewer Papers</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 text-[#D96B27]" />
                  <span>View All Research Papers ({publications.length})</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
