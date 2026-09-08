"use client";

import React from "react";

interface FortWallProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  length?: number;
  height?: number;
  thickness?: number;
  sandstoneColor?: string;
  accentColor?: string;
}

export function FortWall({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  length = 24,
  height = 5.5,
  thickness = 1.4,
  sandstoneColor = "#8e3824",
  accentColor = "#faf6f0",
}: FortWallProps) {
  const merlonCount = Math.floor(length / 1.1);
  const merlonWidth = 0.55;
  const merlonHeight = 0.65;
  const merlonGap = (length - merlonCount * merlonWidth) / (merlonCount - 1 || 1);

  return (
    <group position={position} rotation={rotation}>
      {/* Wall Base Batter (Sloped footing) */}
      <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[length, 0.9, thickness * 1.3]} />
        <meshStandardMaterial color={sandstoneColor} roughness={0.85} />
      </mesh>

      {/* Main Ashlar Wall Body */}
      <mesh position={[0, height / 2 + 0.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[length, height - 0.45, thickness]} />
        <meshStandardMaterial color={sandstoneColor} roughness={0.8} />
      </mesh>

      {/* Horizontal String-Course Cornice */}
      <mesh position={[0, height + 0.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[length + 0.2, 0.15, thickness + 0.2]} />
        <meshStandardMaterial color={accentColor} roughness={0.6} />
      </mesh>

      {/* Upper Parapet Walkway Back Wall */}
      <mesh position={[0, height + 0.75, -thickness / 4]} castShadow receiveShadow>
        <boxGeometry args={[length, 0.45, thickness / 2]} />
        <meshStandardMaterial color={sandstoneColor} roughness={0.8} />
      </mesh>

      {/* Crenellations (Merlons along top battlement) */}
      <group position={[-length / 2 + merlonWidth / 2, height + 0.55 + merlonHeight / 2, thickness / 2 - 0.1]}>
        {[...Array(merlonCount)].map((_, i) => (
          <mesh
            key={i}
            position={[i * (merlonWidth + merlonGap), 0, 0]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[merlonWidth, merlonHeight, 0.25]} />
            <meshStandardMaterial color={sandstoneColor} roughness={0.8} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
