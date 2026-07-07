import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import AppDownloadSection from "@/components/AppDownloadSection";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  "Mahadev Betting App – Download for Android & iOS",
  "Download the Mahadev Betting App for Android and iOS. Live cricket, casino, instant withdrawals and 24/7 support.",
  "/mahadev-betting-app"
);

export default function MahadevBettingAppPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Mahadev{" "}
            <span className="text-yellow-400">Betting App</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Download India&apos;s most trusted betting app for Android and iOS.
            Live sports, casino games, and instant withdrawals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="https://wa.me/916026703858"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all"
            >
              📱 Download via WhatsApp
            </Link>
          </div>
        </div>
      </div>
      <AppDownloadSection />
    </div>
  );
}
