import { GKCrumb } from "@/components/gk-crumb";
import { LectureGrid } from "@/components/lecture-grid";
import { getFlatGkLectureList, gkFlatLectureHref } from "@/lib/lectures";

export const metadata = {
  title: "Static GK · ToThePoint-SSC",
};

export default function GKStaticPage() {
  const lectures = getFlatGkLectureList("static-gk");

  return (
    <>
      <GKCrumb current="Static GK" />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Static GK</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Symbols, honours, inventories — ideal for cram sessions between mocks.
        </p>
      </header>
      <LectureGrid lectures={lectures} getHref={(lec) => gkFlatLectureHref("static-gk", lec)} />
    </>
  );
}
