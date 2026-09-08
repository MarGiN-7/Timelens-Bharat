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

      {/* ── Perimeter Fortification Walls ── */}

      {/* Front Gateway Connector Rampart Walls (flanking the Lahori Gate) */}
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

      {/* Rear (North) Enclosure Wall */}
      <FortWall
        position={[0, 0, -16.5]}
        length={24.5}
        height={6.0}
        sandstoneColor={materials.sandstonePrimary}
        accentColor={materials.marbleAccent}
      />

      {/* ── Corner Bastions / Octagonal Towers ── */}
      {/* Front-Left Bastion */}
      <group position={[-12.25, 0, 5.5]}>
        <mesh position={[0, 4.5, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.4, 1.6, 9, 8]} />
          <meshStandardMaterial color={materials.sandstonePrimary} roughness={0.78} />
        </mesh>
        <mesh position={[0, 9.2, 0]} castShadow>
          <cylinderGeometry args={[1.55, 1.4, 0.5, 8]} />
          <meshStandardMaterial color={materials.sandstoneSecondary} roughness={0.7} />
        </mesh>
        <Chhatri
          position={[0, 9.5, 0]}
          radius={1.1}
          height={2.4}
          sandstoneColor={materials.sandstonePrimary}
          marbleColor={materials.marbleAccent}
          goldColor={materials.goldTrim}
        />
      </group>

      {/* Front-Right Bastion */}
      <group position={[12.25, 0, 5.5]}>
        <mesh position={[0, 4.5, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.4, 1.6, 9, 8]} />
          <meshStandardMaterial color={materials.sandstonePrimary} roughness={0.78} />
        </mesh>
        <mesh position={[0, 9.2, 0]} castShadow>
          <cylinderGeometry args={[1.55, 1.4, 0.5, 8]} />
          <meshStandardMaterial color={materials.sandstoneSecondary} roughness={0.7} />
        </mesh>
        <Chhatri
          position={[0, 9.5, 0]}
          radius={1.1}
          height={2.4}
          sandstoneColor={materials.sandstonePrimary}
          marbleColor={materials.marbleAccent}
          goldColor={materials.goldTrim}
        />
      </group>

      {/* Rear-Left Bastion */}
      <group position={[-12.25, 0, -16.5]}>
        <mesh position={[0, 3.5, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.3, 1.5, 7, 8]} />
          <meshStandardMaterial color={materials.sandstonePrimary} roughness={0.8} />
        </mesh>
        <Chhatri
          position={[0, 7.0, 0]}
          radius={0.95}
          height={2.0}
          sandstoneColor={materials.sandstonePrimary}
          marbleColor={materials.marbleAccent}
          goldColor={materials.goldTrim}
        />
      </group>

      {/* Rear-Right Bastion */}
      <group position={[12.25, 0, -16.5]}>
        <mesh position={[0, 3.5, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.3, 1.5, 7, 8]} />
          <meshStandardMaterial color={materials.sandstonePrimary} roughness={0.8} />
        </mesh>
        <Chhatri
          position={[0, 7.0, 0]}
          radius={0.95}
          height={2.0}
          sandstoneColor={materials.sandstonePrimary}
          marbleColor={materials.marbleAccent}
          goldColor={materials.goldTrim}
        />
      </group>

      {/* ── Diwan-i-Aam (Hall of Public Audience) Colonnade Pavilion ── */}
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

      {/* ── Diwan-i-Khas inspired Marble Pavilion (rear) ── */}
      <group position={[0, 0.24, -14]}>
        {/* Base Plinth */}
        <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
          <boxGeometry args={[8, 0.4, 5]} />
          <meshStandardMaterial color={materials.marbleAccent} roughness={0.45} />
        </mesh>
        {/* Hall Walls */}
        <mesh position={[0, 2.2, -2]} castShadow receiveShadow>
          <boxGeometry args={[8, 4, 0.6]} />
          <meshStandardMaterial color={materials.marbleAccent} roughness={0.4} />
        </mesh>
        {/* Side walls */}
        <mesh position={[-3.7, 2.2, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.6, 4, 4]} />
          <meshStandardMaterial color={materials.marbleAccent} roughness={0.4} />
        </mesh>
        <mesh position={[3.7, 2.2, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.6, 4, 4]} />
          <meshStandardMaterial color={materials.marbleAccent} roughness={0.4} />
        </mesh>
        {/* Front arch opening */}
        <MughalArch
          position={[0, 0.4, 2]}
          width={4.5}
          height={3.8}
          color={materials.marbleAccent}
          accentColor={materials.goldTrim}
        />
        {/* Flat roof */}
        <mesh position={[0, 4.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[8.4, 0.3, 5.4]} />
          <meshStandardMaterial color={materials.marbleAccent} roughness={0.4} />
        </mesh>
        {/* Gold trim band */}
        <mesh position={[0, 4.35, 2.7]} castShadow>
          <boxGeometry args={[8, 0.12, 0.05]} />
          <meshStandardMaterial color={materials.goldTrim} metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Chhatris on corners */}
        <Chhatri
          position={[-3.3, 4.65, -1.8]}
          radius={0.55}
          height={1.6}
          sandstoneColor={materials.sandstonePrimary}
          marbleColor={materials.marbleAccent}
          goldColor={materials.goldTrim}
        />
        <Chhatri
          position={[3.3, 4.65, -1.8]}
          radius={0.55}
          height={1.6}
          sandstoneColor={materials.sandstonePrimary}
          marbleColor={materials.marbleAccent}
          goldColor={materials.goldTrim}
        />
        <Chhatri
          position={[-3.3, 4.65, 1.8]}
          radius={0.55}
          height={1.6}
          sandstoneColor={materials.sandstonePrimary}
          marbleColor={materials.marbleAccent}
          goldColor={materials.goldTrim}
        />
        <Chhatri
          position={[3.3, 4.65, 1.8]}
          radius={0.55}
          height={1.6}
          sandstoneColor={materials.sandstonePrimary}
          marbleColor={materials.marbleAccent}
          goldColor={materials.goldTrim}
        />
      </group>

      {/* ── Chhatta Chowk — Vaulted Arcade (entrance bazaar) ── */}
      <group position={[0, 0, 2]}>
        {/* Left arcade wall */}
        <mesh position={[-2.2, 1.8, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.5, 3.6, 5]} />
          <meshStandardMaterial color={materials.sandstoneSecondary} roughness={0.8} />
        </mesh>
        {/* Right arcade wall */}
        <mesh position={[2.2, 1.8, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.5, 3.6, 5]} />
          <meshStandardMaterial color={materials.sandstoneSecondary} roughness={0.8} />
        </mesh>
        {/* Vaulted ceiling */}
        <mesh position={[0, 3.4, 0]} castShadow receiveShadow>
          <boxGeometry args={[4.5, 0.4, 5]} />
          <meshStandardMaterial color={materials.sandstoneSecondary} roughness={0.75} />
        </mesh>
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
