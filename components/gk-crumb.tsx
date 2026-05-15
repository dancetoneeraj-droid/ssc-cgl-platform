import Link from "next/link";
import { Fragment } from "react";

export type CrumbSegment = { href: string; label: string };

export function PlatformCrumb({
  segments,
  current,
}: {
  segments: CrumbSegment[];
  current: string;
}) {
  return (
    <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {segments.map((s, i) => (
          <Fragment key={s.href}>
            {i > 0 ? (
              <li aria-hidden className="text-slate-600">
                /
              </li>
            ) : null}
            <li>
              <Link href={s.href} className="font-medium text-blue-400/90 transition hover:text-blue-300">
                {s.label}
              </Link>
            </li>
          </Fragment>
        ))}
        {segments.length > 0 ? (
          <li aria-hidden className="text-slate-600">
            /
          </li>
        ) : null}
        <li className="font-semibold text-slate-200">{current}</li>
      </ol>
    </nav>
  );
}

export function GKCrumb({ current }: { current: string }) {
  return (
    <PlatformCrumb
      segments={[
        { href: "/dashboard", label: "Dashboard" },
        { href: "/subjects/gk", label: "GK" },
      ]}
      current={current}
    />
  );
}
