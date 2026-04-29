"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Wrench, Rocket } from "lucide-react";




{/* Magnifying glass - maps to discovery, auditing, understanding your business */}
const AbstractDiscover = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 6C12.268 6 6 12.268 6 20C6 27.732 12.268 34 20 34C27.732 34 34 27.732 34 20C34 12.268 27.732 6 20 6ZM20 13C15.582 13 12 16.582 12 21C12 25.418 15.582 29 20 29C24.418 29 28 25.418 28 21C28 16.582 24.418 13 20 13Z"
            fill="currentColor"
        />
        <rect x="31" y="29" width="5" height="14" rx="2.5" fill="currentColor" transform="rotate(-45 31 36)" />
    </svg>
);

{/* 2×2 interlocked blocks - maps to designing, building, and structuring workflows */}
const AbstractBuild = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
        <rect x="4"  y="4"  width="18" height="18" rx="4" fill="currentColor" />
        <rect x="26" y="4"  width="18" height="18" rx="4" fill="currentColor" fillOpacity="0.45" />
        <rect x="4"  y="26" width="18" height="18" rx="4" fill="currentColor" fillOpacity="0.45" />
        <rect x="26" y="26" width="18" height="18" rx="4" fill="currentColor" />
    </svg>
);

{/* Rising bar chart - maps to launching, monitoring metrics, and continuous growth */}
const AbstractLaunch = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
        <rect x="4"  y="30" width="10" height="14" rx="3" fill="currentColor" fillOpacity="0.35" />
        <rect x="19" y="18" width="10" height="26" rx="3" fill="currentColor" fillOpacity="0.65" />
        <rect x="34" y="6"  width="10" height="38" rx="3" fill="currentColor" />
    </svg>
);


const steps = [
    {
        number: "01",
        Icon: AbstractDiscover,
        title: "Discover & Diagnose",
        subtitle: "Understand first, automate second.",
        bullets: [
            "We learn how your business actually works: goals, constraints, handoffs, and what a 'win' looks like.",
            "We map your tech stack and where data lives: CRMs, inboxes, spreadsheets, internal tools.",
            "We audit processes to find real bottlenecks and decide what should and shouldn't be automated.",
        ],
        bg: "bg-[#F0EDE6]",
        text: "text-[#111]",
        subtitleColor: "text-theme-green",
        bulletColor: "text-[#555]",
        dotColor: "bg-theme-green",
        iconBg: "",
        iconColor: "text-[#111]",
        numColor: "text-black/25",
    },
    {
        number: "02",
        Icon: AbstractBuild,
        title: "Design, Build & Validate",
        subtitle: "Custom solutions, tested before launch.",
        bullets: [
            "We prioritize high-impact opportunities and decide where AI helps, and where it doesn't.",
            "We design and build custom workflows, test different approaches on real data, and explain our choices in plain language.",
            "We run evaluations in a real-world environment before full rollout.",
        ],
        bg: "bg-theme-green",
        text: "text-white",
        subtitleColor: "text-white/70",
        bulletColor: "text-white/65",
        dotColor: "bg-white/50",
        iconBg: "",
        iconColor: "text-white",
        numColor: "text-white/25",
    },
    {
        number: "03",
        Icon: AbstractLaunch,
        title: "Launch, Monitor & Optimize",
        subtitle: "Continuous improvement, not a one-off project.",
        bullets: [
            "We launch into production with clear success metrics and safeguards.",
            "We monitor performance, collect feedback from your team and customers, and fix issues quickly.",
            "We continuously refine prompts, logic, and models so the system improves as your business evolves.",
        ],
        bg: "bg-white/[0.04] backdrop-blur-xl border border-white/10",
        text: "text-white",
        subtitleColor: "text-theme-green",
        bulletColor: "text-white/50",
        dotColor: "bg-theme-green",
        iconBg: "",
        iconColor: "text-theme-green",
        numColor: "text-white/10",
    },
];

export function HowItWorks() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <section
            id="blueprint"
            className="bg-[#0A0C10] text-white py-24 md:py-32 relative overflow-hidden"
        >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-theme-green opacity-[0.025] blur-[180px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

                {/* ── Editorial Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.85, ease: "easeOut" }}
                    className="flex flex-col items-center text-center space-y-6 mb-16 md:mb-20"
                >

                    
                    <h2 className="text-3xl md:text-[56px] font-bold leading-[1.1] tracking-[-0.03em] max-w-none md:whitespace-nowrap">
                        Digital Architecture for <span className="text-theme-green">Real Business</span>
                    </h2>

                    <p className="text-white/40 text-base md:text-lg font-medium md:whitespace-nowrap">
                        Deep-dive into how we turn manual bottlenecks into invisible, automated flows.
                    </p>
                </motion.div>

                {/* ── Three Process Cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
                            onMouseEnter={() => setHoveredCard(i)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className={`
                                rounded-[28px] p-6 md:p-10 flex flex-col min-h-[420px]
                                transition-all duration-500 ease-out select-none
                                ${step.bg}
                                ${hoveredCard !== null && hoveredCard !== i
                                    ? "opacity-40 scale-[0.98]"
                                    : "opacity-100 scale-100"}
                            `}
                        >
                            {/* Top row: icon + step number */}
                            <div className="flex items-start justify-between mb-8">
                                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${step.iconBg}`}>
                                    <step.Icon className={`w-10 h-10 ${step.iconColor}`} />
                                </div>
                                <span className={`text-base font-mono font-semibold ${step.numColor}`}>
                                    {step.number}
                                </span>
                            </div>

                            {/* Title + Subtitle */}
                            <div className="mb-6">
                                <h3 className={`text-lg md:text-[26px] font-bold mb-2 leading-tight tracking-tight ${step.text} font-syne`}>
                                    {step.title}
                                </h3>
                                <p className={`text-[14px] md:text-[15px] font-semibold ${step.subtitleColor}`}>
                                    {step.subtitle}
                                </p>
                            </div>

                            {/* Bullet points */}
                            <div className="space-y-4 mt-auto">
                                {step.bullets.map((bullet, j) => (
                                    <div key={j} className="flex items-start gap-3">
                                        <span className={`w-[3px] h-[3px] rounded-full mt-[10px] shrink-0 ${step.dotColor}`} />
                                        <p className={`text-[14px] md:text-[15px] leading-[1.6] ${step.bulletColor}`}>
                                            {bullet}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
