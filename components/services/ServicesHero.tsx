"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiMessageSquare, FiShield } from "react-icons/fi";
import { SiLaravel, SiPhp, SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export function ServicesHero() {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-6 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
      {/* Subtle Ambient Glows - Electric Cyan, Blue & Violet */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200 font-medium">Services</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Supporting Message & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-semibold text-cyan-700 dark:text-cyan-300 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Full-Cycle Software Development &amp; Architecture</span>
            </div>

            {/* Primary Headline (Single H1 on the page) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Digital Solutions <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400">
                Built for Your Business
              </span>
            </h1>

            {/* Supporting Message */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              I build reliable web applications, business websites, and APIs using Laravel, PHP, and modern web technologies.
            </p>

            {/* Core Capability Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <FiCheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>Clean Architecture &amp; High Reliability</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <FiCheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>Direct Developer Communication</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <FiCheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>Secure REST APIs &amp; Integrations</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <FiCheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>No Jargon, Transparent Quoting</span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#quote"
                onClick={(e) => handleScrollTo(e, "quote")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 active:scale-95"
              >
                <FiMessageSquare className="w-4 h-4" />
                <span>Discuss Your Project</span>
                <FiArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services-list"
                onClick={(e) => handleScrollTo(e, "services-list")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 shadow-sm focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Tech Badges */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/80 dark:border-white/[0.06] text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-[11px]">Primary Stacks:</span>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                  <SiLaravel className="text-red-500 w-3.5 h-3.5" /> Laravel
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                  <SiPhp className="text-indigo-400 w-3.5 h-3.5" /> PHP 8
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                  <SiMysql className="text-sky-500 w-3.5 h-3.5" /> MySQL
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                  <TbApi className="text-cyan-400 w-3.5 h-3.5" /> REST APIs
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Composite using Real Project Media */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-white/80 via-white/40 to-white/10 dark:from-white/[0.08] dark:via-white/[0.03] dark:to-transparent border border-slate-200/90 dark:border-white/[0.1] shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
            >
              {/* Primary Visual Card: Municipal System Screenshot */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-lg">
                <Image
                  src="/images/projects/thesmartgram_landing.png"
                  alt="Animesh Samanta - Enterprise Web Application Engineering"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-semibold text-[11px]">Production Systems Active</span>
                  </div>
                  <span className="bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-mono text-cyan-300 border border-white/10">
                    Laravel 12 + MySQL
                  </span>
                </div>
              </div>

              {/* Secondary Overlapping Glass Floating Card */}
              <div className="mt-3 p-3.5 rounded-2xl bg-white/95 dark:bg-[#0c0f17]/95 border border-slate-200/90 dark:border-white/[0.08] flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                    <FiShield className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-slate-900 dark:text-white">
                      Custom Architecture &amp; Clean Delivery
                    </h2>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Tailored specifically to your business workflows
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-right">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 block">
                    Pricing Model
                  </span>
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                    Custom Quote
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

