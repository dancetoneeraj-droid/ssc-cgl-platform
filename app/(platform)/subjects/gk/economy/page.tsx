import { PageIntro } from "@/components/content-blocks";
import { GKCrumb } from "@/components/gk-crumb";
import { LectureGrid } from "@/components/lecture-grid";
import { getFlatGkLectureList, gkFlatLectureHref } from "@/lib/lectures";

export const metadata = {
  title: "Economy · GK · ToThePoint-SSC",
};

export default function GKEconomyPage() {
  const lectures = getFlatGkLectureList("economy");

  return (
    <>
      <GKCrumb current="Economy" />
      <PageIntro
        title="Economy"
        description="Macro indicators, banking, fiscal tools, and developmental schemes — lecture-first delivery."
      />
      <LectureGrid lectures={lectures} getHref={(lec) => gkFlatLectureHref("economy", lec)} />
    </>
  );
}
