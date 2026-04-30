import Link from "next/link";
import Image from "next/image";


const testimonials = [
  {
    header: "We totally trust the business advice and accounting services Rudler has provided to us for more than 40 years",
    quote:
      "We have been with Rudler for more than 40 years. We have been fortunate to work with the same few people over that time which is confidence and trust building. The consistent quality of service and professionalism is unmatched. We totally trust the business advice and accounting service Rudler has provided over the years.",
    name: "A Client",
  },
  {
    header: "Highly Recommend Rudler!",
    quote:
      "We’ve worked with Rudler since I believe 2019, and we have been very satisfied with their services. We recommend their services to any other small business like ours.",
    name: "Kyle V",
  },
  {
    header: "Some things should be personal",
    quote:
      "I prefer the individual contact. Relationships are important to me and I like to know who is working on the return and talking to people directly. In my opinion, direct communication reduces misunderstandings and errors.",
    name: "A Client",
  },
];

const serviceCards = [
  {
    title: "Tax Services",
    desc: "Proactive tax planning and compliance designed to minimize risk and maximize opportunity.",
    href: "/services/tax",
    cta: "Learn More About Tax Services",
    icon: "tax",
  },
  {
    title: "Audit & Assurance",
    desc: "Reliable, objective reporting that provides clarity and confidence in your financials.",
    href: "/services/audit-and-assurance",
    cta: "Learn More About Audit & Assurance",
    icon: "audit",
  },
  {
    title: "Advisory & Consulting",
    desc: "Strategic insight to help your business grow, adapt, and plan for the future.",
    href: "/services/advisory-and-consulting",
    cta: "Learn More About Advisory Services",
    icon: "advisory",
  },
  {
    title: "Business Valuation",
    desc: "Defensible valuations to support transactions, succession, and key decisions.",
    href: "/services/business-valuation",
    cta: "Learn More About Business Valuation",
    icon: "cfo",
  },
  {
    title: "Efficient CFO Services",
    desc: "Executive-level financial leadership without the cost of a full-time CFO.",
    href: "/services/advisory-and-consulting",
    cta: "Learn More About CFO Services",
    icon: "cfo",
  },
  {
    title: "Virtual Back Office",
    desc: "Accurate, real-time financial data to support your operations and decision-making.",
    href: "/services/advisory-and-consulting",
    cta: "Learn More About Back Office Services",
    icon: "backoffice",
  },
];

const whyRudlerPoints = [
  "A Partner You Can Trust - Built on long-term relationships and consistent guidance",
  "Forward-Thinking Approach - Proactive solutions, not reactive responses",
  "Deep Expertise - Experience across industries and complex financial situations",
  "People-Focused Culture - Supporting both our clients and our team",
];

const howWeWorkSteps = [
  {
    title: "We Start by Understanding Your Goals",
    desc: "Every client is different. We take the time to understand your business, your challenges, and what you're working toward so we can provide solutions that truly fit your needs.",
  },
  {
    title: "We Provide Strategic, Forward-Thinking Insight",
    desc: "We go beyond compliance to deliver proactive guidance that helps you make informed decisions and plan ahead.",
  },
  {
    title: "We Stay Engaged Year-Round",
    desc: "Our relationship doesn't begin and end with deadlines. We maintain ongoing communication to anticipate needs and keep you on track.",
  },
  {
    title: "We Support You at Every Stage",
    desc: "From growth to transition, we provide the insight and structure needed to support your success.",
  },
  {
    title: "We Build Long-Term Relationships",
    desc: "We strive to be more than a service provider. We aim to be a trusted partner you can rely on over time.",
  },
];

const stockPhotos = {
  meetingWide:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",
  teamCollab:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  industryOne:
    "https://images.unsplash.com/photo-1684695747561-9372850cf165?auto=format&fit=crop&w=1200&q=80",
  industryTwo:
    "https://images.unsplash.com/photo-1771868453049-b7b4a4680b5c?auto=format&fit=crop&w=1200&q=80",
  industryThree:
    "https://images.unsplash.com/photo-1758518730151-cf64fddb4f0a?auto=format&fit=crop&w=1200&q=80",
};

