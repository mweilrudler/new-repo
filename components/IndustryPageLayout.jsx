import Link from "next/link";

export default function IndustryPageLayout({
  kicker,
  title,
  heroDescription,
  heroImageSrc,
  heroImageAlt,
  challenges,
  howWeHelp,
  strategicInsight,
  servicesHeading,
  serviceGroups,
}) {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full flex items-center overflow-visible px-6 md:px-12 pt-12 md:pt-20 max-w-[1440px] mx-auto mb-16 md:mb-24">
        <div className="grid grid-cols-12 gap-y-8 lg:gap-8 w-full items-center">
          <div className="col-span-12 lg:col-span-7 z-10 reveal">
            <span className="section-kicker">{kicker}</span>
            <h1 className="font-body text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-on-surface leading-[1.1] mb-6 md:mb-8 font-semibold">
              {title}
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
              {heroDescription}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0 reveal reveal-delay-2">
            <div className="aspect-[4/5] bg-surface-container-highest rounded-xl overflow-hidden relative shadow-2xl">
              {heroImageSrc ? (
                <img
                  src={heroImageSrc}
                  alt={heroImageAlt || ""}
                  className="h-full w-full object-cover grayscale-[15%] contrast-[1.05]"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                  <span className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                    Photo placeholder
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY CHALLENGES */}
      <section className="bg-surface-container-low py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start reveal">
            <div className="lg:col-span-5">
              <p className="section-kicker">Industry Challenges</p>
              <h2 className="section-title mb-4">{challenges.heading}</h2>
              {challenges.description && (
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  {challenges.description}
                </p>
              )}
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-4 sm:grid-cols-2">
                {challenges.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl bg-surface-container-lowest p-6 shadow-[0_20px_40px_rgba(13,32,59,0.06)] border border-outline-variant/20 flex gap-3"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start reveal">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <ul className="space-y-5">
              {howWeHelp.items.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-5 pb-5 border-b border-outline-variant/30 last:border-b-0"
                >
                  <span className="font-body text-2xl text-primary/40 min-w-10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-on-surface-variant leading-relaxed pt-1">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-36">
            <p className="section-kicker">How We Help</p>
            <h2 className="section-title mb-4">{howWeHelp.heading}</h2>
            {howWeHelp.description && (
              <p className="text-on-surface-variant text-lg leading-relaxed">
                {howWeHelp.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* STRATEGIC INSIGHT */}
      {strategicInsight && (
        <section className="bg-primary py-20 md:py-28 text-white">
          <div className="container-page">
            <div className="max-w-3xl reveal">
              <p className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-secondary-fixed">
                {strategicInsight.kicker || "Strategic Insight"}
              </p>
              <h2 className="font-body text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                {strategicInsight.heading}
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                {strategicInsight.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SERVICES FOR THIS INDUSTRY */}
      {serviceGroups && serviceGroups.length > 0 && (
        <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="max-w-4xl mb-14 reveal">
            <p className="section-kicker">Our Services</p>
            <h2 className="section-title mb-4">{servicesHeading}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 reveal reveal-delay-1">
            {serviceGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl bg-surface-container-lowest p-8 md:p-10 shadow-[0_20px_40px_rgba(13,32,59,0.06)] border border-outline-variant/20 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="font-body text-2xl font-semibold text-ink-900 mb-2">
                  {group.title}
                </h3>
                <ul className="space-y-3 flex-1">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mb-12 md:mb-24 px-6 md:px-12 max-w-[1440px] mx-auto reveal">
        <div className="bg-ink-900 rounded-2xl overflow-hidden relative p-8 sm:p-16 md:p-24 text-center">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-body text-4xl md:text-6xl text-white mb-8 leading-tight">
              Ready to strengthen your{" "}
              <span className="text-secondary-fixed-dim italic">
                financial foundation?
              </span>
            </h2>
            <p className="text-primary-fixed-dim text-lg mb-12">
              Connect with our team for a comprehensive review of your tax,
              advisory, and accounting needs.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-secondary text-white px-6 py-4 md:px-10 md:py-5 rounded-md font-bold text-lg md:text-xl hover:bg-forest-500 transition-all shadow-xl"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
