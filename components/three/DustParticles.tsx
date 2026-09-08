"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface DustParticlesProps {
  count?: number;
  color?: string;
  size?: number;
  speed?: number;
  opacity?: number;
}

export function DustParticles({
  count = 90,
  color = "#e2caa0",
  size = 0.05,
  speed = 0.35,
  opacity = 0.45,
}: DustParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random initial positions and velocities
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Spread across courtyard
      pos[i * 3 + 0] = (Math.random() - 0.5) * 32;
      pos[i * 3 + 1] = Math.random() * 10 + 0.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 32;

      // Gentle drift velocities
      vel[i * 3 + 0] = (Math.random() - 0.5) * 0.008 * speed;
      vel[i * 3 + 1] = (Math.random() * 0.006 + 0.002) * speed;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.008 * speed;
    }

    return [pos, vel];
  }, [count, speed]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position;
    const array = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      // Update positions
      array[i * 3 + 0] += velocities[i * 3 + 0];
      array[i * 3 + 1] += velocities[i * 3 + 1];
      array[i * 3 + 2] += velocities[i * 3 + 2];

      // Loop vertically
      if (array[i * 3 + 1] > 11) {
        array[i * 3 + 1] = 0.5;
      }
      // Loop horizontally
      if (Math.abs(array[i * 3 + 0]) > 18) {
        array[i * 3 + 0] *= -0.9;
      }
      if (Math.abs(array[i * 3 + 2]) > 18) {
        array[i * 3 + 2] *= -0.9;
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={size}
        transparent
        opacity={opacity}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
