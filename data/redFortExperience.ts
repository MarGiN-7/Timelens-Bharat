export type EraId = "1650" | "1857" | "present";

export interface EraVisualConfig {
  id: EraId;
  label: string;
  yearNumber: string;
  subtitle: string;
  tagline: string;
  description: string;
  lighting: {
    sunColor: string;
    sunIntensity: number;
    sunPosition: [number, number, number];
    ambientColor: string;
    ambientIntensity: number;
    fogColor: string;
    fogNear: number;
    fogFar: number;
    skyColor: string;
    groundColor: string;
  };
  materials: {
    sandstonePrimary: string;
    sandstoneSecondary: string;
    marbleAccent: string;
    goldTrim: string;
    waterColor: string;
    waterOpacity: number;
    waterFlowSpeed: number;
    wallWear: number;
  };
  particles: {
    count: number;
    color: string;
    size: number;
    speed: number;
    opacity: number;
  };
  hudTag: string;
}

export interface HotspotData {
  id: string;
  title: string;
  indigenousTitle?: string;
  position: [number, number, number];
  category: "ARCHITECTURE" | "COURT PROTOCOL" | "WATER HYDRAULICS" | "URBAN PLANNING" | "MILITARY DEFENSE";
  eraContext: string;
  shortSummary: string;
  description: string;
  architecturalNotes: string;
  significance: string;
}

export const ERA_CONFIGS: Record<EraId, EraVisualConfig> = {
  "1650": {
    id: "1650",
    label: "1650 CE",
    yearNumber: "1650",
    subtitle: "MUGHAL IMPERIAL ZENITH",
    tagline: "The Golden Age of Shahjahanabad",
    description:
      "Experience the citadel in its pristine ceremonial splendor. Flowing waters of the Nahr-i-Bihisht cool the red sandstone courtyards beneath warm golden afternoon light.",
    lighting: {
      sunColor: "#ffeed6",
      sunIntensity: 2.4,
      sunPosition: [18, 22, 14],
      ambientColor: "#eedcc5",
      ambientIntensity: 0.9,
      fogColor: "#1d140e",
      fogNear: 25,
      fogFar: 85,
      skyColor: "#f6e4cc",
      groundColor: "#221510",
    },
    materials: {
      sandstonePrimary: "#8e3824",
      sandstoneSecondary: "#ad4e35",
      marbleAccent: "#faf6f0",
      goldTrim: "#d4af37",
      waterColor: "#1f6e7c",
      waterOpacity: 0.85,
      waterFlowSpeed: 1.0,
      wallWear: 0.05,
    },
    particles: {
      count: 90,
      color: "#e2caa0",
      size: 0.05,
      speed: 0.35,
      opacity: 0.45,
    },
    hudTag: "IMPERIAL CAPITAL PROTOCOL • ACTIVE",
  },
  "1857": {
    id: "1857",
    label: "1857 CE",
    yearNumber: "1857",
    subtitle: "THE TURNING POINT",
    tagline: "First War of Independence & Citadel Siege",
    description:
      "A weathered, battle-ready fortress shrouded in dramatic atmosphere. Desaturated tones, defensive fortifications, and smoke haze evoke the pivotal conflict.",
    lighting: {
      sunColor: "#d8be9f",
      sunIntensity: 1.4,
      sunPosition: [12, 16, 8],
      ambientColor: "#574a40",
      ambientIntensity: 0.65,
      fogColor: "#181412",
      fogNear: 12,
      fogFar: 55,
      skyColor: "#8c7c70",
      groundColor: "#14100e",
    },
    materials: {
      sandstonePrimary: "#663327",
      sandstoneSecondary: "#774235",
      marbleAccent: "#cbc5be",
      goldTrim: "#8e7845",
      waterColor: "#283f43",
      waterOpacity: 0.6,
      waterFlowSpeed: 0.4,
      wallWear: 0.4,
    },
    particles: {
      count: 140,
      color: "#968375",
      size: 0.07,
      speed: 0.6,
      opacity: 0.6,
    },
    hudTag: "DEFENSIVE CITADEL MATRIX • SIEGE FOOTING",
  },
  present: {
    id: "present",
    label: "PRESENT DAY",
    yearNumber: "2026",
    subtitle: "LIVING HERITAGE",
    tagline: "Protected UNESCO World Heritage Monument",
    description:
      "The protected national monument stewarded by the Archaeological Survey of India (ASI). Crisp daylight showcases carefully conserved sandstone and manicured lawns.",
    lighting: {
      sunColor: "#fffbf5",
      sunIntensity: 2.0,
      sunPosition: [14, 25, 16],
      ambientColor: "#8fa3b8",
      ambientIntensity: 0.85,
      fogColor: "#10161c",
      fogNear: 20,
      fogFar: 95,
      skyColor: "#d6e6f2",
      groundColor: "#1a1917",
    },
    materials: {
      sandstonePrimary: "#823b2b",
      sandstoneSecondary: "#984735",
      marbleAccent: "#ece8df",
      goldTrim: "#c8a96b",
      waterColor: "#246772",
      waterOpacity: 0.8,
      waterFlowSpeed: 0.75,
      wallWear: 0.15,
    },
    particles: {
      count: 45,
      color: "#c8a96b",
      size: 0.04,
      speed: 0.25,
      opacity: 0.35,
    },
    hudTag: "ARCHAEOLOGICAL SURVEY OF INDIA • MONITORED",
  },
};

