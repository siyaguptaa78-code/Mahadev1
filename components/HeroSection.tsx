"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, TrendingUp, Headphones } from "lucide-react";
import { fadeInLeft, fadeInRight } from "@/hooks/useScrollAnimation";

const featurePills = [
  { icon: Shield, label: "Secure & Private" },
  { icon: TrendingUp, label: "Data-Driven Insights" },
  { icon: Headphones, label: "24/7 Support" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-950 to-gray-900 pt-20 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left: Text Content */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-yellow-400 text-sm font-semibold tracking-wide">
              India&apos;s #1 Trusted Platform
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Mahadev Book India{" "}
            <span className="text-yellow-400">
              Most Trusted Online
            </span>{" "}
            Betting ID
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Welcome to India&apos;s no 1 online betting game-changer <strong className="text-white">Mahadev Book</strong>. With betting sites it has always been a numbers game and the numbers have always favored the timing of the market. With best odds and authorized betting portal Mahadev book is India&apos;s number one betting site for a safe betting experience.
          </p>

          <p className="text-gray-400 leading-relaxed">
            We promise to make your betting experience exceptional with over <strong className="text-yellow-400">60000 monthly live scores</strong>, instant withdrawals and end to end encrypted transactions plus you also get to enjoy the best betting features and tools with every verified ID for a delightful time.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="https://wa.me/916026703858"
              id="hero-get-id-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 hover:-translate-y-0.5"
            >
              <span>🎯</span> Get Your ID Now
            </Link>
            <Link
              href="/mahadev-book-id"
              id="hero-learn-more-btn"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            {featurePills.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-gray-900/80 border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-300"
              >
                <Icon size={16} className="text-yellow-400" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Hero Image / Stats Card */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col items-center gap-6"
        >
          {/* Main Visual Card */}
          <div className="relative w-full max-w-lg">
            <div className="relative rounded-2xl overflow-hidden border border-yellow-400/20 shadow-2xl shadow-yellow-400/10 group">
              {/* Gradient overlay card as placeholder */}
              <div className="bg-gradient-to-br from-yellow-400/20 via-gray-900 to-black aspect-[4/3] flex flex-col items-center justify-center gap-6 p-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-xl shadow-yellow-400/30 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-black font-black text-4xl">M</span>
                </div>
                <div className="text-center">
                  <h2 className="text-white font-black text-3xl">Mahadev Book</h2>
                  <p className="text-yellow-400 font-semibold mt-1">Official Betting Platform</p>
                </div>
                <Link
                  href="https://wa.me/916026703858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 shadow-lg shadow-green-600/30"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </Link>
              </div>
            </div>

            {/* Floating stat badges */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-xl px-4 py-2 shadow-xl font-bold text-sm">
              60K+ Live Events/Month
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gray-900 border border-yellow-400/30 text-white rounded-xl px-4 py-2 shadow-xl text-sm">
              <span className="text-yellow-400 font-bold">1.2M+</span> Trusted Users
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
            {[
              { value: "1.2M+", label: "Active Users" },
              { value: "60K+", label: "Events/Month" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 text-center hover:border-yellow-400/40 transition-colors"
              >
                <div className="text-yellow-400 font-black text-xl">{stat.value}</div>
                <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
