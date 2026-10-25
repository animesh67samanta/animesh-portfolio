"use client";

import React from "react";
import {
  FiCheckCircle,
  FiZap,
  FiShield,
  FiCpu,
  FiServer,
  FiTrendingUp,
  FiCode,
  FiTerminal,
  FiGithub,
  FiExternalLink
} from "react-icons/fi";
import { portfolioData } from "@/data/portfolioData";
import { FadeIn } from "@/components/animations/FadeIn";

export function About() {
  const principles = [
    {
      title: "Clean Architecture & Modularity",
      desc: "Structuring Laravel with Repository Pattern, Service Layer, and domain separation to ensure maintainability as systems grow.",
      icon: FiCpu
    },
    {
      title: "Resilient Database & Caching",
      desc: "Profiling SQL executions with EXPLAIN, structuring composite indexes, and leveraging Redis caching for 40%+ latency gains.",
      icon: FiServer
    },
    {
      title: "Granular Security & RBAC",
      desc: "Implementing Spatie permissions, multi-guard middleware, Sanctum tokens, and digital signatures for tamper-proof records.",
      icon: FiShield
    },
    {
      title: "Decoupled Automation & Queues",
      desc: "Offloading intensive PDF reports, CSV imports, and notification flows into asynchronous Laravel Queues and CRON schedulers.",
      icon: FiZap
    }
  ];

  return (
    <section id="about" className="py-16 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24 transition-colors duration-250">
      {/* Section Header */}
      <FadeIn direction="up">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400" />
          <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
            About Me
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Architecting Scalable, Resilient Backend Systems
        </h2>
      </FadeIn>

      {/* Two Column Layout */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Biography & Highlights */}
        <div className="lg:col-span-7 space-y-6">
          <FadeIn direction="up" delay={0.1}>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {portfolioData.personal.fullBio}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white dark:bg-[#121622]/90 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-md shadow-slate-200/50 dark:shadow-xl space-y-4 transition-colors duration-250">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <FiTrendingUp className="text-cyan-600 dark:text-cyan-400" />
                <span>Verified Impact Highlights</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-cyan-600 dark:text-cyan-400 w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">65%+ Turnaround Reduction:</strong> Automated municipal property tax assessments, cutting citizen certificate generation from 3-4 days to under 10 minutes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-cyan-600 dark:text-cyan-400 w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">40% Query Latency Cut:</strong> Restructured complex relational JOIN operations and added targeted indexing for an affiliate multi-level earning platform.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-cyan-600 dark:text-cyan-400 w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">50% Faster Form Interactivity:</strong> Modernized legacy synchronous forms into responsive AJAX workflows, halving perceived load times.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-cyan-600 dark:text-cyan-400 w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-slate-900 dark:text-white">AI Microservice Integration:</strong> Connected Laravel backends to FastAPI endpoints for intelligent content generation and automated suggestions.
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Engineering Principles & Philosophy */}
        <div className="lg:col-span-5 space-y-4">
          <FadeIn direction="up" delay={0.25}>
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <FiCode className="text-cyan-600 dark:text-cyan-400" />
              <span>Engineering Standards</span>
            </h3>
          </FadeIn>

          <div className="space-y-3">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <FadeIn key={idx} direction="up" delay={0.15 * (idx + 1)}>
                  <div className="bg-white dark:bg-[#121622]/60 hover:bg-slate-50 dark:hover:bg-[#151a28] border border-slate-200 dark:border-slate-800/80 hover:border-cyan-400 dark:hover:border-cyan-500/30 rounded-xl p-4 transition-all duration-200 shadow-sm dark:shadow-none">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{p.title}</h4>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 pl-11 leading-relaxed">{p.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>

      {/* DevGit Open Source Contribution Spotlight */}
      <FadeIn direction="up" delay={0.3} className="mt-10">
        <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-[#0d121d] dark:via-[#101625] dark:to-[#0a0e17] border border-slate-200 dark:border-slate-800/90 shadow-xl overflow-hidden transition-colors">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-600 dark:text-sky-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <FiTerminal className="w-3.5 h-3.5" />
                  <span>Open Source Contribution</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[11px] font-mono">
                  v1.0.0
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-medium">
                  MIT License
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <span>DevGit</span>
                  <span className="text-sm font-normal text-slate-500 dark:text-slate-400">— Safer Git Assistant & Terminal UI</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  A safer, developer-friendly Git assistant built with Go, Cobra, and Bubble Tea. Pairs an ergonomic CLI with an interactive keyboard-driven terminal dashboard, embedded SQLite metadata auditing, and conservative safeguards against accidental data loss (dirty working-tree protection, safe pushes, and guarded branch/stash deletion).
                </p>
              </div>

              {/* Key Architectural Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="font-semibold text-slate-900 dark:text-white block">Interactive TUI</span>
                  <span className="text-slate-500 dark:text-slate-400 text-[11px]">Bubble Tea & Lip Gloss dashboard with 6 direct view tabs</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="font-semibold text-slate-900 dark:text-white block">Safe Execution</span>
                  <span className="text-slate-500 dark:text-slate-400 text-[11px]">Structured argument arrays without shell injection risks</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="font-semibold text-slate-900 dark:text-white block">Cross-Platform</span>
                  <span className="text-slate-500 dark:text-slate-400 text-[11px]">macOS (M1-M4/Intel), Linux & Windows Go binaries</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href="https://github.com/animesh67samanta/devgit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold text-xs sm:text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <FiGithub className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
              <a
                href="https://github.com/animesh67samanta/devgit/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
              >
                <FiExternalLink className="w-4 h-4" />
                <span>Releases & Binaries</span>
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
