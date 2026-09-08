"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HistoricalEra, EraId } from "@/types/monument";
import {
  Compass,
  Eye,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface ExperienceShellProps {
  monumentName: string;
  indigenousName: string;
  activeEra: HistoricalEra;
  availableEras: HistoricalEra[];
  onSelectEra: (eraId: EraId) => void;
  onRestartLoader: () => void;
}

type PerspectiveMode = "guard" | "courtier" | "merchant";

interface PerspectiveInfo {
  id: PerspectiveMode;
  name: string;
  title: string;
  viewAltitude: string;
  description: string;
  telemetryTag: string;
}

const PERSPECTIVES: PerspectiveInfo[] = [
  {
    id: "guard",
    name: "Royal Guard",
    title: "Imperial Sentinel Posture",
    viewAltitude: "14.5m Rampart Elevation",
    description: "Vantage from the Lahori Gate battlements observing courtyard approaches and military protocol.",
    telemetryTag: "TACTICAL DEFENSE MATRIX",
  },
  {
    id: "courtier",
    name: "Imperial Courtier",
    title: "Diwan-i-Khas Protocol",
    viewAltitude: "2.1m Hall Level",
    description: "Inside the marble halls beneath gilded arches, witnessing royal proclamations and court ceremonies.",
    telemetryTag: "CEREMONIAL INTERIOR MATRIX",
  },
  {
    id: "merchant",
    name: "Visiting Merchant",
    title: "Meena Bazaar Perspective",
    viewAltitude: "1.7m Street Level",
    description: "Arriving with silk caravans through the vaulted covered arcade of the Chhatta Chowk.",
    telemetryTag: "CIVILIAN COMMERCE MATRIX",
  },
];

export function ExperienceShell({
  monumentName,
  indigenousName,
  activeEra,
  availableEras,
  onSelectEra,
  onRestartLoader,
}: ExperienceShellProps) {
  const [activePerspective, setActivePerspective] = useState<PerspectiveMode>("guard");
  const currentPerspective =
    PERSPECTIVES.find((p) => p.id === activePerspective) || PERSPECTIVES[0];

  return (
    <div className="relative w-full min-h-[82vh] rounded-3xl border border-[#C8A96B]/30 bg-[#08090A] flex flex-col overflow-hidden shadow-2xl shadow-black/95">
      {/* Top Experience HUD Bar */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-[#C8A96B]/20 bg-[#0D0E10]/90 backdrop-blur-md">
        {/* Left: Monument Brand & Back Link */}
        <div className="flex items-center gap-4">
          <Link
            href="/monuments/red-fort"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A6A39C] hover:text-[#F5F1E8] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#C8A96B]" />
            <span>Hub</span>
          </Link>
          <span className="text-[#C8A96B]/30">|</span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif-cinzel text-sm sm:text-base font-bold text-[#F5F1E8]">
                {monumentName}
              </span>
              <span className="text-xs font-serif-cinzel text-[#C8A96B] italic hidden sm:inline">
                {indigenousName}
              </span>
            </div>
            <span className="text-[9px] font-mono tracking-wider text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SPATIAL ENGINE RUNNING
            </span>
          </div>
        </div>

        {/* Center: Era Quick Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl border border-[#C8A96B]/25 bg-[#08090A]">
          {availableEras.map((era) => {
            const isSelected = era.id === activeEra.id;
            return (
              <button
                key={era.id}
                type="button"
                onClick={() => onSelectEra(era.id)}
                className={`px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  isSelected
                    ? "bg-[#C8A96B] text-[#08090A] font-bold shadow-md shadow-[#C8A96B]/20"
                    : "text-[#A6A39C] hover:text-[#F5F1E8]"
                }`}
              >
                {era.yearLabel}
              </button>
            );
          })}
        </div>

        {/* Right: Telemetry Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onRestartLoader}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C8A96B]/20 bg-[#151719] text-[10px] font-mono text-[#A6A39C] hover:text-[#F5F1E8] hover:border-[#C8A96B]/50 transition-colors"
            title="Re-run calibration sequence"
          >
            <RotateCcw className="w-3 h-3 text-[#C8A96B]" />
            <span>Recalibrate</span>
          </button>
          <Link
            href="/monuments"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C8A96B]/15 border border-[#C8A96B]/40 text-[10px] font-mono text-[#E0C58A] hover:bg-[#C8A96B]/25 transition-colors"
          >
            <span>All Monuments</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Main Spatial Viewport Simulation */}
      <div className="relative flex-1 flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden">
        {/* Spatial Grid Background */}
        <div className="absolute inset-0 bg-spatial-grid opacity-30 pointer-events-none" />

        {/* Dynamic Era Atmospheric Lighting */}
        <div
          className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
            activeEra.id === "1650"
              ? "bg-[radial-gradient(ellipse_at_center,rgba(200,169,107,0.18)_0%,transparent_70%)]"
              : activeEra.id === "1857"
              ? "bg-[radial-gradient(ellipse_at_center,rgba(184,115,82,0.16)_0%,transparent_70%)]"
              : "bg-[radial-gradient(ellipse_at_center,rgba(110,180,220,0.12)_0%,transparent_70%)]"
          }`}
        />

        {/* Floating Spatial HUD Telemetry Overlays */}
        <div className="absolute top-6 left-6 z-10 hidden md:block text-[10px] font-mono text-[#A6A39C] space-y-1">
          <p className="text-[#C8A96B]">LAT: 28.6562° N | LON: 77.2410° E</p>
          <p>FOV: 68.0° | PITCH: -4.2° | YAW: 118.5°</p>
          <p>ELEVATION: {currentPerspective.viewAltitude}</p>
        </div>

        <div className="absolute top-6 right-6 z-10 hidden md:block text-right text-[10px] font-mono text-[#A6A39C] space-y-1">
          <p className="text-[#E0C58A]">{currentPerspective.telemetryTag}</p>
          <p>LOD: LEVEL 0 (HIGH DENSITY MESH)</p>
          <p>SHADERS: RED SANDSTONE & MARBLE</p>
        </div>

        {/* Central Spatial Target & Geometry Visualization */}
        <div className="relative z-10 max-w-xl w-full flex flex-col items-center text-center">
          {/* Spatial Reticle */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-dashed border-[#C8A96B]/40 flex items-center justify-center mb-8">
            <div className="absolute top-0 bottom-0 w-[1px] bg-[#C8A96B]/20" />
            <div className="absolute left-0 right-0 h-[1px] bg-[#C8A96B]/20" />

            {/* Inner Ring */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-[#C8A96B]/20 flex items-center justify-center bg-[#08090A]/70 backdrop-blur-sm">
              <div className="flex flex-col items-center">
                <Compass className="w-10 h-10 text-[#C8A96B] animate-pulse mb-2" />
                <span className="font-serif-cinzel text-lg font-bold text-[#F5F1E8]">
                  {activeEra.yearLabel}
                </span>
                <span className="text-[10px] font-mono text-[#E0C58A] uppercase tracking-wider">
                  {activeEra.title}
                </span>
              </div>
            </div>

            {/* Orbiting Spatial Node */}
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-[#E0C58A] shadow-md shadow-[#C8A96B]"
              animate={{ rotate: 360 }}
              style={{ originX: "144px", originY: "144px" }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />
          </div>

          {/* Sophisticated Phase 3 Integration Plaque */}
          <div className="w-full rounded-2xl border border-[#C8A96B]/30 bg-gradient-to-b from-[#151719]/90 to-[#0D0E10]/95 p-6 shadow-2xl backdrop-blur-md text-left">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#C8A96B] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SPATIAL COMPUTING STAGE READY</span>
            </div>

            <h3 className="font-serif-cinzel text-base sm:text-lg font-bold text-[#F5F1E8] mb-2">
              Spatial Canvas Initialized & Calibrated
            </h3>

            <p className="text-xs sm:text-sm text-[#A6A39C] leading-relaxed mb-4">
              All architectural coordinates, era state bindings, and multi-perspective telemetry
              pipelines are fully synchronized. The full Three.js WebGL procedural renderer and
              real-time walkthrough engine will be integrated in Phase 3.
            </p>

            {/* Active Perspective Context Bar */}
            <div className="p-3 rounded-xl border border-[#C8A96B]/20 bg-[#08090A] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-[9px] font-mono uppercase text-[#A6A39C] block">
                  Active Narrative Perspective
                </span>
                <span className="font-serif-cinzel font-semibold text-[#E0C58A]">
                  {currentPerspective.name} — {currentPerspective.title}
                </span>
                <p className="text-[11px] text-[#A6A39C] mt-0.5">
                  {currentPerspective.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Perspective Lens Controller */}
      <div className="relative z-20 px-6 py-4 border-t border-[#C8A96B]/20 bg-[#0D0E10]/90 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-[#C8A96B]" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#F5F1E8]">
            PerspectiveLens:
          </span>
        </div>

        {/* 3 Perspective Choices */}
        <div className="flex flex-wrap items-center gap-2">
          {PERSPECTIVES.map((p) => {
            const isActive = p.id === activePerspective;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePerspective(p.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-[#C8A96B] text-[#08090A] font-semibold shadow-md shadow-[#C8A96B]/30"
                    : "border border-[#C8A96B]/20 bg-[#151719] text-[#A6A39C] hover:text-[#F5F1E8] hover:border-[#C8A96B]/50"
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>

        <div className="text-right text-[10px] font-mono text-[#A6A39C]">
          <span>ERA: </span>
          <span className="text-[#C8A96B] font-semibold">{activeEra.yearLabel}</span>
        </div>
      </div>
    </div>
  );
}
