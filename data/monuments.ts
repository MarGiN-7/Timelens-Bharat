import { Monument } from "@/types/monument";
import { RED_FORT_DATA } from "./redFort";

export const FEATURED_MONUMENT: Monument = RED_FORT_DATA;

export const COMING_SOON_MONUMENTS: Monument[] = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    indigenousName: "ताज महल",
    location: "Agra, Uttar Pradesh, India",
    region: "Northern Plains",
    badge: "MUGHAL EMPIRE • UNESCO WORLD HERITAGE SITE",
    isFeatured: false,
    status: "coming_soon",
    statusBadge: "ARCHIVE EXPANSION",
    description:
      "The jewel of Muslim art in India and universally admired masterpiece of world heritage. Commissioned by Shah Jahan in memory of Mumtaz Mahal.",
    architecturalOverview:
      "Pure ivory-white Makrana marble mausoleum set in a formal charbagh quadrangle with calligraphic Pietra Dura inlays and minarets engineered with outward tilt.",
    metadata: {
      built: "1631–1648 CE",
      dynasty: "Mughal Empire",
      commissionedBy: "Emperor Shah Jahan",
      architect: "Ustad Ahmad Lahori & Ismail Khan",
      eraPeriod: "High Mughal Era",
      coordinates: "27.1751° N, 78.0421° E",
      elevation: "171 meters above MSL",
      perimeter: "300 x 300 m formal complex",
      material: "Makrana Marble & Semi-precious Stones",
      unescoYear: "1983 Inscription",
    },
  },
  {
    id: "qutub-minar",
    name: "Qutub Minar",
    indigenousName: "क़ुतुब मीनार",
    location: "Mehrauli, New Delhi, India",
    region: "Delhi NCR",
    badge: "DELHI SULTANATE • UNESCO WORLD HERITAGE SITE",
    isFeatured: false,
    status: "coming_soon",
    statusBadge: "ARCHIVE EXPANSION",
    description:
      "A soaring 72.5-meter victory tower and minaret constructed across generations of the Mamluk and Khalji dynasties over the foundations of ancient Lal Kot.",
    architecturalOverview:
      "Fluted red sandstone and white marble storeys decorated with intricate kufic calligraphy, projecting balconies supported by stalactite corbels.",
    metadata: {
      built: "1199–1220 CE",
      dynasty: "Mamluk / Delhi Sultanate",
      commissionedBy: "Qutb-ud-din Aibak & Iltutmish",
      architect: "Various Delhi Sultanate Master Builders",
      eraPeriod: "Early Sultanate Period",
      coordinates: "28.5245° N, 77.1855° E",
      elevation: "235 meters above MSL",
      perimeter: "72.5 m vertical height / 14.3 m base",
      material: "Red Sandstone & White Marble",
      unescoYear: "1993 Inscription",
    },
  },
  {
    id: "konark-sun-temple",
    name: "Konark Sun Temple",
    indigenousName: "कोणार्क सूर्य मंदिर",
    location: "Konark, Puri, Odisha, India",
    region: "Eastern Coast",
    badge: "EASTERN GANGA DYNASTY • UNESCO WORLD HERITAGE SITE",
    isFeatured: false,
    status: "coming_soon",
    statusBadge: "COMING SOON",
    description:
      "A colossal monument conceived as the solar chariot of Surya, complete with twelve pairs of elaborately carved stone wheels drawn by seven galloping horses.",
    architecturalOverview:
      "Kalinga architectural marvel built using Khondalite stone, featuring astronomically precise sundial wheels and sensual friezes of high medieval Orissan sculpture.",
    metadata: {
      built: "c. 1250 CE",
      dynasty: "Eastern Ganga Dynasty",
      commissionedBy: "King Narasimhadeva I",
      architect: "Bisu Maharana & Guild of 1,200 Artisans",
      eraPeriod: "High Kalinga Era",
      coordinates: "19.8876° N, 86.0945° E",
      elevation: "10 meters above MSL (Coastal)",
      perimeter: "261 x 160 m sanctum precinct",
      material: "Khondalite & Chlorite Stone",
      unescoYear: "1984 Inscription",
    },
  },
  {
    id: "hampi",
    name: "Hampi (Vijayanagara)",
    indigenousName: "ಹಂಪಿಯ ಸ್ಮಾರಕಗಳು",
    location: "Ballari District, Karnataka, India",
    region: "Deccan Plateau",
    badge: "VIJAYANAGARA EMPIRE • UNESCO WORLD HERITAGE SITE",
    isFeatured: false,
    status: "coming_soon",
    statusBadge: "COMING SOON",
    description:
      "The fortified imperial capital of the Vijayanagara Empire, described by 16th-century European travelers as one of the wealthiest cities in the world.",
    architecturalOverview:
      "Vast boulder-strewn landscape along the Tungabhadra River housing monolithic stone chariots, musical stone pillared halls, elephant stables, and royal bathhouses.",
    metadata: {
      built: "1336–1565 CE",
      dynasty: "Vijayanagara Empire",
      commissionedBy: "Harihara, Bukka & Krishnadevaraya",
      architect: "Dravidian Guild Architects",
      eraPeriod: "Late Medieval South India",
      coordinates: "15.3350° N, 76.4600° E",
      elevation: "467 meters above MSL",
      perimeter: "Over 4,100 hectares of ruins",
      material: "Granite Stone & Stucco Plaster",
      unescoYear: "1986 Inscription",
    },
  },
];
