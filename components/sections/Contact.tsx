"use client";

import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader
} from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaFacebook } from "react-icons/fa6";
import { portfolioData } from "@/data/portfolioData";
import { sendContactEmail, validateContactForm, ContactFormData } from "@/lib/emailjs";
import { FadeIn } from "@/components/animations/FadeIn";

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: ""
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "info";
    text: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error when user starts typing
    if (formErrors[name as keyof ContactFormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      setStatusMessage({
        type: "error",
        text: "Please fix the highlighted errors before submitting."
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await sendContactEmail(formData);
      if (response.success) {
        setStatusMessage({
          type: "success",
          text: response.message
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          honeypot: ""
        });
        setFormErrors({});
      } else {
        setStatusMessage({
          type: "error",
          text: response.message
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "An unexpected error occurred. Please reach out directly to animesh67samanta@gmail.com."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-24">
      {/* Header */}
      <FadeIn direction="up">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400" />
          <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
            Get In Touch
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Let’s Discuss Your Next Backend Project
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1.5 max-w-2xl">
          Whether you need a new Laravel platform, database optimization, or an architectural consultation, feel free to reach out.
        </p>
      </FadeIn>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          <FadeIn direction="up" delay={0.1}>
            <div className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-slate-800/90 rounded-2xl p-6 shadow-xl dark:shadow-black/30 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Direct Contact Channels
              </h3>

              <div className="flex items-start gap-3.5 pt-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-semibold text-slate-500 dark:text-slate-400 block">
                    Email Address
                  </span>
                  <a
                    href={portfolioData.personal.socialLinks.email}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors break-all"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100 dark:border-slate-800/70">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-semibold text-slate-500 dark:text-slate-400 block">
                    Phone & WhatsApp
                  </span>
                  <a
                    href={portfolioData.personal.socialLinks.phone}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100 dark:border-slate-800/70">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-semibold text-slate-500 dark:text-slate-400 block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {portfolioData.personal.location}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                    Open to Relocation & Remote Work
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-slate-800/90 rounded-2xl p-5 flex items-center justify-between shadow-md dark:shadow-none">
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white block">Connect Online</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Professional Profiles</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={portfolioData.personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-cyan-50 dark:hover:bg-cyan-500/20 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <SiGithub className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-cyan-50 dark:hover:bg-cyan-500/20 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.personal.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-cyan-50 dark:hover:bg-cyan-500/20 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  aria-label="Facebook Profile"
                >
                  <FaFacebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Contact Form with EmailJS */}
        <div className="lg:col-span-7">
          <FadeIn direction="up" delay={0.15}>
            <div className="bg-white dark:bg-[#111520] border border-slate-200 dark:border-slate-800/90 rounded-3xl p-6 sm:p-8 shadow-xl dark:shadow-black/30">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
                Fill in the form below. Messages are delivered directly to Animesh via EmailJS.
              </p>

              {/* Status Alert Banner */}
              {statusMessage && (
                <div
                  className={`mb-6 p-4 rounded-xl text-xs sm:text-sm flex items-start gap-3 ${
                    statusMessage.type === "success"
                      ? "bg-emerald-500/15 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300"
                      : "bg-rose-500/15 border border-rose-500/40 text-rose-700 dark:text-rose-300"
                  }`}
                  role="alert"
                >
                  {statusMessage.type === "success" ? (
                    <FiCheckCircle className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <FiAlertCircle className="w-5 h-5 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot field for anti-spam (hidden from users) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-cyan-600 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      aria-required="true"
                      aria-invalid={!!formErrors.name}
                      aria-describedby={formErrors.name ? "name-error" : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:bg-white dark:focus:bg-slate-900 ${
                        formErrors.name ? "border-rose-500" : "border-slate-200 dark:border-slate-800 focus:border-cyan-500"
                      }`}
                    />
                    {formErrors.name && (
                      <p id="name-error" className="text-[11px] text-rose-500 dark:text-rose-400 mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-cyan-600 dark:text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@company.com"
                      aria-required="true"
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? "email-error" : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:bg-white dark:focus:bg-slate-900 ${
                        formErrors.email ? "border-rose-500" : "border-slate-200 dark:border-slate-800 focus:border-cyan-500"
                      }`}
                    />
                    {formErrors.email && (
                      <p id="email-error" className="text-[11px] text-rose-500 dark:text-rose-400 mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-cyan-600 dark:text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Laravel Developer Role / Project Consultation"
                    aria-required="true"
                    aria-invalid={!!formErrors.subject}
                    aria-describedby={formErrors.subject ? "subject-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:bg-white dark:focus:bg-slate-900 ${
                      formErrors.subject ? "border-rose-500" : "border-slate-200 dark:border-slate-800 focus:border-cyan-500"
                    }`}
                  />
                  {formErrors.subject && (
                    <p id="subject-error" className="text-[11px] text-rose-500 dark:text-rose-400 mt-1">
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Message <span className="text-cyan-600 dark:text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or engineering opportunity..."
                    aria-required="true"
                    aria-invalid={!!formErrors.message}
                    aria-describedby={formErrors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:bg-white dark:focus:bg-slate-900 ${
                      formErrors.message ? "border-rose-500" : "border-slate-200 dark:border-slate-800 focus:border-cyan-500"
                    }`}
                  />
                  {formErrors.message && (
                    <p id="message-error" className="text-[11px] text-rose-500 dark:text-rose-400 mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Spam-protected • Client-side validated
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-cyan-500/20"
                  >
                    {isSubmitting ? (
                      <>
                        <FiLoader className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
