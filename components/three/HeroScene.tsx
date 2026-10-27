"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import * as THREE from "three";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

interface HeroSceneProps {
  fallbackImage?: string;
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

function getReducedMotionServerSnapshot() {
  return false;
}

function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return false;
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

export function HeroScene({ fallbackImage = "/images/hero-3d-bg.png" }: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const [webglSupported, setWebglSupported] = useState<boolean>(() => {
    return typeof window !== "undefined" ? isWebGLAvailable() : true;
  });

  useEffect(() => {
    if (prefersReducedMotion || !webglSupported) return;

    const container = containerRef.current;
    if (!container) return;

    const isDark = theme === "dark";

    // Three.js setup
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(isDark ? 0x090b10 : 0xf8fafc, 0.045);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      });
    } catch {
      requestAnimationFrame(() => setWebglSupported(false));
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // Clean any previous canvas (e.g. from React Strict Mode in development)
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Group for mouse parallax rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Outer Wireframe Glass Cube (Tesseract feel)
    const outerGeo = new THREE.BoxGeometry(2.4, 2.4, 2.4);
    const outerEdges = new THREE.EdgesGeometry(outerGeo);
    const outerLineMat = new THREE.LineBasicMaterial({
      color: isDark ? 0x38bdf8 : 0x0284c7,
      transparent: true,
      opacity: isDark ? 0.75 : 0.85,
      linewidth: 1.5
    });
    const outerCube = new THREE.LineSegments(outerEdges, outerLineMat);
    mainGroup.add(outerCube);

    // Outer subtle translucent faces
    const outerFaceMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x06b6d4 : 0x0ea5e9,
      transparent: true,
      opacity: isDark ? 0.08 : 0.06,
      wireframe: false,
      side: THREE.DoubleSide
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerFaceMat);
    mainGroup.add(outerMesh);

    // 2. Inner Rotating Core Cube (Electric Violet / Indigo)
    const innerGeo = new THREE.BoxGeometry(1.3, 1.3, 1.3);
    const innerEdges = new THREE.EdgesGeometry(innerGeo);
    const innerLineMat = new THREE.LineBasicMaterial({
      color: isDark ? 0x818cf8 : 0x4f46e5,
      transparent: true,
      opacity: 0.95
    });
    const innerCube = new THREE.LineSegments(innerEdges, innerLineMat);
    mainGroup.add(innerCube);

    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x6366f1 : 0x4338ca,
      transparent: true,
      opacity: isDark ? 0.15 : 0.1
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerCoreMat);
    mainGroup.add(innerMesh);

    // 3. Orbital Concentric Rings
    const ringGeo1 = new THREE.RingGeometry(2.8, 2.84, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: isDark ? 0x06b6d4 : 0x0284c7,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: isDark ? 0.35 : 0.4
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(3.3, 3.33, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: isDark ? 0x818cf8 : 0x6366f1,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: isDark ? 0.25 : 0.3
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 4. Subtle Star / Data Particle System
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: isDark ? 0x38bdf8 : 0x0284c7,
      transparent: true,
      opacity: isDark ? 0.75 : 0.8
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse tracking for subtle parallax
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      targetX = ((x / rect.width) * 2 - 1) * 0.45;
      targetY = (-(y / rect.height) * 2 + 1) * 0.45;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Window resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 400;
      const newHeight = container.clientHeight || 400;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation (lerp)
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate cubes
      outerCube.rotation.x = elapsedTime * 0.18 + mouseY * 0.6;
      outerCube.rotation.y = elapsedTime * 0.22 + mouseX * 0.6;
      outerMesh.rotation.copy(outerCube.rotation);

      innerCube.rotation.x = -elapsedTime * 0.35 + mouseY * 0.4;
      innerCube.rotation.y = -elapsedTime * 0.4 + mouseX * 0.4;
      innerMesh.rotation.copy(innerCube.rotation);

      // Rotate orbital rings
      ring1.rotation.z = elapsedTime * 0.25;
      ring2.rotation.z = -elapsedTime * 0.18;

      // Subtle main group rocking
      mainGroup.rotation.y = mouseX * 0.35;
      mainGroup.rotation.x = mouseY * 0.35;

      // Slowly spin particles
      particleSystem.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount or theme switch
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      outerGeo.dispose();
      outerEdges.dispose();
      outerLineMat.dispose();
      outerFaceMat.dispose();

      innerGeo.dispose();
      innerEdges.dispose();
      innerLineMat.dispose();
      innerCoreMat.dispose();

      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();

      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [prefersReducedMotion, webglSupported, theme]);

  if (prefersReducedMotion || !webglSupported) {
    return (
      <div className="relative w-full h-full min-h-[380px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 dark:from-slate-950 dark:via-[#0d121f] dark:to-slate-950 border border-slate-200 dark:border-slate-800/60 shadow-xl dark:shadow-2xl">
        <Image
          src={fallbackImage}
          alt="Animesh Samanta Portfolio — 3D Interactive Architecture Element"
          fill
          className="object-cover opacity-85"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] dark:from-[#090b10] via-transparent to-transparent opacity-80" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Subtle ambient backdrop image with low opacity for depth */}
      <div className="absolute inset-0 opacity-15 dark:opacity-25 pointer-events-none select-none transition-opacity duration-250">
        <Image
          src={fallbackImage}
          alt="Animesh Samanta Portfolio — 3D Ambient Visual Element"
          fill
          className="object-cover blur-sm"
          priority
        />
      </div>

      {/* Interactive Three.js Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full min-h-[400px] z-10 cursor-grab active:cursor-grabbing"
        aria-label="Interactive 3D Geometric Tesseract Visual"
      />

      {/* Floating Interactive Badge Indicator */}
      <div className="absolute bottom-3 right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-cyan-500/20 backdrop-blur-md text-[11px] text-slate-700 dark:text-slate-300 pointer-events-none shadow-sm dark:shadow-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
        <span>Three.js Interactive Core (Move Cursor)</span>
      </div>
    </div>
  );
}
