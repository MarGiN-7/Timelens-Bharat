"use client";

import React from "react";
import Link from "next/link";
import { Monument } from "@/types/monument";
import { ArrowRight, MapPin, Award, Lock } from "lucide-react";

interface MonumentCardProps {
  monument: Monument;
  variant?: "featured" | "upcoming";
}

export function MonumentCard({ monument, variant = "upcoming" }: MonumentCardProps) {
  if (variant === "featured") {
    return (
      <div className="relative rounded-3xl border border-[#C8A96B]/35 bg-gradient-to-b from-[#151719]/95 via-[#0D0E10] to-[#08090A] p-8 sm:p-12 shadow-2xl shadow-black/80 overflow-hidden group">
        {/* Subtle Exhibition Corner Accents */}
        <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C8A96B]/60" />
        <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C8A96B]/60" />
        <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C8A96B]/60" />
        <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C8A96B]/60" />

        {/* Ambient Warm Golden Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8A96B]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#B87352]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Monument Narrative & Specifications */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-7">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C8A96B]/40 bg-[#08090A] text-[10px] font-mono tracking-wider text-[#E0C58A] uppercase">
                  <Award className="w-3 h-3 text-[#C8A96B]" />
                  UNESCO World Heritage Site
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C8A96B]/20 bg-[#151719] text-[10px] font-mono tracking-wider text-[#A6A39C]">
                  <MapPin className="w-3 h-3 text-[#C8A96B]" />
                  {monument.location}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C8A96B]/15 border border-[#C8A96B]/30 text-[9px] font-mono text-[#E0C58A] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  PRIMARY MONUMENT
                </span>
              </div>

              {/* Title & Indigenous name */}
              <h3 className="font-serif-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F1E8] tracking-tight">
                {monument.name.toUpperCase()}
              </h3>
              <p className="font-serif-cinzel text-xl sm:text-2xl text-[#C8A96B] mt-1 italic font-medium">
                {monument.indigenousName}
              </p>

              {/* Historical Description */}
              <p className="mt-5 text-sm sm:text-base text-[#A6A39C] leading-relaxed max-w-2xl">
                {monument.description}
              </p>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 p-5 rounded-2xl border border-[#C8A96B]/20 bg-[#08090A]/80 backdrop-blur-sm">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6A39C] block mb-1">
                    Built
                  </span>
                  <span className="font-serif-cinzel text-sm sm:text-base font-semibold text-[#F5F1E8] block">
                    {monument.metadata.built}
                  </span>
                  <span className="text-[10px] font-mono text-[#C8A96B]">17th Century</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6A39C] block mb-1">
                    Dynasty
                  </span>
                  <span className="font-serif-cinzel text-sm sm:text-base font-semibold text-[#F5F1E8] block">
                    {monument.metadata.dynasty}
                  </span>
                  <span className="text-[10px] font-mono text-[#A6A39C]">Imperial Rule</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6A39C] block mb-1">
                    Commissioned By
                  </span>
                  <span className="font-serif-cinzel text-sm sm:text-base font-semibold text-[#F5F1E8] block truncate">
                    {monument.metadata.commissionedBy}
                  </span>
                  <span className="text-[10px] font-mono text-[#A6A39C]">5th Mughal Emperor</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6A39C] block mb-1">
                    Architect
                  </span>
                  <span className="font-serif-cinzel text-sm sm:text-base font-semibold text-[#F5F1E8] block truncate">
                    {monument.metadata.architect}
                  </span>
                  <span className="text-[10px] font-mono text-[#C8A96B]">Master Builder</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6A39C] block mb-1">
                    Era
                  </span>
                  <span className="font-serif-cinzel text-sm sm:text-base font-semibold text-[#F5F1E8] block">
                    {monument.metadata.eraPeriod}
                  </span>
                  <span className="text-[10px] font-mono text-[#A6A39C]">Architectural Peak</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6A39C] block mb-1">
                    Spatial Anchors
                  </span>
                  <span className="font-serif-cinzel text-sm sm:text-base font-semibold text-[#E0C58A] block">
                    3 Eras Ready
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">1650 • 1857 • Present</span>
                </div>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <Link
                href="/monuments/red-fort"
                className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#E0C58A] text-[#08090A] text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-[#C8A96B]/30 hover:brightness-105 active:scale-[0.98]"
              >
                <span>Explore Monument</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Spatial Reticle Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl border border-[#C8A96B]/30 bg-[#08090A] p-6 flex flex-col justify-between overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-spatial-grid opacity-25 pointer-events-none" />

              {/* Plaque Header */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#A6A39C] border-b border-[#C8A96B]/15 pb-3">
                <span className="text-[#C8A96B] font-semibold">PRIMARY EXHIBIT #01</span>
                <span>28.6562° N, 77.2410° E</span>
              </div>

              {/* Graphic Iconography & Concentric Geometry */}
              <div className="relative my-auto flex flex-col items-center justify-center py-6">
                <div className="relative w-56 h-56 rounded-full border border-[#C8A96B]/25 flex items-center justify-center">
                  <div className="w-44 h-44 rounded-full border border-dashed border-[#C8A96B]/30 flex items-center justify-center">
                    {/* SVG Gateway Silhouette */}
                    <svg
                      viewBox="0 0 200 220"
                      className="w-40 h-44 drop-shadow-[0_12px_24px_rgba(200,169,107,0.25)]"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 220 H180 V130 H150 V145 H120 V120 H80 V145 H50 V130 H20 V220 Z"
                        fill="#6E2C1E"
                        fillOpacity="0.85"
                        stroke="#C8A96B"
                        strokeWidth="1.5"
                      />
                      {/* Central Arch */}
                      <path
                        d="M75 220 V150 C75 135, 87 125, 100 118 C113 125, 125 135, 125 150 V220 Z"
                        fill="#08090A"
                        stroke="#E0C58A"
                        strokeWidth="1.8"
                      />
                      {/* Left Cupola */}
                      <rect x="30" y="105" width="2" height="15" fill="#C8A96B" />
                      <rect x="46" y="105" width="2" height="15" fill="#C8A96B" />
                      <path d="M26 105 Q39 88 52 105 Z" fill="#C8A96B" fillOpacity="0.8" />
                      {/* Right Cupola */}
                      <rect x="148" y="105" width="2" height="15" fill="#C8A96B" />
                      <rect x="164" y="105" width="2" height="15" fill="#C8A96B" />
                      <path d="M144 105 Q157 88 170 105 Z" fill="#C8A96B" fillOpacity="0.8" />
                      {/* Center Finial */}
                      <path d="M85 110 Q100 92 115 110 Z" fill="#E0C58A" fillOpacity="0.9" />
                      <line x1="100" y1="92" x2="100" y2="82" stroke="#E0C58A" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Plaque Footer */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#A6A39C] border-t border-[#C8A96B]/15 pt-3">
                <span className="text-[#C8A96B]">3D SPATIAL ANCHORS</span>
                <span>STATUS: READY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Upcoming / Coming Soon Card
  return (
    <div className="relative rounded-2xl border border-[#C8A96B]/15 bg-gradient-to-b from-[#151719]/60 via-[#0D0E10]/80 to-[#08090A] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#C8A96B]/35 hover:-translate-y-1 shadow-lg shadow-black/40 group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-white/10 bg-[#08090A] text-[9px] font-mono tracking-wider text-[#A6A39C] uppercase">
            <MapPin className="w-3 h-3 text-[#C8A96B]/60" />
            {monument.location.split(",")[0]}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-[#C8A96B]/25 bg-[#08090A] text-[9px] font-mono text-[#C8A96B] font-semibold uppercase">
            <Lock className="w-2.5 h-2.5" />
            {monument.statusBadge}
          </span>
        </div>

        {/* Title */}
        <h4 className="font-serif-cinzel text-xl sm:text-2xl font-bold text-[#F5F1E8] group-hover:text-[#E0C58A] transition-colors">
          {monument.name}
        </h4>
        <p className="font-serif-cinzel text-sm text-[#C8A96B]/80 italic mt-0.5">
          {monument.indigenousName}
        </p>

        {/* Description */}
        <p className="text-xs text-[#A6A39C] leading-relaxed mt-3 mb-6 line-clamp-3">
          {monument.description}
        </p>

        {/* Concise Spec Grid */}
        <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl border border-white/5 bg-[#08090A]/60 text-[11px] font-mono text-[#A6A39C] mb-6">
          <div>
            <span className="text-[9px] uppercase block text-[#A6A39C]/70">Built</span>
            <span className="text-[#F5F1E8] font-medium">{monument.metadata.built}</span>
          </div>
          <div>
            <span className="text-[9px] uppercase block text-[#A6A39C]/70">Dynasty</span>
            <span className="text-[#F5F1E8] font-medium truncate block">
              {monument.metadata.dynasty.split("/")[0]}
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#A6A39C]">
        <span className="text-[10px] uppercase text-[#C8A96B]/80">Spatial Archive Phase 4</span>
        <span className="inline-flex items-center gap-1 text-[10px] text-[#A6A39C] group-hover:text-[#F5F1E8] transition-colors">
          Coming Soon
        </span>
      </div>
    </div>
  );
}
