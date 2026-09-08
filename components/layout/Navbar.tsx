"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Globe2 } from "lucide-react";
import { NAV_ITEMS } from "@/data/landing";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"EN" | "HI">("EN");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#08090A]/85 backdrop-blur-md border-b border-[#C8A96B]/15 shadow-2xl shadow-black/40"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo Mark */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="TimeLens Bharat Home"
          >
            {/* Subtle Circular Lens Icon */}
            <div className="relative w-8 h-8 rounded-full border border-[#C8A96B]/40 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:border-[#C8A96B]">
              <div className="w-4 h-4 rounded-full border border-[#C8A96B]/60 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C8A96B] animate-pulse" />
              </div>
              <div className="absolute inset-0 rounded-full border-t border-transparent border-r border-[#C8A96B]/80 rotate-45" />
            </div>

            {/* Wordmark */}
            <div className="flex flex-col leading-none">
              <span className="font-serif-cinzel text-xs tracking-[0.25em] text-[#F5F1E8] font-semibold">
                TIME<span className="text-[#C8A96B]">LENS</span>
              </span>
              <span className="text-[9px] tracking-[0.35em] text-[#A6A39C] uppercase font-mono mt-0.5">
                BHARAT
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wider uppercase text-[#A6A39C]">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors duration-200 hover:text-[#F5F1E8] relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C8A96B] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden md:flex items-center gap-5">
            {/* Language Selector */}
            <div className="flex items-center gap-1 text-xs font-mono text-[#A6A39C] border border-[#C8A96B]/20 rounded-full px-2.5 py-1 bg-[#151719]/60">
              <Globe2 className="w-3 h-3 text-[#C8A96B]" />
              <button
                type="button"
                onClick={() => setCurrentLang("EN")}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  currentLang === "EN"
                    ? "text-[#F5F1E8] font-semibold"
                    : "text-[#A6A39C] hover:text-[#F5F1E8]"
                }`}
              >
                EN
              </button>
              <span className="text-[#C8A96B]/30">|</span>
              <button
                type="button"
                onClick={() => setCurrentLang("HI")}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  currentLang === "HI"
                    ? "text-[#F5F1E8] font-semibold"
                    : "text-[#A6A39C] hover:text-[#F5F1E8]"
                }`}
              >
                हिंदी
              </button>
            </div>

            {/* Primary CTA */}
            <Link
              href="/monuments"
              className="group relative inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#E0C58A] text-[#08090A] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#C8A96B]/20 hover:brightness-105 active:scale-[0.98]"
            >
              <span>Explore Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setCurrentLang(currentLang === "EN" ? "HI" : "EN")}
              className="text-xs font-mono text-[#C8A96B] px-2 py-1 border border-[#C8A96B]/30 rounded-full bg-[#151719]"
              aria-label="Toggle language"
            >
              {currentLang}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F1E8] hover:text-[#C8A96B] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#0D0E10]/95 backdrop-blur-xl border-b border-[#C8A96B]/20 px-6 py-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium uppercase tracking-wider text-[#F5F1E8] hover:text-[#C8A96B] py-2 border-b border-[#C8A96B]/10 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/monuments"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#E0C58A] text-[#08090A]"
              >
                <span>Explore Monuments</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
