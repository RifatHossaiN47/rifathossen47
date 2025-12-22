// Next.js App Router version - Admin dashboard page
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LogOut,
  Plus,
  Edit,
  Trash2,
  FileText,
  BarChart3,
  Eye,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { useTheme } from "../../../components/ThemeProvider";

export default function DashboardPage() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalViews: 0,
    totalComments: 0,
  });

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/lab/login");
    }

    // In production, fetch blogs from Supabase
    // For now, using mock data
    setBlogs([
      {
        id: "1",
        title: "Building MyCUETBus: Real-time GPS Tracking",
        date: "Dec 10, 2025",
        views: 1234,
        comments: 15,
        published: true,
      },
      // Add more mock blogs
    ]);

    setStats({
      totalBlogs: 1,
      totalViews: 1234,
      totalComments: 15,
    });
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/lab/login");
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
      // In production, delete from Supabase
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a]">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Rifat&apos;s Lab
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Admin Dashboard
              </p>
            </div>
            <div className="flex items-center gap-3">
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
              <Link href="/">
                <Button variant="outline">View Portfolio</Button>
              </Link>
              <Button onClick={handleLogout} variant="outline">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Total Blogs
                </p>
                <p className="text-3xl font-bold mt-1">{stats.totalBlogs}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Total Views
                </p>
                <p className="text-3xl font-bold mt-1">{stats.totalViews}</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                <Eye className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Comments
                </p>
                <p className="text-3xl font-bold mt-1">{stats.totalComments}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Management */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <h2 className="text-xl font-bold">Blog Posts</h2>
            <Link href="/lab/dashboard/blogs/create">
              <Button className="bg-gradient-to-r from-blue-600 to-teal-500 dark:from-emerald-500 dark:to-cyan-500">
                <Plus className="w-4 h-4 mr-2" />
                New Blog Post
              </Button>
            </Link>
          </div>

          <div className="p-6">
            {blogs.length === 0 ? (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No blog posts yet. Create your first one!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{blog.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.views} views</span>
                        <span>•</span>
                        <span>{blog.comments} comments</span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs ${
                            blog.published
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                          }`}
                        >
                          {blog.published ? "Published" : "Draft"}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link href={`/lab/dashboard/blogs/edit/${blog.id}`}>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(blog.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
