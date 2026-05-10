import { GKCrumb } from "@/components/gk-crumb";
import { LectureSeries } from "@/components/lecture-series";

export const metadata = {
  title: "Economy · GK · ToThePoint-SSC",
};

export default function GKEconomyPage() {
  return (
    <>
      <GKCrumb current="Economy" />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Economy</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Macro indicators, banking, fiscal tools, and developmental schemes — lecture-first delivery.
        </p>
      </header>
      <LectureSeries context="Indian Economy & economic survey themes" />
    </>
  );
}
