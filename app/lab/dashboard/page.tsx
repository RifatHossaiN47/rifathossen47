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
  Eye,
  Sun,
  Moon,
  ArrowLeft,
  CheckCircle2,
  FolderOpen,
  MessageSquare,
  Sparkles,
  X,
  Save,
} from "lucide-react";
import { useTheme } from "../../../components/ThemeProvider";
import { blogService, BlogPost } from "../../../lib/blog-service";

export default function DashboardPage() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Form State for creating / editing articles
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "Mobile Engineering",
    excerpt: "",
    content: "",
    readTime: "8 min read",
    author: "Md Rifat Hossen",
    image: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?auto=format&fit=crop&w=1080&q=80",
    tags: "React Native, Engineering",
    published: true,
  });

  useEffect(() => {
    // Verify admin authentication
    const token = localStorage.getItem("rifat_lab_token");
    if (!token) {
      router.push("/lab/login");
      return;
    }

    // Load blogs from blogService
    const allPosts = blogService.getAllPosts();
    setBlogs(allPosts);
  }, [router]);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem("rifat_lab_token");
    localStorage.removeItem("isAuthenticated");
    router.push("/lab/login");
  };

  const handleOpenCreate = () => {
    setEditingId(null);
    setFormData({
      title: "",
      slug: "",
      category: "Web Engineering",
      excerpt: "",
      content: "",
      readTime: "8 min read",
      author: "Md Rifat Hossen",
      image: "https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?auto=format&fit=crop&w=1080&q=80",
      tags: "Engineering, Systems",
      published: true,
    });
    setIsEditorOpen(true);
  };

  const handleOpenEdit = (blog: BlogPost) => {
    setEditingId(blog.id);
    setFormData({
      title: blog.title,
      slug: blog.slug,
      category: blog.category,
      excerpt: blog.excerpt,
      content: blog.content,
      readTime: blog.readTime,
      author: blog.author,
      image: blog.image,
      tags: blog.tags.join(", "),
      published: blog.published,
    });
    setIsEditorOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to permanently delete this article?")) {
      blogService.deletePost(id);
      setBlogs(blogService.getAllPosts());
      showToast("Article deleted successfully.");
    }
  };

  const handleTitleChange = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      title: val,
      slug: prev.slug || val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""),
    }));
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.slug) {
      alert("Please enter a title and slug.");
      return;
    }

    const tagsArray = formData.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    if (editingId) {
      // Update existing post
      blogService.updatePost(editingId, {
        title: formData.title,
        slug: formData.slug,
        category: formData.category,
        excerpt: formData.excerpt,
        content: formData.content,
        readTime: formData.readTime,
        author: formData.author,
        image: formData.image,
        tags: tagsArray,
        published: formData.published,
      });
      showToast("Article updated successfully!");
    } else {
      // Create new post
      blogService.createPost({
        title: formData.title,
        slug: formData.slug,
        category: formData.category,
        excerpt: formData.excerpt,
        content: formData.content,
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        readTime: formData.readTime,
        author: formData.author,
        image: formData.image,
        tags: tagsArray,
        published: formData.published,
      });
      showToast("New article published successfully!");
    }

    setBlogs(blogService.getAllPosts());
    setIsEditorOpen(false);
  };

  // Stats
  const totalPosts = blogs.length;
  const categoriesCount = new Set(blogs.map((b) => b.category)).size;

  return (
    <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#121110] text-neutral-900 dark:text-[#F5EFE6]">
      {/* Top Admin Header */}
      <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 dark:bg-[#121110]/90 backdrop-blur-md border-b border-[#E6E0D6] dark:border-[#2B2824]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 rounded-xl bg-white dark:bg-[#181716] border border-[#E6E0D6] dark:border-[#2B2824] hover:text-[#D96B27] transition-colors"
              title="Return to Portfolio"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display text-2xl tracking-wide uppercase text-neutral-900 dark:text-[#F5EFE6]">
                  RIFAT&apos;S <span className="text-[#D96B27]">LAB</span>
                </h1>
                <span className="px-2 py-0.5 rounded-md font-mono text-[10px] font-bold bg-[#D96B27]/10 text-[#D96B27] border border-[#D96B27]/30 uppercase">
                  Admin Dashboard
                </span>
              </div>
              <p className="text-[11px] font-mono text-neutral-500 dark:text-[#A39E95]">
                Content Publishing & Article Store
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 font-mono text-xs">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white dark:bg-[#181716] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-700 dark:text-[#A39E95] hover:text-[#D96B27] transition-colors shadow-xs"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4 text-[#D96B27]" />
              )}
            </button>

            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-[#181716] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-700 dark:text-[#F5EFE6] hover:text-[#D96B27] transition-colors uppercase tracking-wider"
            >
              <Eye className="w-3.5 h-3.5 text-[#D96B27]" />
              <span>View Public Blog</span>
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 transition-colors uppercase tracking-wider cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 py-8 space-y-8">
        {/* Toast Notification */}
        {notification && (
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono flex items-center gap-2 animate-in fade-in duration-200">
            <CheckCircle2 className="w-4 h-4" />
            <span>{notification}</span>
          </div>
        )}

        {/* Dashboard Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 font-mono">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#181716] border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-[#A39E95]">
                Published Articles
              </p>
              <p className="font-display text-4xl text-neutral-900 dark:text-[#F5EFE6] mt-1">
                {totalPosts}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#D96B27]/10 text-[#D96B27] flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#181716] border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-[#A39E95]">
                Active Categories
              </p>
              <p className="font-display text-4xl text-[#D96B27] mt-1">
                {categoriesCount}
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <FolderOpen className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-[#181716] border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-[#A39E95]">
                Reader Engagement
              </p>
              <p className="font-display text-4xl text-emerald-500 mt-1">
                Active
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Article Editor Form Modal / Drawer */}
        {isEditorOpen && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181716] border-2 border-[#D96B27]/40 shadow-xl space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#E6E0D6] dark:border-[#2B2824]">
              <div>
                <h3 className="font-display text-2xl tracking-wide uppercase text-neutral-900 dark:text-[#F5EFE6]">
                  {editingId ? "Edit Technical Article" : "Compose New Article"}
                </h3>
                <p className="text-xs font-mono text-neutral-500 dark:text-[#A39E95]">
                  Publish research notes, system design walkthroughs, and code tutorials
                </p>
              </div>

              <button
                onClick={() => setIsEditorOpen(false)}
                className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-[#201E1C] text-neutral-400 hover:text-neutral-700 dark:hover:text-[#F5EFE6]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSavePost} className="space-y-4 font-mono text-xs">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] mb-1 font-semibold">
                    Article Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. Architecting Distributed Telemetry Systems"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-900 dark:text-[#F5EFE6] focus:outline-hidden focus:border-[#D96B27]"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] mb-1 font-semibold">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="architecting-distributed-telemetry-systems"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-900 dark:text-[#F5EFE6] focus:outline-hidden focus:border-[#D96B27]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] mb-1 font-semibold">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-900 dark:text-[#F5EFE6] focus:outline-hidden focus:border-[#D96B27]"
                  >
                    <option value="Mobile Engineering">Mobile Engineering</option>
                    <option value="Academic Research">Academic Research</option>
                    <option value="Web Engineering">Web Engineering</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Systems & IoT">Systems & IoT</option>
                  </select>
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] mb-1 font-semibold">
                    Estimated Read Time
                  </label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    placeholder="8 min read"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-900 dark:text-[#F5EFE6] focus:outline-hidden focus:border-[#D96B27]"
                  />
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] mb-1 font-semibold">
                    Tags (Comma Separated)
                  </label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    placeholder="React, Expo, Architecture"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-900 dark:text-[#F5EFE6] focus:outline-hidden focus:border-[#D96B27]"
                  />
                </div>
              </div>

              <div>
                <label className="block uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] mb-1 font-semibold">
                  Featured Image URL
                </label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-900 dark:text-[#F5EFE6] focus:outline-hidden focus:border-[#D96B27]"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] mb-1 font-semibold">
                  Short Excerpt / Abstract
                </label>
                <textarea
                  rows={2}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="2-sentence synopsis for the blog feed card..."
                  className="w-full px-4 py-2 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-900 dark:text-[#F5EFE6] focus:outline-hidden focus:border-[#D96B27]"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] mb-1 font-semibold">
                  Full Article Body (HTML / Markdown Supported)
                </label>
                <textarea
                  rows={10}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="<h2>Heading</h2><p>Article body content...</p>"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-900 dark:text-[#F5EFE6] font-mono text-xs focus:outline-hidden focus:border-[#D96B27] leading-relaxed"
                />
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#E6E0D6] dark:border-[#2B2824]">
                <button
                  type="button"
                  onClick={() => setIsEditorOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-[#2B2824] text-neutral-600 dark:text-[#A39E95] hover:bg-neutral-100 dark:hover:bg-[#201E1C]"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#D96B27] hover:bg-[#C85A17] text-white font-bold uppercase tracking-wider shadow-xs cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingId ? "Update Article" : "Publish Article"}</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Blog Post Management Table */}
        <div className="rounded-3xl bg-white dark:bg-[#181716] border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs overflow-hidden">
          <div className="p-6 border-b border-[#E6E0D6] dark:border-[#2B2824] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl tracking-wide uppercase text-neutral-900 dark:text-[#F5EFE6]">
                Technical Writing Catalog
              </h2>
              <p className="text-xs font-mono text-neutral-500 dark:text-[#A39E95]">
                Manage all published research notes, tutorials, and engineering articles
              </p>
            </div>

            {!isEditorOpen && (
              <button
                onClick={handleOpenCreate}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D96B27] hover:bg-[#C85A17] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Write New Article</span>
              </button>
            )}
          </div>

          <div className="p-6">
            {blogs.length === 0 ? (
              <div className="text-center py-12 font-mono text-xs text-neutral-500">
                <FileText className="w-10 h-10 mx-auto mb-2 text-neutral-400" />
                <p>No articles found. Click &quot;Write New Article&quot; to publish your first post!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824] flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#D96B27]/40 transition-colors"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                        <span className="px-2.5 py-0.5 rounded-md font-semibold text-[10px] bg-[#D96B27]/10 text-[#D96B27] border border-[#D96B27]/30 uppercase">
                          {blog.category}
                        </span>
                        <span className="text-neutral-500">•</span>
                        <span className="text-neutral-500">{blog.date}</span>
                        <span className="text-neutral-500">•</span>
                        <span className="text-neutral-500">{blog.readTime}</span>
                      </div>

                      <h3 className="font-bold text-base text-neutral-900 dark:text-[#F5EFE6]">
                        {blog.title}
                      </h3>

                      <p className="text-xs text-neutral-600 dark:text-[#A39E95] line-clamp-1">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs shrink-0">
                      <Link
                        href={`/blog/${blog.slug}`}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#E6E0D6] dark:border-[#2B2824] bg-white dark:bg-[#181716] text-neutral-700 dark:text-[#A39E95] hover:text-[#D96B27] transition-colors"
                        title="View Public Article"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View</span>
                      </Link>

                      <button
                        onClick={() => handleOpenEdit(blog)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#E6E0D6] dark:border-[#2B2824] bg-white dark:bg-[#181716] text-neutral-700 dark:text-[#A39E95] hover:text-[#D96B27] transition-colors cursor-pointer"
                        title="Edit Article"
                      >
                        <Edit className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-red-500/30 bg-red-500/10 text-red-600 hover:bg-red-500/20 transition-colors cursor-pointer"
                        title="Delete Article"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
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
