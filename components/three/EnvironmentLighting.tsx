"use client";

import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EraVisualConfig } from "@/data/redFortExperience";

interface EnvironmentLightingProps {
  config: EraVisualConfig;
}

export function EnvironmentLighting({ config }: EnvironmentLightingProps) {
  const { scene } = useThree();
  const { lighting } = config;

  useEffect(() => {
    // Dynamically update Three.js scene fog to match the era's atmosphere
    scene.fog = new THREE.Fog(
      lighting.fogColor,
      lighting.fogNear,
      lighting.fogFar
    );
    scene.background = new THREE.Color(lighting.fogColor);

    return () => {
      scene.fog = null;
    };
  }, [scene, lighting]);

  return (
    <>
      {/* Primary Directional Sun Light */}
      <directionalLight
        position={lighting.sunPosition}
        intensity={lighting.sunIntensity}
        color={lighting.sunColor}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={60}
        shadow-camera-left={-22}
        shadow-camera-right={22}
        shadow-camera-top={22}
        shadow-camera-bottom={-22}
        shadow-bias={-0.0002}
      />

      {/* Secondary Fill Light from opposite angle */}
      <directionalLight
        position={[-lighting.sunPosition[0] * 0.7, 10, -lighting.sunPosition[2] * 0.7]}
        intensity={lighting.sunIntensity * 0.25}
        color={lighting.ambientColor}
      />

      {/* Ambient Fill Light */}
      <ambientLight
        color={lighting.ambientColor}
        intensity={lighting.ambientIntensity}
      />

      {/* Hemisphere Light for natural sky-ground gradient */}
      <hemisphereLight
        args={[lighting.skyColor, lighting.groundColor, lighting.ambientIntensity * 0.6]}
      />
    </>
  );
}
