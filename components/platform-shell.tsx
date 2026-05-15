"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { useMemo, useState } from "react";
import { auth } from "@/app/firebase";

const primaryNav = [
  { href: "/", label: "Dashboard" },
  { href: "/subjects/mathematics", label: "Mathematics" },
  { href: "/subjects/english", label: "English" },
  { href: "/subjects/reasoning", label: "Reasoning" },
  { href: "/subjects/gk", label: "GK" },
] as const;

function navActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname === "/dashboard";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PlatformShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = useMemo(
    () =>
      primaryNav.map((item) => ({
        ...item,
        active: navActive(pathname, item.href),
      })),
    [pathname],
  );

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <button
        type="button"
        aria-label="Close menu"
        className={`fixed inset-0 z-30 bg-black/55 backdrop-blur-[2px] transition-opacity lg:hidden ${
          sidebarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 z-40 flex h-full w-[min(18rem,88vw)] flex-col border-r border-white/[0.06] bg-slate-950/85 shadow-[4px_0_48px_-12px_rgba(0,0,0,0.75)] backdrop-blur-xl transition-transform duration-200 ease-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center gap-3 border-b border-white/[0.06] px-4 lg:h-16">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-xs font-bold text-white shadow-[0_0_20px_-4px_var(--accent-glow)] ring-1 ring-blue-400/25">
            TP
          </div>
          <div className="min-w-0">
            <Link
              href="/"
              className="truncate text-sm font-semibold tracking-tight text-white transition hover:text-blue-300"
              onClick={() => setSidebarOpen(false)}
            >
              ToThePoint-SSC
            </Link>
            <p className="truncate text-xs text-slate-500">SSC CGL workspace</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-3" aria-label="Main">
          <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Subjects</p>
          <ul className="space-y-0.5">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-2 rounded-xl px-2.5 py-2.5 text-sm transition-colors duration-200 ${
                    item.active
                      ? "bg-blue-600/14 font-semibold text-blue-200 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.35)] ring-1 ring-blue-400/25"
                      : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full transition ${
                      item.active ? "bg-blue-400 shadow-[0_0_8px_2px_rgba(59,130,246,0.5)]" : "bg-slate-600"
                    }`}
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-white/[0.06] px-3 py-3">
          <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Contact us</p>
          <a
            href="tel:+917976395900"
            className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-900/50 px-3 py-2.5 text-sm transition hover:border-blue-500/25 hover:bg-slate-900/80"
          >
            <span className="text-slate-500">Phone</span>
            <span className="tabular-nums font-medium tracking-tight text-slate-200">7976395900</span>
          </a>
        </div>

        <div className="border-t border-white/[0.06] p-3">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:border-blue-500/25 hover:bg-slate-900 hover:text-white"
          >
            Log out
          </button>
        </div>
      </aside>

      <div className="lg:pl-[min(18rem,88vw)]">
        <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-slate-950/80 backdrop-blur-xl">
          <div className="flex h-14 items-center justify-between gap-3 px-4 lg:h-16 lg:px-8">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/70 text-slate-200 shadow-sm lg:hidden"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
              <Link href="/" className="min-w-0 lg:hidden">
                <p className="truncate text-sm font-semibold text-white">ToThePoint-SSC</p>
              </Link>
              <span className="hidden text-sm text-slate-500 lg:inline">
                Focused prep · calm interface · fast routing
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="tel:+917976395900"
                className="hidden tabular-nums text-sm font-medium text-slate-400 transition hover:text-slate-200 sm:inline"
                aria-label="Contact us, 7976395900"
              >
                7976395900
              </a>
              <button
                type="button"
                onClick={handleLogout}
                className="hidden rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500/25 hover:text-white sm:inline-flex"
              >
                Log out
              </button>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4 py-8 lg:px-8 lg:py-10">{children}</div>
      </div>
    </div>
  );
}
