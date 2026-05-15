import { GEOGRAPHY_TOPICS } from "@/lib/gk-routes";
import { PageIntro } from "@/components/content-blocks";
import { GKCrumb } from "@/components/gk-crumb";
import { NavCard } from "@/components/nav-card";

export const metadata = {
  title: "Geography · GK · ToThePoint-SSC",
};

export default function GKGeographyHubPage() {
  return (
    <>
      <GKCrumb current="Geography" />
      <PageIntro
        title="Geography"
        description="Physical systems first, Indian application second — mirrored lecture cadence everywhere."
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GEOGRAPHY_TOPICS.map((t) => (
          <NavCard
            key={t.slug}
            href={`/subjects/gk/geography/${t.slug}`}
            title={t.title}
            description={t.description}
          />
        ))}
      </ul>
    </>
  );
}
