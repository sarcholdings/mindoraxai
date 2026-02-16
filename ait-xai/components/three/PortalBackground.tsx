"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { PortalField } from "./PortalField";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { StarField } from "./StarField";
import { detectDeviceCapabilities } from "@/lib/device-detection";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface PortalBackgroundProps {
  colorCore?: string;
  colorMid?: string;
  colorOuter?: string;
  className?: string;
}

function FallbackPortal({ colorMid = "#c084fc" }: { colorMid?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* CSS-based portal fallback */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1a0533] via-[#0d021a] to-[#07010d]" />
      <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px]">
        <div
          className="absolute inset-0 rounded-[50%] opacity-40 blur-[60px]"
          style={{ background: colorMid }}
        />
      </div>
    </div>
  );
}

export function PortalBackground({
  colorCore = "#FFFFFF",
  colorMid = "#c084fc",
  colorOuter = "#7c3aed",
  className = "",
}: PortalBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();
  const deviceCapabilities = useMemo(() => detectDeviceCapabilities(), []);

  // Use fallback for reduced motion or no WebGL support
  if (prefersReducedMotion || !deviceCapabilities.supportsWebGL) {
    return <FallbackPortal colorMid={colorMid} />;
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Star field background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#1a0533] via-[#0d021a] to-[#07010d]" />
      <StarField count={150} />

      {/* Orbital ring */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="orbital-ring" />
      </div>

      {/* Three.js Portal */}
      <Suspense fallback={<FallbackPortal colorMid={colorMid} />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: "transparent" }}
          dpr={Math.min(deviceCapabilities.devicePixelRatio, 2)}
        >
          <PortalField
            colorCore={colorCore}
            colorMid={colorMid}
            colorOuter={colorOuter}
          />
          <EffectComposer>
            <Bloom
              intensity={1.5}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
          </EffectComposer>
        </Canvas>
      </Suspense>

      {/* Horizon line with glow */}
      <div className="absolute left-0 right-0 top-[60%] h-px bg-white/20 shadow-[0_0_20px_rgba(192,132,252,0.4)]" />

      {/* Ground reflection */}
      <div
        className="absolute left-0 right-0 top-[60%] h-[40%] opacity-20"
        style={{
          background: 'linear-gradient(to bottom, rgba(192,132,252,0.3), transparent)',
        }}
      />
    </div>
  );
}
