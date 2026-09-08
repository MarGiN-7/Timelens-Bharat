"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HotspotData } from "@/data/redFortExperience";
import { X, Award, Landmark, ShieldCheck } from "lucide-react";

interface HotspotModalProps {
  hotspot: HotspotData | null;
  onClose: () => void;
}

export function HotspotModal({ hotspot, onClose }: HotspotModalProps) {
  return (
    <AnimatePresence>
      {hotspot && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl rounded-3xl border border-[#C8A96B]/35 bg-gradient-to-b from-[#151719]/95 via-[#0D0E10] to-[#08090A] p-6 sm:p-8 shadow-2xl shadow-black/90 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Museum Exhibition Plaque Corner Accents */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#C8A96B]/60" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#C8A96B]/60" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#C8A96B]/60" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#C8A96B]/60" />

            {/* Background Spatial Grid Accent */}
            <div className="absolute inset-0 bg-spatial-grid opacity-20 pointer-events-none" />

            {/* Modal Header */}
            <div className="relative z-10 flex items-start justify-between gap-4 border-b border-[#C8A96B]/15 pb-4 mb-5">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#C8A96B]/30 bg-[#08090A] text-[9px] font-mono tracking-wider text-[#E0C58A] uppercase">
                    <Award className="w-3 h-3 text-[#C8A96B]" />
                    CATEGORY: {hotspot.category}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-white/10 bg-[#08090A] text-[9px] font-mono text-[#A6A39C] uppercase">
                    ERA: {hotspot.eraContext}
                  </span>
                </div>

                <h3 className="font-serif-cinzel text-2xl sm:text-3xl font-bold text-[#F5F1E8] tracking-tight">
                  {hotspot.title}
                </h3>
                {hotspot.indigenousTitle && (
                  <p className="font-serif-cinzel text-sm text-[#C8A96B] italic mt-0.5">
                    {hotspot.indigenousTitle}
                  </p>
                )}
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full border border-[#C8A96B]/30 bg-[#08090A] text-[#A6A39C] hover:text-[#F5F1E8] hover:border-[#C8A96B] transition-colors focus:outline-none"
                aria-label="Close information modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="relative z-10 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              {/* Core Description */}
              <p className="text-sm text-[#F5F1E8]/90 leading-relaxed font-normal">
                {hotspot.description}
              </p>

              {/* Architectural Notes */}
              <div className="p-4 rounded-xl border border-[#C8A96B]/20 bg-[#08090A]/70">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#C8A96B] mb-1">
                  <Landmark className="w-3.5 h-3.5" />
                  Architectural Specification
                </div>
                <p className="text-xs text-[#A6A39C] leading-relaxed">
                  {hotspot.architecturalNotes}
                </p>
              </div>

              {/* Historical Significance */}
              <div className="p-4 rounded-xl border border-[#C8A96B]/20 bg-[#08090A]/70">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#E0C58A] mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C8A96B]" />
                  Historical & Cultural Significance
                </div>
                <p className="text-xs text-[#A6A39C] leading-relaxed">
                  {hotspot.significance}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="relative z-10 mt-6 pt-4 border-t border-[#C8A96B]/15 flex items-center justify-between text-[10px] font-mono text-[#A6A39C]">
              <span>TIMELENS SPATIAL ANCHOR</span>
              <button
                type="button"
                onClick={onClose}
                className="text-[#C8A96B] hover:text-[#E0C58A] uppercase tracking-wider transition-colors font-semibold"
              >
                Dismiss Plaque [ESC]
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
