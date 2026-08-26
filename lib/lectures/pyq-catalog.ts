import type { LectureContent } from "./types";
import { PLACEHOLDER_PDF } from "./gk-catalog";

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
    description: "Previous year GK questions — 13 to 26 Sept 2025, date & shift wise.",
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

const PYQ_SUMMARY = "GK PYQs with elimination strategy to maximise score.";

function pyqLecture(id: string, title: string, youtubeUrl: string): LectureContent {
  return {
    id,
    title,
    summary: PYQ_SUMMARY,
    youtubeUrl,
    pdfUrl: PLACEHOLDER_PDF,
  };
}

/**
 * SSC CGL 2025 PYQs — chronological order (exam date → shift).
 * Lectures 1–29: playlist PLM90o4VChM6s (13–22 Sept; 13 Sept has Shift 2 & 3 only).
 * Lectures 30–41: playlist PLPwr7VBzR0Ok (23–26 Sept, all shifts).
 */
const pyq2025Lectures: LectureContent[] = [
  pyqLecture(
    "pyq-2025-09-13-shift-2",
    "13 September 2025 · Shift 2",
    "https://www.youtube.com/watch?v=CwJ7Gw3Z4fU",
  ),
  pyqLecture(
    "pyq-2025-09-13-shift-3",
    "13 September 2025 · Shift 3",
    "https://www.youtube.com/watch?v=jSJTZocWudY",
  ),
  pyqLecture(
    "pyq-2025-09-14-shift-1",
    "14 September 2025 · Shift 1",
    "https://www.youtube.com/watch?v=eSpHfDWyItU",
  ),
  pyqLecture(
    "pyq-2025-09-14-shift-2",
    "14 September 2025 · Shift 2",
    "https://www.youtube.com/watch?v=Q7rajmWlcUo",
  ),
  pyqLecture(
    "pyq-2025-09-14-shift-3",
    "14 September 2025 · Shift 3",
    "https://www.youtube.com/watch?v=UY70__u_1-8",
  ),
  pyqLecture(
    "pyq-2025-09-15-shift-1",
    "15 September 2025 · Shift 1",
    "https://www.youtube.com/watch?v=M-T6aA78Osk",
  ),
  pyqLecture(
    "pyq-2025-09-15-shift-2",
    "15 September 2025 · Shift 2",
    "https://www.youtube.com/watch?v=veXqElV221k",
  ),
  pyqLecture(
    "pyq-2025-09-15-shift-3",
    "15 September 2025 · Shift 3",
    "https://www.youtube.com/watch?v=t0QA4slCeNM",
  ),
  pyqLecture(
    "pyq-2025-09-16-shift-1",
    "16 September 2025 · Shift 1",
    "https://www.youtube.com/watch?v=kkNlFlhX1-o",
  ),
  pyqLecture(
    "pyq-2025-09-16-shift-2",
    "16 September 2025 · Shift 2",
    "https://www.youtube.com/watch?v=Ck-OAFibfDo",
  ),
  pyqLecture(
    "pyq-2025-09-16-shift-3",
    "16 September 2025 · Shift 3",
    "https://www.youtube.com/watch?v=-rWzwGrsklA",
  ),
  pyqLecture(
    "pyq-2025-09-17-shift-1",
    "17 September 2025 · Shift 1",
    "https://www.youtube.com/watch?v=quzAsgidHFc",
  ),
  pyqLecture(
    "pyq-2025-09-17-shift-2",
    "17 September 2025 · Shift 2",
    "https://www.youtube.com/watch?v=ICHJVWpzhhU",
  ),
  pyqLecture(
    "pyq-2025-09-17-shift-3",
    "17 September 2025 · Shift 3",
    "https://www.youtube.com/watch?v=1JRHy9gbnaA",
  ),
  pyqLecture(
    "pyq-2025-09-18-shift-1",
    "18 September 2025 · Shift 1",
    "https://www.youtube.com/watch?v=IV3NL3jfAMM",
  ),
  pyqLecture(
    "pyq-2025-09-18-shift-2",
    "18 September 2025 · Shift 2",
    "https://www.youtube.com/watch?v=_PDF6Y02QBs",
  ),
  pyqLecture(
    "pyq-2025-09-18-shift-3",
    "18 September 2025 · Shift 3",
    "https://www.youtube.com/watch?v=Ysn6agZmNQk",
  ),
  pyqLecture(
    "pyq-2025-09-19-shift-1",
    "19 September 2025 · Shift 1",
    "https://www.youtube.com/watch?v=gSDSbGwmrTg",
  ),
  pyqLecture(
    "pyq-2025-09-19-shift-2",
    "19 September 2025 · Shift 2",
    "https://www.youtube.com/watch?v=Iq4zsorXWRY",
  ),
  pyqLecture(
    "pyq-2025-09-19-shift-3",
    "19 September 2025 · Shift 3",
    "https://www.youtube.com/watch?v=x2nSFpxbdF4",
  ),
  pyqLecture(
    "pyq-2025-09-20-shift-1",
    "20 September 2025 · Shift 1",
    "https://www.youtube.com/watch?v=vL2yOC8rgyI",
  ),
  pyqLecture(
    "pyq-2025-09-20-shift-2",
    "20 September 2025 · Shift 2",
    "https://www.youtube.com/watch?v=JWtSuc6wmGQ",
  ),
  pyqLecture(
    "pyq-2025-09-20-shift-3",
    "20 September 2025 · Shift 3",
    "https://www.youtube.com/watch?v=ThGJLXSmQb4",
  ),
  pyqLecture(
    "pyq-2025-09-21-shift-1",
    "21 September 2025 · Shift 1",
    "https://www.youtube.com/watch?v=YpdZlcp-TAo",
  ),
  pyqLecture(
    "pyq-2025-09-21-shift-2",
    "21 September 2025 · Shift 2",
    "https://www.youtube.com/watch?v=6amb8WDPx1w",
  ),
  pyqLecture(
    "pyq-2025-09-21-shift-3",
    "21 September 2025 · Shift 3",
    "https://www.youtube.com/watch?v=CYN-ICRuauw",
  ),
  pyqLecture(
    "pyq-2025-09-22-shift-1",
    "22 September 2025 · Shift 1",
    "https://www.youtube.com/watch?v=gPn2USzOlvY",
  ),
  pyqLecture(
    "pyq-2025-09-22-shift-2",
    "22 September 2025 · Shift 2",
    "https://www.youtube.com/watch?v=Z3cOcDNY_TI",
  ),
  pyqLecture(
    "pyq-2025-09-22-shift-3",
    "22 September 2025 · Shift 3",
    "https://www.youtube.com/watch?v=kbz-i5ZLFrQ",
  ),
  // Lectures 30–41 — 23 to 26 Sept (playlist PLPwr7VBzR0Ok)
  pyqLecture(
    "pyq-2025-09-23-shift-1",
    "23 September 2025 · Shift 1",
    "https://www.youtube.com/watch?v=RdcCqazg_4g",
  ),
  pyqLecture(
    "pyq-2025-09-23-shift-2",
    "23 September 2025 · Shift 2",
    "https://www.youtube.com/watch?v=kM5FCAsNNg4",
  ),
  pyqLecture(
    "pyq-2025-09-23-shift-3",
    "23 September 2025 · Shift 3",
    "https://www.youtube.com/watch?v=cuV6cckIShU",
  ),
  pyqLecture(
    "pyq-2025-09-24-shift-1",
    "24 September 2025 · Shift 1",
    "https://www.youtube.com/watch?v=tWwpClPhiHA",
  ),
  pyqLecture(
    "pyq-2025-09-24-shift-2",
    "24 September 2025 · Shift 2",
    "https://www.youtube.com/watch?v=tiQIESLpiR4",
  ),
  pyqLecture(
    "pyq-2025-09-24-shift-3",
    "24 September 2025 · Shift 3",
    "https://www.youtube.com/watch?v=IrFqN85CECU",
  ),
  pyqLecture(
    "pyq-2025-09-25-shift-1",
    "25 September 2025 · Shift 1",
    "https://www.youtube.com/watch?v=4EO2AKKSofU",
  ),
  pyqLecture(
    "pyq-2025-09-25-shift-2",
    "25 September 2025 · Shift 2",
    "https://www.youtube.com/watch?v=rY-mW_idF_8",
  ),
  pyqLecture(
    "pyq-2025-09-25-shift-3",
    "25 September 2025 · Shift 3",
    "https://www.youtube.com/watch?v=QmB9nG948LE",
  ),
  pyqLecture(
    "pyq-2025-09-26-shift-1",
    "26 September 2025 · Shift 1",
    "https://www.youtube.com/watch?v=tdNu2bilDPg",
  ),
  pyqLecture(
    "pyq-2025-09-26-shift-2",
    "26 September 2025 · Shift 2",
    "https://www.youtube.com/watch?v=93lEndoetOc",
  ),
  pyqLecture(
    "pyq-2025-09-26-shift-3",
    "26 September 2025 · Shift 3",
    "https://www.youtube.com/watch?v=jqj3zNgXSNo",
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
