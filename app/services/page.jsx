import Link from "next/link";

export const metadata = {
  title: "Services | Rudler, PSC",
  description:
    "Tax, audit and assurance, advisory and consulting, and business valuation services for businesses, individuals, and not-for-profit organizations.",
};

const services = [
  {
    title: "Tax Services",
    href: "/services/tax",
    imageSrc:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tax professional reviewing a stack of financial reports",
    description:
      "Proactive tax planning and compliance for businesses, individuals, and families — combining technical expertise with year-round advisory support.",
    bullets: [
      "Entity structuring and multi-state compliance",
      "Individual, estate, and wealth transfer planning",
      "SALT planning and audit representation",
    ],
  },
  {
    title: "Audit & Assurance",
    href: "/services/audit-and-assurance",
    imageSrc:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Audit team discussing financial statements in a conference room",
    description:
      "Reliable, objective reporting and benefit plan audits that deliver clarity, confidence, and insight into your financial operations.",
    bullets: [
      "Financial statement audits, reviews, and compilations",
      "Employee benefit plan audits",
      "Internal control and risk assessments",
    ],
  },
  {
    title: "Advisory & Consulting",
    href: "/services/advisory-and-consulting",
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business consultants collaborating on strategy with leadership",
    description:
      "Strategic guidance that goes beyond accounting — including Efficient CFO services, Virtual Back Office, and strategic growth advisory.",
    bullets: [
      "Efficient CFO services",
      "Virtual Back Office",
      "Strategic growth and transition planning",
    ],
  },
  {
    title: "Business Valuation",
    href: "/services/business-valuation",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business valuation charts on screen during a financial analysis",
    description:
      "Comprehensive, defensible valuations to support transactions, succession planning, lending, and strategic decisions.",
    bullets: [
      "Full valuation and calculation of value reports",
      "Estate, gift, and succession planning",
      "M&A, ESOP, and shareholder disputes",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full bg-surface-container-low py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto text-center reveal">
          <span className="section-kicker">Our Services</span>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] text-on-surface leading-[1.1] mb-6 md:mb-8 font-semibold">
            Accounting & Advisory Services That Move You Forward
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            We offer a full range of services to support your financial goals — whether you're managing day-to-day operations, navigating complex decisions, or planning for growth.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid gap-6 md:grid-cols-2 reveal">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_20px_40px_rgba(13,32,59,0.06)] border border-outline-variant/20 flex flex-col transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface-container-highest">
                <img
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover grayscale-[8%] transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col gap-4 flex-1">
                <h2 className="font-headline text-2xl md:text-3xl font-semibold text-ink-900">
                  {service.title}
                </h2>
                <p className="text-on-surface-variant leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mt-2 flex-1">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 mt-4 text-primary font-semibold transition-all group-hover:gap-3">
                  Learn More →
                </span>
              </div>
            </Link>
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
