"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FiHome,
  FiUser,
  FiCpu,
  FiBriefcase,
  FiFolder,
  FiLayers,
  FiFileText,
  FiMail,
  FiMenu,
  FiX,
  FiDownload
} from "react-icons/fi";
import { portfolioData } from "@/data/portfolioData";
import { ThemeToggle } from "./ThemeToggle";
import { trackResumeDownload } from "@/lib/analytics";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: FiHome },
  { id: "about", label: "About", icon: FiUser },
  { id: "skills", label: "Skills", icon: FiCpu },
  { id: "experience", label: "Experience", icon: FiBriefcase },
  { id: "projects", label: "Projects", icon: FiFolder },
  { id: "services", label: "Services", icon: FiLayers },
  { id: "resume", label: "Resume", icon: FiFileText },
  { id: "contact", label: "Contact", icon: FiMail },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Active section detection
      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = id === "home" ? "/" : `/#${id}`;
    }
  };

  return (
    <>
      {/* Top Header Bar for Mobile & Desktop */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 dark:bg-[#090b10]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3 shadow-md shadow-slate-200/40 dark:shadow-xl dark:shadow-black/40"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo / Monogram */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1 group"
            aria-label="Animesh Samanta Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-lg shadow-cyan-500/10 flex items-center justify-center p-1 group-hover:scale-105 transition-transform overflow-hidden relative shrink-0">
              <Image
                src="/icon.png"
                alt="Animesh Samanta - Laravel Developer Monogram Logo"
                width={36}
                height={36}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="block font-bold text-slate-900 dark:text-white text-base tracking-tight">
                Animesh Samanta
              </span>
              <span className="block text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
                Laravel Developer
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 bg-white/80 dark:bg-[#121622]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-inner dark:shadow-black/30">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isActive
                      ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/30"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="text-sm" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: Theme Toggle + Resume */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Dark / Light Mode Toggle */}
            <ThemeToggle />

            <a
              href={portfolioData.personal.resumePdf}
              download="Animesh-Samanta-Resume.pdf"
              onClick={() => trackResumeDownload("navbar_cta")}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-700/90 border border-slate-200 dark:border-slate-700/80 hover:border-cyan-500/50 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <FiDownload className="text-cyan-600 dark:text-cyan-400" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-out Drawer */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-72 bg-white dark:bg-[#0d1017] border-l border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-16">
            <div className="mb-6 pb-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-md flex items-center justify-center p-1 overflow-hidden relative shrink-0">
                  <Image
                    src="/icon.png"
                    alt="Animesh Samanta - Laravel Developer Monogram Logo"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="block font-bold text-slate-900 dark:text-white text-base">
                    Animesh Samanta
                  </span>
                  <span className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                    Laravel Developer
                  </span>
                </div>
              </div>
            </div>

            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${
                      isActive
                        ? "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900"
                    }`}
                  >
                    <Icon className="text-base text-cyan-600 dark:text-cyan-400" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs text-slate-500 dark:text-slate-400">Theme</span>
              <ThemeToggle showLabel />
            </div>

            <a
              href={portfolioData.personal.resumePdf}
              download="Animesh-Samanta-Resume.pdf"
              onClick={() => {
                trackResumeDownload("navbar_mobile_menu");
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 transition-colors"
            >
              <FiDownload className="text-cyan-600 dark:text-cyan-400" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
