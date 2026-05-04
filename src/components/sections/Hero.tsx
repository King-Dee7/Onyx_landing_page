"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Hero() {
  useEffect(() => {
    const bgA = document.getElementById("bgA");
    const bgB = document.getElementById("bgB");
    const overlay = document.getElementById("bgOverlay");
    if (!bgA || !bgB || !overlay) return;

    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const frames = [
      { src: "/onyx-bg.png", overlayOpacity: 1 },
      { src: "/geometry.png", overlayOpacity: 0.92 },
      { src: "/abstract.png", overlayOpacity: 0.9 },
      { src: "/white.png", overlayOpacity: 0.72 },
    ];

    let visible = bgA;
    let hidden = bgB;
    let index = 0;

    function setBg(el: HTMLElement, src: string) {
      el.style.backgroundImage = `url('${src}')`;
    }

    function setOverlay(opacity: number) {
      if (overlay) {
        overlay.style.setProperty("--overlay-opacity", String(opacity));
      }
    }

    setBg(visible, frames[index].src);
    setOverlay(frames[index].overlayOpacity);

    if (reduceMotion) return;

    const intervalMs = 3000;

    function preloadAll() {
      return Promise.all(
        frames.map((frame) => {
          return new Promise((resolve) => {
            const img = new window.Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = frame.src;
          });
        })
      );
    }

    let timeoutId: NodeJS.Timeout;

    function advance() {
      index = (index + 1) % frames.length;

      setBg(hidden, frames[index].src);
      setOverlay(frames[index].overlayOpacity);

      hidden.classList.add("is-visible");
      visible.classList.remove("is-visible");

      const tmp = visible;
      visible = hidden;
      hidden = tmp;

      timeoutId = setTimeout(advance, intervalMs);
    }

    preloadAll().then(() => {
      timeoutId = setTimeout(advance, intervalMs);
    });

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div id="bgA" className="bg-layer is-visible"></div>
          <div id="bgB" className="bg-layer"></div>
          <div id="bgOverlay" className="bg-overlay"></div>
        </div>

        <div className="relative z-10">
          <section className="pt-32 md:pt-56 pb-24 md:pb-36">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center relative">
              <h1 className="text-3xl md:text-[4.25rem] font-bold leading-[1.2] md:leading-[1.1] tracking-tight mb-6 relative">
                <span className="block text-[#00BF63]">
                  Automate Your Growth with AI
                </span>
                <span className="block font-semibold">
                  Scale without increasing
                  <br />
                  headcount.
                </span>
              </h1>

              <p className="max-w-xl text-gray-400 text-xs md:text-base leading-relaxed mb-10 px-4 md:px-0">
                Turn your everyday bottlenecks into done-for-you AI workflows
                that actually ship and make money, without you becoming a tech
                expert.
              </p>

              <Link href="/connect" passHref>
                <button className="group bg-white text-black px-6 py-3 md:px-8 md:py-3.5 rounded-xl font-semibold flex items-center gap-3 transition-colors duration-200 border border-black/10 hover:border-[#00BF63]/60 hover:bg-[#00BF63] hover:text-white active:bg-[#00BF63] active:text-white text-sm md:text-base">
                  start my automation journey
                  <span className="bg-black/5 text-black rounded-full p-1 shadow-sm transition-colors duration-200 group-hover:bg-white group-hover:text-[#00BF63] group-active:bg-white group-active:text-[#00BF63]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </section>

          <div className="relative z-10 h-16 md:h-24">
            <div className="absolute bottom-0 left-1/2 h-[120px] md:h-[180px] w-[200%] md:w-[160%] -translate-x-1/2 rounded-t-[100%] bg-theme-off-white"></div>
          </div>
        </div>
      </div>

      <section className="bg-theme-off-white text-gray-900 pt-10 md:pt-10 pb-12 md:pb-16 px-6 relative z-30 -mt-16 md:-mt-24">
        <div className="max-w-6xl mx-auto w-full relative z-10 mb-14">
          <ScrollReveal width="100%">
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-black/10">
              <div className="flex flex-col items-center justify-center pt-8 md:pt-0 text-center">
                <div className="text-[#00BF63] text-4xl md:text-6xl font-extrabold tracking-tight">
                  <AnimatedCounter value={0} suffix="s" />
                </div>
                <div className="mt-2 text-xs md:text-sm font-semibold text-[#040921]">
                  Response Time
                </div>
                <div className="mt-1 text-[10px] md:text-xs text-gray-500">
                  Instant lead engagement
                </div>
              </div>
              <div className="flex flex-col items-center justify-center pt-8 md:pt-0 text-center">
                <div className="text-[#00BF63] text-4xl md:text-6xl font-extrabold tracking-tight">
                  <AnimatedCounter value={85} suffix="%" />
                </div>
                <div className="mt-2 text-xs md:text-sm font-semibold text-[#040921]">
                  Admin Eliminated
                </div>
                <div className="mt-1 text-[10px] md:text-xs text-gray-500">
                  Time reclaimed for growth
                </div>
              </div>
              <div className="flex flex-col items-center justify-center pt-8 md:pt-0 text-center">
                <div className="text-[#00BF63] text-4xl md:text-6xl font-extrabold tracking-tight">
                  <AnimatedCounter value={24} suffix="/7" />
                </div>
                <div className="mt-2 text-xs md:text-sm font-semibold text-[#040921]">
                  Availability
                </div>
                <div className="mt-1 text-[10px] md:text-xs text-gray-500">
                  Never miss a weekend lead
                </div>
              </div>
              <div className="flex flex-col items-center justify-center pt-8 md:pt-0 text-center">
                <div className="text-[#00BF63] text-4xl md:text-6xl font-extrabold tracking-tight">
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <div className="mt-2 text-xs md:text-sm font-semibold text-[#040921]">
                  Handoff Accuracy
                </div>
                <div className="mt-1 text-[10px] md:text-xs text-gray-500">
                  Zero dropped balls
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
