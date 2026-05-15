import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";

const heroDisplay = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const heroTagline = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const subjects = [
  {
    href: "/subjects/mathematics",
    title: "Mathematics",
    description: "Arithmetic, algebra, geometry, and data interpretation — exam speed drills.",
    tag: "Quant",
    emphasized: false,
  },
  {
    href: "/subjects/english",
    title: "English",
    description: "Grammar, vocabulary, comprehension — accuracy with minimal friction.",
    tag: "Language",
    emphasized: false,
  },
  {
    href: "/subjects/reasoning",
    title: "Reasoning",
    description: "Analytical puzzles, verbal logic, and pattern recognition workflows.",
    tag: "Aptitude",
    emphasized: false,
  },
  {
    href: "/subjects/gk",
    title: "GK",
    description: "Polity to Current Affairs — deep syllabus coverage with curated lecture series.",
    tag: "Primary focus",
    emphasized: true,
  },
];

export function DashboardHome() {
  return (
    <div className="space-y-12">
      <section
        className={`relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-slate-900/85 via-slate-950/92 to-slate-950 px-6 py-10 shadow-[0_0_64px_-24px_rgba(59,130,246,0.42)] backdrop-blur-xl ring-1 ring-white/[0.07] sm:px-10 sm:py-12`}
      >
        <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-blue-500/18 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-blue-600/12 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(59,130,246,0.06),transparent_45%,transparent_65%,rgba(37,99,235,0.05))]" aria-hidden />

        <div className="relative flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:gap-10 sm:text-left">
          <div className="flex w-full shrink-0 justify-center sm:w-auto sm:justify-start">
            <Image
              src="/brand/tothepoint-logo.png"
              alt="To The Point"
              width={288}
              height={120}
              priority
              className="h-[5.25rem] w-auto max-w-[min(100%,17.5rem)] object-contain object-center drop-shadow-[0_0_28px_rgba(59,130,246,0.18)] sm:h-[6.5rem] sm:max-w-[18rem]"
            />
          </div>

          <div className="min-w-0 flex-1 space-y-3">
            <h1
              className={`${heroDisplay.className} text-[2rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[2.5rem] sm:leading-[1.06] lg:text-[2.65rem]`}
            >
              ToThePoint-SSC
            </h1>
            <p
              className={`${heroTagline.className} text-lg font-normal leading-relaxed tracking-[0.02em] text-slate-400 sm:text-xl`}
            >
              Crisp Content • Clear Selection
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="subjects-quick">
        <div className="mb-6">
          <h2 id="subjects-quick" className="text-lg font-semibold tracking-tight text-white">
            Subject library
          </h2>
          <p className="text-sm text-slate-500">Pick a pillar — routing stays fast and predictable.</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {subjects.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-900/50 p-6 shadow-[0_0_40px_-20px_rgba(59,130,246,0.38)] backdrop-blur-sm ring-1 ring-white/[0.04] transition duration-200 hover:-translate-y-0.5 hover:border-blue-400/35 hover:shadow-[0_0_52px_-16px_rgba(59,130,246,0.45)] ${
                  s.emphasized ? "ring-blue-400/25" : ""
                }`}
              >
                {s.emphasized ? (
                  <span className="absolute right-4 top-4 rounded-full border border-blue-400/35 bg-blue-600/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-[0_0_16px_-4px_rgba(59,130,246,0.45)]">
                    Featured
                  </span>
                ) : null}
                <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-semibold text-slate-300">
                  {s.tag}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white transition group-hover:text-blue-100">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{s.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-400">
                  Enter module
                  <span aria-hidden className="transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-white/[0.06] pt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ToThePoint-SSC
      </footer>
    </div>
  );
}
