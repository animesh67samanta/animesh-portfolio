"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  SiLaravel,
  SiPhp,
  SiMysql,
  SiRedis,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiBootstrap,
  SiGithub,
  SiDocker,
  SiPostman,
  SiWordpress,
  SiPostgresql,
  SiHtml5,
  SiCss,
  SiExpo,
  SiGit,
  SiComposer
} from "react-icons/si";
import { FaPhp } from "react-icons/fa6";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { LuWorkflow, LuSparkles } from "react-icons/lu";
import {
  FiDatabase,
  FiCpu,
  FiChevronLeft,
  FiChevronRight,
  FiPlay,
  FiPause,
  FiGrid,
  FiLayers,
  FiCheckCircle
} from "react-icons/fi";
import { skillsData, skillCategories, SkillCategory } from "@/data/skillsData";
import { FadeIn } from "@/components/animations/FadeIn";

const iconMap: Record<string, React.ElementType> = {
  SiLaravel,
  SiPhp,
  FaPhp,
  TbApi,
  LuWorkflow,
  SiMysql,
  SiPostgresql,
  FiDatabase,
  SiRedis,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  TbBrandReactNative,
  SiExpo,
  SiWordpress,
  SiGit,
  SiGithub,
  SiComposer,
  SiDocker,
  SiPostman,
  FiCpu
};

