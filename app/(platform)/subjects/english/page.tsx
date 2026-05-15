import { PageIntro, SubjectLaneCard } from "@/components/content-blocks";
import { PlatformCrumb } from "@/components/gk-crumb";

export const metadata = {
  title: "English · ToThePoint-SSC",
};

export default function EnglishPage() {
  return (
    <>
      <PlatformCrumb segments={[{ href: "/dashboard", label: "Dashboard" }]} current="English" />
      <PageIntro
        title="English"
        description="Grammar drills, cloze passages, vocab ladders — optimised for SSC patterns."
      />
      <SubjectLaneCard
        body="English archive will mirror the GK routing style — minimal UI, maximal clarity."
        href="/subjects/gk"
        linkLabel="Dive into GK lectures"
      />
    </>
  );
}
