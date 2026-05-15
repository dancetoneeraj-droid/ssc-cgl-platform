import { PageIntro } from "@/components/content-blocks";
import { GKCrumb } from "@/components/gk-crumb";
import { LectureGrid } from "@/components/lecture-grid";
import { getFlatGkLectureList, gkFlatLectureHref } from "@/lib/lectures";

export const metadata = {
  title: "Science · GK · ToThePoint-SSC",
};

export default function GKSciencePage() {
  const lectures = getFlatGkLectureList("science");

  return (
    <>
      <GKCrumb current="Science" />
      <PageIntro
        title="Science"
        description="Cross-linked NCERT arcs with exam recall tags — three opening lectures per stream."
      />
      <LectureGrid lectures={lectures} getHref={(lec) => gkFlatLectureHref("science", lec)} />
    </>
  );
}
