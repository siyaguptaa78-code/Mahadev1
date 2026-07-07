"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahul S.",
    city: "Mumbai",
    text: "Withdrawal credited within 5 minutes! Best platform I've used.",
    rating: 5,
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 2,
    name: "Priya K.",
    city: "Delhi",
    text: "Got my ID the same day. Super smooth process and amazing support team!",
    rating: 5,
    color: "from-purple-500 to-purple-700",
  },
  {
    id: 3,
    name: "Vikram M.",
    city: "Bangalore",
    text: "IPL betting experience was incredible. Real-time updates and fast payouts.",
    rating: 5,
    color: "from-green-500 to-green-700",
  },
  {
    id: 4,
    name: "Ankit T.",
    city: "Pune",
    text: "100% genuine platform. I trust Mahadev Book for all my betting.",
    rating: 5,
    color: "from-orange-500 to-orange-700",
  },
  {
    id: 5,
    name: "Suresh P.",
    city: "Hyderabad",
    text: "Best customer service! They resolved my issue in minutes via WhatsApp.",
    rating: 5,
    color: "from-red-500 to-red-700",
  },
  {
    id: 6,
    name: "Riya N.",
    city: "Chennai",
    text: "Mujhe bahut accha experience mila. Payout fast aur secure hai.",
    rating: 5,
    color: "from-teal-500 to-teal-700",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      className="py-16 md:py-20 bg-gray-950"
      aria-labelledby="reviews-heading"
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
            id="reviews-heading"
            className="text-3xl md:text-4xl font-black text-white mb-4"
          >
            Our Users Speak for Us –{" "}
            <span className="text-yellow-400">
              100% Guaranteed Withdrawals
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what our verified users say about Mahadev Bookand why they trust us with their betting needs.
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={scaleIn}
              className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-yellow-400/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/5"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">{review.name}</p>
                  <p className="text-gray-400 text-sm">{review.city}</p>
                </div>
                {/* WhatsApp verified badge */}
                <div className="ml-auto">
                  <svg viewBox="0 0 24 24" fill="#25D366" className="w-6 h-6" aria-label="WhatsApp verified">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
              </div>

              {/* Stars */}
              <StarRating count={review.rating} />

              {/* Review text */}
              <p className="text-gray-300 mt-3 text-sm leading-relaxed italic">
                &quot;{review.text}&quot;
              </p>

              {/* Green verified bar */}
              <div className="mt-4 flex items-center gap-2 text-xs text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Verified Mahadev Book User
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
