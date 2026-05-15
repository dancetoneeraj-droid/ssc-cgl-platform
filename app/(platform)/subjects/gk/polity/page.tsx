import { PageIntro } from "@/components/content-blocks";
import { GKCrumb } from "@/components/gk-crumb";
import { LectureGrid } from "@/components/lecture-grid";
import { getFlatGkLectureList, gkFlatLectureHref } from "@/lib/lectures";

export const metadata = {
  title: "Polity · GK · ToThePoint-SSC",
};

export default function GKPolityPage() {
  const lectures = getFlatGkLectureList("polity");

  return (
    <>
      <GKCrumb current="Polity" />
      <PageIntro
        title="Polity"
        description="Fundamental rights through local governance — each lecture trims noise and keeps examiner intent visible."
      />
      <LectureGrid lectures={lectures} getHref={(lec) => gkFlatLectureHref("polity", lec)} />
    </>
  );
}
