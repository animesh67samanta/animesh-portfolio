"use client";

import React from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { portfolioData } from "@/data/portfolioData";
import { HeroScene } from "@/components/three/HeroScene";
import { TextReveal } from "@/components/animations/TextReveal";
import { FadeIn } from "@/components/animations/FadeIn";

export function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative pt-6 pb-16 lg:py-12 overflow-hidden scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Hero Text & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
              <span className="text-slate-500 dark:text-slate-400">{portfolioData.personal.greeting}</span>
              <span className="font-semibold text-slate-900 dark:text-white">Animesh Samanta</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Laravel Backend Developer{" "}
              <span className="block text-slate-500 dark:text-slate-400 text-2xl sm:text-3xl font-normal mt-2">
                Specialized in{" "}
                <TextReveal
                  phrases={portfolioData.personal.secondaryRoles}
                  intervalMs={2800}
                />
              </span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              {portfolioData.personal.shortBio}
            </p>
          </FadeIn>

          {/* Quick Metrics Bar */}
          <FadeIn direction="up" delay={0.35}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {portfolioData.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-[#121622]/80 border border-slate-200 dark:border-slate-800/80 rounded-xl p-3 text-center sm:text-left shadow-sm dark:shadow-none transition-colors duration-200"
                >
                  <span className="block text-xl sm:text-2xl font-black text-cyan-600 dark:text-cyan-400">
                    {metric.value}
                  </span>
                  <span className="block text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Call to Actions */}
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 group"
              >
                <span>View My Work</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={portfolioData.personal.resumePdf}
                download="Animesh-Samanta-Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-200 shadow-sm"
              >
                <FiDownload className="text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={portfolioData.personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <SiGithub className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Three.js Interactive 3D Visual */}
        <div className="lg:col-span-5 h-[380px] sm:h-[450px] relative">
          <FadeIn direction="left" delay={0.25} className="w-full h-full">
            <div className="w-full h-full rounded-3xl bg-slate-100/80 dark:bg-[#0c101a] border border-slate-200 dark:border-slate-800/80 shadow-xl dark:shadow-2xl shadow-slate-200/50 dark:shadow-cyan-950/20 overflow-hidden relative transition-colors duration-250">
              <HeroScene fallbackImage={portfolioData.personal.heroBg} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
