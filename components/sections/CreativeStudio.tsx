"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Youtube,
  Palette,
  BookOpen,
  Compass,
  ExternalLink,
  Github,
  ArrowRight,
  Sparkles,
  Play,
  MapPin,
  Calendar,
  Film,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { creativeData } from "../../lib/portfolio-data";

type CreativeTab = "youtube" | "design" | "blogs" | "interests";

export function CreativeStudio() {
  const [activeTab, setActiveTab] = useState<CreativeTab>("youtube");
  const [showAllVideos, setShowAllVideos] = useState(false);
  const [showAllDesignWorks, setShowAllDesignWorks] = useState(false);

  const tabs: { key: CreativeTab; label: string; icon: any }[] = [
    { key: "youtube", label: "Travel & YouTube", icon: Youtube },
    { key: "design", label: "Graphic Design", icon: Palette },
    { key: "blogs", label: "Technical Writing", icon: BookOpen },
    { key: "interests", label: "Strategy & Hobbies", icon: Compass },
  ];

  return (
    <section id="beyond-code" className="py-20 px-5 sm:px-8 border-t border-[#E6E0D6] dark:border-[#2B2824]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider text-[#D96B27] bg-[#D96B27]/10 border border-[#D96B27]/30 mb-2 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D96B27]" />
              <span>CREATIVE MEDIA & VISUAL ARTS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-900 dark:text-[#F5EFE6] uppercase">
              06 // <span className="text-[#D96B27]">CREATIVE STUDIO & BEYOND CODE</span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-[#A39E95] mt-1 max-w-2xl font-normal leading-relaxed">
              Cinematic travel filmmaking, visual branding, technical writing, and strategic pursuits.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 dark:bg-[#181716] rounded-xl border border-[#E6E0D6] dark:border-[#2B2824] shrink-0 font-mono">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === tab.key
                      ? "bg-[#D96B27] text-white shadow-xs font-bold"
                      : "text-neutral-600 dark:text-[#A39E95] hover:text-neutral-900 dark:hover:text-[#F5EFE6]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: YouTube Travel Filmmaking & Cinematic Vlogs */}
        {activeTab === "youtube" && (
          <div className="animate-in fade-in duration-200 space-y-8">
            {/* Channel Spotlight Header Banner */}
            <div className="wireframe-bracket bg-white dark:bg-[#181716] rounded-2xl p-6 sm:p-8 border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center shrink-0 border border-red-500/20">
                      <Youtube className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-2xl sm:text-3xl tracking-wide text-neutral-900 dark:text-[#F5EFE6] uppercase">
                          {creativeData.youtube.channelName}
                        </h3>
                        <span className="px-2 py-0.5 text-[11px] font-mono font-bold bg-[#D96B27]/10 text-[#D96B27] rounded-md border border-[#D96B27]/30">
                          {creativeData.youtube.channelHandle}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-neutral-500 dark:text-[#A39E95]">
                        {creativeData.youtube.focus}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-600 dark:text-[#A39E95] leading-relaxed font-normal">
                    {creativeData.youtube.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                    {creativeData.youtube.categories.map((cat, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-[#201E1C] text-neutral-700 dark:text-[#F5EFE6] border border-[#E6E0D6] dark:border-[#2B2824] text-[11px]"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex sm:flex-col gap-3">
                  <a
                    href={creativeData.youtube.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>Watch Channel</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Featured Cinematic Travel Films Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-[#D96B27]" />
                  <h4 className="font-display text-xl tracking-wide text-neutral-900 dark:text-[#F5EFE6] uppercase">
                    Featured Cinematic Films & Documentaries
                  </h4>
                </div>
                <span className="text-xs font-mono text-neutral-500 dark:text-[#8C877D]">
                  High-Definition Video Works
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {(showAllVideos
                  ? creativeData.youtube.featuredVideos
                  : creativeData.youtube.featuredVideos.slice(0, 2)
                ).map((video) => (
                  <a
                    key={video.id}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group wireframe-bracket bg-white dark:bg-[#181716] rounded-2xl overflow-hidden border border-[#E6E0D6] dark:border-[#2B2824] hover:border-[#D96B27]/60 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
                  >
                    {/* Video Thumbnail with Hover Overlay */}
                    <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                      <Image
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={video.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>

                      {/* Location & Tag Badge */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[11px] font-mono border border-white/10">
                        <MapPin className="w-3 h-3 text-[#D96B27]" />
                        <span>{video.location}</span>
                      </div>

                      {/* Year / Format Badge */}
                      <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-white text-[10px] font-mono font-semibold uppercase">
                        {video.duration || "4K Film"}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h5 className="font-bold text-base text-neutral-900 dark:text-[#F5EFE6] group-hover:text-[#D96B27] transition-colors leading-snug">
                          {video.title}
                        </h5>
                        {video.banglaTitle && (
                          <p className="text-xs text-neutral-500 dark:text-[#8C877D] font-sans mt-0.5 line-clamp-1">
                            {video.banglaTitle}
                          </p>
                        )}
                        <p className="text-xs text-neutral-600 dark:text-[#A39E95] mt-2 leading-relaxed font-normal">
                          {video.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#E6E0D6] dark:border-[#2B2824] flex items-center justify-between text-xs font-mono">
                        <span className="text-neutral-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#D96B27]" />
                          {video.year}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[#D96B27] font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                          Watch Video <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Expand / Collapse More Videos Button */}
              {creativeData.youtube.featuredVideos.length > 2 && (
                <div className="flex justify-center pt-2">
                  <button
                    onClick={() => setShowAllVideos(!showAllVideos)}
                    className="px-6 py-2.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-[#181716] text-neutral-800 dark:text-[#F5EFE6] hover:border-[#D96B27] transition-all flex items-center gap-2 cursor-pointer border border-[#E6E0D6] dark:border-[#2B2824]"
                  >
                    {showAllVideos ? (
                      <>
                        <ChevronUp className="w-4 h-4 text-[#D96B27]" />
                        <span>Show Fewer Films</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 text-[#D96B27]" />
                        <span>View All Featured Films ({creativeData.youtube.featuredVideos.length})</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Production Skills & Equipment Footer */}
            <div className="p-6 bg-white dark:bg-[#181716] rounded-2xl border border-[#E6E0D6] dark:border-[#2B2824] space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#D96B27] font-bold">
                CINEMATOGRAPHY & POST-PRODUCTION WORKFLOW //
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
                {creativeData.youtube.skills.map((s, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824]"
                  >
                    <p className="font-bold text-xs text-neutral-800 dark:text-[#F5EFE6]">
                      {s.name}
                    </p>
                    {s.tools && (
                      <p className="text-neutral-500 dark:text-[#8C877D] text-[11px] mt-1">
                        {s.tools}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Graphic Design */}
        {activeTab === "design" && (
          <div className="animate-in fade-in duration-200 space-y-8">
            {/* Design Profile Banner */}
            <div className="wireframe-bracket bg-white dark:bg-[#181716] rounded-2xl p-6 sm:p-8 border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-3xl space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D96B27]" />
                    <h3 className="font-display text-2xl sm:text-3xl tracking-wide text-neutral-900 dark:text-[#F5EFE6] uppercase">
                      Graphic Design & Visual Brand Identity
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-[#A39E95] leading-relaxed font-normal">
                    {creativeData.design.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <a
                    href={creativeData.design.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#D96B27] hover:bg-[#C85A17] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <Github className="w-4 h-4" />
                    <span>Explore Design Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#D96B27] mb-3 font-semibold">
                  PRODUCTION SOFTWARE & VECTOR TOOLS //
                </h4>
                <div className="flex flex-wrap gap-2 font-mono">
                  {creativeData.design.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3.5 py-1.5 text-xs rounded-lg bg-neutral-100 dark:bg-[#201E1C] text-neutral-700 dark:text-[#F5EFE6] border border-[#E6E0D6] dark:border-[#2B2824]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Creative Works Grid */}
            {creativeData.design.featuredWorks && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-xl tracking-wide text-neutral-900 dark:text-[#F5EFE6] uppercase">
                    Featured Event Branding, Motion Graphics & Identities
                  </h4>
                  <span className="text-xs font-mono text-neutral-500">
                    Vector & Raster Artworks
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {(showAllDesignWorks
                    ? creativeData.design.featuredWorks
                    : creativeData.design.featuredWorks.slice(0, 3)
                  ).map((work, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-[#181716] rounded-2xl p-5 border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs hover:border-[#D96B27]/40 transition-colors flex flex-col justify-between"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2 font-mono text-xs">
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#D96B27]/10 text-[#D96B27] border border-[#D96B27]/30 uppercase">
                            {work.category}
                          </span>
                        </div>

                        <h5 className="font-bold text-base text-neutral-900 dark:text-[#F5EFE6] leading-snug">
                          {work.title}
                        </h5>

                        <p className="text-xs font-medium text-neutral-700 dark:text-[#A39E95]">
                          {work.clientOrContext}
                        </p>

                        <p className="text-xs text-neutral-500 dark:text-[#8C877D] leading-relaxed">
                          {work.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#E6E0D6] dark:border-[#2B2824] flex items-center justify-between font-mono text-[11px] text-neutral-400">
                        <span>Tools:</span>
                        <span className="text-neutral-700 dark:text-[#A39E95] font-medium">
                          {work.tools}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Expand / Collapse More Design Works Button */}
                {creativeData.design.featuredWorks.length > 3 && (
                  <div className="flex justify-center pt-2">
                    <button
                      onClick={() => setShowAllDesignWorks(!showAllDesignWorks)}
                      className="px-6 py-2.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-[#181716] text-neutral-800 dark:text-[#F5EFE6] hover:border-[#D96B27] transition-all flex items-center gap-2 cursor-pointer border border-[#E6E0D6] dark:border-[#2B2824]"
                    >
                      {showAllDesignWorks ? (
                        <>
                          <ChevronUp className="w-4 h-4 text-[#D96B27]" />
                          <span>Show Fewer Design Works</span>
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 text-[#D96B27]" />
                          <span>View All Design Works ({creativeData.design.featuredWorks.length})</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Technical Blogs */}
        {activeTab === "blogs" && (
          <div className="animate-in fade-in duration-200 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {creativeData.blogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="group bg-white dark:bg-[#181716] rounded-2xl overflow-hidden border border-[#E6E0D6] dark:border-[#2B2824] hover:border-[#D96B27]/50 transition-all p-5 flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5 text-xs font-mono text-neutral-500">
                      <span className="px-2.5 py-0.5 rounded-md font-medium bg-neutral-100 dark:bg-[#201E1C] text-[#D96B27] border border-[#E6E0D6] dark:border-[#2B2824]">
                        {blog.category}
                      </span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h4 className="text-base font-bold text-neutral-900 dark:text-[#F5EFE6] group-hover:text-[#D96B27] transition-colors leading-snug">
                      {blog.title}
                    </h4>

                    <p className="mt-2 text-xs text-neutral-600 dark:text-[#A39E95] line-clamp-2 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E6E0D6] dark:border-[#2B2824] flex items-center justify-between text-xs font-mono text-neutral-500">
                    <span>{blog.date}</span>
                    <span className="inline-flex items-center gap-1 text-[#D96B27] font-semibold group-hover:translate-x-1 transition-transform uppercase">
                      Read Article <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex justify-center pt-2">
              <Link
                href="/blog"
                className="px-5 py-2 rounded-full font-mono text-xs font-semibold uppercase tracking-wider bg-neutral-100 dark:bg-[#181716] text-neutral-700 dark:text-[#F5EFE6] hover:text-[#D96B27] border border-[#E6E0D6] dark:border-[#2B2824] transition-colors"
              >
                View All Blog Articles →
              </Link>
            </div>
          </div>
        )}

        {/* Tab 4: Strategy & Hobbies */}
        {activeTab === "interests" && (
          <div className="animate-in fade-in duration-200 grid md:grid-cols-2 gap-6">
            {creativeData.hobbies.map((hobby, index) => (
              <div
                key={index}
                className="wireframe-bracket bg-white dark:bg-[#181716] rounded-2xl p-6 border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs flex flex-col justify-between hover:border-[#D96B27]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{hobby.emoji}</span>
                    <h3 className="font-display text-2xl tracking-wide text-neutral-900 dark:text-[#F5EFE6] uppercase">
                      {hobby.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#A39E95] leading-relaxed font-normal mb-4">
                    {hobby.description}
                  </p>

                  <div className="space-y-2 p-3 bg-neutral-50 dark:bg-[#121110] rounded-xl border border-[#E6E0D6] dark:border-[#2B2824] text-xs font-mono">
                    {hobby.highlights.map((h, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-neutral-500">{h.label}:</span>
                        <span className="font-bold text-neutral-800 dark:text-[#F5EFE6]">
                          {h.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {hobby.link && (
                  <div className="mt-5 pt-3 border-t border-[#E6E0D6] dark:border-[#2B2824]">
                    <a
                      href={hobby.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#D96B27] hover:underline"
                    >
                      <span>→ {hobby.linkText || "View Details"}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
