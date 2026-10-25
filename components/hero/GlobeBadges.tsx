"use client";

import React from "react";
import { Html } from "@react-three/drei";
import { FLOATING_BADGES } from "./globeData";
import { useTheme } from "@/components/ThemeProvider";

export function GlobeBadges() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <group>
      {FLOATING_BADGES.map((badge) => (
        <Html
          key={badge.id}
          position={badge.position}
          center
          distanceFactor={7}
          className="pointer-events-none select-none hidden sm:block"
        >
          <div
            className={`px-3 py-1.5 rounded-full border shadow-lg backdrop-blur-md flex items-center gap-2 whitespace-nowrap transition-colors duration-200 ${
              isDark
                ? "bg-[#0c101a]/85 border-cyan-500/30 text-white shadow-cyan-950/40"
                : "bg-white/90 border-slate-200 text-slate-800 shadow-slate-300/40"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full animate-ping ${
                isDark ? "bg-cyan-400" : "bg-sky-500"
              }`}
            />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold tracking-widest uppercase">
                {badge.text}
              </span>
              {badge.subtext && (
                <span
                  className={`text-[8px] font-medium ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {badge.subtext}
                </span>
              )}
            </div>
          </div>
        </Html>
      ))}
    </group>
  );
}
