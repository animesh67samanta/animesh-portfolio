"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { HeroContent } from "./HeroContent";

// Dynamically import GlobeScene with SSR disabled
const GlobeScene = dynamic(
  () => import("./GlobeScene").then((mod) => mod.GlobeScene),
  {
    ssr: false,
    loading: () => null,
  }
);

export function HeroSection() {
  const [shouldLoad3D, setShouldLoad3D] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Only load interactive 3D WebGL on desktop screens when the browser is idle
    const isDesktop = window.innerWidth >= 1024;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isDesktop && !prefersReducedMotion) {
      if ("requestIdleCallback" in window) {
        const handle = window.requestIdleCallback(() => setShouldLoad3D(true), {
          timeout: 2500,
        });
        return () => window.cancelIdleCallback(handle);
      } else {
        const timer = setTimeout(() => setShouldLoad3D(true), 1500);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <section
      id="home"
      className="relative rounded-3xl overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center p-6 sm:p-8 lg:p-12 border border-slate-200 dark:border-slate-800/80 bg-slate-100/40 dark:bg-[#07090e]/60 backdrop-blur-sm shadow-xl dark:shadow-2xl scroll-mt-24 transition-colors duration-250"
    >
      {/* Background Atmospheric Radial Lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/15 dark:bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* 3D Digital Globe / Visual Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
        <div className="absolute right-0 top-0 w-full lg:w-[68%] xl:w-full h-full opacity-50 sm:opacity-75 lg:opacity-100 transition-opacity duration-300">
          <div className="relative w-full h-full">
            {/* Immediate high-resolution static 3D visual: zero main thread blocking, instant paint */}
            <Image
              src="/images/hero-3d-bg.png"
              alt="Interactive 3D Digital Globe — Global Architecture & Deployments by Animesh Samanta"
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover object-right opacity-85"
              priority
            />

            {/* Seamless upgrade to interactive WebGL Canvas on desktop idle */}
            {shouldLoad3D && (
              <div className="absolute inset-0 z-10 transition-opacity duration-700 animate-fade-in">
                <GlobeScene />
              </div>
            )}
          </div>
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
