"use client";

import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { GLOBAL_CITIES, latLongToVector3 } from "./globeData";
import { useTheme } from "@/components/ThemeProvider";

interface GlobeCitiesProps {
  radius?: number;
}

interface CityRenderData {
  name: string;
  isPrimary: boolean;
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
  beaconHeight: number;
}

export function GlobeCities({ radius = 2.0 }: GlobeCitiesProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const ripplesGroupRef = useRef<THREE.Group>(null);

  // Precompute 3D positions and orientation quaternions for all cities
  const citiesData: CityRenderData[] = useMemo(() => {
    const upVector = new THREE.Vector3(0, 1, 0);

    return GLOBAL_CITIES.map((city) => {
      const pos = latLongToVector3(city.lat, city.lon, radius);
      const normal = pos.clone().normalize();
      const quaternion = new THREE.Quaternion().setFromUnitVectors(upVector, normal);
      const beaconHeight = city.isPrimary ? 0.28 : 0.16;

      return {
        name: city.name,
        isPrimary: !!city.isPrimary,
        position: pos,
        quaternion,
        beaconHeight,
      };
    });
  }, [radius]);

  // Animate the pulsing concentric rings in the frame loop
  useFrame(({ clock }) => {
    if (!ripplesGroupRef.current) return;
    const t = clock.getElapsedTime();

    ripplesGroupRef.current.children.forEach((child, index) => {
      const phase = (t * 1.2 + index * 0.35) % 1;
      const scale = 0.5 + phase * 1.5;
      const opacity = Math.max(0, 0.75 * (1 - phase));

      child.scale.set(scale, scale, scale);
      const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      if (mat) mat.opacity = opacity;
    });
  });

  const primaryColor = isDark ? "#22d3ee" : "#0284c7";
  const secondaryColor = isDark ? "#38bdf8" : "#0369a1";

  return (
    <group>
      {/* 1. City Surface Nodes & Beacons */}
      {citiesData.map((city) => (
        <group key={city.name} position={city.position} quaternion={city.quaternion}>
          {/* Surface Dot */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[city.isPrimary ? 0.032 : 0.02, 16, 16]} />
            <meshBasicMaterial
              color={city.isPrimary ? primaryColor : secondaryColor}
              toneMapped={false}
            />
          </mesh>

          {/* Vertical Radiant Beacon Beam */}
          <mesh position={[0, city.beaconHeight / 2, 0]}>
            <cylinderGeometry
              args={[
                city.isPrimary ? 0.004 : 0.0025,
                city.isPrimary ? 0.008 : 0.005,
                city.beaconHeight,
                8,
              ]}
            />
            <meshBasicMaterial
              color={city.isPrimary ? primaryColor : secondaryColor}
              transparent
              opacity={city.isPrimary ? 0.85 : 0.55}
              depthWrite={false}
              toneMapped={false}
            />
          </mesh>

          {/* Beacon Crown Point */}
          <mesh position={[0, city.beaconHeight, 0]}>
            <sphereGeometry args={[city.isPrimary ? 0.016 : 0.01, 8, 8]} />
            <meshBasicMaterial
              color={city.isPrimary ? "#ffffff" : primaryColor}
              toneMapped={false}
            />
          </mesh>
        </group>
      ))}

      {/* 2. Concentric Expanding Ripple Rings */}
      <group ref={ripplesGroupRef}>
        {citiesData.map((city) => (
          <mesh
            key={`ripple-${city.name}`}
            position={city.position}
            quaternion={city.quaternion}
          >
            <ringGeometry args={[0.02, 0.045, 24]} />
            <meshBasicMaterial
              color={city.isPrimary ? primaryColor : secondaryColor}
              transparent
              opacity={0.6}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
