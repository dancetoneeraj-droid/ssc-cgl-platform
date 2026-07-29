import type { LectureContent } from "./types";
import { PLACEHOLDER_PDF, PLACEHOLDER_MINDMAP } from "./gk-catalog";

const PLACEHOLDER_VIDEO = "https://www.youtube.com/watch?v=ScMzIvxBSi4";

export type PyqYear = "2025" | "2024" | "2023" | "2026";

export type PyqYearMeta = {
  slug: PyqYear;
  title: string;
  description: string;
  /** When false, the year hub shows "Coming soon" instead of lectures. */
  available: boolean;
};

export const PYQ_YEARS: PyqYearMeta[] = [
  {
    slug: "2025",
    title: "SSC CGL 2025",
    description: "Previous year question walkthroughs — add your lecture videos here.",
    available: true,
  },
  {
    slug: "2024",
    title: "SSC CGL 2024",
    description: "2024 PYQ series — you can add lectures when ready.",
    available: false,
  },
  {
    slug: "2023",
    title: "SSC CGL 2023",
    description: "2023 PYQ series — you can add lectures when ready.",
    available: false,
  },
  {
    slug: "2026",
    title: "SSC CGL 2026",
    description: "2026 PYQ series — placeholder for future content.",
    available: false,
  },
];

function pyqLecture(id: string, title: string, summary?: string): LectureContent {
  return {
    id,
    title,
    summary,
    youtubeUrl: PLACEHOLDER_VIDEO,
    pdfUrl: PLACEHOLDER_PDF,
    mindMapUrl: PLACEHOLDER_MINDMAP,
  };
}

/** Placeholder lectures for 2025 — replace youtubeUrl, pdfUrl, etc. as you publish. */
const pyq2025Lectures: LectureContent[] = [
  pyqLecture(
    "pyq-2025-intro",
    "2025 PYQ — Introduction & exam pattern",
    "How to use this PYQ bank and what to expect from each session.",
  ),
  pyqLecture(
    "pyq-2025-set-1",
    "2025 PYQ — Set 1 (General Awareness)",
    "Placeholder — add your first full PYQ video set here.",
  ),
  pyqLecture(
    "pyq-2025-set-2",
    "2025 PYQ — Set 2",
    "Placeholder — second PYQ video; requires PYQ access after the free first lecture.",
  ),
  pyqLecture(
    "pyq-2025-set-3",
    "2025 PYQ — Set 3",
    "Placeholder — add more 2025 PYQ videos as you publish them.",
  ),
];

const pyqByYear: Partial<Record<PyqYear, LectureContent[]>> = {
  "2025": pyq2025Lectures,
};

export function getPyqYearMeta(year: string): PyqYearMeta | undefined {
  return PYQ_YEARS.find((y) => y.slug === year);
}

export function getPyqLectureList(year: PyqYear): LectureContent[] {
  return pyqByYear[year] ?? [];
}

export function findPyqLecture(year: PyqYear, lectureId: string): LectureContent | undefined {
  return getPyqLectureList(year).find((l) => l.id === lectureId);
}

export function listPyqLectureStaticParams(): { year: string; id: string }[] {
  const params: { year: string; id: string }[] = [];
  for (const meta of PYQ_YEARS) {
    if (!meta.available) continue;
    for (const lec of getPyqLectureList(meta.slug)) {
      params.push({ year: meta.slug, id: lec.id });
    }
  }
  return params;
}
