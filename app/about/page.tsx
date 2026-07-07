import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  "About Mahadev Book – India's Trusted Betting Platform",
  "Learn about Mahadev Book, India's most trusted online betting platform with 1.2M+ users since 2018.",
  "/about"
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            About <span className="text-yellow-400">Mahadev Book</span>
          </h1>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full" />
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-black text-yellow-400 mb-4">Our Story</h2>
            <p>
              Mahadev Book was founded with a clear mission: to create India&apos;s most
              secure, transparent, and rewarding online betting experience. Since 2018,
              we have grown to serve over 1.2 million verified users across India.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-black text-yellow-400 mb-4">Our Mission</h2>
            <p>
              We believe in empowering Indian sports fans with the tools, insights,
              and platform they need to engage with their favorite sports in a safe
              and responsible manner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "1.2M+", label: "Verified Users" },
              { value: "60M+", label: "Transactions" },
              { value: "2018", label: "Founded" },
            ].map((stat) => (
              <div key={stat.label} className="bg-yellow-400/10 border border-yellow-400/30 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-yellow-400">{stat.value}</div>
                <div className="text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="https://wa.me/916026703858"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all duration-300"
            >
              Get Your Mahadev Book ID →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
