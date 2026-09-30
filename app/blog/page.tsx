"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/sections/Footer";
import { Calendar, Clock, BookOpen, ArrowRight, Tag, ArrowLeft, Lock } from "lucide-react";
import { blogService, BlogPost } from "../../lib/blog-service";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setBlogs(blogService.getAllPosts());
  }, []);

  const categories = [
    "All",
    "Mobile Engineering",
    "Academic Research",
    "Web Engineering",
    "Machine Learning",
  ];

  const filteredBlogs = blogs.filter((b) => {
    if (selectedCategory === "All") return true;
    return b.category === selectedCategory;
  });

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-28 pb-20 px-5 sm:px-8 bg-[#FBF9F5] dark:bg-[#121110] text-neutral-900 dark:text-[#F5EFE6]">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Top Breadcrumb & Return Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs pb-4 border-b border-[#E6E0D6] dark:border-[#2B2824]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#181716] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-800 dark:text-[#F5EFE6] hover:text-[#D96B27] hover:border-[#D96B27]/50 transition-all shadow-xs group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#D96B27] group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold uppercase tracking-wider">← Back to Portfolio</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-neutral-400 dark:text-[#8C877D] hidden sm:inline">
                {filteredBlogs.length} {filteredBlogs.length === 1 ? "Article" : "Articles"} Published
              </span>
              <Link
                href="/lab/login"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E6E0D6] dark:border-[#2B2824] hover:border-[#D96B27] text-neutral-600 dark:text-[#A39E95] hover:text-[#D96B27] transition-colors uppercase tracking-wider text-[11px]"
                title="Author Portal Access"
              >
                <Lock className="w-3.5 h-3.5 text-[#D96B27]" />
                <span>Author Portal</span>
              </Link>
            </div>
          </div>

          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#D96B27] bg-[#D96B27]/10 border border-[#D96B27]/30 uppercase">
              <BookOpen className="w-3.5 h-3.5 text-[#D96B27]" />
              <span>TECHNICAL WRITING & RESEARCH NOTES</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-none">
              ENGINEERING INSIGHTS & <span className="text-[#D96B27]">RESEARCH NOTES</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-[#A39E95] font-normal leading-relaxed">
              In-depth articles covering real-time mobile architectures, deep learning model deployments, Bengali natural language processing, and undergraduate research methodologies.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#D96B27] text-white font-bold shadow-xs"
                    : "bg-white dark:bg-[#181716] text-neutral-600 dark:text-[#A39E95] border border-[#E6E0D6] dark:border-[#2B2824] hover:text-neutral-900 dark:hover:text-[#F5EFE6]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="group wireframe-bracket bg-white dark:bg-[#181716] rounded-2xl overflow-hidden border border-[#E6E0D6] dark:border-[#2B2824] hover:border-[#D96B27]/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      unoptimized
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[#D96B27] text-[11px] font-mono font-semibold uppercase border border-white/10">
                      {blog.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 dark:text-[#8C877D]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#D96B27]" />
                        {blog.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {blog.readTime}
                      </span>
                    </div>

                    <h2 className="font-bold text-lg text-neutral-900 dark:text-[#F5EFE6] group-hover:text-[#D96B27] transition-colors leading-snug">
                      <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#A39E95] line-clamp-3 leading-relaxed font-normal">
                      {blog.excerpt}
                    </p>

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {blog.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-[#201E1C] text-[10px] font-mono text-neutral-600 dark:text-[#A39E95] border border-[#E6E0D6] dark:border-[#2B2824]"
                          >
                            <Tag className="w-2.5 h-2.5 text-[#D96B27]" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-[#E6E0D6] dark:border-[#2B2824] flex items-center justify-between font-mono text-xs">
                    <span className="text-neutral-400">By {blog.author}</span>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-1 text-[#D96B27] font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
