"use client";

import React from "react";
import { FiBriefcase, FiMapPin, FiCalendar, FiCheck } from "react-icons/fi";
import { portfolioData } from "@/data/portfolioData";
import { FadeIn } from "@/components/animations/FadeIn";

export function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24 transition-colors duration-250">
      {/* Header */}
      <FadeIn direction="up">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400" />
          <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
            Career Journey
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Professional Work Experience
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl">
          Track record in architecting Laravel applications, automating enterprise tax systems, and developing high-throughput REST APIs.
        </p>
      </FadeIn>

      {/* Timeline */}
      <div className="mt-10 relative">
        {/* Vertical Timeline Guide Line */}
        <div className="hidden sm:block absolute left-8 top-3 bottom-3 w-[2px] bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-200 dark:to-slate-800" />

        <div className="space-y-8 sm:space-y-10">
          {portfolioData.experiences.map((exp, idx) => (
            <FadeIn key={exp.company} direction="up" delay={0.15 * idx}>
              <div className="relative flex flex-col sm:flex-row items-start gap-5 sm:gap-8 group">
                {/* Timeline Node Indicator */}
                <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-[#121622] border-2 border-slate-200 dark:border-slate-700 group-hover:border-cyan-500 dark:group-hover:border-cyan-400 text-cyan-600 dark:text-cyan-400 shadow-md shadow-slate-200/50 dark:shadow-xl shrink-0 transition-colors duration-300 z-10">
                  <FiBriefcase className="w-6 h-6" />
                </div>

                {/* Experience Card */}
                <div className="w-full bg-white dark:bg-[#111520] hover:bg-slate-50 dark:hover:bg-[#141926] border border-slate-200 dark:border-slate-800/90 hover:border-cyan-400 dark:hover:border-cyan-500/30 rounded-3xl p-6 sm:p-7 shadow-md shadow-slate-200/50 dark:shadow-xl dark:shadow-black/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-[11px] font-semibold">
                          {exp.workType}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <FiMapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                        {exp.company}
                      </h4>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <FiCalendar className="text-cyan-600 dark:text-cyan-400 w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {/* Bullet Achievements */}
                  <div className="space-y-2.5 mb-5">
                    {exp.achievements.map((item, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                          <FiCheck className="w-2.5 h-2.5" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Chips */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
