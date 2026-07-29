import type { LectureContent } from "./types";
import { findPyqLecture, getPyqLectureList, getPyqYearMeta, type PyqYear } from "./pyq-catalog";

export type ResolvedPyqLecture = {
  year: PyqYear;
  yearTitle: string;
  lecture: LectureContent;
  lectureIndex: number;
};

export function resolvePyqLecture(year: string, lectureId: string): ResolvedPyqLecture | null {
  const meta = getPyqYearMeta(year);
  if (!meta?.available) return null;

  const list = getPyqLectureList(year as PyqYear);
  const lectureIndex = list.findIndex((l) => l.id === lectureId);
  if (lectureIndex === -1) return null;

  const lecture = findPyqLecture(year as PyqYear, lectureId);
  if (!lecture) return null;

  return {
    year: year as PyqYear,
    yearTitle: meta.title,
    lecture,
    lectureIndex,
  };
}

export function getPyqLectureAdjacentNav(
  year: PyqYear,
  lectureId: string,
): { prev: { href: string; title: string } | null; next: { href: string; title: string } | null } | null {
  const list = getPyqLectureList(year);
  const idx = list.findIndex((l) => l.id === lectureId);
  if (idx === -1) return null;

  const hrefFor = (lec: LectureContent) => `/subjects/gk/pyq/lecture/${year}/${lec.id}`;

  return {
    prev: idx > 0 ? { href: hrefFor(list[idx - 1]!), title: list[idx - 1]!.title } : null,
    next: idx < list.length - 1 ? { href: hrefFor(list[idx + 1]!), title: list[idx + 1]!.title } : null,
  };
}
