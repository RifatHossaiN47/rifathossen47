// Next.js App Router version - Footer component
"use client";

import { ArrowUp, Lock } from "lucide-react";
import Link from "next/link";
import { useTheme } from "../ThemeProvider";

export function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 md:px-12 bg-gray-50 dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Md Rifat Hossen. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Rifat's Lab Button - More Prominent */}
            <Link
              href="/lab/login"
              className="group flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-full hover:border-[#0ea5e9] dark:hover:border-[#10b981] hover:shadow-lg hover:shadow-[#0ea5e9]/20 dark:hover:shadow-[#10b981]/20 transition-all hover:scale-105"
              title="Rifat's Lab - Admin Access"
            >
              <Lock className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-[#0ea5e9] dark:group-hover:text-[#10b981] transition-colors" />
              <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-[#0ea5e9] dark:group-hover:text-[#10b981] transition-colors">
                Rifat&apos;s Lab
              </span>
            </Link>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] text-white rounded-full hover:scale-110 transition-transform shadow-lg"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <div className="max-w-2xl mx-auto space-y-2">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Thank you for visiting my Portfolio!
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Available for collaborations & opportunities
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
