"use client";

import React from "react";
import { Crown, Flame, ScanLine } from "lucide-react";
import { LensId, PERSPECTIVE_LENSES } from "@/data/livingHistory";

interface PerspectiveLensSelectorProps {
  activeLens: LensId;
  onSelectLens: (lensId: LensId) => void;
  compact?: boolean;
}

const ICONS = {
  crown: Crown,
  flame: Flame,
  scan: ScanLine,
};

export function PerspectiveLensSelector({
  activeLens,
  onSelectLens,
  compact = false,
}: PerspectiveLensSelectorProps) {
  return (
    <div className={compact ? "w-full" : "w-full max-w-2xl"}>
      {!compact && (
        <div className="mb-3 text-center">
          <p className="text-[9px] font-mono uppercase tracking-[0.22em] text-[#C8A96B]">
            Living History PerspectiveLens
          </p>
          <p className="mt-1 text-[10px] text-[#A6A39C]">
            Choose whose perspective guides the story.
          </p>
        </div>
      )}

      <div className="flex items-stretch gap-1 sm:gap-2 rounded-2xl border border-[#C8A96B]/25 bg-[#08090A]/90 p-1.5 backdrop-blur-md shadow-xl">
        {PERSPECTIVE_LENSES.map((lens) => {
          const Icon = ICONS[lens.icon];
          const active = activeLens === lens.id;

          return (
            <button
              key={lens.id}
              type="button"
              onClick={() => onSelectLens(lens.id)}
              aria-pressed={active}
              className={`relative flex min-w-0 flex-1 flex-col items-center justify-center rounded-xl px-2 py-2.5 text-center transition-all duration-300 focus:outline-none ${
                active
                  ? "bg-[#151719] text-[#F5F1E8] shadow-lg ring-1 ring-[#C8A96B]/35"
                  : "text-[#A6A39C] hover:bg-[#151719]/70 hover:text-[#F5F1E8]"
              }`}
            >
              <Icon
                className="mb-1 h-4 w-4"
                style={{ color: active ? lens.accentColor : undefined }}
              />
              <span className="text-[9px] font-mono font-semibold uppercase tracking-wide sm:text-[10px]">
                {lens.shortLabel}
              </span>
              {!compact && (
                <span className="mt-1 hidden text-[8px] leading-tight text-[#A6A39C] lg:block">
                  {lens.persona}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
