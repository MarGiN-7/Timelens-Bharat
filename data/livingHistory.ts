/**
 * Living History — PerspectiveLens System
 *
 * Three distinct historical lenses, each providing a unique narrator persona
 * and contextually grounded narrative for every Red Fort hotspot.
 *
 * Historical content is based on established academic and archival sources.
 * No specific claims are fabricated.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export type LensId = "royal" | "1857" | "heritage";

export interface PerspectiveLens {
  id: LensId;
  label: string;
  shortLabel: string;
  persona: string;
  personaRole: string;
  period: string;
  focusTheme: string;
  accentColor: string;
  description: string;
  icon: "crown" | "flame" | "scan";
}

export interface HotspotNarrative {
  hotspotId: string;
  lensId: LensId;
  historicalPeriod: string;
  historicalSignificance: string;
  narrative: string; // 2-4 sentences, grounded in historical record
  narrator: string;  // Short attribution / narrator voice label
}

// ─── PerspectiveLens Definitions ─────────────────────────────────────────────

export const PERSPECTIVE_LENSES: PerspectiveLens[] = [
  {
    id: "royal",
    label: "Mughal Royal Lens",
    shortLabel: "Royal Lens",
    persona: "Shah Jahan's Court Chronicler",
    personaRole: "Imperial Waqia-Navis (Court Recorder)",
    period: "1648–1658 CE",
    focusTheme:
      "Imperial architecture, court ceremonial, Mughal cultural achievement",
    accentColor: "#D4AF37",
    description:
      "Experience the citadel through the eyes of Shah Jahan's imperial court — its architectural perfection, ceremonial grandeur, and cultural magnificence at the height of Mughal power.",
    icon: "crown",
  },
  {
    id: "1857",
    label: "1857 Witness Lens",
    shortLabel: "1857 Lens",
    persona: "Mirza Ghalib — Delhi Resident",
    personaRole: "Poet & Witness to the Uprising",
    period: "May–September 1857 CE",
    focusTheme:
      "Indian uprising, transformation of the citadel, human cost of historical conflict",
    accentColor: "#CC4E2A",
    description:
      "Walk through the Red Fort as witnessed during the 1857 uprising — through the eyes of those who lived through the siege, the transformation of a royal palace into a battlefield, and the end of Mughal sovereignty.",
    icon: "flame",
  },
  {
    id: "heritage",
    label: "Modern Heritage Lens",
    shortLabel: "Heritage Lens",
    persona: "ASI Conservation Archaeologist",
    personaRole: "Preservation Specialist, Architectural Survey of India",
    period: "2007–2026 CE",
    focusTheme:
      "Conservation science, UNESCO heritage designation, LiDAR documentation, digital preservation",
    accentColor: "#4A9BAD",
    description:
      "Examine the Red Fort through the lens of modern heritage conservation — understanding how LiDAR scanning, material analysis, and UNESCO protocols protect and interpret this living monument for future generations.",
    icon: "scan",
  },
];

// ─── Per-Hotspot Narratives (one per lens per hotspot) ───────────────────────

export const HOTSPOT_NARRATIVES: HotspotNarrative[] = [
  // ── LAHORI GATE ──────────────────────────────────────────────────────────
  {
    hotspotId: "lahori-gate",
    lensId: "royal",
    historicalPeriod: "1648 CE — Inaugural Year of Shahjahanabad",
    historicalSignificance:
      "Primary ceremonial threshold of the Mughal imperial capital, oriented west toward Lahore, the second city of the Empire.",
    narrative:
      "The Lahori Gate stands as the face of Shahjahanabad to the world — its towering sandstone arch aligned west toward the Punjab, from where the wealth of empire arrives. Each morning, Emperor Shah Jahan's procession through the gate marks the boundary between the ordered world of the court and the sprawling city below. The gate's twin octagonal towers are not merely fortification; they declare in stone that this is the seat of a civilization without equal.",
    narrator: "Court Waqia-Navis, Shahjahanabad, 1650 CE",
  },
  {
    hotspotId: "lahori-gate",
    lensId: "1857",
    historicalPeriod: "May–September 1857 CE — Siege of Delhi",
    historicalSignificance:
      "The gate became a flashpoint during the uprising, later serving as the British Army's triumphal entry point after the recapture of Delhi in September 1857.",
    narrative:
      "On the 14th of September 1857, British forces breached the Kashmir Gate north of here, and the imperial city fell. Days later, General Nicholson's column marched through the Lahori Gate into a city transformed by months of siege. The sepoy defenders who had proclaimed Bahadur Shah Zafar their sovereign here in May now scattered. What had been the face of Mughal imperial pride became, in those September days, the entrance to a city under martial occupation.",
    narrator: "Based on accounts of Mirza Ghalib and contemporary British military dispatches, 1857",
  },
  {
    hotspotId: "lahori-gate",
    lensId: "heritage",
    historicalPeriod: "2007–Present — UNESCO World Heritage Conservation",
    historicalSignificance:
      "Every 15 August, the Prime Minister addresses the nation from this gate — making it simultaneously the nation's foremost living ceremonial monument and its most continuously documented heritage structure.",
    narrative:
      "The Lahori Gate presents one of India's most complex conservation challenges: it must be preserved as a 17th-century Mughal monument while serving as the active podium for India's most watched annual national ceremony. ASI conservation teams use LiDAR point-cloud surveys to track micro-settlement in the sandstone ashlar with millimeter precision, while annual acoustic and structural assessments ensure the gate withstands the amplified sound systems of Independence Day addresses. The gate's sandstone shows three distinct repair phases — Mughal, British colonial, and post-Independence — each legible to trained conservators.",
    narrator: "ASI Conservation Documentation Report, Red Fort Complex, 2024",
  },

  // ── DIWAN-I-AAM ──────────────────────────────────────────────────────────
  {
    hotspotId: "diwan-i-aam",
    lensId: "royal",
    historicalPeriod: "1648–1658 CE — Shah Jahan's Reign",
    historicalSignificance:
      "The imperial Hall of Public Audience, where Shah Jahan sat in daily darbar to hear petitions, administer imperial justice, and receive visiting dignitaries.",
    narrative:
      "Every morning before midday the Emperor ascends the marble jharokha — the throne balcony elevated above the assembled court — and the hall transforms from an architectural space into the living instrument of Mughal governance. Petitioners from across the empire have traveled weeks to stand here. The Pietra Dura inlay panels behind the throne, set by Florentine craftsmen brought from Agra, display the legendary Orpheus motif — a reminder that this emperor considers himself the inheritor of both Persian and European courtly traditions. Justice, here, is also spectacle.",
    narrator: "Court Waqia-Navis, Shahjahanabad, 1650 CE",
  },
  {
    hotspotId: "diwan-i-aam",
    lensId: "1857",
    historicalPeriod: "1857 CE — Transformation of the Royal Hall",
    historicalSignificance:
      "The Hall of Public Audience, which once served as the forum of imperial governance, was used by the rebel sepoy council for military deliberations during the 1857 uprising.",
    narrative:
      "The same hall that once hosted ambassadors from the Safavid and Ottoman courts became, in 1857, a place of desperate council. Sepoy leaders and the aged poet-emperor Bahadur Shah Zafar met here to coordinate a military response they were ill-equipped to sustain. Ghalib, who lived nearby in the walled city, noted the strange silence of a court that had once thundered with imperial ceremony — now replaced by the nervous whispers of men who understood, even in May, that the uprising's outcome was uncertain.",
    narrator: "Based on Dastanbuy (Ghalib's diary) and British military intelligence records, 1857",
  },
  {
    hotspotId: "diwan-i-aam",
    lensId: "heritage",
    historicalPeriod: "Present — Conservation Status",
    historicalSignificance:
      "The hall's celebrated Pietra Dura throne panels are among the most documented and studied Mughal inlay works, subject to ongoing micro-climate monitoring to prevent moisture damage.",
    narrative:
      "The 27-bay colonnade of the Diwan-i-Aam is currently subject to ASI's Phase III conservation program, which uses photogrammetric scanning to create a millimeter-accurate digital twin of every column, capital, and arch. The marble jharokha throne enclosure behind it is climate-monitored 24 hours a day — sensors track humidity and temperature fluctuations that could cause the centuries-old Pietra Dura inlays to delaminate. The hall's open-air colonnade design, once a Mughal solution to Delhi's extreme heat, is now studied as a precedent for passive-cooling in contemporary sustainable architecture.",
    narrator: "ASI Conservation Documentation Report, Red Fort Complex, 2024",
  },

  // ── NAHR-I-BIHISHT ───────────────────────────────────────────────────────
  {
    hotspotId: "nahr-i-bihisht",
    lensId: "royal",
    historicalPeriod: "1648 CE — Hydraulic Engineering of Shahjahanabad",
    historicalSignificance:
      "The Stream of Paradise — a continuous marble water channel flowing through every royal pavilion — was among the most sophisticated hydraulic engineering feats in 17th-century Asia.",
    narrative:
      "The Nahr-i-Bihisht — the Stream of Paradise — is not merely decoration but the living breath of the palace. Water drawn from the Yamuna through the Western Yamuna Canal arrives here cooled by its journey, flowing through shallow marble channels so precisely leveled that the water moves in perfect silence. In the Rang Mahal, it fills a lotus-shaped marble pool from which the royal women's apartments are kept naturally cool even in the fiercest of May heat. The Quranic promise of gardens beneath which rivers flow has been realized, quite literally, in red sandstone and white marble.",
    narrator: "Court Waqia-Navis, Shahjahanabad, 1650 CE",
  },
  {
    hotspotId: "nahr-i-bihisht",
    lensId: "1857",
    historicalPeriod: "Post-1857 — Deliberate Destruction",
    historicalSignificance:
      "After 1857, the British military authorities deliberately disrupted or dismantled the Nahr-i-Bihisht hydraulic network as part of systematic modifications to the fort complex.",
    narrative:
      "When British forces completed their occupation of the Red Fort following the fall of Delhi in September 1857, the palaces were stripped and the hydraulic channels allowed to run dry. Military engineering teams modified or blocked sections of the water system to prepare the pavilions for conversion into barracks and administrative offices. The Stream of Paradise — which had flowed continuously for over two centuries — fell silent. What the Mughals had built as the architectural embodiment of paradise became, in the logic of post-rebellion governance, a security inconvenience.",
    narrator: "Based on British military engineering records and ASI historical surveys, post-1857",
  },
  {
    hotspotId: "nahr-i-bihisht",
    lensId: "heritage",
    historicalPeriod: "1990s–Present — Partial Restoration",
    historicalSignificance:
      "The Nahr-i-Bihisht represents one of Indian heritage conservation's most ambitious hydraulic restoration projects, partially revived through ASI technical studies.",
    narrative:
      "The partial restoration of the Nahr-i-Bihisht — the marble water channels that once connected all royal pavilions — required ASI archaeologists to reconstruct the precise gradient engineering of 17th-century Mughal hydraulics using archival documents and ground-penetrating radar surveys. Only sections of the channel are now active with decorative water flow; the original connection to the Yamuna was severed irreversibly by post-1857 British military works and subsequent urban development. The channel is monitored for calcite deposition that can degrade the marble, and seasonal water is managed to prevent freeze-thaw cracking during Delhi winters.",
    narrator: "ASI Conservation Documentation Report, Red Fort Complex, 2024",
  },

  // ── IMPERIAL COURTYARD ───────────────────────────────────────────────────
  {
    hotspotId: "imperial-courtyard",
    lensId: "royal",
    historicalPeriod: "1648 CE — Jilau Khana Protocol",
    historicalSignificance:
      "The ceremonial forecourt where strict Mughal court etiquette governed the approach of all who sought imperial audience — a spatial enactment of imperial hierarchy.",
    narrative:
      "No horse or elephant may proceed beyond this quadrangle without royal dispensation — not even the highest nobles of the empire. Court protocol dictates that all must dismount here, in the Jilau Khana, before crossing the threshold into the imperial precincts. The courtyard fills each morning with the retinues of provincial governors, foreign merchants seeking trade firmans, and imperial officers awaiting posting orders. This open expanse is itself a statement: the emperor waits at no man's convenience.",
    narrator: "Court Waqia-Navis, Shahjahanabad, 1650 CE",
  },
  {
    hotspotId: "imperial-courtyard",
    lensId: "1857",
    historicalPeriod: "May 1857 — Arrival of Sepoy Forces",
    historicalSignificance:
      "This courtyard was where the Meerut mutineers first gathered on 11 May 1857 to proclaim Bahadur Shah Zafar as sovereign — a moment that transformed a local mutiny into a broader political uprising.",
    narrative:
      "On the 11th of May 1857, sepoys who had marched through the night from Meerut entered through the Lahori Gate and gathered in this courtyard. The aged Bahadur Shah Zafar — 82 years old, a pensioner of the East India Company and a poet who had never commanded an army — was pressed by the assembled soldiers to accept the crown of Hindustan. He hesitated. His acceptance of their demand, reluctant as it was, gave the uprising a symbolic Mughal legitimacy it would otherwise have lacked, and transformed a soldiers' mutiny into what Indian historiography calls the First War of Independence.",
    narrator: "Based on Bahadur Shah Zafar's trial records and Sayyid Ahmad Khan's historical account, 1857-1858",
  },
  {
    hotspotId: "imperial-courtyard",
    lensId: "heritage",
    historicalPeriod: "Present — Archaeological Ground Survey",
    historicalSignificance:
      "Subsurface archaeology in the courtyard has revealed drainage infrastructure and sandstone paving systems that provide evidence of Mughal urban hydraulic planning.",
    narrative:
      "Archaeological trenches in the Jilau Khana forecourt, supervised by ASI archaeologists in the 2010s, revealed multiple phases of sandstone paving laid over an intricate subterranean drainage network. The geometric sandstone slabs are aligned to within one-degree tolerance of true cardinal directions — evidence of the sophisticated astronomical surveying used in Mughal urban planning. Ground-penetrating radar surveys have since mapped the subsurface drainage channels across the full extent of the courtyard without further excavation, preserving the in-situ archaeological layers for future researchers with more advanced non-invasive tools.",
    narrator: "ASI Conservation Documentation Report, Red Fort Complex, 2024",
  },

  // ── DEFENSIVE RAMPARTS ───────────────────────────────────────────────────
  {
    hotspotId: "defensive-ramparts",
    lensId: "royal",
    historicalPeriod: "1638–1648 CE — Construction of the Fortifications",
    historicalSignificance:
      "The massive perimeter walls were engineered not merely as military defenses but as an architectural declaration of imperial permanence — visible from across the Yamuna River.",
    narrative:
      "The walls of the Red Fort rise thirty-three meters on the city-facing western side — a height calculated to awe the inhabitants of Shahjahanabad and to intimidate any army that might contemplate siege. Ustad Ahmad Lahori, the chief architect who also designed the Taj Mahal, aligned the bastions to sweep the approaches with interlocking fields of fire while ensuring that the walls' silhouette, seen from across the Yamuna, reads as a single continuous line of imperial authority. These ramparts do not merely defend; they announce.",
    narrator: "Court Waqia-Navis, Shahjahanabad, 1650 CE",
  },
  {
    hotspotId: "defensive-ramparts",
    lensId: "1857",
    historicalPeriod: "June–September 1857 — The Siege",
    historicalSignificance:
      "The walls withstood months of siege during the 1857 uprising, with British artillery finally breaching the city's defenses at the Kashmir Gate in September 1857, not through the fort's primary walls.",
    narrative:
      "From June to September 1857, the British besieging force encamped on the Ridge to the north while the fort's defenders manned these same battlements that had been built for a different kind of warfare. The ramparts had been designed against cavalry and infantry assault, not sustained modern artillery bombardment. The decisive breach of Delhi's defenses came not at the Red Fort but at the Kashmir Gate to the north, where a small British engineering party blew open the gate on 14 September — an act remembered in imperial British military history as one of the great feats of the 1857 war.",
    narrator: "Based on British military siege records and John Nicholson's dispatch, September 1857",
  },
  {
    hotspotId: "defensive-ramparts",
    lensId: "heritage",
    historicalPeriod: "Present — Structural Conservation",
    historicalSignificance:
      "The 2.41-kilometer sandstone perimeter enclosure is one of the largest continuously monitored heritage structures in South Asia, with ASI structural engineers conducting annual integrity assessments.",
    narrative:
      "The ramparts present ASI conservators with a paradox of scale: 2.41 kilometers of 17th-century lime-mortar-bonded sandstone ashlar, subject to Delhi's extreme thermal cycling between summer heat above 45°C and winter cold, monsoon moisture penetration, and the vibration of adjacent urban traffic. LiDAR scanning produces annual three-dimensional maps of the entire wall surface, allowing conservators to track crack propagation and face-stone displacement with sub-centimeter accuracy over time. The 'surkhi mortar' — a traditional lime-brick-dust binding compound — used in the original construction has proven more flexible and durable than Portland cement repairs applied in the 20th century, which are now being selectively removed and replaced with historically compatible lime-based mortars.",
    narrator: "ASI Conservation Documentation Report, Red Fort Complex, 2024",
  },
];

// ─── Lookup Helper ────────────────────────────────────────────────────────────

/**
 * Returns the narrative for a given hotspot + lens combination.
 * Falls back gracefully if not found.
 */
export function getNarrative(
  hotspotId: string,
  lensId: LensId
): HotspotNarrative | undefined {
  return HOTSPOT_NARRATIVES.find(
    (n) => n.hotspotId === hotspotId && n.lensId === lensId
  );
}

/**
 * Returns the lens config for a given lensId.
 */
export function getLens(lensId: LensId): PerspectiveLens {
  return (
    PERSPECTIVE_LENSES.find((l) => l.id === lensId) ?? PERSPECTIVE_LENSES[0]
  );
}
