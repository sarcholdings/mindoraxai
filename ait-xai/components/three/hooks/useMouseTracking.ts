"use client";

import { useEffect, useRef } from "react";

export function useMouseTracking() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      targetPosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Smooth damping animation
    const animate = () => {
      mousePosition.current.x +=
        (targetPosition.current.x - mousePosition.current.x) * 0.05;
      mousePosition.current.y +=
        (targetPosition.current.y - mousePosition.current.y) * 0.05;

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return mousePosition;
}
