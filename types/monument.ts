export type EraId = "1650" | "1857" | "present";

export interface HistoricalEra {
  id: EraId;
  yearLabel: string;
  title: string;
  tagline: string;
  description: string;
  historicalContext: string;
  architecturalState: string;
  atmosphere: string;
  keyStructures: string[];
  audioLandscape: string;
  telemetry: {
    year: string;
    dynastyOrAuthority: string;
    monumentStatus: string;
    populationEst: string;
  };
}

export interface MonumentMetadata {
  built: string;
  dynasty: string;
  commissionedBy: string;
  architect: string;
  eraPeriod: string;
  coordinates: string;
  elevation: string;
  perimeter: string;
  material: string;
  unescoYear: string;
}

export interface Monument {
  id: string;
  name: string;
  indigenousName: string;
  location: string;
  region: string;
  badge: string;
  isFeatured: boolean;
  status: "active" | "coming_soon";
  statusBadge: string;
  description: string;
  architecturalOverview: string;
  metadata: MonumentMetadata;
  eras?: HistoricalEra[];
  visualThemes?: {
    primaryColor: string;
    secondaryColor: string;
    accentGlow: string;
  };
}

export interface ExperienceLoadingStage {
  id: string;
  label: string;
  detail: string;
  durationMs: number;
}
