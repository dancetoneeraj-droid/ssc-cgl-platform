import { PageIntro } from "@/components/content-blocks";
import { GKCrumb } from "@/components/gk-crumb";
import { LectureGrid } from "@/components/lecture-grid";
import { getFlatGkLectureList, gkFlatLectureHref } from "@/lib/lectures";

export const metadata = {
  title: "Current Affairs · GK · ToThePoint-SSC",
};

export default function GKCurrentAffairsPage() {
  const lectures = getFlatGkLectureList("current-affairs");

  return (
    <>
      <GKCrumb current="Current Affairs" />
      <PageIntro
        title="Current Affairs"
        description="Rolling window capsules — objective-friendly phrasing for speedy revision."
      />
      <LectureGrid lectures={lectures} getHref={(lec) => gkFlatLectureHref("current-affairs", lec)} />
    </>
  );
}
