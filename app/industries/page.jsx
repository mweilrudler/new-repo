import Link from "next/link";
import IndustryPill from "../../components/IndustryPill.jsx"


export const metadata = {
  title: "Industries | Rudler, PSC",
  description:
    "Industry-specific accounting, tax, and advisory services for construction, food and beverage, manufacturing and distribution, not-for-profit, and transportation and logistics.",
};

const industries = [
  {
    title: "Construction",
    href: "/industries/construction",
    imageSrc:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Construction site with team members and active structural work",
    description:
      "Job costing, multi-state tax, equipment planning, and succession strategies for contractors and construction companies.",
  },
  {
    title: "Food & Beverage",
    href: "/industries/food-and-beverage",
    imageSrc:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Restaurant kitchen team plating dishes during service",
    description:
      "Support for restaurants, franchises, and multi-location operators navigating thin margins, tip compliance, and growth.",
  },
  {
    title: "Manufacturing & Distribution",
    href: "/industries/manufacturing-and-distribution",
    imageSrc:
      "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Manufacturing and distribution facility with conveyor operations",
    description:
      "Inventory costing, IC-DISC and R&D credits, multi-state and international tax strategies for growing manufacturers and distributors.",
  },
  {
    title: "Not-for-Profit",
    href: "/industries/not-for-profit",
    imageSrc:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Nonprofit volunteers working together during a community event",
    description:
      "Form 990, compliance, board governance, and operational risk support to help your organization remain compliant and achieve its mission.",
  },
  {
    title: "Transportation & Logistics",
    href: "/industries/transportation-and-logistics",
    imageSrc:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Logistics yard with trucks and stacked shipping containers",
    description:
      "Multi-state compliance, fleet planning, entity structuring, and profitability analysis for transportation companies of every size.",
  },
];

export default function Industries() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full bg-surface-container-low py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto text-center reveal">
          <span className="section-kicker">Industries</span>
          <h1 className="font-body text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] text-on-surface leading-[1.1] mb-6 md:mb-8 font-semibold">
            Tailored Support for Your Industry
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            We understand that every industry has unique challenges and opportunities. Our team brings deep experience across a variety of industries, allowing us to deliver solutions that align with your business.
          </p>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 reveal">
          {industries.map((industry) => (
            <Link
              key={industry.href}
              href={industry.href}
              className="group overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_20px_40px_rgba(13,32,59,0.06)] border border-outline-variant/20 flex flex-col transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface-container-highest">
                <img
                  src={industry.imageSrc}
                  alt={industry.imageAlt}
                  className="h-full w-full object-cover grayscale-[8%] transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col gap-4 flex-1">
                <h2 className="font-body text-2xl md:text-3xl font-semibold text-ink-900">
                  {industry.title}
                </h2>
                <p className="text-on-surface-variant leading-relaxed flex-1">
                  {industry.description}
                </p>
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
