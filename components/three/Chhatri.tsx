"use client";

import React from "react";

interface ChhatriProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number] | number;
  sandstoneColor?: string;
  marbleColor?: string;
  goldColor?: string;
  radius?: number;
  height?: number;
}

export function Chhatri({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  sandstoneColor = "#8e3824",
  marbleColor = "#faf6f0",
  goldColor = "#d4af37",
  radius = 0.9,
  height = 2.4,
}: ChhatriProps) {
  const pillarCount = 4;
  const pillarRadius = 0.07;
  const pillarDist = radius * 0.75;
  const pillarHeight = height * 0.55;

  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Plinth Base */}
      <mesh position={[0, 0.08, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[radius * 1.15, radius * 1.25, 0.16, 8]} />
        <meshStandardMaterial color={sandstoneColor} roughness={0.8} />
      </mesh>

      {/* Slender Supporting Columns */}
      {[...Array(pillarCount)].map((_, i) => {
        const angle = (i * Math.PI * 2) / pillarCount + Math.PI / 4;
        const x = Math.cos(angle) * pillarDist;
        const z = Math.sin(angle) * pillarDist;
        return (
          <group key={i} position={[x, 0.16 + pillarHeight / 2, z]}>
            {/* Pillar Shaft */}
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[pillarRadius, pillarRadius * 1.15, pillarHeight, 8]} />
              <meshStandardMaterial color={marbleColor} roughness={0.6} />
            </mesh>
            {/* Pillar Capital */}
            <mesh position={[0, pillarHeight / 2, 0]} castShadow>
              <boxGeometry args={[pillarRadius * 3, 0.1, pillarRadius * 3]} />
              <meshStandardMaterial color={sandstoneColor} roughness={0.7} />
            </mesh>
          </group>
        );
      })}

      {/* Chhajja (Sloping Projecting Eaves) */}
      <mesh position={[0, 0.16 + pillarHeight + 0.08, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[radius * 1.35, radius * 0.9, 0.16, 8]} />
        <meshStandardMaterial color={sandstoneColor} roughness={0.75} />
      </mesh>

      {/* Dome Drum / Base */}
      <mesh position={[0, 0.16 + pillarHeight + 0.22, 0]} castShadow>
        <cylinderGeometry args={[radius * 0.82, radius * 0.88, 0.18, 16]} />
        <meshStandardMaterial color={marbleColor} roughness={0.5} />
      </mesh>

      {/* Onion / Lotus Bulbous Dome */}
      <mesh position={[0, 0.16 + pillarHeight + 0.65, 0]} castShadow>
        <sphereGeometry args={[radius * 0.85, 24, 20, 0, Math.PI * 2, 0, Math.PI * 0.65]} />
        <meshStandardMaterial color={marbleColor} roughness={0.45} metalness={0.1} />
      </mesh>

      {/* Inverted Lotus Crest */}
      <mesh position={[0, 0.16 + pillarHeight + 1.15, 0]} castShadow>
        <coneGeometry args={[radius * 0.28, 0.22, 12]} />
        <meshStandardMaterial color={goldColor} roughness={0.35} metalness={0.7} />
      </mesh>

      {/* Kalasa Spire / Finial */}
      <mesh position={[0, 0.16 + pillarHeight + 1.42, 0]} castShadow>
        <cylinderGeometry args={[0.02, 0.06, 0.35, 8]} />
        <meshStandardMaterial color={goldColor} roughness={0.25} metalness={0.85} />
      </mesh>
      <mesh position={[0, 0.16 + pillarHeight + 1.62, 0]} castShadow>
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshStandardMaterial color={goldColor} roughness={0.25} metalness={0.9} />
      </mesh>
    </group>
  );
}
