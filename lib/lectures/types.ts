export type PdfLink = {
  url: string;
  /** Shown on the materials card; defaults to "PDF Notes" */
  label?: string;
};

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
  /** Additional PDFs beyond `pdfUrl` (e.g. split notes for one lecture). */
  extraPdfUrls?: PdfLink[];
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
