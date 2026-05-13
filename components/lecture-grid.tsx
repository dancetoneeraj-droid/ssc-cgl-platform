import Link from "next/link";
import type { LectureContent } from "@/lib/lectures/types";
import { youtubeThumbnailUrl } from "@/lib/lectures/youtube";

type LectureGridProps = {
  lectures: LectureContent[];
  getHref: (lecture: LectureContent) => string;
};

export function LectureGrid({ lectures, getHref }: LectureGridProps) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {lectures.map((lec) => {
        const thumb = youtubeThumbnailUrl(lec.youtubeUrl);
        return (
          <li key={lec.id}>
            <Link
              href={getHref(lec)}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/90 bg-gradient-to-b from-slate-900 to-slate-950 text-left shadow-lg shadow-black/35 ring-1 ring-white/5 transition duration-200 hover:-translate-y-0.5 hover:border-amber-400/40 hover:ring-amber-400/15"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                {thumb ? (
                  // eslint-disable-next-line @next/next/no-img-element -- lightweight poster; no next/image remotePatterns for arbitrary CDNs
                  <img
                    src={thumb}
                    alt={`${lec.title} thumbnail`}
                    className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-slate-800 text-xs font-medium text-slate-400">
                    Video
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                  <span className="rounded-md bg-amber-400/15 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-200 ring-1 ring-amber-400/25">
                    Lecture
                  </span>
                  <span className="text-[11px] font-medium text-slate-300">SSC CGL</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-base font-semibold tracking-tight text-slate-50 transition group-hover:text-amber-50">
                  {lec.title}
                </h2>
                {lec.summary ? (
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-400">{lec.summary}</p>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Open for embedded class, PDF notes, and mind map.
                  </p>
                )}
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300/95">
                  Open lecture
                  <span aria-hidden className="translate-x-0 transition group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
