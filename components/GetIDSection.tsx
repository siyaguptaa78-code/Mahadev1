"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  "Quick and hassle-free registration with your own Mahadev Book ID.",
  "Instant login access for seamless play across devices.",
  "Step-by-step guidance during sign up and verification.",
  "Safe deposits and withdrawals backed by secure systems.",
  "24/7 support so you're never stuck waiting for help.",
];

export default function GetIDSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black"
      aria-labelledby="get-id-heading"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-yellow-400 text-sm font-semibold">
              Join 1.2M+ Trusted Users
            </span>
          </div>

          <h2
            id="get-id-heading"
            className="text-3xl md:text-5xl font-black text-white leading-tight"
          >
            Get Your{" "}
            <span className="text-yellow-400">Mahadev Book ID</span> and
            Start Today
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Mahadev Book is one of India&apos;s most trusted platforms for
            online betting and gaming. It&apos;s built to be simple, safe, and
            fast — so whether you&apos;re new or experienced, getting started is
            easy.
          </p>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-left max-w-xl mx-auto space-y-3 mt-6"
          >
            {benefits.map((b, i) => (
              <motion.li
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-3 text-gray-300"
              >
                <ArrowRight
                  size={18}
                  className="text-yellow-400 flex-shrink-0 mt-1"
                />
                <span>{b}</span>
              </motion.li>
            ))}
          </motion.ul>

          <p className="text-gray-400 leading-relaxed mt-4">
            Thousands of players already trust the official site for transparent
            and secure play. You can join them today by downloading the{" "}
            <strong className="text-white">app</strong> or simply using the
            website on desktop and mobile.
          </p>

          <p className="text-gray-300 font-semibold text-lg">
            Ready to begin?{" "}
            <strong className="text-yellow-400">
              Get your Mahadev Book ID now
            </strong>{" "}
            and unlock a premium betting experience trusted across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://wa.me/916026703858"
              id="get-id-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-600/30 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get Your ID via WhatsApp
            </a>
            <a
              href="/register"
              id="get-id-register-btn"
              className="inline-flex items-center justify-center gap-2 border-2 border-yellow-400 text-yellow-400 font-bold text-lg px-10 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Register Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
