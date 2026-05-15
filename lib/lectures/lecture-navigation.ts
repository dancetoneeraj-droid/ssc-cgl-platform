import { getGeographyTopic, getHistoryPeriod } from "@/lib/gk-routes";
import type { GeographySlug, HistorySlug } from "@/lib/gk-routes";
import {
  getFlatGkLectureList,
  getGeographyLectureList,
  getHistoryLectureList,
  isGkFlatLectureSubject,
} from "./gk-catalog";
import { gkFlatLectureHref, gkGeographyLectureHref, gkHistoryLectureHref } from "./paths";
import type { GkFlatLectureSubject, LectureContent } from "./types";

export type AdjacentLectureLink = { href: string; title: string };

function adjacentFromList(
  list: LectureContent[],
  lectureId: string,
  hrefFor: (lec: LectureContent) => string,
): { prev: AdjacentLectureLink | null; next: AdjacentLectureLink | null } | null {
  const idx = list.findIndex((l) => l.id === lectureId);
  if (idx === -1) return null;
  const prev =
    idx > 0 ? { href: hrefFor(list[idx - 1]!), title: list[idx - 1]!.title } : null;
  const next =
    idx < list.length - 1
      ? { href: hrefFor(list[idx + 1]!), title: list[idx + 1]!.title }
      : null;
  return { prev, next };
}

/** Prev/next within the same topic list (same history period, geography topic, or flat GK subject). */
export function getGkLectureAdjacentNav(
  segments: string[],
): { prev: AdjacentLectureLink | null; next: AdjacentLectureLink | null } | null {
  if (segments.length === 3) {
    const [kind, scope, lectureId] = segments;

    if (kind === "history") {
      const period = getHistoryPeriod(scope);
      if (!period) return null;
      const list = getHistoryLectureList(scope as HistorySlug);
      return adjacentFromList(list, lectureId, (lec) => gkHistoryLectureHref(period.slug, lec));
    }

    if (kind === "geography") {
      const topic = getGeographyTopic(scope);
      if (!topic) return null;
      const list = getGeographyLectureList(scope as GeographySlug);
      return adjacentFromList(list, lectureId, (lec) => gkGeographyLectureHref(topic.slug, lec));
    }

    return null;
  }

  if (segments.length === 2) {
    const [subject, lectureId] = segments;
    if (!isGkFlatLectureSubject(subject)) return null;
    const list = getFlatGkLectureList(subject as GkFlatLectureSubject);
    return adjacentFromList(list, lectureId, (lec) => gkFlatLectureHref(subject as GkFlatLectureSubject, lec));
  }

  return null;
}
