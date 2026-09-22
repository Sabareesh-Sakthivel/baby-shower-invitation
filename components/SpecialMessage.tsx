"use client";

import React from "react";
import { INVITATION_CONFIG } from "@/config/invitation";
import { Heart, Sparkles } from "lucide-react";

export default function SpecialMessage() {
  const { additionalQuote } = INVITATION_CONFIG.event;

  return (
    <section className="relative my-10 px-4 sm:px-6 max-w-xl mx-auto w-full">
      <div className="relative organic-card rounded-[3rem] p-8 sm:p-10 text-center border border-[#D4AF37]/30 bg-gradient-to-tr from-[#FFFDF8] via-[#FCF8F2] to-[#FFF5F2] shadow-xl overflow-hidden card-gold-glow animate-float-reverse">
        {/* Decorative corner leaves & florals */}
        <span className="absolute top-4 left-4 text-2xl select-none opacity-40">
          🌿
        </span>
        <span className="absolute top-4 right-4 text-2xl select-none opacity-40">
          🌸
        </span>
        <span className="absolute bottom-4 left-4 text-2xl select-none opacity-40">
          🌸
        </span>
        <span className="absolute bottom-4 right-4 text-2xl select-none opacity-40">
          🌿
        </span>

        {/* Floating Footprints Badge */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-xl opacity-75">👣</span>
          <Heart className="w-4 h-4 fill-[#BE3455] text-[#BE3455]" />
          <span className="text-xl opacity-75">👣</span>
        </div>

        {/* Quote Badge */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#B8860B] font-bold mb-3">
          A Blessing For Our Little One
        </p>

        {/* 3-line Large Quote */}
        <blockquote className="space-y-1 sm:space-y-2">
          <p className="font-script text-4xl sm:text-5xl md:text-6xl text-[#BE3455] leading-tight">
            {additionalQuote.line1}
          </p>
          <p className="font-serif-cormorant text-2xl sm:text-3xl md:text-4xl text-[#382B2A] font-semibold italic">
            {additionalQuote.line2}
          </p>
          <p className="font-script text-4xl sm:text-5xl md:text-6xl text-[#557B4C] leading-tight">
            {additionalQuote.line3}
          </p>
        </blockquote>

        {/* Elegant Botanical Flourish (Replacing broken crop) */}
        <div className="mt-6 flex items-center justify-center gap-3 text-[#D4AF37]">
          <span className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-base select-none">🌸</span>
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        <p className="font-serif-cormorant italic text-sm sm:text-base text-[#382B2A]/75 mt-3 max-w-sm mx-auto">
          May the tiny giggles of today become the brightest dreams of tomorrow.
        </p>
      </div>
    </section>
  );
}
