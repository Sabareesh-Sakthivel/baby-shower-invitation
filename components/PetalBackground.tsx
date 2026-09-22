"use client";

import React, { useMemo } from "react";

export default function PetalBackground() {
  // Generate stable random particles on client
  const particles = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: `${(i * 7.5 + 4) % 94}%`,
      delay: `${(i * 1.3) % 9}s`,
      duration: `${14 + ((i * 3) % 10)}s`,
      size: 14 + (i % 3) * 6,
      opacity: 0.25 + (i % 4) * 0.15,
      type: i % 4 === 0 ? "🌸" : i % 4 === 1 ? "🍃" : i % 4 === 2 ? "♡" : "✨",
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="petal-particle select-none"
          style={{
            left: p.left,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          {p.type}
        </span>
      ))}
    </div>
  );
}
