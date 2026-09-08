"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HistoricalEra, EraId } from "@/types/monument";
import { Clock, Compass, CheckCircle2, Volume2, Landmark } from "lucide-react";

interface EraSelectorProps {
  eras: HistoricalEra[];
  selectedEraId: EraId;
  onSelectEra: (eraId: EraId) => void;
  className?: string;
}

export function EraSelector({
  eras,
  selectedEraId,
  onSelectEra,
  className = "",
}: EraSelectorProps) {
  const currentEra = eras.find((e) => e.id === selectedEraId) || eras[0];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Era Navigation Tabs */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#C8A96B] flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            Select Historical Era
          </span>
          <span className="text-[10px] font-mono text-[#A6A39C]">
            TEMPORAL CALIBRATION
          </span>
        </div>

        {/* 3-Way Era Tab Buttons */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 p-1.5 rounded-2xl border border-[#C8A96B]/25 bg-[#08090A]/90 backdrop-blur-md">
          {eras.map((era) => {
            const isSelected = era.id === selectedEraId;
            return (
              <button
                key={era.id}
                type="button"
                onClick={() => onSelectEra(era.id)}
                className={`relative py-3.5 px-3 sm:px-4 rounded-xl text-center transition-all duration-300 group focus:outline-none ${
                  isSelected
                    ? "text-[#08090A] shadow-lg shadow-[#C8A96B]/20"
                    : "text-[#A6A39C] hover:text-[#F5F1E8] hover:bg-[#151719]/60"
                }`}
              >
                {/* Framer motion active indicator pill */}
                {isSelected && (
                  <motion.div
                    layoutId="activeEraPill"
                    className="absolute inset-0 bg-gradient-to-r from-[#C8A96B] to-[#E0C58A] rounded-xl z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="relative z-10">
                  <span
                    className={`font-serif-cinzel text-xs sm:text-base font-bold block leading-tight ${
                      isSelected ? "text-[#08090A]" : "text-[#F5F1E8]"
                    }`}
                  >
                    {era.yearLabel}
                  </span>
                  <span
                    className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-wider block truncate mt-1 ${
                      isSelected ? "text-[#08090A]/90 font-semibold" : "text-[#C8A96B]"
                    }`}
                  >
                    {era.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Animated Active Era Information Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentEra.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl border border-[#C8A96B]/30 bg-gradient-to-b from-[#151719]/90 via-[#0D0E10] to-[#08090A] p-6 sm:p-7 shadow-2xl shadow-black/70 overflow-hidden"
        >
          {/* Subtle Accent Light in corner */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C8A96B]/10 blur-3xl pointer-events-none" />

          {/* Era Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#C8A96B]/15 pb-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]" />
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#E0C58A]">
                  {currentEra.yearLabel} • {currentEra.title}
                </span>
              </div>
              <h4 className="font-serif-cinzel text-lg sm:text-xl font-bold text-[#F5F1E8]">
                {currentEra.tagline}
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full border border-[#C8A96B]/30 bg-[#08090A] text-[10px] font-mono text-[#C8A96B] uppercase">
                {currentEra.telemetry.dynastyOrAuthority}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#F5F1E8]/90 leading-relaxed mb-6 font-normal">
            {currentEra.description}
          </p>

          {/* Deep Era Context and Architectural State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl border border-[#C8A96B]/15 bg-[#08090A]/60">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#C8A96B] mb-1.5">
                <Landmark className="w-3.5 h-3.5" />
                Architectural State
              </div>
              <p className="text-xs text-[#A6A39C] leading-relaxed">
                {currentEra.architecturalState}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#C8A96B]/15 bg-[#08090A]/60">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#C8A96B] mb-1.5">
                <Compass className="w-3.5 h-3.5" />
                Historical Resonance
              </div>
              <p className="text-xs text-[#A6A39C] leading-relaxed">
                {currentEra.historicalContext}
              </p>
            </div>
          </div>

          {/* Key Structures & Audio Landscape */}
          <div className="pt-4 border-t border-[#C8A96B]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
            <div>
              <span className="text-[10px] uppercase text-[#A6A39C] block mb-2">
                Reconstructed Spatial Landmarks:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentEra.keyStructures.map((structure) => (
                  <span
                    key={structure}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#151719] border border-[#C8A96B]/20 text-[#E0C58A] text-[11px]"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#C8A96B]" />
                    {structure}
                  </span>
                ))}
              </div>
            </div>

            <div className="sm:max-w-[240px] text-right sm:border-l sm:border-[#C8A96B]/15 sm:pl-4">
              <div className="flex items-center gap-1.5 justify-start sm:justify-end text-[10px] uppercase text-[#C8A96B] mb-1">
                <Volume2 className="w-3 h-3" />
                Spatial Soundscape
              </div>
              <p className="text-[11px] text-[#A6A39C] leading-snug">
                {currentEra.audioLandscape}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
