import { Monument, HistoricalEra } from "@/types/monument";

export const RED_FORT_ERAS: HistoricalEra[] = [
  {
    id: "1650",
    yearLabel: "1650 CE",
    title: "MUGHAL IMPERIAL ZENITH",
    tagline: "The Golden Age of Shahjahanabad",
    description:
      "Experience Shahjahanabad at the height of Mughal power, with vibrant red sandstone architecture, imperial ceremonies, flowing canals and the court of Shah Jahan.",
    historicalContext:
      "Two years after its formal inauguration, the citadel hums with courtly protocol, Persian poetry, and diplomatic emissaries from the Ottoman Empire and Safavid Persia.",
    architecturalState:
      "Pristine red sandstone ramparts, gilded domes of the Diwan-i-Khas, and fresh chhatris intact before later sieges and British alterations.",
    atmosphere: "Golden dusk over the Yamuna, fragrant rose water fountains, chanting of muezzin, and the rumble of imperial kettle drums (Naqqar Khana).",
    keyStructures: [
      "Diwan-i-Aam (Hall of Public Audience)",
      "Diwan-i-Khas & Peacock Throne",
      "Nahar-i-Bihisht (Stream of Paradise)",
      "Lahori & Delhi Ceremonial Gates",
    ],
    audioLandscape: "Persian classical instruments, fountain cascades, and herald proclamations",
    telemetry: {
      year: "1650 CE",
      dynastyOrAuthority: "Mughal Empire (Shah Jahan)",
      monumentStatus: "Imperial Throne Citadel",
      populationEst: "Approx. 400,000 (Shahjahanabad)",
    },
  },
  {
    id: "1857",
    yearLabel: "1857 CE",
    title: "THE TURNING POINT",
    tagline: "First War of Independence & Siege of Delhi",
    description:
      "Explore the Red Fort during one of the most significant political turning points in Indian history.",
    historicalContext:
      "On May 11, 1857, sepoys from Meerut entered the Red Fort to proclaim the octogenarian poet-emperor Bahadur Shah Zafar as the sovereign leader of India's uprising against the East India Company.",
    architecturalState:
      "Battle-scarred ramparts with artillery emplacements, fortified bastions, and royal halls converted into command stations and defensive shelters.",
    atmosphere: "Ominous monsoonal smoke, smoke-stained battlements, urgent dispatch couriers, and the solemn murmur of the final Mughal court.",
    keyStructures: [
      "Lahori Gate Artillery Barricades",
      "Bahadur Shah Zafar's Zafar Mahal",
      "Diwan-i-Khas War Council Chamber",
      "Salimgarh Bridge Bastion",
    ],
    audioLandscape: "Distant cannon fire, military muster calls, and verses of Zafar's melancholic poetry",
    telemetry: {
      year: "1857 CE",
      dynastyOrAuthority: "Last Mughal Court / Rebel Sepoy Council",
      monumentStatus: "Defensive Stronghold Under Siege",
      populationEst: "Approx. 150,000 (Fortified Walled City)",
    },
  },
  {
    id: "present",
    yearLabel: "PRESENT DAY",
    title: "LIVING HERITAGE",
    tagline: "Symbol of Sovereign Democratic India",
    description:
      "Explore the monument as it exists today and understand its continuing cultural and national significance.",
    historicalContext:
      "A protected national monument stewarded by the Archaeological Survey of India (ASI) and inscribed as a UNESCO World Heritage Site in 2007. Every August 15, the tricolor is unfurled here by the Prime Minister.",
    architecturalState:
      "Archaeologically conserved red sandstone pavilions, colonial-era military barracks, museums of the Freedom Struggle, and landscaped ASI gardens.",
    atmosphere: "Crisp morning breeze, fluttering Indian tricolor from the Lahori Gate ramparts, visitor footsteps, and the hum of modern Chandni Chowk.",
    keyStructures: [
      "Lahori Gate Independence Day Podium",
      "Archaeological Survey of India Conservation Zone",
      "Swatantrata Sangram Sangrahalaya",
      "Restored Stream of Paradise Marble Channels",
    ],
    audioLandscape: "National anthem echoes, tourist whispers, bird calls from heritage gardens",
    telemetry: {
      year: "2026 CE",
      dynastyOrAuthority: "Republic of India (ASI Protected)",
      monumentStatus: "UNESCO World Heritage Site",
      populationEst: "Over 3 Million Annual Visitors",
    },
  },
];

export const RED_FORT_DATA: Monument = {
  id: "red-fort",
  name: "Red Fort",
  indigenousName: "लाल क़िला",
  location: "Old Delhi, India",
  region: "Delhi NCR, Northern India",
  badge: "MUGHAL EMPIRE • UNESCO WORLD HERITAGE SITE",
  isFeatured: true,
  status: "active",
  statusBadge: "PRIMARY PROTOTYPE",
  description:
    "Commissioned as the ceremonial citadel of Shahjahanabad, the Red Fort represents the architectural zenith of Mughal imperial design, blending Persian, Timurid and Indian traditions.",
  architecturalOverview:
    "Constructed between 1638 and 1648 when Emperor Shah Jahan shifted the capital from Agra to Delhi. Featuring massive octagonal plan red sandstone walls soaring up to 33 meters, cusped marble arches, and symmetrical water gardens aligned with celestial axes.",
  metadata: {
    built: "1638–1648 CE",
    dynasty: "Mughal Empire",
    commissionedBy: "Emperor Shah Jahan",
    architect: "Ustad Ahmad Lahori",
    eraPeriod: "Mughal Imperial Period",
    coordinates: "28.6562° N, 77.2410° E",
    elevation: "216 meters above MSL",
    perimeter: "2.41 km defensive enclosure",
    material: "Red Sandstone & Makrana White Marble",
    unescoYear: "2007 Inscription",
  },
  eras: RED_FORT_ERAS,
  visualThemes: {
    primaryColor: "#C8A96B",
    secondaryColor: "#B87352",
    accentGlow: "rgba(200, 169, 107, 0.2)",
  },
};
