"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const payments = [
  { name: "UPI", emoji: "💳", color: "bg-purple-50" },
  { name: "Paytm", emoji: "🔵", color: "bg-blue-50" },
  { name: "Google Pay", emoji: "🔴", color: "bg-red-50" },
  { name: "PhonePe", emoji: "🟣", color: "bg-violet-50" },
  { name: "NetBanking", emoji: "🏦", color: "bg-gray-50" },
  { name: "Crypto", emoji: "₿", color: "bg-orange-50" },
  { name: "Visa", emoji: "💙", color: "bg-blue-50" },
  { name: "MasterCard", emoji: "🔶", color: "bg-orange-50" },
  { name: "RuPay", emoji: "🇮🇳", color: "bg-green-50" },
  { name: "Bitcoin", emoji: "₿", color: "bg-yellow-50" },
];

// Duplicate for infinite scroll effect
const allPayments = [...payments, ...payments];

export default function PaymentSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-20 bg-white overflow-hidden"
      aria-labelledby="payment-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <h2
            id="payment-heading"
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
          >
            Secure & Flexible{" "}
            <span className="text-yellow-500">Payment Options</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Trusted payment methods to enable fast deposits and withdrawals.
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mt-6" />
        </motion.div>
      </div>

      {/* Marquee carousel */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-4 animate-marquee"
          style={{ width: "max-content" }}
          role="list"
          aria-label="Payment methods"
        >
          {allPayments.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              role="listitem"
              className={`flex-shrink-0 ${p.color} border border-gray-100 rounded-2xl px-6 py-4 flex flex-col items-center gap-2 min-w-[120px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
            >
              <span className="text-3xl">{p.emoji}</span>
              <span className="text-gray-800 font-semibold text-sm">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Instant deposits badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex flex-wrap justify-center gap-6">
        {[
          { label: "Instant Deposits", icon: "⚡" },
          { label: "Fast Withdrawals", icon: "🚀" },
          { label: "Zero Transaction Fees", icon: "✅" },
          { label: "End-to-End Encrypted", icon: "🔒" },
        ].map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-5 py-2.5 text-sm font-semibold text-gray-700"
          >
            <span>{badge.icon}</span>
            {badge.label}
          </div>
        ))}
      </div>
    </section>
  );
}
