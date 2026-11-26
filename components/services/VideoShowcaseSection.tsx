"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPlay, FiX, FiInfo, FiCode, FiArrowUpRight, FiVideo } from "react-icons/fi";
import { videoShowcaseItems, VideoShowcaseItem } from "@/data/service-media";

export function VideoShowcaseSection() {
  const [activeVideo, setActiveVideo] = useState<VideoShowcaseItem | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideo(null);
      }
    };
    if (activeVideo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  // Helper to resolve embed URL
  const getEmbedUrl = (item: VideoShowcaseItem) => {
    if (!item.videoUrl) return null;

    if (item.videoType === "youtube") {
      // Support youtube.com/watch?v=ID or youtu.be/ID
      let videoId = item.videoUrl;
      if (item.videoUrl.includes("v=")) {
        videoId = item.videoUrl.split("v=")[1]?.split("&")[0] || "";
      } else if (item.videoUrl.includes("youtu.be/")) {
        videoId = item.videoUrl.split("youtu.be/")[1]?.split("?")[0] || "";
      }
      return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=0&rel=0`;
    }

    if (item.videoType === "vimeo") {
      const vimeoId = item.videoUrl.split("/").pop() || "";
      return `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
    }

    return item.videoUrl;
  };

  return (
    <section id="video-showcase" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-white/[0.06] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                Interactive Demos &amp; Walkthroughs
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Video &amp; Interface Demonstrations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Watch step-by-step walkthroughs of terminal dashboards, administrative tax workflows, and healthcare management systems.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <FiVideo className="w-4 h-4 text-violet-500" />
            <span>Code-Managed Media Showcase</span>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoShowcaseItems.map((item: VideoShowcaseItem) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-white/95 dark:bg-[#0c0f17]/95 border border-slate-200/90 dark:border-white/[0.08] hover:border-violet-500/40 dark:hover:border-violet-500/40 p-5 flex flex-col justify-between transition-all duration-300 shadow-lg shadow-slate-200/40 dark:shadow-black/50 overflow-hidden"
            >
              <div className="space-y-4">
                {/* Thumbnail with Accessible Play Button */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-950">
                  <Image
                    src={item.thumbnail}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />

                  {/* Play Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setActiveVideo(item)}
                    aria-label={`Play video demonstration for ${item.title}`}
                    className="absolute inset-0 m-auto w-14 h-14 rounded-2xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-xl shadow-cyan-500/30 group-hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <FiPlay className="w-6 h-6 ml-0.5 fill-current" />
                  </button>

                  {/* Top Duration / Ready Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-semibold text-violet-300">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06] text-[10px] font-medium text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveVideo(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 focus-visible:ring-2 focus-visible:ring-violet-400 rounded-lg p-1"
                >
                  <FiPlay className="w-3.5 h-3.5" />
                  <span>Launch Walkthrough</span>
                </button>

                {item.projectUrl && (
                  <Link
                    href={item.projectUrl}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    <span>Details</span>
                    <FiArrowUpRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* On-Demand Accessible Video Modal */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-[#0c0f17] border border-slate-200 dark:border-white/10 shadow-2xl p-6 sm:p-8 space-y-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
              <div>
                <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block">
                  Media Showcase
                </span>
                <h3 id="video-modal-title" className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {activeVideo.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video player modal"
                className="p-2 rounded-xl bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.1] text-slate-700 dark:text-slate-300 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Video Container: Either Embed or Informative Configuration Placeholder */}
            {activeVideo.videoUrl && !activeVideo.isPlaceholder ? (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-lg">
                {activeVideo.videoType === "local" ? (
                  <video
                    src={activeVideo.videoUrl}
                    controls
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <iframe
                    src={getEmbedUrl(activeVideo) || ""}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                )}
              </div>
            ) : (
              /* Graceful Configuration Fallback */
              <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 space-y-4 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                    <FiInfo className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      Code-Managed Video Ready for Integration
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      This video demonstration slot is ready in{" "}
                      <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-cyan-700 dark:text-cyan-300 font-mono text-xs">
                        data/service-media.ts
                      </code>
                      . You can configure your YouTube URL, Vimeo link, or local MP4 file under{" "}
                      <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-cyan-700 dark:text-cyan-300 font-mono text-xs">
                        public/videos/
                      </code>
                      .
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  {activeVideo.projectUrl && (
                    <Link
                      href={activeVideo.projectUrl}
                      onClick={() => setActiveVideo(null)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all"
                    >
                      <span>Explore Technical Architecture</span>
                      <FiArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}

                  <a
                    href="https://github.com/animesh67samanta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-200 dark:bg-white/[0.05] hover:bg-slate-300 dark:hover:bg-white/[0.1] text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-300 dark:border-white/10 transition-colors"
                  >
                    <FiCode className="w-3.5 h-3.5" />
                    <span>View GitHub Source Code</span>
                  </a>
                </div>
              </div>
            )}

            {/* Modal Bottom Note */}
            <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>Press Esc or click outside to close</span>
              <span>{activeVideo.technologies.join(" • ")}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

