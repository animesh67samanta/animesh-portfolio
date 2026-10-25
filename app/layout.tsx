import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090b10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://animeshsamanta.dev"),
  title: "Animesh Samanta | Laravel Backend Developer",
  description:
    "Production portfolio of Animesh Samanta, a Laravel Backend Developer with 3+ years of experience architecting high-performance REST APIs, municipal tax automation platforms, database query optimization, and queue processing systems.",
  keywords: [
    "Animesh Samanta",
    "Laravel Developer",
    "Backend Developer",
    "PHP Developer",
    "REST API",
    "MySQL",
    "Redis",
    "Clean Architecture",
    "Kolkata",
    "Remote Developer"
  ],
  authors: [{ name: "Animesh Samanta", url: "https://github.com/animeshsamanta" }],
  creator: "Animesh Samanta",
  openGraph: {
    title: "Animesh Samanta | Laravel Backend Developer",
    description:
      "Explore the production systems, verified experience, and architecture blueprints by Animesh Samanta.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-3d-bg.png",
        width: 1200,
        height: 630,
        alt: "Animesh Samanta - Laravel Developer Portfolio"
      }
    ]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="bg-[#090b10] text-[#f8fafc] min-h-screen flex flex-col antialiased selection:bg-cyan-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
