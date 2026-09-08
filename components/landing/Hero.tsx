"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Compass, ShieldCheck, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 px-6 sm:px-8 overflow-hidden bg-[#08090A]">
      {/* Background Architectural Spatial Grid & Atmospheric Glow */}
      <div className="absolute inset-0 bg-spatial-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#C8A96B]/10 via-[#B87352]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Floating Spatial Scan Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#C8A96B]"
            style={{
              width: i % 2 === 0 ? "2px" : "3px",
              height: i % 2 === 0 ? "2px" : "3px",
              top: `${15 + (i * 7.5) % 80}%`,
              left: `${8 + (i * 13.7) % 85}%`,
              opacity: 0.25,
            }}
            animate={{
              y: [-10, 15, -10],
              opacity: [0.15, 0.45, 0.15],
            }}
            transition={{
              duration: 4 + (i % 4) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 5) * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Editorial Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-7">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#C8A96B]/30 bg-[#151719]/80 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] uppercase text-[#E0C58A]">
              India&apos;s Heritage • Reimagined
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-cinzel text-4xl sm:text-6xl xl:text-7xl font-semibold tracking-tight text-[#F5F1E8] leading-[1.08]"
          >
            Travel Through Time.
            <br />
            Stand Inside{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96B] via-[#E0C58A] to-[#D4A373] italic">
              History
            </span>
            .
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#A6A39C] max-w-xl font-normal leading-relaxed"
          >
            TimeLens Bharat transforms India&apos;s historic monuments into immersive spatial
            experiences — allowing you to explore, understand, and experience history across centuries.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto"
          >
            <Link
              href="/monuments"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#E0C58A] text-[#08090A] text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-[#C8A96B]/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Begin Experience</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-[#C8A96B]/30 bg-[#151719]/60 hover:bg-[#151719] text-[#F5F1E8] text-xs font-medium uppercase tracking-wider transition-all duration-300 hover:border-[#C8A96B]/70"
            >
              <Play className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>Watch Concept</span>
            </a>
          </motion.div>

          {/* Bottom Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 pt-6 text-[11px] font-mono text-[#A6A39C] border-t border-[#C8A96B]/15 w-full"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>ASI Historical Records Grounded</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>Spatial Telemetry Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>Multi-Era Simulation</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Layered Red Fort Architectural Composition & HUD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Spatial Card Container */}
          <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl border border-[#C8A96B]/25 bg-gradient-to-b from-[#151719]/90 to-[#08090A] p-6 shadow-2xl shadow-black/80 overflow-hidden flex flex-col justify-between">
            {/* Ambient Red Sandstone & Golden Horizon Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B87352]/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-64 h-64 bg-[#C8A96B]/15 blur-3xl pointer-events-none" />

            {/* Spatial Reticle Grid Overlay */}
            <div className="absolute inset-0 bg-spatial-grid opacity-30 pointer-events-none" />

            {/* Top Bar of the Spatial Card */}
            <div className="relative z-10 flex items-center justify-between border-b border-[#C8A96B]/15 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#C8A96B] uppercase">
                  LiDAR Anchor • Active
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#A6A39C]">
                28.6562° N, 77.2410° E
              </span>
            </div>

            {/* Center Architectural Silhouette Artwork (CSS & SVG Mughal Geometry) */}
            <div className="relative my-auto py-8 flex flex-col items-center justify-center">
              {/* Outer Spatial Scanning Ring */}
              <div className="relative w-56 h-56 rounded-full border border-dashed border-[#C8A96B]/30 flex items-center justify-center">
                {/* Crosshairs */}
                <div className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C8A96B]/40 to-transparent" />
                <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B]/40 to-transparent" />

                {/* Inner Concentric Circle */}
                <div className="w-44 h-44 rounded-full border border-[#C8A96B]/20 flex items-center justify-center">
                  {/* Mughal Cusped Arch Silhouette */}
                  <svg
                    viewBox="0 0 200 240"
                    className="w-40 h-48 drop-shadow-[0_10px_20px_rgba(200,169,107,0.2)]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Sky / Dawn Gradient inside arch */}
                    <defs>
                      <linearGradient id="archSky" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#C8A96B" stopOpacity="0.25" />
                        <stop offset="60%" stopColor="#B87352" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#08090A" stopOpacity="0.8" />
                      </linearGradient>
                      <linearGradient id="fortSandstone" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#C8A96B" />
                        <stop offset="50%" stopColor="#B87352" />
                        <stop offset="100%" stopColor="#6E2C1E" />
                      </linearGradient>
                    </defs>

                    {/* Arch Portal Contour */}
                    <path
                      d="M20 240 V130 C20 90, 45 60, 75 45 C85 40, 95 35, 100 20 C105 35, 115 40, 125 45 C155 60, 180 90, 180 130 V240 Z"
                      fill="url(#archSky)"
                      stroke="#C8A96B"
                      strokeWidth="1.5"
                      strokeOpacity="0.6"
                    />

                    {/* Chhatri Dome Tops (Red Fort Silhouette) */}
                    <path
                      d="M60 160 H140 V240 H60 Z"
                      fill="#08090A"
                      fillOpacity="0.7"
                    />
                    {/* Central Gate Archway */}
                    <path
                      d="M75 240 V180 C75 165, 88 155, 100 148 C112 155, 125 165, 125 180 V240 Z"
                      fill="#08090A"
                      stroke="#C8A96B"
                      strokeWidth="1"
                      strokeOpacity="0.4"
                    />

                    {/* Octagonal Bastion Silhouettes */}
                    <rect x="25" y="140" width="22" height="100" fill="#B87352" fillOpacity="0.3" />
                    <rect x="153" y="140" width="22" height="100" fill="#B87352" fillOpacity="0.3" />
                    
                    {/* Miniature Cupolas / Domes */}
                    <path d="M25 140 Q36 125 47 140 Z" fill="#C8A96B" fillOpacity="0.5" />
                    <path d="M153 140 Q164 125 175 140 Z" fill="#C8A96B" fillOpacity="0.5" />

                    {/* Spatial Scanning Horizontal Scanline */}
                    <line
                      x1="0"
                      y1="120"
                      x2="200"
                      y2="120"
                      stroke="#E0C58A"
                      strokeWidth="1"
                      strokeDasharray="4 3"
                      opacity="0.8"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating HUD Card: Spatial Analysis */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative z-10 bg-[#0D0E10]/90 backdrop-blur-md border border-[#C8A96B]/30 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#C8A96B]">
                    Spatial Analysis
                  </p>
                  <h2 className="font-serif-cinzel text-base font-semibold text-[#F5F1E8] mt-0.5">
                    Red Fort (Lal Qila)
                  </h2>
                  <p className="text-[11px] text-[#A6A39C]">Delhi, India • Mughal Empire</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-mono uppercase tracking-wider text-[#A6A39C]">
                    Status
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 mt-1 rounded bg-[#C8A96B]/15 border border-[#C8A96B]/40 text-[9px] font-mono font-medium text-[#E0C58A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    READY TO EXPLORE
                  </span>
                </div>
              </div>

              {/* Quick Spec Bar */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-[#C8A96B]/15 text-[10px] font-mono text-[#A6A39C]">
                <div>
                  <span className="block text-[#F5F1E8] font-semibold">1650 CE</span>
                  <span>Foundation</span>
                </div>
                <div>
                  <span className="block text-[#F5F1E8] font-semibold">3 Eras</span>
                  <span>Timeline</span>
                </div>
                <div>
                  <span className="block text-[#F5F1E8] font-semibold">3 Lenses</span>
                  <span>Perspectives</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
