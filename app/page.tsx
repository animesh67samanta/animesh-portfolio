import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { SidebarProfile } from "@/components/SidebarProfile";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/Footer";

// Code-split below-the-fold client sections to reduce initial JavaScript payload while preserving full SSR/SEO
const Projects = dynamic(
  () => import("@/components/sections/Projects").then((mod) => mod.Projects)
);
const Services = dynamic(
  () => import("@/components/sections/Services").then((mod) => mod.Services)
);
const ResumeSection = dynamic(
  () => import("@/components/sections/ResumeSection").then((mod) => mod.ResumeSection)
);
const Contact = dynamic(
  () => import("@/components/sections/Contact").then((mod) => mod.Contact)
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#090b10] dark:text-[#f8fafc] flex flex-col relative overflow-x-hidden selection:bg-cyan-400 selection:text-slate-950 transition-colors duration-250">
      {/* Background Subtle Gradient Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-sky-400/10 dark:bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-10 w-[600px] h-[600px] bg-indigo-400/10 dark:bg-indigo-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
          {/* CVio Signature Left Profile Sidebar Card */}
          <SidebarProfile />

          {/* Right Main Sections Area */}
          <div className="flex-1 w-full min-w-0 space-y-4">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Services />
            <ResumeSection />
            <Contact />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
