"use client";

import { motion } from "framer-motion";
import { GraduationCap, Medal, Crown, ShieldCheck, Lock, Award, ShieldAlert, UserCheck } from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const eeatCards = [
  {
    icon: GraduationCap,
    title: "Expertise",
    desc: "Built by sports & gaming veterans with 15+ years of proven innovation.",
    highlight: false,
  },
  {
    icon: Medal,
    title: "Experience",
    desc: "Trusted by 1.2M+ users since 2018 with over 60M successful transactions.",
    highlight: false,
  },
  {
    icon: Crown,
    title: "Authority",
    desc: "Recognized as India's leading betting platform by top industry awards.",
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    desc: "SSL encrypted, PCI-DSS compliant, and fair play certified by iTech Labs.",
    highlight: true,
  },
];

const trustBadges = [
  { icon: Lock, label: "256-bit SSL Encryption" },
  { icon: Award, label: "Certified Fair Play" },
  { icon: ShieldAlert, label: "Fraud Protection" },
  { icon: UserCheck, label: "Account Security" },
];

export default function EEATSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-20 bg-gray-50"
      aria-labelledby="eeat-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2
            id="eeat-heading"
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
          >
            The <span className="text-yellow-500">Official Mahadev Book</span> Website
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The officially licensed website of Mahadev Bookthat you can use to access the best betting and gaming services. With years of betting expertise and over 15 years of experience, we are in the best position to offer you the best and most reliable online betting services in India trusted by 1.2M+ active users.
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* EEAT Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
        >
          {eeatCards.map((card) => (
            <motion.div
              key={card.title}
              variants={scaleIn}
              className={`rounded-2xl p-6 text-center border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                card.highlight
                  ? "bg-yellow-400 border-yellow-400 shadow-lg shadow-yellow-400/30"
                  : "bg-white border-gray-100 hover:border-yellow-200"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  card.highlight
                    ? "bg-black/10"
                    : "bg-yellow-50 border border-yellow-100"
                }`}
              >
                <card.icon
                  size={28}
                  className={card.highlight ? "text-black" : "text-yellow-500"}
                />
              </div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  card.highlight ? "text-black" : "text-gray-900"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  card.highlight ? "text-black/80" : "text-gray-600"
                }`}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 bg-gray-900 text-white px-5 py-3 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-colors"
            >
              <badge.icon size={18} className="text-yellow-400" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
