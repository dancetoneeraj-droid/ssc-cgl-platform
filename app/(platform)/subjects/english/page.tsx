import Link from "next/link";
import { PlatformCrumb } from "@/components/gk-crumb";

export const metadata = {
  title: "English · ToThePoint-SSC",
};

export default function EnglishPage() {
  return (
    <>
      <PlatformCrumb segments={[{ href: "/dashboard", label: "Dashboard" }]} current="English" />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">English</h1>
        <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
          Grammar drills, cloze passages, vocab ladders — optimised for SSC patterns.
        </p>
      </header>
      <div className="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm">
        <p className="text-sm text-slate-600">English archive will mirror the GK routing style — minimal UI, maximal clarity.</p>
        <Link
          href="/subjects/gk"
          className="mt-6 inline-flex rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          Dive into GK lectures
        </Link>
      </div>
    </>
  );
}
