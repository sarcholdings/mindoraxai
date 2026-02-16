"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 120;
const CONNECTION_DISTANCE = 2.2;
const FIELD_SIZE = 12;

function Particles({ color = "#4fd1c5" }: { color?: string }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { viewport } = useThree();

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate initial positions and velocities
  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * FIELD_SIZE * 1.5;
      pos[i * 3 + 1] = (Math.random() - 0.5) * FIELD_SIZE;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      vel[i * 3] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }
    return { positions: pos, velocities: vel };
  }, []);

  // Pre-allocate line geometry
  const maxLines = PARTICLE_COUNT * 6;
  const linePositions = useMemo(
    () => new Float32Array(maxLines * 6),
    [maxLines]
  );
  const lineColors = useMemo(
    () => new Float32Array(maxLines * 6),
    [maxLines]
  );

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3).setUsage(
        THREE.DynamicDrawUsage
      )
    );
    geo.setAttribute(
      "color",
      new THREE.BufferAttribute(lineColors, 3).setUsage(
        THREE.DynamicDrawUsage
      )
    );
    geo.setDrawRange(0, 0);
    return geo;
  }, [linePositions, lineColors]);

  const threeColor = useMemo(() => new THREE.Color(color), [color]);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;

    // Update positions with gentle drift
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] +=
        velocities[i * 3] + Math.sin(time * 0.2 + i * 0.1) * 0.001;
      positions[i * 3 + 1] +=
        velocities[i * 3 + 1] + Math.cos(time * 0.15 + i * 0.1) * 0.001;
      positions[i * 3 + 2] +=
        velocities[i * 3 + 2] + Math.sin(time * 0.1 + i * 0.2) * 0.0005;

      // Wrap around boundaries
      const halfW = FIELD_SIZE * 0.8;
      const halfH = FIELD_SIZE * 0.6;
      if (positions[i * 3] > halfW) positions[i * 3] = -halfW;
      if (positions[i * 3] < -halfW) positions[i * 3] = halfW;
      if (positions[i * 3 + 1] > halfH) positions[i * 3 + 1] = -halfH;
      if (positions[i * 3 + 1] < -halfH) positions[i * 3 + 1] = halfH;

      // Update instance
      const scale = 0.02 + Math.sin(time * 0.5 + i) * 0.008;
      dummy.position.set(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2]
      );
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;

    // Compute connections
    let lineIdx = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE && lineIdx < maxLines) {
          const alpha = 1 - dist / CONNECTION_DISTANCE;
          const a = alpha * 0.35;

          linePositions[lineIdx * 6] = positions[i * 3];
          linePositions[lineIdx * 6 + 1] = positions[i * 3 + 1];
          linePositions[lineIdx * 6 + 2] = positions[i * 3 + 2];
          linePositions[lineIdx * 6 + 3] = positions[j * 3];
          linePositions[lineIdx * 6 + 4] = positions[j * 3 + 1];
          linePositions[lineIdx * 6 + 5] = positions[j * 3 + 2];

          lineColors[lineIdx * 6] = threeColor.r * a;
          lineColors[lineIdx * 6 + 1] = threeColor.g * a;
          lineColors[lineIdx * 6 + 2] = threeColor.b * a;
          lineColors[lineIdx * 6 + 3] = threeColor.r * a;
          lineColors[lineIdx * 6 + 4] = threeColor.g * a;
          lineColors[lineIdx * 6 + 5] = threeColor.b * a;

          lineIdx++;
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIdx * 2);
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.color.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </instancedMesh>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial vertexColors transparent opacity={1} />
      </lineSegments>
    </>
  );
}

interface ParticleFieldProps {
  color?: string;
  className?: string;
}

export default function ParticleField({
  color = "#4fd1c5",
  className = "",
}: ParticleFieldProps) {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles color={color} />
      </Canvas>
    </div>
  );
}
