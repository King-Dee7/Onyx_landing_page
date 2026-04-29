"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export function ScrollReveal({
  children,
  width = "fit-content",
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const x = direction === "left" ? -24 : direction === "right" ? 24 : 0;
  const y = direction === "up" ? 20 : 0;

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        initial={{ opacity: 0, x, y }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
        transition={{ duration: 0.6, delay, ease: smoothEase }}
        style={{ width: "100%", height: className?.includes("h-full") ? "100%" : "auto" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
