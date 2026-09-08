"use client";

import React, { useMemo } from "react";
import * as THREE from "three";

interface MughalArchProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number] | number;
  color?: string;
  accentColor?: string;
  width?: number;
  height?: number;
  depth?: number;
}

export function MughalArch({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  color = "#8e3824",
  accentColor = "#faf6f0",
  width = 3.6,
  height = 4.8,
  depth = 0.8,
}: MughalArchProps) {
  const pillarWidth = 0.45;
  const openingWidth = width - pillarWidth * 2;
  const pillarHeight = height * 0.65;
  const archHeight = height - pillarHeight;

  // Custom extruded 2D multi-cusped arch shape
  const archShape = useMemo(() => {
    const shape = new THREE.Shape();
    const halfW = openingWidth / 2;
    const peakH = archHeight;

    // Start at bottom-left inner corner
    shape.moveTo(-halfW, 0);
    // Outer frame left
    shape.lineTo(-width / 2, 0);
    // Outer frame top
    shape.lineTo(-width / 2, archHeight + 0.5);
    shape.lineTo(width / 2, archHeight + 0.5);
    // Outer frame right
    shape.lineTo(width / 2, 0);
    // Inner bottom-right
    shape.lineTo(halfW, 0);

    // Multi-cusp curve going right-to-left back to start:
    // Cusp 1 (Right lower)
    shape.bezierCurveTo(
      halfW * 0.9,
      peakH * 0.3,
      halfW * 0.6,
      peakH * 0.4,
      halfW * 0.5,
      peakH * 0.55
    );
    // Cusp 2 (Right upper to apex)
    shape.bezierCurveTo(
      halfW * 0.4,
      peakH * 0.7,
      halfW * 0.15,
      peakH * 0.9,
      0,
      peakH
    );
    // Cusp 3 (Left upper from apex)
    shape.bezierCurveTo(
      -halfW * 0.15,
      peakH * 0.9,
      -halfW * 0.4,
      peakH * 0.7,
      -halfW * 0.5,
      peakH * 0.55
    );
    // Cusp 4 (Left lower to start)
    shape.bezierCurveTo(
      -halfW * 0.6,
      peakH * 0.4,
      -halfW * 0.9,
      peakH * 0.3,
      -halfW,
      0
    );

    return shape;
  }, [width, openingWidth, archHeight]);

  const extrudeSettings = useMemo(
    () => ({
      depth: depth,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.04,
      bevelThickness: 0.04,
    }),
    [depth]
  );

  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Left Pillar Column */}
      <mesh position={[-width / 2 + pillarWidth / 2, pillarHeight / 2, depth / 2]} castShadow receiveShadow>
        <boxGeometry args={[pillarWidth, pillarHeight, depth]} />
        <meshStandardMaterial color={color} roughness={0.78} metalness={0.08} />
      </mesh>

      {/* Left Pillar Plinth Base */}
      <mesh position={[-width / 2 + pillarWidth / 2, 0.15, depth / 2]} castShadow receiveShadow>
        <boxGeometry args={[pillarWidth * 1.3, 0.3, depth * 1.3]} />
        <meshStandardMaterial color={accentColor} roughness={0.6} metalness={0.15} />
      </mesh>

      {/* Left Pillar Capital */}
      <mesh position={[-width / 2 + pillarWidth / 2, pillarHeight, depth / 2]} castShadow receiveShadow>
        <boxGeometry args={[pillarWidth * 1.25, 0.25, depth * 1.25]} />
        <meshStandardMaterial color={accentColor} roughness={0.6} metalness={0.15} />
      </mesh>

      {/* Right Pillar Column */}
      <mesh position={[width / 2 - pillarWidth / 2, pillarHeight / 2, depth / 2]} castShadow receiveShadow>
        <boxGeometry args={[pillarWidth, pillarHeight, depth]} />
        <meshStandardMaterial color={color} roughness={0.78} metalness={0.08} />
      </mesh>

      {/* Right Pillar Plinth Base */}
      <mesh position={[width / 2 - pillarWidth / 2, 0.15, depth / 2]} castShadow receiveShadow>
        <boxGeometry args={[pillarWidth * 1.3, 0.3, depth * 1.3]} />
        <meshStandardMaterial color={accentColor} roughness={0.6} metalness={0.15} />
      </mesh>

      {/* Right Pillar Capital */}
      <mesh position={[width / 2 - pillarWidth / 2, pillarHeight, depth / 2]} castShadow receiveShadow>
        <boxGeometry args={[pillarWidth * 1.25, 0.25, depth * 1.25]} />
        <meshStandardMaterial color={accentColor} roughness={0.6} metalness={0.15} />
      </mesh>

      {/* Extruded Cusped Arch Spandrel Header */}
      <mesh position={[0, pillarHeight, 0]} castShadow receiveShadow>
        <extrudeGeometry args={[archShape, extrudeSettings]} />
        <meshStandardMaterial color={color} roughness={0.78} metalness={0.08} />
      </mesh>

      {/* Ornamental Crown Lintel Trim */}
      <mesh position={[0, height + 0.52, depth / 2]} castShadow receiveShadow>
        <boxGeometry args={[width + 0.2, 0.12, depth + 0.1]} />
        <meshStandardMaterial color={accentColor} roughness={0.5} metalness={0.2} />
      </mesh>
    </group>
  );
}
