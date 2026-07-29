import Link from "next/link";
import type { LectureContent } from "@/lib/lectures/types";
import { isFreeLecture } from "@/lib/access-control";
import { youtubeThumbnailUrl } from "@/lib/lectures/youtube";

type LectureGridProps = {
  lectures: LectureContent[];
  getHref: (lecture: LectureContent) => string;
  /** Show large sequence numbers (1, 2, 3…) on thumbnails — used for PYQ prep order. */
  showSequenceNumbers?: boolean;
};

export function LectureGrid({ lectures, getHref, showSequenceNumbers = false }: LectureGridProps) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {lectures.map((lec, index) => {
        const thumb = youtubeThumbnailUrl(lec.youtubeUrl);
        const free = isFreeLecture(index);
        const sequence = index + 1;
        return (
          <li key={lec.id}>
            <Link
              href={getHref(lec)}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-blue-500/18 bg-gradient-to-b from-slate-900/80 to-slate-950 text-left shadow-[0_0_40px_-22px_rgba(59,130,246,0.45)] ring-1 ring-white/[0.04] transition duration-200 hover:-translate-y-0.5 hover:border-blue-400/40 hover:shadow-[0_0_48px_-16px_var(--accent-glow)]"
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
                  <div className="flex h-full items-center justify-center bg-slate-900 text-xs font-medium text-slate-500">
                    Video
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/25 to-transparent" />

                {showSequenceNumbers ? (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span
                      className="select-none font-black leading-none tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
                      style={{ fontSize: "clamp(3.5rem, 18vw, 5.5rem)" }}
                      aria-hidden
                    >
                      {sequence}
                    </span>
                  </div>
                ) : null}

                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                  {showSequenceNumbers ? (
                    <span className="rounded-md border border-white/20 bg-black/50 px-2 py-0.5 text-[11px] font-bold tabular-nums text-white backdrop-blur-sm">
                      #{sequence}
                    </span>
                  ) : null}
                  <span
                    className={`rounded-md border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                      free
                        ? "border-emerald-400/30 bg-emerald-500/15 text-emerald-200"
                        : "border-amber-400/30 bg-amber-500/15 text-amber-200"
                    } ${showSequenceNumbers ? "ml-auto" : ""}`}
                  >
                    {free ? "Free" : "Premium"}
                  </span>
                  {!showSequenceNumbers ? (
                    <span className="text-[11px] font-medium text-slate-400">SSC CGL</span>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                {showSequenceNumbers ? (
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400/90">
                    Lecture {sequence}
                  </p>
                ) : null}
                <h2 className={`font-semibold tracking-tight text-white transition group-hover:text-blue-100 ${showSequenceNumbers ? "mt-1 text-base" : "text-base"}`}>
                  {lec.title}
                </h2>
                {lec.summary ? (
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-400">{lec.summary}</p>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Open for embedded class, PDF notes, and mind map.
                  </p>
                )}
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400/95">
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
