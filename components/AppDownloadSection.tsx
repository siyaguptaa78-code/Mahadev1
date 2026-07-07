"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

const appFeatures = [
  "Live betting on cricket, football, tennis, kabaddi & more",
  "Get your verified betting ID instantly",
  "Fast withdrawals with encrypted payment gateways",
  "Simple navigation and smooth user experience",
  "Exclusive bonuses, offers, and referral rewards",
  "Real-time odds with a secure gaming environment",
  "100% safe and responsible betting experience",
];

const downloadSteps = [
  "Visit our official website or contact us on WhatsApp",
  'Click on the "Mahadev Betting App" button',
  "Allow permissions and install the app",
  "Sign up or log in using your ID credentials",
  "Start betting on live matches and casino games instantly",
];

export default function AppDownloadSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-24 bg-black text-white"
      aria-labelledby="app-download-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h2
              id="app-download-heading"
              className="text-3xl sm:text-4xl font-black text-yellow-400 leading-tight"
            >
              Download the Mahadev Book App – India&apos;s Most Trusted Online
              Betting Platform
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Looking for a reliable and feature-rich online betting app in
              India? The{" "}
              <Link
                href="/mahadev-betting-app"
                className="text-yellow-400 underline hover:text-yellow-300 transition-colors"
              >
                Mahadev Book Official App
              </Link>{" "}
              is your go-to destination for secure sports betting, live cricket,
              and casino games.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Compatible with both{" "}
              <strong className="text-white">Android and iOS</strong>, the
              mobile app features a user-friendly interface tailored for Indian
              users. With real-time match updates, encrypted payments, instant
              deposits, quick withdrawals, and 24/7 customer support — this is
              India&apos;s most dependable online betting app.
            </p>

            {/* Key Features */}
            <div>
              <h3 className="text-yellow-400 font-bold text-xl mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {appFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="w-5 h-5 mt-0.5 rounded-full bg-yellow-400 flex-shrink-0 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Steps */}
            <div>
              <h3 className="text-yellow-400 font-bold text-xl mb-4">
                How to Download the App on Android & iOS
              </h3>
              <ol className="space-y-3">
                {downloadSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-yellow-400 text-black font-bold text-sm flex items-center justify-center">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* CTA */}
            <div className="space-y-3 pt-2">
              <Link
                href="https://wa.me/916026703858"
                id="app-download-cta-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-600/30 hover:-translate-y-0.5"
              >
                <span>📱</span> Get Your Online Cricket ID Now
              </Link>
              <p className="text-gray-500 text-sm">
                Bet responsibly — Mahadev Book encourages fair play and secure
                gaming.
              </p>
            </div>
          </motion.div>

          {/* Right: App Mockup */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-center gap-6"
          >
            {/* Mockup Card */}
            <div className="relative w-full max-w-sm">
              <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl border border-yellow-400/20 shadow-2xl shadow-yellow-400/10 overflow-hidden">
                {/* Phone notch */}
                <div className="bg-black h-8 flex items-center justify-center">
                  <div className="w-24 h-4 bg-gray-900 rounded-full" />
                </div>
                {/* App UI Mockup */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-400 font-black text-lg">Mahadev Book</span>
                    <span className="text-green-400 text-xs font-semibold bg-green-400/10 px-2 py-1 rounded-full">● LIVE</span>
                  </div>
                  {/* Fake match cards */}
                  {[
                    { teams: "IND vs PAK", odds: "1.85", sport: "🏏" },
                    { teams: "CSK vs MI", odds: "2.10", sport: "🏏" },
                    { teams: "Man Utd vs Chelsea", odds: "1.95", sport: "⚽" },
                  ].map((match, i) => (
                    <div key={i} className="bg-gray-900 rounded-xl p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{match.sport}</span>
                        <span className="text-white text-sm font-semibold">{match.teams}</span>
                      </div>
                      <div className="bg-yellow-400 text-black font-bold text-sm px-3 py-1 rounded-lg">
                        {match.odds}
                      </div>
                    </div>
                  ))}
                  {/* Quick stats */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {[
                      { val: "₹5 Min", label: "Min Deposit" },
                      { val: "5 Mins", label: "Withdrawal" },
                    ].map((s) => (
                      <div key={s.label} className="bg-gray-900 rounded-xl p-3 text-center">
                        <div className="text-yellow-400 font-black">{s.val}</div>
                        <div className="text-gray-400 text-xs">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Bottom bar */}
                <div className="bg-gray-900 h-8 flex items-center justify-center">
                  <div className="w-32 h-1 bg-gray-700 rounded-full" />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg">
                Android & iOS
              </div>
            </div>
            <p className="text-gray-500 text-sm text-center">
              Download now and enjoy the future of online sports betting
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
