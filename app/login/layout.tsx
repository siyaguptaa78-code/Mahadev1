import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login – Mahadev Book",
  description: "Login to your Mahadev Book account securely.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: {
    canonical: "https://themahadev.info/login",
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

