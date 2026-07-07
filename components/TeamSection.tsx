"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const team = [
  {
    name: "Rajiv Mehta",
    title: "Senior Sports Analyst",
    bio: "12+ years experience in cricket analytics. Former statistical consultant for IPL teams.",
    credentials: ["M.Sc. Statistics", "Certified Sports Analyst"],
    initials: "RM",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Priya Sharma",
    title: "Cybersecurity Head",
    bio: "Expert in financial transaction security with certifications in cybersecurity and fraud prevention.",
    credentials: ["CISSP Certified", "PCI-DSS Specialist"],
    initials: "PS",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Vikram Singh",
    title: "Operations Director",
    bio: "15+ years in gaming operations and customer experience management.",
    credentials: ["MBA, Operations", "iGaming Certified"],
    initials: "VS",
    color: "from-green-500 to-green-700",
  },
];

export default function TeamSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-20 bg-white"
      aria-labelledby="team-heading"
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
            id="team-heading"
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
          >
            Meet Our <span className="text-yellow-500">Expert Team</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of sports analysts, data scientists, and industry veterans
            brings decades of combined experience to Mahadev Book.
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              custom={i}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-yellow-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
            >
              {/* Avatar Header */}
              <div
                className={`bg-gradient-to-br ${member.color} h-40 flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,white,transparent)]" />
                <div className="w-24 h-24 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center">
                  <span className="text-white font-black text-3xl">
                    {member.initials}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-semibold text-sm mb-3">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2">
                  {member.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="px-3 py-1 bg-gray-900 text-yellow-400 text-xs font-semibold rounded-full"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
