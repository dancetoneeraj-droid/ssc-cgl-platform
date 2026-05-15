import { PageIntro, SubjectLaneCard } from "@/components/content-blocks";
import { PlatformCrumb } from "@/components/gk-crumb";

export const metadata = {
  title: "Mathematics · ToThePoint-SSC",
};

export default function MathematicsPage() {
  return (
    <>
      <PlatformCrumb segments={[{ href: "/dashboard", label: "Dashboard" }]} current="Mathematics" />
      <PageIntro
        title="Mathematics"
        description="Quant syllabus for SSC CGL Tier I — foundation modules arriving on this lane first."
      />
      <SubjectLaneCard
        body="This subject hub is scaffolded — connect your LMS or CDN when batches go live."
        href="/subjects/gk"
        linkLabel="Explore GK meanwhile"
      />
    </>
  );
}
