import type { GeographySlug, HistorySlug } from "@/lib/gk-routes";
import { listAllGkLectureStaticParams } from "./gk-catalog";
import type { GkFlatLectureSubject, LectureContent } from "./types";

const BASE = "/subjects/gk/lecture";

export function gkHistoryLectureHref(period: HistorySlug, lecture: Pick<LectureContent, "id">): string {
  return `${BASE}/history/${period}/${lecture.id}`;
}

export function gkGeographyLectureHref(topic: GeographySlug, lecture: Pick<LectureContent, "id">): string {
  return `${BASE}/geography/${topic}/${lecture.id}`;
}

export function gkFlatLectureHref(subject: GkFlatLectureSubject, lecture: Pick<LectureContent, "id">): string {
  return `${BASE}/${subject}/${lecture.id}`;
}

export function collectGkLectureStaticParams(): { slug: string[] }[] {
  return listAllGkLectureStaticParams();
}
