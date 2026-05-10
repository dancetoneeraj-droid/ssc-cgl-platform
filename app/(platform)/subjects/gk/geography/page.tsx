import { GEOGRAPHY_TOPICS } from "@/lib/gk-routes";
import { GKCrumb } from "@/components/gk-crumb";
import { NavCard } from "@/components/nav-card";

export const metadata = {
  title: "Geography · GK · ToThePoint-SSC",
};

export default function GKGeographyHubPage() {
  return (
    <>
      <GKCrumb current="Geography" />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Geography</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Physical systems first, Indian application second — mirrored lecture cadence everywhere.
        </p>
      </header>
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
