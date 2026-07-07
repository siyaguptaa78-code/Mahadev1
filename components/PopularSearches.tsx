"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

const searches = [
  { label: "Mahadev Book", href: "/" },
  { label: "Mahadev Book ID", href: "/mahadev-book-id" },
  { label: "Mahadev ID", href: "/mahadev-book-id" },
  { label: "Mahadevbook", href: "/" },
  { label: "Mahadev Book Online", href: "/" },
  { label: "Mahadev Online Betting", href: "/" },
  { label: "Mahadev Book Betting", href: "/" },
  { label: "Mahadev Betting", href: "/mahadev-betting-app" },
  { label: "Mahadev Betting App", href: "/mahadev-betting-app" },
  { label: "Gold365", href: "#" },
  { label: "Laser247", href: "#" },
  { label: "IPL Betting ID", href: "#" },
  { label: "Online Betting ID", href: "#" },
  { label: "Mahadev Online Book", href: "#" },
  { label: "Mahadev Book App", href: "/mahadev-betting-app" },
  { label: "Mahadev Bookie", href: "#" },
  { label: "Mahadev Book Login ID", href: "/login" },
  { label: "Mahadev Book WhatsApp Number", href: "#" },
  { label: "Mahadev Betting Apps", href: "/mahadev-betting-app" },
];

export default function PopularSearches() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-12 bg-gray-50 border-t border-gray-100"
      aria-labelledby="popular-searches-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2
            id="popular-searches-heading"
            className="text-xl font-bold text-gray-900 mb-5 text-center"
          >
            Popular Searches Related to Mahadev Book
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {searches.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="px-4 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-full hover:border-yellow-400 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-200"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
