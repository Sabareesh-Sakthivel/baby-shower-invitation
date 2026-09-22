"use client";

import React from "react";
import { INVITATION_CONFIG } from "@/config/invitation";
import { Heart } from "lucide-react";

export default function Journey() {
  const steps = INVITATION_CONFIG.event.journeySteps;

  return (
    <section className="relative my-12 px-4 sm:px-6 max-w-lg mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCEBE8] text-[#BE3455] text-xs font-semibold tracking-widest uppercase mb-2">
          <Heart className="w-3 h-3 fill-[#BE3455]" />
          Our Journey
        </div>
        <h2 className="font-serif-cormorant text-3xl sm:text-4xl text-[#382B2A] font-semibold">
          A Little One Is On The Way ❤️
        </h2>
        <p className="font-serif-cormorant italic text-base sm:text-lg text-[#382B2A]/70 mt-1">
          Every moment brings us closer to our greatest adventure
        </p>
      </div>

      {/* Vertical Footsteps Milestone Path */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-dashed border-[#BE3455]/30 space-y-6 sm:space-y-8 ml-4 sm:ml-8">
        {steps.map((step, index) => (
          <div
            key={step.text}
            className="group relative transition-all duration-300 hover:translate-x-1"
          >
            {/* Step Marker Badge */}
            <div className="absolute -left-[37px] sm:-left-[45px] top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-[#BE3455] shadow-md flex items-center justify-center text-sm sm:text-base group-hover:scale-110 group-hover:bg-[#FCEBE8] transition-all">
              {step.icon}
            </div>

            {/* Content Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/80 border border-[#BE3455]/15 shadow-xs backdrop-blur-xs transition-shadow duration-300 hover:shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="font-serif-cormorant text-xl sm:text-2xl font-bold text-[#BE3455]">
                  {step.text}
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">
                  Step 0{index + 1}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#382B2A]/75 mt-1 font-medium">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Little Footprint Trail Accent at Bottom */}
      <div className="flex justify-center items-center gap-3 mt-8 text-sm opacity-60">
        <span className="transform -rotate-12">👣</span>
        <span className="text-xs text-[#BE3455]">♡</span>
        <span className="transform rotate-12">👣</span>
        <span className="text-xs text-[#BE3455]">♡</span>
        <span className="transform -rotate-12">👣</span>
      </div>
    </section>
  );
}
