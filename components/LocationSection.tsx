"use client";

import React from "react";
import { INVITATION_CONFIG } from "@/config/invitation";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

export default function LocationSection() {
  const { venue } = INVITATION_CONFIG;

  const handleDirectionsClick = () => {
    let mapsUrl = venue.googleMapsUrl;
    if (
      !mapsUrl ||
      mapsUrl === "REPLACE_WITH_GOOGLE_MAPS_URL" ||
      mapsUrl.trim() === ""
    ) {
      // Reliable Google Maps search query fallback
      mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        venue.fullAddress
      )}`;
    }
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative my-10 px-4 sm:px-6 max-w-xl mx-auto w-full">
      <div className="relative organic-card rounded-[2.5rem] p-6 sm:p-8 text-center border border-[#8EA885]/30 bg-gradient-to-b from-white via-[#F9FBF8] to-[#F1F6F0] shadow-xl overflow-hidden">
        {/* Top Pin Badge */}
        <div className="w-12 h-12 mx-auto rounded-2xl bg-[#EEF5EC] text-[#557B4C] flex items-center justify-center mb-3 shadow-xs">
          <MapPin className="w-6 h-6 animate-bounce" style={{ animationDuration: "2.5s" }} />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] text-[#557B4C] font-semibold">
          Venue & Directions
        </span>

        <h2 className="font-serif-cormorant text-3xl sm:text-4xl text-[#382B2A] font-bold mt-1 mb-1">
          {venue.name}
        </h2>

        <p className="font-serif-cormorant italic text-lg sm:text-xl text-[#382B2A]/80 mb-1">
          {venue.locality}
        </p>

        <p className="text-xs text-gray-500 max-w-xs mx-auto mb-6">
          {venue.fullAddress}
        </p>

        {/* Directions CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleDirectionsClick}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#557B4C] hover:bg-[#46673E] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Navigation className="w-4 h-4 fill-white" />
            <span>Get Directions</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-0.5" />
          </button>
        </div>

        <p className="text-[11px] text-gray-400 mt-4 tracking-wide">
          Tap above to open Google Maps navigation directly on your device
        </p>
      </div>
    </section>
  );
}
