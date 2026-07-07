import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register – Get Your Mahadev Book ID",
  description:
    "Register for a Mahadev Book ID and start betting on cricket, casino, and more.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: {
    canonical: "https://themahadev.info/register",
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

