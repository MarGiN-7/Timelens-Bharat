"use client";

import React from "react";
import { motion } from "framer-motion";
import { Move3d, Users, Globe2, Sparkles } from "lucide-react";
import { VALUE_PILLARS } from "@/data/landing";

const iconMap: Record<string, React.ReactNode> = {
  Move3d: <Move3d className="w-6 h-6 text-[#C8A96B]" />,
  Users: <Users className="w-6 h-6 text-[#C8A96B]" />,
  Globe2: <Globe2 className="w-6 h-6 text-[#C8A96B]" />,
};

export function WhyTimeLens() {
  return (
    <section id="why-timelens" className="relative py-28 px-6 sm:px-8 bg-[#08090A] overflow-hidden border-t border-[#C8A96B]/10">
      {/* Background Architectural Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C8A96B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#C8A96B] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            The Paradigm Shift
          </div>
          <h2 className="font-serif-cinzel text-3xl sm:text-5xl font-semibold text-[#F5F1E8] tracking-tight">
            A New Way to Experience Heritage.
          </h2>
          <p className="mt-4 text-[#A6A39C] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Reimagining our relationship with history by merging spatial computing with authentic Indian cultural narratives.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-2xl bg-gradient-to-b from-[#151719]/80 to-[#0D0E10] border border-[#C8A96B]/20 hover:border-[#C8A96B]/50 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/50"
            >
              <div>
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl border border-[#C8A96B]/30 bg-[#08090A] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[#C8A96B] transition-transform duration-300">
                  {iconMap[pillar.iconName]}
                </div>

                {/* Pillar Tag */}
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#E0C58A] block mb-2">
                  {pillar.title}
                </span>

                {/* Headline */}
                <h3 className="font-serif-cinzel text-2xl font-semibold text-[#F5F1E8] mb-4 group-hover:text-[#E0C58A] transition-colors leading-snug">
                  {pillar.headline}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A6A39C] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-8 pt-4 border-t border-[#C8A96B]/10 flex items-center justify-between text-[10px] font-mono text-[#A6A39C]">
                <span>Pillar 0{idx + 1}</span>
                <span className="text-[#C8A96B]">TimeLens Bharat</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
