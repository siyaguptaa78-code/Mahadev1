"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    id: "faq1",
    q: "What is Mahadev Book Online Betting ID?",
    a: "The Mahadev Book Online Betting ID is a verified account that grants you access to the best betting services, including sports betting, casino, poker, and more. With this ID, you can fund and withdraw your bets easily and securely.",
  },
  {
    id: "faq2",
    q: "How does Mahadev Book work?",
    a: "Mahadev Book works by providing registered users with a secure betting ID. After logging in, you can deposit funds, choose your favorite sports or casino games, and place bets in real time. Winnings can be withdrawn via bank transfer or UPI.",
  },
  {
    id: "faq3",
    q: "How do I join Mahadev Book?",
    a: "You can join Mahadev Book by requesting a verified ID through trusted agents or the official website. Once you receive your ID, you can log in, complete KYC verification, and start playing.",
  },
  {
    id: "faq4",
    q: "How do I register for a new Online Betting ID?",
    a: 'Go to the official site, click "Get Your ID," fill in your details, verify your account, and you\'re ready to start betting.',
  },
  {
    id: "faq5",
    q: "How can I get a Mahadev Book franchise?",
    a: "Franchise opportunities are offered through authorized partners or private contacts. Franchise holders distribute betting IDs and earn commissions. However, it's important to verify legitimacy and understand local laws before applying.",
  },
  {
    id: "faq6",
    q: "What games can I play with my Mahadev Book ID?",
    a: "Your ID gives you access to Teen Patti, Cricket Betting, Andar Bahar, Poker, Slots, Live Casino, and more entertainment options.",
  },
  {
    id: "faq7",
    q: "How do I deposit money into my Mahadev Book account?",
    a: "Deposits can be made using UPI, bank transfer, or other supported payment methods from your account dashboard.",
  },
  {
    id: "faq8",
    q: "How do I withdraw my winnings?",
    a: "Go to the withdrawal section, enter your UPI ID or bank details, and submit a request. Processing times may vary depending on your payment method.",
  },
  {
    id: "faq9",
    q: "Is Mahadev Book legal in India?",
    a: "Online betting laws in India vary by state. While Mahadev Book operates online, it does not have official government licensing, making its legal status uncertain. Always check your local regulations.",
  },
  {
    id: "faq10",
    q: "Is Mahadev Book safe and trusted?",
    a: "Safety depends on joining through verified sources. Mahadev Book uses secure payment channels, but risks like fraud and fake apps exist. Always verify the authenticity of your ID provider.",
  },
  {
    id: "faq11",
    q: "Is my personal information secure with Mahadev Book?",
    a: "Yes, Mahadev Book claims to use encryption and secure servers to protect your financial and personal data. However, always ensure you are using the official app or verified network.",
  },
  {
    id: "faq12",
    q: "Can I use Mahadev Book on my mobile phone?",
    a: "Yes, Mahadev Book is mobile-friendly and also offers an app for a smoother betting experience on Android and iOS devices.",
  },
  {
    id: "faq13",
    q: "When will Mahadev Book open or publish?",
    a: "Mahadev Book does not \"publish\" like a book. It is an online betting platform. Sometimes new IDs are unavailable if agents temporarily close registrations, giving the impression that it is closed.",
  },
  {
    id: "faq14",
    q: "Is Mahadev Book genuine or fake?",
    a: "Mahadev Book is a real betting network, but many fake websites and apps use its name. Always cross-check with trusted agents and avoid unofficial sources.",
  },
  {
    id: "faq15",
    q: "What is the Mahadev Book contact number?",
    a: "Official contact numbers are not openly published due to legal restrictions. Numbers are usually shared privately by agents. Always verify before sharing any personal information.",
  },
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
