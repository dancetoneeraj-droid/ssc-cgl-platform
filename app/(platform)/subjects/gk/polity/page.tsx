import { GKCrumb } from "@/components/gk-crumb";
import { LectureGrid } from "@/components/lecture-grid";
import { getFlatGkLectureList, gkFlatLectureHref } from "@/lib/lectures";

export const metadata = {
  title: "Polity · GK · ToThePoint-SSC",
};

export default function GKPolityPage() {
  const lectures = getFlatGkLectureList("polity");

  return (
    <>
      <GKCrumb current="Polity" />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Polity</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Fundamental rights through local governance — each lecture trims noise and keeps examiner intent visible.
        </p>
      </header>
      <LectureGrid lectures={lectures} getHref={(lec) => gkFlatLectureHref("polity", lec)} />
    </>
  );
}
