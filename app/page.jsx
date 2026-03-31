import Link from "next/link";
import Image from "next/image";


const testimonials = [
  {
    quote:
      "Rudler has been our trusted advisor for over a decade. Their depth of knowledge in tax planning has saved us significantly every year.",
    name: "James Holloway",
    title: "Owner, Holloway Manufacturing",
  },
  {
    quote:
      "The team at Rudler helped us navigate a complex business acquisition with clarity and confidence. We couldn't have done it without them.",
    name: "Sarah Mitchell",
    title: "CEO, Mitchell Properties",
  },
  {
    quote:
      "From nonprofit compliance to personal tax planning, Rudler handles it all with professionalism and genuine care for our financial wellbeing.",
    name: "Dr. Karen Wells",
    title: "Executive Director, Tri-State Outreach",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full md:min-h-[870px] flex items-center overflow-visible px-6 md:px-12 max-w-[1440px] mx-auto mb-12 md:mb-24">
        <div className="grid grid-cols-12 gap-y-8 lg:gap-8 w-full items-center">
          {/* Text */}
          <div className="col-span-12 lg:col-span-7 z-10 reveal">
            <span className="section-kicker">Trusted Advisors Since 1988</span>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] text-on-surface leading-[1.1] mb-6 md:mb-8 font-semibold">
              Financial clarity,{" "}
              <span className="italic text-primary">built to last.</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Independent CPAs and advisors helping closely held businesses,
              families, and nonprofits navigate growth with precision and
              purpose.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-md font-semibold text-base md:text-lg hover:shadow-lg transition-all"
              >
                Our Services
              </Link>
              <Link
                href="/about"
                className="bg-surface-container-high text-on-primary-fixed-variant px-6 py-3 md:px-8 md:py-4 rounded-md font-semibold text-base md:text-lg hover:bg-surface-container-highest transition-all"
              >
                Meet the Team
              </Link>
            </div>
          </div>

          {/* Image + vellum card */}
          <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0 reveal reveal-delay-2">
            <div className="aspect-[4/5] bg-surface-container-highest rounded-xl overflow-hidden relative shadow-2xl">
              <Image
                alt="Professional office environment"
                className="object-cover grayscale-[15%] contrast-[1.05]"
                src="/images/OfficePhoto.png"
                fill
                priority
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            <div className="absolute bottom-4 left-4 md:-bottom-8 md:-left-8 vellum-layer bg-white/80 p-5 md:p-8 rounded-xl shadow-xl max-w-[180px] md:max-w-[260px] border border-white/20 reveal reveal-delay-3">
              <p className="font-headline text-3xl font-bold text-ink-900 mb-1">35+</p>
              <p className="text-xs uppercase tracking-[0.15em] text-on-surface-variant">
                Years Serving the Region
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS BENTO GRID */}
      <section className="bg-surface-container-low py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal">
            <div className="max-w-2xl">
              <h2 className="section-title mb-4">Latest Insights</h2>
              <p className="text-on-surface-variant text-lg">
                Perspectives on tax, advisory, and the challenges facing growing
                businesses.
              </p>
            </div>
            <Link
              href="/insights"
              className="text-primary font-semibold flex items-center gap-2 border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              View All Insights →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature card */}
            <div className="md:col-span-2 bg-surface-container-lowest p-6 md:p-10 rounded-xl flex flex-col justify-between group cursor-pointer hover:shadow-md transition-all reveal reveal-delay-1">
              <div>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter mb-6 inline-block">
                  Tax Planning
                </span>
                <h3 className="font-headline text-3xl mb-4 group-hover:text-primary transition-colors">
                  Year-End Tax Strategies for Closely Held Businesses
                </h3>
                <p className="text-on-surface-variant text-lg max-w-xl">
                  Key opportunities to reduce your tax burden before year-end
                  — from retirement contributions to equipment purchases and
                  entity structuring.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white font-headline">
                  R
                </div>
                <div>
                  <p className="font-semibold text-sm">Rudler CPA</p>
                  <p className="text-xs uppercase tracking-widest text-outline">
                    Advisory Team
                  </p>
                </div>
              </div>
            </div>

            {/* Side stack */}
            <div className="flex flex-col gap-8">
              <div className="bg-primary p-8 rounded-xl text-white flex flex-col justify-between flex-1 cursor-pointer overflow-hidden relative group reveal reveal-delay-2">
                <div className="relative z-10">
                  <h3 className="font-headline text-2xl mb-3 leading-tight">
                    Nonprofit Compliance Essentials
                  </h3>
                  <p className="text-primary-fixed-dim text-sm">
                    Staying ahead of reporting requirements and governance best
                    practices.
                  </p>
                </div>
                <div className="text-7xl font-headline opacity-10 absolute -bottom-4 -right-4 group-hover:scale-110 transition-transform select-none leading-none">
                  §
                </div>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-xl border-l-4 border-secondary flex flex-col justify-between flex-1 cursor-pointer hover:bg-white transition-colors reveal reveal-delay-3">
                <h3 className="font-headline text-2xl mb-3">
                  Planning for Business Transitions
                </h3>
                <p className="text-on-surface-variant text-sm italic">
                  "A clear plan today protects the value you've built for
                  years."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="text-center mb-20 reveal">
          <span className="section-kicker">Client Perspectives</span>
          <h2 className="section-title italic">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className={`relative reveal reveal-delay-${i + 1}`}>
              <div className="absolute -top-6 -left-4 text-7xl font-headline text-surface-container-highest leading-none select-none">
                &ldquo;
              </div>
              <div className="pt-8">
                <p className="font-headline text-xl leading-relaxed text-on-surface-variant mb-8 italic">
                  {t.quote}
                </p>
                <div className="border-t border-outline-variant pt-6">
                  <p className="font-body font-bold text-primary">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest text-outline">
                    {t.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mb-12 md:mb-24 px-6 md:px-12 max-w-[1440px] mx-auto reveal">
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
