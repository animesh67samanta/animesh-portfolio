import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BotIdClient } from "botid/client";
import { JsonLd } from "@/components/JsonLd";

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
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090b10" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
};

const baseUrl = "https://animeshsamanta.is-a.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Animesh Samanta | Laravel & PHP Developer",
    template: "%s | Animesh Samanta",
  },
  description:
    "Official portfolio of Animesh Samanta, a Laravel and PHP Developer with 3+ years of experience architecting high-performance REST APIs, municipal tax automation platforms, database query optimization, and queue processing systems. Author of DevGit CLI.",
  keywords: [
    "Animesh Samanta",
    "Animesh Samanta Laravel Developer",
    "Animesh Samanta PHP Developer",
    "Laravel Developer",
    "PHP Developer",
    "Backend Developer",
    "REST API",
    "MySQL",
    "Redis",
    "Clean Architecture",
    "DevGit CLI",
    "Full-Stack Developer",
    "Kolkata",
    "Remote Developer",
  ],
  authors: [{ name: "Animesh Samanta", url: baseUrl }],
  creator: "Animesh Samanta",
  publisher: "Animesh Samanta",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Animesh Samanta | Laravel & PHP Developer",
    description:
      "Explore production systems, verified experience, and architecture blueprints by Animesh Samanta.",
    url: baseUrl,
    siteName: "Animesh Samanta Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Animesh Samanta — Laravel and PHP Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Animesh Samanta | Laravel & PHP Developer",
    description:
      "Explore production systems, verified experience, and architecture blueprints by Animesh Samanta.",
    images: ["/images/og-image.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", type: "image/png" },
    ],
  },
};

const themeInitScript = `
  try {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark) || !saved) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
`;

const protectedRoutes = [
  {
    path: "/api/contact",
    method: "POST",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <JsonLd />
        <BotIdClient protect={protectedRoutes} />
      </head>
      <body className="bg-[#f8fafc] text-slate-900 dark:bg-[#090b10] dark:text-[#f8fafc] min-h-screen flex flex-col antialiased selection:bg-cyan-400 selection:text-slate-950 transition-colors duration-250">
        <ThemeProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}

