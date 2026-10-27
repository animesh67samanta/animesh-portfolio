/**
 * Google Analytics 4 (GA4) Analytics and Event Tracking Helper
 * 
 * Safe, PII-free event dispatching compatible with @next/third-parties/google,
 * gtag.js, and Google Tag Manager dataLayer.
 */

export type AnalyticsParamValue = string | number | boolean;

export interface EventParams {
  [key: string]: AnalyticsParamValue | undefined | null;
}

/**
 * Universal safe GA4 event tracker
 * Does not break if GA is blocked by adblockers or if NEXT_PUBLIC_GA_ID is unset.
 */
export function trackEvent(eventName: string, params?: EventParams): void {
  if (typeof window === "undefined") return;

  // Filter out undefined/null and ensure no PII is accidentally transmitted
  const cleanParams: Record<string, AnalyticsParamValue> = {};
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        cleanParams[key] = value;
      }
    }
  }

  try {
    // 1. Direct gtag call (standard gtag.js initialized by @next/third-parties)
    const win = window as unknown as {
      gtag?: (...args: unknown[]) => void;
      dataLayer?: unknown[];
    };

    if (typeof win.gtag === "function") {
      win.gtag("event", eventName, cleanParams);
    } else if (Array.isArray(win.dataLayer)) {
      // 2. dataLayer fallback
      win.dataLayer.push({
        event: eventName,
        ...cleanParams
      });
    }

    if (process.env.NODE_ENV === "development") {
      console.debug(`[GA4 Event] ${eventName}:`, cleanParams);
    }
  } catch (err) {
    // Silently suppress analytics dispatch errors to never disrupt navigation or UX
    if (process.env.NODE_ENV === "development") {
      console.warn("[GA4 Tracking Error]", err);
    }
  }
}

/**
 * Track when a visitor clicks to view a project, inspects blueprint, or opens live demo
 */
export function trackProjectClick(projectName: string, destination?: string): void {
  trackEvent("project_click", {
    project_name: projectName,
    link_destination: destination || "details"
  });
}

/**
 * Track when a visitor clicks any GitHub repository or profile link
 */
export function trackGitHubClick(location: string, destination?: string): void {
  trackEvent("github_click", {
    link_location: location,
    link_destination: destination || "https://github.com/animesh67samanta"
  });
}

/**
 * Track when a visitor clicks any LinkedIn profile link
 */
export function trackLinkedInClick(location: string, destination?: string): void {
  trackEvent("linkedin_click", {
    link_location: location,
    link_destination: destination || "linkedin_profile"
  });
}

/**
 * Track when a visitor clicks to download or view the résumé PDF
 */
export function trackResumeDownload(source: string, fileName = "Animesh-Samanta-Resume.pdf"): void {
  trackEvent("resume_download", {
    file_name: fileName,
    file_type: "pdf",
    download_source: source
  });
}

/**
 * Track when a visitor initiates contact via email link, phone, or form
 * Note: Never sends personal form content or user email addresses (PII protection)
 */
export function trackContactClick(method: "email" | "phone" | "form" | "social", label?: string): void {
  trackEvent("contact_click", {
    contact_method: method,
    contact_label: label || "contact_action"
  });
}

/**
 * Track outbound clicks to external sites
 */
export function trackExternalLinkClick(url?: string, category = "external_link", label?: string): void {
  if (!url) return;
  trackEvent("external_link_click", {
    destination_url: url,
    link_category: category,
    link_label: label || url
  });
}

/**
 * Track manual page views or virtual screen transitions (if SPA hash change or subpage view is required)
 */
export function trackPageView(url: string, title?: string): void {
  if (typeof window === "undefined") return;
  trackEvent("page_view", {
    page_location: url,
    page_title: title || document.title
  });
}
