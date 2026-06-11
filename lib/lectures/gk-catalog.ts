import { GEOGRAPHY_TOPICS, HISTORY_PERIODS, type GeographySlug, type HistorySlug } from "@/lib/gk-routes";
import type { GkFlatLectureSubject, LectureContent, PdfLink } from "./types";
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
  options?: {
    pdfUrl?: string;
    extraPdfUrls?: PdfLink[];
    mindMapUrl?: string;
    summary?: string;
    noMindMap?: boolean;
  },
): LectureContent {
  return {
    id,
    title,
    summary: options?.summary,
    youtubeUrl,
    pdfUrl: options?.pdfUrl ?? PLACEHOLDER_PDF,
    ...(options?.extraPdfUrls?.length ? { extraPdfUrls: options.extraPdfUrls } : {}),
    ...(options?.noMindMap ? {} : { mindMapUrl: options?.mindMapUrl ?? PLACEHOLDER_MINDMAP }),
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
  modern: [
    lecture(
      "timeline-modern-history-1",
      "Lecture 1 — Timeline of Modern History -1",
      "https://youtu.be/Ny7CBDMJ-6M?si=UTDzbBq5xJfIaSLL",
      {
        summary: "Modern Indian history timeline — Part I: colonial era anchors and exam recall.",
        pdfUrl:
          "https://drive.google.com/file/d/1M5UGIC9b6U28JkxtbA25PqSfYJlusI_l/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "timeline-modern-history-2",
      "Lecture 2 — Timeline of Modern History -2",
      "https://youtu.be/PKaq2TV8ePk?si=tx8d8tJUFMEyhwRo",
      {
        summary: "Modern Indian history timeline — Part II: freedom struggle through independence.",
        pdfUrl:
          "https://drive.google.com/file/d/1M5UGIC9b6U28JkxtbA25PqSfYJlusI_l/view?usp=drive_link",
        noMindMap: true,
      },
    ),
  ],
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
      "Lecture 2 — Making of Constitution",
      "https://youtu.be/PmX9ONwZ-Og?si=UamsrW45LHycw_aJ",
      {
        summary: "Framing of the Constitution — constituent assembly, debates, and adoption.",
        pdfUrl:
          "https://drive.google.com/file/d/19tnD0pmxiTxUFPAdM93PVv3t-9nARvPf/view?usp=drive_link",
        mindMapUrl:
          "https://drive.google.com/file/d/1rMC_QzS2_o4PjqC2TW25ZCx__GSVmRB0/view?usp=drive_link",
      },
    ),
    lecture(
      "sources-schedules-preamble-territory-citizenship",
      "Lecture 3 — Source of Constitution, Schedules, Preamble, Union & its Territory and Citizenship",
      "https://youtu.be/XIqed5flY20?si=Ex9d03bbYno-wd5L",
      {
        summary: "Sources, Schedules, Preamble, Union territory, and citizenship — objective hotspots.",
        pdfUrl:
          "https://drive.google.com/file/d/1uvUdf1zjsPHEr9XP9m9_xVXcEXQN_vHl/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "fundamental-rights-part-1",
      "Lecture 4 — Fundamental Right Part -I",
      "https://youtu.be/06Q8U5v79Zg",
      {
        summary: "Fundamental Rights Part I — articles, scope, and exam-oriented recall.",
        pdfUrl:
          "https://drive.google.com/file/d/1IAjm8eWpEsV45i9Mj2lQ4IDJgnx44ETQ/view?usp=drive_link",
        mindMapUrl:
          "https://drive.google.com/file/d/1ngHTCd-xRTcgdoqDgwXe6jJzniEJeknL/view?usp=drive_link",
      },
    ),
    lecture(
      "fundamental-rights-part-2",
      "Lecture 5 — Fundamental Right Part -2",
      "https://youtu.be/U4LuRxNITCo?si=s8aLbrdGkCip91QF",
      {
        summary: "Fundamental Rights Part II — continued articles, exceptions, and exam traps.",
        pdfUrl:
          "https://drive.google.com/file/d/1IAjm8eWpEsV45i9Mj2lQ4IDJgnx44ETQ/view?usp=drive_link",
        mindMapUrl:
          "https://drive.google.com/file/d/1ngHTCd-xRTcgdoqDgwXe6jJzniEJeknL/view?usp=drive_link",
      },
    ),
    lecture(
      "dpsp-and-fundamental-duties",
      "Lecture 6 — DPSP & Fundamental Duties",
      "https://youtu.be/KyiCPCAQCEc?si=6Fyt4YnmT5zGTc8D",
      {
        summary: "Directive Principles of State Policy and Fundamental Duties — articles and exam hotspots.",
        pdfUrl:
          "https://drive.google.com/file/d/1PyZw8b1Git9XA10mlC0iwmKdiVJX-Uvn/view?usp=drive_link",
        mindMapUrl:
          "https://drive.google.com/file/d/1y40o9e1Hwl2t0jJBfYw_28m1h3NOFanZ/view?usp=drive_link",
      },
    ),
    lecture(
      "president-and-vice-president",
      "Lecture 7 — President & Vice President",
      "https://youtu.be/-pzjWD72SbE?si=69koNDSZZK6xFX-Z",
      {
        summary: "President and Vice President — election, powers, tenure, and exam hotspots.",
        pdfUrl:
          "https://drive.google.com/file/d/1ZDk8sbJoqlWDtktDO80wm-ddupjvSheT/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "prime-minister-and-council-of-ministers",
      "Lecture 8 — Prime Minister & Council of Ministers",
      "https://youtu.be/Bb06n-TpMMY?si=-YxMR2Scm398DHQh",
      {
        summary: "Prime Minister, Council of Ministers, and collective responsibility — objective recall.",
        pdfUrl:
          "https://drive.google.com/file/d/1ZDk8sbJoqlWDtktDO80wm-ddupjvSheT/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "parliament",
      "Lecture 9 — Parliament",
      "https://youtube.com/live/8qVE-SCXAfY?feature=share",
      {
        summary: "Parliament — Lok Sabha, Rajya Sabha, sessions, and legislative process for exams.",
        pdfUrl:
          "https://drive.google.com/file/d/1rwEZi4Q3jMpFAAeGScjV5BOGk453P4S_/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "indian-judiciary",
      "Lecture 10 — Indian Judiciary",
      "https://youtu.be/7duLHCORrlk?si=zwv1MfrdsZppdaQ_",
      {
        summary: "Indian Judiciary — Supreme Court, High Courts, and constitutional jurisdiction.",
        pdfUrl:
          "https://drive.google.com/file/d/1unV6k0Dub2dXalFspa0sNXbKPLdSjFFB/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "constitutional-and-statutory-bodies",
      "Lecture 11 — Constitutional Body and Statutory Body",
      "https://www.youtube.com/live/xVO7WG9Rcmc?si=mvtwTqgQribg9fpH",
      {
        summary: "Constitutional and statutory bodies — composition, mandates, and exam recall.",
        pdfUrl:
          "https://drive.google.com/file/d/1Sy4lcoECJOG64wNnJtdmeq8TxoVZxtp5/view?usp=drive_link",
        extraPdfUrls: [
          {
            label: "PDF Notes (Part B)",
            url: "https://drive.google.com/file/d/1jggWQYli2tZkJ-3Q_AnI9ZtDOhDhoz9h/view?usp=drive_link",
          },
        ],
        noMindMap: true,
      },
    ),
    lecture(
      "misc-topics",
      "Lecture 12 — Misc topics",
      "https://youtube.com/live/EdHQMGwFuQg?feature=share",
      {
        summary: "Miscellaneous polity topics — high-yield facts and objective recall.",
        pdfUrl:
          "https://drive.google.com/file/d/13Tuim5hgPz2SXm_ax99U6df6fQ4NzFsn/view?usp=drive_link",
        noMindMap: true,
      },
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
