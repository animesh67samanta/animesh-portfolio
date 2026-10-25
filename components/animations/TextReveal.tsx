"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface TextRevealProps {
  phrases: string[];
  intervalMs?: number;
  className?: string;
}

export function TextReveal({
  phrases,
  intervalMs = 3200,
  className = ""
}: TextRevealProps) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (phrases.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [phrases, intervalMs]);

  if (shouldReduceMotion) {
    return <span className={className}>{phrases[index]}</span>;
  }

  return (
    <span className={`inline-block relative overflow-hidden align-bottom ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="inline-block text-cyan-400 font-semibold"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
