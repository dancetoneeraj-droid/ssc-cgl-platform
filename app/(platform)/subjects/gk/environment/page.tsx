import { GKCrumb } from "@/components/gk-crumb";
import { LectureSeries } from "@/components/lecture-series";

export const metadata = {
  title: "Environment · GK · ToThePoint-SSC",
};

export default function GKEnvironmentPage() {
  return (
    <>
      <GKCrumb current="Environment" />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Environment</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Climate accords, protected areas, institutions — evergreen objective themes.
        </p>
      </header>
      <LectureSeries context="Environment & ecology" />
    </>
  );
}
