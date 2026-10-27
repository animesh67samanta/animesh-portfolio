"use client";

import React from "react";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaFacebook } from "react-icons/fa6";
import { portfolioData } from "@/data/portfolioData";
import { TextReveal } from "@/components/animations/TextReveal";
import { FadeIn } from "@/components/animations/FadeIn";

export function HeroContent() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const rotatingTitles = [
    "Laravel Developer",
    "Backend Engineer",
    "API Developer",
    "Full-Stack Developer",
  ];

  return (
    <div className="space-y-6">
      {/* 1. Small Eyebrow Badge */}
      <FadeIn direction="up" delay={0.1}>
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
          <span className="font-mono text-[11px] font-bold text-cyan-600 dark:text-cyan-400 tracking-wider">
            HELLO, WORLD — I’M
          </span>
        </div>
      </FadeIn>

      {/* 2. Main Heading & Rotating Professional Titles */}
      <FadeIn direction="up" delay={0.2}>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
          Animesh Samanta
          <span className="block text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-200 mt-2">
            Laravel &amp; PHP Developer
          </span>
          <span className="block text-lg sm:text-2xl font-normal text-slate-500 dark:text-slate-400 mt-1">
            Specialized as{" "}
            <TextReveal phrases={rotatingTitles} intervalMs={2800} />
          </span>
        </h1>
      </FadeIn>

      {/* 3. Supporting Text */}
      <FadeIn direction="up" delay={0.3}>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
          Building reliable backend systems, scalable APIs, and meaningful digital experiences with high-performance databases and clean architecture.
        </p>
      </FadeIn>

      {/* 4. Quick Architecture Metrics */}
      <FadeIn direction="up" delay={0.35}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {portfolioData.metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-slate-800/90 rounded-xl p-3 text-center sm:text-left shadow-sm dark:shadow-none transition-colors duration-200"
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

      {/* 5. Action Buttons & Social Channels */}
      <FadeIn direction="up" delay={0.4}>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Explore My Work CTA */}
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToProjects();
            }}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 group"
          >
            <span>Explore My Work</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Download Resume Button */}
          <a
            href={portfolioData.personal.resumePdf}
            download="Animesh-Samanta-Resume.pdf"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-200 shadow-sm"
          >
            <FiDownload className="text-cyan-600 dark:text-cyan-400" />
            <span>Download Resume</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2 pl-1 sm:pl-2">
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
            <a
              href={portfolioData.personal.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shadow-sm"
              aria-label="Facebook Profile"
            >
              <FaFacebook className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.socialLinks.email}
              className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shadow-sm"
              aria-label="Email Animesh"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
