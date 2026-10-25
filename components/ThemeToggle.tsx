"use client";

import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  // Guard against hydration mismatch
  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-xl bg-slate-200/50 dark:bg-slate-800/60 border border-slate-300/40 dark:border-slate-700/60 animate-pulse ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center gap-2 p-2 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 select-none ${
        isDark
          ? "bg-[#111520] hover:bg-slate-800 border border-slate-800 text-amber-300 hover:text-amber-200 shadow-inner shadow-black/40"
          : "bg-white hover:bg-slate-100 border border-slate-200 text-indigo-600 hover:text-indigo-700 shadow-sm"
      } ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -45, scale: 0.7, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 45, scale: 0.7, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex items-center justify-center w-5 h-5 shrink-0"
      >
        {isDark ? (
          <FiSun className="w-4 h-4 text-amber-300 drop-shadow-[0_0_6px_rgba(252,211,77,0.5)]" />
        ) : (
          <FiMoon className="w-4 h-4 text-indigo-600" />
        )}
      </motion.div>

      {showLabel && (
        <span className="text-xs font-medium text-slate-700 dark:text-slate-300 pr-1">
          {isDark ? "Light" : "Dark"}
        </span>
      )}
    </button>
  );
}
