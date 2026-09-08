"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { EraVisualConfig, HotspotData } from "@/data/redFortExperience";
import { RedFortScene } from "./RedFortScene";

interface ExperienceCanvasProps {
  activeEra: EraVisualConfig;
  hotspots: HotspotData[];
  selectedHotspotId: string | null;
  onSelectHotspot: (hotspot: HotspotData) => void;
}

export function ExperienceCanvas({
  activeEra,
  hotspots,
  selectedHotspotId,
  onSelectHotspot,
}: ExperienceCanvasProps) {
  return (
    <div className="relative w-full h-full min-h-[600px] bg-[#08090A] overflow-hidden">
      <Canvas
        shadows
        dpr={[1, 1.75]} // Cap max DPR to 1.75 for smooth performance across standard laptops
        camera={{
          position: [10, 6, 15],
          fov: 52,
          near: 0.1,
          far: 120,
        }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          toneMappingExposure: 1.05,
        }}
      >
        <Suspense fallback={null}>
          <RedFortScene
            activeEra={activeEra}
            hotspots={hotspots}
            selectedHotspotId={selectedHotspotId}
            onSelectHotspot={onSelectHotspot}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
