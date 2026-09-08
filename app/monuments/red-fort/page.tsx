"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EraSelector } from "@/components/monument/EraSelector";
import { MonumentMetadata } from "@/components/monument/MonumentMetadata";
import { RED_FORT_DATA, RED_FORT_ERAS } from "@/data/redFort";
import { EraId } from "@/types/monument";
import { ArrowRight, ArrowLeft, Award, MapPin } from "lucide-react";

export default function RedFortHubPage() {
  const [selectedEraId, setSelectedEraId] = useState<EraId>("1650");
  const activeEra = RED_FORT_ERAS.find((e) => e.id === selectedEraId) || RED_FORT_ERAS[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#08090A] text-[#F5F1E8] antialiased selection:bg-[#C8A96B] selection:text-[#08090A]">
      <Navbar />

      <main className="flex-1 w-full pt-32 pb-24 px-6 sm:px-8">
        {/* Architectural Background Grid & Ambient Glows */}
        <div className="fixed inset-0 bg-spatial-grid opacity-25 pointer-events-none" />
        <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#B87352]/10 via-[#C8A96B]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-16">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#A6A39C]">
            <Link
              href="/monuments"
              className="hover:text-[#F5F1E8] transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span>MONUMENTS ARCHIVE</span>
            </Link>
            <span className="text-[#C8A96B]/30">/</span>
            <span className="text-[#E0C58A] font-semibold uppercase">RED FORT EXPERIENCE HUB</span>
          </nav>

          {/* Exhibition Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Monument Heading, Badges, & Core Narrative */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C8A96B]/40 bg-[#151719] text-[10px] sm:text-[11px] font-mono tracking-wider text-[#E0C58A] uppercase">
                  <Award className="w-3 h-3 text-[#C8A96B]" />
                  {RED_FORT_DATA.badge}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-[#08090A] text-[10px] font-mono tracking-wider text-[#A6A39C]">
                  <MapPin className="w-3 h-3 text-[#C8A96B]" />
                  {RED_FORT_DATA.location}
                </span>
              </div>

              {/* Title & Indigenous Name */}
              <div>
                <h1 className="font-serif-cinzel text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F1E8] leading-none">
                  {RED_FORT_DATA.name.toUpperCase()}
                </h1>
                <p className="font-serif-cinzel text-2xl sm:text-3xl text-[#C8A96B] mt-2 italic">
                  {RED_FORT_DATA.indigenousName}
                </p>
              </div>

              {/* Concise Factual Historical Description */}
              <p className="text-base sm:text-lg text-[#A6A39C] leading-relaxed font-normal max-w-2xl">
                {RED_FORT_DATA.description}
              </p>

              {/* Information Panel: Architect & Commissioned By */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl border border-[#C8A96B]/25 bg-[#151719]/80 backdrop-blur-sm">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A96B] block mb-1">
                    ARCHITECT
                  </span>
                  <p className="font-serif-cinzel text-base sm:text-lg font-bold text-[#F5F1E8]">
                    {RED_FORT_DATA.metadata.architect}
                  </p>
                  <p className="text-[11px] font-mono text-[#A6A39C] mt-0.5">
                    ({RED_FORT_DATA.metadata.built})
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A96B] block mb-1">
                    COMMISSIONED BY
                  </span>
                  <p className="font-serif-cinzel text-base sm:text-lg font-bold text-[#F5F1E8]">
                    {RED_FORT_DATA.metadata.commissionedBy}
                  </p>
                  <p className="text-[11px] font-mono text-[#A6A39C] mt-0.5">
                    5th Mughal Emperor (Shahjahanabad Capital)
                  </p>
                </div>
              </div>

              {/* Additional Architectural Context */}
              <p className="text-xs sm:text-sm text-[#A6A39C]/90 leading-relaxed font-sans pt-2">
                {RED_FORT_DATA.architecturalOverview}
              </p>
            </div>

            {/* Right Column: Interactive Visual Frame & Quick Launch */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-md rounded-3xl border border-[#C8A96B]/30 bg-gradient-to-b from-[#151719]/90 via-[#0D0E10] to-[#08090A] p-7 shadow-2xl shadow-black/80 overflow-hidden">
                <div className="absolute inset-0 bg-spatial-grid opacity-20 pointer-events-none" />

                {/* Card Top Label */}
                <div className="flex items-center justify-between border-b border-[#C8A96B]/15 pb-3 mb-6 text-[10px] font-mono">
                  <span className="text-[#C8A96B] uppercase tracking-wider">
                    SPATIAL ENVIRONMENT MATRIX
                  </span>
                  <span className="text-[#A6A39C]">LAL QILA #01</span>
                </div>

                {/* Spatial Silhouette Artwork */}
                <div className="relative flex flex-col items-center justify-center py-6">
                  <div className="w-56 h-56 rounded-full border border-dashed border-[#C8A96B]/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border border-[#C8A96B]/10 animate-pulse" />
                    
                    {/* Sandstone Gate Vector */}
                    <svg
                      viewBox="0 0 200 200"
                      className="w-40 h-40 drop-shadow-[0_10px_25px_rgba(200,169,107,0.3)]"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 190 H180 V120 H150 V135 H120 V110 H80 V135 H50 V120 H20 V190 Z"
                        fill="#6E2C1E"
                        fillOpacity="0.9"
                        stroke="#C8A96B"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M75 190 V140 C75 125, 87 115, 100 110 C113 115, 125 125, 125 140 V190 Z"
                        fill="#08090A"
                        stroke="#E0C58A"
                        strokeWidth="1.8"
                      />
                      {/* Chhatri finials */}
                      <path d="M26 95 Q39 80 52 95 Z" fill="#C8A96B" />
                      <rect x="30" y="95" width="2" height="12" fill="#C8A96B" />
                      <rect x="46" y="95" width="2" height="12" fill="#C8A96B" />
                      <path d="M144 95 Q157 80 170 95 Z" fill="#C8A96B" />
                      <rect x="148" y="95" width="2" height="12" fill="#C8A96B" />
                      <rect x="164" y="95" width="2" height="12" fill="#C8A96B" />
                      {/* Center finial */}
                      <path d="M88 98 Q100 82 112 98 Z" fill="#E0C58A" />
                      <line x1="100" y1="82" x2="100" y2="72" stroke="#E0C58A" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Selected Era Real-Time Preview Badge */}
                <div className="p-4 rounded-xl border border-[#C8A96B]/20 bg-[#08090A]/90 text-center mb-6">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#A6A39C] block mb-1">
                    TARGET RECONSTRUCTION ERA
                  </span>
                  <span className="font-serif-cinzel text-lg sm:text-xl font-bold text-[#E0C58A] block">
                    {activeEra.yearLabel}
                  </span>
                  <span className="text-[10px] font-mono text-[#C8A96B] uppercase tracking-wider block">
                    {activeEra.title}
                  </span>
                </div>

                {/* Large CTA Button */}
                <Link
                  href={`/experience/red-fort?era=${selectedEraId}`}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#E0C58A] text-[#08090A] text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-[#C8A96B]/30 hover:brightness-105 active:scale-[0.98]"
                >
                  <span>EXPLORE RED FORT 3D EXPERIENCE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Historical Era Selector Section */}
          <section aria-labelledby="era-selector-heading" className="pt-8 border-t border-[#C8A96B]/15">
            <div className="max-w-2xl mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8A96B] block mb-2">
                TEMPORAL NAVIGATION
              </span>
              <h2
                id="era-selector-heading"
                className="font-serif-cinzel text-2xl sm:text-4xl font-bold text-[#F5F1E8] tracking-tight"
              >
                Experience Across Three Centuries
              </h2>
              <p className="text-sm text-[#A6A39C] mt-2">
                Select an era to calibrate the architectural reconstruction, atmospheric soundscape, and historical lenses.
              </p>
            </div>

            <EraSelector
              eras={RED_FORT_ERAS}
              selectedEraId={selectedEraId}
              onSelectEra={(eraId) => setSelectedEraId(eraId)}
            />
          </section>

          {/* Full Archaeological Metadata Panel */}
          <section aria-labelledby="metadata-heading">
            <div className="mb-6">
              <h3
                id="metadata-heading"
                className="font-serif-cinzel text-lg sm:text-xl font-bold uppercase tracking-wider text-[#F5F1E8]"
              >
                Monument Specification & Registry
              </h3>
            </div>
            <MonumentMetadata metadata={RED_FORT_DATA.metadata} variant="full" />
          </section>

          {/* Bottom Direct CTA */}
          <div className="p-8 sm:p-12 rounded-3xl border border-[#C8A96B]/30 bg-gradient-to-r from-[#151719] via-[#0D0E10] to-[#151719] text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-spatial-grid opacity-20 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E0C58A]">
                READY FOR TEMPORAL IMMERSION
              </span>
              <h2 className="font-serif-cinzel text-3xl sm:text-4xl font-bold text-[#F5F1E8]">
                Step Inside the {activeEra.yearLabel} Citadel
              </h2>
              <p className="text-sm text-[#A6A39C] leading-relaxed">
                Launch the spatial engine calibrated to {activeEra.title.toLowerCase()} and explore through multiple human viewpoints.
              </p>
              <div>
                <Link
                  href={`/experience/red-fort?era=${selectedEraId}`}
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#E0C58A] text-[#08090A] text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-[#C8A96B]/30 hover:scale-105 active:scale-[0.98]"
                >
                  <span>EXPLORE RED FORT 3D EXPERIENCE →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
