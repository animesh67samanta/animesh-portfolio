"use client";

import React, { useState } from "react";
import {
  SiLaravel,
  SiPhp,
  SiMysql,
  SiRedis,
  SiReact,
  SiInertia,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiVuedotjs,
  SiBootstrap,
  SiGithub,
  SiDocker,
  SiLinux,
  SiPostman,
  SiJira,
  SiWordpress,
  SiWoocommerce,
  SiFastapi,
  SiGo
} from "react-icons/si";
import {
  FiClock,
  FiShield,
  FiLayers,
  FiDatabase,
  FiGrid,
  FiRepeat,
  FiTerminal,
  FiServer,
  FiMessageSquare,
  FiMail,
  FiFileText,
  FiFile,
  FiZap,
  FiCpu
} from "react-icons/fi";
import { TbApi } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { LuWorkflow } from "react-icons/lu";
import { portfolioData } from "@/data/portfolioData";
import { FadeIn } from "@/components/animations/FadeIn";

const iconMap: Record<string, React.ElementType> = {
  SiLaravel,
  SiPhp,
  TbApi,
  LuWorkflow,
  FiClock,
  FiShield,
  FiLayers,
  MdPayment,
  SiMysql,
  FiZap,
  SiRedis,
  FiDatabase,
  FiGrid,
  SiReact,
  SiInertia,
  SiTailwindcss,
  SiJavascript,
  FiRepeat,
  SiTypescript,
  SiVuedotjs,
  SiBootstrap,
  SiGithub,
  SiPostman,
  SiDocker,
  SiLinux,
  FiTerminal,
  FiServer,
  SiJira,
  SiFastapi,
  FiMessageSquare,
  FiMail,
  FiFileText,
  FiFile,
  SiWordpress,
  SiWoocommerce,
  SiGo,
};

type CategoryFilter = "All" | "Backend" | "Databases" | "Frontend" | "DevOps & Tools" | "APIs & Integrations" | "CMS";

const categories: CategoryFilter[] = [
  "All",
  "Backend",
  "Databases",
  "Frontend",
  "DevOps & Tools",
  "APIs & Integrations",
  "CMS"
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const filteredSkills = portfolioData.skills.filter((skill) =>
    activeCategory === "All" ? true : skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-16 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24 transition-colors duration-250">
      {/* Header */}
      <FadeIn direction="up">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400" />
          <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
            Technical Stack
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Specialized Backend & Full-Stack Capabilities
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl">
          Engineered and battle-tested across enterprise municipal governance, healthcare scheduling, and high-concurrency e-commerce systems.
        </p>
      </FadeIn>

      {/* Category Tabs */}
      <FadeIn direction="up" delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                activeCategory === cat
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/25"
                  : "bg-white dark:bg-[#121622]/80 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Skills Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredSkills.map((skill, index) => {
          const Icon = iconMap[skill.iconName] || FiCpu;
          return (
            <FadeIn key={skill.name} direction="up" delay={0.03 * (index % 12)}>
              <div className="bg-white dark:bg-[#111520] hover:bg-slate-50 dark:hover:bg-[#151a27] border border-slate-200 dark:border-slate-800/80 hover:border-cyan-400 dark:hover:border-cyan-500/40 rounded-2xl p-4 transition-all duration-200 group h-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/10 border border-slate-200 dark:border-slate-700/60 group-hover:border-cyan-300 dark:group-hover:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-300">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>{skill.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400/60" />
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
