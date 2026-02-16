"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { ParticleField } from "./ParticleField";
import { detectDeviceCapabilities, getParticleCount, getParticleSize } from "@/lib/device-detection";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ParticleBackgroundProps {
  colorA?: string;
  colorB?: string;
  className?: string;
}

function FallbackGradient({ colorA = "#4ADE80", colorB = "#06B6D4" }: { colorA?: string; colorB?: string }) {
  return (
    <div
      className="absolute inset-0 opacity-30"
      style={{
        background: `radial-gradient(ellipse at center, ${colorA}15 0%, ${colorB}10 50%, transparent 100%)`,
      }}
    />
  );
}

export function ParticleBackground({
  colorA = "#4ADE80",
  colorB = "#06B6D4",
  className = "",
}: ParticleBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();

  const deviceCapabilities = useMemo(() => detectDeviceCapabilities(), []);
  const particleCount = useMemo(() => getParticleCount(deviceCapabilities), [deviceCapabilities]);
  const particleSize = useMemo(() => getParticleSize(deviceCapabilities), [deviceCapabilities]);

  // Use fallback for reduced motion or no WebGL support
  if (prefersReducedMotion || !deviceCapabilities.supportsWebGL || particleCount === 0) {
    return <FallbackGradient colorA={colorA} colorB={colorB} />;
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Suspense fallback={<FallbackGradient colorA={colorA} colorB={colorB} />}>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          style={{ background: "transparent" }}
          dpr={Math.min(deviceCapabilities.devicePixelRatio, 2)}
        >
          <ParticleField
            count={particleCount}
            colorA={colorA}
            colorB={colorB}
            size={particleSize}
            radius={5.0}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
