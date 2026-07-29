import { PageIntro } from "@/components/content-blocks";
import { FullCourseCrumb } from "@/components/gk-crumb";
import { LectureGrid } from "@/components/lecture-grid";
import { getFlatGkLectureList, gkFlatLectureHref } from "@/lib/lectures";

export const metadata = {
  title: "Environment · GK · ToThePoint-SSC",
};

export default function GKEnvironmentPage() {
  const lectures = getFlatGkLectureList("environment");

  return (
    <>
      <FullCourseCrumb current="Environment" />
      <PageIntro
        title="Environment"
        description="Climate accords, protected areas, institutions — evergreen objective themes."
      />
      <LectureGrid lectures={lectures} getHref={(lec) => gkFlatLectureHref("environment", lec)} />
    </>
  );
}
