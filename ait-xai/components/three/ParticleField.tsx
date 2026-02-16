"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { hexToRgb } from "@/lib/three-utils";
import { useMouseTracking } from "./hooks/useMouseTracking";
import { particleVertexShader } from "./shaders/particleVertex";
import { particleFragmentShader } from "./shaders/particleFragment";

interface ParticleFieldProps {
  count?: number;
  colorA?: string;
  colorB?: string;
  size?: number;
  radius?: number;
}

export function ParticleField({
  count = 10000,
  colorA = "#4ADE80",
  colorB = "#06B6D4",
  size = 2.0,
  radius = 5.0,
}: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const mousePosition = useMouseTracking();

  // Create particle geometry and attributes
  const { positions, scales } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Distribute particles in a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = radius * Math.cbrt(Math.random()); // Cube root for uniform distribution

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      scales[i] = Math.random() * 0.5 + 0.5;
    }

    return { positions, scales };
  }, [count, radius]);

  // Create shader material
  const material = useMemo(() => {
    const [r1, g1, b1] = hexToRgb(colorA);
    const [r2, g2, b2] = hexToRgb(colorB);

    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uMorphFactor: { value: 0.5 },
        uSize: { value: size },
        uColorA: { value: new THREE.Vector3(r1, g1, b1) },
        uColorB: { value: new THREE.Vector3(r2, g2, b2) },
      },
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }, [colorA, colorB, size]);

  // Animation loop
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const material = pointsRef.current.material as THREE.ShaderMaterial;

      // Update time
      material.uniforms.uTime.value = clock.getElapsedTime();

      // Update mouse position
      material.uniforms.uMouse.value.set(
        mousePosition.current.x,
        mousePosition.current.y
      );

      // Animate morph factor with sine wave for breathing effect
      material.uniforms.uMorphFactor.value =
        0.5 + Math.sin(clock.getElapsedTime() * 0.3) * 0.3;

      // Gentle rotation
      pointsRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aScale"
          count={scales.length}
          array={scales}
          itemSize={1}
        />
      </bufferGeometry>
      <primitive object={material} attach="material" />
    </points>
  );
}
