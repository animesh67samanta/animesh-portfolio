"use client";

import React from "react";
import dynamic from "next/dynamic";
import { HeroContent } from "./HeroContent";

// Dynamically import GlobeScene with SSR disabled to guarantee zero SSR window errors during static export
const GlobeScene = dynamic(
  () => import("./GlobeScene").then((mod) => mod.GlobeScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center bg-transparent">
        <div className="w-16 h-16 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />
        <span className="text-[11px] text-cyan-400 font-mono tracking-widest mt-4 uppercase">
          Loading 3D Globe...
        </span>
      </div>
    ),
  }
);

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative rounded-3xl overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center p-6 sm:p-8 lg:p-12 border border-slate-200 dark:border-slate-800/80 bg-slate-100/40 dark:bg-[#07090e]/60 backdrop-blur-sm shadow-xl dark:shadow-2xl scroll-mt-24 transition-colors duration-250"
    >
      {/* Background Atmospheric Radial Lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/15 dark:bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* 3D Digital Globe Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
        <div className="absolute right-0 top-0 w-full lg:w-[68%] xl:w-[62%] h-full opacity-50 sm:opacity-75 lg:opacity-100 transition-opacity duration-300">
          <GlobeScene />
        </div>
        {/* Soft gradient fade on the left to guarantee optimal text contrast */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 lg:w-1/2 bg-gradient-to-r from-slate-100/90 via-slate-100/60 to-transparent dark:from-[#07090e]/95 dark:via-[#07090e]/75 dark:to-transparent pointer-events-none z-[1]" />
      </div>

      {/* Foreground Hero Content Layer */}
      <div className="relative z-10 w-full max-w-2xl lg:max-w-xl pointer-events-none">
        <div className="pointer-events-auto">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
