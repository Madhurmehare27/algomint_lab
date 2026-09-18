import type { Metadata } from "next";
import "./globals.css";
import GlobalBackground from "@/components/GlobalBackground";
import GlobalCursorGlow from "@/components/GlobalCursorGlow";
import FAQJsonLd from "@/components/FAQJsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://www.algomintlabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Algomint Labs | Software Development & AI Solutions",
    template: "%s | Algomint Labs",
  },

  description:
    "Algomint Labs builds scalable software, AI automation, SaaS platforms, CRM systems, healthcare software, and custom web applications for growing businesses.",

  keywords: [
    "Algomint Labs",
    "software development company",
    "AI automation agency",
    "SaaS development company",
    "custom software development",
    "React development company",
    "Next.js development company",
    "CRM software development",
    "healthcare software development",
    "AI agent development",
    "software company in India",
  ],

  authors: [
    {
      name: "Algomint Labs",
      url: siteUrl,
    },
  ],

  creator: "Algomint Labs",
  publisher: "Algomint Labs",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Algomint Labs",
    title: "Algomint Labs | Software Development & AI Solutions",
    description:
      "We build modern SaaS platforms, AI-powered applications, business automation systems, and scalable digital products.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Algomint Labs - Software Development and AI Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Algomint Labs | Software Development & AI Solutions",
    description:
      "Custom software, AI automation, SaaS platforms, and business technology solutions.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar/>
      <GlobalCursorGlow/>
      <GlobalBackground/>
        <FAQJsonLd />
      <body>{children}</body>
      <Footer/>
    </html>
  );
}