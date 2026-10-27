import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiFolder } from "react-icons/fi";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects & Case Studies | Animesh Samanta — Laravel Developer",
  description:
    "Explore in-depth technical case studies, municipal tax systems, healthcare platforms, and Go CLI developer tools engineered by Animesh Samanta.",
  alternates: {
    canonical: "https://animeshsamanta.is-a.dev/projects",
  },
  openGraph: {
    title: "Projects & Case Studies | Animesh Samanta — Laravel Developer",
    description:
      "Explore in-depth technical case studies, municipal tax systems, healthcare platforms, and Go CLI developer tools engineered by Animesh Samanta.",
    url: "https://animeshsamanta.is-a.dev/projects",
    type: "website",
  },
};

export default function ProjectsIndexPage() {
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
        name: "Projects",
        item: `${baseUrl}/projects`,
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects & Case Studies by Animesh Samanta",
    description:
      "Explore in-depth technical case studies, municipal tax systems, healthcare platforms, and Go CLI developer tools engineered by Animesh Samanta.",
    url: `${baseUrl}/projects`,
    author: {
      "@type": "Person",
      name: "Animesh Samanta",
      jobTitle: "Laravel & PHP Developer",
      url: baseUrl,
    },
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#090b10] dark:text-[#f8fafc] flex flex-col relative overflow-x-hidden selection:bg-cyan-400 selection:text-slate-950 transition-colors duration-250">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Background Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-sky-400/10 dark:bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-10 w-[600px] h-[600px] bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        {/* Breadcrumb Trail */}
        <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200 font-medium">Projects &amp; Case Studies</span>
        </nav>

        {/* Header */}
        <header className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-700 dark:text-cyan-400">
            <FiFolder className="w-3.5 h-3.5" />
            <span>Architecture &amp; Engineering Portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Enterprise Case Studies &amp; System Blueprints
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Detailed case studies of high-throughput backend applications, municipal civic tax automation, real-time healthcare booking, and developer tools engineered by{" "}
            <strong className="text-slate-900 dark:text-white font-semibold">Animesh Samanta</strong>, Laravel &amp; PHP Developer.
          </p>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white dark:bg-[#111520] hover:bg-slate-50 dark:hover:bg-[#141926] border border-slate-200 dark:border-slate-800/90 hover:border-cyan-400 dark:hover:border-cyan-500/40 rounded-3xl overflow-hidden shadow-md shadow-slate-200/50 dark:shadow-xl dark:shadow-black/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                  <Image
                    src={project.image}
                    alt={`${project.title} — System Case Study by Animesh Samanta`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-slate-700/60 text-[11px] font-semibold text-cyan-700 dark:text-cyan-400 shadow-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7 space-y-3">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 pt-2">
                    {project.highlights.slice(0, 2).map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <FiCheckCircle className="text-cyan-600 dark:text-cyan-400 w-3.5 h-3.5 mt-0.5 shrink-0" />
                        <span className="line-clamp-2">{hl}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/50 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 text-xs font-semibold transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>Read Full Case Study</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </Link>

                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  By Animesh Samanta
                </span>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
