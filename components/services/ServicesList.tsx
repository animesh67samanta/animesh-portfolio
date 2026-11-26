"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiCheck, FiArrowRight, FiLayers, FiCpu } from "react-icons/fi";
import { SiLaravel, SiWordpress, SiWoocommerce, SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { servicesData, ServiceItem } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  SiLaravel,
  TbApi,
  SiWordpress,
  SiWoocommerce,
  SiMysql,
  FiCpu,
};

export function ServicesList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = [
    "All",
    "Backend & Systems",
    "APIs & Integration",
    "Websites & CMS",
    "E-Commerce",
    "Data & Optimization",
  ];

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((svc) => svc.category === selectedCategory);

  const handleScrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>, serviceTitle: string) => {
    e.preventDefault();
    const el = document.getElementById("quote");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Dispatch custom event to pre-select this service in the quote form
      window.dispatchEvent(
        new CustomEvent("select-service-quote", { detail: { serviceTitle } })
      );
    }
  };

  return (
    <section id="services-list" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-white/[0.06] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                Core Capabilities &amp; Engineering
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Software Development Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Every service is delivered using clean architecture, rigorous testing, and direct developer communication. Pricing is customized based on project scope and deliverables.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.04] px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/[0.08]">
              {servicesData.length} Specialized Offerings
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div
          role="tablist"
          aria-label="Filter Services by Category"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-semibold shrink-0 transition-all duration-200 border focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isSelected
                    ? "bg-slate-900 text-white dark:bg-cyan-500/15 dark:text-cyan-300 border-slate-900 dark:border-cyan-500/30 shadow-md shadow-cyan-500/10"
                    : "bg-white dark:bg-white/[0.02] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/[0.06] hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Services Grid (6 Core Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((svc: ServiceItem) => {
            const IconComponent = iconMap[svc.iconName] || FiLayers;

            return (
              <article
                key={svc.id}
                id={svc.slug}
                className="group relative rounded-3xl p-6 sm:p-8 bg-white/95 dark:bg-[#0c0f17]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 dark:hover:border-cyan-500/40 shadow-xl shadow-slate-200/50 dark:shadow-black/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Hover Gradient Light */}
                <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-cyan-500/10 blur-[75px] pointer-events-none group-hover:opacity-100 opacity-40 transition-opacity duration-500" />

                <div className="space-y-6">
                  {/* Card Header: Icon, Category Badge & Title */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-13 h-13 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block mb-0.5">
                          {svc.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                          {svc.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Benefit-Oriented Narrative Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {svc.fullDescription}
                  </p>

                  {/* Thumbnail / Architecture Image with consistent aspect ratio */}
                  <div className="relative w-full aspect-[16/8] rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/[0.06] bg-slate-100 dark:bg-slate-950/60 shadow-inner">
                    <Image
                      src={svc.image}
                      alt={svc.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover object-top group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                      <span className="font-mono bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[10px]">
                        Verified Architecture
                      </span>
                      <span className="font-medium text-slate-300 text-[10px] hidden sm:inline">
                        {svc.technologies.slice(0, 3).join(" • ")}
                      </span>
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-2 space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Key Deliverables &amp; Inclusions:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {svc.deliverables.map((item, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-snug"
                        >
                          <FiCheck className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Chips */}
                  <div className="pt-3 border-t border-slate-200/80 dark:border-white/[0.06]">
                    <div className="flex flex-wrap gap-1.5">
                      {svc.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-[11px] font-medium text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="mt-8 pt-5 border-t border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 block">
                      Pricing Model
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      Scope-Based Quote
                    </span>
                  </div>

                  <a
                    href={svc.ctaLink}
                    onClick={(e) => handleScrollToQuote(e, svc.title)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-700 dark:text-cyan-300 hover:text-slate-950 font-bold text-xs border border-cyan-500/30 hover:border-cyan-500 transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-cyan-400 group/btn"
                  >
                    <span>{svc.ctaLabel}</span>
                    <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