function ServiceIcon({ type }) {
  if (type === "tax") {
    return <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />;
  }
  if (type === "audit") {
    return <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35m1.85-4.15a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />;
  }
  if (type === "advisory") {
    return <path strokeLinecap="round" strokeLinejoin="round" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25Z" />;
  }
  if (type === "cfo") {
    return <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l3-3 3 2 4-5" />;
  }
  return <path strokeLinecap="round" strokeLinejoin="round" d="M4 7.5h16M4 12h16M4 16.5h10" />;
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full md:min-h-[870px] flex items-center overflow-visible px-6 md:px-12 pt-6 md:pt-10 lg:pt-12 xl:pt-0 max-w-[1440px] mx-auto mb-12 md:mb-24">
        <div className="grid grid-cols-12 gap-y-8 lg:gap-8 w-full items-center">
          {/* Text */}
          <div className="col-span-12 lg:col-span-7 z-10 reveal">
            <span className="section-kicker">A Different Kind of Accounting Firm</span>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] text-on-surface leading-[1.1] mb-6 md:mb-8 font-semibold">
              A partner you can trust.{" "}
              <span className="italic text-primary">Guidance to help you pursue your vision.</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              At Rudler, PSC, we believe accounting is more than numbers—it’s about relationships, insight, and helping you move forward with confidence. We provide accounting and assurance, tax, and advisory services designed to support your success today and into the future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-md font-semibold text-base md:text-lg hover:shadow-lg transition-all"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="bg-surface-container-high text-on-primary-fixed-variant px-6 py-3 md:px-8 md:py-4 rounded-md font-semibold text-base md:text-lg hover:bg-surface-container-highest transition-all"
              >
                Schedule a Consultation
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
              <p className="font-headline text-3xl font-bold text-ink-900 mb-1">57+</p>
              <p className="text-xs uppercase tracking-[0.15em] text-on-surface-variant">
                Years Serving the Region
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-surface-container-low py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-4xl mb-14 reveal">
            <p className="section-kicker">Our Services</p>
            <h2 className="section-title mb-4">Accounting & Advisory Services That Move You Forward</h2>
            <p className="text-on-surface-variant text-lg">
              We offer a full range of services to support your financial goals, whether you're managing day-to-day operations, navigating complex decisions, or planning for growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 reveal reveal-delay-1">
            {serviceCards.map((service) => (
              <div key={service.title} className="rounded-2xl bg-surface-container-lowest p-8 md:p-10 shadow-[0_20px_40px_rgba(13,32,59,0.06)] border border-outline-variant/20 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <ServiceIcon type={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-ink-900">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{service.desc}</p>
                <Link href={service.href} className="inline-flex items-center gap-2 text-primary font-semibold transition-all hover:gap-3">
                  {service.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center reveal">
            <div className="lg:col-span-5">
              <p className="section-kicker">Industry-Specific Expertise</p>
              <h2 className="section-title mb-4">Tailored Support for Your Industry</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                We understand that every industry has unique challenges and opportunities. Our team brings deep experience across a variety of industries, allowing us to deliver solutions that align with your business.
              </p>
              <Link href="/industries" className="inline-block mt-8 text-primary font-semibold border-b-2 border-primary pb-1 hover:pb-1.5 transition-all">
                Explore the Industries We Serve
              </Link>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-xl shadow-[0_20px_40px_rgba(13,32,59,0.06)]">
                  <img src={stockPhotos.industryOne} alt="Automated manufacturing and distribution facility" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="aspect-video overflow-hidden rounded-xl bg-primary">
                  <img src={stockPhotos.industryTwo} alt="Construction workers on an active building site" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-[0_20px_40px_rgba(13,32,59,0.06)]">
                  <img src={stockPhotos.industryThree} alt="Professional services team collaborating in an office" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-primary py-20 md:py-28 text-white">
        <div className="container-page">
          <div className="mb-10 reveal">
            <p className="mb-4 block text-base font-bold uppercase tracking-[0.2em] text-secondary-fixed">Who We Work With</p>
            <h2 className="font-headline text-4xl md:text-5xl font-semibold mb-4">Guidance Built Around Your Goals</h2>
            <p className="text-white/80 text-lg max-w-3xl">
              We work with a range of clients, but our approach is always the same: understand your goals, build strong relationships, and provide guidance that supports long-term success.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 reveal reveal-delay-1">
            <div className="rounded-2xl bg-white/5 border border-white/15 p-8 md:p-10 backdrop-blur-sm transition-colors hover:bg-white/10">
              <h3 className="font-headline text-3xl font-semibold">Closely Held Businesses</h3>
              <p className="mt-4 text-sm text-white/75 leading-relaxed">
                Supporting business owners through growth, transition, and long-term planning.
              </p>
              <Link href="#closely-held-businesses" className="inline-flex items-center gap-2 mt-6 text-secondary-fixed font-semibold hover:gap-3 transition-all">
                Learn More →
              </Link>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/15 p-8 md:p-10 backdrop-blur-sm transition-colors hover:bg-white/10">
              <h3 className="font-headline text-3xl font-semibold">Individuals & Families</h3>
              <p className="mt-4 text-sm text-white/75 leading-relaxed">
                Helping individuals and families navigate complex financial decisions and build long-term wealth.
              </p>
              <Link href="#individuals-families" className="inline-flex items-center gap-2 mt-6 text-secondary-fixed font-semibold hover:gap-3 transition-all">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY RUDLER
      <section className="container-page py-16">
        <div className="mb-10 reveal">
          <p className="section-kicker">Why Rudler, PSC</p>
          <h2 className="section-title">A Partner You Can Trust</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 reveal reveal-delay-1">
          {whyRudlerPoints.map((point) => (
            <div key={point} className="card p-5 text-sm text-slate-700 leading-relaxed">
              {point}
            </div>
          ))}
        </div>
      </section> */}

      {/* HOW WE WORK */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start reveal">
            <div className="lg:col-span-4 lg:sticky lg:top-36">
              <p className="section-kicker">How We Work</p>
              <h2 className="section-title mb-4">Relationships First. Insight Always.</h2>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Our approach is built on relationships, proactive guidance, and a commitment to helping you move forward with confidence.
              </p>
              <div className="overflow-hidden rounded-xl shadow-[0_20px_40px_rgba(13,32,59,0.06)]">
                <img
                  src={stockPhotos.teamCollab}
                  alt="Business professionals collaborating in an office"
                  className="h-full w-full object-cover aspect-video"
                />
              </div>
            </div>
            <div className="lg:col-span-8 reveal reveal-delay-1">
              {howWeWorkSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`flex gap-5 md:gap-8 py-8 ${
                    index < howWeWorkSteps.length - 1 ? "border-b border-outline-variant/30" : ""
                  }`}
                >
                  <span className="font-headline text-3xl md:text-4xl text-primary/40 min-w-10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-headline text-2xl md:text-3xl leading-tight text-on-surface mb-3">
                      {step.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="bg-surface-container-low py-16">
        <div className="container-page">
          <div className="card p-8 md:p-10 reveal">
            <p className="section-kicker">Build Your Career at Rudler, PSC</p>
            <h2 className="section-title mb-4">Grow with a Team That Invests in You</h2>
            <p className="text-on-surface-variant text-lg max-w-4xl">
              We're always looking for motivated individuals who want to grow, contribute, and make an impact. Whether you're just starting your career or taking the next step, we offer opportunities to succeed in a supportive and forward-thinking environment.
            </p>
            <Link href="/careers" className="inline-block mt-6 btn-primary">
              Explore Careers
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="text-center mb-20 reveal">
          <span className="section-kicker">Client Perspectives</span>
          <h2 className="section-title italic">
            <a
              href="https://www.clearlyrated.com/accounting/ky-usa/fort-wright-ky/rudler-psc-fort-wright-ky"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              What Our Clients Say
            </a>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className={`relative rounded-xl bg-white p-9 md:p-10 border border-slate-200 shadow-sm reveal reveal-delay-${i + 1}`}>
              <div className="absolute top-2 left-5 text-6xl font-headline text-slate-300 leading-none select-none">
                &ldquo;
              </div>
              <div className="pt-8 h-full flex flex-col text-center">
                <p className="text-primary italic text-lg leading-relaxed">
                  {t.header}
                </p>
                <p className="font-headline text-xl leading-relaxed text-on-surface-variant my-6 italic flex-1">
                  {t.quote}
                </p>
                <div className="border-t border-outline-variant pt-5">
                  <p className="font-body font-bold text-primary">{t.name}</p>
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
