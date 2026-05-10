import { HISTORY_PERIODS } from "@/lib/gk-routes";
import { GKCrumb } from "@/components/gk-crumb";
import { NavCard } from "@/components/nav-card";

export const metadata = {
  title: "History · GK · ToThePoint-SSC",
};

export default function GKHistoryHubPage() {
  return (
    <>
      <GKCrumb current="History" />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">History</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Drill by era — every branch opens identical three-lecture cadence so students always know what to expect.
        </p>
      </header>
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
