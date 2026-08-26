import { PageIntro } from "@/components/content-blocks";
import { PlatformCrumb } from "@/components/gk-crumb";
import { NavCard } from "@/components/nav-card";
import { PYQ_YEARS } from "@/lib/lectures/pyq-catalog";

export const metadata = {
  title: "PYQ · GK · ToThePoint-SSC",
};

export default function GKPyqHubPage() {
  return (
    <>
      <PlatformCrumb
        segments={[
          { href: "/", label: "Dashboard" },
          { href: "/subjects/gk", label: "GK" },
        ]}
        current="PYQ"
      />
      <PageIntro
        title="Previous Year Questions (PYQ)"
        description="Year-wise PYQ video series for SSC CGL. First lecture free; full PYQ access at ₹250."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PYQ_YEARS.map((year) => (
          <NavCard
            key={year.slug}
            href={year.available ? `/subjects/gk/pyq/${year.slug}` : undefined}
            title={year.title}
            description={year.description}
            meta={year.available ? "Open" : "Coming soon"}
            disabled={!year.available}
          />
        ))}
      </ul>
    </>
  );
}
