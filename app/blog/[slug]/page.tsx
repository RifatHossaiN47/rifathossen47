import { INITIAL_BLOG_POSTS } from "../../../lib/blog-service";
import BlogDetailClient from "./BlogDetailClient";

export function generateStaticParams() {
  return [
    ...INITIAL_BLOG_POSTS.map((post) => ({ slug: post.slug })),
    { slug: "_" }, // Fallback shell page for newly created articles on static hosting
  ];
}

export default function BlogDetailPage() {
  return <BlogDetailClient />;
}
