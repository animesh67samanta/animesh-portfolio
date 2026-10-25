"use client";

import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTheme } from "@/components/ThemeProvider";

interface GlobeParticlesProps {
  count?: number;
}

function getPseudoRandom(index: number, salt: number): number {
  const x = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export function GlobeParticles({ count = 380 }: GlobeParticlesProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const pointsRef = useRef<THREE.Points>(null);

  // Generate particle positions and harmonious star colors deterministically
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cyan = new THREE.Color(isDark ? "#22d3ee" : "#0284c7");
    const violet = new THREE.Color(isDark ? "#818cf8" : "#6366f1");
    const white = new THREE.Color(isDark ? "#f8fafc" : "#0f172a");

    for (let i = 0; i < count; i++) {
      // Spherical shell distribution around the globe (radius 3.2 to 7.8)
      const r = 3.2 + getPseudoRandom(i, 1) * 4.6;
      const theta = getPseudoRandom(i, 2) * Math.PI * 2;
      const phi = Math.acos(getPseudoRandom(i, 3) * 2 - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      // Color variation
      const rand = getPseudoRandom(i, 4);
      const chosenColor = rand < 0.45 ? cyan : rand < 0.75 ? violet : white;
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count, isDark]);

  // Subtle continuous star drift
  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.02;
    pointsRef.current.rotation.x = Math.sin(t * 0.015) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.038}
        vertexColors
        transparent
        opacity={isDark ? 0.75 : 0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
