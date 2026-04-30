import Link from "next/link";

export default function InsightCard({ tag, title, summary, date, href }) {
  return (
    <article className="card flex h-full flex-col gap-4 border border-outline-variant/30 p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(13,32,59,0.08)]">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-forest-600">
        <span>{tag}</span>
        <span>{date}</span>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{summary}</p>
      </div>
      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
      >
        Read Insight
        <span aria-hidden="true">-&gt;</span>
      </Link>
    </article>
  );
}
