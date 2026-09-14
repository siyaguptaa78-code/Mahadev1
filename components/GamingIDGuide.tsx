"use client";

import { motion } from "framer-motion";
import { Lock, Compass, BarChart2 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const strategyCards = [
  {
    icon: Lock,
    title: "1. Secure Login",
    desc: "Login to your gaming ID through an encrypted network for your security",
  },
  {
    icon: Compass,
    title: "2. Explore Gaming Markets",
    desc: "Get access to 1000s of live sports events and in-play gaming with one gaming wallet",
  },
  {
    icon: BarChart2,
    title: "3. Track & Manage Bets",
    desc: "Track and monitor results and withdrawals from your gaming dashboard",
  },
];

const responsibleGaming = [
  "Set deposit and withdrawal limits on your gaming account to avoid temptation. Also, avoid chasing losses by taking regular breaks and only gambling with money you can afford to lose.",
  "Ensure your work and personal life balance and seek professional help if gambling impacts your daily life.",
  "Consult your relationship manager for any assistance.",
];

export default function GamingIDGuide() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-20 bg-white"
      aria-labelledby="guide-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <h2
            id="guide-heading"
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
          >
            Get to Know Your{" "}
            <span className="text-yellow-500">Gaming ID</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Your Mahadev Book ID grants you access to India’s most trusted online gaming portal, Mahadev Book, where you can bet on sports, casino, and virtual games with complete security and ease of use. Think of your gaming ID as your secure access key to all the gaming fun on the portal. Here’s how it works:
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* What is section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 mb-12 text-white"
        >
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">
            What is a Mahadev Book ID?
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Your <strong className="text-white">Mahadev Book ID</strong>is your key to accessing India&apos;s best online gaming platform with verified security features. Using this powerful tool, you can bet on sports, casino, and other games at a fast and reliable online gaming site with an array of gaming options.
          </p>
          <p className="text-gray-400 leading-relaxed">
            It is your secure key to engaging and enjoying a wide range of sports gaming and live casino games with fast withdrawals.
          </p>
        </motion.div>

        {/* Strategy Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-14"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Here’s how it works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategyCards.map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-200 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-all duration-300">
                  <card.icon
                    size={22}
                    className="text-yellow-500 group-hover:text-black transition-colors"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {card.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Responsible Gaming */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>⚖️</span> Responsible Gaming
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Your Mahadev Book gaming id opens the exciting world of sports gaming to you, but it has to be a responsible gaming journey. Here are a few things to remember to enjoy gaming without risking your finances and personal life:
          </p>
          <ul className="space-y-3">
            {responsibleGaming.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="w-5 h-5 mt-0.5 rounded-full bg-yellow-400 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mt-6 leading-relaxed">
            The platform allows you to take control of your gaming and enhances your gaming experience by giving you the best tools to remain responsible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
