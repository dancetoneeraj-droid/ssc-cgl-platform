type LectureSeriesProps = {
  /** Shown in each card subtitle for context */
  context: string;
};

export function LectureSeries({ context }: LectureSeriesProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((n) => (
        <li key={n}>
          <article className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-lg bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-800 ring-1 ring-indigo-600/10">
                Lecture {n}
              </span>
              <span className="text-xs font-medium text-slate-400">SSC CGL</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Lecture {n}</h3>
            <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-600">
              {context} — concise coverage, PYQ-aligned framing, rapid revision notes.
            </p>
            <div className="mt-5 rounded-xl border border-dashed border-slate-200 bg-slate-50/80 px-3 py-2.5 text-center text-xs font-medium text-slate-500">
              Video placeholder — publisher pipeline next
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
