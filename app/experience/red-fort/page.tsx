"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExperienceLoader } from "@/components/experience/ExperienceLoader";
import { ExperienceShell } from "@/components/experience/ExperienceShell";
import { RED_FORT_DATA, RED_FORT_ERAS } from "@/data/redFort";
import { EraId } from "@/types/monument";
import { Loader2 } from "lucide-react";

function RedFortExperienceContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read era from search params or default to "1650"
  const rawEra = searchParams.get("era")?.toLowerCase();
  const activeEraId: EraId =
    rawEra === "1857" || rawEra === "present" || rawEra === "1650"
      ? (rawEra as EraId)
      : "1650";

  const [hasEnteredExperience, setHasEnteredExperience] = useState<boolean>(false);

  const activeEra =
    RED_FORT_ERAS.find((e) => e.id === activeEraId) || RED_FORT_ERAS[0];

  const handleSelectEra = (newEraId: EraId) => {
    // Update URL query parameters cleanly
    router.replace(`/experience/red-fort?era=${newEraId}`, { scroll: false });
  };

  const handleEnterExperience = () => {
    setHasEnteredExperience(true);
  };

  const handleRestartLoader = () => {
    setHasEnteredExperience(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#08090A] text-[#F5F1E8] antialiased selection:bg-[#C8A96B] selection:text-[#08090A]">
      <Navbar />

      <main className="flex-1 w-full pt-28 pb-20 px-4 sm:px-8 flex items-center justify-center">
        {/* Background Spatial Atmosphere */}
        <div className="fixed inset-0 bg-spatial-grid opacity-25 pointer-events-none" />
        <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C8A96B]/8 blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {!hasEnteredExperience ? (
            <ExperienceLoader
              key={activeEra.id}
              monumentName={RED_FORT_DATA.name.toUpperCase()}
              indigenousName={RED_FORT_DATA.indigenousName}
              activeEra={activeEra}
              onEnterExperience={handleEnterExperience}
            />
          ) : (
            <ExperienceShell
              monumentName={RED_FORT_DATA.name.toUpperCase()}
              indigenousName={RED_FORT_DATA.indigenousName}
              activeEra={activeEra}
              availableEras={RED_FORT_ERAS}
              onSelectEra={handleSelectEra}
              onRestartLoader={handleRestartLoader}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function RedFortExperiencePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#08090A] text-[#E0C58A]">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-[#C8A96B]" />
            <span className="text-xs font-mono tracking-widest uppercase text-[#A6A39C]">
              Initializing TimeLens Engine...
            </span>
          </div>
        </div>
      }
    >
      <RedFortExperienceContent />
    </Suspense>
  );
}
