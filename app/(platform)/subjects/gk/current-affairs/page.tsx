import { GKCrumb } from "@/components/gk-crumb";
import { LectureSeries } from "@/components/lecture-series";

export const metadata = {
  title: "Current Affairs · GK · ToThePoint-SSC",
};

export default function GKCurrentAffairsPage() {
  return (
    <>
      <GKCrumb current="Current Affairs" />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Current Affairs</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Rolling window capsules — objective-friendly phrasing for speedy revision.
        </p>
      </header>
      <LectureSeries context="Current Affairs compendium" />
    </>
  );
}
