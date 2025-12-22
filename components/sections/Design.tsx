// Next.js App Router version - Design Work section
"use client";

import { Palette, Github } from "lucide-react";

export function Design() {
  const designTools = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Canva",
    "Figma",
    "Draw.io",
    "Lucidchart",
    "Adobe XD",
    "PowerPoint",
  ];

  return (
    <section
      id="design"
      className="py-24 md:py-32 px-6 md:px-12 bg-gray-50 dark:bg-[#0a0a0a]"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">Design Work</h2>
          <Palette className="w-8 h-8 text-[#0ea5e9] dark:text-[#10b981]" />
        </div>

        <div className="space-y-8">
          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl text-center md:text-left">
            Passionate about creating visually compelling designs using
            industry-standard tools. From event posters and branding to UI/UX
            concepts and illustrations, I explore creative design across
            multiple platforms.
          </p>

          {/* Design Tools */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl text-[#0ea5e9] dark:text-[#10b981]">
              Design Tools & Software
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
              {designTools.map((tool, i) => (
                <div
                  key={i}
                  className="px-4 py-3 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-center border border-transparent hover:border-[#0ea5e9] dark:hover:border-[#10b981]"
                >
                  <span className="text-sm">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Repository Link */}
          <div className="flex flex-col items-center md:items-start gap-4 mt-12">
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
              Check out my complete design portfolio with event posters, logos,
              branding work, UI designs, and more on GitHub.
            </p>
            <a
              href="https://github.com/RifatHossaiN47/Graphic-Design"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] text-white rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
            >
              <Github className="w-5 h-5" />
              View All Designs on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
