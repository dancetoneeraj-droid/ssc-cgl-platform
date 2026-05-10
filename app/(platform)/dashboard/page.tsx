import Link from "next/link";

const subjects = [
  {
    href: "/subjects/mathematics",
    title: "Mathematics",
    description: "Arithmetic, algebra, geometry, and data interpretation — exam speed drills.",
    tag: "Quant",
    accent: "from-sky-50 to-white ring-sky-100",
  },
  {
    href: "/subjects/english",
    title: "English",
    description: "Grammar, vocabulary, comprehension — accuracy with minimal friction.",
    tag: "Language",
    accent: "from-violet-50 to-white ring-violet-100",
  },
  {
    href: "/subjects/reasoning",
    title: "Reasoning",
    description: "Analytical puzzles, verbal logic, and pattern recognition workflows.",
    tag: "Aptitude",
    accent: "from-emerald-50 to-white ring-emerald-100",
  },
  {
    href: "/subjects/gk",
    title: "GK",
    description: "Polity to Current Affairs — deep syllabus coverage with curated lecture series.",
    tag: "Primary focus",
    accent: "from-indigo-50 to-white ring-indigo-200",
    emphasized: true,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">ToThePoint-SSC</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Dashboard
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Minimal workspace for serious SSC CGL prep. Open GK for full topic trees — History and Geography ship
          with structured sub-modules and lecture ladders.
        </p>
      </section>

      <section aria-labelledby="subjects-quick">
        <div className="mb-6">
          <h2 id="subjects-quick" className="text-lg font-semibold tracking-tight text-slate-900">
            Subject library
          </h2>
          <p className="text-sm text-slate-500">Pick a pillar — routing stays fast and predictable.</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {subjects.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg ${s.accent} ${
                  s.emphasized ? "ring-2" : ""
                }`}
              >
                {s.emphasized ? (
                  <span className="absolute right-4 top-4 rounded-full bg-indigo-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                    Featured
                  </span>
                ) : null}
                <span className="inline-flex w-fit rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 ring-1 ring-slate-200/80">
                  {s.tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900 group-hover:text-indigo-900">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600">
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

      <footer className="border-t border-slate-200/80 pt-8 text-center text-xs text-slate-500">
        <Link href="/" className="font-medium text-indigo-600 hover:text-indigo-800">
          Back to homepage
        </Link>
      </footer>
    </div>
  );
}
