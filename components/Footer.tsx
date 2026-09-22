"use client";

import React from "react";
import { INVITATION_CONFIG } from "@/config/invitation";
import { Heart } from "lucide-react";

export default function Footer() {
  const { couple, event } = INVITATION_CONFIG;

  return (
    <footer className="relative mt-16 pt-12 pb-14 px-4 sm:px-6 text-center border-t border-[#BE3455]/15 bg-gradient-to-b from-[#FFFDFB] to-[#FCEEEA]">
      {/* Little Footprints and Florals Trail */}
      <div className="flex justify-center items-center gap-3 mb-6 select-none opacity-75">
        <span className="text-sm">🌸</span>
        <span className="text-xs">👣</span>
        <Heart className="w-3.5 h-3.5 text-[#BE3455] fill-[#BE3455]" />
        <span className="text-xs">👣</span>
        <span className="text-sm">🌸</span>
      </div>

      {/* With Love */}
      <p className="font-serif-cormorant italic text-base sm:text-lg text-[#382B2A]/75 mb-1">
        {event.closingLead}
      </p>

      {/* Couple Names */}
      <h3 className="font-script text-5xl sm:text-6xl text-[#BE3455] leading-tight mb-4">
        {couple.names}
      </h3>

      {/* Tiny Feet • Big Dreams • Endless Love */}
      <p className="text-xs sm:text-sm font-serif-cormorant font-semibold tracking-[0.2em] text-[#382B2A]/85 uppercase mb-3">
        Tiny Feet • Big Dreams • Endless Love
      </p>

      {/* Thank you note */}
      <p className="font-serif-cormorant italic text-base sm:text-lg text-[#382B2A]/80 max-w-md mx-auto mb-8">
        Thank you for being part of our special journey and showering our little one with warm blessings.
      </p>

      {/* Physical Invitation Card Bottom Ribbon Banner */}
      <div className="max-w-xl mx-auto py-3 px-4 rounded-full bg-white/90 border border-[#BE3455]/20 shadow-xs mb-8">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-[#382B2A]/80 font-medium">
          {event.bottomPillars.map((pillar, idx) => (
            <React.Fragment key={pillar}>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <Heart className="w-2.5 h-2.5 text-[#BE3455] fill-[#BE3455]" />
                {pillar}
              </span>
              {idx < event.bottomPillars.length - 1 && (
                <span className="text-[#BE3455]/30 hidden sm:inline">|</span>
              )}
            </React.Fragment>
          ))}
          <Heart className="w-2.5 h-2.5 text-[#BE3455] fill-[#BE3455] hidden sm:inline" />
        </div>
      </div>

      {/* Polite digital invitation watermark */}
      <p className="text-[11px] text-[#382B2A]/50 tracking-wider">
        Arun & Kiruthika Baby Shower • 25 September 2026 • Kolathur, Mettur
      </p>
    </footer>
  );
}
