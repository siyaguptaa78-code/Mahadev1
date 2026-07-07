"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

const blogs = [
  {
    slug: "benefits-of-having-a-verified-mahadev-book-id-2025",
    title: "Benefits of Having a Verified Mahadev Book ID in 2025",
    date: "October 26, 2025",
    time: "5:30 PM",
    category: "Betting",
    categoryColor: "bg-yellow-400 text-black",
    gradient: "from-yellow-500 to-orange-500",
    emoji: "🆔",
  },
  {
    slug: "is-mahadev-book-legal-in-india",
    title: "Is Mahadev Book Legal in India? Everything You Need to Know",
    date: "October 21, 2025",
    time: "6:00 PM",
    category: "Betting",
    categoryColor: "bg-yellow-400 text-black",
    gradient: "from-blue-500 to-indigo-600",
    emoji: "⚖️",
  },
  {
    slug: "mahadev-book-login-guide-2025",
    title: "Mahadev Book Login Guide 2025 – Secure Access to Your Online Betting ID",
    date: "October 19, 2025",
    time: "6:00 PM",
    category: "Betting",
    categoryColor: "bg-yellow-400 text-black",
    gradient: "from-green-500 to-teal-600",
    emoji: "🔐",
  },
  {
    slug: "india-vs-australia-odi-series-2025-mahadev-book",
    title: "India vs Australia ODI Series 2025: Bet Smart with Mahadev Book's Winning Insights",
    date: "October 16, 2025",
    time: "",
    category: "Cricket",
    categoryColor: "bg-green-500 text-white",
    gradient: "from-red-500 to-pink-600",
    emoji: "🏏",
  },
];

export default function BlogSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-20 bg-gray-50"
      aria-labelledby="blog-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2
            id="blog-heading"
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
          >
            Explore Our <span className="text-yellow-500">Recent Blogs</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Stay updated with the latest news, tips, and insights from the world
            of online betting.
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.slug}
              variants={fadeInUp}
              custom={i}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-yellow-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
            >
              {/* Image placeholder */}
              <div
                className={`relative h-44 bg-gradient-to-br ${blog.gradient} flex items-center justify-center overflow-hidden`}
              >
                <span className="text-6xl select-none">{blog.emoji}</span>
                {/* Sheen */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Badge */}
                <span
                  className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full ${blog.categoryColor}`}
                >
                  {blog.category}
                </span>
              </div>

              <div className="p-5">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                  <Calendar size={12} />
                  <span>
                    {blog.date}
                    {blog.time ? ` • ${blog.time}` : ""}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-yellow-600 transition-colors">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>

                {/* Read More */}
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-1 text-yellow-600 text-sm font-semibold mt-4 hover:gap-2 transition-all"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-10"
        >
          <Link
            href="/blog"
            id="view-all-blogs-btn"
            className="inline-flex items-center gap-2 border-2 border-yellow-400 text-yellow-600 font-bold px-8 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            View All Blogs
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
