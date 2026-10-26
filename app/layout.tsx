import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BotIdClient } from "botid/client";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://animeshsamanta.dev"),
  title: "Animesh Samanta | Laravel Developer",
  description:
    "Production portfolio of Animesh Samanta, a Laravel Developer with 3+ years of experience architecting high-performance REST APIs, municipal tax automation platforms, database query optimization, and queue processing systems.",
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
  authors: [{ name: "Animesh Samanta", url: "https://github.com/animesh67samanta" }],
  creator: "Animesh Samanta",
  openGraph: {
    title: "Animesh Samanta | Laravel Developer",
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

