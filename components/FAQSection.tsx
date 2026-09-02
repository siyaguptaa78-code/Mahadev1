"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    id: "faq1",
    q: "What is Mahadev Book?",
    a: "Mahadev Book is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
  },
  {
    id: "faq2",
    q: "How does a Mahadev Book ID work?",
    a: "An account ID is generally used to identify a user account. Refer to Mahadev Book's current account instructions and terms for the exact process."
  },
  {
    id: "faq3",
    q: "How can I access Mahadev Book?",
    a: "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
  },
  {
    id: "faq4",
    q: "What sports are available on Mahadev Book?",
    a: "Available sports can change. Check the current sports or betting section on the website for the latest list and availability."
  },
  {
    id: "faq5",
    q: "Does Mahadev Book provide live sports information?",
    a: "Check the site's current sports section for any live-event information and the terms that apply to its use."
  },
  {
    id: "faq6",
    q: "How can I get help with my Mahadev Book account?",
    a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
  },
  {
    id: "faq7",
    q: "How do I find Mahadev Book login information?",
    a: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
  },
  {
    id: "faq8",
    q: "What payment options are supported?",
    a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
  },
  {
    id: "faq9",
    q: "What should I do if I have trouble accessing my account?",
    a: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
  },
  {
    id: "faq10",
    q: "Where can I find the latest Mahadev Book updates?",
    a: "Refer to Mahadev Book's current website information and terms for the most accurate answer."
  }
];

function FAQItem({ faq, isOpen, toggle }: {
  faq: typeof faqs[0];
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
        isOpen ? "border-yellow-400/50 bg-yellow-50/30" : "border-gray-200 bg-white hover:border-yellow-200"
      }`}
    >
      <button
        id={`${faq.id}-btn`}
        onClick={toggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        aria-expanded={isOpen}
        aria-controls={`${faq.id}-answer`}
      >
        <span
          className={`font-semibold text-base leading-snug ${
            isOpen ? "text-yellow-700" : "text-gray-900"
          }`}
        >
          {faq.q}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-yellow-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${faq.id}-answer`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
            role="region"
          >
            <p className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq1");
  const { ref, isInView } = useScrollAnimation();

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      className="py-16 md:py-20 bg-white"
      aria-labelledby="faq-heading"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
          >
            Frequently Asked{" "}
            <span className="text-yellow-500">Questions</span>
          </h2>
          <p className="text-gray-600">
            Your Frequently Asked Questions about Mahadev Book
          </p>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-3"
        >
          {faqs.map((faq) => (
            <motion.div key={faq.id} variants={fadeInUp}>
              <FAQItem
                faq={faq}
                isOpen={openId === faq.id}
                toggle={() => toggle(faq.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
