"use client";

import React, { useState } from "react";
import { INVITATION_CONFIG } from "@/config/invitation";
import { Calendar, Download, ExternalLink, Check } from "lucide-react";

export default function CalendarButton() {
  const { couple, event, schedule, venue } = INVITATION_CONFIG;
  const [downloaded, setDownloaded] = useState(false);

  // Time in UTC for RFC-5545 and Google Calendar:
  // 25 Sept 2026, 07:00 AM IST (+05:30) is 01:30 AM UTC
  // 25 Sept 2026, 09:00 AM IST (+05:30) is 03:30 AM UTC
  const startTimeUtc = "20260925T013000Z";
  const endTimeUtc = "20260925T033000Z";

  const eventTitle = `${couple.names} - ${event.title}`;
  const eventDescription = `${event.tagline}. ${event.subtitle} Venue: ${venue.name}, ${venue.locality}. We look forward to celebrating with you!`;
  const eventLocation = venue.fullAddress;

  // Google Calendar link
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventTitle
  )}&dates=${startTimeUtc}/${endTimeUtc}&details=${encodeURIComponent(
    eventDescription
  )}&location=${encodeURIComponent(eventLocation)}`;

  // Download .ics file
  const handleDownloadIcs = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Arun & Kiruthika//Baby Shower Invitation//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:${eventDescription.replace(/\n/g, "\\n")}`,
      `LOCATION:${eventLocation}`,
      `DTSTART:${startTimeUtc}`,
      `DTEND:${endTimeUtc}`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
      `UID:baby-shower-${Date.now()}@arun-kiruthika`,
      "STATUS:CONFIRMED",
      "BEGIN:VALARM",
      "TRIGGER:-PT2H",
      "ACTION:DISPLAY",
      "DESCRIPTION:Reminder: Arun & Kiruthika Baby Shower in 2 hours",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Arun-Kiruthika-Baby-Shower.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section className="relative my-8 px-4 sm:px-6 max-w-xl mx-auto w-full text-center">
      <div className="organic-card rounded-3xl p-6 sm:p-7 border border-[#BE3455]/20 bg-gradient-to-r from-[#FFFBFB] via-[#FEF6F4] to-[#FFFBFB] shadow-md">
        <h3 className="font-serif-cormorant text-2xl font-bold text-[#382B2A] mb-1">
          Save The Auspicious Date 📅
        </h3>
        <p className="text-xs sm:text-sm text-[#382B2A]/70 mb-5">
          {schedule.date} • {schedule.time} IST
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Add to Google Calendar */}
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#BE3455] hover:bg-[#A82B48] text-white text-xs font-semibold tracking-wider uppercase shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Google Calendar</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>

          {/* Download Apple / Outlook .ICS file */}
          <button
            onClick={handleDownloadIcs}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#FDF4F2] text-[#382B2A] border border-[#BE3455]/30 hover:border-[#BE3455] text-xs font-semibold tracking-wider uppercase shadow-xs hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-600">Saved to Calendar!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-[#BE3455]" />
                <span>Apple / Outlook (.ics)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
