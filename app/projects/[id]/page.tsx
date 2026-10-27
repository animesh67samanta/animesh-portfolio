import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
  FiLayers,
  FiDatabase,
  FiShield,
  FiTrendingUp,
  FiCpu,
  FiUser
} from "react-icons/fi";
import { projects } from "@/data/projects";
import { portfolioData } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Animesh Samanta",
      description: "Case study not found.",
    };
  }

  const baseUrl = "https://animeshsamanta.is-a.dev";
  const canonicalUrl = `${baseUrl}/projects/${project.id}`;
  const metaTitle = `${project.title} Case Study | Animesh Samanta — Laravel Developer`;
  const metaDescription = `${project.title}: ${project.subtitle}. Case study by Animesh Samanta, Laravel & PHP Developer covering system architecture, database optimization, and implementation.`;

  return {
    title: metaTitle,
    description: metaDescription.slice(0, 160),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription.slice(0, 160),
      url: canonicalUrl,
      siteName: "Animesh Samanta Portfolio",
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} — System Architecture & Implementation by Animesh Samanta`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription.slice(0, 160),
      images: [project.image],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const baseUrl = "https://animeshsamanta.is-a.dev";
  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

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
        item: `${baseUrl}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${baseUrl}/projects/${project.id}`,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${project.title} — Technical Case Study & Architecture`,
    description: project.description,
    image: `${baseUrl}${project.image}`,
    author: {
      "@type": "Person",
      name: "Animesh Samanta",
      url: baseUrl,
      jobTitle: "Laravel & PHP Developer",
    },
    publisher: {
      "@type": "Person",
      name: "Animesh Samanta",
      url: baseUrl,
    },
    mainEntityOfPage: `${baseUrl}/projects/${project.id}`,
    keywords: [
      project.title,
      "Animesh Samanta",
      "Animesh Samanta Laravel Developer",
      "Laravel Developer Case Study",
      "PHP Developer",
      ...project.technologies,
    ].join(", "),
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#090b10] dark:text-[#f8fafc] flex flex-col relative overflow-x-hidden selection:bg-cyan-400 selection:text-slate-950 transition-colors duration-250">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Subtle Background Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-sky-400/10 dark:bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-10 w-[600px] h-[600px] bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        {/* Breadcrumb Trail */}
        <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Projects
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200 font-medium truncate max-w-xs sm:max-w-md">
            {project.title}
          </span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to All Projects &amp; Blueprints</span>
          </Link>
        </div>

        {/* Hero Section */}
        <header className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-700 dark:text-cyan-400">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs font-medium text-slate-600 dark:text-slate-300">
              Technical Case Study
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl font-medium text-cyan-700 dark:text-cyan-400">
            {project.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Architected &amp; Engineered by{" "}
            <strong className="text-slate-900 dark:text-slate-200 font-semibold">
              Animesh Samanta
            </strong>{" "}
            • Laravel &amp; PHP Developer
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-all shadow-md"
              >
                <FiGithub className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 text-xs sm:text-sm font-semibold transition-all shadow-md shadow-cyan-500/20"
              >
                <span>Live Release / Demo</span>
                <FiExternalLink className="w-4 h-4" />
              </a>
            )}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-[#111520] hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold transition-all"
            >
              <span>Discuss Similar Architecture</span>
            </Link>
          </div>
        </header>

        {/* Featured Project Showcase Image */}
        <div className="relative aspect-[16/9] w-full max-h-[500px] overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800/90 shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-black/50 mb-12 bg-slate-950">
          <Image
            src={project.image}
            alt={`${project.title} — Architecture and Implementation by Animesh Samanta`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-top"
          />
        </div>

        {/* Two-Column Grid: Main Case Study (8) + Sidebar (4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Case Study Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* 1. Executive Summary */}
            <section className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3 text-cyan-600 dark:text-cyan-400">
                <FiCpu className="w-5 h-5" />
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Executive Summary &amp; Overview
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {project.metrics && (
                <div className="mt-5 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-start gap-3">
                  <FiTrendingUp className="text-cyan-600 dark:text-cyan-400 w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                      Verified Production Impact
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {project.metrics}
                    </span>
                  </div>
                </div>
              )}
            </section>

            {/* 2. Key Highlights & Deliverables */}
            <section className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-5 flex items-center gap-2.5">
                <FiCheckCircle className="text-cyan-600 dark:text-cyan-400 w-5 h-5" />
                <span>Key Deliverables &amp; Technical Capabilities</span>
              </h2>
              <div className="space-y-3.5">
                {project.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      {idx + 1}
                    </span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. System Architecture Blueprint */}
            {project.architectureDetails && (
              <section className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-3 flex items-center gap-2.5">
                    <FiLayers className="text-cyan-600 dark:text-cyan-400 w-5 h-5" />
                    <span>System Architecture &amp; Engineering Blueprint</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.architectureDetails.overview}
                  </p>
                </div>

                {/* Key Architectural Modules */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                    Core Technical Modules
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.architectureDetails.keyModules.map((mod, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium"
                      >
                        <span className="text-cyan-600 dark:text-cyan-400 font-semibold mr-1.5">•</span>
                        {mod}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Database Architecture & Insights */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    <FiDatabase className="w-4 h-4" />
                    <span>Database Design &amp; Query Optimization</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.architectureDetails.databaseInsights}
                  </p>
                </div>

                {/* Security, Permissions & Access Control */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    <FiShield className="w-4 h-4" />
                    <span>Security, Authentication &amp; Access Control</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.architectureDetails.securityNotes}
                  </p>
                </div>
              </section>
            )}

            {/* 4. Visual Gallery & Production Screenshots */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <section className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                  Visual Interface &amp; Workflow Screens
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Verified production workflows and operational views engineered by Animesh Samanta.
                </p>

                <div className="space-y-6">
                  {project.galleryImages.map((img, gIdx) => (
                    <figure key={gIdx} className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950">
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={img.url}
                          alt={`${project.title} — ${img.caption} by Animesh Samanta`}
                          fill
                          sizes="(max-width: 1000px) 100vw, 800px"
                          className="object-cover object-top"
                        />
                      </div>
                      <figcaption className="p-3 bg-slate-100 dark:bg-slate-900 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
                        {img.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}

            {/* 5. Contributions Summary */}
            <section className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4 flex items-center gap-2.5">
                <FiUser className="text-cyan-600 dark:text-cyan-400 w-5 h-5" />
                <span>Animesh Samanta&apos;s Engineering Contributions</span>
              </h2>
              <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
                <p>
                  As the backend engineer on <strong>{project.title}</strong>, Animesh Samanta was responsible for translating high-level business and operational requirements into robust, high-performance database models, RESTful APIs, and asynchronous processing pipelines.
                </p>
                <p>
                  Specific contributions included structuring clean architecture layers (service layer, repository abstractions, FormRequest validations), implementing robust authorization rules, profiling relational queries to prevent lock contention, and automating critical background tasks.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Project Overview Card */}
            <div className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-slate-800/90 rounded-3xl p-6 shadow-sm space-y-5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 pb-3">
                Project Overview
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="block text-slate-400 dark:text-slate-500 font-medium">Category</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">{project.category}</span>
                </div>

                <div>
                  <span className="block text-slate-400 dark:text-slate-500 font-medium">Engineer &amp; Architect</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">Animesh Samanta</span>
                </div>

                <div>
                  <span className="block text-slate-400 dark:text-slate-500 font-medium">Primary Technologies</span>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {project.metrics && (
                  <div>
                    <span className="block text-slate-400 dark:text-slate-500 font-medium">Key Metric</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{project.metrics}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Author Profile Snapshot */}
            <div className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-slate-800/90 rounded-3xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900 relative shrink-0 border border-cyan-500/40">
                  <Image
                    src={portfolioData.personal.avatar}
                    alt="Animesh Samanta - Laravel Developer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Animesh Samanta
                  </h4>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                    Laravel &amp; PHP Developer
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Specializing in Laravel, MySQL query tuning, high-concurrency REST APIs, and automated queue systems with 3+ years of production experience.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <Link
                  href="/#contact"
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-colors shadow-md shadow-cyan-500/20"
                >
                  Contact Animesh Samanta
                </Link>
                <Link
                  href="/"
                  className="w-full text-center py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium text-xs hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                >
                  View Full Portfolio
                </Link>
              </div>
            </div>

            {/* Project Navigation (Previous / Next) */}
            <div className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-slate-800/90 rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 pb-3">
                Browse Other Case Studies
              </h3>

              <div className="space-y-3">
                <Link
                  href={`/projects/${prevProject.id}`}
                  className="block p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all group"
                >
                  <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 mb-0.5">
                    Previous Project
                  </span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {prevProject.title}
                  </span>
                </Link>

                <Link
                  href={`/projects/${nextProject.id}`}
                  className="block p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all group"
                >
                  <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 mb-0.5">
                    Next Project
                  </span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-1">
                    {nextProject.title}
                  </span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
