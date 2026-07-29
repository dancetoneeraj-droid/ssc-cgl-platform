import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageIntro } from "@/components/content-blocks";
import { PlatformCrumb } from "@/components/gk-crumb";
import { LectureGrid } from "@/components/lecture-grid";
import { getPyqLectureList, getPyqYearMeta, type PyqYear } from "@/lib/lectures/pyq-catalog";

type Props = {
  params: Promise<{ year: string }>;
};

export async function generateStaticParams() {
  return [{ year: "2025" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year } = await params;
  const meta = getPyqYearMeta(year);
  if (!meta) return { title: "PYQ · ToThePoint-SSC" };
  return { title: `${meta.title} · PYQ · ToThePoint-SSC` };
}

export default async function PyqYearPage({ params }: Props) {
  const { year } = await params;
  const meta = getPyqYearMeta(year);
  if (!meta?.available) notFound();

  const lectures = getPyqLectureList(year as PyqYear);

  return (
    <>
      <PlatformCrumb
        segments={[
          { href: "/", label: "Dashboard" },
          { href: "/subjects/gk", label: "GK" },
          { href: "/subjects/gk/pyq", label: "PYQ" },
        ]}
        current={meta.title}
      />
      <PageIntro
        title={meta.title}
        description={`${meta.description} Follow the numbered order — 13 Sept through 22 Sept, shift by shift. First lecture is free; remaining need PYQ access (₹250).`}
      />
      <LectureGrid
        lectures={lectures}
        getHref={(lec) => `/subjects/gk/pyq/lecture/${year}/${lec.id}`}
        showSequenceNumbers
      />
    </>
  );
}
