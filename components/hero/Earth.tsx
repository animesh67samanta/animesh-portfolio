"use client";

import React, { useMemo } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useTheme } from "@/components/ThemeProvider";

interface EarthProps {
  radius?: number;
}

export function Earth({ radius = 2.0 }: EarthProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Load high-resolution, locally hosted Earth textures
  const [colorMap, lightsMap, normalMap, specularMap] = useTexture([
    "/images/earth/earth_atmos_2048.jpg",
    "/images/earth/earth_lights_2048.png",
    "/images/earth/earth_normal_2048.jpg",
    "/images/earth/earth_specular_2048.jpg",
  ]);

  const normalScale = useMemo(() => new THREE.Vector2(0.035, 0.035), []);

  return (
    <group>
      {/* 1. Base Earth Surface with Terrain Elevation, Specular Oceans & Night City Lights */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          normalScale={normalScale}
          roughnessMap={specularMap}
          roughness={isDark ? 0.68 : 0.62}
          metalness={isDark ? 0.12 : 0.08}
          emissiveMap={lightsMap}
          emissive={isDark ? new THREE.Color("#22d3ee") : new THREE.Color("#0284c7")}
          emissiveIntensity={isDark ? 1.05 : 0.75}
        />
      </mesh>

      {/* 2. Delicate Geographic Coordinate Grid (Latitude & Longitude Graticule) */}
      <mesh>
        <sphereGeometry args={[radius * 1.005, 36, 18]} />
        <meshBasicMaterial
          color={isDark ? "#38bdf8" : "#0284c7"}
          wireframe
          transparent
          opacity={isDark ? 0.075 : 0.06}
          depthWrite={false}
        />
      </mesh>

      {/* 3. Equator & Prime Meridian Subtle Accent Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius * 1.008, radius * 1.012, 64]} />
        <meshBasicMaterial
          color={isDark ? "#06b6d4" : "#0284c7"}
          transparent
          opacity={isDark ? 0.22 : 0.16}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
