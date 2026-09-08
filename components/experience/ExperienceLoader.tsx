"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HistoricalEra } from "@/types/monument";
import { CheckCircle2, Loader2, Terminal, ArrowRight } from "lucide-react";

interface ExperienceLoaderProps {
  monumentName: string;
  indigenousName: string;
  activeEra: HistoricalEra;
  onEnterExperience: () => void;
}

interface StageState {
  label: string;
  detail: string;
  status: "pending" | "loading" | "complete";
}

const INITIAL_STAGES: StageState[] = [
  {
    label: "Loading Geometry",
    detail: "Parsing high-density spatial coordinate grid and rampart volumes",
    status: "loading",
  },
  {
    label: "Reconstructing Architecture",
    detail: "Procedurally synthesizing Lahori Gate, Diwan-i-Aam colonnade & chhatris",
    status: "pending",
  },
  {
    label: "Applying Historical Dataset",
    detail: "Calibrating ASI archaeological materials, sandstone shaders & era lighting",
    status: "pending",
  },
  {
    label: "Initializing Spatial Anchor",
    detail: "Locking coordinates 28.6562° N, 77.2410° E & Nahr-i-Bihisht hydraulics",
    status: "pending",
  },
  {
    label: "Ready",
    detail: "Spatial environment synchronized. Preparing 3D viewport canvas",
    status: "pending",
  },
];

export function ExperienceLoader({
  monumentName,
  indigenousName,
  activeEra,
  onEnterExperience,
}: ExperienceLoaderProps) {
  const [stages, setStages] = useState<StageState[]>(INITIAL_STAGES);
  const [progress, setProgress] = useState<number>(18);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    // Stage 0 -> complete at 600ms, Stage 1 starts
    timeouts.push(
      setTimeout(() => {
        setStages((prev) =>
          prev.map((s, idx) =>
            idx === 0
              ? { ...s, status: "complete" }
              : idx === 1
              ? { ...s, status: "loading" }
              : s
          )
        );
        setProgress(38);
      }, 600)
    );

    // Stage 1 -> complete at 1200ms, Stage 2 starts
    timeouts.push(
      setTimeout(() => {
        setStages((prev) =>
          prev.map((s, idx) =>
            idx === 1
              ? { ...s, status: "complete" }
              : idx === 2
              ? { ...s, status: "loading" }
              : s
          )
        );
        setProgress(60);
      }, 1200)
    );

    // Stage 2 -> complete at 1800ms, Stage 3 starts
    timeouts.push(
      setTimeout(() => {
        setStages((prev) =>
          prev.map((s, idx) =>
            idx === 2
              ? { ...s, status: "complete" }
              : idx === 3
              ? { ...s, status: "loading" }
              : s
          )
        );
        setProgress(82);
      }, 1800)
    );

    // Stage 3 -> complete at 2400ms, Stage 4 (Ready) starts
    timeouts.push(
      setTimeout(() => {
        setStages((prev) =>
          prev.map((s, idx) =>
            idx === 3
              ? { ...s, status: "complete" }
              : idx === 4
              ? { ...s, status: "complete" }
              : s
          )
        );
        setProgress(100);
        setIsReady(true);
      }, 2400)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-3xl border border-[#C8A96B]/30 bg-gradient-to-b from-[#151719]/95 via-[#0D0E10] to-[#08090A] p-8 sm:p-12 shadow-2xl shadow-black/90 overflow-hidden">
      {/* Corner Bracket Details */}
      <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C8A96B]/60" />
      <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C8A96B]/60" />
      <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C8A96B]/60" />
      <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C8A96B]/60" />

      {/* Spatial Grid Atmosphere */}
      <div className="absolute inset-0 bg-spatial-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#C8A96B]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center">
        {/* System Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A96B]/30 bg-[#08090A]/80 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#E0C58A] uppercase mb-4">
          <Terminal className="w-3.5 h-3.5 text-[#C8A96B]" />
          TIME LENS SPATIAL ENGINE
        </div>

        <h1 className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#A6A39C] uppercase mb-5">
          INITIALIZING MONUMENT ENVIRONMENT
        </h1>

        {/* Monument & Era Display */}
        <h2 className="font-serif-cinzel text-3xl sm:text-5xl font-bold text-[#F5F1E8] tracking-tight">
          {monumentName}
        </h2>
        <div className="flex items-center justify-center gap-3 mt-2 mb-8">
          <span className="font-serif-cinzel text-base text-[#C8A96B] italic font-medium">
            {indigenousName}
          </span>
          <span className="text-[#C8A96B]/30">•</span>
          <span className="px-3 py-0.5 rounded-full bg-[#C8A96B]/15 border border-[#C8A96B]/30 text-xs font-mono font-semibold text-[#E0C58A]">
            {activeEra.yearLabel}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#08090A] h-2 rounded-full border border-[#C8A96B]/20 overflow-hidden mb-8 relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#C8A96B] via-[#E0C58A] to-[#D4A373]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>

        {/* Animated Stages Checklist */}
        <div className="space-y-3 text-left mb-10 max-w-lg mx-auto">
          {stages.map((stage, idx) => {
            const isCompleted = stage.status === "complete";
            const isLoading = stage.status === "loading";

            return (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.06 }}
                className={`flex items-start gap-3 p-3 rounded-xl border transition-all duration-300 ${
                  isCompleted
                    ? "bg-[#151719]/80 border-[#C8A96B]/30 text-[#F5F1E8]"
                    : isLoading
                    ? "bg-[#151719]/40 border-[#C8A96B]/50 text-[#E0C58A]"
                    : "bg-[#08090A]/40 border-white/5 text-[#A6A39C]/40"
                }`}
              >
                <div className="mt-0.5 flex-shrink-0">
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : isLoading ? (
                    <Loader2 className="w-4 h-4 text-[#C8A96B] animate-spin" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-white/20" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-serif-cinzel font-medium">
                      {stage.label}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider">
                      {isCompleted ? (
                        <span className="text-emerald-400 font-semibold">✓ Ready</span>
                      ) : isLoading ? (
                        <span className="text-[#C8A96B]">Calibrating...</span>
                      ) : (
                        <span className="text-[#A6A39C]/40">Queued</span>
                      )}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A6A39C] mt-0.5 leading-snug">
                    {stage.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enter CTA button */}
        <div>
          <AnimatePresence mode="wait">
            {isReady ? (
              <motion.button
                key="enter-btn"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                type="button"
                onClick={onEnterExperience}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#E0C58A] text-[#08090A] text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-[#C8A96B]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>ENTER IMMERSIVE 3D EXPERIENCE</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            ) : (
              <div
                key="loading-btn"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-[#C8A96B]/30 bg-[#08090A] text-[#A6A39C] text-xs font-mono uppercase tracking-wider"
              >
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#C8A96B]" />
                <span>Synchronizing Spatial Environment ({progress}%)</span>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Footnote telemetry */}
        <div className="mt-8 pt-6 border-t border-[#C8A96B]/15 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-[#A6A39C]">
          <span>ANCHORS: 16/16 LOCKED</span>
          <span>COORDINATES: 28.6562° N, 77.2410° E</span>
          <span className="text-[#C8A96B]">ERA: {activeEra.title}</span>
        </div>
      </div>
    </div>
  );
}
