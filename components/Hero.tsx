"use client";

import React from "react";
import { INVITATION_CONFIG } from "@/config/invitation";
import { Heart, Sparkles } from "lucide-react";

export default function Hero() {
  const { couple, event } = INVITATION_CONFIG;

  return (
    <header className="relative pt-8 pb-10 px-4 sm:px-6 flex flex-col items-center text-center">
      {/* Top Floating Botanical Flourish */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm opacity-70">🌸</span>
        <span className="text-xs uppercase tracking-[0.28em] text-[#8EA885] font-semibold">
          ✦ Blessed Celebration ✦
        </span>
        <span className="text-sm opacity-70">🌸</span>
      </div>

      {/* Main Invitation Badge / Tagline */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF1EE] border border-[#BE3455]/20 shadow-xs mb-5 animate-float-gentle">
        <Heart className="w-3.5 h-3.5 text-[#BE3455] fill-[#BE3455]/40" />
        <span className="font-serif-cormorant italic text-base sm:text-lg text-[#382B2A] font-semibold tracking-wide">
          {event.tagline}
        </span>
        <Heart className="w-3.5 h-3.5 text-[#BE3455] fill-[#BE3455]/40" />
      </div>

      {/* Subtitle Message */}
      <p className="font-serif-cormorant text-lg sm:text-xl md:text-2xl text-[#382B2A]/85 max-w-xl mx-auto leading-relaxed mb-6 font-normal">
        “{event.subtitle}”
      </p>

      {/* Decorative Baby Mobile Motif (Inspired by the Reference Card) */}
      <div className="w-full max-w-xs flex justify-center items-center my-1 select-none pointer-events-none opacity-80">
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#BE3455]">☁️</span>
          <span className="text-xs text-[#BE3455]">⭐</span>
          <span className="text-base text-[#BE3455]">🌈</span>
          <span className="text-xs text-[#BE3455]">⭐</span>
          <span className="text-xs text-[#BE3455]">☁️</span>
        </div>
      </div>

      {/* Invitation Lead */}
      <div className="mt-4 mb-2">
        <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-[#382B2A]/70 font-medium">
          {event.invitationLead}
        </p>
      </div>

      {/* Baby Shower Calligraphy Title */}
      <div className="relative py-2 my-1">
        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-[#BE3455] drop-shadow-xs leading-tight tracking-normal">
          {event.title}
        </h1>
        {/* Floating Heart Accent */}
        <span className="absolute -top-1 right-2 sm:right-6 text-xl text-[#BE3455] animate-pulse-heart">
          ♡
        </span>
      </div>

      {/* A Little One Is On The Way */}
      <div className="inline-flex items-center justify-center gap-2 mt-2 mb-6">
        <span className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#BE3455]/40" />
        <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#BE3455] uppercase">
          {event.highlight}
        </span>
        <span className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#BE3455]/40" />
      </div>

      {/* Parents-To-Be Couple Header */}
      <div className="relative mt-2 mb-4">
        <p className="text-xs uppercase tracking-[0.28em] text-[#8EA885] font-semibold mb-1">
          Parents-To-Be
        </p>
        <h2 className="font-script text-5xl sm:text-6xl text-[#382B2A] leading-tight">
          {couple.names}
        </h2>
      </div>

      {/* Showering the mommy message */}
      <p className="font-serif-cormorant text-base sm:text-lg text-[#382B2A]/80 max-w-md mx-auto italic mt-1 mb-4 leading-normal">
        {event.showeringMessage}
      </p>

      {/* Botanical Flourish Divider */}
      <div className="flex items-center justify-center gap-3 text-[#BE3455]/60 my-2">
        <span className="text-xs">🌿</span>
        <Heart className="w-3 h-3 fill-[#BE3455] text-[#BE3455]" />
        <span className="text-xs">🌿</span>
      </div>
    </header>
  );
}
