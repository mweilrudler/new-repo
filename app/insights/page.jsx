import Link from "next/link";
import InsightCard from "../../components/InsightCard.jsx";
import { insights } from "./insights-data.js";

export const metadata = {
  title: "Insights",
  description:
    "Articles, guides, and updates from Rudler's tax, assurance, valuation, and advisory professionals.",
};

export default function Insights() {
  const [featuredInsight, ...latestInsights] = insights;

  return (
    <div>
      <section className="border-b border-slate-200/70 bg-white">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6 reveal">
            <p className="section-kicker">Insights</p>
            <h1 className="font-headline text-4xl font-semibold leading-tight text-ink-900 md:text-6xl">
              Thought leadership for leaders who want clarity.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
              Articles, guides, and updates from our tax, assurance, valuation,
              and advisory specialists.
            </p>
          </div>

          <article className="overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-[0_20px_40px_rgba(13,32,59,0.08)] reveal reveal-delay-1">
            <div className="aspect-[16/9] overflow-hidden bg-surface-container-high">
              {featuredInsight.heroImageSrc ? (
                <img
                  src={featuredInsight.heroImageSrc}
                  alt={featuredInsight.heroImageAlt}
                  className="h-full w-full object-cover grayscale-[10%] contrast-[1.05]"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-primary">
                  <span className="px-6 text-center font-headline text-3xl font-semibold text-white md:text-4xl">
                    Rudler Review
                  </span>
                </div>
              )}
            </div>
            <div className="space-y-4 p-6 md:p-8">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                <span>{featuredInsight.tag}</span>
                <span>{featuredInsight.date}</span>
              </div>
              <h2 className="font-headline text-3xl font-semibold leading-tight text-ink-900">
                {featuredInsight.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                {featuredInsight.summary}
              </p>
              <Link
                href={`/insights/${featuredInsight.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                Read the Featured Insight <span aria-hidden="true">-&gt;</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {latestInsights.length > 0 && (
        <section className="container-page py-16">
          <div className="mb-10 max-w-3xl reveal">
            <p className="section-kicker">Latest Thinking</p>
            <h2 className="section-title">Practical guidance for what comes next.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 reveal reveal-delay-1">
            {latestInsights.map((insight) => (
              <InsightCard
                key={insight.slug}
                {...insight}
                href={`/insights/${insight.slug}`}
              />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
