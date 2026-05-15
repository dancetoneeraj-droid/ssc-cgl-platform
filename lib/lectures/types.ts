/**
 * Single lecture — add rows to the GK catalog with these fields only.
 * `id` becomes the URL segment (kebab-case recommended).
 */
export type LectureContent = {
  id: string;
  title: string;
  /** Optional one-line blurb on listing cards */
  summary?: string;
  youtubeUrl: string;
  pdfUrl: string;
  /** When omitted, the lecture detail page hides the mind map action. */
  mindMapUrl?: string;
};

/** Top-level GK routes that host `/subjects/gk/lecture/{subject}/{id}` pages. */
export const GK_FLAT_LECTURE_SUBJECTS = [
  "polity",
  "economy",
  "science",
  "environment",
  "static-gk",
  "current-affairs",
] as const;

export type GkFlatLectureSubject = (typeof GK_FLAT_LECTURE_SUBJECTS)[number];
