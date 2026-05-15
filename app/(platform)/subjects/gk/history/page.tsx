import { HISTORY_PERIODS } from "@/lib/gk-routes";
import { PageIntro } from "@/components/content-blocks";
import { GKCrumb } from "@/components/gk-crumb";
import { NavCard } from "@/components/nav-card";

export const metadata = {
  title: "History · GK · ToThePoint-SSC",
};

export default function GKHistoryHubPage() {
  return (
    <>
      <GKCrumb current="History" />
      <PageIntro
        title="History"
        description="Drill by era — every branch opens identical three-lecture cadence so students always know what to expect."
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HISTORY_PERIODS.map((p) => (
          <NavCard
            key={p.slug}
            href={`/subjects/gk/history/${p.slug}`}
            title={p.title}
            description={p.description}
          />
        ))}
      </ul>
    </>
  );
}
