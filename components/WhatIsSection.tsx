"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    title: "Sports Betting:",
    desc: "Bet on cricket, football, tennis, and more. Famous for IPL betting and live cricket betting.",
  },
  {
    title: "Casino Games:",
    desc: "Play Teen Patti, Andar Bahar, and enjoy live casino experiences.",
  },
  {
    title: "Real-Time Betting:",
    desc: "Place bets while the match is live for added excitement.",
  },
  {
    title: "Payment Options:",
    desc: "Supports UPI, Paytm, Google Pay, PhonePe, and bank transfers for fast deposits and withdrawals.",
  },
  {
    title: "Easy Registration:",
    desc: "Get your Mahadev Book ID through a verified agent and start betting instantly.",
  },
  {
    title: "Device Friendly:",
    desc: "Works smoothly on both mobile and desktop.",
  },
  {
    title: "Customer Support:",
    desc: "24/7 help available on WhatsApp and Telegram.",
  },
  {
    title: "Responsible Gambling:",
    desc: "Encourages safe and controlled betting.",
  },
];

export default function WhatIsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-20 bg-white"
      aria-labelledby="what-is-heading"
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
            id="what-is-heading"
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
          >
            What is{" "}
            <span className="text-yellow-500">Mahadev Book?</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Description */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong>Mahadev Book</strong> is one of India&apos;s most popular
              and trusted online betting platforms. It is known for its secure
              system, smooth user experience, and wide variety of games.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In short, <strong>Mahadev Book</strong> is a complete betting
              platform — combining entertainment, security, and convenience for
              both casual players and professional bettors.
            </p>

            {/* Highlight box */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-l-4 border-yellow-400 rounded-r-xl p-6 mt-6">
              <p className="text-gray-800 font-semibold text-lg">
                🏆 India&apos;s Most Trusted Betting Platform
              </p>
              <p className="text-gray-600 mt-2">
                Trusted by 1.2M+ users since 2018 with over 60M successful
                transactions.
              </p>
            </div>
          </motion.div>

          {/* Right: Feature List */}
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-3"
          >
            {features.map((f, i) => (
              <motion.li
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-yellow-200 hover:bg-yellow-50/50 transition-all duration-300"
              >
                <span className="mt-1 w-5 h-5 rounded-full bg-yellow-400 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">
                  <strong className="text-gray-900">{f.title}</strong> {f.desc}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
