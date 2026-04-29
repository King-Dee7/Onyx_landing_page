"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// ─── Fade-up animation variant ────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
});

// ─── Process Pillar SVG Icons ─────────────────────────────────────────────────

const IconData = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <ellipse cx="24" cy="10" rx="16" ry="5.5" fill="currentColor" />
    <path d="M8 10v8c0 3.04 7.16 5.5 16 5.5S40 21.04 40 18v-8" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M8 18v8c0 3.04 7.16 5.5 16 5.5S40 29.04 40 26v-8" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M8 26v8c0 3.04 7.16 5.5 16 5.5S40 37.04 40 34v-8" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const IconAutomation = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="24" r="7" fill="currentColor" />
    <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.4" />
    <circle cx="24" cy="4" r="2.5" fill="currentColor" opacity="0.7" />
    <circle cx="44" cy="24" r="2.5" fill="currentColor" opacity="0.7" />
    <circle cx="24" cy="44" r="2.5" fill="currentColor" opacity="0.7" />
    <circle cx="4" cy="24" r="2.5" fill="currentColor" opacity="0.7" />
  </svg>
);

const IconIntegration = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="4" y="4" width="14" height="14" rx="4" fill="currentColor" />
    <rect x="30" y="4" width="14" height="14" rx="4" fill="currentColor" opacity="0.6" />
    <rect x="4" y="30" width="14" height="14" rx="4" fill="currentColor" opacity="0.6" />
    <rect x="30" y="30" width="14" height="14" rx="4" fill="currentColor" />
    <line x1="18" y1="11" x2="30" y2="11" stroke="currentColor" strokeWidth="2" />
    <line x1="18" y1="37" x2="30" y2="37" stroke="currentColor" strokeWidth="2" />
    <line x1="11" y1="18" x2="11" y2="30" stroke="currentColor" strokeWidth="2" />
    <line x1="37" y1="18" x2="37" y2="30" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="24" r="3.5" fill="currentColor" opacity="0.5" />
  </svg>
);

const IconGrowth = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="4" y="32" width="8" height="12" rx="2.5" fill="currentColor" opacity="0.35" />
    <rect x="16" y="22" width="8" height="22" rx="2.5" fill="currentColor" opacity="0.6" />
    <rect x="28" y="12" width="8" height="32" rx="2.5" fill="currentColor" opacity="0.8" />
    <rect x="40" y="4" width="8" height="40" rx="2.5" fill="currentColor" />
    <polyline points="6 28 18 18 30 8 48 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const processPillars = [
  {
    label: "Data",
    headline: "Intelligence at the Core",
    body: "Every workflow starts with clean, structured data. We audit what you have and build pipelines that surface insights automatically.",
    Icon: IconData,
  },
  {
    label: "Automation",
    headline: "Tasks That Run Themselves",
    body: "Repetitive actions become invisible engines. From inbox triage to invoice generation - triggered, executed, and logged without you.",
    Icon: IconAutomation,
  },
  {
    label: "Integration",
    headline: "Your Stack, Unified",
    body: "We connect your CRM, calendar, inbox, and tools into a single coherent system. No duplicate entry. No dropped handoffs.",
    Icon: IconIntegration,
  },
  {
    label: "Growth",
    headline: "Scale Without Headcount",
    body: "AI-powered systems let you take on more clients, serve them faster, and compound value over time - without compounding costs.",
    Icon: IconGrowth,
  },
];

const valueCards = [
  {
    eyebrow: "01",
    title: "Personalized Strategy",
    body: "No off-the-shelf templates. Every system is mapped to your exact business model, your tools, and your definition of success.",
    accent: "text-[#00BF63]",
    borderColor: "border-[#00BF63]/10",
    bg: "bg-white",
  },
  {
    eyebrow: "02",
    title: "Invisible Workflows",
    body: "The best automation you'll never notice. It runs silently in the background - responding, routing, updating - while you focus on strategy.",
    accent: "text-[#00BF63]",
    borderColor: "border-[#00BF63]/10",
    bg: "bg-white",
  },
  {
    eyebrow: "03",
    title: "Data-Driven Results",
    body: "Every system ships with clear metrics. We monitor performance, iterate on logic, and ensure the ROI is always measurable and compounding.",
    accent: "text-[#00BF63]",
    borderColor: "border-[#00BF63]/10",
    bg: "bg-white",
  },
];

