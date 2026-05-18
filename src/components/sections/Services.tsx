"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ─── Abstract SVG Graphics ───────────────────────────────────────────────────

const CXGraphic = () => (
  <svg width="140" height="120" viewBox="0 0 140 120" fill="none" className="absolute bottom-0 right-0 opacity-25 pointer-events-none">
    <circle cx="110" cy="100" r="60" fill="white" />
    <circle cx="80" cy="115" r="40" fill="white" opacity="0.6" />
    <circle cx="50" cy="105" r="25" fill="white" opacity="0.4" />
    <circle cx="130" cy="70" r="30" fill="white" opacity="0.3" />
  </svg>
);

const SalesGraphic = () => (
  <svg width="140" height="120" viewBox="0 0 140 120" fill="none" className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
    {/* Isometric bar chart style */}
    <rect x="80" y="60" width="28" height="60" rx="4" fill="#00BF63" />
    <rect x="100" y="40" width="28" height="80" rx="4" fill="#00BF63" opacity="0.7" />
    <rect x="120" y="20" width="28" height="100" rx="4" fill="#00BF63" opacity="0.5" />
    <rect x="60" y="80" width="28" height="40" rx="4" fill="#00BF63" opacity="0.4" />
  </svg>
);

const OpsGraphic = () => (
  <svg width="140" height="130" viewBox="0 0 140 130" fill="none" className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
    {/* Stacked cylinders / gears */}
    <ellipse cx="100" cy="90" rx="45" ry="15" fill="#6366f1" />
    <rect x="55" y="70" width="90" height="25" fill="#6366f1" opacity="0.7" />
    <ellipse cx="100" cy="70" rx="45" ry="15" fill="#8b5cf6" />
    <ellipse cx="100" cy="55" rx="30" ry="10" fill="#a78bfa" opacity="0.8" />
    <rect x="70" y="45" width="60" height="15" fill="#7c3aed" opacity="0.5" />
    <ellipse cx="100" cy="45" rx="30" ry="10" fill="#c4b5fd" />
  </svg>
);

const MarketingGraphic = () => (
  <svg width="150" height="130" viewBox="0 0 150 130" fill="none" className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
    {/* Waves / signal ripples */}
    <path d="M20 100 Q60 60 100 100 Q140 140 180 100" stroke="#f59e0b" strokeWidth="3" fill="none" />
    <path d="M10 80 Q60 30 110 80 Q160 130 200 80" stroke="#f59e0b" strokeWidth="3" fill="none" opacity="0.6" />
    <path d="M30 115 Q70 75 110 115 Q150 155 190 115" stroke="#f59e0b" strokeWidth="3" fill="none" opacity="0.3" />
    <circle cx="120" cy="50" r="20" fill="#fbbf24" opacity="0.3" />
    <circle cx="130" cy="50" r="12" fill="#f59e0b" opacity="0.5" />
  </svg>
);

const AdminGraphic = () => (
  <svg width="140" height="130" viewBox="0 0 140 130" fill="none" className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
    {/* Grid of overlapping squares */}
    <rect x="60" y="60" width="45" height="45" rx="6" fill="#ef4444" />
    <rect x="80" y="70" width="45" height="45" rx="6" fill="#ec4899" opacity="0.8" />
    <rect x="50" y="80" width="35" height="35" rx="6" fill="#f97316" opacity="0.6" />
    <circle cx="130" cy="110" r="22" fill="#fbbf24" opacity="0.4" />
    <circle cx="130" cy="110" r="12" fill="#fbbf24" opacity="0.3" />
  </svg>
);

const CTAGraphic = () => (
  <svg width="140" height="130" viewBox="0 0 140 130" fill="none" className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
    {/* Arrow / lightning bolt */}
    <circle cx="100" cy="90" r="50" stroke="#00BF63" strokeWidth="2" fill="none" />
    <circle cx="100" cy="90" r="35" stroke="#00BF63" strokeWidth="2" fill="none" opacity="0.6" />
    <circle cx="100" cy="90" r="20" fill="#00BF63" opacity="0.3" />
    <path d="M88 80 L108 90 L88 100" stroke="#00BF63" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Service Icon Components ──────────────────────────────────────────────────

const IconChat = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconTrendingUp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const IconSettings = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93A10 10 0 0 0 4.93 19.07M4.93 4.93a10 10 0 0 0 14.14 14.14" />
  </svg>
);

const IconMegaphone = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="15.54" y1="8.46" x2="19.07" y2="4.93" />
    <line x1="19.07" y1="19.07" x2="15.54" y2="15.54" />
  </svg>
);

