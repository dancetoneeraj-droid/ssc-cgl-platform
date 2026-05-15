import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageIntro } from "@/components/content-blocks";
import { LectureGrid } from "@/components/lecture-grid";
import { PlatformCrumb } from "@/components/gk-crumb";
import { HISTORY_PERIODS, getHistoryPeriod } from "@/lib/gk-routes";
import { getHistoryLectureList, gkHistoryLectureHref } from "@/lib/lectures";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return HISTORY_PERIODS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const period = getHistoryPeriod(slug);
  if (!period) return { title: "History · ToThePoint-SSC" };
  return { title: `${period.title} · ToThePoint-SSC` };
}

export default async function HistoryPeriodPage({ params }: Props) {
  const { slug } = await params;
  const period = getHistoryPeriod(slug);
  if (!period) notFound();

  const lectures = getHistoryLectureList(period.slug);

  return (
    <>
      <PlatformCrumb
        segments={[
          { href: "/dashboard", label: "Dashboard" },
          { href: "/subjects/gk", label: "GK" },
          { href: "/subjects/gk/history", label: "History" },
        ]}
        current={period.title}
      />
      <PageIntro title={period.title} description={period.description} />
      <LectureGrid lectures={lectures} getHref={(lec) => gkHistoryLectureHref(period.slug, lec)} />
    </>
  );
}
