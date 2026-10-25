"use client";

import React, { useMemo } from "react";
import * as THREE from "three";
import { useTheme } from "@/components/ThemeProvider";

interface GlobeAtmosphereProps {
  radius?: number;
}

const atmosphereVertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const atmosphereFragmentShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;
  uniform vec3 uColor;
  uniform float uIntensity;
  uniform float uPower;

  void main() {
    vec3 viewDir = normalize(-vPosition);
    float fresnel = 1.0 - max(0.0, dot(viewDir, vNormal));
    float glow = pow(fresnel, uPower) * uIntensity;
    gl_FragColor = vec4(uColor, glow);
  }
`;

export function GlobeAtmosphere({ radius = 2.0 }: GlobeAtmosphereProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const uniforms = useMemo(() => {
    return {
      uColor: { value: new THREE.Color(isDark ? "#22d3ee" : "#0284c7") },
      uIntensity: { value: isDark ? 1.35 : 1.1 },
      uPower: { value: 3.2 },
    };
  }, [isDark]);

  return (
    <group>
      {/* Outer Atmospheric Rim (BackSide Fresnel Glow) */}
      <mesh>
        <sphereGeometry args={[radius * 1.18, 64, 64]} />
        <shaderMaterial
          vertexShader={atmosphereVertexShader}
          fragmentShader={atmosphereFragmentShader}
          uniforms={uniforms}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent
          depthWrite={false}
        />
      </mesh>

      {/* Inner Horizon Subtle Rim (FrontSide Soft Falloff) */}
      <mesh>
        <sphereGeometry args={[radius * 1.015, 64, 64]} />
        <shaderMaterial
          vertexShader={atmosphereVertexShader}
          fragmentShader={`
            varying vec3 vNormal;
            varying vec3 vPosition;
            uniform vec3 uColor;

            void main() {
              vec3 viewDir = normalize(-vPosition);
              float fresnel = 1.0 - max(0.0, dot(viewDir, vNormal));
              float edge = pow(fresnel, 4.0) * 0.45;
              gl_FragColor = vec4(uColor, edge);
            }
          `}
          uniforms={{
            uColor: { value: new THREE.Color(isDark ? "#38bdf8" : "#0369a1") },
          }}
          blending={THREE.AdditiveBlending}
          side={THREE.FrontSide}
          transparent
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
