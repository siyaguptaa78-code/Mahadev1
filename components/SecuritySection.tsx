"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { fadeInLeft, fadeInRight } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const securityPoints = [
  "The platform is built with advanced encryption to keep your data and funds safe.",
  "All transactions are processed via secure gateways like UPI, net banking, and wallets.",
  "Multi-layered protection with real-time threat detection and identity verification.",
  "Responsible gaming tools — set deposit limits and take breaks as needed.",
  "Transparent operations with no hidden charges or deductions.",
  "Regular audits ensure fairness and compliance with Indian regulations.",
  "Consistent, secure, and fast experience across devices and browsers.",
  "24/7 live chat support for instant assistance.",
  "Your betting remains private and fully protected, whether on cricket, football, or casino games.",
  "Getting your verified Mahadev Book ID is the first step toward safe, long-term betting.",
];

export default function SecuritySection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-20 bg-gray-50"
      aria-labelledby="security-heading"
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
              id="security-heading"
              className="text-3xl md:text-4xl font-black text-gray-900"
            >
              Security & Trust{" "}
              <span className="text-yellow-500">You Can Count On</span>
            </h2>
            <div className="w-16 h-1 bg-yellow-400 rounded-full" />

            <ul className="space-y-3">
              {securityPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowRight
                    size={18}
                    className="text-yellow-500 flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-700 text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Security Shield Visual */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Main shield */}
              <div className="w-72 h-80 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-yellow-400/20 shadow-2xl flex flex-col items-center justify-center gap-6 p-8">
                <div className="relative">
                  <div className="w-28 h-28 rounded-full bg-yellow-400/10 border-2 border-yellow-400/30 flex items-center justify-center animate-pulse">
                    <ShieldCheck size={64} className="text-yellow-400" />
                  </div>
                  {/* Orbiting dots */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
                </div>
                <div className="text-center">
                  <p className="text-white font-black text-xl">
                    256-bit SSL
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Military-grade encryption
                  </p>
                </div>

                {/* Mini badges */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  {[
                    { label: "PCI-DSS", color: "text-green-400" },
                    { label: "iTech Labs", color: "text-blue-400" },
                    { label: "SSL Secure", color: "text-yellow-400" },
                    { label: "Fair Play", color: "text-purple-400" },
                  ].map((b) => (
                    <div
                      key={b.label}
                      className="bg-gray-900 rounded-xl p-2 text-center border border-gray-700"
                    >
                      <span className={`text-xs font-bold ${b.color}`}>
                        ✓ {b.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-yellow-400/5 blur-xl pointer-events-none -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
