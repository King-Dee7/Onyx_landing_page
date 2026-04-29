import React from "react";
import { content } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, Clock, AlertTriangle, BrainCircuit } from "lucide-react";

// ─── Abstract Graphics for Problem Cards ─────────────────────────────────────

const TimeGraphic = () => (
  <svg width="140" height="120" viewBox="0 0 140 120" fill="none" className="absolute bottom-0 right-0 opacity-[0.15] pointer-events-none">
    <circle cx="100" cy="100" r="50" fill="transparent" stroke="#00BF63" strokeWidth="4" strokeDasharray="10 10" />
    <circle cx="100" cy="100" r="35" fill="#00BF63" opacity="0.2" />
    <path d="M100 70 V100 L120 110" stroke="#00BF63" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const ScaleGraphic = () => (
  <svg width="140" height="120" viewBox="0 0 140 120" fill="none" className="absolute bottom-0 right-0 opacity-[0.15] pointer-events-none">
    <path d="M40 120 V80 H70 V50 H100 V20 H130 V120 Z" fill="#00BF63" opacity="0.3" />
    <path d="M70 120 V100 H100 V70 H130 V120 Z" fill="#00BF63" opacity="0.6" />
  </svg>
);

const MentalGraphic = () => (
  <svg width="140" height="120" viewBox="0 0 140 120" fill="none" className="absolute bottom-0 right-0 opacity-[0.20] pointer-events-none">
    {/* Cascading/Overlapping messages to represent mental load and missed notifications */}
    <rect x="60" y="40" width="50" height="36" rx="8" fill="#00BF63" opacity="0.25" transform="rotate(-15 60 40)" />
    <rect x="75" y="60" width="50" height="36" rx="8" fill="#00BF63" opacity="0.5" transform="rotate(-5 75 60)" />
    <rect x="90" y="80" width="50" height="36" rx="8" fill="#00BF63" />
    
    {/* Notification dot */}
    <circle cx="136" cy="76" r="6" fill="#00BF63" stroke="#ffffff" strokeWidth="2" />
    
    {/* Unread indicators inside the front bubble */}
    <circle cx="105" cy="98" r="2.5" fill="white" />
    <circle cx="115" cy="98" r="2.5" fill="white" />
    <circle cx="125" cy="98" r="2.5" fill="white" />
  </svg>
);

export function ProblemSection() {
  const cardData = [
    { eyebrow: "Time Drain", Icon: Clock, Graphic: TimeGraphic },
    { eyebrow: "Scaling Limit", Icon: AlertTriangle, Graphic: ScaleGraphic },
    { eyebrow: "Mental Load", Icon: BrainCircuit, Graphic: MentalGraphic },
  ];

  return (
    <section className="bg-theme-off-white pb-24 pt-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center md:max-w-5xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-[52px] leading-[1.1] font-normal text-theme-ink tracking-[-0.02em] mb-6 relative z-10">
              <span className="relative inline-block px-2 py-0.5 text-white font-semibold before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[#00BF63] before:rounded-md before:transform before:-rotate-1 before:scale-y-110 before:origin-center">
                AI-powered
              </span>{" "}
              workflows that stay invisible,
              <br className="hidden md:block" /> and remove the weight of manual work.
            </h2>
          </ScrollReveal>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-5 text-left overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">
          {content.problem.cards.map((card, i) => {
            const { eyebrow, Icon, Graphic } = cardData[i];

            return (
              <ScrollReveal 
                key={i} 
                delay={i * 0.1} 
                className="h-full flex-shrink-0 w-[85vw] md:w-full snap-center"
              >
                <div
                  className="group relative overflow-hidden rounded-3xl p-7 flex flex-col min-h-[340px] cursor-pointer transition-transform duration-300 hover:-translate-y-[5px]"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.05)",
                  }}
                >
                  <Graphic />

                  {/* Top row: eyebrow + icon */}
                  <div className="flex items-start justify-between relative z-10">
                    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-theme-green">
                      {eyebrow}
                    </p>
                    <span className="text-theme-muted mt-0.5">
                      <Icon strokeWidth={1.8} size={22} />
                    </span>
                  </div>

                  {/* Content starts at a fixed point for alignment */}
                  <div className="relative z-10 pt-10">
                    <h3 className="text-[22px] font-bold leading-[1.15] tracking-tight mb-2 text-theme-ink font-syne min-h-[52px]">
                      {card.title}
                    </h3>
                    <p className="text-[13.5px] leading-[1.55] mb-5 max-w-[90%] text-theme-body font-inter">
                      {card.description}
                    </p>
                  </div>

                  {/* Arrow pushed to bottom */}
                  <div className="mt-auto relative z-10">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-black/10 text-theme-ink transition-all duration-300 group-hover:bg-theme-ink group-hover:text-white">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
