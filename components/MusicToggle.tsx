"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { INVITATION_CONFIG } from "@/config/invitation";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isSynthRunningRef = useRef(false);

  // Synthesizer fallback in case MP3 loading fails or is blocked
  const playSynthLullaby = useCallback(() => {
    if (isSynthRunningRef.current) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;
      isSynthRunningRef.current = true;

      const notes: { [key: string]: number } = {
        C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23,
        G4: 392.00, A4: 440.00, B4: 493.88, C5: 523.25,
        D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99,
      };

      const melody = [
        { note: "E5", dur: 0.6 }, { note: "E5", dur: 0.6 }, { note: "G5", dur: 1.2 },
        { note: "E5", dur: 0.6 }, { note: "E5", dur: 0.6 }, { note: "G5", dur: 1.2 },
        { note: "E5", dur: 0.5 }, { note: "G5", dur: 0.5 }, { note: "C5", dur: 1.2 },
        { note: "D5", dur: 0.6 }, { note: "E5", dur: 0.6 }, { note: "F5", dur: 1.0 },
      ];

      let noteIdx = 0;
      const playNext = () => {
        if (!isSynthRunningRef.current || !ctx || ctx.state === "closed") return;
        const current = melody[noteIdx % melody.length];
        const freq = notes[current.note] || 440;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + current.dur * 1.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + current.dur * 1.6);

        noteIdx++;
        setTimeout(playNext, current.dur * 1000);
      };

      playNext();
    } catch {
      // Audio synth unsupported - fail silently
    }
  }, []);

  const stopSynthLullaby = useCallback(() => {
    isSynthRunningRef.current = false;
    if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
  }, []);

  useEffect(() => {
    const audio = new Audio(INVITATION_CONFIG.media.audio);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;
    setIsReady(true);

    return () => {
      audio.pause();
      audio.src = "";
      stopSynthLullaby();
    };
  }, [stopSynthLullaby]);

  const toggleMusic = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopSynthLullaby();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // If MP3 fails, start pleasant Web Audio synth fallback
            playSynthLullaby();
            setIsPlaying(true);
          });
      } else {
        playSynthLullaby();
        setIsPlaying(true);
      }
    }
  };

  if (!isReady) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Mute background music" : "Play gentle background music"}
        className={`group flex items-center gap-2 px-3.5 py-2.5 rounded-full shadow-lg border backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#BE3455]/40 ${
          isPlaying
            ? "bg-[#BE3455] text-white border-[#BE3455] shadow-[#BE3455]/25 scale-105"
            : "bg-white/90 text-[#382B2A] border-[#BE3455]/20 hover:border-[#BE3455]/40 hover:bg-white"
        }`}
      >
        <span className="relative flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 animate-pulse" />
          ) : (
            <VolumeX className="w-4 h-4 opacity-70" />
          )}
        </span>

        <span className="text-xs font-medium tracking-wide hidden sm:inline">
          {isPlaying ? "Music Playing" : "Play Music"}
        </span>

        {isPlaying && (
          <span className="flex items-center gap-0.5">
            <span className="w-0.5 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-0.5 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-0.5 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </span>
        )}

        {!isPlaying && (
          <Music className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
        )}
      </button>
    </div>
  );
}
