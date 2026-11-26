import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesList } from "@/components/services/ServicesList";
import { SelectedWorkSection } from "@/components/services/SelectedWorkSection";
import { VideoShowcaseSection } from "@/components/services/VideoShowcaseSection";
import { HowIWorkSection } from "@/components/services/HowIWorkSection";
import { WhyWorkWithMeSection } from "@/components/services/WhyWorkWithMeSection";
import { QuoteEnquirySection } from "@/components/services/QuoteEnquirySection";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Professional Web Development Services | Animesh Samanta — Laravel Specialist",
  description:
    "I build reliable web applications, business websites, and APIs using Laravel, PHP, and modern web technologies. Explore specialized development services, project showcases, and request a custom quote.",
  alternates: {
    canonical: "https://animeshsamanta.is-a.dev/services",
  },
  openGraph: {
    title: "Professional Web Development Services | Animesh Samanta",
    description:
      "Custom web applications, REST APIs, business automation, and high-performance Laravel engineering built for your business. Request a custom quote today.",
    url: "https://animeshsamanta.is-a.dev/services",
    type: "website",
    siteName: "Animesh Samanta Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Animesh Samanta — Professional Web Development & Architecture Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Web Development Services | Animesh Samanta",
    description:
      "Reliable web applications, business websites, and APIs using Laravel, PHP, and modern web technologies.",
    images: ["/images/og-image.png"],
  },
};

export default function ServicesPage() {
  const baseUrl = "https://animeshsamanta.is-a.dev";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/services`,
      },
    ],
  };

  const serviceCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Animesh Samanta - Software Development & Architecture Services",
    description:
      "Bespoke web applications, REST APIs, e-commerce stores, and database migration engineered with Laravel, PHP, and modern web stacks.",
    url: `${baseUrl}/services`,
    provider: {
      "@type": "Person",
      name: "Animesh Samanta",
      jobTitle: "Laravel & PHP Developer",
      url: baseUrl,
    },
    areaServed: "Worldwide (Remote)",
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: servicesData.map((svc, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: svc.title,
          description: svc.shortDescription,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#090b10] dark:text-[#f8fafc] flex flex-col relative overflow-x-hidden selection:bg-cyan-400 selection:text-slate-950 transition-colors duration-250">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceCatalogJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 pt-24 sm:pt-28">
        <ServicesHero />
        <ServicesList />
        <SelectedWorkSection />
        <VideoShowcaseSection />
        <HowIWorkSection />
        <WhyWorkWithMeSection />
        <QuoteEnquirySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

