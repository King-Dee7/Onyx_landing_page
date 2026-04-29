import React from "react";
import { content } from "@/lib/content";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-theme-dark text-white py-24 border-y border-theme-border-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-theme-green opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center md:max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <EyebrowLabel className="mx-auto text-theme-green">{content.testimonials.eyebrow}</EyebrowLabel>
            <h2 className="text-4xl md:text-[52px] leading-[1.05] font-semibold mb-6">
              {content.testimonials.headline}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {content.testimonials.cards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="bg-theme-dark-surface border border-theme-border-dark rounded-[16px] p-8 h-full flex flex-col hover:border-theme-green/30 transition-colors">
                <div className="text-theme-green text-5xl font-serif leading-none mb-4 opacity-50">"</div>
                <p className="text-lg md:text-xl leading-[1.4] mb-8 flex-grow">
                  {card.quote}
                </p>
                <div className="mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white">{card.author}</p>
                      <p className="text-sm font-inter text-theme-muted">{card.role}</p>
                    </div>
                    <div className="bg-theme-green border border-theme-green-dark text-white px-3 py-1 rounded-full text-xs font-semibold font-inter flex items-center shadow-sm">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 opacity-80 animate-pulse" />
                      {card.outcome}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
