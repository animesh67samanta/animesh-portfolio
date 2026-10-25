"use client";

import React from "react";
import dynamic from "next/dynamic";
import { HeroContent } from "./HeroContent";
import { FadeIn } from "@/components/animations/FadeIn";

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
      className="relative pt-4 pb-16 lg:py-10 overflow-hidden scroll-mt-24"
    >
      {/* Background Radial Glow Behind Globe */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Personal Introduction & CTAs (approx 45-50%) */}
        <div className="lg:col-span-6 xl:col-span-6">
          <HeroContent />
        </div>

        {/* Right Column: Interactive 3D Digital Globe (occupying 50-55% of desktop area) */}
        <div className="lg:col-span-6 xl:col-span-6 h-[460px] sm:h-[520px] lg:h-[580px] relative">
          <FadeIn direction="left" delay={0.25} className="w-full h-full">
            <div className="w-full h-full rounded-3xl bg-slate-100/70 dark:bg-[#07090e]/80 border border-slate-200 dark:border-slate-800/80 shadow-2xl shadow-slate-200/50 dark:shadow-cyan-950/20 overflow-hidden relative transition-colors duration-250 backdrop-blur-sm">
              <GlobeScene />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