// ─── Founder Portrait Placeholder ─────────────────────────────────────────────

const FounderPortrait = () => (
  <div className="relative w-full h-full min-h-[480px] md:min-h-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
    {/* Actual Founder Image */}
    <Image
      src="/Founder-Darius Asante.jpg"
      alt="Darius Asante - Founder of Onyx Automation Agency"
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
    />

    {/* Stronger Dark Gradient Overlay for the text layout */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

    {/* Name and Title Overlay (Bottom Left) */}
    <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 z-10 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-white text-[48px] md:text-[64px] font-bold tracking-tighter leading-[0.85] font-syne">
          Darius <br /> Asante
        </h3>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-white/50 text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase mt-4"
      >
        Founder, Onyx Automation Agency
      </motion.p>
    </div>
  </div>
);

// ─── Section ──────────────────────────────────────────────────────────────────

export function AboutSection() {
  return (
    <div id="about" className="bg-white text-[#040921] font-inter">
      {/* ── SECTION 0: Full-Width Hero Banner (60vh) ── */}
      <div className="w-full h-[60vh] flex flex-col items-center justify-center text-center relative overflow-hidden border-b border-black/10 pt-24">
        {/* User-provided Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/about-picture.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Subtle Dark Overlay to ensure text readability */}
        <div className="absolute inset-0 z-0 bg-black/20" />

        <div className="relative z-10 px-6">
          {/* Decorative Sparkles (SVG icons) */}
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-16 -right-20 text-[#00BF63]/40"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -20, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-10 -left-24 text-[#00BF63]/30"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
            </motion.div>

            <h1 className="text-[56px] md:text-[96px] font-bold tracking-tighter leading-none text-white">
              About Onyx
            </h1>
          </div>

          <p className="max-w-xl mx-auto text-white/70 text-sm md:text-lg font-medium mt-6 px-6">
            Scaling businesses through lean, high-efficiency AI orchestration.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-32 space-y-24 md:space-y-32">
        {/* ── SECTION 1: Centered Header ── */}
        <motion.div
          {...fadeUp(0)}
          className="flex flex-col items-center text-center space-y-5 max-w-3xl mx-auto"
        >
          <span className="text-[#00BF63] text-[11px] font-bold tracking-[0.18em] uppercase">
            The Vision Behind Onyx
          </span>
          <h2 className="text-3xl md:text-[56px] font-bold leading-[1.08] tracking-[-0.03em] text-[#040921]">
            Scaling Businesses Through{" "}
            <span className="text-[#00BF63]">AI Orchestration</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-[1.7] max-w-xl">
            Onyx is built on lean, high-efficiency AI systems that deliver more output than traditional agency headcounts - without the overhead, the delays, or the dependency on you.
          </p>
        </motion.div>

        {/* ── SECTION 2: 4-Column Process Pillars ── */}
        <div>
          <motion.p
            {...fadeUp(0)}
            className="text-gray-400 text-[11px] font-bold tracking-[0.16em] uppercase text-center mb-10"
          >
            The Process
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processPillars.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                {...fadeUp(i * 0.1)}
                className="group relative rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#00BF63]/30 transition-all duration-400 p-6 flex flex-col gap-5 cursor-default hover:shadow-xl"
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-[#00BF63]/10 flex items-center justify-center group-hover:bg-[#00BF63]/20 transition-colors duration-300">
                  <pillar.Icon className="w-6 h-6 text-[#00BF63]" />
                </div>

                {/* Label badge */}
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#00BF63]">
                  {pillar.label}
                </span>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-[16px] font-bold leading-[1.3] tracking-tight text-[#040921]">
                    {pillar.headline}
                  </h3>
                  <p className="text-[13px] leading-[1.65] text-gray-500">
                    {pillar.body}
                  </p>
                </div>

                {/* Hover green accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-[#00BF63] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── SECTION 3: Founder Spotlight ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait */}
          <motion.div {...fadeUp(0)} className="h-full">
            <FounderPortrait />
          </motion.div>

          {/* Bio content */}
          <motion.div {...fadeUp(0.15)} className="flex flex-col gap-7">
            <div>
              <span className="text-[#00BF63] text-[11px] font-bold tracking-[0.18em] uppercase block mb-4">
                The Mission
              </span>
              <h2 className="text-2xl md:text-[42px] font-bold leading-[1.1] tracking-[-0.03em] text-[#040921]">
                Eliminating manual bottlenecks so you can focus on{" "}
                <span className="text-[#00BF63]">high-level strategy.</span>
              </h2>
            </div>

            <p className="text-gray-600 text-[15px] leading-[1.75]">
              Onyx was built on a single conviction: that most service businesses are drowning in work that a machine should be doing. Founders spend their days in their inbox instead of on their vision. We fix that.
            </p>

            <p className="text-gray-600 text-[15px] leading-[1.75]">
              Every system we build is custom-mapped to your business - not a template, not a plugin - a precision-engineered workflow that runs 24/7 so you don&apos;t have to.
            </p>

            {/* Stat strip */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { stat: "40+", label: "Businesses Automated" },
                { stat: "48hrs", label: "Saved Per Month Avg." },
                { stat: "3×", label: "Faster Response Times" },
              ].map((item) => (
                <div key={item.stat} className="border-l-2 border-[#00BF63]/30 pl-4">
                  <p className="text-2xl font-bold text-[#00BF63] tracking-tight">
                    {item.stat}
                  </p>
                  <p className="text-[11px] text-gray-500 leading-[1.4] mt-0.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-1">
              <a
                href="/connect"
                className="inline-flex items-center gap-2 bg-[#00BF63] hover:bg-[#00994f] text-white text-[14px] font-semibold tracking-wide px-6 py-3 rounded-full transition-colors duration-300 shadow-lg shadow-[#00BF63]/20"
              >
                Book a Strategy Call
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="8" x2="13" y2="8" /><polyline points="9 4 13 8 9 12" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── SECTION 4: 3-Column Value Cards ── */}
        <div>
          <motion.div {...fadeUp(0)} className="text-center mb-14 space-y-4">
            <h2 className="text-2xl md:text-[44px] font-bold leading-[1.1] tracking-[-0.03em] text-[#040921]">
              What makes Onyx{" "}
              <span className="text-[#00BF63]">different.</span>
            </h2>
            <p className="text-gray-500 text-base max-w-lg mx-auto leading-[1.7]">
              We help businesses grow faster and leaner - with AI systems that compound in value over time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueCards.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp(i * 0.12)}
                className={`group relative rounded-2xl border ${card.borderColor} bg-gray-50/30 hover:bg-white p-8 flex flex-col gap-5 transition-all duration-400 hover:border-[#00BF63]/40 cursor-default hover:shadow-xl`}
              >
                {/* Number */}
                <span className={`text-[13px] font-mono font-bold ${card.accent}`}>
                  {card.eyebrow}
                </span>

                {/* Green bar accent */}
                <div className="w-8 h-[3px] bg-[#00BF63] rounded-full" />

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-[22px] font-bold leading-[1.2] tracking-tight text-[#040921]">
                    {card.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-gray-500">
                    {card.body}
                  </p>
                </div>

                {/* Corner glow on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#00BF63] opacity-0 group-hover:opacity-[0.05] blur-2xl rounded-full transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
