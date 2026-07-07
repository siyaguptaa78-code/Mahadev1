import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = generatePageMetadata(
  "FAQ – Mahadev Book Frequently Asked Questions",
  "Find answers to the most common questions about Mahadev Book ID, login, registration, deposits, withdrawals, and more.",
  "/faq"
);

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-gray-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Frequently Asked{" "}
            <span className="text-yellow-400">Questions</span>
          </h1>
          <p className="text-gray-400">
            Everything you need to know about Mahadev Book
          </p>
        </div>
      </div>
      <FAQSection />
    </div>
  );
}
