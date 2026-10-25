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

export function GlobeAtmosphere({ radius = 1.8 }: GlobeAtmosphereProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const uniforms = useMemo(() => {
    return {
      uColor: { value: new THREE.Color(isDark ? "#38bdf8" : "#0ea5e9") },
      uIntensity: { value: isDark ? 1.4 : 1.15 },
      uPower: { value: 5.0 },
    };
  }, [isDark]);

  return (
    <group>
      {/* Outer Atmospheric Rim (BackSide Fresnel Glow - Small Size Border) */}
      <mesh>
        <sphereGeometry args={[radius * 1.035, 64, 64]} />
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
        <sphereGeometry args={[radius * 1.006, 64, 64]} />
        <shaderMaterial
          vertexShader={atmosphereVertexShader}
          fragmentShader={`
            varying vec3 vNormal;
            varying vec3 vPosition;
            uniform vec3 uColor;

            void main() {
              vec3 viewDir = normalize(-vPosition);
              float fresnel = 1.0 - max(0.0, dot(viewDir, vNormal));
              float edge = pow(fresnel, 4.5) * 0.5;
              gl_FragColor = vec4(uColor, edge);
            }
          `}
          uniforms={{
            uColor: { value: new THREE.Color(isDark ? "#38bdf8" : "#0284c7") },
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
