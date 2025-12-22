// Next.js App Router version - Blog listing page
import Link from "next/link";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/sections/Footer";
import { Button } from "../../components/ui/button";
import { Calendar, Clock, User } from "lucide-react";

// In a real Next.js app, this would fetch from Supabase or your database
async function getBlogPosts() {
  // Mock data - replace with actual data fetching
  return [
    {
      id: "1",
      slug: "building-mycuetbus",
      title: "Building MyCUETBus: Real-time GPS Tracking with React Native",
      excerpt:
        "Learn how I built a real-time GPS tracking system for university buses using React Native and Firebase.",
      image: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07",
      author: "Rifat Hossain",
      date: "Dec 10, 2025",
      readTime: "8 min read",
      tags: ["React Native", "Firebase", "Mobile Dev"],
    },
    // Add more blog posts
  ];
}

export default async function BlogPage() {
  const blogs = await getBlogPosts();

  return (
    <>
      <Navigation />
      <main className="min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
              Blog
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, mobile
              apps, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/blog/${blog.slug}`}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-gray-600 dark:text-gray-400 text-sm">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                      <span>•</span>
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {blog.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
