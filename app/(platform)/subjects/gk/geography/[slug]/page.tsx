import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GEOGRAPHY_TOPICS, getGeographyTopic } from "@/lib/gk-routes";
import { LectureSeries } from "@/components/lecture-series";
import { PlatformCrumb } from "@/components/gk-crumb";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return GEOGRAPHY_TOPICS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getGeographyTopic(slug);
  if (!topic) return { title: "Geography · ToThePoint-SSC" };
  return { title: `${topic.title} · ToThePoint-SSC` };
}

export default async function GeographyTopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getGeographyTopic(slug);
  if (!topic) notFound();

  return (
    <>
      <PlatformCrumb
        segments={[
          { href: "/dashboard", label: "Dashboard" },
          { href: "/subjects/gk", label: "GK" },
          { href: "/subjects/gk/geography", label: "Geography" },
        ]}
        current={topic.title}
      />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{topic.title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">{topic.description}</p>
      </header>
      <LectureSeries context={topic.title} />
    </>
  );
}
