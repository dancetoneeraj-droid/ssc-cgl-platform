"use client";

import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/app/firebase";
import { ACCESS_PRICING, isFreeLecture, type ContentTrack } from "@/lib/access-control";
import { hasTrackAccess } from "@/lib/approved-emails";
import type { AdjacentLectureLink } from "@/lib/lectures";
import type { LectureContent } from "@/lib/lectures/types";
import { LectureDetailPanel } from "@/components/lecture-detail-panel";

type LectureAccessGateProps = {
  track: ContentTrack;
  lectureIndex: number;
  lecture: LectureContent;
  adjacent?: { prev: AdjacentLectureLink | null; next: AdjacentLectureLink | null } | null;
};

export function LectureAccessGate({ track, lectureIndex, lecture, adjacent }: LectureAccessGateProps) {
  const [email, setEmail] = useState<string | null>(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setEmail(user?.email ?? null);
      setAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  const free = isFreeLecture(lectureIndex);
  const pricing = ACCESS_PRICING[track];

  if (!authReady) {
    return (
      <div className="rounded-3xl border border-white/10 bg-slate-900/50 px-6 py-12 text-center text-sm text-slate-400">
        Loading lecture…
      </div>
    );
  }

  if (free || hasTrackAccess(track, email)) {
    return <LectureDetailPanel lecture={lecture} adjacent={adjacent} />;
  }

  const loginNext = typeof window !== "undefined" ? window.location.pathname : "/";
  const loginHref = `/login?next=${encodeURIComponent(loginNext)}`;

  if (!email) {
    return (
      <PaywallPanel
        lecture={lecture}
        title="Sign in to continue"
        description={`The first lecture in every section is free. This one is part of ${pricing.label} (₹${pricing.amount}). Sign in with Google, then contact us after payment to unlock.`}
        primaryHref={loginHref}
        primaryLabel="Sign in with Google"
      />
    );
  }

  return (
    <PaywallPanel
      lecture={lecture}
      title={`${pricing.label} access required`}
      description={`You're signed in as ${email}. ${pricing.label} costs ₹${pricing.amount}. Pay manually and we'll add your email to the access list.`}
      primaryHref="tel:+917976395900"
      primaryLabel="Call to get access"
      secondaryHref={loginHref}
      secondaryLabel="Use a different account"
    />
  );
}

function PaywallPanel({
  lecture,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  lecture: LectureContent;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const isExternal = primaryHref.startsWith("tel:") || primaryHref.startsWith("http");

  return (
    <article className="overflow-hidden rounded-3xl border border-amber-500/25 bg-gradient-to-b from-slate-900/90 via-slate-950 to-black shadow-[0_0_60px_-20px_rgba(245,158,11,0.25)] ring-1 ring-white/[0.05]">
      <div className="border-b border-white/[0.06] px-5 py-5 sm:px-8 sm:py-7">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-200">
          <LockIcon />
          Premium lecture
        </div>
        <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{lecture.title}</h1>
        {lecture.summary ? (
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">{lecture.summary}</p>
        ) : null}
      </div>

      <div className="space-y-6 px-5 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-8">
        <div className="rounded-2xl border border-dashed border-amber-500/30 bg-slate-900/60 px-6 py-10 text-center">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-400">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {isExternal ? (
              <a
                href={primaryHref}
                className="inline-flex items-center justify-center rounded-2xl border border-amber-400/35 bg-amber-500/15 px-6 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-500/25"
              >
                {primaryLabel}
              </a>
            ) : (
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center rounded-2xl border border-blue-400/35 bg-blue-600/20 px-6 py-3 text-sm font-semibold text-blue-100 transition hover:bg-blue-600/30"
              >
                {primaryLabel}
              </Link>
            )}
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-white/20 hover:text-white"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Contact:{" "}
            <a href="tel:+917976395900" className="font-medium text-slate-400 hover:text-slate-300">
              7976395900
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}

function LockIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 0 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  );
}
