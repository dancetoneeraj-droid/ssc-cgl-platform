import { GEOGRAPHY_TOPICS } from "@/lib/gk-routes";
import { PageIntro } from "@/components/content-blocks";
import { FullCourseCrumb } from "@/components/gk-crumb";
import { NavCard } from "@/components/nav-card";

export const metadata = {
  title: "Geography · GK · ToThePoint-SSC",
};

export default function GKGeographyHubPage() {
  return (
    <>
      <FullCourseCrumb current="Geography" />
      <PageIntro
        title="Geography"
        description="Two clear lanes — Physical Geography and Indian Geography — with lecture-first delivery."
      />
      <ul className="grid gap-4 sm:grid-cols-2">
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
