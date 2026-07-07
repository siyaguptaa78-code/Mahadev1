"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

const benefits = [
  {
    title: "Trustworthy, Transparent, Tried",
    desc: "Join the list of verified and trusted online bettors who enjoy 100% legitimate betting services. Unlike many other sites that mislead their users, Mahadev Bookis based on a transparent betting framework and trustworthy procedures.",
    reverse: false,
  },
  {
    title: "Lightning-Fast Verification & Login",
    desc: "Your betting journey begins the moment your account is verified. There are no holds or further steps required to gain full access to your betting dashboard. The verification is rapid and straightforward and is performed using an optimized system that has been tested and trusted by millions of users across India.",
    reverse: true,
  },
  {
    title: "Optimized for Cricket, Casino & More",
    desc: "Your verified Mahadev Book ID grants you access to the best betting options in India. The multiple betting markets, ranging from IPL cricket to live casino games, are all available on an easy-to-access system that is optimized for speed and performance.",
    reverse: false,
  },
  {
    title: "Bonuses that Actually Pay",
    desc: "Enjoy extra rewards with every bet you place on Mahadev Book. Multiple cashback, deposit, and win bonuses are available to all users and can be accessed with just a simple click. Our bonuses are always clear, trustworthy, and easy to redeem.",
    reverse: true,
  },
  {
    title: "Secure Transactions and Instant Withdrawals",
    desc: "The online betting experience is made easy and reliable with enhanced security measures and instant withdrawal options. Your deposits and withdrawals are processed via secure and encrypted digital channels, guaranteeing fast, hassle-free transactions.",
    reverse: false,
  },
  {
    title: "Play Anywhere with Mahadev Betting App",
    desc: "The Mahadev Betting Appis the best way to enjoy betting on the go. Whether you are traveling or at work, you can bet on your favorite sports and casino games securely and conveniently with the Mahadev Betting App.",
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
                        The{" "}
                        <Link
                          href="/mahadev-betting-app"
                          className="text-yellow-600 font-semibold hover:underline"
                        >
                          Mahadev Betting App
                        </Link>
                        is the best way to enjoy betting on the go. Whether you are traveling or at work, you can bet on your favorite sports and casino games securely and conveniently with the Mahadev Betting App.
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
