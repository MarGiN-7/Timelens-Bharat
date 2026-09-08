import React from "react";
import Link from "next/link";
import { FOOTER_LINKS } from "@/data/landing";

export function Footer() {
  return (
    <footer className="relative bg-[#08090A] border-t border-[#C8A96B]/15 text-[#A6A39C] pt-16 pb-12 overflow-hidden">
      {/* Background architectural ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-[#C8A96B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-14 border-b border-[#C8A96B]/10">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full border border-[#C8A96B]/60 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#C8A96B]" />
              </div>
              <span className="font-serif-cinzel text-sm font-semibold tracking-[0.25em] text-[#F5F1E8]">
                TIME<span className="text-[#C8A96B]">LENS</span> BHARAT
              </span>
            </div>
            <p className="text-xs text-[#A6A39C] leading-relaxed max-w-sm">
              AI-powered historical spatial discovery platform. Reimagining India&apos;s monuments
              across centuries through spatial computing, multi-perspective narratives, and verified historical intelligence.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A96B]/20 bg-[#151719] text-[10px] uppercase font-mono tracking-wider text-[#C8A96B]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Built for Smart India Hackathon
            </div>
          </div>

          {/* Nav Links Columns */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title} className="space-y-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#F5F1E8] font-semibold">
                {group.title}
              </p>
              <ul className="space-y-2 text-xs">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#F5F1E8] transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="hover:text-[#F5F1E8] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#A6A39C]">
          <p>© 2026 TimeLens Bharat. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Preserving Indian Heritage via Spatial AI</span>
            <span className="text-[#C8A96B]/30">•</span>
            <span className="text-[#C8A96B]">Lal Qila Prototype</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
