import { GKCrumb } from "@/components/gk-crumb";
import { LectureSeries } from "@/components/lecture-series";

export const metadata = {
  title: "Science · GK · ToThePoint-SSC",
};

export default function GKSciencePage() {
  return (
    <>
      <GKCrumb current="Science" />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Science</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Cross-linked NCERT arcs with exam recall tags — three opening lectures per stream.
        </p>
      </header>
      <LectureSeries context="General Science for SSC" />
    </>
  );
}
