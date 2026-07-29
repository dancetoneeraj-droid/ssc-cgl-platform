import { PageIntro } from "@/components/content-blocks";
import { GKCrumb } from "@/components/gk-crumb";
import { NavCard } from "@/components/nav-card";

export const metadata = {
  title: "GK · ToThePoint-SSC",
};

const gkTracks = [
  {
    href: "/subjects/gk/pyq",
    title: "PYQ",
    description: "Previous year question walkthroughs by exam year. First lecture free; full PYQ bank at ₹250.",
    meta: "₹250",
  },
  {
    href: "/subjects/gk/full-course",
    title: "Full Course",
    description: "Complete GK syllabus — Polity, History, Geography, and all subject lecture series. First lecture free; full access at ₹1,000.",
    meta: "₹1,000",
  },
];

export default function GKHubPage() {
  return (
    <>
      <GKCrumb current="Topics" />
      <PageIntro
        title="General Knowledge"
        description="Choose PYQ for previous-year drills, or Full Course for the complete syllabus. The first lecture in every section is free — browse without signing in."
      />

      <ul className="grid gap-4 sm:grid-cols-2">
        {gkTracks.map((track) => (
          <NavCard key={track.href} {...track} />
        ))}
      </ul>
    </>
  );
}
