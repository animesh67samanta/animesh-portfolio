"use client";

import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaFacebook } from "react-icons/fa6";
import { portfolioData } from "@/data/portfolioData";
import { trackGitHubClick, trackLinkedInClick, trackExternalLinkClick } from "@/lib/analytics";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-[#07090e] py-8 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span>
            © {new Date().getFullYear()}{" "}
            <strong className="text-slate-900 dark:text-white font-medium">Animesh Samanta</strong>. All rights reserved.
          </span>
        </div>

        {/* Center: Tech Badge */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300 shadow-sm dark:shadow-none">
          <span>Engineered with Next.js 16, TypeScript & Three.js</span>
        </div>

        {/* Right: Back to top and socials */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personal.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackGitHubClick("footer", portfolioData.personal.socialLinks.github)}
            className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <SiGithub className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLinkedInClick("footer", portfolioData.personal.socialLinks.linkedin)}
            className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackExternalLinkClick(portfolioData.personal.socialLinks.facebook, "social_facebook", "Facebook Profile")}
            className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            aria-label="Facebook Profile"
          >
            <FaFacebook className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-cyan-500/20 border border-slate-200 dark:border-slate-700/60 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all flex items-center justify-center shadow-sm dark:shadow-none"
            aria-label="Scroll back to top"
          >
            <FiArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
