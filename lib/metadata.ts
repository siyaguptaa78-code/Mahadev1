import type { Metadata } from "next";

export const siteConfig = {
  name: "Mahadev Book",
  applicationName: "Mahadev Book",
  tagline: "India's Most Trusted Online Betting Platform",
  url: "https://themahadev.info",
  description:
    "Join Mahadev Book for secure betting on cricket, casino & more. Fast login, UPI deposits & 24/7 support. Win big with Mahadev Book.",
  keywords:
    "Mahadev Book, Mahadev Book ID, Mahadev Book Login, Mahadev Book Register, Buy Mahadev Book ID",
  ogImage: "/images/mahadev-book-banner.webp",
  whatsappLink: "https://wa.me/916026703858",
  creator: "Mahadev Book",
  publisher: "Mahadev Book",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.applicationName,
  title: {
    default: `${siteConfig.name} - Mahadev Book ID | Mahadev Book Official`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon.ico", sizes: "180x180", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Mahadev Book - India's Most Trusted Online Betting Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@MahadevBook",
    site: "@MahadevBook",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "UWbaVlPpjAaGLPUUWjjr5jdMqCBISODHry82jMgDioM",
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path = "/"
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url: `${siteConfig.url}${path}`,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
    },
  };
}
