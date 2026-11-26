"use client";

import React from "react";
import {
  FiMessageSquare,
  FiCompass,
  FiCode,
  FiCheckCircle,
  FiShield,
  FiCheck,
} from "react-icons/fi";
import { workflowSteps, WorkflowStep } from "@/data/service-media";

const iconMap: Record<string, React.ElementType> = {
  FiMessageSquare,
  FiCompass,
  FiCode,
  FiCheckCircle,
  FiShield,
};

export function HowIWorkSection() {
  return (
    <section id="how-i-work" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-white/[0.06] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-gradient-to-r from-cyan-500 to-indigo-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Clear &amp; Predictable Process
            </span>
            <span className="w-6 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How I Work
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            A disciplined, milestone-driven development process ensuring full transparency, code quality, and on-time project delivery.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          {workflowSteps.map((step: WorkflowStep) => {
            const Icon = iconMap[step.icon] || FiCode;

            return (
              <div
                key={step.step}
                className="group relative rounded-3xl p-6 bg-white/95 dark:bg-[#0c0f17]/95 border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 dark:hover:border-cyan-500/40 shadow-lg shadow-slate-200/40 dark:shadow-black/50 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step Index Badge & Accent Line */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-cyan-500/40 group-hover:text-cyan-500 transition-colors">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.05] px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/[0.06]">
                      {step.timeline}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-white/[0.06] space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                    Deliverables:
                  </span>
                  {step.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-300 leading-snug"
                    >
                      <FiCheck className="w-3 h-3 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
