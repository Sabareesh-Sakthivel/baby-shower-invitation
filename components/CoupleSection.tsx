"use client";

import React, { useState } from "react";
import Image from "next/image";
import { INVITATION_CONFIG } from "@/config/invitation";
import { Eye } from "lucide-react";

export default function CoupleSection() {
  const { couple, media } = INVITATION_CONFIG;
  const [showFullCardModal, setShowFullCardModal] = useState(false);

  return (
    <section className="relative my-8 px-4 sm:px-6 flex flex-col items-center">
      {/* Decorative Botanical Ambient Frame */}
      <div className="relative max-w-sm sm:max-w-md w-full">
        {/* Soft Background Warm Glow */}
        <div className="absolute inset-0 -m-3 rounded-[3rem] bg-gradient-to-b from-[#FCECE8] via-[#FDF5F2] to-[#FFF9F6] border border-[#BE3455]/15 shadow-xl -z-10" />

        {/* Floating Top Flowers */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 border border-[#BE3455]/20 shadow-sm backdrop-blur-xs">
          <span className="text-xs">🌸</span>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#BE3455] font-semibold">
            Expecting Our Miracle
          </span>
          <span className="text-xs">🌸</span>
        </div>

        {/* The Couple Arch Frame */}
        <div className="relative mt-4 mx-auto w-[280px] sm:w-[320px] aspect-[4/5] arch-frame overflow-hidden ring-4 ring-white shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
          <Image
            src={media.couplePhoto}
            alt={`${couple.names} - Parents-To-Be`}
            fill
            className="object-cover object-center transform scale-105 transition-transform duration-700 hover:scale-110"
            sizes="(max-width: 640px) 280px, 320px"
            priority
          />

          {/* Soft inner vignette overlay for romantic depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#382B2A]/40 via-transparent to-transparent pointer-events-none" />

          {/* Floating 'Baby on the way ♡' badge at bottom corner */}
          <div className="absolute bottom-3 left-3 z-10 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-2xl border border-[#BE3455]/20 shadow-md flex items-center gap-1.5 animate-float-gentle">
            <span className="text-xs">🧸</span>
            <span className="font-script text-lg text-[#BE3455] leading-none pt-0.5">
              Baby on the way ♡
            </span>
          </div>

          {/* Quick Peek of Original Card Button */}
          <button
            onClick={() => setShowFullCardModal(true)}
            aria-label="View original invitation card"
            className="absolute top-3 right-3 z-10 bg-white/85 hover:bg-white text-[#382B2A] p-2 rounded-full shadow-md border border-[#BE3455]/20 transition-all hover:scale-105 active:scale-95"
            title="View original invitation card"
          >
            <Eye className="w-3.5 h-3.5 text-[#BE3455]" />
          </button>
        </div>

        {/* Accompanying Baby Shower Keepsakes (Teddy, Shoes, Blocks) */}
        <div className="flex items-center justify-around px-4 mt-6">
          {/* Teddy with pink bow */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative transition-transform duration-300 hover:scale-110">
              <Image
                src={media.teddy}
                alt="Teddy Bear"
                fill
                sizes="(max-width: 640px) 64px, 80px"
                className="object-contain drop-shadow-md"
              />
            </div>
            <span className="text-[10px] tracking-wider uppercase text-[#382B2A]/60 mt-1 font-medium">
              Tiny Blessings
            </span>
          </div>

          {/* Pink baby booties */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative transition-transform duration-300 hover:scale-110">
              <Image
                src={media.shoes}
                alt="Pink Baby Booties"
                fill
                sizes="(max-width: 640px) 64px, 80px"
                className="object-contain drop-shadow-md"
              />
            </div>
            <span className="text-[10px] tracking-wider uppercase text-[#382B2A]/60 mt-1 font-medium">
              Little Feet
            </span>
          </div>

          {/* Baby alphabet blocks */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative transition-transform duration-300 hover:scale-110">
              <Image
                src={media.blocks}
                alt="BABY alphabet wooden blocks"
                fill
                sizes="(max-width: 640px) 64px, 80px"
                className="object-contain drop-shadow-md"
              />
            </div>
            <span className="text-[10px] tracking-wider uppercase text-[#382B2A]/60 mt-1 font-medium">
              Big Dreams
            </span>
          </div>
        </div>

        {/* Couple Sign-off */}
        <div className="text-center mt-6 pb-2">
          <p className="font-serif-cormorant italic text-base text-[#382B2A]/70 mb-0.5">
            With Love,
          </p>
          <p className="font-script text-4xl sm:text-5xl text-[#BE3455]">
            {couple.names}
          </p>
        </div>
      </div>

      {/* Modal Lightbox for Original Physical Invitation Card */}
      {showFullCardModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setShowFullCardModal(false)}
        >
          <div
            className="relative max-w-sm sm:max-w-md w-full bg-white rounded-3xl p-3 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
              <h3 className="font-serif-cormorant font-semibold text-lg text-[#382B2A]">
                Original Keepsake Card
              </h3>
              <button
                onClick={() => setShowFullCardModal(false)}
                className="text-gray-400 hover:text-gray-700 text-sm font-bold w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <div className="relative w-full aspect-[853/1280] rounded-2xl overflow-hidden mt-2">
              <Image
                src={media.fullCard}
                alt="Full Baby Shower Card"
                fill
                sizes="(max-width: 640px) 360px, 440px"
                className="object-contain"
              />
            </div>
            <p className="text-center text-xs text-gray-500 mt-2 mb-1">
              Tap anywhere outside to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
