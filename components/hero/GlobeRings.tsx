"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useTheme } from "@/components/ThemeProvider";

interface GlobeRingsProps {
  radius?: number;
}

export function GlobeRings({ radius = 1.8 }: GlobeRingsProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const sat1Ref = useRef<THREE.Mesh>(null);
  const sat2Ref = useRef<THREE.Mesh>(null);

  // Compact, sleek orbital radii relative to small earth radius
  const r1 = radius * 1.18;
  const r2 = radius * 1.32;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Satellite 1 revolving along Ring 1
    if (sat1Ref.current) {
      const angle = t * 0.45;
      sat1Ref.current.position.set(Math.cos(angle) * r1, Math.sin(angle) * r1, 0);
    }

    // Satellite 2 revolving along Ring 2 (counter-rotation)
    if (sat2Ref.current) {
      const angle = -t * 0.35 + Math.PI / 3;
      sat2Ref.current.position.set(Math.cos(angle) * r2, Math.sin(angle) * r2, 0);
    }
  });

  const skyBlueColor = isDark ? "#38bdf8" : "#0284c7";
  const violetColor = isDark ? "#818cf8" : "#4f46e5";

  return (
    <group>
      {/* Orbital Ring 1 (Tilted sky-blue ellipse) */}
      <group ref={ring1Ref} rotation={[0.55, 0.2, 0.35]}>
        <mesh>
          <torusGeometry args={[r1, 0.0035, 8, 120]} />
          <meshBasicMaterial
            color={skyBlueColor}
            transparent
            opacity={isDark ? 0.26 : 0.2}
            depthWrite={false}
          />
        </mesh>

        {/* Orbiting Satellite Node 1 */}
        <mesh ref={sat1Ref}>
          <sphereGeometry args={[0.02, 12, 12]} />
          <meshBasicMaterial color={isDark ? "#ffffff" : skyBlueColor} toneMapped={false} />
        </mesh>
      </group>

      {/* Orbital Ring 2 (Counter-tilted violet ellipse) */}
      <group ref={ring2Ref} rotation={[-0.7, -0.3, -0.45]}>
        <mesh>
          <torusGeometry args={[r2, 0.0028, 8, 120]} />
          <meshBasicMaterial
            color={violetColor}
            transparent
            opacity={isDark ? 0.2 : 0.16}
            depthWrite={false}
          />
        </mesh>

        {/* Orbiting Satellite Node 2 */}
        <mesh ref={sat2Ref}>
          <sphereGeometry args={[0.016, 12, 12]} />
          <meshBasicMaterial color={isDark ? "#ffffff" : violetColor} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}
