import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MonumentCard } from "@/components/monument/MonumentCard";
import { FEATURED_MONUMENT, COMING_SOON_MONUMENTS } from "@/data/monuments";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Monument Archive | TimeLens Bharat",
  description:
    "Explore India's Living History. Discover heritage monuments reconstructed across time, perspective, and space — featuring the Red Fort (Lal Qila).",
};

export default function MonumentsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#08090A] text-[#F5F1E8] antialiased selection:bg-[#C8A96B] selection:text-[#08090A]">
      <Navbar />

      <main className="flex-1 w-full pt-32 pb-24 px-6 sm:px-8">
        {/* Background Grids and Atmosphere */}
        <div className="fixed inset-0 bg-spatial-grid opacity-25 pointer-events-none" />
        <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#C8A96B]/8 via-[#B87352]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-24">
          {/* Header Section */}
          <div className="max-w-3xl">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C8A96B]/30 bg-[#151719]/80 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#E0C58A] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B] animate-pulse" />
              MONUMENT ARCHIVE
            </div>

            {/* Headline */}
            <h1 className="font-serif-cinzel text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F1E8] leading-[1.1]">
              Explore India&apos;s Living History.
            </h1>

            {/* Subtext */}
            <p className="mt-5 text-base sm:text-lg text-[#A6A39C] leading-relaxed max-w-2xl font-normal">
              Discover monuments reconstructed across time, perspective, and space.
              Step inside authentic spatial environments grounded in verified archaeological datasets.
            </p>
          </div>

          {/* Featured Monument: Red Fort */}
          <section aria-labelledby="featured-monument-heading">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C8A96B]" />
                <h2
                  id="featured-monument-heading"
                  className="font-serif-cinzel text-lg sm:text-xl font-bold uppercase tracking-wider text-[#F5F1E8]"
                >
                  Featured Prototype Monument
                </h2>
              </div>
              <span className="text-[10px] font-mono text-[#A6A39C]">
                PHASE 2 DEPLOYMENT • READY
              </span>
            </div>

            <MonumentCard monument={FEATURED_MONUMENT} variant="featured" />
          </section>

          {/* Future Monuments Section */}
          <section aria-labelledby="future-monuments-heading" className="pt-8 border-t border-[#C8A96B]/15">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A96B] block mb-2">
                  ARCHAEOLOGICAL PIPELINE
                </span>
                <h2
                  id="future-monuments-heading"
                  className="font-serif-cinzel text-2xl sm:text-4xl font-bold text-[#F5F1E8] tracking-tight"
                >
                  COMING TO TIMELENS BHARAT
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#A6A39C] max-w-md font-mono">
                {"// Expanded national heritage corpus slated for Phase 4 LiDAR point-cloud acquisition and multi-temporal reconstruction."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COMING_SOON_MONUMENTS.map((monument) => (
                <MonumentCard key={monument.id} monument={monument} variant="upcoming" />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
