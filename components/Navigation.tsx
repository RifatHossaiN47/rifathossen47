"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";
import rh from "../public/logo.png";
import wlogo from "../public/logos.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primaryNavLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Research", href: "#research" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Problem Solving", href: "#competitive-programming" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  // Secondary navigation links (in "More" dropdown)
  const moreNavLinks = [
    { name: "Videos", href: "#videos" },
    { name: "Design", href: "#design" },
    { name: "Blogs", href: "#blogs" },
    { name: "Hobbies", href: "#hobbies" },
  ];
  // All links for mobile menu
  const allNavLinks = [
    ...primaryNavLinks.slice(0, 7),
    ...moreNavLinks,
    primaryNavLinks[7],
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
      setIsMoreDropdownOpen(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".more-dropdown")) {
        setIsMoreDropdownOpen(false);
      }
    };

    if (isMoreDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMoreDropdownOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl md:text-2xl tracking-tight hover:opacity-80 transition-opacity"
            >
              {theme === "light" ? (
                <Image
                  src={rh} // Place your logo in the public folder
                  alt="RH Logo"
                  width={50}
                  height={60}
                  className="w-10 h-10 md:w-14 md:h-14 mt-1"
                  priority
                />
              ) : (
                <Image
                  src={wlogo} // Place your logo in the public folder
                  alt="RH Logo"
                  width={50}
                  height={60}
                  className="w-10 h-10 md:w-14 md:h-14 mt-1"
                  priority
                />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {primaryNavLinks.slice(0, 7).map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-sm hover:text-[#0ea5e9] dark:hover:text-[#10b981] transition-all whitespace-nowrap group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </button>
              ))}

              {/* More Dropdown */}
              <div className="relative more-dropdown">
                <button
                  onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                  className="relative text-sm hover:text-[#0ea5e9] dark:hover:text-[#10b981] transition-all flex items-center gap-1 group px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <span className="relative z-10">More</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isMoreDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full right-0 mt-2 w-64 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ${
                    isMoreDropdownOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="p-2">
                    {moreNavLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => scrollToSection(link.href)}
                        className="w-full text-left px-4 py-3 text-sm rounded-xl hover:bg-gradient-to-r hover:from-[#0ea5e9]/10 hover:to-[#14b8a6]/10 dark:hover:from-[#10b981]/10 dark:hover:to-[#06b6d4]/10 transition-all hover:translate-x-1 flex items-center gap-3 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Link (always visible) */}
              <button
                onClick={() => scrollToSection(primaryNavLinks[7].href)}
                className="text-sm px-6 py-2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] text-white hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
              >
                {primaryNavLinks[7].name}
              </button>
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-white dark:bg-[#0a0a0a] pt-20 pb-6 px-6 overflow-y-auto">
          <nav className="space-y-2">
            {allNavLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
