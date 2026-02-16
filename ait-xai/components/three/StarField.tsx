"use client";

import { useMemo } from "react";

export function StarField({ count = 100 }: { count?: number }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 3}s`,
      delay: `${Math.random() * 5}s`,
      opacity: 0.2 + Math.random() * 0.5,
    }));
  }, [count]);

  return (
    <div className="star-field">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            opacity: star.opacity,
            '--duration': star.duration,
            '--delay': star.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
