"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scan, Clock, Compass, Eye, ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/data/landing";

const iconMap: Record<string, React.ReactNode> = {
  Scan: <Scan className="w-5 h-5 text-[#C8A96B]" />,
  Clock: <Clock className="w-5 h-5 text-[#C8A96B]" />,
  Compass: <Compass className="w-5 h-5 text-[#C8A96B]" />,
  Eye: <Eye className="w-5 h-5 text-[#C8A96B]" />,
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 px-6 sm:px-8 bg-[#0D0E10] overflow-hidden border-t border-[#C8A96B]/10">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C8A96B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#C8A96B] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]" />
            How It Works
          </div>
          <h2 className="font-serif-cinzel text-3xl sm:text-5xl font-semibold text-[#F5F1E8] tracking-tight leading-tight">
            History isn&apos;t behind glass anymore.
          </h2>
          <p className="mt-4 text-[#A6A39C] text-base sm:text-lg leading-relaxed">
            TimeLens Bharat replaces passive observation with interactive spatial presence.
            Follow the four-stage discovery paradigm designed for heritage preservation.
          </p>
        </div>

        {/* 4-Step Experience Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[6%] right-[6%] h-[1px] bg-gradient-to-r from-[#C8A96B]/10 via-[#C8A96B]/40 to-[#C8A96B]/10 z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="group relative flex flex-col p-6 rounded-2xl bg-[#151719]/70 border border-[#C8A96B]/15 hover:border-[#C8A96B]/40 transition-all duration-300 hover:bg-[#151719] hover:-translate-y-1.5 shadow-lg shadow-black/40"
              >
                {/* Step Top Row: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  {/* Step Number Badge */}
                  <span className="font-serif-cinzel text-2xl font-bold text-[#E0C58A] group-hover:text-[#F5F1E8] transition-colors">
                    {step.number}
                  </span>

                  {/* Icon Container with subtle ring */}
                  <div className="w-11 h-11 rounded-full border border-[#C8A96B]/30 bg-[#08090A] flex items-center justify-center group-hover:border-[#C8A96B] transition-colors shadow-inner">
                    {iconMap[step.iconName]}
                  </div>
                </div>

                {/* Sublabel */}
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#C8A96B] mb-2">
                  {step.sublabel}
                </span>

                {/* Step Title */}
                <h3 className="font-serif-cinzel text-lg font-semibold text-[#F5F1E8] mb-3 group-hover:text-[#E0C58A] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-[#A6A39C] leading-relaxed">
                  {step.description}
                </p>

                {/* Interactive bottom indicator */}
                <div className="mt-6 pt-4 border-t border-[#C8A96B]/10 flex items-center justify-between text-[10px] font-mono text-[#A6A39C]">
                  <span>Phase {idx + 1}</span>
                  <ArrowRight className="w-3 h-3 text-[#C8A96B]/40 group-hover:text-[#C8A96B] group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
