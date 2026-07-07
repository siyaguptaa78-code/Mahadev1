"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

const benefits = [
  {
    title: "Trustworthy, Transparent, Tried",
    desc: "When you join the platform, you're becoming part of a community backed by 100% verified credentials and real-time betting support. Unlike platforms that create confusion, it's built on transparency and player-first ethics.",
    reverse: false,
  },
  {
    title: "Lightning-Fast Verification & Login",
    desc: "Your journey starts the moment you request your account. No delay, no hidden steps. Whether you're on desktop or mobile, logging in is quick and frictionless — thanks to a well-optimized system trusted across India.",
    reverse: true,
  },
  {
    title: "Optimized for Cricket, Casino & More",
    desc: "From IPL to roulette, your Mahadev Book ID gives access to the best betting markets in India. The interface is responsive, user-friendly, and always aligned with the latest events.",
    reverse: false,
  },
  {
    title: "Bonuses that Actually Pay",
    desc: "No gimmicks, just pure value. Regular cashback, deposit offers, and win bonuses show up directly in your account. You always know what you're getting — and when.",
    reverse: true,
  },
  {
    title: "Secure Transactions and Instant Withdrawals",
    desc: "Safety is not optional. With advanced encryption and verified banking channels, your deposits and withdrawals are fast, reliable, and secure. No payout delays, no excuses — just real wins in real time.",
    reverse: false,
  },
  {
    title: "Play Anywhere with Mahadev Betting App",
    desc: "Whether you're on a train, at work, or relaxing at home, the Mahadev Betting App ensures that you never miss a moment. It's fast, fully secure, and works on all major devices.",
    reverse: true,
    hasLink: true,
  },
];

export default function BenefitsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-20 bg-white"
      aria-labelledby="benefits-heading"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-14"
          >
            <h2
              id="benefits-heading"
              className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
            >
              Top Benefits of Your{" "}
              <span className="text-yellow-500">Mahadev Book</span> Online
              Betting ID
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={benefit.reverse ? fadeInRight : fadeInLeft}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-6 bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-yellow-200 hover:shadow-lg transition-all duration-300 ${
                  benefit.reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Check Circle */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-400/30">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.hasLink ? (
                      <>
                        Whether you&apos;re on a train, at work, or relaxing at
                        home, the{" "}
                        <Link
                          href="/mahadev-betting-app"
                          className="text-yellow-600 font-semibold hover:underline"
                        >
                          Mahadev Betting App
                        </Link>{" "}
                        ensures that you never miss a moment. It&apos;s fast,
                        fully secure, and works on all major devices.
                      </>
                    ) : (
                      benefit.desc
                    )}
                  </p>
                </div>

                {/* Number badge */}
                <div className="flex-shrink-0 text-gray-100 font-black text-6xl select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
