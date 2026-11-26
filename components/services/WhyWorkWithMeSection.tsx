"use client";

import React from "react";
import {
  FiCode,
  FiDatabase,
  FiCpu,
  FiLayout,
  FiZap,
  FiUsers,
} from "react-icons/fi";
import { whyWorkWithMeBenefits, WhyWorkWithMeBenefit } from "@/data/service-media";

const iconMap: Record<string, React.ElementType> = {
  FiCode,
  FiDatabase,
  FiCpu,
  FiLayout,
  FiZap,
  FiUsers,
};

export function WhyWorkWithMeSection() {
  return (
    <section id="why-work-with-me" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-white/[0.06] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-indigo-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Pragmatic Engineering Standards
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Work With Me
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Practical, developer-first principles that prioritize code maintainability, data integrity, and direct collaboration over marketing fluff.
          </p>
        </div>

        {/* 6 Practical Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyWorkWithMeBenefits.map((benefit: WhyWorkWithMeBenefit) => {
            const Icon = iconMap[benefit.icon] || FiCode;

            return (
              <div
                key={benefit.id}
                className="group rounded-3xl p-6 sm:p-7 bg-white/95 dark:bg-[#0c0f17]/95 border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 dark:hover:border-cyan-500/40 shadow-lg shadow-slate-200/40 dark:shadow-black/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                      {benefit.shortTag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