export const RED_FORT_HOTSPOTS: HotspotData[] = [
  {
    id: "lahori-gate",
    title: "LAHORI GATE",
    indigenousTitle: "लाहौरी दरवाज़ा",
    position: [0, 3.4, 4.2],
    category: "ARCHITECTURE",
    eraContext: "Mughal Imperial & Modern Sovereign Podium",
    shortSummary:
      "The monumental ceremonial entrance to the citadel, oriented west toward Lahore.",
    description:
      "The principal ceremonial entrance to the Red Fort complex, historically serving as a symbolic threshold between the bustling walled city of Shahjahanabad and the imperial palace. Flanked by massive octagonal towers with corbelled battlements and crowned by three miniature domed chhatris.",
    architecturalNotes:
      "Built from massive red sandstone ashlar blocks with cusped Mughal gateway arches reaching 33 meters in total elevation.",
    significance:
      "Site of Prime Ministerial Independence Day address since August 15, 1947, when Jawaharlal Nehru first raised the Indian Tricolor.",
  },
  {
    id: "diwan-i-aam",
    title: "DIWAN-I-AAM",
    indigenousTitle: "दीवान-ए-आम (Public Audience)",
    position: [0, 2.6, -9.5],
    category: "COURT PROTOCOL",
    eraContext: "Shah Jahan Court Administration (1648–1857)",
    shortSummary:
      "The grand hypostyle Hall of Public Audience where the emperor held daily court.",
    description:
      "The ceremonial hall where Emperor Shah Jahan sat on the elevated marble jharokha (throne balcony) to hear petitions from citizens, review the imperial elephant cavalry, and receive foreign emissaries under strict protocol.",
    architecturalNotes:
      "Composed of 27 bays structured by engrailed multi-foil red sandstone arches resting on slender stone columns, housing an exquisite marble throne balcony decorated with Florentine Pietra Dura inlays.",
    significance:
      "Represented the public accountability pillar of Mughal administrative justice (Adl) in Shahjahanabad.",
  },
  {
    id: "nahr-i-bihisht",
    title: "NAHR-I-BIHISHT",
    indigenousTitle: "नहर-ए-बिहिश्त (Stream of Paradise)",
    position: [0, 0.45, -2.5],
    category: "WATER HYDRAULICS",
    eraContext: "Shahjahanabad Hydraulic Engineering (1650)",
    shortSummary:
      "The celestial water channel traversing the royal pavilions.",
    description:
      "An engineering marvel of hydraulic design that tapped the Yamuna River via the Western Yamuna Canal, flowing along a marble aqueduct that interconnected every royal pavilion (Khas Mahal, Rang Mahal, Diwan-i-Khas) to provide natural evaporative cooling.",
    architecturalNotes:
      "Channel carved with shallow lotus pools, rippled marble chutes (chadar), and silver-inlaid fountains engineered to produce musical acoustic echoes.",
    significance:
      "Exemplified the Quranic concept of gardens beneath which rivers flow (Jannat), translating spiritual geometry into functional architecture.",
  },
  {
    id: "imperial-courtyard",
    title: "IMPERIAL COURTYARD",
    indigenousTitle: "शाही चौक (Jilau Khana)",
    position: [5.2, 0.5, -1.0],
    category: "URBAN PLANNING",
    eraContext: "Ceremonial Gathering Precinct",
    shortSummary:
      "The vast open expanse linking public avenues to the palace gates.",
    description:
      "The grand open quadrangle positioned immediately past the vaulted arcade of the Chhatta Chowk. Retainers dismounted their horses here according to court etiquette, awaiting summons into the imperial presence.",
    architecturalNotes:
      "Paved in broad geometric sandstone slabs with subterranean stormwater drainage channels and aligned with solar equinox axes.",
    significance:
      "Served as the staging ground for imperial durbars, military parades, and royal festive processions.",
  },
  {
    id: "defensive-ramparts",
    title: "DEFENSIVE RAMPARTS",
    indigenousTitle: "परकोटा और बुर्ज (Defensive Bastions)",
    position: [-9.5, 4.0, 3.5],
    category: "MILITARY DEFENSE",
    eraContext: "Citadel Fortifications (1638–1857)",
    shortSummary:
      "Soaring octagonal perimeter walls and bastion artillery emplacements.",
    description:
      "Formidable defensive walls measuring 2.41 kilometers in perimeter, ranging from 18 meters along the Yamuna riverfront to 33 meters on the city-facing western flank. Equipped with gun loops, battlements, and dry moats.",
    architecturalNotes:
      "Solid ashlar sandstone casing reinforced with lime surkhi mortar, engineered to withstand heavy medieval artillery bombardment.",
    significance:
      "Withstood prolonged sieges during the 18th century and served as the primary battle battlements during the 1857 uprising.",
  },
];
