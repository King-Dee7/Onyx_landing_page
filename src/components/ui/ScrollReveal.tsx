"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, width = "fit-content", className, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={delay}
        style={{ width: "100%", height: className?.includes("h-full") ? "100%" : "auto" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
