"use client";

import React from "react";
import { OrbitControls } from "@react-three/drei";

export function ExperienceControls() {
  return (
    <OrbitControls
      makeDefault
      target={[0, 2, 0]}
      enableDamping
      dampingFactor={0.06}
      rotateSpeed={0.65}
      zoomSpeed={0.8}
      panSpeed={0.6}
      minDistance={4}
      maxDistance={36}
      maxPolarAngle={Math.PI / 2 - 0.04} // Prevents looking from below the ground plane
      minPolarAngle={Math.PI / 10}       // Prevents looking directly straight down
      screenSpacePanning={false}
    />
  );
}
