import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata(
  "ICC Team Rankings: Test, ODI & T20I",
  "Current ICC team rankings across all formats — men's Test, ODI and T20I plus women's rankings. Who's No.1, who's climbing, updated with every rankings refresh.",
  "/icc-team-rankings"
);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which team is number one in Test rankings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Australia, on 131 (as of 7 July 2026) — well clear of South Africa on 119."
      }
    },
    {
      "@type": "Question",
      "name": "Which team is number one in ODI rankings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "India top the ODI rankings on 121, well clear of New Zealand on 110 (as of 13 July 2026)."
      }
    },
    {
      "@type": "Question",
      "name": "Which team is number one in T20I rankings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "England, who displaced India from top spot on 11 July 2026 — both are rated 268, with England ahead by decimal points."
      }
    },
    {
      "@type": "Question",
      "name": "How do the ICC Rankings work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ranking points are calculated using a points-per-match system, with weighting applied to opposition strength and result freshness. They are revised following each series, and each May the oldest results drop out of the calculation in an annual update, with updates published on the ICC website."
      }
    },
    {
      "@type": "Question",
      "name": "Do the rankings decide World Cup qualification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ODI World Cup 2027 qualification places are decided by a team's position in the ODI rankings as of 31 March 2027, with the top eight teams qualifying, plus South Africa and Zimbabwe as hosts."
      }
    }
  ]
};

