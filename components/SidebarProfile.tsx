"use client";

import React from "react";
import Image from "next/image";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiDownload,
  FiSend,
  FiBriefcase
} from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaFacebook } from "react-icons/fa6";
import { portfolioData } from "@/data/portfolioData";
import {
  trackResumeDownload,
  trackGitHubClick,
  trackLinkedInClick,
  trackContactClick,
  trackExternalLinkClick,
} from "@/lib/analytics";

export function SidebarProfile() {
  const scrollToContact = () => {
    trackContactClick("form", "sidebar_profile_cta");
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="w-full lg:w-[320px] shrink-0">
      <div className="lg:sticky lg:top-24 bg-white dark:bg-[#111520] border border-slate-200/90 dark:border-slate-800/90 rounded-3xl p-6 shadow-xl shadow-slate-200/40 dark:shadow-2xl dark:shadow-black/50 overflow-hidden relative group transition-colors duration-250">
        {/* Ambient Top Glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-400/20 dark:group-hover:bg-cyan-500/20 transition-all duration-500" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Profile Avatar with Glowing Border */}
        <div className="relative mx-auto w-36 h-36 mb-5">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 p-[3px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
              <Image
                src={portfolioData.personal.avatar}
                alt="Animesh Samanta - Laravel and PHP Developer"
                fill
                sizes="(max-width: 1024px) 144px, 144px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* Status Badge */}
          <div className="absolute bottom-1 right-1 bg-white dark:bg-[#090b10] border border-slate-200 dark:border-slate-800 rounded-full p-1.5 shadow-md flex items-center justify-center">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 block animate-pulse" />
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-5">
          <p className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            {portfolioData.personal.name}
          </p>
          <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-1 uppercase tracking-wider">
            {portfolioData.personal.role}
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 mt-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Open to Full-Time & Remote</span>
          </div>
        </div>

        {/* Contact Quick Details List */}
        <div className="border-t border-slate-200/80 dark:border-slate-800/80 pt-4 pb-2 space-y-3 text-xs">
          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
            <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <FiBriefcase className="w-3.5 h-3.5" />
            </div>
            <div className="truncate">
              <span className="text-[10px] uppercase text-slate-500 dark:text-slate-400 block font-semibold">Experience</span>
              <span className="font-medium text-slate-800 dark:text-slate-200">3+ Years (Laravel & PHP)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
            <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <FiMapPin className="w-3.5 h-3.5" />
            </div>
            <div className="truncate">
              <span className="text-[10px] uppercase text-slate-500 dark:text-slate-400 block font-semibold">Location</span>
              <span className="font-medium text-slate-800 dark:text-slate-200">{portfolioData.personal.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
            <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <FiMail className="w-3.5 h-3.5" />
            </div>
            <div className="truncate">
              <span className="text-[10px] uppercase text-slate-500 dark:text-slate-400 block font-semibold">Email</span>
              <a
                href={portfolioData.personal.socialLinks.email}
                className="font-medium text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors truncate block"
              >
                {portfolioData.personal.email}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
            <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
              <FiPhone className="w-3.5 h-3.5" />
            </div>
            <div className="truncate">
              <span className="text-[10px] uppercase text-slate-500 dark:text-slate-400 block font-semibold">Phone</span>
              <a
                href={portfolioData.personal.socialLinks.phone}
                className="font-medium text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {portfolioData.personal.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="border-t border-slate-200/80 dark:border-slate-800/80 pt-4 pb-2 flex items-center justify-center gap-3">
          <a
            href={portfolioData.personal.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackGitHubClick("sidebar_profile", portfolioData.personal.socialLinks.github)}
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-cyan-500/20 border border-slate-200 dark:border-slate-700/60 hover:border-cyan-500/50 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <SiGithub className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLinkedInClick("sidebar_profile", portfolioData.personal.socialLinks.linkedin)}
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-cyan-500/20 border border-slate-200 dark:border-slate-700/60 hover:border-cyan-500/50 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackExternalLinkClick(portfolioData.personal.socialLinks.facebook, "social_facebook", "Facebook Profile")}
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-cyan-500/20 border border-slate-200 dark:border-slate-700/60 hover:border-cyan-500/50 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200"
            aria-label="Facebook Profile"
          >
            <FaFacebook className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.socialLinks.email}
            onClick={() => trackContactClick("email", "sidebar_profile")}
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-cyan-500/20 border border-slate-200 dark:border-slate-700/60 hover:border-cyan-500/50 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200"
            aria-label="Email Animesh"
          >
            <FiMail className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.socialLinks.phone}
            onClick={() => trackContactClick("phone", "sidebar_profile")}
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-cyan-500/20 border border-slate-200 dark:border-slate-700/60 hover:border-cyan-500/50 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200"
            aria-label="Call Animesh"
          >
            <FiPhone className="w-4 h-4" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col gap-2.5">
          <a
            href={portfolioData.personal.resumePdf}
            download="Animesh-Samanta-Resume.pdf"
            onClick={() => trackResumeDownload("sidebar_profile")}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-800 dark:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/80 hover:border-cyan-500/50 transition-all shadow-sm group/btn"
          >
            <FiDownload className="text-cyan-600 dark:text-cyan-400 group-hover/btn:-translate-y-0.5 transition-transform" />
            <span>Download Resume (PDF)</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToContact();
            }}
            className="relative group w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-400/35 overflow-hidden border border-cyan-300/40 text-center"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
            <FiSend className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
