import Link from "next/link";

function SectionLists({ lists }) {
  if (!lists || lists.length === 0) return null;
  return (
    <div className="grid gap-8 md:grid-cols-2 mt-8">
      {lists.map((list) => (
        <div key={list.title} className="rounded-xl bg-white/60 border border-outline-variant/30 p-6 md:p-8">
          {list.title && (
            <h4 className="font-headline text-xl font-semibold text-ink-900 mb-4">
              {list.title}
            </h4>
          )}
          <ul className="space-y-3">
            {list.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function ServicePageLayout({
  kicker,
  title,
  heroDescription,
  heroImageSrc,
  heroImageAlt,
  introHeading,
  introBody,
  sections,
  closing,
}) {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full bg-surface-container-low py-20 md:py-28 px-6 md:px-12 mb-0">
        <div className="max-w-[1100px] mx-auto text-center reveal">
          <span className="section-kicker">{kicker}</span>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] text-on-surface leading-[1.1] mb-6 md:mb-8 font-semibold">
            {title}
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* HERO IMAGE BAND */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto -mt-10 md:-mt-16 relative z-10 mb-16 md:mb-24 reveal reveal-delay-1">
        <div className="aspect-[21/9] md:aspect-[21/8] bg-surface-container-highest rounded-2xl overflow-hidden shadow-2xl relative">
          {heroImageSrc ? (
            <img
              src={heroImageSrc}
              alt={heroImageAlt || ""}
              className="h-full w-full object-cover grayscale-[15%] contrast-[1.05]"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/15 to-primary/5">
              <span className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                Photo placeholder
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </div>
      </section>

      {/* INTRO */}
      {(introHeading || introBody) && (
        <section className="px-6 md:px-12 max-w-[1100px] mx-auto mb-20 md:mb-24 reveal">
          {introHeading && (
            <h2 className="section-title mb-6 text-center">{introHeading}</h2>
          )}
          {introBody && (
            <p className="text-on-surface-variant text-lg leading-relaxed text-center max-w-3xl mx-auto">
              {introBody}
            </p>
          )}
        </section>
      )}

      {/* SECTIONS */}
      {sections && sections.length > 0 && (
        <div className="mb-20 md:mb-28">
          {sections.map((section, index) => {
            const isAlt = index % 2 === 1;
            return (
              <section
                key={section.title}
                className={`py-20 md:py-24 px-6 md:px-12 ${isAlt ? "bg-surface-container-low" : ""}`}
              >
                <div className="max-w-[1200px] mx-auto reveal">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
                    <div className="lg:col-span-4">
                      <span className="font-headline text-6xl md:text-7xl text-primary/30 leading-none block mb-4">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.kicker && (
                        <p className="section-kicker">{section.kicker}</p>
                      )}
                      <h2 className="font-headline text-3xl md:text-4xl font-semibold text-on-surface leading-tight mb-4">
                        {section.title}
                      </h2>
                      {section.tagline && (
                        <p className="font-headline text-lg italic text-primary leading-relaxed">
                          {section.tagline}
                        </p>
                      )}
                    </div>
                    <div className="lg:col-span-8">
                      {section.description && (
                        <p className="text-on-surface-variant text-lg leading-relaxed">
                          {section.description}
                        </p>
                      )}
                      {section.body && section.body.map((paragraph, i) => (
                        <p key={i} className="text-on-surface-variant text-lg leading-relaxed mt-5">
                          {paragraph}
                        </p>
                      ))}
                      <SectionLists lists={section.lists} />
                      {section.items && section.items.length > 0 && (
                        <ul className="space-y-3 mt-8">
                          {section.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-on-surface-variant leading-relaxed"
                            >
                              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* CLOSING STATEMENT */}
      {closing && (
        <section className="bg-primary py-20 md:py-28 text-white">
          <div className="container-page">
            <div className="max-w-3xl mx-auto text-center reveal">
              {closing.kicker && (
                <p className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-secondary-fixed">
                  {closing.kicker}
                </p>
              )}
              <h2 className="font-headline text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                {closing.heading}
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                {closing.description}
              </p>
              {closing.linkHref && closing.linkText && (
                <Link
                  href={closing.linkHref}
                  className="inline-flex items-center gap-2 mt-8 text-secondary-fixed font-semibold border-b-2 border-secondary-fixed pb-1 hover:gap-3 transition-all"
                >
                  {closing.linkText} →
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="my-12 md:my-24 px-6 md:px-12 max-w-[1440px] mx-auto reveal">
        <div className="bg-ink-900 rounded-2xl overflow-hidden relative p-8 sm:p-16 md:p-24 text-center">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-6xl text-white mb-8 leading-tight">
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
