/**
 * Manual access lists — add a student's email after they pay.
 * PYQ (₹250) and Full Course (₹1000) are separate; a student may have one or both.
 */

/** Existing students who had full platform access — migrated to Full Course. */
export const FULL_COURSE_APPROVED_EMAILS = [
  "poorvabansal7@gmail.com",
  "kirarsachin20@gmail.com",
  "suruchidiwedi1107@gmail.com",
  "deek431@gmail.com",
  "mkme2020@gmail.com",
  "palasha770388@gmail.com",
  "dancetoneeraj@gmail.com",
  "choudharydeepanshu824@gmail.com",
  "ashkumar802@gmail.com",
  "sumitamandal1983@gmail.com",
  "laxmiratnappa@gmail.com",
  "aditi.coho@gmail.com",
  "saeednitjsr@gmail.com",
  "sandeep011524@gmail.com",
  "sharmayamini2025@gmail.com",
  "ankitsharma8397@gmail.com",
  "gpalak149@gmail.com",
  "michaelanderson883@gmail.com",
] as const;

/** PYQ access (₹250) — add emails here after manual payment. */
export const PYQ_APPROVED_EMAILS = [] as const;

function normalizeEmail(email: string | null | undefined): string | null {
  if (!email) return null;
  return email.trim().toLowerCase();
}

function isInList(email: string, list: readonly string[]): boolean {
  const normalized = normalizeEmail(email);
  if (!normalized) return false;
  return list.some((allowed) => allowed.toLowerCase() === normalized);
}

export function hasFullCourseAccess(email: string | null | undefined): boolean {
  return isInList(email ?? "", FULL_COURSE_APPROVED_EMAILS);
}

export function hasPyqAccess(email: string | null | undefined): boolean {
  return isInList(email ?? "", PYQ_APPROVED_EMAILS);
}

export function hasTrackAccess(track: "full-course" | "pyq", email: string | null | undefined): boolean {
  return track === "full-course" ? hasFullCourseAccess(email) : hasPyqAccess(email);
}

/** @deprecated Use hasFullCourseAccess — kept for any legacy imports. */
export function isApprovedStudentEmail(email: string | null | undefined): boolean {
  return hasFullCourseAccess(email);
}
