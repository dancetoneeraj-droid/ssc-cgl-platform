import Link from "next/link";

type NavCardProps = {
  href: string;
  title: string;
  description: string;
  meta?: string;
};

export function NavCard({ href, title, description, meta }: NavCardProps) {
  return (
    <li>
      <Link
        href={href}
        className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
      >
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-base font-semibold tracking-tight text-slate-900 group-hover:text-indigo-800">
            {title}
          </h2>
          {meta ? (
            <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
              {meta}
            </span>
          ) : null}
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600">
          Open
          <span aria-hidden className="transition group-hover:translate-x-0.5">
            →
          </span>
        </span>
      </Link>
    </li>
  );
}
