"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Lock, Wallet, Ban, Clock, Bell } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const complianceItems = [
  "Regularly audited by independent testing agencies",
  "Full compliance with data protection regulations",
  "Transparent terms of service and privacy policies",
  "Age verification protocols to prevent underage betting",
];

const certifications = [
  { icon: Award, label: "iTech Labs Certified RNG" },
  { icon: ShieldCheck, label: "PCI DSS Level 1 Compliant" },
  { icon: Lock, label: "256-bit SSL Encryption" },
];

const responsibleFeatures = [
  { icon: Wallet, title: "Deposit Limits", desc: "Set daily, weekly, or monthly deposit limits" },
  { icon: Ban, title: "Self-Exclusion", desc: "Temporarily restrict access to your account" },
  { icon: Clock, title: "Time-Outs", desc: "Take breaks from betting for set periods" },
  { icon: Bell, title: "Reality Checks", desc: "Regular reminders of your betting activity" },
];

export default function ComplianceSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-20 bg-gray-950"
      aria-labelledby="compliance-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Main Compliance */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <h2
            id="compliance-heading"
            className="text-3xl md:text-4xl font-black text-white mb-4"
          >
            Legal Compliance &{" "}
            <span className="text-yellow-400">Responsible Gaming</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Compliance Framework */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Our Compliance Framework
            </h3>
            <p className="text-gray-400 mb-6">
              Mahadev Book operates under international standards for fair play
              and security:
            </p>
            <ul className="space-y-3">
              {complianceItems.map((item, i) => (
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
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Our Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-yellow-400/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                    <cert.icon size={22} className="text-yellow-400" />
                  </div>
                  <span className="text-white font-semibold">{cert.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Responsible Gaming */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-gray-900 border border-yellow-400/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-black text-white mb-3 text-center">
            Commitment to Responsible Gaming
          </h3>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            We provide tools to help you maintain control of your betting
            activities:
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {responsibleFeatures.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-gray-800 rounded-xl p-5 text-center border border-gray-700 hover:border-yellow-400/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <f.icon size={22} className="text-yellow-400" />
                </div>
                <h4 className="text-white font-bold mb-2">{f.title}</h4>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-gray-500 text-center mt-8 text-sm">
            Need help? Contact our support team for assistance with responsible
            gaming tools.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
