import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  ...defaultMetadata,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://themahadev.info/#org",
      name: "Mahadev Book",
      url: "https://themahadev.info/",
      logo: {
        "@type": "ImageObject",
        url: "https://themahadev.info/images/mahadev-book-logo.webp",
      },
      description:
        "Mahadev Book Official Site – India's trusted sports insights platform providing cricket predictions, player analysis, Mahadev Book Login, and Mahadev Book Registration.",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          url: "https://themahadev.info/contact",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://themahadev.info/#website",
      url: "https://themahadev.info/",
      name: "Mahadev Book",
      inLanguage: "en-IN",
      publisher: { "@id": "https://themahadev.info/#org" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://themahadev.info/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Mahadev Book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mahadev Book is India's top sports insights and fantasy analytics platform with an official website and mobile app.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get a Mahadev Book ID?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can request a verified Mahadev Book ID via our WhatsApp support channel.",
          },
        },
        {
          "@type": "Question",
          name: "Is Mahadev Book Online free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Mahadev Book Registration is free. Premium features require an upgrade.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I download Mahadev Book App?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Mahadev Book App can be downloaded from the official Mahadev Book Website.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-[var(--font-inter)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
