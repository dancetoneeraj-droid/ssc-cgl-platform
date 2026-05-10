import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HISTORY_PERIODS, getHistoryPeriod } from "@/lib/gk-routes";
import { PlatformCrumb } from "@/components/gk-crumb";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return HISTORY_PERIODS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const period = getHistoryPeriod(slug);
  if (!period) return { title: "History · ToThePoint-SSC" };
  return { title: `${period.title} · ToThePoint-SSC` };
}

export default async function HistoryPeriodPage({ params }: Props) {
  const { slug } = await params;
  const period = getHistoryPeriod(slug);
  if (!period) notFound();

  return (
    <>
      <PlatformCrumb
        segments={[
          { href: "/dashboard", label: "Dashboard" },
          { href: "/subjects/gk", label: "GK" },
          { href: "/subjects/gk/history", label: "History" },
        ]}
        current={period.title}
      />
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{period.title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">{period.description}</p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li>
          <article className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-lg bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-800 ring-1 ring-indigo-600/10">
                Lecture 1
              </span>
              <span className="text-xs font-medium text-slate-400">SSC CGL</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Lecture 1</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              {period.title} — concise coverage, PYQ-aligned framing, rapid revision notes.
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-black">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/LfeIv5C4wEE"
                  title={`${period.title} Lecture 1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </article>
        </li>

        {[2, 3].map((n) => (
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
                {period.title} — concise coverage, PYQ-aligned framing, rapid revision notes.
              </p>
              <div className="mt-5 rounded-xl border border-dashed border-slate-200 bg-slate-50/80 px-3 py-2.5 text-center text-xs font-medium text-slate-500">
                Video placeholder — publisher pipeline next
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
