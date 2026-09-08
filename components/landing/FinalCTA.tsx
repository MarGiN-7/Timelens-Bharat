"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-36 px-6 sm:px-8 bg-[#0D0E10] border-t border-[#C8A96B]/15 overflow-hidden text-center">
      {/* Background Architectural Glow & Radial Vignette */}
      <div className="absolute inset-0 bg-spatial-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#B87352]/20 via-[#C8A96B]/10 to-transparent blur-3xl rounded-full pointer-events-none" />

      {/* Decorative Center Arch Frame (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#C8A96B]/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-dashed border-[#C8A96B]/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8A96B]/30 bg-[#151719]/90 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#E0C58A] uppercase mb-8"
        >
          <Compass className="w-3.5 h-3.5 text-[#C8A96B]" />
          Spatial Heritage Odyssey
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold text-[#F5F1E8] tracking-tight leading-[1.1]"
        >
          India&apos;s Past.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96B] via-[#E0C58A] to-[#D4A373]">
            Your Perspective.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-[#A6A39C] max-w-xl mx-auto leading-relaxed"
        >
          Step beyond observation.
          <br className="hidden sm:inline" />
          Enter the story.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/monuments"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#E0C58A] text-[#08090A] text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-[#C8A96B]/30 hover:scale-105 active:scale-[0.98]"
          >
            <span>Start Exploring</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Secondary Subtext */}
        <p className="mt-8 text-[11px] font-mono text-[#A6A39C]/70 tracking-wider uppercase">
          Smart India Hackathon 2026 Prototype • Red Fort Edition
        </p>
      </div>
    </section>
  );
}
