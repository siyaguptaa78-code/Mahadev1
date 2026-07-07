"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Rahul S.",
    city: "Mumbai",
    review: "Withdrawal credited within 5 minutes! Best platform I've used.",
    rating: 5,
    color: "from-blue-500 to-blue-700",
    initials: "RS",
  },
  {
    name: "Priya K.",
    city: "Delhi",
    review: "Got my ID the same day. Super smooth process and amazing support team!",
    rating: 5,
    color: "from-purple-500 to-purple-700",
    initials: "PK",
  },
  {
    name: "Vikram M.",
    city: "Bangalore",
    review: "IPL betting experience was incredible. Real-time updates and fast payouts.",
    rating: 5,
    color: "from-green-500 to-green-700",
    initials: "VM",
  },
  {
    name: "Ankit T.",
    city: "Pune",
    review: "100% genuine platform. I trust Mahadev Book for all my betting.",
    rating: 5,
    color: "from-orange-500 to-orange-700",
    initials: "AT",
  },
  {
    name: "Suresh P.",
    city: "Hyderabad",
    review: "Best customer service! They resolved my issue in minutes via WhatsApp.",
    rating: 5,
    color: "from-red-500 to-red-700",
    initials: "SP",
  },
  {
    name: "Riya N.",
    city: "Chennai",
    review: "Mujhe bahut accha experience mila. Payout fast aur secure hai.",
    rating: 5,
    color: "from-pink-500 to-pink-700",
    initials: "RN",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < Math.floor(rating)
              ? "text-yellow-400 fill-yellow-400"
              : i < rating
              ? "text-yellow-400 fill-yellow-400/50"
              : "text-gray-600"
          }
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-20 bg-white"
      aria-labelledby="testimonials-heading"
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
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
          >
            100% <span className="text-yellow-500">PAYOUTS</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our Players Say It All. These are some of the excellent feedback from our verified WhatsApp users who have enjoyed their betting journey with Mahadev Book.
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-yellow-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote accent */}
              <div className="absolute top-4 right-4 text-6xl text-gray-100 font-black select-none leading-none">
                &ldquo;
              </div>

              {/* Top bar */}
              <div className={`h-2 bg-gradient-to-r ${t.color}`} />

              <div className="p-6">
                {/* User info */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black text-xl shadow-md`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg">
                      {t.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{t.city}</p>
                  </div>
                </div>

                {/* Stars */}
                <StarRating rating={t.rating} />

                {/* Review */}
                <p className="text-gray-700 mt-4 leading-relaxed italic relative z-10">
                  &quot;{t.review}&quot;
                </p>

                {/* Verified tag */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-green-600 text-xs font-semibold">
                    Verified Mahadev Book Member
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
