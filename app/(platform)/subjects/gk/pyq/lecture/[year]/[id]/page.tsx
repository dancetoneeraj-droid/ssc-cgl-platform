import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PlatformCrumb } from "@/components/gk-crumb";
import { LectureAccessGate } from "@/components/lecture-access-gate";
import { getPyqLectureAdjacentNav, resolvePyqLecture } from "@/lib/lectures/resolve-pyq-lecture";

type Props = {
  params: Promise<{ year: string; id: string }>;
};

export async function generateStaticParams() {
  const { listPyqLectureStaticParams } = await import("@/lib/lectures/pyq-catalog");
  return listPyqLectureStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year, id } = await params;
  const resolved = resolvePyqLecture(year, id);
  if (!resolved) return { title: "PYQ Lecture · ToThePoint-SSC" };
  return { title: `${resolved.lecture.title} · ToThePoint-SSC` };
}

export default async function PyqLecturePage({ params }: Props) {
  const { year, id } = await params;
  const resolved = resolvePyqLecture(year, id);
  if (!resolved) notFound();

  const { lecture, lectureIndex, yearTitle } = resolved;
  const adjacent = getPyqLectureAdjacentNav(resolved.year, id);

  return (
    <>
      <PlatformCrumb
        segments={[
          { href: "/", label: "Dashboard" },
          { href: "/subjects/gk", label: "GK" },
          { href: "/subjects/gk/pyq", label: "PYQ" },
          { href: `/subjects/gk/pyq/${year}`, label: yearTitle },
        ]}
        current={lecture.title}
      />
      <LectureAccessGate
        track="pyq"
        lectureIndex={lectureIndex}
        lecture={lecture}
        adjacent={adjacent}
      />
    </>
  );
}
