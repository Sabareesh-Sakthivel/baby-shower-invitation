"use client";

import React from "react";
import { INVITATION_CONFIG } from "@/config/invitation";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";

export default function EventDetails() {
  const { schedule, venue } = INVITATION_CONFIG;

  return (
    <section className="relative my-10 px-4 sm:px-6 max-w-xl mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF4FA] text-[#4A7A9E] text-xs font-semibold tracking-widest uppercase mb-2">
          <Sparkles className="w-3 h-3 text-[#4A7A9E]" />
          Celebration Schedule
        </div>
        <h2 className="font-serif-cormorant text-3xl sm:text-4xl text-[#382B2A] font-semibold">
          When & Where
        </h2>
        <p className="text-xs sm:text-sm text-[#382B2A]/65 mt-1 tracking-wide">
          We eagerly await your presence and auspicious blessings
        </p>
      </div>

      {/* 3 Detail Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Date Card */}
        <div className="group relative organic-card rounded-3xl p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg border border-[#BE3455]/15 bg-gradient-to-b from-white to-[#FDF4F2]">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#FCEBE8] text-[#BE3455] flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">
            <Calendar className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#BE3455]">
            Date
          </span>
          <h3 className="font-serif-cormorant text-xl font-bold text-[#382B2A] mt-1">
            {schedule.day}
          </h3>
          <p className="text-sm font-semibold text-[#BE3455] mt-0.5">
            25th Sept 2026
          </p>
          <span className="inline-block text-[10px] text-gray-500 mt-2 bg-white/70 px-2 py-0.5 rounded-full border border-gray-100">
            Auspicious Morning
          </span>
        </div>

        {/* Time Card */}
        <div className="group relative organic-card rounded-3xl p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg border border-[#4A7A9E]/15 bg-gradient-to-b from-white to-[#F0F7FC]">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#E8F3FA] text-[#4A7A9E] flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">
            <Clock className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#4A7A9E]">
            Time
          </span>
          <h3 className="font-serif-cormorant text-xl font-bold text-[#382B2A] mt-1">
            7:00 AM – 9:00 AM
          </h3>
          <p className="text-sm text-gray-600 mt-0.5">
            Indian Standard Time
          </p>
          <span className="inline-block text-[10px] text-gray-500 mt-2 bg-white/70 px-2 py-0.5 rounded-full border border-gray-100">
            Morning Muhurtham
          </span>
        </div>

        {/* Venue Card */}
        <div className="group relative organic-card rounded-3xl p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg border border-[#8EA885]/20 bg-gradient-to-b from-white to-[#F4F8F3]">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#EEF5EC] text-[#557B4C] flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#557B4C]">
            Venue
          </span>
          <h3 className="font-serif-cormorant text-lg font-bold text-[#382B2A] mt-1 leading-snug">
            {venue.name}
          </h3>
          <p className="text-xs text-gray-600 mt-0.5 font-medium">
            {venue.locality}
          </p>
          <span className="inline-block text-[10px] text-gray-500 mt-2 bg-white/70 px-2 py-0.5 rounded-full border border-gray-100">
            Fully Air-Conditioned
          </span>
        </div>
      </div>
    </section>
  );
}
