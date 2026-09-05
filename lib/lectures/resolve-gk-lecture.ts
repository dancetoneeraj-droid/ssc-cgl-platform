import type { CrumbSegment } from "@/components/gk-crumb";
import {
  getGeographyTopic,
  getHistoryPeriod,
  type GeographySlug,
  type HistorySlug,
} from "@/lib/gk-routes";
import {
  findFlatGkLecture,
  findGeographyLecture,
  findHistoryLecture,
  getFlatGkLectureList,
  getGeographyLectureList,
  getHistoryLectureList,
  isGkFlatLectureSubject,
} from "./gk-catalog";
import type { GkFlatLectureSubject, LectureContent } from "./types";

export type ResolvedGkLecture = {
  lecture: LectureContent;
  lectureIndex: number;
  breadcrumbs: { segments: CrumbSegment[]; current: string };
};

const flatSubjectLabel: Record<GkFlatLectureSubject, string> = {
  polity: "Polity",
  economy: "Economy",
  science: "Science",
  environment: "Environment",
  "static-gk": "Static GK",
  "current-affairs": "Current Affairs",
};

const fullCourseBase: CrumbSegment[] = [
  { href: "/", label: "Dashboard" },
  { href: "/subjects/gk", label: "GK" },
  { href: "/subjects/gk/full-course", label: "Full Course" },
];

export function resolveGkLecture(segments: string[]): ResolvedGkLecture | null {
  if (segments.length === 3) {
    const [kind, scope, lectureId] = segments;

    if (kind === "history") {
      const period = getHistoryPeriod(scope);
      if (!period) return null;
      const list = getHistoryLectureList(scope as HistorySlug);
      const lectureIndex = list.findIndex((l) => l.id === lectureId);
      if (lectureIndex === -1) return null;
      const lecture = findHistoryLecture(scope as HistorySlug, lectureId);
      if (!lecture) return null;
      return {
        lecture,
        lectureIndex,
        breadcrumbs: {
          segments: [
            ...fullCourseBase,
            { href: "/subjects/gk/history", label: "History" },
            { href: `/subjects/gk/history/${period.slug}`, label: period.title },
          ],
          current: lecture.title,
        },
      };
    }

    if (kind === "geography") {
      const topic = getGeographyTopic(scope);
      if (!topic) return null;
      const list = getGeographyLectureList(scope as GeographySlug);
      const lectureIndex = list.findIndex((l) => l.id === lectureId);
      if (lectureIndex === -1) return null;
      const lecture = findGeographyLecture(scope as GeographySlug, lectureId);
      if (!lecture) return null;
      return {
        lecture,
        lectureIndex,
        breadcrumbs: {
          segments: [
            ...fullCourseBase,
            { href: "/subjects/gk/geography", label: "Geography" },
            { href: `/subjects/gk/geography/${topic.slug}`, label: topic.title },
          ],
          current: lecture.title,
        },
      };
    }

    return null;
  }

  if (segments.length === 2) {
    const [subject, lectureId] = segments;
    if (!isGkFlatLectureSubject(subject)) return null;

    const list = getFlatGkLectureList(subject);
    const lectureIndex = list.findIndex((l) => l.id === lectureId);
    if (lectureIndex === -1) return null;

    const lecture = findFlatGkLecture(subject, lectureId);
    if (!lecture) return null;

    return {
      lecture,
      lectureIndex,
      breadcrumbs: {
        segments: [
          ...fullCourseBase,
          { href: `/subjects/gk/${subject}`, label: flatSubjectLabel[subject] },
        ],
        current: lecture.title,
      },
    };
  }

  return null;
}
