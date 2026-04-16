import InsightCard from "../../components/InsightCard";
import NewsletterSignup from "../../components/NewsletterSignup";

export const metadata = {
  title: "Insights",
  description: "TODO — awaiting final copy from marketing team.",
};

const insights = [
  {
    tag: "Tax Strategy",
    title: "Mid-year tax planning for owner-led companies",
    summary:
      "A timeline for reviewing entity structure, estimated payments, and bonus strategies before Q3.",
    date: "Feb 20, 2026",
  },
  {
    tag: "Advisory",
    title: "Operational scorecards that surface leading indicators",
    summary:
      "How to combine finance, operations, and customer data into one executive view.",
    date: "Feb 12, 2026",
  },
  {
    tag: "Assurance",
    title: "Preparing for lender renewals and covenant reviews",
    summary:
      "Documentation tips to keep financing conversations on schedule and on message.",
    date: "Feb 03, 2026",
  },
  {
    tag: "People",
    title: "Compensation benchmarking for growth phases",
    summary:
      "Aligning incentive plans with business milestones without losing culture focus.",
    date: "Jan 24, 2026",
  },
  {
    tag: "Risk",
    title: "Improving internal controls without slowing the team",
    summary:
      "A phased approach to strengthening approvals and visibility as you scale.",
    date: "Jan 12, 2026",
  },
  {
    tag: "Technology",
    title: "Automating monthly close with the right data stack",
    summary:
      "Where to start if your finance team wants faster reporting cycles.",
    date: "Jan 05, 2026",
  },
];

export default function Insights() {
  return (
    <div>
      <section className="border-b border-slate-200/70 bg-white">
        <div className="container-page grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 reveal">
            <p className="section-kicker">Insights</p>
            <h1 className="text-4xl font-semibold text-ink-900">
              Thought leadership for leaders who want clarity.
            </h1>
            <p className="text-lg text-slate-600">
              Articles, guides, and updates from our tax, assurance, and advisory
              specialists.
            </p>
          </div>
          <div className="card space-y-4 p-6 reveal reveal-delay-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
              Subscribe
            </p>
            <p className="text-sm text-slate-600">
              Get concise monthly insights from our leadership team.
            </p>
            <button className="btn-primary w-full">Join the Briefing</button>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 reveal">
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
