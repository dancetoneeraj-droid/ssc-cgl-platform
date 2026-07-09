import { PageIntro } from "@/components/content-blocks";
import { GKCrumb } from "@/components/gk-crumb";
import { LectureGrid } from "@/components/lecture-grid";
import { getFlatGkLectureList, gkFlatLectureHref } from "@/lib/lectures";

export const metadata = {
  title: "Geography · GK · ToThePoint-SSC",
};

export default function GKGeographyHubPage() {
  const lectures = getFlatGkLectureList("geography");

  return (
    <>
      <GKCrumb current="Geography" />
      <PageIntro
        title="Geography"
        description="Direct geography lecture list for fast access without sub-sections."
      />
      <LectureGrid lectures={lectures} getHref={(lec) => gkFlatLectureHref("geography", lec)} />
    </>
  );
}
