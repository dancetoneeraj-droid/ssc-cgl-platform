import type { LectureContent } from "@/lib/lectures/types";
import { toYouTubeEmbedSrc } from "@/lib/lectures/youtube";

const externalRel = "noopener noreferrer";

export function LectureDetailPanel({ lecture }: { lecture: LectureContent }) {
  const embedSrc = toYouTubeEmbedSrc(lecture.youtubeUrl);

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-800/90 bg-gradient-to-b from-slate-900 via-slate-950 to-black shadow-2xl shadow-black/40 ring-1 ring-white/5">
      <div className="border-b border-slate-800/80 px-5 py-5 sm:px-8 sm:py-6">
        <h1 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">{lecture.title}</h1>
        {lecture.summary ? <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">{lecture.summary}</p> : null}
      </div>

      <div className="px-5 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-6">
        {embedSrc ? (
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-black shadow-inner">
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
          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 px-4 py-8 text-center text-sm text-slate-400">
            This lecture&apos;s video URL could not be parsed. Update{" "}
            <code className="rounded bg-slate-800 px-1.5 py-0.5 text-xs text-slate-200">youtubeUrl</code> in the
            catalog.
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
          <a
            href={lecture.pdfUrl}
            target="_blank"
            rel={externalRel}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700/90 bg-slate-800/60 px-5 py-3.5 text-sm font-semibold text-slate-100 shadow-sm transition hover:border-amber-400/50 hover:bg-slate-800 hover:text-amber-50"
          >
            <PdfGlyph />
            PDF Notes
          </a>
          <a
            href={lecture.mindMapUrl}
            target="_blank"
            rel={externalRel}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-amber-500/35 bg-amber-500/10 px-5 py-3.5 text-sm font-semibold text-amber-100 shadow-sm transition hover:border-amber-400/60 hover:bg-amber-500/15"
          >
            <MapGlyph />
            Mind Map
          </a>
        </div>
      </div>
    </article>
  );
}

function PdfGlyph() {
  return (
    <svg className="h-5 w-5 shrink-0 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
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
    <svg className="h-5 w-5 shrink-0 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6.75V15m6-6v8.25m.503-15.672 1.5-1.5a1.125 1.125 0 0 1 1.998.918v13.218a1.125 1.125 0 0 1-1.607 1.022l-2.503-1.25a4.5 4.5 0 0 0-4.022 0l-1.501.75a1.125 1.125 0 0 1-1.998-.918V5.118a1.125 1.125 0 0 1 1.607-1.022l2.503 1.25a4.5 4.5 0 0 0 4.022 0Z"
      />
    </svg>
  );
}
