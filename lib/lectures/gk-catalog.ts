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
    lecture("lecture-1", "Lecture 1", "https://youtu.be/BOZM0ubYqvw", {
      pdfUrl:
        "https://drive.google.com/file/d/1B1lfDrn6kOxbp8g_Nsnky-EcDiZuxluc/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-2", "Lecture 2", "https://youtu.be/GIrSuwNoC8c", {
      pdfUrl:
        "https://drive.google.com/file/d/1B1lfDrn6kOxbp8g_Nsnky-EcDiZuxluc/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-3", "Lecture 3", "https://youtu.be/KAcpcFanIiw", {
      pdfUrl:
        "https://drive.google.com/file/d/1gYAnxAV_aQgJ1L9q9gK9gmMj0VLvA5Ta/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-4", "Lecture 4", "https://youtu.be/PlxS4o2mNXQ", {
      pdfUrl:
        "https://drive.google.com/file/d/1gYAnxAV_aQgJ1L9q9gK9gmMj0VLvA5Ta/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-5", "Lecture 5", "https://youtu.be/2jCJUEs4WRw", {
      pdfUrl:
        "https://drive.google.com/file/d/1MNDMZTp4yjIr_fmvznQMg0syxBajgFl9/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-6", "Lecture 6", "https://youtu.be/ZQXWghI3Whk", {
      pdfUrl:
        "https://drive.google.com/file/d/1aqqazwGPgQCPYxncY3Wv6XsDwHzHS4ii/view?usp=drive_link",
      noMindMap: true,
    }),
  ],
  medieval: [
    lecture("lecture-1", "Lecture 1", "https://youtu.be/wHlMhXLnV0E", {
      pdfUrl:
        "https://drive.google.com/file/d/1fbm_zN_7x_xBZHnLITkqdxtTnEjLVRJT/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-2", "Lecture 2", "https://youtu.be/uo1CR1PDg2w", {
      pdfUrl:
        "https://drive.google.com/file/d/1JlBrg-4tiIBWlHC_ND-Jw5e0IelIkhE1/view?usp=drive_link",
      noMindMap: true,
    }),
  ],
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
      "timeline-modern-history-1a",
      "Lecture 1A — Timeline of Modern History -2",
      "https://youtu.be/PKaq2TV8ePk?si=tx8d8tJUFMEyhwRo",
      {
        summary: "Modern Indian history timeline — Part II: continuation of the colonial-era chronology.",
        pdfUrl:
          "https://drive.google.com/file/d/1M5UGIC9b6U28JkxtbA25PqSfYJlusI_l/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "eic-expansion-civil-uprising",
      "Lecture 2 — Expansion of EIC and Downfall and Civil Uprising",
      "https://youtu.be/khgLzFj77jM?si=eHs1j7ufDlLTdKy9",
      {
        summary: "East India Company expansion, decline, and early civil uprisings — objective hotspots.",
        pdfUrl:
          "https://drive.google.com/file/d/19-BFVGJ2BgU66WG0fRHqlu2o7FAEWZw8/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "socio-religious-reform",
      "Lecture 3 — Socio Religious Reform",
      "https://youtu.be/th3O2Kb9H-U?si=JEGd42xPSjjZBUXv",
      {
        summary: "Socio-religious reform movements — leaders, ideas, and exam recall.",
        pdfUrl:
          "https://drive.google.com/file/d/1CPni0wy5gcWB_6XspTeO3haGk0NWHRZP/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "social-reformers-pre-inc",
      "Lecture 4 — Social Reformers and PRE INC org",
      "https://youtu.be/437-I1xgAWs?si=GffebQqU8xYv1EJh",
      {
        summary: "Social reformers and pre-INC organisations — names, aims, and timelines.",
        pdfUrl:
          "https://drive.google.com/file/d/1jD8jrDAohnOQaPC1mHxWFpt-omJoWfc8/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "post-inc-up-to-swadeshi",
      "Lecture 5 — Post INC organisation upto Swadesi Movement",
      "https://youtu.be/0t0grJ3qHpI?si=bAAr4QkgfHHJ5ZNJ",
      {
        summary: "Post-INC organisation through the Swadeshi movement — sessions, splits, and recall.",
        pdfUrl:
          "https://drive.google.com/file/d/1MQMOlnt3f0WaXu-gVRY1L5MteGsYhaGU/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "revolutionary-movt-gandhian-era",
      "Lecture 6 — Revolutionary Movt Phase 1 & Gandhian Era",
      "https://youtu.be/kT77vNA0cNQ?si=Gyg_n8N-CQfsF6hS",
      {
        summary: "Revolutionary movement Phase I and the Gandhian era — leaders, events, and exam recall.",
        pdfUrl:
          "https://drive.google.com/file/d/1pVlOS3e80P8bT3t5kNEqyLQ96cyWnomU/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "non-cooperation-revolutionary-phase-2",
      "Lecture 7 — Non Coperation Movt & Revolutionary Phase 2",
      "https://youtu.be/ZzYHhAQKYEU?si=eXoYppo5ArnMDWKx",
      {
        summary: "Non-Cooperation Movement and revolutionary Phase II — timelines and objective hotspots.",
        pdfUrl:
          "https://drive.google.com/file/d/1bGn5THKRW0WPJUH04DHAGL3ywC8JfnvV/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "cdm",
      "Lecture 8 — CDM",
      "https://youtu.be/Sp8A8wwMW6c?si=lE_B9sFjS0dx93wJ",
      {
        summary: "Civil Disobedience Movement — launch, spread, suspension, and exam traps.",
        pdfUrl:
          "https://drive.google.com/file/d/1bGn5THKRW0WPJUH04DHAGL3ywC8JfnvV/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "august-offer-cripps-quit-india",
      "Lecture 9 — August Offer, Cripps Mission, Quit India Movt",
      "https://youtu.be/t6zDgFwpxMY?si=WXFJpwEuUj7IrG8G",
      {
        summary: "August Offer, Cripps Mission, and Quit India Movement — terms, outcomes, and recall.",
        pdfUrl:
          "https://drive.google.com/file/d/14lqjpVcWRaqsmhP9XSar407jfqTGvA7e/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "ina-education-press",
      "Lecture 10 — Indian National Army, Education , Press",
      "https://youtu.be/N-h19QwFPGc?si=6gCmfzqYBAnUlijl",
      {
        summary: "INA, colonial education policy, and press — institutions, milestones, and one-mark facts.",
        pdfUrl:
          "https://drive.google.com/file/d/1VO6k8Cmfy4vokv2UnTuA0m6C3w1-adGF/view?usp=drive_link",
        noMindMap: true,
      },
    ),
  ],
  "post-independence": triple("Post Independence India"),
  "art-culture": [
    lecture(
      "lecture-1",
      "Lecture 1",
      "https://www.youtube.com/watch?v=sMBGdqwmzF4",
      {
        pdfUrl:
          "https://drive.google.com/file/d/1eRmGZkws5oppurpHhMJT8t-NVU_D1bfX/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "lecture-2",
      "Lecture 2",
      "https://www.youtube.com/watch?v=KdTrCuecJfo",
      {
        pdfUrl:
          "https://drive.google.com/file/d/1SOp95KvWTS280UGnLOeV6bSvJj7YqFU9/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "lecture-3",
      "Lecture 3",
      "https://www.youtube.com/watch?v=m-S02j9qYaM",
      {
        pdfUrl:
          "https://drive.google.com/file/d/1cH98N2jhLYofSvU8hm3-QfAKB7YegPn6/view?usp=drive_link",
        noMindMap: true,
      },
    ),
    lecture(
      "lecture-4",
      "Lecture 4",
      "https://www.youtube.com/watch?v=wlpSBRemukc",
      {
        pdfUrl:
          "https://drive.google.com/file/d/12vAeBRejRrckvK6i-OTSw71nDU2vEeL8/view?usp=drive_link",
        noMindMap: true,
      },
    ),
  ],
};

const geographyLectures: Record<GeographySlug, LectureContent[]> = {
  "physical-geography": [
    lecture("lecture-1", "Lecture 1", "https://youtu.be/EtBEGwhoUts?si=Pn61feIla-_qh9zU", {
      pdfUrl: "https://drive.google.com/file/d/1VKE6RqiO9ItLxCFBLGP1yElwWttggMxe/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-2", "Lecture 2", "https://youtu.be/mZZQMhjtWfM?si=k7QzPuxsh1iu03GH", {
      pdfUrl: "https://drive.google.com/file/d/1wc_vKAHheaVj12AOvdD5n0en0hICOPqy/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-3", "Lecture 3", "https://youtu.be/1wwwnZRFeYQ?si=Yh5KiUryvAy41wKQ", {
      pdfUrl: "https://drive.google.com/file/d/1T5w2DpEWOMOKznBxzqwDQgsihsy0bxGP/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-4", "Lecture 4", "https://youtu.be/bC-9LDnNNCc?si=OKTR3AoVOaTA0m9C", {
      pdfUrl: "https://drive.google.com/file/d/1g0HRpWGJaQsSsSpRFzvB6LZBjDJ0wte0/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-5", "Lecture 5", "https://youtu.be/d0vnhY-fZeI?si=BZb4K1gT6-F5s1h4", {
      pdfUrl: "https://drive.google.com/file/d/1UEKoUoaiCSLD8zBXXRo_SZ_KJh_g0dR4/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-6", "Lecture 6", "https://youtu.be/yXP_TMMfPRM?si=OpvczYf6SOsrMTEH", {
      pdfUrl: "https://drive.google.com/file/d/1xPRuJXbOXSoEeBsVvlDtYH_kRCPR3ijc/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-7", "Lecture 7", "https://youtu.be/07XZXM0CNvo?si=gvmkzFHv4fBE1OZM", {
      pdfUrl: "https://drive.google.com/file/d/1xPRuJXbOXSoEeBsVvlDtYH_kRCPR3ijc/view?usp=drive_link",
      noMindMap: true,
    }),
  ],
  "indian-geography": [
    lecture("lecture-1", "Lecture 1", "https://www.youtube.com/watch?v=PN-HEVNZTQE", {
      pdfUrl: "https://drive.google.com/file/d/1Tvi5G3OfaHPByZpcvUDsIUTmHIqGQIV0/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-2", "Lecture 2", "https://www.youtube.com/watch?v=pj46Wbkl55E", {
      pdfUrl: "https://drive.google.com/file/d/1ogYsdSznvzz-CokJ8AHJbfWs5aGP2gmK/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-3", "Lecture 3", "https://www.youtube.com/watch?v=a8YVexorgPk", {
      pdfUrl: "https://drive.google.com/file/d/1aKN7ahvksYngdqWYq0MZJLJOxtGHDrk-/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-4", "Lecture 4", "https://www.youtube.com/watch?v=lIg_wepLo1k", {
      pdfUrl: "https://drive.google.com/file/d/1LR-OyFnwlU3LsDEIhXB4S664rgQ6KREJ/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-5", "Lecture 5", "https://www.youtube.com/watch?v=2vlSiEaWkuU", {
      pdfUrl: "https://drive.google.com/file/d/1KSaG1oxCPxgPz6lt4jbkQvkm4qRaDkuf/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-6", "Lecture 6", "https://www.youtube.com/watch?v=152OORJ0x38", {
      pdfUrl: "https://drive.google.com/file/d/1MyPXG4F7vQCwUS35RPHYCsh9ZZIi96rw/view?usp=drive_link",
      noMindMap: true,
    }),
  ],
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
  economy: [
    lecture("lecture-1", "Lecture 1", "https://youtu.be/XFGaskx91MQ", {
      pdfUrl: "https://drive.google.com/file/d/1LZmA80yvfgmg_Lq2pP6r7RENJVKFu9ku/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-2", "Lecture 2", "https://youtu.be/wEZWXAXlaDE", {
      pdfUrl: "https://drive.google.com/file/d/1c6fS41ulqSdXjnxZRSK_-NuGb4Zy3dOB/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-3", "Lecture 3", "https://youtu.be/4mmgG0wClnY", {
      pdfUrl: "https://drive.google.com/file/d/1vl-TTsveBLr7RtksMopC3bA4DiA9OIPt/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-4", "Lecture 4", "https://youtu.be/lvQBLwwR6Rw", {
      pdfUrl: "https://drive.google.com/file/d/1vl-TTsveBLr7RtksMopC3bA4DiA9OIPt/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-5", "Lecture 5", "https://youtu.be/RP-F_uZRmcM", {
      pdfUrl: "https://drive.google.com/file/d/1uJNffWS2PO5JxsKQocANCqkDuf84I38u/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-6", "Lecture 6", "https://youtu.be/XFCqYDzbpTI", {
      pdfUrl: "https://drive.google.com/file/d/1dVYzl54bjMPOKAMdqwwLjcpg0jPcQOT2/view?usp=drive_link",
      noMindMap: true,
    }),
    lecture("lecture-7", "Lecture 7", "https://youtu.be/kGbfFtnMMPw", {
      pdfUrl: "https://drive.google.com/file/d/1dVYzl54bjMPOKAMdqwwLjcpg0jPcQOT2/view?usp=drive_link",
      noMindMap: true,
    }),
  ],
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
