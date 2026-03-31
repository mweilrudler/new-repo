export default function NewsletterSignup() {
  return (
    <section className="card overflow-hidden">
      <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <p className="section-kicker">Thought Leadership</p>
          <h2 className="text-2xl font-semibold text-ink-900">
            Subscribe for practical guidance on growth, tax strategy, and risk
            management.
          </h2>
          <p className="text-sm text-slate-600">
            Monthly insights curated by our advisory and assurance teams. No
            spam, just actionable updates.
          </p>
        </div>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
          />
          <input
            type="email"
            placeholder="Work email"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
          />
          <button type="submit" className="btn-primary w-full">
            Join the Briefing
          </button>
          <p className="text-xs text-slate-500">
            By subscribing, you agree to receive occasional insights from Rudler.
          </p>
        </form>
      </div>
    </section>
  );
}
