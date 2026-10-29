"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FiMapPin,
  FiCalendar,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiSliders,
  FiLayers
} from "react-icons/fi";
import {
  SiLaravel,
  SiPhp,
  SiMysql,
  SiWordpress,
  SiWoocommerce,
  SiFastapi,
  SiBootstrap,
  SiGit
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { portfolioData, ExperienceItem } from "@/data/portfolioData";
import { FadeIn } from "@/components/animations/FadeIn";

interface CompanyMeta {
  monogram: string;
  themeColor: "amber" | "olive" | "teal";
  badgeLabel: string;
  gradientOrb1: string;
  gradientOrb2: string;
  accentText: string;
  accentBorder: string;
  accentBg: string;
  tagline: string;
}

const companyMetaConfig: Record<string, CompanyMeta> = {
  "Adgion Technology Pvt. Ltd.": {
    monogram: "AT",
    themeColor: "amber",
    badgeLabel: "Enterprise REST & AI",
    gradientOrb1: "from-amber-500/20 via-orange-600/12 to-transparent",
    gradientOrb2: "from-lime-600/12 via-emerald-950/25 to-transparent",
    accentText: "text-amber-600 dark:text-amber-400",
    accentBorder: "border-amber-500/30",
    accentBg: "bg-amber-500/10 dark:bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/25",
    tagline: "Enterprise Clean Architecture & AI Microservices"
  },
  "Aman Enterprises": {
    monogram: "AE",
    themeColor: "olive",
    badgeLabel: "Gov-Tech Automation",
    gradientOrb1: "from-lime-500/20 via-emerald-600/12 to-transparent",
    gradientOrb2: "from-amber-600/12 via-stone-900/30 to-transparent",
    accentText: "text-lime-700 dark:text-lime-400",
    accentBorder: "border-lime-500/30",
    accentBg: "bg-lime-500/10 dark:bg-lime-500/15 text-lime-800 dark:text-lime-300 border-lime-500/25",
    tagline: "Municipal Tax Computation & PDF Generation Engines"
  },
  "Bluehorse Software Solution Pvt. Ltd.": {
    monogram: "BS",
    themeColor: "teal",
    badgeLabel: "High-Traffic Web & APIs",
    gradientOrb1: "from-amber-600/15 via-yellow-700/10 to-transparent",
    gradientOrb2: "from-emerald-700/15 via-teal-900/20 to-transparent",
    accentText: "text-teal-700 dark:text-teal-400",
    accentBorder: "border-teal-500/30 dark:border-amber-500/30",
    accentBg: "bg-teal-500/10 dark:bg-amber-500/15 text-teal-800 dark:text-amber-300 border-teal-500/25 dark:border-amber-500/25",
    tagline: "Production PHP Optimization & Payment Gateways"
  }
};

const defaultMeta: CompanyMeta = {
  monogram: "EXP",
  themeColor: "amber",
  badgeLabel: "Engineering",
  gradientOrb1: "from-amber-500/20 via-orange-600/12 to-transparent",
  gradientOrb2: "from-lime-600/12 via-emerald-950/25 to-transparent",
  accentText: "text-amber-600 dark:text-amber-400",
  accentBorder: "border-amber-500/30",
  accentBg: "bg-amber-500/10 dark:bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/25",
  tagline: "Production Architecture & Engineering"
};

const techIconMap: Record<string, React.ElementType> = {
  Laravel: SiLaravel,
  "PHP 8": SiPhp,
  "Core PHP": SiPhp,
  MySQL: SiMysql,
  "REST APIs": TbApi,
  "FastAPI (AI)": SiFastapi,
  WordPress: SiWordpress,
  WooCommerce: SiWoocommerce,
  Bootstrap: SiBootstrap,
  Git: SiGit
};

interface CompanyLogoProps {
  company: string;
  companyLogo?: string;
  meta: CompanyMeta;
}

function CompanyLogoBadge({ company, companyLogo, meta }: CompanyLogoProps) {
  const [hasError, setHasError] = useState(false);

  if (companyLogo && !hasError) {
    return (
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121622] p-2 shrink-0 shadow-md">
        <Image
          src={companyLogo}
          alt={`${company} logo`}
          fill
          sizes="64px"
          className="object-contain p-1"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  return (
    <div
      aria-label={`${company} emblem`}
      className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-900 dark:bg-[#0c0f17] border ${meta.accentBorder} bg-gradient-to-br from-white/[0.08] to-transparent flex flex-col items-center justify-center shadow-lg shrink-0 select-none group-hover:scale-105 transition-transform duration-300`}
    >
      <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-white/40" />
      <span className={`font-mono font-extrabold text-lg sm:text-xl tracking-wider leading-none ${meta.accentText}`}>
        {meta.monogram}
      </span>
      <span className="text-[8px] font-semibold tracking-widest text-slate-400 uppercase mt-0.5">
        SOLUTIONS
      </span>
    </div>
  );
}

interface CardContentProps {
  exp: ExperienceItem;
  index: number;
  total: number;
}

function ExperienceCardView({ exp, index, total }: CardContentProps) {
  const meta = companyMetaConfig[exp.company] || defaultMeta;
  const employmentType = exp.employmentType || exp.workType || "On-site";
  const formattedIndex = String(index + 1).padStart(2, "0");
  const formattedTotal = String(total).padStart(2, "0");
  const responsibilities = exp.responsibilities || exp.achievements || [];
  const description = exp.description || exp.summary;

  return (
    <div className="relative w-full rounded-3xl sm:rounded-[32px] p-6 sm:p-8 lg:p-10 bg-white/95 dark:bg-[#0c0f17]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/[0.08] shadow-xl shadow-slate-200/40 dark:shadow-black/70 overflow-hidden transition-all duration-300 group">
      {/* Subtle Blurred Gradient Light 1 (Muted Warm Orange / Amber) */}
      <div
        className={`absolute -top-24 -right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br ${meta.gradientOrb1} blur-[85px] pointer-events-none opacity-80 dark:opacity-60 transition-all duration-700`}
      />

      {/* Subtle Blurred Gradient Light 2 (Olive-Green / Earthy Sage) */}
      <div
        className={`absolute -bottom-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr ${meta.gradientOrb2} blur-[85px] pointer-events-none opacity-80 dark:opacity-60 transition-all duration-700`}
      />

      {/* Top Hairline Light Reflection */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 space-y-6 sm:space-y-8">
        {/* Top Bar: Company Identity, Badges, and Stepper Index */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-white/[0.06]">
          {/* Company Brand & Location Info */}
          <div className="flex items-start sm:items-center gap-4">
            <CompanyLogoBadge company={exp.company} companyLogo={exp.companyLogo} meta={meta} />

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${meta.accentBg}`}>
                  {meta.badgeLabel}
                </span>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.06] text-[11px] font-medium text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {employmentType}
                </span>

                <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                  <FiMapPin className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                  {exp.location}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                {exp.company}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                {meta.tagline}
              </p>
            </div>
          </div>

          {/* Duration & Stepper Index */}
          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-slate-300">
              <FiCalendar className={`w-3.5 h-3.5 ${meta.accentText}`} />
              <span>{exp.period || `${exp.startDate || "Recent"} – ${exp.endDate || "Present"}`}</span>
            </div>

            <div className="text-xs font-mono font-medium text-slate-400 dark:text-slate-500">
              STAGE <span className="font-bold text-slate-900 dark:text-white">{formattedIndex}</span> / {formattedTotal}
            </div>
          </div>
        </div>

        {/* Hero Role Title & Narrative Summary */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${meta.accentText} bg-current`} />
            <span className={`text-xs font-bold uppercase tracking-widest ${meta.accentText}`}>
              Designated Engineering Role
            </span>
          </div>

          <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {exp.role}
          </h4>

          {description && (
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl font-normal">
              {description}
            </p>
          )}
        </div>

        {/* Responsibilities & Accomplishments Grid */}
        {responsibilities.length > 0 && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core Deliverables & Technical Milestones
              </h5>
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
                {responsibilities.length} verified impact items
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-3.5">
              {responsibilities.map((achievement, aIdx) => (
                <div
                  key={aIdx}
                  className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/70 dark:border-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.12] transition-colors"
                >
                  <div
                    className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${meta.accentBg}`}
                  >
                    <FiCheck className="w-3 h-3" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technology Stack Badges */}
        {exp.technologies && exp.technologies.length > 0 && (
          <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.06] space-y-2.5">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Technology & Tooling Stack
            </h5>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => {
                const IconComponent = techIconMap[tech];
                return (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/[0.08] text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white transition-all shadow-xs"
                  >
                    {IconComponent && <IconComponent className={`w-3.5 h-3.5 ${meta.accentText}`} />}
                    <span>{tech}</span>
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Experience() {
  const experiences = portfolioData.experiences;
  const total = experiences.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"slider" | "stacked">("slider");
  const [slideDirection, setSlideDirection] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  const goToNext = useCallback(() => {
    setSlideDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    setSlideDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const selectIndex = useCallback(
    (index: number) => {
      setSlideDirection(index >= currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Keyboard navigation when focusing on the slider container
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "slider") return;
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
        return;
      }
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode, goToNext, goToPrev]);

  const activeExp = experiences[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: shouldReduceMotion ? 0 : direction > 0 ? 30 : -30,
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.985
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.35,
        ease: [0.16, 1, 0.3, 1] as const
      }
    },
    exit: (direction: number) => ({
      x: shouldReduceMotion ? 0 : direction < 0 ? 30 : -30,
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.985,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.25,
        ease: [0.16, 1, 0.3, 1] as const
      }
    })
  };

  const progressPercent = ((currentIndex + 1) / total) * 100;

  return (
    <section
      id="experience"
      role="region"
      aria-label="Professional Work Experience"
      className="py-16 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24 transition-colors duration-250"
    >
      {/* Section Header */}
      <FadeIn direction="up">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-amber-500 via-lime-500 to-cyan-500" />
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                Career Journey & Track Record
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Professional Work Experience
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
              Track record in architecting Laravel applications, automating enterprise tax systems, and developing high-throughput REST APIs.
            </p>
          </div>

          {/* View Mode Toggle: Slider vs Stacked */}
          <div className="inline-flex items-center p-1 rounded-2xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] shrink-0 self-start sm:self-end">
            <button
              type="button"
              onClick={() => setViewMode("slider")}
              aria-label="Switch to Spotlight Slider View"
              aria-pressed={viewMode === "slider"}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-amber-500 ${
                viewMode === "slider"
                  ? "bg-white dark:bg-[#121622] text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FiSliders className="w-3.5 h-3.5 text-amber-500" />
              <span>Spotlight Slider</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("stacked")}
              aria-label="Switch to Stacked Cards View"
              aria-pressed={viewMode === "stacked"}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-amber-500 ${
                viewMode === "stacked"
                  ? "bg-white dark:bg-[#121622] text-slate-900 dark:text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <FiLayers className="w-3.5 h-3.5 text-lime-500" />
              <span>Stacked View</span>
            </button>
          </div>
        </div>
      </FadeIn>

      {/* Interactive Company Selection Segmented Tabs (Slider Mode) */}
      {viewMode === "slider" && (
        <FadeIn direction="up" delay={0.1}>
          <div
            role="tablist"
            aria-label="Work Experience Companies"
            className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none"
          >
            {experiences.map((exp, idx) => {
              const isSelected = idx === currentIndex;
              const meta = companyMetaConfig[exp.company] || defaultMeta;

              return (
                <button
                  key={exp.company}
                  role="tab"
                  id={`exp-tab-${idx}`}
                  aria-selected={isSelected}
                  aria-controls={`exp-panel-${idx}`}
                  onClick={() => selectIndex(idx)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-semibold shrink-0 transition-all duration-200 border focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    isSelected
                      ? "bg-slate-900 text-white dark:bg-white/[0.08] dark:text-white border-slate-900 dark:border-white/20 shadow-md"
                      : "bg-white dark:bg-white/[0.02] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/[0.06] hover:bg-slate-50 dark:hover:bg-white/[0.04] hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? `${meta.accentText} bg-current animate-pulse` : "bg-slate-400 dark:bg-slate-600"
                    }`}
                  />
                  <span className="font-mono text-[11px] opacity-70">0{idx + 1}</span>
                  <span className="whitespace-nowrap">{exp.company}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>
      )}

      {/* Main Display: Slider Spotlight Mode */}
      {viewMode === "slider" ? (
        <div
          tabIndex={0}
          role="region"
          aria-label="Experience Showcase Slider. Use Left and Right arrow keys to navigate."
          className="relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/80 rounded-[34px]"
        >
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait" custom={slideDirection}>
              <motion.div
                key={activeExp.company}
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag={shouldReduceMotion ? false : "x"}
                dragDirectionLock
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_e, { offset }) => {
                  if (offset.x < -45) {
                    goToNext();
                  } else if (offset.x > 45) {
                    goToPrev();
                  }
                }}
                role="tabpanel"
                id={`exp-panel-${currentIndex}`}
                aria-labelledby={`exp-tab-${currentIndex}`}
                className="w-full cursor-grab active:cursor-grabbing"
                style={{ touchAction: "pan-y" }}
              >
                <ExperienceCardView exp={activeExp} index={currentIndex} total={total} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/80 dark:bg-[#0c0f17]/80 backdrop-blur-md border border-slate-200/90 dark:border-white/[0.08]">
            {/* Progress Stepper Indicator */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                0{currentIndex + 1} <span className="text-slate-400 font-normal">/ 0{total}</span>
              </span>

              {/* Smooth Progress Bar */}
              <div className="flex-1 sm:w-48 h-1.5 rounded-full bg-slate-200 dark:bg-white/[0.08] overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-500 via-lime-500 to-cyan-500 rounded-full"
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                />
              </div>

              <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
                <span>Swipe or use arrows to navigate</span>
              </span>
            </div>

            {/* Previous & Next Control Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrev}
                aria-label="Previous work experience role"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <FiChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next work experience role"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <FiChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Stacked View: All 3 Large Hitit-Style Cards Vertically Stacked */
        <div className="space-y-8 sm:space-y-10">
          {experiences.map((exp, idx) => (
            <FadeIn key={exp.company} direction="up" delay={idx * 0.15}>
              <ExperienceCardView exp={exp} index={idx} total={total} />
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  );
}
