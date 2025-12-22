// Next.js App Router version - Latest Blog Posts section
'use client';

import { Calendar, Clock, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Blogs() {
  const [showAll, setShowAll] = useState(false);

  const blogs = [
    {
      slug: 'building-mycuetbus-react-native-gps',
      title: 'Building MyCUETBus: Real-time GPS Tracking with React Native',
      excerpt: 'A deep dive into building a real-time university bus tracking app using React Native, Expo, and Mapbox GL with background location sharing.',
      image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY1NTkzMTU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Mobile Development',
      date: 'Dec 10, 2025',
      readTime: '8 min read',
    },
    {
      slug: 'publishing-ieee-papers-undergraduate',
      title: 'My Journey to Publishing 3 IEEE Papers as an Undergraduate',
      excerpt: 'Lessons learned and strategies for publishing academic research as a computer science student, from idea conception to conference presentation.',
      image: 'https://images.unsplash.com/photo-1717501218456-c4789b65fc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc2NTU2MjM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Research',
      date: 'Dec 8, 2025',
      readTime: '10 min read',
    },
    {
      slug: 'full-stack-cuet-foodexpress-case-study',
      title: 'Full-Stack Development: CUET FoodExpress Case Study',
      excerpt: 'Building a complete food ordering platform with React, Node.js, MongoDB, and integrating Stripe payments and Firebase authentication.',
      image: 'https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzY1NjUwOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Web Development',
      date: 'Dec 5, 2025',
      readTime: '12 min read',
    },
    {
      slug: 'bengali-nlp-banglaaste-framework',
      title: 'Machine Learning for Bengali NLP: BanglaASTE Framework',
      excerpt: 'Exploring aspect-sentiment-opinion extraction for Bengali language using BanglaBERT and XGBoost, achieving 89.9% accuracy.',
      image: 'https://images.unsplash.com/photo-1717501218456-c4789b65fc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc2NTU2MjM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Machine Learning',
      date: 'Dec 1, 2025',
      readTime: '15 min read',
    },
    {
      slug: 'getting-started-nextjs-16-typescript',
      title: 'Getting Started with Next.js 16 and TypeScript',
      excerpt: 'A comprehensive guide to building modern web applications with Next.js 16, TypeScript, and Tailwind CSS for beginners.',
      image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjU2MzE0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Web Development',
      date: 'Nov 28, 2025',
      readTime: '7 min read',
    },
    {
      slug: 'conference-paper-writing-tips-students',
      title: 'Conference Paper Writing Tips for Students',
      excerpt: 'Essential tips and best practices for writing and submitting research papers to academic conferences, based on my IEEE publication experience.',
      image: 'https://images.unsplash.com/photo-1717501218456-c4789b65fc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc2NTU2MjM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Research',
      date: 'Nov 25, 2025',
      readTime: '6 min read',
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Machine Learning':
        return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Web Development':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Mobile Development':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'Research':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  // Show only 4 blogs initially
  const displayedBlogs = showAll ? blogs : blogs.slice(0, 4);
  const hasMoreBlogs = blogs.length > 4;

  return (
    <section id="blogs" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">Latest Blog Posts</h2>
          <BookOpen className="w-8 h-8 text-[#0ea5e9] dark:text-[#10b981]" />
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {displayedBlogs.map((blog, index) => (
            <Link
              key={index}
              href={`/blog/${blog.slug}`}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-[#0ea5e9] dark:hover:border-[#10b981]"
            >
              {/* Featured Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${getCategoryColor(blog.category)}`}>
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl mb-3 line-clamp-2 group-hover:text-[#0ea5e9] dark:group-hover:text-[#10b981] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] flex items-center justify-center text-white text-xs">
                      RH
                    </div>
                    <div>
                      <p className="text-xs">Rifat Hossain</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3" />
                        <span>{blog.date}</span>
                        <span>•</span>
                        <Clock className="w-3 h-3" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <ArrowRight className="w-5 h-5 text-[#0ea5e9] dark:text-[#10b981] group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        {hasMoreBlogs && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] dark:from-[#10b981] dark:to-[#06b6d4] text-white rounded-full hover:scale-105 transition-transform flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              {showAll ? 'Show Less' : 'View All Blogs'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
