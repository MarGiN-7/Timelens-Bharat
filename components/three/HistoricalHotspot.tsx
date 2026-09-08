"use client";

import React, { useState } from "react";
import { Html } from "@react-three/drei";
import { HotspotData } from "@/data/redFortExperience";
import { Sparkles } from "lucide-react";

interface HistoricalHotspotProps {
  hotspot: HotspotData;
  isSelected?: boolean;
  onSelect: (hotspot: HotspotData) => void;
}

export function HistoricalHotspot({
  hotspot,
  isSelected = false,
  onSelect,
}: HistoricalHotspotProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <group position={hotspot.position}>
      {/* 3D Invisible Pointer Catcher Mesh to support raycasting in Three.js */}
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          onSelect(hotspot);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setIsHovered(true);
        }}
        onPointerOut={() => setIsHovered(false)}
        visible={false}
      >
        <sphereGeometry args={[0.5, 12, 12]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* HTML Overlay Marker attached to 3D position */}
      <Html center distanceFactor={16} zIndexRange={[100, 0]}>
        <div className="relative flex flex-col items-center select-none group">
          {/* Tooltip on hover or when selected */}
          {(isHovered || isSelected) && (
            <div className="absolute bottom-full mb-2.5 px-3 py-1 rounded-md bg-[#08090A]/95 border border-[#C8A96B]/50 text-center shadow-xl whitespace-nowrap pointer-events-none backdrop-blur-md">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C8A96B] block">
                {hotspot.category}
              </span>
              <span className="font-serif-cinzel text-xs font-bold text-[#F5F1E8]">
                {hotspot.title}
              </span>
            </div>
          )}

          {/* Interactive Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(hotspot);
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none"
            aria-label={`Inspect ${hotspot.title}`}
          >
            {/* Outer Animated Pulse Wave */}
            <span className="absolute -inset-1.5 rounded-full border border-[#C8A96B]/60 animate-ping opacity-40 pointer-events-none" />

            {/* Glowing Golden Ring Frame */}
            <span
              className={`absolute inset-0 rounded-full border-2 transition-all duration-300 ${
                isSelected
                  ? "border-[#E0C58A] bg-[#C8A96B] shadow-[0_0_15px_rgba(200,169,107,0.8)]"
                  : isHovered
                  ? "border-[#C8A96B] bg-[#151719]/90 shadow-[0_0_12px_rgba(200,169,107,0.5)]"
                  : "border-[#C8A96B]/60 bg-[#08090A]/85 backdrop-blur-sm"
              }`}
            />

            {/* Center Reticle Dot / Sparkle */}
            <div className="relative z-10">
              {isSelected ? (
                <Sparkles className="w-4 h-4 text-[#08090A]" />
              ) : (
                <div className="w-2.5 h-2.5 rounded-full bg-[#E0C58A] shadow-sm" />
              )}
            </div>
          </button>
        </div>
      </Html>
    </group>
  );
}