const IconDatabase = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    id: "cx",
    name: "AI Customer Experience",
    eyebrow: "Never miss a customer",
    description: "24/7 intelligent support and instant FAQ responses - without you lifting a finger.",
    bg: "#00BF63",
    textColor: "text-white",
    iconColor: "text-white/80",
    eyebrowColor: "text-white/70",
    arrowColor: "text-white",
    isHero: true,
    Graphic: CXGraphic,
    Icon: IconChat,
  },
  {
    id: "sales",
    name: "Automated Sales Engine",
    eyebrow: "Close deals while you sleep",
    description: "Capture, qualify, and nurture leads from first contact to final proposal - automatically.",
    bg: "#ffffff",
    textColor: "text-theme-ink",
    iconColor: "text-theme-muted",
    eyebrowColor: "text-theme-green",
    arrowColor: "text-theme-ink",
    isHero: false,
    Graphic: SalesGraphic,
    Icon: IconTrendingUp,
  },
  {
    id: "ops",
    name: "Smart Operations",
    eyebrow: "Run tighter, not harder",
    description: "Automated bookings, staff notifications, and real-time tracking. Invisible, reliable, always on.",
    bg: "#ffffff",
    textColor: "text-theme-ink",
    iconColor: "text-theme-muted",
    eyebrowColor: "text-theme-green",
    arrowColor: "text-theme-ink",
    isHero: false,
    Graphic: OpsGraphic,
    Icon: IconSettings,
  },
  {
    id: "marketing",
    name: "Growth & Marketing",
    eyebrow: "Reach more, do less",
    description: "Automated social posts, email campaigns, and content repurposing that works 24/7.",
    bg: "#ffffff",
    textColor: "text-theme-ink",
    iconColor: "text-theme-muted",
    eyebrowColor: "text-theme-green",
    arrowColor: "text-theme-ink",
    isHero: false,
    Graphic: MarketingGraphic,
    Icon: IconMegaphone,
  },
  {
    id: "admin",
    name: "Back-Office Automation",
    eyebrow: "Eliminate the boring work",
    description: "Data entry, CRM updates, invoice generation - all handled automatically, every day.",
    bg: "#ffffff",
    textColor: "text-theme-ink",
    iconColor: "text-theme-muted",
    eyebrowColor: "text-theme-green",
    arrowColor: "text-theme-ink",
    isHero: false,
    Graphic: AdminGraphic,
    Icon: IconDatabase,
  },
  {
    id: "custom",
    name: "Custom Automation",
    eyebrow: "Let's talk",
    description: "Got a unique process? We'll map it, build it, and deploy it - tailored entirely to you.",
    bg: "#0C0C0C",
    textColor: "text-white",
    iconColor: "text-white/40",
    eyebrowColor: "text-theme-green",
    arrowColor: "text-theme-green",
    isHero: false,
    isCTA: true,
    Graphic: CTAGraphic,
    Icon: IconZap,
  },
];

// ─── Card Component ────────────────────────────────────────────────────────────

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { Graphic, Icon } = service;

  return (
    <Link href="/connect" className="block h-full" aria-label={`${service.name} inquiry form`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: index * 0.07, ease: smoothEase }}
        whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
        className="group relative overflow-hidden rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[220px] cursor-pointer h-full"
        style={{
          backgroundColor: service.bg,
          boxShadow: service.isHero
            ? "0 8px 40px rgba(0, 191, 99, 0.25)"
            : service.isCTA
              ? "0 8px 40px rgba(0,0,0,0.3)"
              : "0 2px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.05)",
        }}
      >
        {/* Top row: eyebrow + icon */}
        <div className="flex items-start justify-between">
          <p className={`text-[10px] md:text-[11px] font-semibold tracking-[0.12em] uppercase ${service.eyebrowColor}`}>
            {service.eyebrow}
          </p>
          <span className={`${service.iconColor} mt-0.5`}>
            <Icon />
          </span>
        </div>

        {/* Bottom content: title, description, arrow */}
        <div>
          <h3
            className={`text-[20px] md:text-[22px] font-bold leading-[1.15] tracking-tight mb-2 ${service.textColor} font-syne`}
          >
            {service.name}
          </h3>
          <p
            className={`text-[13px] md:text-[13.5px] leading-[1.55] mb-5 max-w-[85%] ${service.isHero
                ? "text-white/75"
                : service.isCTA
                  ? "text-white/50"
                  : "text-theme-body"
              }`}
          >
            {service.description}
          </p>

          {/* Arrow */}
          <span
            className={`inline-flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300
              ${service.isHero
                ? "border-white/40 text-white group-hover:bg-white group-hover:text-theme-green"
                : service.isCTA
                  ? "border-theme-green/50 text-theme-green group-hover:bg-theme-green group-hover:text-white"
                  : "border-black/10 text-theme-ink group-hover:bg-theme-ink group-hover:text-white"
              }
            `}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="8" x2="13" y2="8" /><polyline points="9 4 13 8 9 12" />
            </svg>
          </span>
        </div>

        {/* Abstract background graphic */}
        <Graphic />
      </motion.div>
    </Link>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Services() {
  return (
    <section id="services" className="bg-theme-off-white py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="mb-12 md:mb-14"
        >
          <span className="text-theme-green text-[11px] font-bold tracking-[0.15em] uppercase block mb-4">
            What We Build
          </span>
          <h2 className="text-3xl md:text-[52px] leading-[1.05] font-bold tracking-[-0.03em] text-theme-ink max-w-none md:whitespace-nowrap">
            <span className="font-normal">Built to run</span>{" "}
            <span className="relative inline-block px-3 py-1">
              <span className="absolute inset-0 bg-[#00BF63] rounded-lg -rotate-2 transform scale-y-110" />
              <span className="relative z-10 text-white font-inter">without you.</span>
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
