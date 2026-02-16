"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { hexToRgb } from "@/lib/three-utils";
import { portalVertexShader } from "./shaders/portalVertex";
import { portalFragmentShader } from "./shaders/portalFragment";

interface PortalFieldProps {
  colorCore?: string;
  colorMid?: string;
  colorOuter?: string;
}

export function PortalField({
  colorCore = "#FFFFFF",
  colorMid = "#c084fc",
  colorOuter = "#7c3aed",
}: PortalFieldProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create shader material
  const material = useMemo(() => {
    const [r1, g1, b1] = hexToRgb(colorCore);
    const [r2, g2, b2] = hexToRgb(colorMid);
    const [r3, g3, b3] = hexToRgb(colorOuter);

    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColorCore: { value: new THREE.Vector3(r1, g1, b1) },
        uColorMid: { value: new THREE.Vector3(r2, g2, b2) },
        uColorOuter: { value: new THREE.Vector3(r3, g3, b3) },
        uIntensity: { value: 1.0 },
      },
      vertexShader: portalVertexShader,
      fragmentShader: portalFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }, [colorCore, colorMid, colorOuter]);

  // Animation loop
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.ShaderMaterial;
      mat.uniforms.uTime.value = clock.getElapsedTime();

      // Gentle pulsing intensity
      mat.uniforms.uIntensity.value = 0.9 + 0.1 * Math.sin(clock.getElapsedTime() * 0.8);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -1, 0]}>
      <planeGeometry args={[12, 8]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}
