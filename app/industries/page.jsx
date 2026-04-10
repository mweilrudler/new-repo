import IndustryPill from "../../components/IndustryPill.jsx"

export const metadata = {
  title: "Industries",
  description: "TODO — awaiting final copy from marketing team.",
};

const industries = [
  "Manufacturing",
  "Distribution & Logistics",
  "Construction",
  "Healthcare Providers",
  "Financial Services",
  "Technology & SaaS",
  "Hospitality",
  "Real Estate",
  "Nonprofits",
  "Private Equity Portfolio",
  "Professional Services",
  "Retail",
];

const highlights = [
  {
    title: "Manufacturing & Distribution",
    description:
      "Inventory costing, margin analysis, and capital planning for complex operations.",
  },
  {
    title: "Healthcare",
    description:
      "Reimbursement planning, provider compensation, and compliance support for growth-minded practices.",
  },
  {
    title: "Construction",
    description:
      "Work-in-progress reporting, bonding support, and cash forecasting for project-driven teams.",
  },
  {
    title: "Nonprofits",
    description:
      "Governance support, grant compliance, and reporting aligned with donor expectations.",
  },
];

export default function Industries() {
  return (
    <div>
      <section className="border-b border-slate-200/70 bg-white">
        <div className="container-page grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 reveal">
            <p className="section-kicker">Industries</p>
            <h1 className="text-4xl font-semibold text-ink-900">
              Industry teams built around your operating reality.
            </h1>
            <p className="text-lg text-slate-600">
              Our specialists bring deep experience in regulatory, operational, and
              financing nuances across every sector we serve.
            </p>
          </div>
          <div className="card space-y-4 p-6 reveal reveal-delay-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
              Industry Focus
            </p>
            <p className="text-sm text-slate-600">
              Dedicated teams stay current on compliance, benchmarking, and
              emerging trends so you can stay ahead.
            </p>
            <button className="btn-outline w-full">Meet our specialists</button>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop"
          alt="City skyline"
          className="mb-10 h-40 md:h-64 w-full rounded-2xl object-cover"
        />
        <div className="grid gap-6 md:grid-cols-2 reveal reveal-delay-1">
          {highlights.map((item) => (
            <div key={item.title} className="card p-6">
              <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200/70 bg-slate-50">
        <div className="container-page py-16">
          <p className="section-kicker reveal">Full List</p>
          <h2 className="section-title">Industries we serve.</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <IndustryPill key={industry} label={industry} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
