// Next.js App Router version - Content Creation & Video Production section
"use client";

import { useState, useEffect } from "react";
import {
  Youtube,
  Play,
  Clock,
  Eye,
  ExternalLink,
  Video,
  Camera,
  Film,
  Sparkles,
} from "lucide-react";

export function Videos() {
  const [subscriberCount, setSubscriberCount] = useState(0);
  const targetSubscribers = 20900;

  // Animated counter effect
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetSubscribers / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetSubscribers) {
        setSubscriberCount(targetSubscribers);
        clearInterval(timer);
      } else {
        setSubscriberCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Youtube, label: "Subscribers", value: "20.9K+", gradient: true },
    { icon: Video, label: "Videos Published", value: "15+", gradient: false },
    { icon: Eye, label: "Total Views", value: "1M+", gradient: false },
    { icon: Camera, label: "Places Covered", value: "30+", gradient: false },
  ];

  const contentCategories = [
    { icon: "🌍", label: "Travel Vlogs" },
    { icon: "🎥", label: "Cinematic Videos" },
    { icon: "🏔️", label: "Nature & Tours" },
    { icon: "✨", label: "Creative Content" },
  ];

  const videoSkills = [
    {
      icon: "🎥",
      skill: "Video Editing",
      tools: "Adobe Premiere Pro / DaVinci Resolve / CapCut",
    },
    { icon: "📹", skill: "Cinematography & Camera Operation", tools: "" },
    { icon: "🎨", skill: "Color Grading & Correction", tools: "" },
    { icon: "🎵", skill: "Audio Editing & Sound Design", tools: "" },
    { icon: "✂️", skill: "Motion Graphics & Visual Effects", tools: "" },
    { icon: "📸", skill: "Photography & Composition", tools: "" },
    { icon: "🎬", skill: "Storytelling & Content Planning", tools: "" },
    { icon: "📱", skill: "Mobile Videography", tools: "" },
    { icon: "🖼️", skill: "Thumbnail Design", tools: "" },
    { icon: "📊", skill: "YouTube Analytics & Growth Strategy", tools: "" },
  ];

  const featuredVideos = [
    {
      id: 1,
      title: "Exploring Cox's Bazar | Cinematic Travel Vlog",
      thumbnail:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNpbmVtYXRpY3xlbnwwfHx8fDE3MzM5NjQwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "12:45",
      views: "45K",
      date: "2 weeks ago",
      category: "Travel Vlog",
      url: "https://www.youtube.com/@RifatHossaiNBro",
    },
    {
      id: 2,
      title: "CUET Campus Tour | University Life in Bangladesh",
      thumbnail:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTczMzk2NDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "15:20",
      views: "32K",
      date: "1 month ago",
      category: "Tour Guide",
      url: "https://www.youtube.com/@RifatHossaiNBro",
    },
    {
      id: 3,
      title: "Chittagong Hill Tracts Adventure | Nature Cinematography",
      thumbnail:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3MzM5NjQwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "18:30",
      views: "58K",
      date: "3 weeks ago",
      category: "Cinematic",
      url: "https://www.youtube.com/@RifatHossaiNBro",
    },
    {
      id: 4,
      title: "Behind the Scenes: My Video Production Setup",
      thumbnail:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb258ZW58MHx8fHwxNzMzOTY0MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "10:15",
      views: "28K",
      date: "2 months ago",
      category: "Behind the Scenes",
      url: "https://www.youtube.com/@RifatHossaiNBro",
    },
    {
      id: 5,
      title: "Travel Photography & Videography Tips",
      thumbnail:
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHRyYXZlbHxlbnwwfHx8fDE3MzM5NjQwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "14:05",
      views: "41K",
      date: "1 month ago",
      category: "Tutorial",
      url: "https://www.youtube.com/@RifatHossaiNBro",
    },
    {
      id: 6,
      title: "Road Trip to Sylhet | Epic Journey Through Tea Gardens",
      thumbnail:
        "https://images.unsplash.com/photo-1563789031959-4c02bcb41319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBwbGFudGF0aW9ufGVufDB8fHx8MTczMzk2NDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "20:45",
      views: "67K",
      date: "2 weeks ago",
      category: "Travel Vlog",
      url: "https://www.youtube.com/@RifatHossaiNBro",
    },
  ];

  return (
    <section
      id="videos"
      className="py-24 md:py-32 px-6 md:px-12 bg-white dark:bg-[#0a0a0a]"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Content Creation & Video Production
            </h2>
            <Film className="w-8 h-8 md:w-10 md:h-10 text-[#0ea5e9] dark:text-[#10b981]" />
          </div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Storytelling through cinematic visuals and engaging narratives
          </p>
        </div>

        {/* YouTube Channel Card */}
        <div className="mb-16 bg-gradient-to-br from-[#0ea5e9]/10 to-[#14b8a6]/10 dark:from-[#10b981]/10 dark:to-[#06b6d4]/10 rounded-3xl p-8 md:p-12 border border-[#0ea5e9]/20 dark:border-[#10b981]/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Channel Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Youtube className="w-10 h-10 text-[#FF0000]" />
                <h3 className="text-2xl md:text-3xl">Rifat HossaiN.</h3>
              </div>
              <div className="mb-6">
                <div className="text-5xl md:text-6xl bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] bg-clip-text text-transparent mb-2">
                  {subscriberCount.toLocaleString()}
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Subscribers
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Bangladeshi travel vlogger creating destination-focused content,
                cinematic travel vlogs, nature videos, and creative storytelling
                through video
              </p>

              {/* Content Categories */}
              <div className="flex flex-wrap gap-3 mb-6">
                {contentCategories.map((category, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm flex items-center gap-2"
                  >
                    <span>{category.icon}</span>
                    <span>{category.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.youtube.com/@RifatHossaiNBro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] text-white rounded-full hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <Youtube className="w-5 h-5" />
                  Visit YouTube Channel
                </a>
              </div>
            </div>

            {/* Right: Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center hover:scale-105 transition-transform"
                >
                  <stat.icon
                    className={`w-8 h-8 mx-auto mb-3 ${
                      stat.gradient
                        ? "text-[#FF0000]"
                        : "text-[#0ea5e9] dark:text-[#10b981]"
                    }`}
                  />
                  <div
                    className={`text-3xl mb-1 ${
                      stat.gradient
                        ? "bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] bg-clip-text text-transparent"
                        : ""
                    }`}
                  >
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Videos Grid
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl mb-8 text-center md:text-left">
            Featured Videos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredVideos.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                
                <div className="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-[#FF0000] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>

                  
                  <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/80 rounded-lg text-white text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {video.duration}
                  </div>

                  
                  <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] rounded-full text-white text-sm">
                    {video.category}
                  </div>
                </div>

                
                <div className="p-6">
                  <h4 className="text-lg mb-3 line-clamp-2 group-hover:text-[#0ea5e9] dark:group-hover:text-[#10b981] transition-colors">
                    {video.title}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {video.views} views
                    </div>
                    <span>•</span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          
          <div className="flex justify-center mt-8">
            <a
              href="https://www.youtube.com/@RifatHossaiNBro"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#0ea5e9] dark:border-[#10b981] text-[#0ea5e9] dark:text-[#10b981] rounded-full hover:bg-[#0ea5e9]/10 dark:hover:bg-[#10b981]/10 transition-all flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              View All Videos on YouTube
            </a>
          </div>
        </div> */}

        {/* Video Production Skills */}
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <Sparkles className="w-8 h-8 text-[#0ea5e9] dark:text-[#10b981]" />
            <h3 className="text-2xl md:text-3xl">Video Production Skills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videoSkills.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="mb-1">{item.skill}</h4>
                    {item.tools && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.tools}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
