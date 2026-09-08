"use client";

import React from "react";
import { EraVisualConfig, HotspotData } from "@/data/redFortExperience";
import { EnvironmentLighting } from "./EnvironmentLighting";
import { DustParticles } from "./DustParticles";
import { Courtyard } from "./Courtyard";
import { MughalGate } from "./MughalGate";
import { WaterChannel } from "./WaterChannel";
import { FortWall } from "./FortWall";
import { MughalArch } from "./MughalArch";
import { Chhatri } from "./Chhatri";
import { HistoricalHotspot } from "./HistoricalHotspot";
import { ExperienceControls } from "./ExperienceControls";

interface RedFortSceneProps {
  activeEra: EraVisualConfig;
  hotspots: HotspotData[];
  selectedHotspotId: string | null;
  onSelectHotspot: (hotspot: HotspotData) => void;
}

export function RedFortScene({
  activeEra,
  hotspots,
  selectedHotspotId,
  onSelectHotspot,
}: RedFortSceneProps) {
  const { materials, particles } = activeEra;

  return (
    <>
      {/* Dynamic Lighting & Atmospheric Fog */}
      <EnvironmentLighting config={activeEra} />

      {/* Ambient Floating Dust / Smoke Haze Particles */}
      <DustParticles
        count={particles.count}
        color={particles.color}
        size={particles.size}
        speed={particles.speed}
        opacity={particles.opacity}
      />

      {/* Main Ground Courtyard and Terraces */}
      <Courtyard
        sandstoneColor={materials.sandstonePrimary}
        gridColor={activeEra.lighting.groundColor}
      />

      {/* Nahr-i-Bihisht Central Marble Canal & Fountains */}
      <WaterChannel
        waterColor={materials.waterColor}
        marbleColor={materials.marbleAccent}
        opacity={materials.waterOpacity}
        flowSpeed={materials.waterFlowSpeed}
      />

      {/* Monumental Lahori Gate Ceremonial Gateway */}
      <MughalGate
        position={[0, 0, 5]}
        sandstoneColor={materials.sandstonePrimary}
        sandstoneSecondary={materials.sandstoneSecondary}
        marbleColor={materials.marbleAccent}
        goldColor={materials.goldTrim}
        isModernEra={activeEra.id === "present"}
      />

      {/* Front Gateway Connector Rampart Walls */}
      <FortWall
        position={[-8.5, 0, 5]}
        length={7.5}
        height={6.2}
        sandstoneColor={materials.sandstonePrimary}
        accentColor={materials.marbleAccent}
      />
      <FortWall
        position={[8.5, 0, 5]}
        length={7.5}
        height={6.2}
        sandstoneColor={materials.sandstonePrimary}
        accentColor={materials.marbleAccent}
      />

      {/* Left Lateral Rampart Wall */}
      <FortWall
        position={[-12.25, 0, -5]}
        rotation={[0, Math.PI / 2, 0]}
        length={22}
        height={6.0}
        sandstoneColor={materials.sandstonePrimary}
        accentColor={materials.marbleAccent}
      />

      {/* Right Lateral Rampart Wall */}
      <FortWall
        position={[12.25, 0, -5]}
        rotation={[0, -Math.PI / 2, 0]}
        length={22}
        height={6.0}
        sandstoneColor={materials.sandstonePrimary}
        accentColor={materials.marbleAccent}
      />

      {/* Diwan-i-Aam (Hall of Public Audience) Colonnade Pavilion in the North Courtyard */}
      <group position={[0, 0.24, -10]}>
        {/* Rear Hall Wall */}
        <mesh position={[0, 2.5, -4]} castShadow receiveShadow>
          <boxGeometry args={[16, 5, 1.2]} />
          <meshStandardMaterial color={materials.sandstonePrimary} roughness={0.8} />
        </mesh>

        {/* Imperial Marble Jharokha (Throne Balcony) recessed in rear wall */}
        <mesh position={[0, 2.8, -3.3]} castShadow>
          <boxGeometry args={[2.8, 1.8, 0.5]} />
          <meshStandardMaterial color={materials.marbleAccent} roughness={0.4} />
        </mesh>
        <Chhatri
          position={[0, 3.8, -3.2]}
          radius={0.6}
          height={1.8}
          sandstoneColor={materials.sandstonePrimary}
          marbleColor={materials.marbleAccent}
          goldColor={materials.goldTrim}
        />

        {/* Multi-Bay Front Facade of Mughal Arches */}
        <MughalArch
          position={[-4.8, 0, -1]}
          width={3.2}
          height={4.2}
          color={materials.sandstoneSecondary}
          accentColor={materials.marbleAccent}
        />
        <MughalArch
          position={[-1.6, 0, -1]}
          width={3.2}
          height={4.2}
          color={materials.sandstoneSecondary}
          accentColor={materials.marbleAccent}
        />
        <MughalArch
          position={[1.6, 0, -1]}
          width={3.2}
          height={4.2}
          color={materials.sandstoneSecondary}
          accentColor={materials.marbleAccent}
        />
        <MughalArch
          position={[4.8, 0, -1]}
          width={3.2}
          height={4.2}
          color={materials.sandstoneSecondary}
          accentColor={materials.marbleAccent}
        />

        {/* Pavilion Roof Cornice Slab */}
        <mesh position={[0, 4.5, -2.5]} castShadow receiveShadow>
          <boxGeometry args={[16.8, 0.35, 5]} />
          <meshStandardMaterial color={materials.sandstonePrimary} roughness={0.7} />
        </mesh>

        {/* Corner Pavilion Chhatris */}
        <Chhatri
          position={[-7.2, 4.7, -0.6]}
          radius={0.7}
          height={2.2}
          sandstoneColor={materials.sandstonePrimary}
          marbleColor={materials.marbleAccent}
          goldColor={materials.goldTrim}
        />
        <Chhatri
          position={[7.2, 4.7, -0.6]}
          radius={0.7}
          height={2.2}
          sandstoneColor={materials.sandstonePrimary}
          marbleColor={materials.marbleAccent}
          goldColor={materials.goldTrim}
        />
      </group>

      {/* Interactive 3D Historical Hotspots */}
      {hotspots.map((hotspot) => (
        <HistoricalHotspot
          key={hotspot.id}
          hotspot={hotspot}
          isSelected={selectedHotspotId === hotspot.id}
          onSelect={onSelectHotspot}
        />
      ))}

      {/* Cinematic Camera Orbit Controls */}
      <ExperienceControls />
    </>
  );
}
