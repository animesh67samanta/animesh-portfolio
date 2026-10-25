"use client";

import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { GLOBAL_CITIES, NETWORK_ARCS, latLongToVector3 } from "./globeData";
import { useTheme } from "@/components/ThemeProvider";

interface GlobeArcsProps {
  radius?: number;
}

interface ArcRenderData {
  id: string;
  curve: THREE.QuadraticBezierCurve3;
  lineGeometry: THREE.BufferGeometry;
  color: string;
  speed: number;
  offset: number;
}

export function GlobeArcs({ radius = 1.8 }: GlobeArcsProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const photonsGroupRef = useRef<THREE.Group>(null);

  // Build 3D Quadratic Bezier curves for all network arcs
  const arcsData: ArcRenderData[] = useMemo(() => {
    const cityMap = new Map(GLOBAL_CITIES.map((c) => [c.name, c]));

    return NETWORK_ARCS.map((arc, index) => {
      const fromCity = cityMap.get(arc.from);
      const toCity = cityMap.get(arc.to);

      if (!fromCity || !toCity) return null;

      const p1 = latLongToVector3(fromCity.lat, fromCity.lon, radius);
      const p2 = latLongToVector3(toCity.lat, toCity.lon, radius);

      const distance = p1.distanceTo(p2);
      const mid = p1.clone().add(p2).multiplyScalar(0.5);

      // Lift the apex above the sphere surface proportionally to distance
      const arcHeight = radius + Math.min(distance * 0.35, 1.1) + 0.08;
      const controlPoint = mid.normalize().multiplyScalar(arcHeight);

      const curve = new THREE.QuadraticBezierCurve3(p1, controlPoint, p2);
      const points = curve.getPoints(44);
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

      return {
        id: `${arc.from}-${arc.to}-${index}`,
        curve,
        lineGeometry,
        color: arc.color || (isDark ? "#38bdf8" : "#0284c7"),
        speed: arc.speed || 0.6,
        offset: (index * 0.17) % 1,
      };
    }).filter(Boolean) as ArcRenderData[];
  }, [radius, isDark]);

  // Animate traveling photon packets along the network arcs
  useFrame(({ clock }) => {
    if (!photonsGroupRef.current) return;
    const elapsed = clock.getElapsedTime();

    photonsGroupRef.current.children.forEach((mesh, index) => {
      const arc = arcsData[index];
      if (!arc) return;

      const progress = (elapsed * arc.speed * 0.4 + arc.offset) % 1;
      const point = arc.curve.getPoint(progress);
      mesh.position.copy(point);

      // Subtle scale pulse as photon travels across the highest apex
      const apexProximity = Math.sin(progress * Math.PI);
      const scale = 0.8 + apexProximity * 0.6;
      mesh.scale.set(scale, scale, scale);
    });
  });

  // Create Three.js Line objects
  const lineObjects = useMemo(() => {
    return arcsData.map((arc) => {
      const mat = new THREE.LineBasicMaterial({
        color: arc.color,
        transparent: true,
        opacity: isDark ? 0.35 : 0.28,
        depthWrite: false,
      });
      return new THREE.Line(arc.lineGeometry, mat);
    });
  }, [arcsData, isDark]);

  return (
    <group>
      {/* 1. Curved Network Arc Lines */}
      {lineObjects.map((line, idx) => (
        <primitive key={arcsData[idx].id} object={line} />
      ))}

      {/* 2. Traveling Photon Light Packets */}
      <group ref={photonsGroupRef}>
        {arcsData.map((arc) => (
          <mesh key={`photon-${arc.id}`}>
            <sphereGeometry args={[0.024, 12, 12]} />
            <meshBasicMaterial
              color={isDark ? "#ffffff" : arc.color}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
