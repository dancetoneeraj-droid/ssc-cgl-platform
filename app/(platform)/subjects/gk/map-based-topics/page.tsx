import { PageIntro } from "@/components/content-blocks";
import { FullCourseCrumb } from "@/components/gk-crumb";
import { LectureGrid } from "@/components/lecture-grid";
import { getFlatGkLectureList, gkFlatLectureHref } from "@/lib/lectures";

export const metadata = {
  title: "Map Based Topics · GK · ToThePoint-SSC",
};

export default function GKMapBasedTopicsPage() {
  const lectures = getFlatGkLectureList("map-based-topics");

  return (
    <>
      <FullCourseCrumb current="Map Based Topics" />
      <PageIntro
        title="Map Based Topics"
        description="Map-focused GK for SSC — locations, boundaries, and spatial recall for exams."
      />
      <LectureGrid lectures={lectures} getHref={(lec) => gkFlatLectureHref("map-based-topics", lec)} />
    </>
  );
}
