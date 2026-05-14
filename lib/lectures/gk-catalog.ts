import { GEOGRAPHY_TOPICS, HISTORY_PERIODS, type GeographySlug, type HistorySlug } from "@/lib/gk-routes";
import type { GkFlatLectureSubject, LectureContent } from "./types";
import { GK_FLAT_LECTURE_SUBJECTS } from "./types";

/** Replace these host URLs when publishing your own assets. */
export const PLACEHOLDER_PDF =
  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
export const PLACEHOLDER_MINDMAP =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example.svg/320px-Example.svg.png";

/** Short HTML5 sample clip — swap for your published lecture when ready. */
const PLACEHOLDER_VIDEO = "https://www.youtube.com/watch?v=ScMzIvxBSi4";

function lecture(
  id: string,
  title: string,
  youtubeUrl: string,
  options?: { pdfUrl?: string; mindMapUrl?: string; summary?: string },
): LectureContent {
  return {
    id,
    title,
    summary: options?.summary,
    youtubeUrl,
    pdfUrl: options?.pdfUrl ?? PLACEHOLDER_PDF,
    mindMapUrl: options?.mindMapUrl ?? PLACEHOLDER_MINDMAP,
  };
}

function triple(context: string): LectureContent[] {
  return [
    lecture(
      "overview-and-pyq-map",
      `${context} — overview & PYQ map`,
      PLACEHOLDER_VIDEO,
      {
        summary: "Syllabus spine, weightage logic, and how examiners frame objective stems.",
      },
    ),
    lecture(
      "core-themes-drill",
      `${context} — core themes drill`,
      PLACEHOLDER_VIDEO,
      { summary: "High-yield facts, traps, and quick elimination heuristics." },
    ),
    lecture(
      "rapid-revision-block",
      `${context} — rapid revision block`,
      PLACEHOLDER_VIDEO,
      { summary: "Compressed recap for same-day reinforcement before mocks." },
    ),
  ];
}

const historyLectures: Record<HistorySlug, LectureContent[]> = {
  ancient: [
    lecture(
      "sources-and-indus",
      "Sources, prehistory & the Indus valley",
      "https://www.youtube.com/watch?v=LfeIv5C4wEE",
      {
        summary: "Archaeology-forward framing with PYQ-aligned recall anchors.",
      },
    ),
    lecture(
      "vedic-age-and-mahajanapadas",
      "Vedic age & Mahājanapadas",
      PLACEHOLDER_VIDEO,
      {
        summary: "Polity–religion interface, texts, and territorial consolidation.",
      },
    ),
    lecture(
      "mauryan-and-post-mauryan",
      "Mauryan & post-Mauryan polities",
      PLACEHOLDER_VIDEO,
      {
        summary: "Administration, economy, art — objective hotspots condensed.",
      },
    ),
  ],
  medieval: triple("Medieval History"),
  modern: triple("Modern History"),
  "post-independence": triple("Post Independence India"),
  "art-culture": triple("Art & Culture"),
};

const geographyLectures: Record<GeographySlug, LectureContent[]> = {
  climatology: triple("Climatology"),
  oceanography: triple("Oceanography"),
  geomorphology: triple("Geomorphology"),
  "human-geography": triple("Human Geography"),
  "indian-geography": triple("Indian Geography"),
};

const flatLectures: Record<GkFlatLectureSubject, LectureContent[]> = {
  polity: [
    lecture(
      "constitutional-basics",
      "Lecture 1 (Historical background of Indian Constitution)",
      "https://www.youtube.com/watch?v=-5TkrT-Ecs8",
      {
        summary: "Road to 1950 — Acts, commissions, and debates that shaped the framing context.",
        pdfUrl:
          "https://drive.google.com/file/d/1c6Yx2CZ7K4oXk05fXn8bhsQOI6ZM2D-I/view?usp=drive_link",
        mindMapUrl:
          "https://drive.google.com/file/d/1BNAkJyKAEqQB-XfINQeYHlqGUaQtILzp/view?usp=drive_link",
      },
    ),
    lecture(
      "union-executive-hotspots",
      "Lecture 2 (Union executive — hotspots)",
      "https://youtu.be/PmX9ONwZ-Og?si=UamsrW45LHycw_aJ",
      {
        summary: "President, Council of Ministers, PM — how stems repeat in exams.",
        pdfUrl:
          "https://drive.google.com/file/d/19tnD0pmxiTxUFPAdM93PVv3t-9nARvPf/view?usp=drive_link",
        mindMapUrl:
          "https://drive.google.com/file/d/1rMC_QzS2_o4PjqC2TW25ZCx__GSVmRB0/view?usp=drive_link",
      },
    ),
    lecture(
      "judiciary-and-bodies",
      "Judiciary & constitutional bodies",
      PLACEHOLDER_VIDEO,
      { summary: "Courts, tribunals, commissions — one-mark recall with trap alerts." },
    ),
  ],
  economy: triple("Indian Economy"),
  science: triple("General Science"),
  environment: triple("Environment & ecology"),
  "static-gk": triple("Static GK"),
  "current-affairs": triple("Current Affairs"),
};

export function getHistoryLectureList(period: HistorySlug): LectureContent[] {
  return historyLectures[period] ?? [];
}

export function getGeographyLectureList(topic: GeographySlug): LectureContent[] {
  return geographyLectures[topic] ?? [];
}

export function getFlatGkLectureList(subject: GkFlatLectureSubject): LectureContent[] {
  return flatLectures[subject] ?? [];
}

export function findHistoryLecture(period: HistorySlug, lectureId: string): LectureContent | undefined {
  return historyLectures[period]?.find((l) => l.id === lectureId);
}

export function findGeographyLecture(topic: GeographySlug, lectureId: string): LectureContent | undefined {
  return geographyLectures[topic]?.find((l) => l.id === lectureId);
}

export function findFlatGkLecture(subject: GkFlatLectureSubject, lectureId: string): LectureContent | undefined {
  return flatLectures[subject]?.find((l) => l.id === lectureId);
}

export function listAllGkLectureStaticParams(): { slug: string[] }[] {
  const out: { slug: string[] }[] = [];

  for (const p of HISTORY_PERIODS) {
    for (const lec of historyLectures[p.slug]) {
      out.push({ slug: ["history", p.slug, lec.id] });
    }
  }
  for (const t of GEOGRAPHY_TOPICS) {
    for (const lec of geographyLectures[t.slug]) {
      out.push({ slug: ["geography", t.slug, lec.id] });
    }
  }
  for (const subject of GK_FLAT_LECTURE_SUBJECTS) {
    for (const lec of flatLectures[subject]) {
      out.push({ slug: [subject, lec.id] });
    }
  }

  return out;
}

export function isGkFlatLectureSubject(s: string): s is GkFlatLectureSubject {
  return (GK_FLAT_LECTURE_SUBJECTS as readonly string[]).includes(s);
}
