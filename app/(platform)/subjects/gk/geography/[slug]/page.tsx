import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageIntro } from "@/components/content-blocks";
import { LectureGrid } from "@/components/lecture-grid";
import { PlatformCrumb } from "@/components/gk-crumb";
import { GEOGRAPHY_TOPICS, getGeographyTopic } from "@/lib/gk-routes";
import { getGeographyLectureList, gkGeographyLectureHref } from "@/lib/lectures";

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

  const lectures = getGeographyLectureList(topic.slug);

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
      <PageIntro title={topic.title} description={topic.description} />
      <LectureGrid lectures={lectures} getHref={(lec) => gkGeographyLectureHref(topic.slug, lec)} />
    </>
  );
}
