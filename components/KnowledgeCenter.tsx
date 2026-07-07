"use client";

import { motion } from "framer-motion";
import { TrendingUp, Calculator, ShieldCheck } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

const knowledgeCards = [
  {
    icon: TrendingUp,
    title: "Live IPL & T20",
    desc: "Live IPL, international matches, T20 leagues betting with attractive odds and live markets",
    linkText: "Bet Live →",
  },
  {
    icon: ShieldCheck,
    title: "Football Leagues",
    desc: "Premier league, Champions league, La Liga, Indian super league matches betting",
    linkText: "Bet Live →",
  },
  {
    icon: Calculator,
    title: "Live Casino",
    desc: "Teen Patti, Andar Bahar, Roulette, Poker streams from the comfort of your home",
    linkText: "Bet Live →",
  },
  {
    icon: TrendingUp,
    title: "Tennis Matches",
    desc: "Grand slam, ATP, WTA live match betting",
    linkText: "Bet Live →",
  },
  {
    icon: ShieldCheck,
    title: "Virtual Sports",
    desc: "Digital cricket, football, horse racing betting with enhanced graphics",
    linkText: "Bet Live →",
  },
];

export default function KnowledgeCenter() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-20 bg-gray-50"
      aria-labelledby="knowledge-heading"
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
            id="knowledge-heading"
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
          >
            Games You Can <span className="text-yellow-500">Play</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With a verified Mahadev book ID, you gain access to all sports and live dealer casino games.
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Knowledge Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {knowledgeCards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-yellow-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-yellow-50 border-2 border-yellow-200 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-all duration-300">
                <card.icon
                  size={26}
                  className="text-yellow-500 group-hover:text-black transition-colors"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {card.desc}
              </p>
              <Link
                href="#"
                className="text-yellow-600 font-semibold text-sm hover:text-yellow-500 transition-colors"
              >
                {card.linkText}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Webinar CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 border border-yellow-400/20 rounded-2xl p-8 text-center"
        >
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="text-2xl font-black text-white mb-3">
            Live Expert Webinars
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Join our weekly pro-bettor webinars for expert betting advice and tips.
            Next webinar:{" "}
            <span className="text-yellow-400 font-semibold">
              &quot;IPL 2024 Betting Strategies&quot;
            </span>
          </p>
          <Link
            href="/login"
            id="webinar-register-btn"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-8 py-3 rounded-xl hover:bg-yellow-300 transition-all duration-300"
          >
            Register for Webinar
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
