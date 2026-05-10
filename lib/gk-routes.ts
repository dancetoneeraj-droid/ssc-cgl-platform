export const HISTORY_PERIODS = [
  {
    slug: "ancient",
    title: "Ancient History",
    description: "Indus valley, Vedic age, kingdoms, and early India.",
  },
  {
    slug: "medieval",
    title: "Medieval History",
    description: "Delhi Sultanate, Mughals, regional powers, and society.",
  },
  {
    slug: "modern",
    title: "Modern History",
    description: "Colonial India, freedom struggle, and national movement.",
  },
  {
    slug: "post-independence",
    title: "Post Independence",
    description: "India after 1947 — polity, economy, and social change.",
  },
  {
    slug: "art-culture",
    title: "Art & Culture",
    description: "Architecture, literature, music, and heritage for exams.",
  },
] as const;

export type HistorySlug = (typeof HISTORY_PERIODS)[number]["slug"];

export const GEOGRAPHY_TOPICS = [
  {
    slug: "climatology",
    title: "Climatology",
    description: "Climate zones, pressure belts, and weather patterns.",
  },
  {
    slug: "oceanography",
    title: "Oceanography",
    description: "Oceans, currents, tides, and marine resources.",
  },
  {
    slug: "geomorphology",
    title: "Geomorphology",
    description: "Landforms, tectonics, weathering, and erosion.",
  },
  {
    slug: "human-geography",
    title: "Human Geography",
    description: "Population, settlements, economic activities, and maps.",
  },
  {
    slug: "indian-geography",
    title: "Indian Geography",
    description: "Physiography, rivers, soils, and regional geography of India.",
  },
] as const;

export type GeographySlug = (typeof GEOGRAPHY_TOPICS)[number]["slug"];

export function getHistoryPeriod(slug: string) {
  return HISTORY_PERIODS.find((p) => p.slug === slug);
}

export function getGeographyTopic(slug: string) {
  return GEOGRAPHY_TOPICS.find((t) => t.slug === slug);
}
