"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { EraId, EraVisualConfig } from "@/data/redFortExperience";
import { LensId } from "@/data/livingHistory";
import { PerspectiveLensSelector } from "@/components/experience/PerspectiveLensSelector";
import {
  ArrowLeft,
  Compass,
  Menu,
  X,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface ExperienceHUDProps {
  activeEra: EraVisualConfig;
  availableEras: EraVisualConfig[];
  onSelectEra: (eraId: EraId) => void;
  activeHotspotCount: number;
  activeLens: LensId;
  onSelectLens: (lensId: LensId) => void;
}

export function ExperienceHUD({
  activeEra,
  availableEras,
  onSelectEra,
  activeHotspotCount,
  activeLens,
  onSelectLens,
}: ExperienceHUDProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute inset-0 pointer-events-none z-30 flex flex-col justify-between p-4 sm:p-6 overflow-hidden">
      {/* Top Header Bar */}
      <header className="flex items-start justify-between gap-4 pointer-events-auto">
        {/* Top Left: Platform Branding & Back Action */}
        <div className="flex items-center gap-3">
          <Link
            href="/monuments/red-fort"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C8A96B]/30 bg-[#08090A]/85 backdrop-blur-md text-[11px] font-mono text-[#A6A39C] hover:text-[#F5F1E8] hover:border-[#C8A96B] transition-all shadow-lg"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#C8A96B]" />
            <span className="hidden sm:inline">Hub</span>
          </Link>

          <div className="px-3.5 py-1.5 rounded-full border border-[#C8A96B]/25 bg-[#08090A]/85 backdrop-blur-md flex items-center gap-2.5 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-serif-cinzel text-xs font-bold tracking-[0.2em] text-[#F5F1E8]">
              TIME<span className="text-[#C8A96B]">LENS</span> BHARAT
            </span>
          </div>
        </div>

        {/* Top Center: Monument Title & Indigenous Name */}
        <div className="hidden md:flex flex-col items-center px-4 py-1.5 rounded-2xl border border-[#C8A96B]/20 bg-[#08090A]/80 backdrop-blur-md shadow-lg text-center">
          <div className="flex items-center gap-2">
            <span className="font-serif-cinzel text-sm font-bold text-[#F5F1E8]">
              RED FORT
            </span>
            <span className="text-xs font-serif-cinzel text-[#C8A96B] italic">
              (लाल क़िला)
            </span>
          </div>
          <span className="text-[9px] font-mono tracking-widest text-[#A6A39C] uppercase">
            DELHI, INDIA • 3D SPATIAL RECONSTRUCTION
          </span>
        </div>

        {/* Top Right: Current Era Badge & Menu Button */}
        <div className="flex items-center gap-2.5">
          <div className="hidden sm:flex flex-col items-end px-3.5 py-1.5 rounded-2xl border border-[#C8A96B]/30 bg-[#08090A]/85 backdrop-blur-md shadow-lg text-right">
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#C8A96B]">
              ERA INFORMATION
            </span>
            <span className="font-serif-cinzel text-xs font-bold text-[#E0C58A]">
              {activeEra.label} • {activeEra.subtitle}
            </span>
          </div>

          {/* Quick Menu Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full border border-[#C8A96B]/30 bg-[#08090A]/85 backdrop-blur-md text-[#F5F1E8] hover:text-[#C8A96B] hover:border-[#C8A96B] transition-colors shadow-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Menu Overlay Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 right-6 z-40 w-72 rounded-2xl border border-[#C8A96B]/30 bg-[#0D0E10]/95 backdrop-blur-xl p-5 shadow-2xl pointer-events-auto"
          >
            <div className="flex items-center justify-between border-b border-[#C8A96B]/15 pb-3 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C8A96B]">
                EXPERIENCE NAVIGATION
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="text-[#A6A39C] hover:text-[#F5F1E8]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <Link
                href="/monuments/red-fort"
                className="flex items-center justify-between p-2.5 rounded-xl border border-white/5 bg-[#151719]/60 hover:bg-[#151719] hover:border-[#C8A96B]/30 text-[#F5F1E8] transition-colors"
              >
                <span>Red Fort Hub</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#C8A96B]" />
              </Link>
              <Link
                href="/monuments"
                className="flex items-center justify-between p-2.5 rounded-xl border border-white/5 bg-[#151719]/60 hover:bg-[#151719] hover:border-[#C8A96B]/30 text-[#F5F1E8] transition-colors"
              >
                <span>Monument Archive</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#C8A96B]" />
              </Link>
              <Link
                href="/"
                className="flex items-center justify-between p-2.5 rounded-xl border border-white/5 bg-[#151719]/60 hover:bg-[#151719] hover:border-[#C8A96B]/30 text-[#F5F1E8] transition-colors"
              >
                <span>Home Landing Page</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#C8A96B]" />
              </Link>
            </div>

            <div className="mt-4 pt-3 border-t border-[#C8A96B]/15 flex items-center justify-between text-[10px] font-mono text-[#A6A39C]">
              <span>SMART INDIA HACKATHON</span>
              <span className="text-[#C8A96B]">PHASE 3</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center Subtle Interaction Hint (Fades after brief moment or toggleable) */}
      <div className="self-center pointer-events-auto">
        <div className="px-3.5 py-1.5 rounded-full border border-[#C8A96B]/20 bg-[#08090A]/70 backdrop-blur-md text-[10px] font-mono text-[#A6A39C] flex items-center gap-2 shadow-lg">
          <Sparkles className="w-3 h-3 text-[#C8A96B]" />
          <span>{activeHotspotCount} INTERACTIVE HOTSPOTS • CLICK GOLD MARKERS TO INSPECT</span>
        </div>
      </div>

      {/* Living History PerspectiveLens */}
      <div className="self-center w-full max-w-xl pointer-events-auto px-2 sm:px-0">
        <PerspectiveLensSelector
          activeLens={activeLens}
          onSelectLens={onSelectLens}
          compact
        />
      </div>

      {/* Bottom Control & Telemetry Bar */}
      <footer className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end pointer-events-auto">
        {/* Bottom Left: Spatial Telemetry Status */}
        <div className="md:col-span-3 hidden sm:flex flex-col space-y-1 px-4 py-3 rounded-2xl border border-[#C8A96B]/20 bg-[#08090A]/85 backdrop-blur-md shadow-lg text-[10px] font-mono text-[#A6A39C]">
          <div className="flex items-center gap-1.5 text-[#E0C58A] font-semibold">
            <Compass className="w-3 h-3 text-[#C8A96B]" />
            <span>SPATIAL ENGINE</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>STATUS: TRACKING ENVIRONMENT</span>
          </div>
          <div className="text-[9px] text-[#A6A39C]/80">
            {activeEra.hudTag}
          </div>
        </div>

        {/* Bottom Center: Interactive Era Switcher */}
        <div className="md:col-span-6 flex flex-col items-center">
          <div className="flex items-center gap-1 sm:gap-2 p-1.5 rounded-2xl border border-[#C8A96B]/30 bg-[#08090A]/90 backdrop-blur-md shadow-2xl">
            {availableEras.map((era) => {
              const isSelected = era.id === activeEra.id;
              return (
                <button
                  key={era.id}
                  type="button"
                  onClick={() => onSelectEra(era.id)}
                  className={`relative px-3 sm:px-4 py-2 rounded-xl text-center transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? "text-[#08090A] shadow-md shadow-[#C8A96B]/30"
                      : "text-[#A6A39C] hover:text-[#F5F1E8] hover:bg-[#151719]/70"
                  }`}
                >
                  {/* Framer motion active indicator */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeEraPill"
                      className="absolute inset-0 bg-gradient-to-r from-[#C8A96B] to-[#E0C58A] rounded-xl z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="relative z-10">
                    <span
                      className={`font-serif-cinzel text-xs sm:text-sm font-bold block leading-none ${
                        isSelected ? "text-[#08090A]" : "text-[#F5F1E8]"
                      }`}
                    >
                      {era.label}
                    </span>
                    <span
                      className={`text-[8px] sm:text-[9px] font-mono tracking-tighter uppercase block mt-1 truncate ${
                        isSelected ? "text-[#08090A]/85 font-semibold" : "text-[#C8A96B]"
                      }`}
                    >
                      {era.subtitle.split(" ")[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <span className="text-[9px] font-mono text-[#A6A39C]/80 uppercase tracking-wider mt-2 hidden sm:block">
            Drag to Rotate • Scroll to Zoom • Right-Click / Two-Finger Pan
          </span>
        </div>

        {/* Bottom Right: Spatial Coordinates & Camera Reset */}
        <div className="md:col-span-3 flex items-center justify-end gap-3">
          <div className="px-4 py-3 rounded-2xl border border-[#C8A96B]/20 bg-[#08090A]/85 backdrop-blur-md shadow-lg text-[10px] font-mono text-[#A6A39C] text-right">
            <span className="text-[9px] uppercase tracking-wider text-[#C8A96B] block">
              COORDINATES
            </span>
            <span className="font-semibold text-[#F5F1E8] block">28.6562° N, 77.2410° E</span>
            <span className="text-[9px] text-[#A6A39C]">ALT: 216m MSL</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
