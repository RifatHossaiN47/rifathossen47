"use client";

import { ArrowUp, Lock, BookOpen } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "../../lib/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-14 px-5 sm:px-8 border-t border-[#E6E0D6] dark:border-[#2B2824] bg-white dark:bg-[#121110]">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Formal Signature Stamp */}
        <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#181716] border border-[#E6E0D6] dark:border-[#2B2824] max-w-xl mx-auto text-center space-y-1.5">
          <p className="font-display text-2xl tracking-wide text-neutral-900 dark:text-[#F5EFE6] uppercase">
            MD RIFAT HOSSEN
          </p>
          <p className="font-mono text-xs text-[#D96B27] tracking-wider uppercase">
            Software Engineering & Machine Learning Systems
          </p>
          <p className="text-xs text-neutral-500 dark:text-[#8C877D]">
            Chattogram, Bangladesh • Open to Engineering & AI Research Roles
          </p>
        </div>

        {/* Bottom Metadata & Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500 dark:text-[#A39E95] pt-4 border-t border-[#E6E0D6]/60 dark:border-[#2B2824]/60">
          <div>
            <p>
              © {currentYear} {siteConfig.personal.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-neutral-400 dark:text-[#8C877D] mt-0.5">
              Engineered with Next.js 16 (Turbopack), React 19, TypeScript & Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Technical Blog */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E6E0D6] dark:border-[#2B2824] hover:border-[#D96B27] text-neutral-600 dark:text-[#A39E95] hover:text-[#D96B27] transition-colors uppercase tracking-wider text-[11px]"
              title="Technical Writing & Blog"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#D96B27]" />
              <span>Articles</span>
            </Link>

            {/* Rifat's Lab Access */}
            <Link
              href="/lab/login"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E6E0D6] dark:border-[#2B2824] hover:border-[#D96B27] text-neutral-600 dark:text-[#A39E95] hover:text-[#D96B27] transition-colors uppercase tracking-wider text-[11px]"
              title="Admin Portal Access"
            >
              <Lock className="w-3.5 h-3.5 text-[#D96B27]" />
              <span>Rifat&apos;s Lab</span>
            </Link>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-[#181716] hover:bg-[#D96B27] hover:text-white dark:hover:bg-[#D96B27] text-neutral-700 dark:text-[#F5EFE6] border border-[#E6E0D6] dark:border-[#2B2824] transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
