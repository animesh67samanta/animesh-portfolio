"use client";

import React, { useMemo } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useTheme } from "@/components/ThemeProvider";

interface EarthProps {
  radius?: number;
}

const borderVertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const borderFragmentShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform vec3 uColor;

  void main() {
    vec3 viewDir = normalize(-vPosition);
    float rim = 1.0 - max(0.0, dot(viewDir, vNormal));
    // Crisp small-size sky blue border hugging the silhouette of Earth
    float border = smoothstep(0.70, 0.98, rim);
    gl_FragColor = vec4(uColor, border * 0.85);
  }
`;

export function Earth({ radius = 1.8 }: EarthProps) {
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

  const borderUniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color(isDark ? "#38bdf8" : "#0ea5e9") },
    }),
    [isDark]
  );

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
          emissive={isDark ? new THREE.Color("#38bdf8") : new THREE.Color("#0284c7")}
          emissiveIntensity={isDark ? 1.05 : 0.75}
        />
      </mesh>

      {/* 2. Crisp Sky Blue Silhouette Border (Small Size) */}
      <mesh>
        <sphereGeometry args={[radius * 1.008, 64, 64]} />
        <shaderMaterial
          vertexShader={borderVertexShader}
          fragmentShader={borderFragmentShader}
          uniforms={borderUniforms}
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* 3. Delicate Geographic Coordinate Grid (Latitude & Longitude Graticule) */}
      <mesh>
        <sphereGeometry args={[radius * 1.003, 36, 18]} />
        <meshBasicMaterial
          color={isDark ? "#38bdf8" : "#0284c7"}
          wireframe
          transparent
          opacity={isDark ? 0.075 : 0.06}
          depthWrite={false}
        />
      </mesh>

      {/* 4. Equator & Prime Meridian Subtle Accent Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius * 1.004, radius * 1.008, 64]} />
        <meshBasicMaterial
          color={isDark ? "#38bdf8" : "#0ea5e9"}
          transparent
          opacity={isDark ? 0.24 : 0.16}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
