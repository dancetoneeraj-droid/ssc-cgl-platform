"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { useMemo, useState } from "react";
import { auth } from "@/app/firebase";

const primaryNav = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/subjects/mathematics", label: "Mathematics" },
  { href: "/subjects/english", label: "English" },
  { href: "/subjects/reasoning", label: "Reasoning" },
  { href: "/subjects/gk", label: "GK" },
] as const;

function navActive(pathname: string, href: string) {
  if (href === "/dashboard") return pathname === "/dashboard";
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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <button
        type="button"
        aria-label="Close menu"
        className={`fixed inset-0 z-30 bg-slate-900/25 backdrop-blur-[1px] transition-opacity lg:hidden ${
          sidebarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 z-40 flex h-full w-[min(18rem,88vw)] flex-col border-r border-slate-200/80 bg-white shadow-sm transition-transform duration-200 ease-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center gap-3 border-b border-slate-100 px-4 lg:h-16">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-xs font-bold text-white shadow-sm">
            TP
          </div>
          <div className="min-w-0">
            <Link
              href="/dashboard"
              className="truncate text-sm font-semibold tracking-tight text-slate-900 hover:text-indigo-800"
              onClick={() => setSidebarOpen(false)}
            >
              ToThePoint-SSC
            </Link>
            <p className="truncate text-xs text-slate-500">Study workspace</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-3" aria-label="Main">
          <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Subjects
          </p>
          <ul className="space-y-0.5">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-2 rounded-lg px-2 py-2 text-sm transition ${
                    item.active
                      ? "bg-indigo-50 font-semibold text-indigo-900 ring-1 ring-indigo-600/15"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                      item.active ? "bg-indigo-600" : "bg-slate-300"
                    }`}
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-slate-100 p-3">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Log out
          </button>
        </div>
      </aside>

      <div className="lg:pl-[min(18rem,88vw)]">
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
          <div className="flex h-14 items-center justify-between gap-3 px-4 lg:h-16 lg:px-8">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
              <Link href="/dashboard" className="min-w-0 lg:hidden">
                <p className="truncate text-sm font-semibold text-slate-900">ToThePoint-SSC</p>
              </Link>
              <span className="hidden text-sm text-slate-500 lg:inline">SSC CGL — focused preparation</span>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="hidden rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 sm:inline-flex"
            >
              Log out
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-4 py-8 lg:px-8 lg:py-10">{children}</div>
      </div>
    </div>
  );
}
