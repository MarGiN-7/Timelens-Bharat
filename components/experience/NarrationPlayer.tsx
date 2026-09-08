"use client";

import React from "react";
import { Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { useSpeechNarration } from "@/hooks/useSpeechNarration";

interface NarrationPlayerProps {
  text: string;
  label?: string;
}

export function NarrationPlayer({
  text,
  label = "Listen to this perspective",
}: NarrationPlayerProps) {
  const { state, isSupported, speak, pause, resume, stop } =
    useSpeechNarration();

  if (!isSupported) {
    return (
      <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#08090A]/60 px-3 py-2 text-[10px] font-mono text-[#A6A39C]">
        <VolumeX className="h-3.5 w-3.5" />
        Narration is unavailable in this browser.
      </div>
    );
  }

  const isPlaying = state === "playing";
  const isPaused = state === "paused";
  const status = isPlaying
    ? "Narrating..."
    : isPaused
      ? "Paused"
      : "Ready to narrate";

  return (
    <div className="rounded-2xl border border-[#C8A96B]/20 bg-[#08090A]/70 p-3.5">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C8A96B]/30 bg-[#151719]">
          <Volume2 className={`h-3.5 w-3.5 ${isPlaying ? "animate-pulse text-[#E0C58A]" : "text-[#C8A96B]"}`} />
        </div>
        <div>
          <p className="text-[10px] font-mono uppercase tracking-wider text-[#C8A96B]">
            Living Narration
          </p>
          <p className="text-[10px] text-[#A6A39C]">{status}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {isPlaying ? (
          <button
            type="button"
            onClick={pause}
            className="inline-flex items-center gap-2 rounded-lg bg-[#C8A96B] px-3 py-2 text-[10px] font-mono font-semibold uppercase tracking-wide text-[#08090A] transition hover:bg-[#E0C58A]"
          >
            <Pause className="h-3.5 w-3.5" />
            Pause
          </button>
        ) : (
          <button
            type="button"
            onClick={() => (isPaused ? resume() : speak(text))}
            className="inline-flex items-center gap-2 rounded-lg bg-[#C8A96B] px-3 py-2 text-[10px] font-mono font-semibold uppercase tracking-wide text-[#08090A] transition hover:bg-[#E0C58A]"
          >
            <Play className="h-3.5 w-3.5" />
            {isPaused ? "Resume" : "Play"}
          </button>
        )}

        {(isPlaying || isPaused) && (
          <button
            type="button"
            onClick={stop}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#151719] px-3 py-2 text-[10px] font-mono uppercase tracking-wide text-[#A6A39C] transition hover:border-[#C8A96B]/30 hover:text-[#F5F1E8]"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Stop
          </button>
        )}

        <span className="text-[9px] text-[#A6A39C]/70">{label}</span>
      </div>
    </div>
  );
}