type ViewMode = "spatial" | "grid";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "All">("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("spatial");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(1200);

  const galleryRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Responsive window width tracking (SSR safe)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  // Filter skills by active category
  const filteredSkills = skillsData.filter((skill) =>
    activeCategory === "All" ? true : skill.category === activeCategory
  );

  const totalSkills = filteredSkills.length;

  // Reset active index when category changes
  const handleCategoryChange = (cat: SkillCategory | "All") => {
    setActiveCategory(cat);
    setActiveIndex(0);
  };

  // Safe cyclic navigation
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (totalSkills > 0 ? (prev - 1 + totalSkills) % totalSkills : 0));
  }, [totalSkills]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (totalSkills > 0 ? (prev + 1) % totalSkills : 0));
  }, [totalSkills]);

  // Touch handlers for seamless mobile swiping across entire stage
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsHovered(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) {
      setIsHovered(false);
      return;
    }
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    const threshold = 40;
    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }
    touchStartX.current = null;
    setTimeout(() => {
      setIsHovered(false);
    }, 900);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (viewMode !== "spatial") return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(totalSkills - 1);
    }
  };

  // Smooth auto-rotation (respects reduced motion & pauses on hover/focus)
  useEffect(() => {
    if (!isPlaying || isHovered || shouldReduceMotion || totalSkills <= 1) {
      return;
    }
    const interval = setInterval(() => {
      handleNext();
    }, 800);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, activeIndex, shouldReduceMotion, totalSkills, handleNext]);

  // Compute 3D spatial properties for each card based on its relative distance from active index
  const getSpatialTransform = (index: number) => {
    if (totalSkills === 0) return { hidden: true, x: 0, z: 0, rotateY: 0, scale: 0.8, opacity: 0, zIndex: 0 };

    let delta = index - activeIndex;

    // Wrap around calculation for smooth infinite carousel feel
    if (totalSkills >= 3) {
      if (delta > totalSkills / 2) delta -= totalSkills;
      if (delta < -totalSkills / 2) delta += totalSkills;
    }

    const absDelta = Math.abs(delta);
    const sign = Math.sign(delta);

    // Limit visible cards in spatial depth: when totalSkills <= 5, limit to 1 so wrapping cards at ±2 stay hidden
    const maxVisibleDelta = isMobile ? 1 : totalSkills <= 5 ? 1 : isTablet ? 2 : 2;
    if (absDelta > maxVisibleDelta) {
      return {
        hidden: true,
        x: sign * (isMobile ? 220 : isTablet ? 380 : 540),
        z: -320,
        rotateY: sign * -40,
        scale: 0.65,
        opacity: 0,
        zIndex: 0,
        delta
      };
    }

    if (delta === 0) {
      return {
        hidden: false,
        x: 0,
        z: 0,
        rotateY: 0,
        scale: 1,
        opacity: 1,
        zIndex: 30,
        delta
      };
    }

    // Geometry configuration for flanking cards
    let x = 0;
    let z = 0;
    let rotateY = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 20;

    if (isMobile) {
      // Mobile: only delta ±1 shown
      x = sign * 120;
      z = -75;
      rotateY = -sign * 16;
      scale = 0.84;
      opacity = 0.42;
      zIndex = 10;
    } else if (isTablet) {
      if (absDelta === 1) {
        x = sign * 190;
        z = -110;
        rotateY = -sign * 22;
        scale = 0.86;
        opacity = 0.72;
        zIndex = 20;
      } else {
        x = sign * 330;
        z = -220;
        rotateY = -sign * 34;
        scale = 0.70;
        opacity = 0.28;
        zIndex = 10;
      }
    } else {
      // Desktop
      if (absDelta === 1) {
        x = sign * 260;
        z = -135;
        rotateY = -sign * 25;
        scale = 0.88;
        opacity = 0.76;
        zIndex = 20;
      } else {
        x = sign * 440;
        z = -270;
        rotateY = -sign * 38;
        scale = 0.72;
        opacity = 0.32;
        zIndex = 10;
      }
    }

    return {
      hidden: false,
      x,
      z,
      rotateY: shouldReduceMotion ? 0 : rotateY,
      scale,
      opacity,
      zIndex,
      delta
    };
  };

  const activeSkill = filteredSkills[activeIndex] || filteredSkills[0];

  return (
    <section
      id="skills"
      className="py-16 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24 transition-colors duration-250 relative overflow-hidden"
    >
      {/* Ambient Electric Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[360px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Screen reader live update */}
      <div className="sr-only" aria-live="polite">
        {activeSkill
          ? `Viewing skill ${activeIndex + 1} of ${totalSkills}: ${activeSkill.name}, ${activeSkill.level} level in ${activeSkill.category}`
          : "Technical skills section"}
      </div>

      {/* Header & Controls Toolbar */}
      <FadeIn direction="up">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400" />
              <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                <LuSparkles className="w-3.5 h-3.5 animate-pulse" />
                Technical Stack & Capabilities
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Interactive 3D Skills Showcase
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed">
              Explore specialized engineering domains in a 3D spatial gallery. Click surrounding cards, swipe, or use arrow keys to navigate.
            </p>
          </div>

          {/* Mode Switcher Toggle */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-[#121726] border border-slate-200 dark:border-slate-800 shadow-inner">
              <button
                type="button"
                onClick={() => setViewMode("spatial")}
                aria-pressed={viewMode === "spatial"}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  viewMode === "spatial"
                    ? "bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-300 font-semibold shadow-sm border border-slate-200 dark:border-slate-700/80"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <FiLayers className="w-3.5 h-3.5" />
                <span>3D</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-pressed={viewMode === "grid"}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  viewMode === "grid"
                    ? "bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-300 font-semibold shadow-sm border border-slate-200 dark:border-slate-700/80"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <FiGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Category Filter Tabs */}
      <FadeIn direction="up" delay={0.08}>
        <div className="mt-6 flex items-center justify-between gap-3 flex-wrap">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex flex-wrap items-center gap-1.5 sm:gap-2"
          >
            {skillCategories.map((cat) => {
              const count =
                cat.id === "All"
                  ? skillsData.length
                  : skillsData.filter((s) => s.category === cat.id).length;
              const isSelected = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/25 ring-1 ring-cyan-400"
                      : "bg-white dark:bg-[#121622]/80 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isSelected
                        ? "bg-slate-950/20 text-slate-950 font-bold"
                        : "bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          
        </div>
      </FadeIn>

      {/* Main Content: 3D Spatial Gallery vs Responsive Grid */}
      {viewMode === "spatial" ? (
        <div
          ref={galleryRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="3D Spatial Skills Gallery"
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mt-8 relative w-full flex flex-col items-center outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-3xl"
        >
          {/* Spatial 3D Carousel Stage */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              perspective: isMobile ? "900px" : "1150px",
              perspectiveOrigin: "50% 50%"
            }}
            className="relative w-full h-[430px] sm:h-[460px] md:h-[480px] flex items-center justify-center overflow-visible select-none py-4"
          >
            {/* Ground Spotlight & Floor Horizon */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-72 sm:w-[480px] h-12 bg-gradient-to-r from-transparent via-cyan-500/25 to-indigo-500/20 blur-2xl rounded-full pointer-events-none" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-52 sm:w-80 h-3 bg-cyan-400/25 dark:bg-cyan-400/30 blur-md rounded-full pointer-events-none" />

            {/* Subtle Ground Horizon Grid Arc */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[540px] h-[120px] rounded-[100%] border border-cyan-500/10 dark:border-cyan-400/15 pointer-events-none"
              style={{ transform: "rotateX(75deg)" }}
            />

            {/* Cards Stack in 3D Space */}
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {filteredSkills.map((skill, index) => {
                const transform = getSpatialTransform(index);
                const Icon = iconMap[skill.iconName] || FiCpu;
                const isActive = transform.delta === 0;

                return (
                  <motion.div
                    key={skill.id}
                    animate={{
                      x: transform.x,
                      y: isActive ? 0 : 4,
                      z: transform.z,
                      rotateY: transform.rotateY,
                      scale: transform.scale,
                      opacity: transform.opacity
                    }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0.25 }
                        : {
                            duration: 0.85,
                            ease: [0.22, 1, 0.36, 1]
                          }
                    }
                    drag={isActive ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.25}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -40 || info.velocity.x < -300) {
                        handleNext();
                      } else if (info.offset.x > 40 || info.velocity.x > 300) {
                        handlePrev();
                      }
                    }}
                    onClick={() => {
                      if (!isActive) {
                        setActiveIndex(index);
                      }
                    }}
                    style={{
                      zIndex: transform.zIndex,
                      transformStyle: "preserve-3d"
                    }}
                    className={`absolute w-[270px] sm:w-[310px] md:w-[330px] h-[360px] sm:h-[380px] rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-shadow duration-300 ${
                      isActive
                        ? "cursor-grab active:cursor-grabbing bg-white/95 dark:bg-[#0d121f]/95 backdrop-blur-2xl border-2 border-cyan-400/90 shadow-[0_0_35px_-5px_rgba(6,182,212,0.35),0_20px_45px_-12px_rgba(0,0,0,0.6)]"
                        : "cursor-pointer bg-white/80 dark:bg-[#0f1423]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 shadow-lg"
                    }`}
                  >
                    {/* Glowing Top Hairline for Active Card */}
                    {isActive && (
                      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-indigo-500 rounded-full" />
                    )}

                    {/* Depth Scrim Overlay for Inactive Cards to Create Spatial Depth */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-950/40 rounded-3xl pointer-events-none transition-opacity duration-300" />
                    )}

                    {/* Card Header: Category & Level Badges */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300">
                          {skill.category}
                        </span>

                        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                          <div className="flex items-center gap-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                skill.level === "Expert" || skill.level === "Advanced"
                                  ? "bg-cyan-400"
                                  : "bg-slate-300 dark:bg-slate-700"
                              }`}
                            />
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                skill.level === "Expert"
                                  ? "bg-cyan-400"
                                  : "bg-slate-300 dark:bg-slate-700"
                              }`}
                            />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider">
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      {/* Icon & Core Title */}
                      <div className="flex items-center gap-3.5 mb-3">
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 ${
                            isActive
                              ? "bg-gradient-to-br from-cyan-500/20 via-indigo-500/15 to-transparent border border-cyan-400/50 text-cyan-500 dark:text-cyan-300 shadow-inner scale-105"
                              : "bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-400"
                          }`}
                        >
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                            {skill.name}
                          </h3>
                          {skill.highlight && (
                            <p className="text-[11px] font-medium text-cyan-600 dark:text-cyan-400 line-clamp-1 mt-0.5">
                              {skill.highlight}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Skill Description */}
                      <p className="text-xs text-slate-600 dark:text-slate-300/90 leading-relaxed line-clamp-3">
                        {skill.description}
                      </p>
                    </div>

                    {/* Card Footer: Tags & Experience */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      <div className="flex flex-wrap gap-1 mb-2.5">
                        {skill.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1 font-medium">
                          <FiCheckCircle className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                          {skill.experience || "Production Proven"}
                        </span>
                        {isActive ? (
                          <span className="text-[10px] uppercase font-bold text-cyan-600 dark:text-cyan-400 tracking-wider">
                            Focused
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-400 hover:text-cyan-400">
                            Click to Focus
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          
        </div>
      ) : (
        /* Responsive Grid View */
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
          >
            {filteredSkills.map((skill) => {
              const Icon = iconMap[skill.iconName] || FiCpu;
              return (
                <div
                  key={skill.id}
                  className="bg-white dark:bg-[#111520] hover:bg-slate-50 dark:hover:bg-[#151a27] border border-slate-200 dark:border-slate-800/80 hover:border-cyan-400 dark:hover:border-cyan-500/40 rounded-2xl p-4.5 transition-all duration-200 group h-full flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/10 border border-slate-200 dark:border-slate-700/60 group-hover:border-cyan-300 dark:group-hover:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-300">
                        {skill.level}
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    {skill.highlight && (
                      <p className="text-[10px] font-medium text-cyan-600 dark:text-cyan-400 mt-0.5">
                        {skill.highlight}
                      </p>
                    )}
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed line-clamp-3">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span>{skill.category}</span>
                    <div className="flex items-center gap-1 font-mono text-[10px]">
                      {skill.experience}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
}