export default function ICCTeamRankingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Schema.org FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero / Header Section */}
      <div className="bg-gray-950 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            ICC Team Rankings: <span className="text-yellow-400">Test, ODI & T20I</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Current ICC team rankings across all formats — men&apos;s Test, ODI and T20I plus women&apos;s rankings. Who&apos;s No.1, who&apos;s climbing, updated with every rankings refresh.
          </p>
        </div>
      </div>

      {/* Quick Navigation / Jump to Section */}
      <div className="bg-white border-b border-gray-200 sticky top-16 md:top-20 z-20 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-gray-600">
            <span className="text-gray-400">Jump to:</span>
            <a href="#test-rankings" className="hover:text-yellow-600 transition-colors">Test Rankings</a>
            <span className="text-gray-300">|</span>
            <a href="#odi-rankings" className="hover:text-yellow-600 transition-colors">ODI Rankings</a>
            <span className="text-gray-300">|</span>
            <a href="#t20i-rankings" className="hover:text-yellow-600 transition-colors">T20I Rankings</a>
            <span className="text-gray-300">|</span>
            <a href="#womens-rankings" className="hover:text-yellow-600 transition-colors">Women&apos;s Rankings</a>
            <span className="text-gray-300">|</span>
            <a href="#faqs" className="hover:text-yellow-600 transition-colors">FAQs</a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-10 space-y-12">
          
          {/* Intro Paragraph */}
          <div className="prose max-w-none text-gray-700 leading-relaxed text-base">
            <p>
              Three formats, three different number ones, and one format in which the number one has just been usurped this week. England have displaced India from the top of the T20I rankings on 11 July, while Australia lead Test rankings and India top the ODI rankings. No single nation dominates in all, which makes for a healthy competition as indicated in the following tables. Updated rankings for the top five teams in all three formats follow below:
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Test Rankings */}
          <section id="test-rankings" className="scroll-mt-36">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-yellow-500">🏏</span> ICC Test Rankings
            </h2>
            <p className="text-sm text-gray-500 mb-6 font-medium">Updated 7 July 2026:</p>

            <div className="overflow-hidden border border-gray-100 rounded-xl mb-6">
              <table className="min-w-full divide-y divide-gray-100 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider w-16">Pos</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Team</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right w-32">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr className="hover:bg-yellow-50/20 transition-colors">
                    <td className="px-6 py-4 text-sm font-black text-yellow-600">1</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">Australia</td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 text-right">131</td>
                  </tr>
                  <tr className="hover:bg-yellow-50/20 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-500">2</td>
                    <td className="px-6 py-4 text-sm text-gray-700">South Africa</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right">119</td>
                  </tr>
                  <tr className="hover:bg-yellow-50/20 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-500">3</td>
                    <td className="px-6 py-4 text-sm text-gray-700">New Zealand</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right">106</td>
                  </tr>
                  <tr className="hover:bg-yellow-50/20 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-500">4</td>
                    <td className="px-6 py-4 text-sm text-gray-700">India</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right">104</td>
                  </tr>
                  <tr className="hover:bg-yellow-50/20 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-500">5</td>
                    <td className="px-6 py-4 text-sm text-gray-700">England</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right">99</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="prose max-w-none text-gray-700 leading-relaxed text-sm">
              <p>
                Australia&apos;s 131 is one of the biggest rating point leads over the number two ranked Test team in recent years, 12 points clear of the World Champions South Africa. England have fallen below India in the rankings after their defeat in New Zealand, and more detail on the World Test Championship implications can be found in our <Link href="/wtc-points-table/" className="text-yellow-600 hover:text-yellow-500 font-semibold underline">WTC points table</Link>, which tells the same story in percentages.
              </p>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* ODI Rankings */}
          <section id="odi-rankings" className="scroll-mt-36">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-yellow-500">🏏</span> ICC ODI Rankings
            </h2>
            <p className="text-sm text-gray-500 mb-6 font-medium">Updated 13 July 2026:</p>

            <div className="overflow-hidden border border-gray-100 rounded-xl mb-6">
              <table className="min-w-full divide-y divide-gray-100 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider w-16">Pos</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Team</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right w-32">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr className="hover:bg-yellow-50/20 transition-colors">
                    <td className="px-6 py-4 text-sm font-black text-yellow-600">1</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">India</td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 text-right">121</td>
                  </tr>
                  <tr className="hover:bg-yellow-50/20 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-500">2</td>
                    <td className="px-6 py-4 text-sm text-gray-700">New Zealand</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right">110</td>
                  </tr>
                  <tr className="hover:bg-yellow-50/20 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-500">3</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Australia</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right">102</td>
                  </tr>
                  <tr className="hover:bg-yellow-50/20 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-500">4</td>
                    <td className="px-6 py-4 text-sm text-gray-700">South Africa</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right">102</td>
                  </tr>
                  <tr className="hover:bg-yellow-50/20 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-500">5</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Pakistan</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right">100</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="prose max-w-none text-gray-700 leading-relaxed text-sm">
              <p>
                India&apos;s ODI dominance has shown few cracks since their 2023 World Cup final heartbreak, and with the 2027 World Cup qualification now at stake, these rankings carry more weight given that the top eight teams on this list on 31 March 2027 will qualify automatically for the tournament. Watch the teams from 5th to 10th place as the World Cup places are fiercely contested.
              </p>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* T20I Rankings */}
          <section id="t20i-rankings" className="scroll-mt-36">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-yellow-500">🏏</span> ICC T20I Rankings
            </h2>
            <p className="text-sm text-gray-500 mb-6 font-medium">Updated 13 July 2026:</p>

            <div className="overflow-hidden border border-gray-100 rounded-xl mb-6">
              <table className="min-w-full divide-y divide-gray-100 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider w-16">Pos</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Team</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right w-32">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr className="hover:bg-yellow-50/20 transition-colors">
                    <td className="px-6 py-4 text-sm font-black text-yellow-600">1</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">England</td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 text-right">268</td>
                  </tr>
                  <tr className="hover:bg-yellow-50/20 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-500">2</td>
                    <td className="px-6 py-4 text-sm text-gray-700">India</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right">268</td>
                  </tr>
                  <tr className="hover:bg-yellow-50/20 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-500">3</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Australia</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right">260</td>
                  </tr>
                  <tr className="hover:bg-yellow-50/20 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-500">4</td>
                    <td className="px-6 py-4 text-sm text-gray-700">New Zealand</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right">247</td>
                  </tr>
                  <tr className="hover:bg-yellow-50/20 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-500">5</td>
                    <td className="px-6 py-4 text-sm text-gray-700">South Africa</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-right">244</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="prose max-w-none text-gray-700 leading-relaxed text-sm">
              <p>
                The closest ranking contest in any format sees England and India tied at 268, with England above India by decimal points. England beat their old rivals and reigning World Champions India at home to move up to number one in the format in July 2026.
              </p>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* Women's Rankings */}
          <section id="womens-rankings" className="scroll-mt-36">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-yellow-500">👩🏏</span> Women&apos;s Rankings
            </h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed text-sm">
              <p>
                Australia lead the WODI rankings on 163, with England and India in second and third respectively. In the WT20I rankings, Australia&apos;s rating of 291 (updated 12 July 2026) is the highest by some distance, with England and India again in second and third. Their win in the final of the Women&apos;s T20 World Cup this year means Australia&apos;s 291 may actually undersell the gap between them and the rest.
              </p>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* FAQs Section */}
          <section id="faqs" className="scroll-mt-36">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-yellow-500">❓</span> ICC Rankings FAQs
            </h2>

            <div className="space-y-4">
              <div className="border border-gray-100 rounded-xl p-5 hover:border-yellow-200 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Which team is number one in Test rankings?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Australia, on 131 (as of 7 July 2026) — well clear of South Africa on 119.</p>
              </div>

              <div className="border border-gray-100 rounded-xl p-5 hover:border-yellow-200 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Which team is number one in ODI rankings?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">India top the ODI rankings on 121, well clear of New Zealand on 110 (as of 13 July 2026).</p>
              </div>

              <div className="border border-gray-100 rounded-xl p-5 hover:border-yellow-200 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Which team is number one in T20I rankings?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">England, who displaced India from top spot on 11 July 2026 — both are rated 268, with England ahead by decimal points.</p>
              </div>

              <div className="border border-gray-100 rounded-xl p-5 hover:border-yellow-200 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">How do the ICC Rankings work?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">The ranking points are calculated using a points-per-match system, with weighting applied to opposition strength and result freshness. They are revised following each series, and each May the oldest results drop out of the calculation in an annual update, with updates published on the ICC website.</p>
              </div>

              <div className="border border-gray-100 rounded-xl p-5 hover:border-yellow-200 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Do the rankings decide World Cup qualification?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">The ODI World Cup 2027 qualification places are decided by a team&apos;s position in the ODI rankings as of 31 March 2027, with the top eight teams qualifying, plus South Africa and Zimbabwe as hosts.</p>
              </div>
            </div>
          </section>

          {/* Internal Link/Footer Suggestions Section */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-sm text-gray-600 space-y-2 mt-8">
            <span className="font-bold text-gray-900 block mb-2">See Also / Related Guides:</span>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <Link href="/wtc-points-table/" className="text-yellow-600 hover:text-yellow-500 font-semibold underline">WTC points table</Link>
              </li>
              <li>
                <Link href="/t20-world-cup-winners-list/" className="text-yellow-600 hover:text-yellow-500 font-semibold underline">T20 WC winners</Link>
              </li>
              <li>
                <Link href="/womens-cricket-world-cup-winners-list/" className="text-yellow-600 hover:text-yellow-500 font-semibold underline">Women&apos;s WC winners</Link>
              </li>
            </ul>
          </div>

          <div className="text-xs text-gray-400 italic text-right pt-4 border-t border-gray-100">
            Last updated: 14 July 2026, per the ICC&apos;s 7–13 July rankings refreshes. Tables updated with every ICC release.
          </div>

        </div>
      </div>
    </div>
  );
}
