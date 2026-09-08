"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type NarrationState = "idle" | "playing" | "paused" | "unavailable";

interface UseSpeechNarrationReturn {
  state: NarrationState;
  isSupported: boolean;
  speak: (text: string) => void;
  pause: () => void;
  resume: () => void;
  stop: () => void;
}

/**
 * useSpeechNarration — browser-native Web Speech API hook.
 *
 * Uses window.speechSynthesis exclusively. No external API, no backend.
 * Gracefully degrades when speechSynthesis is unavailable (returns
 * isSupported=false and state="unavailable").
 */
export function useSpeechNarration(): UseSpeechNarrationReturn {
  const [state, setState] = useState<NarrationState>("idle");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const isSupported =
    typeof window !== "undefined" && "speechSynthesis" in window;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isSupported) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSupported]);

  // If the page becomes hidden, cancel to avoid zombie speech
  useEffect(() => {
    if (!isSupported) return;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        window.speechSynthesis.cancel();
        setState("idle");
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isSupported]);

  const speak = useCallback(
    (text: string) => {
      if (!isSupported) {
        setState("unavailable");
        return;
      }

      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.88;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      // Prefer a high-quality English voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find(
        (v) =>
          v.lang.startsWith("en") &&
          (v.name.toLowerCase().includes("google") ||
            v.name.toLowerCase().includes("premium") ||
            v.name.toLowerCase().includes("enhanced"))
      );
      if (preferred) utterance.voice = preferred;

      utterance.onstart = () => setState("playing");
      utterance.onpause = () => setState("paused");
      utterance.onresume = () => setState("playing");
      utterance.onend = () => setState("idle");
      utterance.onerror = () => setState("idle");

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setState("playing");
    },
    [isSupported]
  );

  const pause = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.pause();
    setState("paused");
  }, [isSupported]);

  const resume = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.resume();
    setState("playing");
  }, [isSupported]);

  const stop = useCallback(() => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setState("idle");
  }, [isSupported]);

  return {
    state: isSupported ? state : "unavailable",
    isSupported,
    speak,
    pause,
    resume,
    stop,
  };
}
