"use client";

import React from "react";
import { MughalArch } from "./MughalArch";
import { Chhatri } from "./Chhatri";

interface MughalGateProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number] | number;
  sandstoneColor?: string;
  sandstoneSecondary?: string;
  marbleColor?: string;
  goldColor?: string;
  isModernEra?: boolean;
}

export function MughalGate({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  sandstoneColor = "#8e3824",
  sandstoneSecondary = "#ad4e35",
  marbleColor = "#faf6f0",
  goldColor = "#d4af37",
  isModernEra = false,
}: MughalGateProps) {
  const gateWidth = 10;
  const gateHeight = 7.2;
  const gateDepth = 3.6;
  const towerRadius = 1.6;
  const towerHeight = 9.2;
  const towerOffset = gateWidth / 2 + towerRadius * 0.7;

  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Central Gateway Main Mass (Pishtaq block) */}
      <mesh position={[0, gateHeight / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[gateWidth, gateHeight, gateDepth]} />
        <meshStandardMaterial color={sandstoneColor} roughness={0.78} />
      </mesh>

      {/* Recessed Portal Frame Inset */}
      <mesh position={[0, gateHeight * 0.45, gateDepth / 2 - 0.2]} castShadow receiveShadow>
        <boxGeometry args={[gateWidth * 0.58, gateHeight * 0.75, 0.4]} />
        <meshStandardMaterial color={sandstoneSecondary} roughness={0.85} />
      </mesh>

      {/* Primary Mughal Cusped Archway Portal */}
      <MughalArch
        position={[0, 0, gateDepth / 2 - 0.05]}
        width={4.4}
        height={5.2}
        depth={0.8}
        color={sandstoneSecondary}
        accentColor={marbleColor}
      />

      {/* Inner Gate Passage Recess */}
      <mesh position={[0, 2.2, 0]} receiveShadow>
        <boxGeometry args={[3.2, 4.4, gateDepth + 0.2]} />
        <meshStandardMaterial color="#2d120a" roughness={0.95} />
      </mesh>

      {/* White Marble Inlay Band across Front Facade */}
      <mesh position={[0, gateHeight * 0.82, gateDepth / 2 + 0.02]} castShadow>
        <boxGeometry args={[gateWidth * 0.88, 0.2, 0.04]} />
        <meshStandardMaterial color={marbleColor} roughness={0.4} />
      </mesh>
      <mesh position={[0, gateHeight * 0.88, gateDepth / 2 + 0.02]} castShadow>
        <boxGeometry args={[gateWidth * 0.88, 0.08, 0.04]} />
        <meshStandardMaterial color={marbleColor} roughness={0.4} />
      </mesh>

      {/* Gateway Roof Cornice */}
      <mesh position={[0, gateHeight + 0.15, 0]} castShadow receiveShadow>
        <boxGeometry args={[gateWidth + 0.6, 0.3, gateDepth + 0.6]} />
        <meshStandardMaterial color={sandstoneSecondary} roughness={0.7} />
      </mesh>

      {/* Roof Parapet with Merlons */}
      <mesh position={[0, gateHeight + 0.5, gateDepth / 2 + 0.15]} castShadow>
        <boxGeometry args={[gateWidth + 0.4, 0.4, 0.2]} />
        <meshStandardMaterial color={sandstoneColor} roughness={0.8} />
      </mesh>

      {/* Three Decorative Center Roof Chhatris */}
      {/* Center Crown Chhatri */}
      <Chhatri
        position={[0, gateHeight + 0.3, 0]}
        radius={0.8}
        height={2.2}
        sandstoneColor={sandstoneColor}
        marbleColor={marbleColor}
        goldColor={goldColor}
      />
      {/* Left Roof Chhatri */}
      <Chhatri
        position={[-2.8, gateHeight + 0.3, 0]}
        radius={0.65}
        height={1.9}
        sandstoneColor={sandstoneColor}
        marbleColor={marbleColor}
        goldColor={goldColor}
      />
      {/* Right Roof Chhatri */}
      <Chhatri
        position={[2.8, gateHeight + 0.3, 0]}
        radius={0.65}
        height={1.9}
        sandstoneColor={sandstoneColor}
        marbleColor={marbleColor}
        goldColor={goldColor}
      />

      {/* Left Flanking Octagonal Bastion Tower */}
      <group position={[-towerOffset, 0, 0]}>
        {/* Tower Shaft */}
        <mesh position={[0, towerHeight / 2, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[towerRadius * 0.9, towerRadius * 1.05, towerHeight, 8]} />
          <meshStandardMaterial color={sandstoneColor} roughness={0.78} />
        </mesh>
        {/* Tower Balcony Corbel Band */}
        <mesh position={[0, towerHeight - 0.5, 0]} castShadow>
          <cylinderGeometry args={[towerRadius * 1.15, towerRadius * 0.9, 0.6, 8]} />
          <meshStandardMaterial color={sandstoneSecondary} roughness={0.7} />
        </mesh>
        {/* Tower Parapet Walkway */}
        <mesh position={[0, towerHeight + 0.2, 0]} castShadow>
          <cylinderGeometry args={[towerRadius * 1.1, towerRadius * 1.1, 0.4, 8]} />
          <meshStandardMaterial color={sandstoneColor} roughness={0.8} />
        </mesh>
        {/* Tower Crown Chhatri */}
        <Chhatri
          position={[0, towerHeight + 0.4, 0]}
          radius={towerRadius * 0.75}
          height={2.6}
          sandstoneColor={sandstoneColor}
          marbleColor={marbleColor}
          goldColor={goldColor}
        />
      </group>

      {/* Right Flanking Octagonal Bastion Tower */}
      <group position={[towerOffset, 0, 0]}>
        {/* Tower Shaft */}
        <mesh position={[0, towerHeight / 2, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[towerRadius * 0.9, towerRadius * 1.05, towerHeight, 8]} />
          <meshStandardMaterial color={sandstoneColor} roughness={0.78} />
        </mesh>
        {/* Tower Balcony Corbel Band */}
        <mesh position={[0, towerHeight - 0.5, 0]} castShadow>
          <cylinderGeometry args={[towerRadius * 1.15, towerRadius * 0.9, 0.6, 8]} />
          <meshStandardMaterial color={sandstoneSecondary} roughness={0.7} />
        </mesh>
        {/* Tower Parapet Walkway */}
        <mesh position={[0, towerHeight + 0.2, 0]} castShadow>
          <cylinderGeometry args={[towerRadius * 1.1, towerRadius * 1.1, 0.4, 8]} />
          <meshStandardMaterial color={sandstoneColor} roughness={0.8} />
        </mesh>
        {/* Tower Crown Chhatri */}
        <Chhatri
          position={[0, towerHeight + 0.4, 0]}
          radius={towerRadius * 0.75}
          height={2.6}
          sandstoneColor={sandstoneColor}
          marbleColor={marbleColor}
          goldColor={goldColor}
        />
      </group>

      {/* Independence Day Flagstaff (Present Day Era Only) */}
      {isModernEra && (
        <group position={[0, gateHeight + 2.5, gateDepth / 2 + 0.1]}>
          {/* Flagstaff Pole */}
          <mesh castShadow>
            <cylinderGeometry args={[0.03, 0.05, 3.2, 8]} />
            <meshStandardMaterial color="#f0f0f0" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Indian Tricolor Flag (Saffron, White, Green bands) */}
          <group position={[0.75, 1.2, 0]}>
            <mesh position={[0, 0.22, 0]} castShadow>
              <boxGeometry args={[1.5, 0.22, 0.02]} />
              <meshBasicMaterial color="#FF9933" />
            </mesh>
            <mesh position={[0, 0, 0]} castShadow>
              <boxGeometry args={[1.5, 0.22, 0.02]} />
              <meshBasicMaterial color="#FFFFFF" />
            </mesh>
            <mesh position={[0, -0.22, 0]} castShadow>
              <boxGeometry args={[1.5, 0.22, 0.02]} />
              <meshBasicMaterial color="#128807" />
            </mesh>
            {/* Ashoka Chakra Blue Dot */}
            <mesh position={[0, 0, 0.015]}>
              <circleGeometry args={[0.08, 16]} />
              <meshBasicMaterial color="#000080" />
            </mesh>
          </group>
        </group>
      )}
    </group>
  );
}
