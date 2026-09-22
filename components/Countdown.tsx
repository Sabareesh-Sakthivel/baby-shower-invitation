"use client";

import React, { useEffect, useState, useCallback } from "react";
import confetti from "canvas-confetti";
import { INVITATION_CONFIG } from "@/config/invitation";
import { Heart } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isStarted: boolean;
}

export default function Countdown() {
  const targetIso = INVITATION_CONFIG.schedule.targetIso;
  const [mounted, setMounted] = useState(false);

  const calculateTimeLeft = useCallback((): TimeLeft => {
    // 25 September 2026 07:00:00 IST (+05:30)
    const targetTime = new Date(targetIso).getTime();
    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isStarted: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isStarted: false,
    };
  }, [targetIso]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isStarted: false,
  });
  const [hasTriggeredConfetti, setHasTriggeredConfetti] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);

      if (updated.isStarted && !hasTriggeredConfetti) {
        setHasTriggeredConfetti(true);
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#BE3455", "#FCEBE8", "#CBE5F6", "#D4AF37", "#8EA885"],
          });
        } catch {
          // ignore
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft, hasTriggeredConfetti]);

  const handleConfettiClick = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#BE3455", "#FCEBE8", "#CBE5F6", "#D4AF37"],
      });
    } catch {
      // ignore
    }
  };

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <section className="relative my-10 px-4 sm:px-6 max-w-xl mx-auto w-full">
      <div className="relative organic-card rounded-[2.5rem] p-6 sm:p-8 text-center border border-[#BE3455]/20 bg-gradient-to-b from-[#FFFDFD] via-[#FEF7F5] to-[#FCEDE9] shadow-xl overflow-hidden">
        {/* Subtle decorative background watermarks */}
        <span className="absolute -top-4 -right-4 text-6xl opacity-10 select-none pointer-events-none">
          👣
        </span>
        <span className="absolute -bottom-4 -left-4 text-6xl opacity-10 select-none pointer-events-none">
          🌸
        </span>

        {/* Header */}
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <Heart className="w-3.5 h-3.5 text-[#BE3455] fill-[#BE3455]/30 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#BE3455] font-semibold">
            Counting Down To Our Joy
          </span>
          <Heart className="w-3.5 h-3.5 text-[#BE3455] fill-[#BE3455]/30 animate-pulse" />
        </div>

        <h3 className="font-serif-cormorant text-2xl sm:text-3xl text-[#382B2A] font-bold mb-6">
          Until We Welcome Little Blessings
        </h3>

        {mounted && timeLeft.isStarted ? (
          <div className="py-6 px-4 rounded-2xl bg-white/90 border border-[#BE3455]/30 shadow-md animate-fadeIn">
            <span className="text-3xl sm:text-4xl block mb-2">🎉👶🌸</span>
            <h4 className="font-serif-cormorant text-2xl sm:text-3xl text-[#BE3455] font-bold">
              The Celebration Has Begun! ❤️
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Join us at Palamuthir AC Hall, Mettur, Kolathur.
            </p>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
              {/* Days */}
              <div
                onClick={handleConfettiClick}
                className="cursor-pointer group flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white/90 border border-[#BE3455]/15 shadow-sm transition-transform duration-200 hover:scale-105"
              >
                <span className="font-serif-cormorant text-2xl sm:text-4xl font-bold text-[#BE3455] leading-none">
                  {mounted ? formatNumber(timeLeft.days) : "--"}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#382B2A]/70 mt-1.5">
                  Days
                </span>
              </div>

              {/* Hours */}
              <div
                onClick={handleConfettiClick}
                className="cursor-pointer group flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white/90 border border-[#BE3455]/15 shadow-sm transition-transform duration-200 hover:scale-105"
              >
                <span className="font-serif-cormorant text-2xl sm:text-4xl font-bold text-[#382B2A] leading-none">
                  {mounted ? formatNumber(timeLeft.hours) : "--"}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#382B2A]/70 mt-1.5">
                  Hours
                </span>
              </div>

              {/* Minutes */}
              <div
                onClick={handleConfettiClick}
                className="cursor-pointer group flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white/90 border border-[#BE3455]/15 shadow-sm transition-transform duration-200 hover:scale-105"
              >
                <span className="font-serif-cormorant text-2xl sm:text-4xl font-bold text-[#382B2A] leading-none">
                  {mounted ? formatNumber(timeLeft.minutes) : "--"}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#382B2A]/70 mt-1.5">
                  Mins
                </span>
              </div>

              {/* Seconds */}
              <div
                onClick={handleConfettiClick}
                className="cursor-pointer group flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white/90 border border-[#BE3455]/25 shadow-sm transition-transform duration-200 hover:scale-105 ring-1 ring-[#BE3455]/20"
              >
                <span className="font-serif-cormorant text-2xl sm:text-4xl font-bold text-[#BE3455] leading-none">
                  {mounted ? formatNumber(timeLeft.seconds) : "--"}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#BE3455] mt-1.5">
                  Secs
                </span>
              </div>
            </div>

            <p className="text-[11px] text-[#382B2A]/60 mt-5 tracking-wider uppercase font-medium">
              Friday • 25 September 2026 • 7:00 AM IST
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
