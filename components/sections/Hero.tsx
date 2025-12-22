// Next.js App Router version - Hero section component
// Copy from /components/Hero.tsx with Next.js imports
"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Youtube,
  MapPin,
  Briefcase,
} from "lucide-react";
import rifat from "../../public/rifat.jpg";
import { FaOrcid, FaResearchgate, FaFacebook } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import Image from "next/image";
export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "AI Researcher",
    "Full-Stack Developer",
    "IEEE Published Author",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20">
      <div className="max-w-[1440px] w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] bg-clip-text text-transparent animate-gradient">
                  Hi, I&apos;m <br /> Md Rifat Hossen
                </span>
              </h1>
              <div className="h-8 md:h-10">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 transition-opacity duration-500">
                  {titles[titleIndex]}
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
              4th Year CS Student at CUET | Building intelligent systems and
              scalable applications
            </p>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Mail className="w-5 h-5 text-[#0ea5e9] dark:text-[#10b981]" />
              <a
                href="mailto:rifat8851@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-[#0ea5e9] dark:hover:text-[#10b981] transition-colors"
              >
                rifat8851@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/RifatHossaiN47"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#0ea5e9] dark:hover:bg-[#10b981] hover:text-white transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/rifathossain47"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#0ea5e9] dark:hover:bg-[#10b981] hover:text-white transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://orcid.org/0009-0004-7835-3794"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#0ea5e9] dark:hover:bg-[#10b981] hover:text-white transition-all hover:scale-110"
                aria-label="orcid id"
              >
                <FaOrcid className="w-5 h-5" />
              </a>
              <a
                href="https://www.researchgate.net/profile/Md-Rifat-Hossen-3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#0ea5e9] dark:hover:bg-[#10b981] hover:text-white transition-all hover:scale-110"
                aria-label="ResearchGate"
              >
                <FaResearchgate className="w-5 h-5" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=kJRow6AAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#0ea5e9] dark:hover:bg-[#10b981] hover:text-white transition-all hover:scale-110"
                aria-label="Google Scholar"
              >
                <SiGooglescholar className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/rifathossain4777"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#0ea5e9] dark:hover:bg-[#10b981] hover:text-white transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@RifatHossaiNBro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#0ea5e9] dark:hover:bg-[#10b981] hover:text-white transition-all hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() =>
                  document
                    .querySelector("#research")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] text-white rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                View Research
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                See Projects
              </button>
              <a
                href="/Rifat_Hossen_CV.pdf"
                download="Rifat_Hossen_CV.pdf"
                className="px-6 py-3 border-2 border-[#0ea5e9] dark:border-[#10b981] text-[#0ea5e9] dark:text-[#10b981] rounded-full hover:bg-[#0ea5e9] dark:hover:bg-[#10b981] hover:text-white transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] rounded-full blur-2xl opacity-30 animate-pulse" />
              <Image
                src={rifat}
                alt="Rifat Hossain"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white dark:border-[#0a0a0a] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
