"use client";

import React from "react";
import { GoogleAnalytics as NextGA } from "@next/third-parties/google";

/**
 * GoogleAnalytics Integration Component
 * 
 * Reads the GA4 Measurement ID from `process.env.NEXT_PUBLIC_GA_ID`.
 * Automatically mounts using Next.js official `@next/third-parties/google` component.
 * Safely guards against missing or unconfigured placeholder IDs ("G-XXXXXXXXXX").
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-Z39KYRHH2N";

  if (!gaId || !gaId.startsWith("G-")) {
    return null;
  }

  return (
    <NextGA
      gaId={gaId}
      debugMode={process.env.NODE_ENV !== "production"}
    />
  );
}
