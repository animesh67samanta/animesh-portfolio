import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://www.googletagmanager.com https://*.google-analytics.com;
  font-src 'self' data:;
  connect-src 'self' https://api.emailjs.com https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://vitals.vercel-insights.com https://api.vercel.com;
  frame-src 'self' https://www.googletagmanager.com;
  worker-src 'self' blob:;
  manifest-src 'self';
  media-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, " ").trim();

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  {
    key: "Content-Security-Policy",
    value: cspHeader,
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "animeshsamanta.dev",
          },
        ],
        destination: "https://animeshsamanta.is-a.dev/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "animesh-portfolio-nu.vercel.app",
          },
        ],
        destination: "https://animeshsamanta.is-a.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default withBotId(nextConfig);

