export default function InsightCard({ tag, title, summary, date }) {
  return (
    <div className="card flex h-full flex-col gap-4 p-6">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-forest-600">
        <span>{tag}</span>
        <span>{date}</span>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
        <p className="text-sm text-slate-600">{summary}</p>
      </div>
      <button className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-ink-900">
        Read Insight
        <span aria-hidden="true">-&gt;</span>
      </button>
    </div>
  );
}
