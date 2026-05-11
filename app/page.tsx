import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
            ToThePoint<span className="text-indigo-600">-SSC</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
            <a href="#pillars" className="transition hover:text-indigo-700">
              Subjects
            </a>
            <Link href="/login" className="transition hover:text-indigo-700">
              Sign in
            </Link>
            <Link
              href="/dashboard"
              className="rounded-xl bg-indigo-600 px-4 py-2 text-white shadow-sm transition hover:bg-indigo-700"
            >
              Classroom
            </Link>
          </nav>
          <Link
            href="/dashboard"
            className="rounded-xl bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-sm sm:hidden"
          >
            Study
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-slate-200/70 bg-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(79,70,229,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(14,165,233,0.08),transparent_45%)]" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.05fr_minmax(0,0.95fr)] lg:items-center lg:py-24 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">SSC CGL coaching</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.1]">
                ToThePoint<span className="text-indigo-600">-SSC</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Razor-sharp syllabus mapping, disciplined lecture ladders, zero clutter UI — built so you revise faster
                between shifts, not fight the interface.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  Start learning
                </Link>
                <Link
                  href="/subjects/gk"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-800"
                >
                  Browse GK syllabus
                </Link>
              </div>
              <dl className="mt-14 grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Subjects</dt>
                  <dd className="mt-2 text-xl font-semibold text-slate-900">Four pillars</dd>
                  <dd className="mt-1 text-xs text-slate-500">Mathematics · English · Reasoning · GK</dd>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">GK depth</dt>
                  <dd className="mt-2 text-xl font-semibold text-slate-900">Eight lanes</dd>
                  <dd className="mt-1 text-xs text-slate-500">History & Geography expand into exam maps</dd>
                </div>
    gid            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">Design</dt>
                  <dd className="mt-2 text-xl font-semibold text-slate-900">Quiet UI</dd>
                  <dd className="mt-1 text-xs text-slate-500">Fast shells, restrained colour, tactile cards</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-8 shadow-xl shadow-indigo-100/70">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xs font-bold text-indigo-600 shadow-sm ring-1 ring-indigo-100">
                  TP
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-800/80">Classroom pulse</p>
                  <p className="text-sm font-medium text-slate-700">Weekly releases · crisp notes</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                {["GK mapped with nested routes", "Lecture ladders per topic cluster", "Google sign-in continuity"].map(
                  (copy) => (
                    <div
                      key={copy}
                      className="rounded-2xl border border-white/80 bg-white/90 p-4 text-sm font-medium text-slate-700 shadow-sm"
                    >
                      {copy}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="pillars" className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-20">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Main subject arcs</h2>
            <p className="mt-2 text-sm text-slate-600 lg:max-w-2xl">
              Each lane opens inside the authenticated workspace — GK receives the richest routing structure right now.
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
                  href="/dashboard"
                  className={`group flex h-full flex-col rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg ${
                    item.highlight ? "ring-2 ring-indigo-100" : ""
                  }`}
                >
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-indigo-800">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.body}</p>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-indigo-600">Open dashboard</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <footer className="border-t border-slate-200/80 bg-white py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-xs text-slate-500 sm:flex-row sm:text-left lg:px-8">
            <p>© {new Date().getFullYear()} ToThePoint-SSC · SSC CGL preparation.</p>
            <div className="flex flex-wrap gap-4 text-slate-500">
              <Link href="/login" className="hover:text-indigo-700">
                Sign in
              </Link>
              <a href="https://wa.me/7976395900" target="_blank" rel="noopener noreferrer" className="hover:text-green-700">
                WhatsApp
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
