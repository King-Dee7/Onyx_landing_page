"use client";

import React, { useEffect } from "react";
import Image from "next/image";
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
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div id="bgA" className="bg-layer is-visible"></div>
          <div id="bgB" className="bg-layer"></div>
          <div id="bgOverlay" className="bg-overlay"></div>
        </div>

        <div className="relative z-10">
          <section className="pt-32 md:pt-56 pb-24 md:pb-48">
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
                <button className="group bg-white text-black px-6 py-3 md:px-8 md:py-3.5 rounded-xl font-semibold flex items-center gap-3 transition-colors duration-200 mb-16 border border-black/10 hover:border-[#00BF63]/60 hover:bg-[#00BF63] hover:text-white active:bg-[#00BF63] active:text-white text-sm md:text-base">
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

              <div className="relative w-full max-w-5xl mx-auto hidden md:flex flex-col md:flex-row justify-center items-center md:items-end gap-8 md:gap-12 mt-8 h-auto md:h-[450px]">
                <div className="w-full max-w-[320px] md:w-[280px] relative z-20 md:mb-12 md:-translate-y-40 lg:-translate-y-48">
                  <div className="float-a bg-white text-gray-900 rounded-[2rem] p-5 md:p-6 w-full shadow-2xl">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-bold text-base md:text-lg leading-tight">
                          Your Airlume
                          <br />
                          Points
                        </h3>
                        <p className="text-[10px] text-gray-500 mt-1">
                          Last Update
                        </p>
                      </div>
                      <div className="text-[#00BF63]/70 relative">
                        <svg
                          className="w-7 h-7 md:w-8 md:h-8 absolute -top-2 -right-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l2.4 7.6H22l-6 4.8 2.4 7.6-6-4.8-6 4.8 2.4-7.6-6-4.8h7.6z" />
                        </svg>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-3xl md:text-4xl font-extrabold text-[#00BF63]">
                        13,200
                      </span>
                      <span className="bg-[#064b2a] text-white text-[8px] md:text-[9px] px-2 py-1 rounded-full font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[#00BF63] rounded-full inline-block"></span>{" "}
                        Ready
                      </span>
                    </div>
                    <p className="text-[10px] md:text-xs text-gray-500 font-medium mb-6">
                      Points Available
                    </p>

                    <div className="flex items-center justify-between bg-[#00BF63]/10 rounded-2xl p-2 md:p-2.5 border border-[#00BF63]/15">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="bg-[#00BF63] rounded-full p-1.5 md:p-2">
                          <svg
                            className="w-2.5 h-2.5 md:w-3 md:h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[10px] md:text-[11px] font-bold">
                            Next Reward
                          </p>
                          <p className="text-[8px] md:text-[9px] text-gray-500">
                            $20 off at 900 pts
                          </p>
                        </div>
                      </div>
                      <button aria-label="Dismiss notification" className="bg-white shadow-sm border border-gray-100 rounded-full p-1 md:p-1.5">
                        <svg
                          className="w-2.5 h-2.5 md:w-3 md:h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="float-b bg-white text-gray-900 rounded-[2.5rem] p-1.5 md:p-2 w-full max-w-[340px] md:w-[340px] card-shadow relative z-30 flex flex-col">
                  <div className="p-5 md:p-6 pb-2 text-center flex-1">
                    <span className="inline-block border border-gray-200 text-[10px] md:text-[11px] font-semibold px-4 py-1.5 rounded-full text-gray-600 mb-5">
                      Airlume Smart Search
                    </span>
                    <h2 className="text-xl md:text-[22px] font-bold leading-[1.2] mb-6">
                      Scanning 200+
                      <br />
                      <span className="text-gray-500 font-medium">
                        Airlines In Real-Time
                      </span>
                    </h2>

                    <div className="flex items-center justify-center md:justify-start gap-4 text-left">
                      <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-[4px] md:border-[5px] border-[#00BF63]/10 border-t-[#00BF63] border-r-[#00BF63] border-b-[#00BF63]">
                        <span className="font-bold text-xs md:text-sm">94%</span>
                      </div>
                      <p className="text-[10px] md:text-xs text-gray-600 leading-snug font-medium">
                        Price expected to drop
                        <br />
                        for sydney flight in three
                        <br />
                        days <span className="text-orange-500">🔥</span>
                      </p>
                    </div>
                  </div>

                  <div className="relative mt-5 rounded-t-xl rounded-b-[2rem] overflow-hidden h-[160px] md:h-[180px]">
                    <Image
                      src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600"
                      alt="Airlume Smart Search predicting flight prices for a sunset flight"
                      fill
                      className="object-cover"
                      priority
                    />

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-full p-1.5 pr-4 flex items-center gap-2 shadow-lg w-[85%] border border-white">
                      <div className="flex -space-x-1.5">
                        <Image
                          className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-white object-cover"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100"
                          alt=""
                          width={24}
                          height={24}
                          aria-hidden="true"
                          priority
                        />
                        <Image
                          className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-white object-cover"
                          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100"
                          alt=""
                          width={24}
                          height={24}
                          aria-hidden="true"
                          priority
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-[9px] md:text-[10px] leading-tight">
                          90% Users Satisfied
                        </p>
                        <p className="text-[7px] md:text-[8px] text-gray-500 leading-tight">
                          Top 5% flyers saved $150 last month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full max-w-[320px] md:w-[280px] relative z-20 md:mb-12 md:-translate-y-40 lg:-translate-y-48">
                  <div className="float-c glass-solid rounded-[2rem] p-5 md:p-6 w-full shadow-2xl">
                    <div className="inline-flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1 mb-6 border border-white/10">
                      <svg
                        className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#00BF63]/70"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[10px] md:text-[11px] font-semibold text-gray-200 tracking-wide">
                        Best Deal Found
                      </span>
                    </div>

                    <p className="text-[10px] md:text-[11px] text-gray-400 mb-1 font-medium">
                      Last Update
                    </p>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                        NYC
                      </h3>
                      <svg
                        className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                        LAX
                      </h3>
                    </div>
                    <p className="text-base md:text-lg font-medium mb-1">
                      Only <span className="text-white font-bold">$179</span>
                    </p>
                    <p className="text-[9px] md:text-[10px] text-gray-400 mb-6">
                      Saved 28% Using AI Prediction
                    </p>

                    <div className="relative h-16 md:h-20 w-full overflow-hidden mt-2">
                      <div className="dashed-curve"></div>
                      <div className="absolute right-[15%] top-[10%] rotate-45">
                        <svg
                          className="w-4 h-4 md:w-5 md:h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                        </svg>
                      </div>
                    </div>

                    <button aria-label="Refresh smart pricing algorithm" className="absolute bottom-6 left-6 bg-white text-black rounded-full p-2 md:p-2.5 shadow-lg hover:bg-gray-100 transition">
                      <svg
                        className="w-3.5 h-3.5 md:w-4 md:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
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
