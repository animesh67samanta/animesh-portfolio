import React from "react";

export function JsonLd() {
  const baseUrl = "https://animeshsamanta.is-a.dev";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: "Animesh Samanta",
    givenName: "Animesh",
    familyName: "Samanta",
    jobTitle: "Laravel and PHP Developer",
    gender: "Male",
    nationality: "Indian",
    url: baseUrl,
    image: `${baseUrl}/images/avatar.png`,
    description:
      "Laravel and PHP Developer with 3+ years of experience architecting high-performance REST APIs, municipal tax automation platforms, database query optimization, and queue processing systems. Author of DevGit CLI.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    email: "mailto:animesh67samanta@gmail.com",
    telephone: "+919126577584",
    sameAs: [
      "https://github.com/animesh67samanta",
      "https://www.linkedin.com/in/animesh-samanta-296b24211",
      "https://www.facebook.com/animesh67samanta",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Maulana Abul Kalam Azad University of Technology (MAKAUT)",
    },
    knowsAbout: [
      "Laravel",
      "PHP",
      "REST APIs",
      "MySQL",
      "Redis",
      "Database Optimization",
      "Clean Architecture",
      "Docker",
      "DevGit CLI",
      "Go",
      "React.js",
      "Queue Processing",
      "Enterprise Software Architecture",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Build an AI Agent with MCP and RAG",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "PHP & MySQL Professional Training",
      },
    ],
  };

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${baseUrl}/#webpage`,
    url: baseUrl,
    name: "Animesh Samanta | Laravel & PHP Developer Portfolio",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Animesh Samanta Portfolio",
      description:
        "Official portfolio and technical blueprints of Animesh Samanta, Laravel & PHP Developer.",
    },
    about: {
      "@id": `${baseUrl}/#person`,
    },
    mainEntity: {
      "@id": `${baseUrl}/#person`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
