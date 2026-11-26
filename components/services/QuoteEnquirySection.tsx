"use client";

import React, { useState, useEffect } from "react";
import {
  FiSend,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
} from "react-icons/fi";
import { portfolioData } from "@/data/portfolioData";
import { servicesData } from "@/data/services";
import { validateContactForm, ContactFormData, sendContactEmail } from "@/lib/emailjs";

export function QuoteEnquirySection() {
  const [selectedService, setSelectedService] = useState<string>("Laravel & PHP Web Development");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: `Service Quote Request: Laravel & PHP Web Development`,
    message: "",
    honeypot: "",
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Listen to custom event dispatched when a user clicks "Contact for a Quote" on a service card
  useEffect(() => {
    const handleSelectService = (e: CustomEvent<{ serviceTitle: string }>) => {
      if (e.detail?.serviceTitle) {
        setSelectedService(e.detail.serviceTitle);
        setFormData((prev) => ({
          ...prev,
          subject: `Service Quote Request: ${e.detail.serviceTitle}`,
        }));
      }
    };

    window.addEventListener(
      "select-service-quote",
      handleSelectService as EventListener
    );
    return () => {
      window.removeEventListener(
        "select-service-quote",
        handleSelectService as EventListener
      );
    };
  }, []);

  const handleServiceChange = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setFormData((prev) => ({
      ...prev,
      subject: `Service Quote Request: ${serviceTitle}`,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof ContactFormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    const fullMessage = `[Selected Service: ${selectedService}]\n\n${formData.message}`;
    const submissionData = {
      ...formData,
      message: fullMessage,
    };

    const validation = validateContactForm(submissionData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      setStatusMessage({
        type: "error",
        text: "Please fix the highlighted fields before submitting.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      const response = await res.json();
      if (response.success) {
        setStatusMessage({
          type: "success",
          text: "Thank you! Your quote request has been received. I will review your requirements and respond within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          subject: `Service Quote Request: ${selectedService}`,
          message: "",
          honeypot: "",
        });
        setFormErrors({});
      } else {
        setStatusMessage({
          type: "error",
          text: response.message || "Failed to submit quote enquiry.",
        });
      }
    } catch {
      // Fallback via client-side email dispatch
      try {
        const fallbackRes = await sendContactEmail(submissionData);
        if (fallbackRes.success) {
          setStatusMessage({
            type: "success",
            text: "Your quote request has been sent! I will respond within 24 hours.",
          });
          setFormData({
            name: "",
            email: "",
            subject: `Service Quote Request: ${selectedService}`,
            message: "",
            honeypot: "",
          });
        } else {
          throw new Error();
        }
      } catch {
        setStatusMessage({
          type: "error",
          text: "Network error sending enquiry. Please email me directly at animesh67samanta@gmail.com.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-16 sm:py-20 lg:py-24 border-t border-slate-200/80 dark:border-white/[0.06] scroll-mt-20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Left Column: Headline, Direct Channels & Value Prop */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                  Project Enquiry &amp; Quotation
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Have a Project in Mind?
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                Tell me what you need, and let&apos;s discuss a solution that fits your requirements. No fixed packages or hidden fees—quotes are tailored to your deliverables.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/95 dark:bg-[#0c0f17]/95 border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 transition-colors shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    {portfolioData.personal.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${portfolioData.personal.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/95 dark:bg-[#0c0f17]/95 border border-slate-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 transition-colors shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    Phone &amp; WhatsApp
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    {portfolioData.personal.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/95 dark:bg-[#0c0f17]/95 border border-slate-200/90 dark:border-white/[0.08] shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                    Location &amp; Availability
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {portfolioData.personal.location} (Remote Worldwide)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Note */}
            <div className="p-4 rounded-2xl bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/20 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="font-bold text-cyan-600 dark:text-cyan-400 block mb-1">
                Guaranteed Response Time:
              </span>
              All project requests receive a response within 24 hours with initial feedback, architecture recommendations, and next steps.
            </div>
          </div>

          {/* Right Column: Custom Quote Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 lg:p-10 bg-white/95 dark:bg-[#0c0f17]/95 backdrop-blur-xl border border-slate-200/90 dark:border-white/[0.08] shadow-2xl shadow-slate-200/50 dark:shadow-black/70">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Request a Custom Quote
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill out the details below, and I will prepare a personalized quote and timeline breakdown.
              </p>

              {/* Status Banner */}
              {statusMessage && (
                <div
                  className={`p-4 rounded-2xl mb-6 flex items-start gap-3 text-xs leading-relaxed ${
                    statusMessage.type === "success"
                      ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300"
                      : "bg-red-500/15 border border-red-500/30 text-red-800 dark:text-red-300"
                  }`}
                >
                  {statusMessage.type === "success" ? (
                    <FiCheckCircle className="w-5 h-5 shrink-0 text-emerald-500 mt-0.5" />
                  ) : (
                    <FiAlertCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot anti-spam field */}
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

                {/* Service Selection Pills */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Service Needed:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {servicesData.map((svc) => {
                      const isSelected = selectedService === svc.title;
                      return (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => handleServiceChange(svc.title)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                            isSelected
                              ? "bg-cyan-500 text-slate-950 border-cyan-500 shadow-sm shadow-cyan-500/20"
                              : "bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.08]"
                          }`}
                        >
                          {svc.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="service-form-name"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="service-form-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border ${
                        formErrors.name
                          ? "border-red-500 ring-1 ring-red-500"
                          : "border-slate-200 dark:border-white/[0.08] focus:border-cyan-500 dark:focus:border-cyan-400"
                      } text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none transition-colors`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-[11px] text-red-500">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="service-form-email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="service-form-email"
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border ${
                        formErrors.email
                          ? "border-red-500 ring-1 ring-red-500"
                          : "border-slate-200 dark:border-white/[0.08] focus:border-cyan-500 dark:focus:border-cyan-400"
                      } text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none transition-colors`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-[11px] text-red-500">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="service-form-message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                  >
                    Project Description &amp; Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="service-form-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Briefly describe your project goals, key features, target timeline, or any existing system you need improved..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border ${
                      formErrors.message
                        ? "border-red-500 ring-1 ring-red-500"
                        : "border-slate-200 dark:border-white/[0.08] focus:border-cyan-500 dark:focus:border-cyan-400"
                    } text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none transition-colors resize-y`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-[11px] text-red-500">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 order-2 sm:order-1 text-center sm:text-left">
                    Direct reply within 24 hours. No obligation.
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/50 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-400 active:scale-95 order-1 sm:order-2"
                  >
                    {isSubmitting ? (
                      <>
                        <FiLoader className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        <span>Submit Quote Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
