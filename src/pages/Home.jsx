import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard.jsx";
import IndustryPill from "../components/IndustryPill.jsx";
import InsightCard from "../components/InsightCard.jsx";
import NewsletterSignup from "../components/NewsletterSignup.jsx";

const services = [
  {
    title: "Advisory & Strategy",
    description:
      "Scenario planning, margin analysis, and growth roadmaps tailored to owners and boards.",
  },
  {
    title: "Tax Planning",
    description:
      "Forward-looking tax strategy for entities and owners, aligned with cash flow goals.",
  },
  {
    title: "Assurance",
    description:
      "Audits, reviews, and agreed-upon procedures that build lender and investor confidence.",
  },
  {
    title: "Outsourced Accounting",
    description:
      "Monthly close, KPI reporting, and controller support delivered as a steady rhythm.",
  },
  {
    title: "Transaction Support",
    description:
      "Quality of earnings, diligence prep, and deal readiness for buyers or sellers.",
  },
  {
    title: "Family Office",
    description:
      "Integrated planning for multi-generational wealth, philanthropy, and governance.",
  },
];

const industries = [
  "Manufacturing",
  "Healthcare",
  "Construction",
  "Financial Services",
  "Technology",
  "Nonprofits",
  "Private Equity",
  "Hospitality",
  "Real Estate",
  "Professional Services",
];

const insights = [
  {
    tag: "Tax Update",
    title: "Three ways to stabilize cash flow before year-end",
    summary:
      "A practical checklist for owners looking to pull forward deductions and optimize working capital.",
    date: "Feb 15, 2026",
  },
  {
    tag: "Advisory",
    title: "Board-ready dashboards that actually drive decisions",
    summary:
      "How to narrow KPIs to the handful that shape pricing, staffing, and investment priorities.",
    date: "Feb 08, 2026",
  },
  {
    tag: "Assurance",
    title: "Preparing for your first audit with confidence",
    summary:
      "A readiness timeline and document map that helps reduce disruption during fieldwork.",
    date: "Jan 28, 2026",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,159,90,0.12),_transparent_55%)]" />
        <div className="container-page relative grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div className="space-y-6">
            <p className="section-kicker">CPA + Advisory</p>
            <h1 className="text-4xl font-semibold leading-tight text-ink-900 md:text-5xl">
              Clear financial direction for growth-minded leaders.
            </h1>
            <p className="text-lg text-slate-600">
              Rudler pairs assurance, tax, and strategic advisory
              services so you can move faster with fewer surprises.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-primary">
                Schedule a Consultation
              </Link>
              <Link to="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>
            <div className="grid gap-6 pt-8 text-sm text-slate-600 md:grid-cols-3">
              <div className="space-y-1">
                <p className="text-2xl font-semibold text-ink-900">45+</p>
                <p>Professionals across assurance and advisory</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-semibold text-ink-900">12</p>
                <p>Industry specialty teams</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-semibold text-ink-900">1</p>
                <p>Office location with local reach</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-accent-500/20 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
              alt="Business meeting"
              className="mb-6 h-64 w-full rounded-2xl object-cover"
            />
            <div className="card relative space-y-6 p-8">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
                  Advisory Snapshot
                </p>
                <h2 className="text-2xl font-semibold text-ink-900">
                  Your finance team, elevated.
                </h2>
                <p className="text-sm text-slate-600">
                  We build dashboards, operational cadences, and tax strategies that
                  align your leadership team around a single plan.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-forest-600">
                  90-day focus
                </p>
                <p className="mt-2 text-sm text-ink-900">
                  - Profitability review
                  <br />- Cash conversion targets
                  <br />- Board reporting refresh
                </p>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Advisory + Assurance + Tax</span>
                <span>Confidential</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-kicker">Services</p>
            <h2 className="section-title">A full advisory platform for owners.</h2>
          </div>
          <Link to="/services" className="btn-outline">
            View all services
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white">
        <div className="container-page py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-kicker">Industries</p>
              <h2 className="section-title">
                Specialists who speak your operating language.
              </h2>
            </div>
            <Link to="/industries" className="btn-outline">
              Explore industries
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <IndustryPill key={industry} label={industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-kicker">Insights</p>
            <h2 className="section-title">Thought leadership that is ready to use.</h2>
          </div>
          <Link to="/insights" className="btn-outline">
            Read insights
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {insights.map((insight) => (
            <InsightCard key={insight.title} {...insight} />
          ))}
        </div>
      </section>

      <section className="container-page pb-20">
        <NewsletterSignup />
      </section>
    </div>
  );
}
