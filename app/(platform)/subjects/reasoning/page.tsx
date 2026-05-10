import Link from "next/link";
import { PlatformCrumb } from "@/components/gk-crumb";

export const metadata = {
  title: "Reasoning · ToThePoint-SSC",
};

export default function ReasoningPage() {
  return (
    <>
      <PlatformCrumb segments={[{ href: "/dashboard", label: "Dashboard" }]} current="Reasoning" />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Reasoning</h1>
        <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
          Non-verbal, verbal, analogy, sequencing — scaffolded ladders for repeatable accuracy.
        </p>
      </header>
      <div className="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm">
        <p className="text-sm text-slate-600">Reasoning playlists slot in here without changing the chrome — same shell, same logout.</p>
        <Link
          href="/subjects/gk"
          className="mt-6 inline-flex rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          Study GK lecture tree
        </Link>
      </div>
    </>
  );
}
