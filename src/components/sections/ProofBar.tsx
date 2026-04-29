import React from "react";
import { content } from "@/lib/content";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ProofBar() {
  return (
    <section className="bg-theme-off-white border-y border-theme-border py-12">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal width="100%">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-theme-border">
            {content.proof.map((item, i) => {
              // Extract number and text parts for the animated counter
              const numberMatch = item.stat.match(/(\d+)/);
              const number = numberMatch ? parseInt(numberMatch[1], 10) : 0;
              const prefix = item.stat.split(number.toString())[0] || "";
              const suffix = item.stat.split(number.toString())[1] || "";

              return (
                <div key={i} className="flex flex-col items-center justify-center pt-8 md:pt-0 text-center">
                  <div className="text-4xl md:text-5xl font-semibold text-theme-green mb-2">
                    <AnimatedCounter value={number} prefix={prefix} suffix={suffix} />
                  </div>
                  <div className="text-sm text-theme-muted font-inter">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
