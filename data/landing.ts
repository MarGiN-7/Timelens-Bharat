import { NavItem, StepItem, TechFeature, MonumentExhibit, ValuePillar, FooterLinkGroup } from "@/types/landing";

export const NAV_ITEMS: NavItem[] = [
  { label: "Experience", href: "/experience/red-fort" },
  { label: "Monuments", href: "/monuments" },
  { label: "Technology", href: "/#technology" },
  { label: "About", href: "/#why-timelens" },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: "01",
    title: "SCAN THE SPACE",
    description: "Discover the monument and understand its spatial environment through simulated point-cloud telemetry.",
    iconName: "Scan",
    sublabel: "Spatial Anchor Locking",
  },
  {
    number: "02",
    title: "CHOOSE AN ERA",
    description: "Travel between signature historical periods and watch centuries of architecture shift before your eyes.",
    iconName: "Clock",
    sublabel: "Temporal Scrubber",
  },
  {
    number: "03",
    title: "STEP INSIDE HISTORY",
    description: "Explore immersive, procedurally reconstructed architectural environments with historical accuracy.",
    iconName: "Compass",
    sublabel: "3D Monument Explorer",
  },
  {
    number: "04",
    title: "SEE THROUGH DIFFERENT LENSES",
    description: "Experience history through multiple human perspectives — from the Royal Guard to the Foreign Merchant.",
    iconName: "Eye",
    sublabel: "PerspectiveLens System",
  },
];

export const TECH_FEATURES: TechFeature[] = [
  {
    id: "spatial-reconstruction",
    tag: "SPATIAL COMPUTING",
    title: "Spatial Reconstruction",
    description: "Reimagine monuments through immersive spatial environments calibrated to authentic archaeological records.",
    iconName: "Layers",
    specs: ["Real-time WebGL Engine", "Procedural Architectural Geometries", "Era-Adaptive Sky & Lighting"],
  },
  {
    id: "historical-timelines",
    tag: "TEMPORAL ENGINE",
    title: "Historical Timelines",
    description: "Move seamlessly across centuries with anchor preservation, observing structural transformations over 370+ years.",
    iconName: "Hourglass",
    specs: ["Continuous Spatial Anchoring", "Dynamic Material Metamorphosis", "Chronological Context Layers"],
  },
  {
    id: "perspective-lens",
    tag: "NARRATIVE MODES",
    title: "PerspectiveLens",
    description: "See the same history through different human experiences, changing narrative tone, camera view, and highlighted hotspots.",
    iconName: "UserCheck",
    specs: ["Royal Guard Posture", "Ordinary Citizen Realm", "Foreign Merchant Ledger"],
  },
  {
    id: "ai-historian",
    tag: "HERITAGE INTELLIGENCE",
    title: "AI Historian",
    description: "Ask questions and uncover historical context instantly, backed by verified citations from ASI and historical archives.",
    iconName: "Sparkles",
    specs: ["Primary Source Grounding", "Zero-Hallucination Boundaries", "Bilingual English / Hindi Retrieval"],
  },
];

export const FEATURED_RED_FORT: MonumentExhibit = {
  id: "red-fort",
  name: "Red Fort",
  indigenousName: "लाल क़िला (Lal Qila)",
  location: "Old Delhi, India",
  status: "Primary Prototype Monument",
  classification: "Mughal Empire • UNESCO World Heritage Site",
  architect: "Ustad Ahmad Lahori (1638–1648 CE)",
  commissioned: "Emperor Shah Jahan",
  summary: "Commissioned as the ceremonial citadel of Shahjahanabad, the Red Fort stands as the architectural zenith of Mughal spatial planning, fusing Persian, Timurid, and Hindu structural idioms.",
  eras: [
    {
      year: "1650 CE",
      eraName: "Mughal Imperial Zenith",
      tagline: "The Golden Age of Shahjahanabad",
      details: "Vibrant red sandstone ramparts, flowing canals of the Nahar-i-Bihisht ('Stream of Paradise'), and the imperial court of Shah Jahan in full ceremonial splendor.",
    },
    {
      year: "1857 CE",
      eraName: "The Crucible of 1857",
      tagline: "First War of Independence",
      details: "A pivotal nexus in Indian history. The citadel under Bahadur Shah Zafar during the 1857 uprising, transformed into defensive battlements and military garrison quarters.",
    },
    {
      year: "Present Day",
      eraName: "Living Heritage of Bharat",
      tagline: "Symbol of Sovereign India",
      details: "A protected UNESCO World Heritage Site and the sovereign podium from which the Prime Minister addresses the nation every Independence Day from the Lahori Gate ramparts.",
    },
  ],
};

export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: "IMMERSIVE",
    headline: "Don't just read history. Walk through it.",
    description: "Step beyond static glass museum cases into 3D spatial environments engineered to recreate the sights, geometry, and atmospheric resonance of bygone centuries.",
    iconName: "Move3d",
  },
  {
    title: "MULTI-PERSPECTIVE",
    headline: "Understand history through different human experiences.",
    description: "Move past monolithic narratives. Witness historical spaces through the watchful eyes of a palace guard, the daily hustle of a town citizen, or the wonder of a visiting merchant.",
    iconName: "Users",
  },
  {
    title: "ACCESSIBLE",
    headline: "Bring India's cultural heritage to anyone, anywhere.",
    description: "Designed to run directly in modern mobile and desktop browsers with low latency, bilingual vernacular support, and lightweight client-side execution.",
    iconName: "Globe2",
  },
];

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: "Exploration",
    links: [
      { label: "Red Fort (Lal Qila)", href: "/monuments/red-fort" },
      { label: "1650 CE Imperial Era", href: "/experience/red-fort?era=1650" },
      { label: "1857 CE Timeline", href: "/experience/red-fort?era=1857" },
      { label: "Present Day Heritage", href: "/experience/red-fort?era=present" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Monument Archive", href: "/monuments" },
      { label: "PerspectiveLens", href: "/#technology" },
      { label: "Spatial Engine", href: "/experience/red-fort" },
      { label: "Historical Grounding", href: "/#why-timelens" },
    ],
  },
  {
    title: "Initiative",
    links: [
      { label: "Smart India Hackathon", href: "https://www.sih.gov.in/" },
      { label: "ASI Heritage Preservation", href: "https://asi.nic.in/" },
      { label: "Digital India Mission", href: "https://www.digitalindia.gov.in/" },
    ],
  },
];
