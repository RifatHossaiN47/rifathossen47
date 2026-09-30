"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Navigation } from "../../../components/Navigation";
import { Footer } from "../../../components/sections/Footer";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Copy,
  Check,
  Send,
  MessageSquare,
  Tag,
  BookOpen,
} from "lucide-react";
import { blogService, BlogPost, BlogComment } from "../../../lib/blog-service";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";

  const [post, setPost] = useState<BlogPost | null>(null);
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [commentForm, setCommentForm] = useState({ name: "", email: "", text: "" });
  const [copied, setCopied] = useState(false);
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  useEffect(() => {
    if (slug) {
      const foundPost = blogService.getPostBySlug(slug);
      setPost(foundPost || null);
      setComments(blogService.getComments(slug));
    }
  }, [slug]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentForm.name.trim() || !commentForm.text.trim()) return;

    const newComment = blogService.addComment(slug, {
      name: commentForm.name.trim(),
      email: commentForm.email.trim(),
      text: commentForm.text.trim(),
    });

    setComments([newComment, ...comments]);
    setCommentForm({ name: "", email: "", text: "" });
    setCommentSubmitted(true);
    setTimeout(() => setCommentSubmitted(false), 4000);
  };

  if (!post) {
    return (
      <>
        <Navigation />
        <main className="min-h-[80vh] flex items-center justify-center px-6 bg-[#FBF9F5] dark:bg-[#121110] text-neutral-900 dark:text-[#F5EFE6]">
          <div className="text-center space-y-4 max-w-md font-mono">
            <BookOpen className="w-12 h-12 text-[#D96B27] mx-auto opacity-70" />
            <h1 className="font-display text-3xl uppercase tracking-tight">Article Not Found</h1>
            <p className="text-xs text-neutral-500 dark:text-[#A39E95]">
              The requested technical writing piece could not be located.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D96B27] text-white text-xs uppercase tracking-wider font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to All Articles</span>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-28 pb-20 px-5 sm:px-8 bg-[#FBF9F5] dark:bg-[#121110] text-neutral-900 dark:text-[#F5EFE6]">
        <article className="max-w-4xl mx-auto space-y-10">
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-neutral-500 pb-4 border-b border-[#E6E0D6] dark:border-[#2B2824]">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 hover:text-[#D96B27] transition-colors"
                title="Return to Portfolio Home"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#D96B27]" />
                <span>Portfolio</span>
              </Link>
              <span className="text-neutral-400">/</span>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 hover:text-[#D96B27] transition-colors"
                title="View All Technical Articles"
              >
                <span>Articles</span>
              </Link>
            </div>
            <span className="px-2.5 py-0.5 rounded-md font-semibold text-[10px] bg-[#D96B27]/10 text-[#D96B27] border border-[#D96B27]/30 uppercase">
              {post.category}
            </span>
          </div>

          {/* Article Header */}
          <div className="space-y-4">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight uppercase text-neutral-900 dark:text-[#F5EFE6]">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-[#A39E95] font-normal leading-relaxed">
              {post.excerpt}
            </p>

            {/* Metadata Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-neutral-500 dark:text-[#8C877D] border-y border-[#E6E0D6] dark:border-[#2B2824] py-3">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5 text-neutral-800 dark:text-[#F5EFE6] font-medium">
                  <User className="w-3.5 h-3.5 text-[#D96B27]" />
                  {post.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D96B27]" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D96B27]" />
                  {post.readTime}
                </span>
              </div>

              {/* Share Button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E6E0D6] dark:border-[#2B2824] bg-white dark:bg-[#181716] text-neutral-700 dark:text-[#A39E95] hover:text-[#D96B27] transition-colors cursor-pointer"
                  title="Copy Link to Clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Share Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Featured Cover Banner */}
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-[#E6E0D6] dark:border-[#2B2824] shadow-md bg-neutral-900">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Article Rich Body Content */}
          <div
            className="prose prose-neutral dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-4
              prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wide prose-headings:text-neutral-900 dark:prose-headings:text-[#F5EFE6]
              prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-3 prose-h2:border-b prose-h2:border-[#E6E0D6] dark:prose-h2:border-[#2B2824] prose-h2:pb-2
              prose-p:text-neutral-700 dark:prose-p:text-[#C7C2BA]
              prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-1.5
              prose-ol:list-decimal prose-ol:pl-5 prose-ol:space-y-1.5
              prose-li:text-neutral-700 dark:prose-li:text-[#C7C2BA]
              prose-code:text-[#D96B27] prose-code:font-mono prose-code:bg-neutral-100 dark:prose-code:bg-[#201E1C] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-xs
              prose-blockquote:border-l-4 prose-blockquote:border-[#D96B27] prose-blockquote:pl-4 prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tag Pills */}
          {post.tags && post.tags.length > 0 && (
            <div className="pt-6 border-t border-[#E6E0D6] dark:border-[#2B2824]">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="text-neutral-500 uppercase tracking-wider mr-2">Tags:</span>
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-neutral-100 dark:bg-[#181716] text-neutral-700 dark:text-[#A39E95] border border-[#E6E0D6] dark:border-[#2B2824]"
                  >
                    <Tag className="w-3 h-3 text-[#D96B27]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Comments Section */}
          <section className="pt-10 border-t border-[#E6E0D6] dark:border-[#2B2824] space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#D96B27]" />
                <h3 className="font-display text-2xl tracking-wide uppercase text-neutral-900 dark:text-[#F5EFE6]">
                  Reader Discussion ({comments.length})
                </h3>
              </div>
              <span className="font-mono text-xs text-neutral-500">
                Join the conversation
              </span>
            </div>

            {/* Leave a Comment Form */}
            <div className="wireframe-bracket p-6 rounded-2xl bg-white dark:bg-[#181716] border border-[#E6E0D6] dark:border-[#2B2824] shadow-xs space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#D96B27] font-semibold">
                Leave a Thought or Question //
              </h4>

              {commentSubmitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Thank you! Your comment has been posted.</span>
                </div>
              )}

              <form onSubmit={handleSubmitComment} className="space-y-4 font-mono text-xs">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={commentForm.name}
                      onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-900 dark:text-[#F5EFE6] focus:outline-hidden focus:border-[#D96B27]"
                    />
                  </div>
                  <div>
                    <label className="block uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={commentForm.email}
                      onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                      placeholder="your.email@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-900 dark:text-[#F5EFE6] focus:outline-hidden focus:border-[#D96B27]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] mb-1">
                    Your Comment *
                  </label>
                  <textarea
                    rows={4}
                    value={commentForm.text}
                    onChange={(e) => setCommentForm({ ...commentForm, text: e.target.value })}
                    placeholder="Share your perspective, feedback, or technical questions..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-900 dark:text-[#F5EFE6] focus:outline-hidden focus:border-[#D96B27] leading-relaxed"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#D96B27] hover:bg-[#C85A17] text-white font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Post Comment</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.length === 0 ? (
                <div className="text-center py-8 font-mono text-xs text-neutral-500">
                  <p>No comments yet. Be the first to share your thoughts!</p>
                </div>
              ) : (
                comments.map((c) => (
                  <div
                    key={c.id}
                    className="p-5 rounded-2xl bg-white dark:bg-[#181716] border border-[#E6E0D6] dark:border-[#2B2824] space-y-2 shadow-xs"
                  >
                    <div className="flex items-center justify-between font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#D96B27]/15 text-[#D96B27] flex items-center justify-center font-bold text-[10px]">
                          {c.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-bold text-neutral-900 dark:text-[#F5EFE6]">
                          {c.name}
                        </span>
                      </div>
                      <span className="text-neutral-400 text-[11px]">{c.date}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-[#C7C2BA] leading-relaxed pl-8">
                      {c.text}
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
