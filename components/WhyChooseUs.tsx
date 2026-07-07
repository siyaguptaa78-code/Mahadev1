"use client";

import { motion } from "framer-motion";
import { Lock, Headphones, Zap, UserPlus, Crown, LogIn } from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

const features = [
  {
    icon: Lock,
    title: "A Secure & Trusted Platform",
    desc: "Your data and money are always safe. The official website uses advanced encryption and regular updates to protect every login and transaction — whether you play on the site or use the app.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Need help with login, registration, or your ID? Our friendly support team is available anytime via live chat, WhatsApp, or email. Help is always just a click away.",
  },
  {
    icon: Zap,
    title: "Instant Withdrawals",
    desc: "No waiting for your winnings. Withdrawals are processed within minutes through secure payment channels, giving you fast access to your money whenever you need it.",
  },
  {
    icon: UserPlus,
    title: "Simple Account Setup",
    desc: "Creating your account takes only a few minutes. Our step-by-step registration is designed to be quick, even if you're new to online betting.",
  },
  {
    icon: Crown,
    title: "Premium Betting Access",
    desc: "With a verified ID, you unlock exclusive tools, live updates, and insights that give you an edge. Both the app and website offer premium features designed to make betting smarter.",
  },
  {
    icon: LogIn,
    title: "Fast & Reliable Login",
    desc: "Your login is quick, secure, and always reliable. Optimized servers ensure smooth access with no delays, whether on desktop or mobile.",
  },
];

export default function WhyChooseUs() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-20 bg-gray-950"
      aria-labelledby="why-choose-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-6"
        >
          <h2
            id="why-choose-heading"
            className="text-3xl md:text-4xl font-black text-white mb-4"
          >
            Why Choose{" "}
            <span className="text-yellow-400">Mahadev Book Online?</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Intro */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-14 space-y-3"
        >
          <p className="text-gray-400 leading-relaxed">
            Picking the right betting platform matters.{" "}
            <strong className="text-white">Mahadev Book</strong> is built to
            give you a safe, simple, and rewarding experience. With advanced
            technology and a strong reputation, we make sure every user —
            beginner or expert — feels comfortable and supported.
          </p>
          <p className="text-gray-400 leading-relaxed">
            By joining through the{" "}
            <strong className="text-white">official site</strong>, you become
            part of a trusted community that values reliability, speed, and data
            security.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-yellow-400/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/5"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-5 group-hover:bg-yellow-400 group-hover:border-yellow-400 transition-all duration-300">
                <f.icon
                  size={22}
                  className="text-yellow-400 group-hover:text-black transition-colors"
                />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <Link
            href="https://wa.me/916026703858"
            id="why-choose-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-600/30 hover:shadow-green-500/40 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Get Your Mahadev Book ID Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
