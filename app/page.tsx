import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Technology } from "@/components/landing/Technology";
import { FeaturedMonument } from "@/components/landing/FeaturedMonument";
import { WhyTimeLens } from "@/components/landing/WhyTimeLens";
import { FinalCTA } from "@/components/landing/FinalCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#08090A] text-[#F5F1E8] antialiased selection:bg-[#C8A96B] selection:text-[#08090A]">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <HowItWorks />
        <Technology />
        <FeaturedMonument />
        <WhyTimeLens />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
