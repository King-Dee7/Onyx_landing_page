"use client";

import React from "react";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { X, Check } from "lucide-react";

export function FrictionFreedom() {
  const frictionPoints = [
    {
      title: "Manual Data Entry",
      description: "Hours spent daily copying info between spreadsheets.",
      icon: <X className="text-red-500" size={24} />,
    },
    {
      title: "Delayed Lead Response",
      description: "Leads go cold because you're too busy to reply instantly.",
      icon: <X className="text-red-500" size={24} />,
    },
    {
      title: "Forgotten Follow-ups",
      description: "Revenue lost because prospects fall through the cracks.",
      icon: <X className="text-red-500" size={24} />,
    },
    {
      title: "Mental Overload",
      description: "Always thinking about 'the next task' instead of growing.",
      icon: <X className="text-red-500" size={24} />,
    },
  ];

  const freedomPoints = [
    {
      title: "Instant Syncing",
      description: "Every piece of data flows automatically where it belongs.",
      icon: <Check className="text-[#00BF63]" size={24} />,
    },
    {
      title: "0s Response Time",
      description: "AI captures and qualifies leads the second they land.",
      icon: <Check className="text-[#00BF63]" size={24} />,
    },
    {
      title: "Automated Nurture",
      description: "Systematic follow-ups that close deals while you sleep.",
      icon: <Check className="text-[#00BF63]" size={24} />,
    },
    {
      title: "Pure Freedom",
      description: "Reclaim 20+ hours a week for high-level strategy.",
      icon: <Check className="text-[#00BF63]" size={24} />,
    },
  ];

  return (
    <section className="bg-[#050a07] py-24 border-y border-white/5 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00BF63]/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center md:max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <EyebrowLabel className="mx-auto border-[#00BF63]/30 text-[#00BF63]">
              Friction vs Freedom
            </EyebrowLabel>
            <h2 className="text-4xl md:text-[52px] leading-[1.05] font-semibold text-white tracking-[-0.03em] mb-6 mt-4">
              Stop fighting your business.
              <br />
              Start scaling it.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Friction Card (Left) */}
          <ScrollReveal direction="left">
            <div className="bg-black/40 backdrop-blur-md border border-red-500/20 rounded-[2.5rem] p-8 md:p-12 hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-red-500/10 p-3 rounded-2xl">
                  <X className="text-red-500" size={32} />
                </div>
                <h3 className="text-3xl font-semibold text-white">
                  The Friction
                </h3>
              </div>

              <div className="space-y-10">
                {frictionPoints.map((point, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="flex-shrink-0 mt-1">{point.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {point.title}
                      </h4>
                      <p className="text-gray-400 text-base leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Freedom Card (Right) */}
          <ScrollReveal direction="right">
            <div className="bg-[#1B3022]/20 backdrop-blur-md border border-[#00BF63]/30 rounded-[2.5rem] p-8 md:p-12 hover:shadow-2xl hover:shadow-[#00BF63]/10 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00BF63]/10 blur-3xl rounded-full" />

              <div className="flex items-center gap-4 mb-10">
                <div className="bg-[#00BF63]/20 p-3 rounded-2xl">
                  <Check className="text-[#00BF63]" size={32} />
                </div>
                <h3 className="text-3xl font-semibold text-white">
                  The Freedom
                </h3>
              </div>

              <div className="space-y-10">
                {freedomPoints.map((point, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="flex-shrink-0 mt-1">{point.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#00BF63] mb-2">
                        {point.title}
                      </h4>
                      <p className="text-gray-400 text-base leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
