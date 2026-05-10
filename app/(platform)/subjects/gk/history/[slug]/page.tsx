import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HISTORY_PERIODS, getHistoryPeriod } from "@/lib/gk-routes";
import { LectureSeries } from "@/components/lecture-series";
import { PlatformCrumb } from "@/components/gk-crumb";

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
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{period.title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">{period.description}</p>
      </header>
      <LectureSeries context={period.title} />
    </>
  );
}
