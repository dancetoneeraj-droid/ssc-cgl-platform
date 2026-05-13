import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PlatformCrumb } from "@/components/gk-crumb";
import { LectureDetailPanel } from "@/components/lecture-detail-panel";
import { collectGkLectureStaticParams, resolveGkLecture } from "@/lib/lectures";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateStaticParams() {
  return collectGkLectureStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resolved = slug?.length ? resolveGkLecture(slug) : null;
  if (!resolved) return { title: "Lecture · ToThePoint-SSC" };
  return { title: `${resolved.lecture.title} · ToThePoint-SSC` };
}

export default async function GkLecturePage({ params }: Props) {
  const { slug } = await params;
  if (!slug?.length) notFound();

  const resolved = resolveGkLecture(slug);
  if (!resolved) notFound();

  const { lecture, breadcrumbs } = resolved;

  return (
    <>
      <PlatformCrumb segments={breadcrumbs.segments} current={breadcrumbs.current} />
      <LectureDetailPanel lecture={lecture} />
    </>
  );
}
