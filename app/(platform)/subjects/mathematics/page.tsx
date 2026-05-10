import Link from "next/link";
import { PlatformCrumb } from "@/components/gk-crumb";

export const metadata = {
  title: "Mathematics · ToThePoint-SSC",
};

export default function MathematicsPage() {
  return (
    <>
      <PlatformCrumb segments={[{ href: "/dashboard", label: "Dashboard" }]} current="Mathematics" />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Mathematics</h1>
        <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
          Quant syllabus for SSC CGL Tier I — foundation modules arriving on this lane first.
        </p>
      </header>
      <div className="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm">
        <p className="text-sm text-slate-600">
          This subject hub is scaffolded — connect your LMS or CDN when batches go live.
        </p>
        <Link
          href="/subjects/gk"
          className="mt-6 inline-flex rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          Explore GK meanwhile
        </Link>
      </div>
    </>
  );
}
