import Link from "next/link";

const subjects = [
  {
    href: "/subjects/mathematics",
    title: "Mathematics",
    description: "Arithmetic, algebra, geometry, and data interpretation — exam speed drills.",
    tag: "Quant",
    emphasized: false,
  },
  {
    href: "/subjects/english",
    title: "English",
    description: "Grammar, vocabulary, comprehension — accuracy with minimal friction.",
    tag: "Language",
    emphasized: false,
  },
  {
    href: "/subjects/reasoning",
    title: "Reasoning",
    description: "Analytical puzzles, verbal logic, and pattern recognition workflows.",
    tag: "Aptitude",
    emphasized: false,
  },
  {
    href: "/subjects/gk",
    title: "GK",
    description: "Polity to Current Affairs — deep syllabus coverage with curated lecture series.",
    tag: "Primary focus",
    emphasized: true,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-blue-500/15 bg-gradient-to-br from-slate-900/80 via-slate-950 to-black p-6 shadow-[0_0_56px_-24px_var(--accent-glow)] backdrop-blur-sm ring-1 ring-white/[0.05] sm:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">ToThePoint-SSC</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Dashboard</h1>
        <p className="relative mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          Minimal workspace for serious SSC CGL prep. Open GK for full topic trees — History and Geography ship with
          structured sub-modules and lecture ladders.
        </p>
      </section>

      <section aria-labelledby="subjects-quick">
        <div className="mb-6">
          <h2 id="subjects-quick" className="text-lg font-semibold tracking-tight text-white">
            Subject library
          </h2>
          <p className="text-sm text-slate-500">Pick a pillar — routing stays fast and predictable.</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {subjects.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-900/50 p-6 shadow-[0_0_40px_-20px_rgba(59,130,246,0.38)] backdrop-blur-sm ring-1 ring-white/[0.04] transition duration-200 hover:-translate-y-0.5 hover:border-blue-400/35 hover:shadow-[0_0_52px_-16px_var(--accent-glow)] ${
                  s.emphasized ? "ring-blue-400/25" : ""
                }`}
              >
                {s.emphasized ? (
                  <span className="absolute right-4 top-4 rounded-full border border-blue-400/35 bg-blue-600/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-[0_0_16px_-4px_var(--accent-glow)]">
                    Featured
                  </span>
                ) : null}
                <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-semibold text-slate-300">
                  {s.tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white transition group-hover:text-blue-100">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{s.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-400">
                  Enter module
                  <span aria-hidden className="transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-white/[0.06] pt-8 text-center text-xs text-slate-500">
        <Link href="/" className="font-medium text-blue-400 transition hover:text-blue-300">
          Back to homepage
        </Link>
      </footer>
    </div>
  );
}
