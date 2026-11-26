"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiExternalLink, FiFolder } from "react-icons/fi";
import { selectedProjectsShowcase, ProjectShowcaseItem } from "@/data/service-media";

export function SelectedWorkSection() {
  return (
    <section id="selected-work" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-white/[0.06] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Real-World Deliverables
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Selected Work &amp; Projects in Action
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Explore production applications and developer tooling built with clean architecture, robust database models, and scalable backend pipelines.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/[0.08] transition-colors shrink-0 self-start sm:self-auto"
          >
            <FiFolder className="w-3.5 h-3.5 text-cyan-500" />
            <span>View Full Archive</span>
          </Link>
        </div>

        {/* Selected Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedProjectsShowcase.map((project: ProjectShowcaseItem) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white/95 dark:bg-[#0c0f17]/95 border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 dark:hover:border-cyan-500/40 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-lg shadow-slate-200/40 dark:shadow-black/50 overflow-hidden"
            >
              <div className="space-y-4">
                {/* Image Container with Consistent Aspect Ratio */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-950">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top Client / Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-semibold text-cyan-300">
                      {project.clientType}
                    </span>
                  </div>

                  {project.metrics && (
                    <div className="absolute bottom-2.5 left-3 right-3 text-[11px] text-slate-200 font-medium">
                      <span className="line-clamp-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 text-[10px]">
                        {project.metrics}
                      </span>
                    </div>
                  )}
                </div>

                {/* Title & Category */}
                <div>
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Narrative Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] text-[10px] font-medium text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between gap-3 text-xs">
                {project.projectUrl ? (
                  <Link
                    href={project.projectUrl}
                    className="inline-flex items-center gap-1.5 font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    <span>Read Architecture Case Study</span>
                    <FiArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <span className="text-slate-400 text-[11px]">Production Deployment</span>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300 transition-colors"
                    aria-label={`Open external link for ${project.title}`}
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

