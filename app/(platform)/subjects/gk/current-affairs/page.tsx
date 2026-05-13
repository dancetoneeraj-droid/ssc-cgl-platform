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
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Current Affairs</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Rolling window capsules — objective-friendly phrasing for speedy revision.
        </p>
      </header>
      <LectureGrid lectures={lectures} getHref={(lec) => gkFlatLectureHref("current-affairs", lec)} />
    </>
  );
}
