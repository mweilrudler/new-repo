import Link from "next/link";
import { notFound } from "next/navigation";
import InsightCard from "../../../components/InsightCard.jsx";
import {
  getInsightBySlug,
  getRelatedInsights,
  insights,
} from "../insights-data.js";

function normalizeClosing(closing) {
  if (Array.isArray(closing)) return closing;
  if (closing) return [{ body: [closing] }];
  return [];
}

function normalizeImage(image) {
  if (!image) return null;
  if (typeof image === "string") {
    const fileName = image.split("/").pop() || "Rudler advisor";
    const alt = fileName.replace(/\.[^/.]+$/, "");

    return {
      src: image,
      alt,
    };
  }
  return image;
}

function ArticleBodyBlock({ block }) {
  if (!block) return null;

  if (typeof block === "string") {
    return (
      <p className="text-base leading-8 text-on-surface-variant md:text-lg">
        {block}
      </p>
    );
  }

  if (block.type === "list" || block.items) {
    return (
      <ul className="space-y-3 rounded-xl border border-outline-variant/30 bg-white p-6">
        {(block.items || []).filter(Boolean).map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-slate-600 md:text-base"
          >
            <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

function InsightClosing({ closing }) {
  const closingBlocks = normalizeClosing(closing);

  if (closingBlocks.length === 0) return null;

  return (
    <section className="border-t border-slate-200 bg-white py-12 md:py-16">
      <div className="container-page space-y-14">
        {closingBlocks.map((closingBlock, index) => {
          const body = Array.isArray(closingBlock.body)
            ? closingBlock.body.filter(Boolean)
            : [closingBlock.body].filter(Boolean);
          const images = (closingBlock.images || [])
            .map(normalizeImage)
            .filter(Boolean);

          return (
            <div
              key={closingBlock.heading || index}
              className="reveal"
            >
              {closingBlock.heading && (
                <h2 className="text-2xl font-medium leading-tight text-slate-600 md:text-3xl">
                  {closingBlock.heading}
                </h2>
              )}

              <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-start">
                <div className="space-y-5">
                  {body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-7 text-slate-600"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {images.length > 0 && (
                  <div className="flex flex-wrap gap-8 md:justify-start">
                    {images.map((image) => (
                      <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt || "Rudler advisor"}
                        className="h-[150px] w-[114px] rounded-sm object-cover object-top"
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return {
      title: "Insight",
    };
  }

  return {
    title: insight.title,
    description: insight.summary,
    openGraph: {
      title: insight.title,
      description: insight.summary,
      type: "article",
      ...(insight.heroImageSrc
        ? {
            images: [
              {
                url: insight.heroImageSrc,
                alt: insight.heroImageAlt,
              },
            ],
          }
        : {}),
    },
  };
}

export default async function InsightStoryPage({ params }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const relatedInsights = getRelatedInsights(insight.slug, 3);
  const takeaways = (insight.takeaways || []).filter(Boolean);
  const hasHeroImage = Boolean(insight.heroImageSrc);

  return (
    <div>
      <section className="border-b border-slate-200/70 bg-surface-container-low">
        <div className="container-page py-12 md:py-16">
          <Link
            href="/insights"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            <span aria-hidden="true">&lt;-</span> Back to Insights
          </Link>

          <div
            className={`grid gap-10 lg:items-start ${
              takeaways.length > 0
                ? "lg:grid-cols-[minmax(0,0.72fr)_minmax(300px,0.28fr)]"
                : ""
            }`}
          >
            <div className="max-w-4xl space-y-6 reveal">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                <span>{insight.tag}</span>
                <span>{insight.date}</span>
                <span>{insight.readTime}</span>
              </div>
              <h1 className="font-body text-4xl font-semibold leading-tight text-on-surface md:text-6xl lg:text-[4.5rem]">
                {insight.title}
              </h1>
              <p className="max-w-3xl text-xl leading-relaxed text-on-surface-variant">
                {insight.summary}
              </p>
              <div className="flex flex-wrap items-center gap-3 border-t border-outline-variant/50 pt-5 text-sm text-slate-600">
                <span className="font-semibold text-ink-900">
                  {insight.author}
                </span>
                <span aria-hidden="true">|</span>
                <span>{insight.authorTitle}</span>
              </div>
            </div>

            {takeaways.length > 0 && (
              <aside className="rounded-xl border border-outline-variant/30 bg-white p-6 shadow-sm reveal reveal-delay-1">
                <p className="section-kicker">Key Takeaways</p>
                <ul className="space-y-4">
                  {takeaways.map((takeaway) => (
                    <li
                      key={takeaway}
                      className="flex gap-3 text-sm leading-relaxed text-slate-600"
                    >
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </div>
      </section>

      {hasHeroImage && (
        <section className="container-page py-10 md:py-14">
          <div className="overflow-hidden rounded-xl bg-surface-container-high shadow-[0_20px_40px_rgba(13,32,59,0.08)] reveal">
            <div className="aspect-[16/9] md:aspect-[21/8]">
              <img
                src={insight.heroImageSrc}
                alt={insight.heroImageAlt}
                className="h-full w-full object-cover grayscale-[12%] contrast-[1.05]"
              />
            </div>
          </div>
        </section>
      )}

      <section
        className={`container-page ${
          hasHeroImage ? "pb-16 md:pb-24" : "py-16 md:py-24"
        }`}
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,760px)_minmax(280px,1fr)] lg:items-start">
          <article className="space-y-10 reveal">
            <div className="space-y-5 border-b border-outline-variant/40 pb-10">
              {insight.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-8 text-on-surface-variant"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {insight.sections.map((section) => (
              <section key={section.heading} className="space-y-5">
                <h2 className="font-body text-3xl font-semibold leading-tight text-ink-900 md:text-4xl">
                  {section.heading}
                </h2>
                {section.body.map((block, blockIndex) => (
                  <ArticleBodyBlock
                    key={
                      typeof block === "string"
                        ? block
                        : `${section.heading || "section"}-${blockIndex}`
                    }
                    block={block}
                  />
                ))}
                {section.list && (
                  <ul className="space-y-3 rounded-xl border border-outline-variant/30 bg-white p-6">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-slate-600 md:text-base"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-48 reveal reveal-delay-1">
            <div className="rounded-xl bg-primary p-6 text-white shadow-sm">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-secondary-fixed">
                Talk With Rudler
              </p>
              <h2 className="font-body text-2xl font-semibold leading-tight">
                Need guidance tied to your business?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Connect with our team for practical tax, assurance, valuation,
                and advisory support.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-secondary-fixed"
              >
                Schedule a Consultation
              </Link>
            </div>

            <div className="rounded-xl border border-outline-variant/30 bg-white p-6 shadow-sm">
              <p className="section-kicker">Explore Services</p>
              <div className="space-y-3 text-sm font-semibold">
                <Link
                  href="/services/tax"
                  className="block text-on-surface-variant transition hover:text-primary"
                >
                  Tax Services
                </Link>
                <Link
                  href="/services/audit-and-assurance"
                  className="block text-on-surface-variant transition hover:text-primary"
                >
                  Audit & Assurance
                </Link>
                <Link
                  href="/services/advisory-and-consulting"
                  className="block text-on-surface-variant transition hover:text-primary"
                >
                  Advisory & Consulting
                </Link>
                <Link
                  href="/services/business-valuation"
                  className="block text-on-surface-variant transition hover:text-primary"
                >
                  Business Valuation
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <InsightClosing closing={insight.closing} />

      {relatedInsights.length > 0 && (
        <section className="border-y border-slate-200/70 bg-white py-16">
          <div className="container-page">
            <div className="mb-10 max-w-3xl reveal">
              <p className="section-kicker">Related Insights</p>
              <h2 className="section-title">More guidance from our team.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3 reveal reveal-delay-1">
              {relatedInsights.map((relatedInsight) => (
                <InsightCard
                  key={relatedInsight.slug}
                  {...relatedInsight}
                  href={`/insights/${relatedInsight.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
