import { PageIntro, SubjectLaneCard } from "@/components/content-blocks";
import { PlatformCrumb } from "@/components/gk-crumb";

export const metadata = {
  title: "Reasoning · ToThePoint-SSC",
};

export default function ReasoningPage() {
  return (
    <>
      <PlatformCrumb segments={[{ href: "/dashboard", label: "Dashboard" }]} current="Reasoning" />
      <PageIntro
        title="Reasoning"
        description="Non-verbal, verbal, analogy, sequencing — scaffolded ladders for repeatable accuracy."
      />
      <SubjectLaneCard
        body="Reasoning playlists slot in here without changing the chrome — same shell, same logout."
        href="/subjects/gk"
        linkLabel="Study GK lecture tree"
      />
    </>
  );
}
