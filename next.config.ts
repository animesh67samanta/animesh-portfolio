import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  devIndicators: false,
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

