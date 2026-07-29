import Link from "next/link";

type NavCardProps = {
  href?: string;
  title: string;
  description: string;
  meta?: string;
  disabled?: boolean;
};

export function NavCard({ href, title, description, meta, disabled }: NavCardProps) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-base font-semibold tracking-tight text-white transition group-hover:text-blue-200">{title}</h2>
        {meta ? (
          <span
            className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
              disabled
                ? "border-slate-600/40 bg-slate-800/60 text-slate-400"
                : "border-blue-500/20 bg-blue-500/10 text-blue-200/90"
            }`}
          >
            {meta}
          </span>
        ) : null}
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{description}</p>
      {!disabled ? (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-400/95">
          Open
          <span aria-hidden className="transition group-hover:translate-x-0.5">
            →
          </span>
        </span>
      ) : (
        <span className="mt-4 text-sm font-medium text-slate-500">Available soon</span>
      )}
    </>
  );

  if (disabled || !href) {
    return (
      <li>
        <div className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-slate-900/30 p-5 opacity-75 ring-1 ring-white/[0.03]">
          {inner}
        </div>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={href}
        className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-slate-900/45 p-5 shadow-[0_0_36px_-20px_rgba(59,130,246,0.35)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-400/35 hover:shadow-[0_0_44px_-14px_var(--accent-glow)] ring-1 ring-white/[0.04]"
      >
        {inner}
      </Link>
    </li>
  );
}
