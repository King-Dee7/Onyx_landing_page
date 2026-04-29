"use client";

import React from "react";
import { content } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: smoothEase } }
};

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-theme-white py-24 md:py-40 border-b border-theme-border">
      {/* Ambient Green Glow (Option 1 Mix) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-theme-green/15 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Delicate Dot Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.12]" 
        style={{ 
          backgroundImage: 'radial-gradient(#000000 1.5px, transparent 1.5px)', 
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)'
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.h2 
            variants={fadeUpVariant}
            className="text-4xl md:text-[72px] leading-[1.05] font-extrabold tracking-tight mb-6 font-inter text-transparent bg-clip-text bg-gradient-to-br from-theme-ink via-theme-ink to-zinc-500 pb-2"
          >
            {content.finalCta.headline}
          </motion.h2>
          
          <motion.p 
            variants={fadeUpVariant}
            className="text-lg md:text-2xl text-theme-body mb-12 max-w-2xl mx-auto font-medium font-inter leading-relaxed"
          >
            {content.finalCta.subheadline}
          </motion.p>
          
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center">
            <Link href="/connect" passHref>
              <Button 
                size="lg" 
                className="w-full sm:w-auto tracking-wide shadow-2xl shadow-theme-green/10 font-bold transition-transform hover:-translate-y-1"
              >
                {content.finalCta.button}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
