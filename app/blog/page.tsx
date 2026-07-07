import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  "Blog – Mahadev Book Betting Insights & Tips",
  "Read the latest cricket betting tips, platform guides, and sports insights on the Mahadev Book Blog.",
  "/blog"
);

const blogPosts = [
  {
    slug: "benefits-of-having-a-verified-mahadev-book-id-2025",
    title: "Benefits of Having a Verified Mahadev Book ID in 2025",
    date: "October 26, 2025",
    category: "Betting",
    excerpt: "Discover why having a verified Mahadev Book ID is essential for secure and rewarding online betting in 2025.",
    gradient: "from-yellow-500 to-orange-500",
    emoji: "🆔",
  },
  {
    slug: "is-mahadev-book-legal-in-india",
    title: "Is Mahadev Book Legal in India? Everything You Need to Know",
    date: "October 21, 2025",
    category: "Legal",
    excerpt: "A comprehensive guide to understanding the legal landscape of online betting in India.",
    gradient: "from-blue-500 to-indigo-600",
    emoji: "⚖️",
  },
  {
    slug: "mahadev-book-login-guide-2025",
    title: "Mahadev Book Login Guide 2025 – Secure Access",
    date: "October 19, 2025",
    category: "Guide",
    excerpt: "Step-by-step guide to logging into your Mahadev Book account safely and quickly.",
    gradient: "from-green-500 to-teal-600",
    emoji: "🔐",
  },
  {
    slug: "india-vs-australia-odi-series-2025-mahadev-book",
    title: "India vs Australia ODI Series 2025: Bet Smart",
    date: "October 16, 2025",
    category: "Cricket",
    excerpt: "Expert betting insights for the India vs Australia ODI series 2025.",
    gradient: "from-red-500 to-pink-600",
    emoji: "🏏",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Mahadev Book <span className="text-yellow-500">Blog</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Latest betting insights, guides, and sports tips from our expert team
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                <span className="text-7xl">{post.emoji}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-yellow-600 font-semibold hover:text-yellow-500 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
