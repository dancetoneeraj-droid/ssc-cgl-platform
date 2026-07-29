import { PageIntro } from "@/components/content-blocks";
import { FullCourseCrumb } from "@/components/gk-crumb";
import { LectureGrid } from "@/components/lecture-grid";
import { getFlatGkLectureList, gkFlatLectureHref } from "@/lib/lectures";

export const metadata = {
  title: "Static GK · ToThePoint-SSC",
};

export default function GKStaticPage() {
  const lectures = getFlatGkLectureList("static-gk");

  return (
    <>
      <FullCourseCrumb current="Static GK" />
      <PageIntro
        title="Static GK"
        description="Symbols, honours, inventories — ideal for cram sessions between mocks."
      />
      <LectureGrid lectures={lectures} getHref={(lec) => gkFlatLectureHref("static-gk", lec)} />
    </>
  );
}
