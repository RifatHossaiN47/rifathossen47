// Next.js App Router version - Individual blog post page
"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  User,
  Send,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { useTheme } from "../../../components/ThemeProvider";

export default function BlogDetailPage() {
  const params = useParams();
  const { theme, toggleTheme } = useTheme();

  const [comment, setComment] = useState({ name: "", email: "", text: "" });
  const [comments, setComments] = useState<any[]>([]);

  // In a real Next.js app, fetch blog data based on params.slug
  const blog = {
    title: "Building MyCUETBus: Real-time GPS Tracking with React Native",
    image: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07",
    author: "Rifat Hossain",
    date: "Dec 10, 2025",
    readTime: "8 min read",
    category: "Mobile Development",
    content: `
      <h2>Introduction</h2>
      <p>Building a real-time GPS tracking application requires careful consideration of multiple technical challenges. In this article, I'll walk you through the development process of MyCUETBus.</p>
      
      <h2>Technical Stack</h2>
      <p>For this project, I chose the following technologies:</p>
      <ul>
        <li>React Native with Expo for cross-platform mobile development</li>
        <li>Mapbox GL for interactive maps and real-time location rendering</li>
        <li>Firebase Realtime Database for live location updates</li>
        <li>NativeWind for styling</li>
      </ul>

      <h2>Key Features</h2>
      <p>The application includes several important features:</p>
      <ul>
        <li>Real-time bus location tracking on an interactive map</li>
        <li>Route visualization with estimated arrival times</li>
        <li>Push notifications for bus arrivals</li>
        <li>Offline support for route information</li>
      </ul>

      <h2>Challenges and Solutions</h2>
      <p>One of the biggest challenges was maintaining accurate GPS tracking while managing battery consumption. We implemented smart location updates that adjust the frequency based on the bus's movement speed.</p>

      <h2>Conclusion</h2>
      <p>Building MyCUETBus taught me valuable lessons about mobile development, real-time systems, and user experience design. The app is now used by hundreds of students daily.</p>
    `,
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.name && comment.email && comment.text) {
      setComments([
        ...comments,
        {
          ...comment,
          id: Date.now(),
          date: new Date().toLocaleDateString(),
        },
      ]);
      setComment({ name: "", email: "", text: "" });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-[900px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:text-[#0ea5e9] dark:hover:text-[#10b981] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      <main className="max-w-[900px] mx-auto px-6 py-12">
        {/* Blog Header */}
        <article>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">
            {blog.category}
          </span>

          <h1 className="mt-6 mb-4">{blog.title}</h1>

          <div className="flex items-center gap-4 mb-8 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="text-sm">{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{blog.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-2xl mb-8"
          />

          {/* Blog Content */}
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-4">
              <Share2 className="w-5 h-5" />
              <span className="font-medium">Share this article:</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Comments</h2>

          {/* Comment Form */}
          <form
            onSubmit={handleSubmitComment}
            className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 mb-8"
          >
            <h3 className="font-medium mb-4">Leave a Comment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Input
                placeholder="Your Name"
                value={comment.name}
                onChange={(e) =>
                  setComment({ ...comment, name: e.target.value })
                }
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={comment.email}
                onChange={(e) =>
                  setComment({ ...comment, email: e.target.value })
                }
                required
              />
            </div>
            <Textarea
              placeholder="Your Comment"
              value={comment.text}
              onChange={(e) => setComment({ ...comment, text: e.target.value })}
              rows={4}
              className="mb-4"
              required
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-teal-500 dark:from-emerald-500 dark:to-cyan-500"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Comment
            </Button>
          </form>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((c) => (
              <div
                key={c.id}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-500 dark:from-emerald-500 dark:to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {c.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-medium">{c.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {c.date}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{c.text}</p>
              </div>
            ))}
            {comments.length === 0 && (
              <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                No comments yet. Be the first to comment!
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
