import { GKCrumb } from "@/components/gk-crumb";
import { LectureGrid } from "@/components/lecture-grid";
import { getFlatGkLectureList, gkFlatLectureHref } from "@/lib/lectures";

export const metadata = {
  title: "Economy · GK · ToThePoint-SSC",
};

export default function GKEconomyPage() {
  const lectures = getFlatGkLectureList("economy");

  return (
    <>
      <GKCrumb current="Economy" />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Economy</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Macro indicators, banking, fiscal tools, and developmental schemes — lecture-first delivery.
        </p>
      </header>
      <LectureGrid lectures={lectures} getHref={(lec) => gkFlatLectureHref("economy", lec)} />
    </>
  );
}
