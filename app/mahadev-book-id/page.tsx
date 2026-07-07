import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import BettingIDGuide from "@/components/BettingIDGuide";
import GetIDSection from "@/components/GetIDSection";

export const metadata: Metadata = generatePageMetadata(
  "Mahadev Book ID – Get Your Verified Betting ID",
  "Get your verified Mahadev Book ID instantly. Access cricket betting, casino games, and more with your secure ID.",
  "/mahadev-book-id"
);

export default function MahadevBookIDPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-gray-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Mahadev Book <span className="text-yellow-400">ID</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Your personal access key to India&apos;s trusted online betting
            ecosystem. Get your verified ID today!
          </p>
        </div>
      </div>
      <BettingIDGuide />
      <GetIDSection />
    </div>
  );
}
