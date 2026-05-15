import Link from "next/link";
import type { AdjacentLectureLink } from "@/lib/lectures";
import type { LectureContent } from "@/lib/lectures/types";
import { toYouTubeEmbedSrc } from "@/lib/lectures/youtube";

const externalRel = "noopener noreferrer";

type LectureDetailPanelProps = {
  lecture: LectureContent;
  adjacent?: { prev: AdjacentLectureLink | null; next: AdjacentLectureLink | null } | null;
};

export function LectureDetailPanel({ lecture, adjacent }: LectureDetailPanelProps) {
  const embedSrc = toYouTubeEmbedSrc(lecture.youtubeUrl);

  return (
    <article className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-b from-slate-900/90 via-slate-950 to-black shadow-[0_0_60px_-20px_var(--accent-glow)] ring-1 ring-white/[0.05]">
      <div className="border-b border-white/[0.06] px-5 py-5 sm:px-8 sm:py-7">
        <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{lecture.title}</h1>
        {lecture.summary ? (
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">{lecture.summary}</p>
        ) : null}
      </div>

      <div className="space-y-8 px-5 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-8">
        {embedSrc ? (
          <div className="overflow-hidden rounded-2xl border border-blue-500/25 bg-black shadow-[0_0_40px_-12px_var(--accent-glow)] ring-1 ring-blue-400/15">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={embedSrc}
                title={lecture.title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-blue-500/25 bg-slate-900/50 px-4 py-8 text-center text-sm text-slate-400">
            This lecture&apos;s video URL could not be parsed. Update{" "}
            <code className="rounded-lg bg-slate-800 px-1.5 py-0.5 text-xs text-slate-200">youtubeUrl</code> in the
            catalog.
          </div>
        )}

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Materials</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            <li>
              <a
                href={lecture.pdfUrl}
                target="_blank"
                rel={externalRel}
                className="group flex h-full flex-col rounded-2xl border border-blue-500/18 bg-slate-900/50 p-5 shadow-[0_0_32px_-14px_var(--accent-glow)] backdrop-blur-sm transition duration-200 hover:border-blue-400/45 hover:bg-slate-900/75 hover:shadow-[0_0_42px_-10px_var(--accent-glow)] ring-1 ring-white/[0.04]"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/12 text-blue-300 ring-1 ring-blue-400/25 transition group-hover:bg-blue-500/20">
                    <PdfGlyph />
                  </span>
                  <span>
                    <span className="block text-base font-semibold text-white">PDF Notes</span>
                    <span className="mt-0.5 block text-xs text-slate-500">Opens in a new tab</span>
                  </span>
                </span>
                <span className="mt-4 text-sm font-semibold text-blue-300 transition group-hover:text-blue-200">
                  Open PDF →
                </span>
              </a>
            </li>
            {lecture.mindMapUrl ? (
              <li>
                <a
                  href={lecture.mindMapUrl}
                  target="_blank"
                  rel={externalRel}
                  className="group flex h-full flex-col rounded-2xl border border-blue-500/18 bg-slate-900/50 p-5 shadow-[0_0_32px_-14px_var(--accent-glow)] backdrop-blur-sm transition duration-200 hover:border-blue-400/45 hover:bg-slate-900/75 hover:shadow-[0_0_42px_-10px_var(--accent-glow)] ring-1 ring-white/[0.04]"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/12 text-blue-300 ring-1 ring-blue-400/25 transition group-hover:bg-blue-500/20">
                      <MapGlyph />
                    </span>
                    <span>
                      <span className="block text-base font-semibold text-white">Mind map</span>
                      <span className="mt-0.5 block text-xs text-slate-500">Visual recall layout</span>
                    </span>
                  </span>
                  <span className="mt-4 text-sm font-semibold text-blue-300 transition group-hover:text-blue-200">
                    Open mind map →
                  </span>
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        {adjacent && (adjacent.prev || adjacent.next) ? (
          <nav
            className="flex flex-col gap-3 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-stretch sm:justify-between sm:gap-4"
            aria-label="Lecture navigation"
          >
            {adjacent.prev ? (
              <Link
                href={adjacent.prev.href}
                className="group flex flex-1 flex-col rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-4 text-left transition duration-200 hover:border-blue-500/30 hover:bg-slate-900/70 sm:max-w-md"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Previous</span>
                <span className="mt-1 flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="text-blue-400 transition group-hover:-translate-x-0.5" aria-hidden>
                    ←
                  </span>
                  <span className="line-clamp-2">{adjacent.prev.title}</span>
                </span>
              </Link>
            ) : (
              <div className="hidden flex-1 sm:block" />
            )}
            {adjacent.next ? (
              <Link
                href={adjacent.next.href}
                className="group flex flex-1 flex-col rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-4 text-left transition duration-200 hover:border-blue-500/30 hover:bg-slate-900/70 sm:max-w-md sm:text-right"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 sm:ml-auto">Next</span>
                <span className="mt-1 flex items-center justify-end gap-2 text-sm font-semibold text-white sm:flex-row-reverse">
                  <span className="line-clamp-2 sm:text-right">{adjacent.next.title}</span>
                  <span className="text-blue-400 transition group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </span>
              </Link>
            ) : null}
          </nav>
        ) : null}
      </div>
    </article>
  );
}

function PdfGlyph() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 18H15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 15 4.5h-4.5A2.25 2.25 0 0 0 8.25 6.75v12A2.25 2.25 0 0 0 10.5 21Z"
      />
    </svg>
  );
}

function MapGlyph() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6.75V15m6-6v8.25m.503-15.672 1.5-1.5a1.125 1.125 0 0 1 1.998.918v13.218a1.125 1.125 0 0 1-1.607 1.022l-2.503-1.25a4.5 4.5 0 0 0-4.022 0l-1.501.75a1.125 1.125 0 0 1-1.998-.918V5.118a1.125 1.125 0 0 1 1.607-1.022l2.503 1.25a4.5 4.5 0 0 0 4.022 0Z"
      />
    </svg>
  );
}
