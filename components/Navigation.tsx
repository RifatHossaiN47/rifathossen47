"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, FileText, ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { siteConfig } from "../lib/portfolio-data";
import rhLogo from "../public/logo.png";
import rhLogoLight from "../public/logos.png";

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { sections } = siteConfig;

  // Primary visible links in navbar
  const mainNavItems = [
    sections.experience.enabled && { name: "Experience", href: `#${sections.experience.id}`, code: "01" },
    sections.projects.enabled && { name: "Projects", href: `#${sections.projects.id}`, code: "02" },
    sections.publications.enabled && { name: "Research", href: `#${sections.publications.id}`, code: "03" },
    sections.skills.enabled && { name: "Skills", href: `#${sections.skills.id}`, code: "04" },
    sections.credentials.enabled && { name: "Credentials", href: `#${sections.credentials.id}`, code: "05" },
  ].filter(Boolean) as { name: string; href: string; code: string }[];

  const secondaryNavItems = [
    sections.creative.enabled && { name: "Beyond Code", href: `#${sections.creative.id}` },
    { name: "Technical Blog", href: "/blog" },
    { name: "Rifat's Lab", href: "/lab/login" },
  ].filter(Boolean) as { name: string; href: string }[];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsMoreOpen(false);

    if (href.startsWith("#")) {
      if (pathname === "/") {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      window.location.href = `/${href}`;
    } else {
      window.location.href = href;
    }
  };

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FBF9F5]/90 dark:bg-[#121110]/90 backdrop-blur-md border-b border-[#E6E0D6] dark:border-[#2B2824] shadow-xs"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* The 47 Code / L Emblem Brand */}
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-3 group text-left cursor-pointer focus:outline-hidden"
              aria-label="Scroll to top or go home"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(217,107,39,0.2)]">
                <Image
                  src={theme === "light" ? rhLogo : rhLogoLight}
                  alt="Rifat Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-lg sm:text-xl tracking-wider text-neutral-900 dark:text-[#F5EFE6] group-hover:text-[#D96B27] transition-colors uppercase">
                    RIFAT HOSSEN
                  </span>
                  <span className="px-1.5 py-0.2 rounded-xs text-[10px] font-mono font-bold bg-[#D96B27]/15 text-[#D96B27] border border-[#D96B27]/30">
                    47
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 dark:text-[#A39E95] font-mono tracking-tight">
                  SOFTWARE & AI RESEARCHER
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {mainNavItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="group px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] hover:text-neutral-900 dark:hover:text-[#F5EFE6] rounded-lg hover:bg-neutral-100 dark:hover:bg-[#1C1B19] transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-[10px] text-[#D96B27] opacity-60 group-hover:opacity-100 transition-opacity">
                    {item.code}
                  </span>
                  <span>{item.name}</span>
                </button>
              ))}

              {/* Beyond Code / More Dropdown */}
              {secondaryNavItems.length > 0 && (
                <div className="relative">
                  <button
                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                    className="flex items-center gap-1 px-3.5 py-2 text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] hover:text-neutral-900 dark:hover:text-[#F5EFE6] rounded-lg hover:bg-neutral-100 dark:hover:bg-[#1C1B19] transition-all cursor-pointer"
                  >
                    <span>More</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isMoreOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isMoreOpen && (
                    <div
                      className="absolute top-full right-0 mt-1 w-44 bg-white dark:bg-[#181716] rounded-xl shadow-xl border border-[#E6E0D6] dark:border-[#2B2824] p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150 font-mono text-xs"
                      onMouseLeave={() => setIsMoreOpen(false)}
                    >
                      {secondaryNavItems.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => scrollToSection(item.href)}
                          className="w-full text-left px-3 py-2 text-xs text-neutral-700 dark:text-[#A39E95] hover:text-[#D96B27] rounded-lg hover:bg-neutral-100 dark:hover:bg-[#201E1C] transition-colors cursor-pointer"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Quick Actions (CV, Contact & Theme) */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={siteConfig.personal.cvUrl}
                download="Rifat_Hossen_CV.pdf"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-neutral-700 dark:text-[#F5EFE6] bg-neutral-100 dark:bg-[#1C1B19] hover:bg-neutral-200 dark:hover:bg-[#252320] rounded-full border border-neutral-300 dark:border-[#38342F] transition-all hover:border-[#D96B27]/50"
              >
                <FileText className="w-3.5 h-3.5 text-[#D96B27]" />
                <span>Resume / CV</span>
              </a>

              {sections.contact.enabled && (
                <button
                  onClick={() => scrollToSection(`#${sections.contact.id}`)}
                  className="px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-white bg-[#D96B27] hover:bg-[#C85A17] dark:bg-[#D96B27] dark:hover:bg-[#E27429] rounded-full transition-all hover:scale-[1.02] cursor-pointer shadow-xs"
                >
                  Contact
                </button>
              )}

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-neutral-600 dark:text-[#A39E95] hover:bg-neutral-100 dark:hover:bg-[#1C1B19] transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4 text-[#D96B27]" />
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-neutral-600 dark:text-[#A39E95] hover:bg-neutral-100 dark:hover:bg-[#1C1B19] transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#FBF9F5]/98 dark:bg-[#121110]/98 backdrop-blur-xl pt-20 px-6 pb-8 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col gap-2 max-w-sm mx-auto font-mono">
            {mainNavItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-left px-4 py-3 text-sm font-medium uppercase tracking-wider text-neutral-800 dark:text-[#F5EFE6] rounded-xl hover:bg-neutral-100 dark:hover:bg-[#1C1B19] transition-colors flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="text-xs text-[#D96B27]">{item.code}</span>
              </button>
            ))}

            <div className="my-2 border-t border-[#E6E0D6] dark:border-[#2B2824]" />

            {secondaryNavItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-left px-4 py-2.5 text-xs uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] rounded-xl hover:bg-neutral-100 dark:hover:bg-[#1C1B19] transition-colors"
              >
                {item.name}
              </button>
            ))}

            <div className="mt-4 pt-4 border-t border-[#E6E0D6] dark:border-[#2B2824] flex flex-col gap-3">
              <a
                href={siteConfig.personal.cvUrl}
                download="Rifat_Hossen_CV.pdf"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-neutral-100 dark:bg-[#1C1B19] rounded-xl text-xs font-mono uppercase tracking-wider text-neutral-800 dark:text-[#F5EFE6] border border-neutral-300 dark:border-[#38342F]"
              >
                <FileText className="w-4 h-4 text-[#D96B27]" />
                Download CV (PDF)
              </a>
              {sections.contact.enabled && (
                <button
                  onClick={() => scrollToSection(`#${sections.contact.id}`)}
                  className="py-3 px-4 bg-[#D96B27] text-white rounded-xl text-xs font-mono uppercase tracking-wider font-semibold text-center"
                >
                  Get in Touch
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
