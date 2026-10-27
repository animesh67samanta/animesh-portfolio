"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiInfo,
  FiX,
  FiCheckCircle,
  FiDatabase,
  FiShield
} from "react-icons/fi";
import { portfolioData, Project } from "@/data/portfolioData";
import { FadeIn } from "@/components/animations/FadeIn";
import { trackProjectClick, trackGitHubClick, trackExternalLinkClick } from "@/lib/analytics";

type CategoryFilter = "All" | "Developer Tools & CLI" | "Enterprise & Gov" | "Healthcare" | "E-Commerce" | "Media & Tools";

const filterCategories: CategoryFilter[] = [
  "All",
  "Developer Tools & CLI",
  "Enterprise & Gov",
  "Healthcare",
  "E-Commerce",
  "Media & Tools"
];

interface ProjectCardImageProps {
  project: Project;
  onOpenModal: () => void;
}

function ProjectCardImage({ project, onOpenModal }: ProjectCardImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-slate-200 dark:border-slate-800/80">
      {imageError || !project.image ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40 p-6 text-center select-none">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
            <FiLayers className="w-6 h-6" />
          </div>
          <p className="text-xs font-semibold text-slate-200 line-clamp-1">{project.title}</p>
          <span className="text-[11px] text-cyan-400/80 mt-0.5">{project.category}</span>
        </div>
      ) : (
        <Image
          src={project.image}
          alt={`${project.title} — ${project.subtitle} | Animesh Samanta Portfolio`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className={`object-cover ${project.imagePosition || "object-center"} group-hover:scale-[1.03] transition-transform duration-500 ${isLoaded ? "opacity-100" : "opacity-90"}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setImageError(true)}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#111520] via-transparent to-transparent opacity-60 pointer-events-none" />

      {/* Category Pill */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-slate-700/60 text-[11px] font-semibold text-cyan-700 dark:text-cyan-400 shadow-md">
          {project.category}
        </span>
      </div>

      {/* Architecture Inspect Button */}
      <button
        onClick={() => {
          trackProjectClick(project.title, "blueprint_card_button");
          onOpenModal();
        }}
        className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 hover:bg-cyan-500 hover:text-slate-950 dark:hover:bg-cyan-500 dark:hover:text-slate-950 border border-slate-200 dark:border-slate-700/60 text-slate-800 dark:text-slate-200 text-xs font-medium backdrop-blur-md transition-all flex items-center gap-1.5 shadow-lg z-10"
        aria-label={`View architecture details for ${project.title}`}
      >
        <FiInfo className="w-3.5 h-3.5" />
        <span>Architecture</span>
      </button>
    </div>
  );
}

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = portfolioData.projects.filter((p) =>
    selectedCategory === "All" ? true : p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-16 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24 transition-colors duration-250">
      {/* Header */}
      <FadeIn direction="up">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400" />
          <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
            Portfolio
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Production Enterprise Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1.5 max-w-2xl">
              Architected for high throughput, data integrity, and strict access control using Laravel, MySQL, and modern tooling.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Category Filter Tabs */}
      <FadeIn direction="up" delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-2">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/25"
                  : "bg-white dark:bg-[#121622]/80 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Projects Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project, idx) => (
          <FadeIn key={project.id} direction="up" delay={0.1 * (idx % 4)}>
            <div className="bg-white dark:bg-[#111520] hover:bg-slate-50 dark:hover:bg-[#141926] border border-slate-200 dark:border-slate-800/90 hover:border-cyan-400 dark:hover:border-cyan-500/40 rounded-3xl overflow-hidden shadow-md shadow-slate-200/50 dark:shadow-xl dark:shadow-black/40 transition-all duration-300 flex flex-col justify-between group h-full">
              {/* Project Image Banner with Fallback */}
              <ProjectCardImage
                project={project}
                onOpenModal={() => setActiveModalProject(project)}
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium mt-0.5">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="mt-4 space-y-1.5">
                    {project.highlights.slice(0, 3).map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <FiCheckCircle className="text-cyan-600 dark:text-cyan-400 w-3.5 h-3.5 mt-0.5 shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Chips & Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/50 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => {
                        trackProjectClick(project.title, "blueprint_link");
                        setActiveModalProject(project);
                      }}
                      className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 flex items-center gap-1 group/btn"
                    >
                      <span>Explore System Blueprint</span>
                      <FiLayers className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            trackGitHubClick("project_card", project.githubUrl);
                            trackProjectClick(project.title, project.githubUrl);
                          }}
                          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <FiGithub className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            trackExternalLinkClick(project.liveUrl, "project_live_demo", project.title);
                            trackProjectClick(project.title, project.liveUrl);
                          }}
                          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                          aria-label="Live Demo"
                        >
                          <FiExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* System Architecture Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-white dark:bg-[#0f131d] border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
              aria-label="Close architecture modal"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-10 mb-6">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                {activeModalProject.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-2">
                {activeModalProject.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {activeModalProject.subtitle}
              </p>
            </div>

            {/* Architecture Content */}
            <div className="space-y-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {activeModalProject.architectureDetails ? (
                <>
                  <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                      <FiLayers className="w-4 h-4" />
                      <span>Architecture Overview</span>
                    </h4>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                      {activeModalProject.architectureDetails.overview}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Key Modules & Services
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeModalProject.architectureDetails.keyModules.map((km, i) => (
                        <div
                          key={i}
                          className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 rounded-xl p-3 flex items-center gap-2.5"
                        >
                          <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                          <span className="text-slate-800 dark:text-slate-200 font-medium">{km}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      <FiDatabase className="w-4 h-4" />
                      <span>Database & Schema Insights</span>
                    </h4>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                      {activeModalProject.architectureDetails.databaseInsights}
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      <FiShield className="w-4 h-4" />
                      <span>Security & Access Governance</span>
                    </h4>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                      {activeModalProject.architectureDetails.securityNotes}
                    </p>
                  </div>
                </>
              ) : (
                <p className="text-slate-500 dark:text-slate-400">Detailed architecture documentation available on request.</p>
              )}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
              >
                Close Blueprint
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
