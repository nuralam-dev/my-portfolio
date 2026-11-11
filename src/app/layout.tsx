import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000"),
  ),
  title: {
    default: "Nur Alam | Full Stack Web Developer",
    template: "%s | Nur Alam",
  },

  description:
    "Explore the portfolio of Nur Alam, a Full Stack Web Developer building modern, responsive web applications using React, Next.js, TypeScript, Express.js, and MongoDB.",

  keywords: [
    "Nur Alam",
    "Full Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "MongoDB",
    "Portfolio",
    "Bangladesh",
  ],

  authors: [{ name: "Nur Alam" }],
  creator: "Nur Alam",

  openGraph: {
    title: "Nur Alam | Full Stack Web Developer",
    description:
      "Explore my projects, technical skills, and web development journey.",
    type: "website",
    locale: "en_US",
    siteName: "Nur Alam Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Nur Alam - Full Stack Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nur Alam | Full Stack Web Developer",
    description:
      "Explore my projects and full stack development journey.",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
