import { GKCrumb } from "@/components/gk-crumb";
import { LectureSeries } from "@/components/lecture-series";

export const metadata = {
  title: "Polity · GK · ToThePoint-SSC",
};

export default function GKPolityPage() {
  return (
    <>
      <GKCrumb current="Polity" />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Polity</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Fundamental rights through local governance — each lecture trims noise and keeps examiner intent visible.
        </p>
      </header>
      <LectureSeries context="Indian Polity" videoIds={{ 1: "-5TkrT-Ecs8" }} />
    </>
  );
}
