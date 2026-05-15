import Link from "next/link";

export function PageIntro({ title, description }: { title: string; description: string }) {
  return (
    <header className="mb-8 space-y-2">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">{title}</h1>
      <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">{description}</p>
    </header>
  );
}

const btnPrimary =
  "inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_-8px_var(--accent-glow)] ring-1 ring-blue-400/25 transition hover:bg-blue-500";

export function SubjectLaneCard({ body, href, linkLabel }: { body: string; href: string; linkLabel: string }) {
  return (
    <div className="rounded-3xl border border-blue-500/15 bg-slate-900/50 p-8 shadow-[0_0_40px_-18px_rgba(59,130,246,0.35)] backdrop-blur-sm ring-1 ring-white/[0.04]">
      <p className="text-sm leading-relaxed text-slate-400">{body}</p>
      <Link href={href} className={`${btnPrimary} mt-6`}>
        {linkLabel}
      </Link>
    </div>
  );
}
