import ServiceCard from "/components/ServiceCard.jsx";

const services = [
  {
    title: "Assurance Services",
    description:
      "Audit, review, and agreed-upon procedures that align with lenders, investors, and regulators.",
  },
  {
    title: "Tax Planning & Compliance",
    description:
      "Entity and individual planning, multistate compliance, and year-round advisory support.",
  },
  {
    title: "Advisory & CFO Support",
    description:
      "Strategic planning, KPI dashboards, and leadership coaching for owners and executives.",
  },
  {
    title: "Outsourced Accounting",
    description:
      "Close management, reconciliations, and financial reporting built for decision-making.",
  },
  {
    title: "Transaction Advisory",
    description:
      "Quality of earnings, buy-side diligence, and readiness for recapitalization or sale.",
  },
  {
    title: "Risk & Compliance",
    description:
      "Internal controls, SOC readiness, and compliance assessments for scaling organizations.",
  },
  {
    title: "Wealth & Family Office",
    description:
      "Integrated planning, reporting, and governance for multi-entity families and foundations.",
  },
  {
    title: "State & Local Tax",
    description:
      "Nexus reviews, credit opportunities, and representation for audits or disputes.",
  },
  {
    title: "Advisory Projects",
    description:
      "Margin resets, cash conversion improvement, and pricing strategy engagements.",
  },
];

export default function Services() {
  return (
    <div>
      <section className="border-b border-slate-200/70 bg-white">
        <div className="container-page grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 reveal">
            <p className="section-kicker">Services</p>
            <h1 className="text-4xl font-semibold text-ink-900">
              A full suite of CPA and advisory services.
            </h1>
            <p className="text-lg text-slate-600">
              From assurance to strategic advisory, we deliver service categories
              designed to scale with your organization and your leadership team.
            </p>
          </div>
          <div className="space-y-6 reveal reveal-delay-1">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
              alt="Team collaboration"
              className="h-40 md:h-56 w-full rounded-2xl object-cover"
            />
            <div className="card space-y-4 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
                Engagement Model
              </p>
            <p className="text-sm text-slate-600">
              Choose a recurring advisory cadence or targeted project support. We
              integrate with your internal team and move at your pace.
            </p>
            <ul className="space-y-2 text-sm text-ink-900">
              <li>Dedicated advisory partner</li>
              <li>Shared project roadmap</li>
              <li>Monthly performance reviews</li>
            </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 reveal">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200/70 bg-slate-50">
        <div className="container-page grid gap-8 py-14 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 reveal">
            <p className="section-kicker">Working Together</p>
            <h2 className="section-title">
              Advisory teams built around your business model.
            </h2>
            <p className="text-sm text-slate-600">
              We match you with industry specialists and service leads so your
              engagement is cohesive and proactive.
            </p>
          </div>
          <div className="card space-y-4 p-6">
            <p className="text-sm text-slate-600">
              Ready to plan your next quarter? Our advisory leads can build a
              roadmap in a single discovery session.
            </p>
            <button className="btn-primary">Schedule a Consultation</button>
          </div>
        </div>
      </section>
    </div>
  );
}
