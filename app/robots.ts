import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://animeshsamanta.is-a.dev/sitemap.xml",
    host: "https://animeshsamanta.is-a.dev",
  };
}
