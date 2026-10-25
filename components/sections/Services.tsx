"use client";

import React from "react";
import { FiCheck, FiLayers } from "react-icons/fi";
import { SiLaravel, SiMysql, SiOpenaccess } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { LuWorkflow } from "react-icons/lu";
import { portfolioData } from "@/data/portfolioData";
import { FadeIn } from "@/components/animations/FadeIn";

const serviceIcons: Record<string, React.ElementType> = {
  SiLaravel,
  TbApi,
  SiMysql,
  LuWorkflow,
  MdPayment,
  SiOpenaccess
};

export function Services() {
  return (
    <section id="services" className="py-16 border-t border-slate-800/80 scroll-mt-24">
      {/* Header */}
      <FadeIn direction="up">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-[2px] bg-cyan-400" />
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
            Expertise
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Backend Engineering Services
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1.5 max-w-2xl">
          Targeted solutions for enterprises and startups requiring scalable Laravel backends, database query acceleration, and bulletproof workflow automation.
        </p>
      </FadeIn>

      {/* Services Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {portfolioData.services.map((svc, idx) => {
          const Icon = serviceIcons[svc.icon] || FiLayers;
          return (
            <FadeIn key={svc.id} direction="up" delay={0.08 * idx}>
              <div className="bg-[#111520] hover:bg-[#141926] border border-slate-800/90 hover:border-cyan-500/40 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group h-full shadow-lg shadow-black/20">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/80 group-hover:bg-cyan-500/10 border border-slate-700/60 group-hover:border-cyan-500/30 flex items-center justify-center text-cyan-400 transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/70">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2">
                    Key Deliverables
                  </span>
                  <ul className="space-y-1.5">
                    {svc.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <FiCheck className="text-cyan-400 w-3 h-3 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
