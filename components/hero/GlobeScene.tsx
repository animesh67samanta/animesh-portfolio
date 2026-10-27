"use client";

import React, { Suspense, useRef, useSyncExternalStore } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Image from "next/image";
import { Earth } from "./Earth";
import { GlobeAtmosphere } from "./GlobeAtmosphere";
import { GlobeCities } from "./GlobeCities";
import { GlobeArcs } from "./GlobeArcs";
import { GlobeRings } from "./GlobeRings";
import { GlobeParticles } from "./GlobeParticles";
import { GlobeBadges } from "./GlobeBadges";
import { GLOBE_RADIUS } from "./globeData";
import { useTheme } from "@/components/ThemeProvider";

interface GlobeSceneProps {
  fallbackImage?: string;
  className?: string;
}

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

/**
 * Inner globe group that handles continuous cinematic auto-rotation
 */
function RotatingGlobeGroup({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (prefersReducedMotion || !groupRef.current) return;
    // Slow, calm, cinematic axial rotation (~ 0.08 rad/s)
    groupRef.current.rotation.y += delta * 0.075;
  });

  return (
    <group ref={groupRef}>
      {/* 3D Earth Surface & Grid */}
      <Earth radius={GLOBE_RADIUS} />

      {/* Global Tech Hubs & Glowing Beacons */}
      <GlobeCities radius={GLOBE_RADIUS} />

      {/* Great Circle Network Arcs & Moving Photons */}
      <GlobeArcs radius={GLOBE_RADIUS} />
    </group>
  );
}

/**
 * Automatically adjusts perspective camera distance on mobile screens
 */
function ResponsiveCamera() {
  const { camera, size } = useThree();

  React.useEffect(() => {
    if (camera instanceof THREE.PerspectiveCamera) {
      if (size.width < 640) {
        camera.position.set(0, 0.25, 5.8);
        camera.updateProjectionMatrix();
      } else {
        camera.position.set(0, 0.4, 5.2);
        camera.updateProjectionMatrix();
      }
    }
  }, [camera, size.width]);

  return null;
}

/**
 * Responsive wrapper scaling the Earth and atmospheric assembly:
 * - Mobile (< 640px): 0.55x (clean, small size, never clips)
 * - Tablet (640px - 1024px): 0.8x
 * - Desktop (>= 1024px): 1.0x
 */
function ResponsiveGlobeAssembly({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  const { size } = useThree();
  const isMobile = size.width < 640;
  const isTablet = size.width >= 640 && size.width < 1024;

  const scale = isMobile ? 0.55 : isTablet ? 0.8 : 1.0;
  const posY = isMobile ? -0.1 : 0;

  return (
    <group scale={scale} position={[0, posY, 0]}>
      {/* Central Rotating Globe Assembly */}
      <RotatingGlobeGroup prefersReducedMotion={prefersReducedMotion} />

      {/* Atmospheric Fresnel Rim Glow */}
      <GlobeAtmosphere radius={GLOBE_RADIUS} />

      {/* Orbital Rings with Satellites */}
      <GlobeRings radius={GLOBE_RADIUS} />

      {/* Floating Stars & Ambient Cybernetic Dust */}
      <GlobeParticles count={isMobile ? 180 : 340} />

      {/* Floating Glassmorphic 3D Badges */}
      <GlobeBadges />
    </group>
  );
}

function GlobeFallback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-transparent">
      <div className="w-20 h-20 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />
      <span className="text-xs text-cyan-400 font-mono tracking-widest mt-4 uppercase">
        Initializing 3D Globe...
      </span>
    </div>
  );
}

export function GlobeScene({
  fallbackImage = "/images/hero-3d-bg.png",
  className = "w-full h-full",
}: GlobeSceneProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false
  );

  const webglAvailable = typeof window !== "undefined" ? isWebGLAvailable() : true;

  if (!webglAvailable) {
    return (
      <div className={`relative ${className} flex items-center justify-center overflow-hidden`}>
        <Image
          src={fallbackImage}
          alt="Interactive 3D Digital Globe — Global Architecture & Deployments by Animesh Samanta"
          fill
          priority
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div className={`relative ${className} select-none`}>
      <Suspense fallback={<GlobeFallback />}>
        <Canvas
          camera={{ position: [0, 0.4, 5.2], fov: 46 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          className="cursor-grab active:cursor-grabbing"
        >
          {/* Responsive Camera Projection */}
          <ResponsiveCamera />

          {/* Lighting Environment */}
          <ambientLight intensity={isDark ? 0.65 : 0.9} />
          
          {/* Primary Sun / Key Light */}
          <directionalLight
            position={[5, 3.5, 5]}
            intensity={isDark ? 1.85 : 1.6}
            color={isDark ? "#ffffff" : "#f0f9ff"}
          />

          {/* Electric Cyan Rim Light */}
          <pointLight
            position={[-5, 2.5, -4]}
            intensity={isDark ? 2.8 : 1.9}
            color={isDark ? "#06b6d4" : "#0284c7"}
          />

          {/* Indigo / Violet Fill Rim Light */}
          <pointLight
            position={[3, -3.5, -4]}
            intensity={isDark ? 2.2 : 1.5}
            color={isDark ? "#818cf8" : "#6366f1"}
          />

          {/* Responsive Scaled Earth Assembly (Small size on mobile) */}
          <ResponsiveGlobeAssembly prefersReducedMotion={prefersReducedMotion} />

          {/* Camera Interaction with Smooth Inertia */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={3.6}
            maxDistance={6.6}
            enableDamping={true}
            dampingFactor={0.06}
            rotateSpeed={0.7}
            autoRotate={false} // Handled by RotatingGlobeGroup to preserve fixed badges
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
