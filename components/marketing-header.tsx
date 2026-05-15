"use client";

import Link from "next/link";
import { useState } from "react";

const navLinkClass =
  "text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-blue-400";

export function MarketingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
          <Link href="/" className="group flex shrink-0 items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-xs font-bold text-white shadow-[0_0_20px_-4px_var(--accent-glow)] ring-1 ring-blue-400/30">
              TP
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">
              ToThePoint<span className="text-blue-400">-SSC</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Marketing">
            <a href="#pillars" className={navLinkClass}>
              Subject arcs
            </a>
            <Link href="/login" className={navLinkClass}>
              Sign in
            </Link>
            <Link
              href="/login"
              className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_-6px_var(--accent-glow)] ring-1 ring-blue-400/25 transition hover:bg-blue-500"
            >
              Start learning
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/login"
              className="rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-md ring-1 ring-blue-400/20"
            >
              Start
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-200 backdrop-blur transition hover:border-blue-500/30 hover:text-white"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`border-t border-white/[0.06] bg-slate-950/95 backdrop-blur-xl transition-all duration-200 md:hidden ${
            menuOpen ? "max-h-48 opacity-100" : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile marketing">
            <a
              href="#pillars"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Subject arcs
            </a>
            <Link
              href="/login"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Sign in
            </Link>
          </nav>
        </div>
      </header>
      {menuOpen ? (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[1px] md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </>
  );
}
