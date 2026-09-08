"use client";

import React, { useState, useCallback, useEffect } from "react";
import { HistoricalEra, EraId } from "@/types/monument";
import { ERA_CONFIGS, RED_FORT_HOTSPOTS, EraVisualConfig, HotspotData } from "@/data/redFortExperience";
import { ExperienceCanvas } from "@/components/three/ExperienceCanvas";
import { ExperienceHUD } from "@/components/experience/ExperienceHUD";
import { HotspotModal } from "@/components/experience/HotspotModal";
import { LensId } from "@/data/livingHistory";

interface ExperienceShellProps {
  monumentName: string;
  indigenousName: string;
  activeEra: HistoricalEra;
  availableEras: HistoricalEra[];
  onSelectEra: (eraId: EraId) => void;
  onRestartLoader: () => void;
}

/** Maps the page-level HistoricalEra (from data/redFort.ts) to the
 *  visual config used by all Three.js scene components (from data/redFortExperience.ts).
 *  Falls back to "1650" config if the id is somehow absent. */
function toVisualConfig(era: HistoricalEra): EraVisualConfig {
  return ERA_CONFIGS[era.id as EraId] ?? ERA_CONFIGS["1650"];
}

export function ExperienceShell({
  activeEra,
  availableEras,
  onSelectEra,
}: ExperienceShellProps) {
  const activeVisual = toVisualConfig(activeEra);
  const availableVisuals = availableEras.map(toVisualConfig);

  const [selectedHotspot, setSelectedHotspot] = useState<HotspotData | null>(null);
  const [selectedHotspotId, setSelectedHotspotId] = useState<string | null>(null);
  const [activeLens, setActiveLens] = useState<LensId>("royal");

  const handleSelectHotspot = useCallback((hotspot: HotspotData) => {
    setSelectedHotspot(hotspot);
    setSelectedHotspotId(hotspot.id);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedHotspot(null);
    setSelectedHotspotId(null);
  }, []);

  // Close modal on ESC key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleCloseModal]);

  // Reset selected hotspot when era changes
  useEffect(() => {
    setSelectedHotspot(null);
    setSelectedHotspotId(null);
  }, [activeEra.id]);

  return (
    <div className="relative w-full min-h-[82vh] rounded-3xl border border-[#C8A96B]/30 bg-[#08090A] overflow-hidden shadow-2xl shadow-black/95">
      {/* ── 3-D Spatial Canvas ── */}
      <div className="absolute inset-0">
        <ExperienceCanvas
          activeEra={activeVisual}
          hotspots={RED_FORT_HOTSPOTS}
          selectedHotspotId={selectedHotspotId}
          onSelectHotspot={handleSelectHotspot}
        />
      </div>

      {/* ── HUD overlay ── */}
      <ExperienceHUD
        activeEra={activeVisual}
        availableEras={availableVisuals}
        onSelectEra={onSelectEra}
        activeHotspotCount={RED_FORT_HOTSPOTS.length}
        activeLens={activeLens}
        onSelectLens={setActiveLens}
      />

      {/* ── Hotspot detail modal (portal to fixed) ── */}
      <HotspotModal
        hotspot={selectedHotspot}
        activeLens={activeLens}
        onClose={handleCloseModal}
      />
    </div>
  );
}
