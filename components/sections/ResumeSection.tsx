"use client";

import React from "react";
import {
  FiDownload,
  FiAward,
  FiBookOpen,
  FiGlobe
} from "react-icons/fi";
import { portfolioData } from "@/data/portfolioData";
import { FadeIn } from "@/components/animations/FadeIn";
import { trackResumeDownload } from "@/lib/analytics";

export function ResumeSection() {
  return (
    <section id="resume" className="py-16 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24 transition-colors duration-250">
      {/* Header */}
      <FadeIn direction="up">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400" />
          <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
            Credentials
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Education & Certifications
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1.5 max-w-xl">
              Academic qualifications, continuous AI/agent training, and verified technical credentials.
            </p>
          </div>

          <a
            href={portfolioData.personal.resumePdf}
            download="Animesh-Samanta-Resume.pdf"
            onClick={() => trackResumeDownload("credentials_section")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/20 transition-all duration-200 shrink-0"
          >
            <FiDownload className="w-4 h-4" />
            <span>Download Full Resume (PDF)</span>
          </a>
        </div>
      </FadeIn>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Education */}
        <div className="lg:col-span-6 space-y-5">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <FiBookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Education History</h3>
            </div>
          </FadeIn>

          {portfolioData.education.map((edu, idx) => (
            <FadeIn key={idx} direction="up" delay={0.15 * (idx + 1)}>
              <div className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-slate-800/90 rounded-2xl p-5 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-none transition-colors">
                <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  {edu.period}
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                  {edu.degree}
                </h4>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                  {edu.institution}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {edu.location}
                </p>
                {edu.details && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Right Column: Certifications & Languages */}
        <div className="lg:col-span-6 space-y-6">
          {/* Certifications */}
          <div>
            <FadeIn direction="up" delay={0.1}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <FiAward className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Training & Certifications</h3>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {portfolioData.certifications.map((cert, idx) => (
                <FadeIn key={idx} direction="up" delay={0.15 * (idx + 1)}>
                  <div className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-slate-800/90 rounded-2xl p-5 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-none transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium mt-0.5">
                          {cert.provider}
                        </p>
                      </div>
                      {cert.certId && (
                        <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-mono text-slate-700 dark:text-slate-300">
                          ID: {cert.certId}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <FadeIn direction="up" delay={0.25}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <FiGlobe className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Languages</h3>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {portfolioData.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-slate-800/90 rounded-2xl p-4 text-center shadow-sm dark:shadow-none"
                  >
                    <span className="block text-sm font-bold text-slate-900 dark:text-white">
                      {lang.name}
                    </span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {lang.proficiency}
                    </span>
                    <div className="flex items-center justify-center gap-1 mt-3">
                      {[...Array(5)].map((_, dotIdx) => (
                        <span
                          key={dotIdx}
                          className={`w-2 h-2 rounded-full ${
                            dotIdx < lang.level
                              ? "bg-cyan-500 dark:bg-cyan-400"
                              : "bg-slate-200 dark:bg-slate-700"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
