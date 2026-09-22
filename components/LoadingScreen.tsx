"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface LoadingScreenProps {
  onFinish?: () => void;
}

export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"initial" | "second" | "exit">("initial");
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Phase 1 -> Phase 2 at 1.2s
    const timer1 = setTimeout(() => {
      setPhase("second");
    }, 1200);

    // Phase 2 -> Exit transition at 2.6s
    const timer2 = setTimeout(() => {
      setPhase("exit");
    }, 2600);

    // Completely unmount after exit transition (3.3s)
    const timer3 = setTimeout(() => {
      setIsRemoved(true);
      if (onFinish) onFinish();
    }, 3300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  if (isRemoved) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ease-out ${
        phase === "exit"
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      style={{
        background:
          "radial-gradient(circle at center, #FFF8F5 0%, #FDF3EF 50%, #FAE9E4 100%)",
      }}
    >
      {/* Gentle Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span
          className="absolute text-2xl opacity-40 animate-pulse"
          style={{ top: "15%", left: "12%", animationDuration: "3s" }}
        >
          🌸
        </span>
        <span
          className="absolute text-xl opacity-35 animate-bounce"
          style={{ top: "25%", right: "15%", animationDuration: "4s" }}
        >
          ✨
        </span>
        <span
          className="absolute text-2xl opacity-30 animate-pulse"
          style={{ bottom: "20%", left: "18%", animationDuration: "3.5s" }}
        >
          🍼
        </span>
        <span
          className="absolute text-xl opacity-40 animate-bounce"
          style={{ bottom: "18%", right: "14%", animationDuration: "4.5s" }}
        >
          🧸
        </span>
        <span
          className="absolute text-base opacity-35 animate-pulse"
          style={{ top: "45%", left: "8%", animationDuration: "2.8s" }}
        >
          ☁️
        </span>
        <span
          className="absolute text-base opacity-35 animate-pulse"
          style={{ top: "40%", right: "9%", animationDuration: "3.2s" }}
        >
          🎀
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md mx-auto">
        {/* Animated Baby Icon / Teddy Badge */}
        <div className="relative mb-6">
          <div className="w-28 h-28 rounded-full bg-white/80 backdrop-blur-sm p-3 shadow-lg ring-1 ring-[#BE3455]/20 flex items-center justify-center animate-float-gentle">
            <Image
              src="/images/teddy.png"
              alt="Cute Teddy Bear"
              width={90}
              height={90}
              className="object-contain"
              priority
            />
          </div>
          {/* Subtle Footprint Badge Overlap */}
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-tr from-[#BE3455] to-[#D95F7B] text-white p-2 rounded-full shadow-md text-xs animate-pulse">
            👣
          </div>
        </div>

        {/* Text Sequence */}
        <div className="h-20 flex flex-col items-center justify-center">
          {phase === "initial" && (
            <div className="transition-all duration-500 transform animate-fadeIn">
              <p className="text-xs uppercase tracking-[0.25em] text-[#BE3455] font-semibold mb-1">
                A Little One Is On The Way
              </p>
              <h2 className="font-script text-3xl sm:text-4xl text-[#382B2A]">
                Tiny Blessings Arriving
              </h2>
            </div>
          )}

          {(phase === "second" || phase === "exit") && (
            <div className="transition-all duration-500 transform animate-fadeIn">
              <p className="text-xs uppercase tracking-[0.25em] text-[#BE3455] font-semibold mb-1">
                Arun & Kiruthika
              </p>
              <h2 className="font-serif-cormorant text-2xl sm:text-3xl text-[#382B2A] font-medium italic">
                Preparing Something Special For You...
              </h2>
            </div>
          )}
        </div>

        {/* Cute Hearts Loading Indicator */}
        <div className="mt-6 flex items-center gap-2">
          <span
            className="text-lg text-[#BE3455] animate-pulse"
            style={{ animationDelay: "0ms", animationDuration: "1s" }}
          >
            ♡
          </span>
          <span
            className="text-xl text-[#BE3455] animate-pulse"
            style={{ animationDelay: "200ms", animationDuration: "1s" }}
          >
            ♡
          </span>
          <span
            className="text-lg text-[#BE3455] animate-pulse"
            style={{ animationDelay: "400ms", animationDuration: "1s" }}
          >
            ♡
          </span>
        </div>

        <p className="text-[11px] text-[#382B2A]/60 mt-3 tracking-widest uppercase">
          Baby shower celebration is loading
        </p>
      </div>
    </div>
  );
}
