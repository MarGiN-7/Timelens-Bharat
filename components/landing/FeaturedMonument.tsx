"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Calendar, Award, ShieldAlert } from "lucide-react";
import { FEATURED_RED_FORT } from "@/data/landing";

export function FeaturedMonument() {
  const [selectedEraIndex, setSelectedEraIndex] = useState(0);
  const activeEra = FEATURED_RED_FORT.eras[selectedEraIndex];

  return (
    <section
      id="featured-monument"
      className="relative py-28 px-6 sm:px-8 bg-[#0D0E10] border-t border-[#C8A96B]/15 overflow-hidden"
    >
      {/* Background Architectural Halo */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#B87352]/15 via-[#C8A96B]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#C8A96B] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]" />
            Featured Experience
          </div>
          <h2 className="font-serif-cinzel text-3xl sm:text-5xl font-semibold text-[#F5F1E8] tracking-tight">
            The Imperial Citadel of Delhi.
          </h2>
          <p className="mt-4 text-[#A6A39C] text-base sm:text-lg leading-relaxed">
            Our inaugural spatial reconstruction is the monumental Red Fort (Lal Qila). Step across 370 years of Indian history.
          </p>
        </div>

        {/* Exhibition Piece Card */}
        <div className="rounded-3xl border border-[#C8A96B]/30 bg-gradient-to-b from-[#151719]/90 via-[#0D0E10] to-[#08090A] p-8 sm:p-12 shadow-2xl shadow-black/80 relative overflow-hidden">
          {/* Subtle Corner Accents (Museum Exhibition Plaque Style) */}
          <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-[#C8A96B]/50" />
          <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-[#C8A96B]/50" />
          <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-[#C8A96B]/50" />
          <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-[#C8A96B]/50" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Monument Narrative & Era Timeline */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C8A96B]/30 bg-[#08090A] text-[10px] font-mono tracking-wider text-[#C8A96B] uppercase">
                    <Award className="w-3 h-3" />
                    {FEATURED_RED_FORT.classification}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-[#08090A] text-[10px] font-mono tracking-wider text-[#A6A39C]">
                    <MapPin className="w-3 h-3 text-[#C8A96B]" />
                    {FEATURED_RED_FORT.location}
                  </span>
                </div>

                {/* Monument Main Name */}
                <h3 className="font-serif-cinzel text-4xl sm:text-5xl font-bold text-[#F5F1E8] tracking-tight">
                  {FEATURED_RED_FORT.name}
                </h3>
                <p className="font-serif-cinzel text-lg text-[#C8A96B] mt-1 italic">
                  {FEATURED_RED_FORT.indigenousName}
                </p>

                {/* Historical Summary */}
                <p className="mt-5 text-sm sm:text-base text-[#A6A39C] leading-relaxed">
                  {FEATURED_RED_FORT.summary}
                </p>

                {/* Architectural Metadata */}
                <div className="grid grid-cols-2 gap-4 mt-6 p-4 rounded-xl border border-[#C8A96B]/15 bg-[#08090A]/60 text-xs font-mono">
                  <div>
                    <span className="text-[#A6A39C] block text-[10px] uppercase">Architect</span>
                    <span className="text-[#F5F1E8] font-medium">{FEATURED_RED_FORT.architect}</span>
                  </div>
                  <div>
                    <span className="text-[#A6A39C] block text-[10px] uppercase">Commissioned By</span>
                    <span className="text-[#F5F1E8] font-medium">{FEATURED_RED_FORT.commissioned}</span>
                  </div>
                </div>
              </div>

              {/* Interactive Era Timeline Selector */}
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C8A96B] mb-3 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  Select Historical Epoch
                </p>

                <div className="grid grid-cols-3 gap-2.5 p-1.5 rounded-xl border border-[#C8A96B]/20 bg-[#08090A]">
                  {FEATURED_RED_FORT.eras.map((era, index) => {
                    const isSelected = index === selectedEraIndex;
                    return (
                      <button
                        key={era.year}
                        type="button"
                        onClick={() => setSelectedEraIndex(index)}
                        className={`py-2.5 px-3 rounded-lg text-center transition-all duration-300 relative ${
                          isSelected
                            ? "bg-[#C8A96B] text-[#08090A] shadow-md shadow-[#C8A96B]/30 font-semibold"
                            : "text-[#A6A39C] hover:text-[#F5F1E8] hover:bg-[#151719]"
                        }`}
                      >
                        <span className="font-serif-cinzel text-xs sm:text-sm font-bold block">
                          {era.year}
                        </span>
                        <span className="text-[9px] font-mono tracking-tight block truncate opacity-80">
                          {era.eraName.split(" ")[0]}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Era Details Panel */}
                <div className="mt-4 p-4 rounded-xl border border-[#C8A96B]/20 bg-[#151719]/80 min-h-[90px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeEra.year}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-serif-cinzel text-sm font-semibold text-[#E0C58A]">
                          {activeEra.eraName}
                        </span>
                        <span className="text-[10px] font-mono text-[#A6A39C]">
                          {activeEra.tagline}
                        </span>
                      </div>
                      <p className="text-xs text-[#A6A39C] leading-relaxed">
                        {activeEra.details}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  href="/monuments/red-fort"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#E0C58A] text-[#08090A] text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-[#C8A96B]/25 hover:brightness-105 active:scale-[0.98]"
                >
                  <span>Explore Red Fort (3D Experience)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Silhouette Exhibition Graphic */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl border border-[#C8A96B]/30 bg-[#08090A] p-6 flex flex-col justify-between overflow-hidden shadow-inner">
                {/* Background Spatial Grid */}
                <div className="absolute inset-0 bg-spatial-grid opacity-25 pointer-events-none" />

                {/* Top Corner Plaque */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#A6A39C] border-b border-[#C8A96B]/15 pb-3">
                  <span>EXHIBIT #01 • DELHI</span>
                  <span className="text-[#C8A96B] font-semibold">{activeEra.year}</span>
                </div>

                {/* Visual Architectural Reconstruction Graphic */}
                <div className="relative my-auto flex flex-col items-center justify-center">
                  {/* Outer Concentric Frame */}
                  <div className="relative w-64 h-64 rounded-full border border-[#C8A96B]/20 flex items-center justify-center">
                    <div className="w-52 h-52 rounded-full border border-dashed border-[#C8A96B]/30 flex items-center justify-center">
                      {/* Stylized Red Fort Lahori Gate Silhouette */}
                      <svg
                        viewBox="0 0 240 240"
                        className="w-48 h-48 drop-shadow-[0_15px_25px_rgba(200,169,107,0.25)]"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Sandstone Wall Ramparts */}
                        <path
                          d="M20 220 H220 V140 H180 V160 H150 V130 H90 V160 H60 V140 H20 V220 Z"
                          fill="#6E2C1E"
                          fillOpacity="0.8"
                          stroke="#C8A96B"
                          strokeWidth="1.5"
                        />

                        {/* Crenellations / Battlements */}
                        <path
                          d="M20 140 H30 V135 H40 V140 H50 V135 H60 V140 H70 V135 H80 V140 H90 V130 H100 V125 H110 V130 H120 V125 H130 V130 H140 V125 H150 V130 H160 V140 H170 V135 H180 V140 H190 V135 H200 V140 H210 V135 H220 V140"
                          stroke="#C8A96B"
                          strokeWidth="1.5"
                        />

                        {/* Central High Gateway Arch */}
                        <path
                          d="M90 220 V155 C90 135, 105 125, 120 115 C135 125, 150 135, 150 155 V220 Z"
                          fill="#0D0E10"
                          stroke="#E0C58A"
                          strokeWidth="2"
                        />

                        {/* Side Arches */}
                        <path
                          d="M40 220 V175 C40 165, 48 160, 55 155 C62 160, 70 165, 70 175 V220 Z"
                          fill="#0D0E10"
                          stroke="#C8A96B"
                          strokeWidth="1"
                        />
                        <path
                          d="M170 220 V175 C170 165, 178 160, 185 155 C192 160, 200 165, 200 175 V220 Z"
                          fill="#0D0E10"
                          stroke="#C8A96B"
                          strokeWidth="1"
                        />

                        {/* Royal Chhatris (Domes with pillars) */}
                        {/* Left Chhatri */}
                        <rect x="35" y="115" width="2" height="20" fill="#C8A96B" />
                        <rect x="53" y="115" width="2" height="20" fill="#C8A96B" />
                        <path d="M30 115 Q45 95 60 115 Z" fill="#C8A96B" fillOpacity="0.7" />
                        <line x1="45" y1="95" x2="45" y2="88" stroke="#E0C58A" strokeWidth="1.5" />

                        {/* Right Chhatri */}
                        <rect x="180" y="115" width="2" height="20" fill="#C8A96B" />
                        <rect x="198" y="115" width="2" height="20" fill="#C8A96B" />
                        <path d="M175 115 Q190 95 205 115 Z" fill="#C8A96B" fillOpacity="0.7" />
                        <line x1="190" y1="95" x2="190" y2="88" stroke="#E0C58A" strokeWidth="1.5" />

                        {/* Center Pavilion Crown */}
                        <path d="M100 120 Q120 100 140 120 Z" fill="#C8A96B" fillOpacity="0.8" />
                        <line x1="120" y1="100" x2="120" y2="90" stroke="#E0C58A" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Exhibit Metadata Badge */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#A6A39C] border-t border-[#C8A96B]/15 pt-3">
                  <div className="flex items-center gap-1.5 text-[#C8A96B]">
                    <ShieldAlert className="w-3 h-3" />
                    <span>ASI Verified Dataset</span>
                  </div>
                  <span>High-Fidelity Model</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
