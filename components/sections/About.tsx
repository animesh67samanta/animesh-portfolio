"use client";

import React from "react";
import {
  FiCheckCircle,
  FiZap,
  FiShield,
  FiCpu,
  FiServer,
  FiTrendingUp,
  FiCode
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
    <section id="about" className="py-16 border-t border-slate-800/80 scroll-mt-24">
      {/* Section Header */}
      <FadeIn direction="up">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-[2px] bg-cyan-400" />
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
            About Me
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Architecting Scalable, Resilient Backend Systems
        </h2>
      </FadeIn>

      {/* Two Column Layout */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Biography & Highlights */}
        <div className="lg:col-span-7 space-y-6">
          <FadeIn direction="up" delay={0.1}>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {portfolioData.personal.fullBio}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="bg-[#121622]/90 border border-slate-800/80 rounded-2xl p-6 shadow-xl space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                <FiTrendingUp className="text-cyan-400" />
                <span>Verified Impact Highlights</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-cyan-400 w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">65%+ Turnaround Reduction:</strong> Automated municipal property tax assessments, cutting citizen certificate generation from 3-4 days to under 10 minutes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-cyan-400 w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">40% Query Latency Cut:</strong> Restructured complex relational JOIN operations and added targeted indexing for an affiliate multi-level earning platform.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-cyan-400 w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">50% Faster Form Interactivity:</strong> Modernized legacy synchronous forms into responsive AJAX workflows, halving perceived load times.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-cyan-400 w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    <strong className="text-white">AI Microservice Integration:</strong> Connected Laravel backends to FastAPI endpoints for intelligent content generation and automated suggestions.
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Engineering Principles & Philosophy */}
        <div className="lg:col-span-5 space-y-4">
          <FadeIn direction="up" delay={0.25}>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <FiCode className="text-cyan-400" />
              <span>Engineering Standards</span>
            </h3>
          </FadeIn>

          <div className="space-y-3">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <FadeIn key={idx} direction="up" delay={0.15 * (idx + 1)}>
                  <div className="bg-[#121622]/60 hover:bg-[#151a28] border border-slate-800/80 hover:border-cyan-500/30 rounded-xl p-4 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-white">{p.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 pl-11 leading-relaxed">{p.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
