"use client";

import React, { useEffect, useState } from "react";
import { Heart, Sparkles } from "lucide-react";

interface LoadingScreenProps {
  onFinish?: () => void;
}

export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
  const [currentMonth, setCurrentMonth] = useState(1);
  const [progressWidth, setProgressWidth] = useState(10);
  const [phase, setPhase] = useState<"loading" | "celebrate" | "exit">("loading");
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Animate timeline months counter from 1 to 8 progressively
    const monthInterval = setInterval(() => {
      setCurrentMonth((prev) => {
        if (prev < 8) {
          const next = prev + 1;
          setProgressWidth((next / 10) * 100);
          return next;
        }
        clearInterval(monthInterval);
        return 8;
      });
    }, 280);

    // Switch to celebrate milestone at 2.6s
    const timerCelebrate = setTimeout(() => {
      setPhase("celebrate");
    }, 2600);

    // Exit transition at 3.6s
    const timerExit = setTimeout(() => {
      setPhase("exit");
    }, 3600);

    // Completely unmount at 4.3s
    const timerFinish = setTimeout(() => {
      setIsRemoved(true);
      if (onFinish) onFinish();
    }, 4300);

    return () => {
      clearInterval(monthInterval);
      clearTimeout(timerCelebrate);
      clearTimeout(timerExit);
      clearTimeout(timerFinish);
    };
  }, [onFinish]);

  if (isRemoved) return null;

  const months = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-4 transition-all duration-700 ease-out ${
        phase === "exit"
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      style={{
        background:
          "radial-gradient(circle at center, #FFFBF9 0%, #FDF3EF 55%, #FBE8E2 100%)",
      }}
    >
      {/* Gentle Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <span
          className="absolute text-xl opacity-35 animate-pulse"
          style={{ top: "12%", left: "10%", animationDuration: "3s" }}
        >
          🌸
        </span>
        <span
          className="absolute text-lg opacity-30 animate-bounce"
          style={{ top: "20%", right: "12%", animationDuration: "4s" }}
        >
          ✨
        </span>
        <span
          className="absolute text-xl opacity-30 animate-pulse"
          style={{ bottom: "16%", left: "14%", animationDuration: "3.5s" }}
        >
          🍼
        </span>
        <span
          className="absolute text-xl opacity-35 animate-bounce"
          style={{ bottom: "18%", right: "10%", animationDuration: "4.5s" }}
        >
          👣
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full mx-auto">
        {/* Animated Baby Icon Badge */}
        <div className="relative mb-5">
          <div className="w-20 h-20 rounded-full bg-white/90 shadow-lg border border-[#BE3455]/20 flex items-center justify-center animate-float-gentle">
            <span className="text-3xl">👶</span>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-gradient-to-tr from-[#BE3455] to-[#E26D89] text-white p-1.5 rounded-full shadow-md text-xs animate-pulse">
            <Heart className="w-3.5 h-3.5 fill-white" />
          </div>
        </div>

        {/* Lead Titles */}
        <p className="text-xs uppercase tracking-[0.25em] text-[#BE3455] font-semibold mb-1">
          A Little One Is On The Way
        </p>
        <h2 className="font-serif-cormorant text-2xl sm:text-3xl text-[#382B2A] font-bold">
          Arun &amp; Kiruthika
        </h2>

        {/* 10-Month Pregnancy Timeline Card */}
        <div className="w-full mt-6 mb-4 p-5 sm:p-6 rounded-3xl bg-white/85 backdrop-blur-md border border-[#BE3455]/20 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] uppercase tracking-wider font-bold text-gray-500">
              Pregnancy Journey
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FCEBE8] text-[#BE3455] text-xs font-bold tracking-wide">
              <Sparkles className="w-3 h-3 text-[#BE3455]" />
              10 Months
            </span>
          </div>

          {/* Active Highlight Badge */}
          <div className="my-3 py-2 px-3 rounded-2xl bg-gradient-to-r from-[#FCEBE8] via-[#FFF1EE] to-[#FCEBE8] border border-[#BE3455]/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl animate-bounce" style={{ animationDuration: "1.8s" }}>
                👣
              </span>
              <div className="text-left">
                <p className="text-xs font-bold text-[#BE3455] uppercase tracking-wider">
                  Now on {currentMonth}th Month
                </p>
                <p className="text-[11px] text-[#382B2A]/70">
                  {currentMonth === 8
                    ? "🌸 Baby Shower Celebration Time! 🌸"
                    : "Growing with love and blessings..."}
                </p>
              </div>
            </div>
            <span className="font-serif-cormorant text-2xl font-bold text-[#BE3455]">
              {currentMonth} <span className="text-xs font-normal text-gray-400">/ 10</span>
            </span>
          </div>

          {/* Timeline Progress Bar Track */}
          <div className="relative mt-5 mb-2">
            {/* Background Line */}
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#F3A5B7] via-[#D95F7B] to-[#BE3455] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressWidth}%` }}
              />
            </div>

            {/* 10 Monthly Nodes */}
            <div className="flex justify-between items-center -mt-2 px-0.5">
              {months.map((m) => {
                const isPassed = m < currentMonth;
                const isCurrent = m === currentMonth;

                return (
                  <div key={m} className="flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold transition-all duration-300 ${
                        isCurrent
                          ? "bg-[#BE3455] text-white ring-4 ring-[#BE3455]/25 scale-125"
                          : isPassed
                          ? "bg-[#BE3455] text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {m}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Milestone Labels */}
          <div className="flex justify-between text-[10px] text-gray-500 font-medium pt-2">
            <span>Month 1: Tiny Start</span>
            <span className="text-[#BE3455] font-bold">Month 8: Baby Shower</span>
            <span>Month 10: Arrival</span>
          </div>
        </div>

        {/* Pulse Loading Indicator */}
        <div className="flex items-center gap-2 mt-2">
          <span
            className="text-base text-[#BE3455] animate-pulse"
            style={{ animationDelay: "0ms", animationDuration: "1s" }}
          >
            ♡
          </span>
          <span
            className="text-lg text-[#BE3455] animate-pulse"
            style={{ animationDelay: "200ms", animationDuration: "1s" }}
          >
            ♡
          </span>
          <span
            className="text-base text-[#BE3455] animate-pulse"
            style={{ animationDelay: "400ms", animationDuration: "1s" }}
          >
            ♡
          </span>
        </div>

        <p className="text-[11px] text-[#382B2A]/60 mt-2 tracking-widest uppercase font-medium">
          Preparing your invitation...
        </p>
      </div>
    </div>
  );
}
