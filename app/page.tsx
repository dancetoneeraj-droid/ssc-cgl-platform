import Link from "next/link";
import { MarketingHeader } from "@/components/marketing-header";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(59,130,246,0.22),transparent_50%),radial-gradient(ellipse_80%_50%_at_100%_60%,rgba(37,99,235,0.12),transparent_45%),radial-gradient(ellipse_60%_40%_at_0%_90%,rgba(14,165,233,0.08),transparent_40%)]" />
      <MarketingHeader />

      <main className="relative">
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-[1.08fr_minmax(0,0.92fr)] lg:items-center lg:gap-16 lg:px-8 lg:py-28">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400/90">SSC CGL preparation</p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.06]">
                ToThePoint<span className="text-blue-400">-SSC</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                Structured lectures, disciplined paths, zero clutter — so you revise faster between shifts instead of fighting the interface.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_-6px_var(--accent-glow)] ring-1 ring-blue-400/30 transition hover:bg-blue-500"
                >
                  Start learning
                </Link>
                <Link
                  href="/login?next=/subjects/gk"
                  className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-100 shadow-sm backdrop-blur-sm transition hover:border-blue-400/35 hover:bg-white/[0.07]"
                >
                  Explore GK
                </Link>
              </div>
              <dl className="mt-14 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm ring-1 ring-blue-500/10">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Subjects</dt>
                  <dd className="mt-2 text-xl font-semibold text-white">Four pillars</dd>
                  <dd className="mt-1 text-xs text-slate-500">Mathematics · English · Reasoning · GK</dd>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm ring-1 ring-blue-500/10">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">GK depth</dt>
                  <dd className="mt-2 text-xl font-semibold text-white">Exam maps</dd>
                  <dd className="mt-1 text-xs text-slate-500">History &amp; Geography with nested lecture ladders</dd>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm ring-1 ring-blue-500/10">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Experience</dt>
                  <dd className="mt-2 text-xl font-semibold text-white">Calm &amp; fast</dd>
                  <dd className="mt-1 text-xs text-slate-500">Mobile-friendly workspace with secure sign-in</dd>
                </div>
              </dl>
            </div>
            <div className="relative rounded-3xl border border-blue-500/20 bg-gradient-to-br from-slate-900/80 via-slate-950 to-black p-8 shadow-[0_0_60px_-20px_var(--accent-glow)] backdrop-blur-sm ring-1 ring-white/[0.05] lg:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/15 text-xs font-bold text-blue-300 ring-1 ring-blue-400/25">
                  TP
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-300/90">Classroom pulse</p>
                  <p className="text-sm font-medium text-slate-300">Structured releases · crisp notes</p>
                </div>
              </div>
              <div className="mt-8 space-y-3">
                {["GK mapped with nested routes", "Lecture ladders per topic cluster", "Google sign-in continuity"].map(
                  (copy) => (
                    <div
                      key={copy}
                      className="rounded-2xl border border-white/[0.06] bg-slate-950/50 p-4 text-sm font-medium text-slate-300 ring-1 ring-blue-500/10"
                    >
                      {copy}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="pillars" className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Main subject arcs</h2>
            <p className="mt-2 text-sm text-slate-400 lg:max-w-2xl">
              Each lane opens inside the authenticated workspace — GK carries the richest routing structure today.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Mathematics",
                body: "Quant muscle — timed sets and pattern libraries.",
              },
              {
                title: "English",
                body: "Comprehension, grammar, cloze drills without noise.",
              },
              {
                title: "Reasoning",
                body: "Puzzle cadence engineered for repeatable accuracy.",
              },
              {
                title: "GK",
                body: "Polity · History · Geography · Economy · CA & more.",
                highlight: true,
              },
            ].map((item) => (
              <li key={item.title}>
                <Link
                  href="/login"
                  className={`group flex h-full flex-col rounded-3xl border border-white/[0.08] bg-slate-900/45 p-6 shadow-[0_0_40px_-22px_rgba(59,130,246,0.4)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-400/35 hover:shadow-[0_0_48px_-16px_var(--accent-glow)] ring-1 ring-white/[0.04] ${
                    item.highlight ? "ring-blue-500/25" : ""
                  }`}
                >
                  <h3 className="text-lg font-semibold tracking-tight text-white transition group-hover:text-blue-200">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{item.body}</p>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-blue-400/90">
                    Open workspace →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <footer className="border-t border-white/[0.06] bg-slate-950/80 py-10 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-xs text-slate-500 sm:flex-row sm:text-left lg:px-8">
            <p>© {new Date().getFullYear()} ToThePoint-SSC · SSC CGL preparation.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
              <Link href="/login" className="text-slate-400 transition hover:text-blue-400">
                Sign in
              </Link>
              <a
                href="https://wa.me/7976395900"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition hover:text-emerald-400"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
