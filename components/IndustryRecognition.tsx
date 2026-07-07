"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lightbulb, Users, Newspaper, Activity, Cpu } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const awards = [
  {
    icon: ShieldCheck,
    title: "Best Security Practices 2023",
    org: "Indian Gaming Awards",
    color: "text-yellow-400",
  },
  {
    icon: Lightbulb,
    title: "Innovation in Sports Tech 2022",
    org: "Sports Technology Review",
    color: "text-blue-400",
  },
  {
    icon: Users,
    title: "Customer Excellence 2023",
    org: "India Customer Choice Awards",
    color: "text-green-400",
  },
];

const mediaLogos = [
  { icon: Newspaper, title: "Economic Times" },
  { icon: Activity, title: "Sports Illustrated India" },
  { icon: Cpu, title: "Tech Radar India" },
];

export default function IndustryRecognition() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-20 bg-gray-950"
      aria-labelledby="recognition-heading"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2
            id="recognition-heading"
            className="text-3xl md:text-4xl font-black text-white mb-4"
          >
            Industry <span className="text-yellow-400">Recognition</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mahadev Bookis recognized as a reliable online betting platform by industry experts.
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          {awards.map((award, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-yellow-400/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <award.icon size={48} className={award.color} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {award.title}
              </h3>
              <p className="text-gray-400 text-sm">{award.org}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* As Featured In */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <h3 className="text-white font-bold text-xl mb-8">As Featured In</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {mediaLogos.map((media, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors group"
                title={media.title}
              >
                <media.icon
                  size={32}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold text-sm">{media.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
