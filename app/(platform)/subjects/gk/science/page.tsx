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
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Science</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Cross-linked NCERT arcs with exam recall tags — three opening lectures per stream.
        </p>
      </header>
      <LectureGrid lectures={lectures} getHref={(lec) => gkFlatLectureHref("science", lec)} />
    </>
  );
}
