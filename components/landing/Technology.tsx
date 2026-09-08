"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Hourglass, UserCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { TECH_FEATURES } from "@/data/landing";

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-6 h-6 text-[#C8A96B]" />,
  Hourglass: <Hourglass className="w-6 h-6 text-[#C8A96B]" />,
  UserCheck: <UserCheck className="w-6 h-6 text-[#C8A96B]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#C8A96B]" />,
};

export function Technology() {
  return (
    <section id="technology" className="relative py-28 px-6 sm:px-8 bg-[#08090A] overflow-hidden">
      {/* Background Architectural Spatial Grid */}
      <div className="absolute inset-0 bg-spatial-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#B87352]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#C8A96B] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]" />
              The Technology
            </div>
            <h2 className="font-serif-cinzel text-3xl sm:text-5xl font-semibold text-[#F5F1E8] tracking-tight leading-tight">
              Where Heritage Meets
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96B] to-[#E0C58A]">
                Spatial Intelligence.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A6A39C] max-w-md leading-relaxed font-mono">
            {"// ARCHITECTURE & INTEGRATION"}
            <br />
            Next-generation WebGL spatial rendering combined with verified archaeological datasets
            and anti-hallucinatory LLM grounding.
          </p>
        </div>

        {/* Sophisticated Asymmetric Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {TECH_FEATURES.map((feature, idx) => {
            // Asymmetric sizing: feature 0 and 3 are 7 cols, feature 1 and 2 are 5 cols
            const colSpan =
              idx === 0 || idx === 3 ? "md:col-span-7" : "md:col-span-5";

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`${colSpan} group relative rounded-2xl bg-gradient-to-br from-[#151719] via-[#0D0E10] to-[#08090A] border border-[#C8A96B]/15 hover:border-[#C8A96B]/50 transition-all duration-500 p-8 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/50`}
              >
                {/* Subtle Card Ambient Glow on Hover */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#C8A96B]/5 rounded-full blur-2xl group-hover:bg-[#C8A96B]/10 transition-colors duration-500 pointer-events-none" />

                <div>
                  {/* Top Tag & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C8A96B]/25 bg-[#08090A]/80 text-[10px] font-mono tracking-[0.2em] text-[#E0C58A] uppercase">
                      {feature.tag}
                    </span>
                    <div className="w-12 h-12 rounded-xl border border-[#C8A96B]/20 bg-[#151719] flex items-center justify-center group-hover:scale-105 group-hover:border-[#C8A96B]/60 transition-transform duration-300">
                      {iconMap[feature.iconName]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-cinzel text-2xl font-semibold text-[#F5F1E8] mb-3 group-hover:text-[#E0C58A] transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#A6A39C] leading-relaxed mb-8">
                    {feature.description}
                  </p>
                </div>

                {/* Specs / Pillars checklist */}
                <div className="pt-6 border-t border-[#C8A96B]/10">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#C8A96B] mb-3">
                    Technical Specifications
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {feature.specs.map((spec) => (
                      <div
                        key={spec}
                        className="flex items-center gap-2 text-xs text-[#F5F1E8]/80 font-sans"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A96B] flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
