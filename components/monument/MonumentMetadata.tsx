"use client";

import React from "react";
import { MonumentMetadata as MetadataType } from "@/types/monument";
import { Calendar, Landmark, User, Shield, Layers, MapPin } from "lucide-react";

interface MonumentMetadataProps {
  metadata: MetadataType;
  className?: string;
  variant?: "full" | "compact";
}

export function MonumentMetadata({
  metadata,
  className = "",
  variant = "full",
}: MonumentMetadataProps) {
  if (variant === "compact") {
    return (
      <div
        className={`grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl border border-[#C8A96B]/20 bg-[#08090A]/80 backdrop-blur-sm ${className}`}
      >
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6A39C] flex items-center gap-1.5 mb-1">
            <Calendar className="w-3 h-3 text-[#C8A96B]" />
            Built
          </span>
          <span className="text-xs sm:text-sm font-serif-cinzel font-semibold text-[#F5F1E8]">
            {metadata.built}
          </span>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6A39C] flex items-center gap-1.5 mb-1">
            <Landmark className="w-3 h-3 text-[#C8A96B]" />
            Dynasty
          </span>
          <span className="text-xs sm:text-sm font-serif-cinzel font-semibold text-[#F5F1E8]">
            {metadata.dynasty}
          </span>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6A39C] flex items-center gap-1.5 mb-1">
            <User className="w-3 h-3 text-[#C8A96B]" />
            Commissioned
          </span>
          <span className="text-xs sm:text-sm font-serif-cinzel font-semibold text-[#F5F1E8]">
            {metadata.commissionedBy}
          </span>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6A39C] flex items-center gap-1.5 mb-1">
            <Layers className="w-3 h-3 text-[#C8A96B]" />
            Architect
          </span>
          <span className="text-xs sm:text-sm font-serif-cinzel font-semibold text-[#F5F1E8] truncate block">
            {metadata.architect}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-2xl border border-[#C8A96B]/25 bg-gradient-to-br from-[#151719]/90 via-[#0D0E10] to-[#08090A] p-6 sm:p-8 shadow-xl shadow-black/50 ${className}`}
    >
      {/* Corner Exhibition Plaque Accents */}
      <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-[#C8A96B]/60" />
      <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-[#C8A96B]/60" />
      <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-[#C8A96B]/60" />
      <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-[#C8A96B]/60" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#C8A96B]/15 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-[#C8A96B]" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C8A96B]">
            ARCHAEOLOGICAL ARCHIVE DATA
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#A6A39C]">
          ASI VERIFIED
        </span>
      </div>

      {/* Grid of metadata */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6A39C] block mb-1">
            Built
          </span>
          <p className="font-serif-cinzel text-base font-semibold text-[#F5F1E8]">
            {metadata.built}
          </p>
          <span className="text-[10px] font-mono text-[#C8A96B]">{metadata.eraPeriod}</span>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6A39C] block mb-1">
            Dynasty
          </span>
          <p className="font-serif-cinzel text-base font-semibold text-[#F5F1E8]">
            {metadata.dynasty}
          </p>
          <span className="text-[10px] font-mono text-[#A6A39C]">Imperial Hegemony</span>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6A39C] block mb-1">
            Commissioned By
          </span>
          <p className="font-serif-cinzel text-base font-semibold text-[#F5F1E8]">
            {metadata.commissionedBy}
          </p>
          <span className="text-[10px] font-mono text-[#A6A39C]">5th Mughal Emperor</span>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6A39C] block mb-1">
            Architect
          </span>
          <p className="font-serif-cinzel text-base font-semibold text-[#F5F1E8]">
            {metadata.architect}
          </p>
          <span className="text-[10px] font-mono text-[#C8A96B]">Chief Royal Architect</span>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6A39C] block mb-1">
            Primary Materials
          </span>
          <p className="text-sm font-medium text-[#F5F1E8]">
            {metadata.material}
          </p>
          <span className="text-[10px] font-mono text-[#A6A39C]">Pietra Dura Inlays</span>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6A39C] block mb-1">
            Spatial Coordinates
          </span>
          <p className="text-xs font-mono font-medium text-[#E0C58A] flex items-center gap-1 mt-1">
            <MapPin className="w-3 h-3 text-[#C8A96B]" />
            {metadata.coordinates}
          </p>
          <span className="text-[10px] font-mono text-[#A6A39C]">{metadata.elevation}</span>
        </div>
      </div>
    </div>
  );
}
