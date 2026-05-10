import { GKCrumb } from "@/components/gk-crumb";
import { LectureSeries } from "@/components/lecture-series";

export const metadata = {
  title: "Static GK · ToThePoint-SSC",
};

export default function GKStaticPage() {
  return (
    <>
      <GKCrumb current="Static GK" />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Static GK</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">
          Symbols, honours, inventories — ideal for cram sessions between mocks.
        </p>
      </header>
      <LectureSeries context="Static GK fact stacks" />
    </>
  );
}
