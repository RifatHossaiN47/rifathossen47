// Next.js App Router version - Beyond Code: Hobbies & Interests section
"use client";

import { useState, useEffect, useRef } from "react";
import {
  Globe,
  Film,
  Crown,
  ExternalLink,
  MapPin,
  Users,
  Camera,
  Sparkles,
} from "lucide-react";

export function Hobbies() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const hobbies = [
    {
      icon: Globe,
      emoji: "🌍",
      title: "Travel & Exploration",
      description:
        "Passionate about discovering new places, cultures, and landscapes across Bangladesh and beyond. Capturing moments through the lens while exploring hidden gems.",
      highlights: [
        {
          icon: MapPin,
          label: "Favorite Destination",
          value: "Cox's Bazar 🇧🇩",
        },
        {
          icon: Camera,
          label: "Travel Style",
          value: "Adventure, Nature, Culture",
        },
        { icon: Globe, label: "Places Visited", value: "30+" },
      ],
      buttonText: "See Travel Vlogs",
      buttonLink: "#videos",
      buttonExternal: false,
      gradient: "from-blue-500 to-cyan-500",
      bgPattern:
        "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    },
    {
      icon: Film,
      emoji: "🎬",
      title: "Videography & Content Creation",
      description:
        "Creating cinematic travel vlogs and storytelling through video. From planning shots to post-production, bringing stories to life on screen.",
      highlights: [
        { icon: Users, label: "YouTube Subscribers", value: "20.9K+" },
        {
          icon: Film,
          label: "Content Type",
          value: "Travel Vlogs, Cinematic Videos",
        },
        {
          icon: Sparkles,
          label: "Video Editing",
          value: "Premiere, DaVinci, CapCut",
        },
      ],
      buttonText: "Visit YouTube Channel",
      buttonLink: "https://www.youtube.com/@RifatHossaiNBro",
      buttonExternal: true,
      gradient: "from-red-500 to-pink-500",
      bgPattern:
        "bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20",
    },
    {
      icon: Crown,
      emoji: "♟️",
      title: "Chess - Strategic Mind Games",
      description:
        "Developing strategic thinking and mental agility through chess. Enjoy online matches and puzzle solving on Chess.com.",
      highlights: [
        { icon: Crown, label: "Platform", value: "Chess.com" },
        { icon: Users, label: "Username", value: "@rifathossain47" },
        { icon: Sparkles, label: "Favorite Mode", value: "Rapid & Blitz" },
      ],
      buttonText: "View Chess.com Profile",
      buttonLink: "https://www.chess.com/member/rifathossain47",
      buttonExternal: true,
      gradient: "from-amber-600 to-yellow-500",
      bgPattern:
        "bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20",
      chessPattern: true,
    },
  ];

  const interests = [
    { icon: "📚", label: "Reading Tech Blogs" },
    { icon: "🎵", label: "Music & Podcasts" },
    { icon: "☕", label: "Coffee & Conversations" },
    { icon: "🏕️", label: "Camping & Hiking" },
    { icon: "📷", label: "Photography" },
    { icon: "🎮", label: "Gaming" },
  ];

  const scrollToSection = (href: string) => {
    if (!href.startsWith("#")) return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hobbies"
      className="py-24 md:py-32 px-6 md:px-12 bg-white dark:bg-[#0a0a0a]"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Beyond Code: Hobbies & Interests
            </h2>
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-[#0ea5e9] dark:text-[#10b981]" />
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Exploring the world, creating stories, and strategic thinking
          </p>
        </div>

        {/* Hobby Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Chess Pattern Background (only for chess card) */}
              {hobby.chessPattern && (
                <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
                  <div className="grid grid-cols-8 grid-rows-8 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`${
                          (Math.floor(i / 8) + (i % 8)) % 2 === 0
                            ? "bg-black"
                            : "bg-transparent"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Gradient Background */}
              <div className={`${hobby.bgPattern} p-8`}>
                <div className="text-6xl mb-4 text-center">{hobby.emoji}</div>
                <h3
                  className={`text-2xl mb-4 text-center bg-gradient-to-r ${hobby.gradient} bg-clip-text text-transparent`}
                >
                  {hobby.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {hobby.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  {hobby.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="flex items-center gap-3 text-sm"
                    >
                      <highlight.icon
                        className={`w-5 h-5 text-gray-600 dark:text-gray-400`}
                      />
                      <span className="text-gray-600 dark:text-gray-400">
                        {highlight.label}:
                      </span>
                      <span
                        className={`bg-gradient-to-r ${hobby.gradient} bg-clip-text text-transparent`}
                      >
                        {highlight.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                {hobby.buttonExternal ? (
                  <a
                    href={hobby.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 bg-gradient-to-r ${hobby.gradient} text-white rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer`}
                  >
                    {hobby.buttonText}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={() => scrollToSection(hobby.buttonLink)}
                    className={`w-full py-3 px-4 bg-gradient-to-r ${hobby.gradient} text-white rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer`}
                  >
                    {hobby.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Interests */}
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl mb-8 text-center">Additional Interests</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {interests.map((interest, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#0ea5e9]/10 to-[#14b8a6]/10 dark:from-[#10b981]/10 dark:to-[#06b6d4]/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {interest.icon}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {interest.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Quote */}
        <div className="mt-12 text-center">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 italic">
            &quot;Life is about balance -{" "}
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] bg-clip-text text-transparent">
              code hard, explore harder
            </span>
            &quot;
          </p>
        </div>
      </div>
    </section>
  );
}
