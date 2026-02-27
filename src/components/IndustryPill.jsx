export default function IndustryPill({ label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-ink-900">
        {label.slice(0, 1)}
      </span>
      <span>{label}</span>
    </div>
  );
}
