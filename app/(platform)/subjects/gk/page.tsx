import { GKCrumb } from "@/components/gk-crumb";
import { NavCard } from "@/components/nav-card";

export const metadata = {
  title: "GK · ToThePoint-SSC",
};

const gkSubjects = [
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

export default function GKHubPage() {
  return (
    <>
      <GKCrumb current="Topics" />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">General Knowledge</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
          GK is curated first — rich routing for History & Geography, direct lecture ladders for allied papers.
          Everything stays featherweight for mobile study sessions.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gkSubjects.map((topic) => (
          <NavCard key={topic.href} {...topic} />
        ))}
      </ul>
    </>
  );
}
