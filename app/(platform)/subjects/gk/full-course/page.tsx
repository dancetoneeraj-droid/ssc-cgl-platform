import { PageIntro } from "@/components/content-blocks";
import { PlatformCrumb } from "@/components/gk-crumb";
import { NavCard } from "@/components/nav-card";

export const metadata = {
  title: "Full Course · GK · ToThePoint-SSC",
};

const fullCourseSubjects = [
  {
    href: "/subjects/gk/polity",
    title: "Polity",
    description: "Constitution, union & state executives, judiciary, constitutional bodies.",
  },
  {
    href: "/subjects/gk/history",
    title: "History",
    description: "Periodised ladders — Ancient through Art & Culture with lecture cards.",
    meta: "Structured",
  },
  {
    href: "/subjects/gk/geography",
    title: "Geography",
    description: "Climatology to Indian Geography — branching topics with lecture ladders.",
    meta: "Structured",
  },
  {
    href: "/subjects/gk/economy",
    title: "Economy",
    description: "Basics of economics, budgeting, monetary policy, developmental themes.",
  },
  {
    href: "/subjects/gk/science",
    title: "Science",
    description: "NCERT-forward physics, chemistry, biology arcs with exam hotspots.",
  },
  {
    href: "/subjects/gk/current-affairs",
    title: "Current Affairs",
    description: "Daily capsules distilled for objective recall.",
  },
  {
    href: "/subjects/gk/static-gk",
    title: "Static GK",
    description: "Awards, honours, terminology, inventories — evergreen facts.",
  },
  {
    href: "/subjects/gk/environment",
    title: "Environment",
    description: "Ecology, biodiversity, treaties, conventions, climate action.",
  },
];

export default function GKFullCourseHubPage() {
  return (
    <>
      <PlatformCrumb
        segments={[
          { href: "/", label: "Dashboard" },
          { href: "/subjects/gk", label: "GK" },
        ]}
        current="Full Course"
      />
      <PageIntro
        title="Full Course"
        description="All GK subject lecture series in one place. First lecture in each topic is free; remaining lectures need Full Course access (₹1,000)."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fullCourseSubjects.map((topic) => (
          <NavCard key={topic.href} {...topic} />
        ))}
      </ul>
    </>
  );
}
