"use client";

import React, { useState } from "react";
import { INVITATION_CONFIG } from "@/config/invitation";
import { MessageCircle, Heart, Send, Check } from "lucide-react";
import confetti from "canvas-confetti";

export default function RSVP() {
  const { rsvp, couple } = INVITATION_CONFIG;
  const [copiedStatus, setCopiedStatus] = useState<string | null>(null);

  const getWhatsAppLink = (messageText: string) => {
    const encoded = encodeURIComponent(messageText);
    if (
      rsvp.whatsappNumber &&
      rsvp.whatsappNumber !== "REPLACE_WITH_NUMBER" &&
      rsvp.whatsappNumber.trim() !== ""
    ) {
      const cleanNumber = rsvp.whatsappNumber.replace(/[^0-9]/g, "");
      return `https://wa.me/${cleanNumber}?text=${encoded}`;
    }
    // Generic WhatsApp share that lets user select the recipient contact
    return `https://wa.me/?text=${encoded}`;
  };

  const handleRSVPClick = (type: "accept" | "wishes") => {
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#BE3455", "#FCEBE8", "#CBE5F6", "#D4AF37", "#8EA885"],
      });
    } catch {
      // ignore
    }

    const msg =
      type === "accept" ? rsvp.acceptMessage : rsvp.wishesMessage;
    const link = getWhatsAppLink(msg);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const copyWishes = () => {
    navigator.clipboard.writeText(rsvp.wishesMessage);
    setCopiedStatus("Wishes copied to clipboard!");
    setTimeout(() => setCopiedStatus(null), 3000);
  };

  return (
    <section id="rsvp" className="relative my-12 px-4 sm:px-6 max-w-xl mx-auto w-full">
      <div className="relative organic-card rounded-[2.5rem] p-6 sm:p-8 text-center border border-[#BE3455]/20 bg-gradient-to-b from-white via-[#FCF6F4] to-[#FDF0EC] shadow-xl">
        {/* Floating Heart Icon */}
        <div className="w-12 h-12 mx-auto rounded-full bg-[#FCEBE8] text-[#BE3455] flex items-center justify-center mb-3 shadow-xs">
          <Heart className="w-6 h-6 fill-[#BE3455] animate-pulse-heart" />
        </div>

        <span className="text-xs uppercase tracking-[0.25em] text-[#BE3455] font-semibold">
          RSVP & Blessings
        </span>

        <h2 className="font-serif-cormorant text-3xl sm:text-4xl text-[#382B2A] font-bold mt-1 mb-2">
          Will You Join Us? ❤️
        </h2>

        <p className="font-serif-cormorant italic text-base sm:text-lg text-[#382B2A]/75 max-w-md mx-auto mb-6">
          Your presence and blessings mean everything to us as we welcome our little one.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          {/* Yes, I'll Be There */}
          <button
            onClick={() => handleRSVPClick("accept")}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Yes, I&apos;ll Be There</span>
          </button>

          {/* Send My Wishes */}
          <button
            onClick={() => handleRSVPClick("wishes")}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FDF1EE] text-[#BE3455] border-2 border-[#BE3455]/30 hover:border-[#BE3455] font-medium text-sm shadow-xs hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Send className="w-4 h-4" />
            <span>Send My Wishes</span>
          </button>
        </div>

        {/* Copy option fallback */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col items-center">
          <button
            onClick={copyWishes}
            className="text-[11px] text-gray-500 hover:text-[#BE3455] underline flex items-center gap-1 transition-colors"
          >
            {copiedStatus ? (
              <>
                <Check className="w-3 h-3 text-green-600" />
                <span className="text-green-600 font-medium">{copiedStatus}</span>
              </>
            ) : (
              "Copy ready-to-send blessings message"
            )}
          </button>

          <p className="text-[10px] text-gray-400 mt-2">
            Opens WhatsApp directly to send your confirmation to {couple.names}
          </p>
        </div>
      </div>
    </section>
  );
}
