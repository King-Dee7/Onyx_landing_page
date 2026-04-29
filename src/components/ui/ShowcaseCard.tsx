"use client";

import React from "react";
import { motion } from "framer-motion";

export function ShowcaseCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-[400px] rounded-[32px] bg-[#0A0C10] border border-white/10 p-6 shadow-2xl flex flex-col font-inter"
    >
      {/* 1: Top Pill Badge */}
      <div className="flex justify-center mb-6">
        <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[13px] font-medium text-white/70">
          Onyx Workflow Engine
        </span>
      </div>

      {/* 2: Main Headline */}
      <div className="text-center mb-8 px-2">
        <h2 className="text-[28px] leading-[1.15] font-bold text-white tracking-tight">
          Qualifying 500+
          <br />
          <span className="text-white/60">Leads In Real-Time</span>
        </h2>
      </div>

      {/* 3: Middle Metric Section */}
      <div className="flex items-center gap-5 mb-8 px-2">
        {/* Circular Progress (Donut Chart) */}
        <div className="relative shrink-0 w-20 h-20 flex items-center justify-center">
          {/* Background Track */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="34"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="6"
            />
            {/* Progress indicator (99.8%) */}
            <circle
              cx="40"
              cy="40"
              r="34"
              fill="none"
              stroke="#00BF63"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="213"
              strokeDashoffset="2"
              className="drop-shadow-[0_0_8px_rgba(0,191,99,0.5)]"
            />
          </svg>
          <span className="text-[17px] font-bold text-white">99.8%</span>
        </div>

        {/* Metric Text */}
        <p className="text-[14px] leading-[1.5] text-white/50">
          Accuracy rate on automated invoice data extraction{" "}
          <span className="inline-block animate-pulse text-[#00BF63]">⚡</span>
        </p>
      </div>

      {/* 4 & 5: Bottom Visual & Overlay Badge */}
      <div className="relative w-full h-[220px] rounded-2xl overflow-hidden bg-[#111318] border border-white/5 mt-auto flex items-center justify-center">
        
        {/* Abstract Glassmorphic Graphic */}
        <div className="absolute inset-0 opacity-40">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="card-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#card-grid)" />
          </svg>
          
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-[#00BF63] opacity-20 blur-[40px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-[#00BF63] opacity-10 blur-[50px] rounded-full" />
          
          <motion.div 
            animate={{ y: [0, -5, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[60%] w-20 h-20 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center justify-center shadow-lg"
          >
            <div className="w-8 h-1 bg-white/20 rounded-full" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 5, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-[30%] -translate-y-[30%] w-24 h-24 rounded-xl border border-[#00BF63]/30 bg-[#00BF63]/[0.05] backdrop-blur-xl flex items-center justify-center shadow-xl z-10"
          >
            <div className="flex gap-1.5">
              <div className="w-1.5 h-6 bg-[#00BF63] rounded-full animate-pulse" />
              <div className="w-1.5 h-10 bg-[#00BF63] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-1.5 h-4 bg-[#00BF63] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </motion.div>
        </div>

        {/* 5: Overlay Badge */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px]">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 border border-white/20">
            <div className="flex -space-x-2 shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#111] border-2 border-white flex items-center justify-center z-20">
                 <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#00BF63] border-2 border-white flex items-center justify-center z-10">
                 <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[#111] text-[13px] font-bold leading-tight">Instant Handoffs</span>
              <span className="text-[#555] text-[11px] font-medium leading-tight mt-0.5">Zero manual data entry required</span>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
