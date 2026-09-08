"use client";

import React from "react";

interface CourtyardProps {
  sandstoneColor?: string;
  gridColor?: string;
  size?: number;
}

export function Courtyard({
  sandstoneColor = "#8e3824",
  gridColor = "#221510",
  size = 64,
}: CourtyardProps) {
  return (
    <group position={[0, -0.05, 0]}>
      {/* Sub-base Earth Foundation */}
      <mesh position={[0, -0.6, 0]} receiveShadow>
        <boxGeometry args={[size * 1.3, 1, size * 1.3]} />
        <meshStandardMaterial color={gridColor} roughness={0.95} />
      </mesh>

      {/* Main Sandstone Courtyard Pavement */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[size, size, 32, 32]} />
        <meshStandardMaterial
          color={sandstoneColor}
          roughness={0.82}
          metalness={0.06}
        />
      </mesh>

      {/* Raised Central Terrace / Plinth for Pavilions */}
      <mesh position={[0, 0.12, -7.5]} receiveShadow castShadow>
        <boxGeometry args={[26, 0.24, 18]} />
        <meshStandardMaterial color={sandstoneColor} roughness={0.75} />
      </mesh>

      {/* Steps leading onto the terrace */}
      <mesh position={[0, 0.06, 1.7]} receiveShadow>
        <boxGeometry args={[14, 0.12, 0.6]} />
        <meshStandardMaterial color={sandstoneColor} roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.03, 2.2]} receiveShadow>
        <boxGeometry args={[16, 0.06, 0.6]} />
        <meshStandardMaterial color={sandstoneColor} roughness={0.8} />
      </mesh>

      {/* Subtle Geometric Decorative Border Trim */}
      <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[12, 12.15, 64]} />
        <meshBasicMaterial color="#d4af37" opacity={0.18} transparent />
      </mesh>
    </group>
  );
}
