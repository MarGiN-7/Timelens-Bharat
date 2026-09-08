"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface WaterChannelProps {
  waterColor?: string;
  marbleColor?: string;
  opacity?: number;
  flowSpeed?: number;
  length?: number;
  width?: number;
}

export function WaterChannel({
  waterColor = "#1f6e7c",
  marbleColor = "#faf6f0",
  opacity = 0.85,
  flowSpeed = 1.0,
  length = 26,
  width = 1.1,
}: WaterChannelProps) {
  const waterMaterialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  // Animate water flow / color oscillation subtly
  useFrame((state) => {
    if (waterMaterialRef.current) {
      const time = state.clock.getElapsedTime() * flowSpeed;
      // Subtle pulse in roughness simulating gentle water movement
      waterMaterialRef.current.roughness = 0.08 + Math.sin(time * 2) * 0.03;
    }
  });

  const borderThickness = 0.18;
  const channelDepth = 0.16;

  return (
    <group position={[0, 0.01, -1.0]}>
      {/* Stone Channel Base Trench */}
      <mesh position={[0, -channelDepth / 2, 0]} receiveShadow>
        <boxGeometry args={[width, channelDepth, length]} />
        <meshStandardMaterial color="#1a1412" roughness={0.9} />
      </mesh>

      {/* Left Marble Coping Border */}
      <mesh
        position={[-width / 2 - borderThickness / 2, 0.04, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[borderThickness, 0.12, length]} />
        <meshStandardMaterial color={marbleColor} roughness={0.4} />
      </mesh>

      {/* Right Marble Coping Border */}
      <mesh
        position={[width / 2 + borderThickness / 2, 0.04, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[borderThickness, 0.12, length]} />
        <meshStandardMaterial color={marbleColor} roughness={0.4} />
      </mesh>

      {/* Water Surface Plane */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[width, length]} />
        <meshPhysicalMaterial
          ref={waterMaterialRef}
          color={waterColor}
          roughness={0.1}
          metalness={0.15}
          transmission={0.6}
          ior={1.33}
          transparent
          opacity={opacity}
          reflectivity={0.9}
        />
      </mesh>

      {/* Central Octagonal Fountain Basin */}
      <group position={[0, 0.02, 0]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[1.4, 1.6, 0.22, 8]} />
          <meshStandardMaterial color={marbleColor} roughness={0.45} />
        </mesh>
        {/* Fountain Water Pool */}
        <mesh position={[0, 0.115, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.22, 8]} />
          <meshPhysicalMaterial
            color={waterColor}
            roughness={0.1}
            transmission={0.65}
            ior={1.33}
            transparent
            opacity={opacity}
          />
        </mesh>
        {/* Lotus Jet Spire */}
        <mesh position={[0, 0.26, 0]} castShadow>
          <cylinderGeometry args={[0.04, 0.12, 0.32, 8]} />
          <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>

      {/* Secondary Fountain Basin (near pavilion) */}
      <group position={[0, 0.14, -8]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[1.2, 1.35, 0.2, 8]} />
          <meshStandardMaterial color={marbleColor} roughness={0.45} />
        </mesh>
        <mesh position={[0, 0.105, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.05, 8]} />
          <meshPhysicalMaterial
            color={waterColor}
            roughness={0.1}
            transmission={0.65}
            transparent
            opacity={opacity}
          />
        </mesh>
      </group>
    </group>
  );
}
