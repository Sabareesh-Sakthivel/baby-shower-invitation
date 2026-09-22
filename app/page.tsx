"use client";

import React, { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import PetalBackground from "@/components/PetalBackground";
import MusicToggle from "@/components/MusicToggle";
import Hero from "@/components/Hero";
import CoupleSection from "@/components/CoupleSection";
import EventDetails from "@/components/EventDetails";
import Countdown from "@/components/Countdown";
import Journey from "@/components/Journey";
import SpecialMessage from "@/components/SpecialMessage";
import LocationSection from "@/components/LocationSection";
import RSVP from "@/components/RSVP";
import CalendarButton from "@/components/CalendarButton";
import Footer from "@/components/Footer";

export default function InvitationPage() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="relative min-h-screen bg-[var(--color-paper)] overflow-x-clip text-[#382B2A]">
      {/* 2.5s Baby Welcome Loading Screen */}
      <LoadingScreen onFinish={() => setLoadingComplete(true)} />

      {/* Floating Petals & Hearts Background */}
      <PetalBackground />

      {/* Floating Audio Controller */}
      <MusicToggle />

      {/* Main Invitation Container */}
      <main
        className={`relative z-10 max-w-2xl mx-auto px-2 sm:px-4 transition-all duration-1000 ${
          loadingComplete ? "opacity-100 translate-y-0" : "opacity-90"
        }`}
      >
        {/* Soft Decorative Border Frame Container */}
        <div className="my-3 sm:my-6 rounded-[2.5rem] sm:rounded-[3.5rem] bg-white/70 backdrop-blur-xs border border-[#BE3455]/15 shadow-2xl p-2 sm:p-6 overflow-hidden">
          {/* Top Delicate Golden Arch Ribbon */}
          <div className="w-full flex justify-center py-2">
            <span className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent rounded-full" />
          </div>

          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Couple Section with Arch Frame & Keepsakes */}
          <CoupleSection />

          {/* 3. Event Details (Date, Time, Venue) */}
          <EventDetails />

          {/* 4. Live Countdown to 25 Sept 2026, 7:00 AM IST */}
          <Countdown />

          {/* 5. Journey: Tiny Feet -> Big Dreams -> Endless Love */}
          <Journey />

          {/* 6. Special Quote / Blessing */}
          <SpecialMessage />

          {/* 7. Venue & Directions */}
          <LocationSection />

          {/* 8. RSVP via WhatsApp */}
          <RSVP />

          {/* 9. Add to Calendar (.ics & Google Calendar) */}
          <CalendarButton />

          {/* 10. Footer & Closing Blessings */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
