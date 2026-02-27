export default function Careers() {
  const roles = [
    {
      title: "Senior Tax Manager",
      location: "Ft Wright, KY (Hybrid)",
    },
    {
      title: "Assurance Supervisor",
      location: "Ft Wright, KY",
    },
    {
      title: "Advisory Analyst",
      location: "Remote - Midwest",
    },
  ];

  const benefits = [
    "Flexible schedules and hybrid teams",
    "Growth pathways with dedicated mentors",
    "Learning stipends and certification support",
    "Community involvement and volunteer days",
  ];

  return (
    <div>
      <section className="border-b border-slate-200/70 bg-white">
        <div className="container-page grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="section-kicker">Careers</p>
            <h1 className="text-4xl font-semibold text-ink-900">
              Build a career that grows with you.
            </h1>
            <p className="text-lg text-slate-600">
              We invest in people who want to build trusted relationships and
              expand advisory impact.
            </p>
          </div>
          <div className="card space-y-4 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
              Why Rudler
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop"
          alt="Team working together"
          className="mb-10 h-80 w-full rounded-2xl object-cover"
        />
        <p className="section-kicker">Open Roles</p>
        <h2 className="section-title">Join our team.</h2>
        <div className="mt-6 grid gap-4">
          {roles.map((role) => (
            <div key={role.title} className="card flex flex-wrap items-center justify-between gap-4 p-6">
              <div>
                <p className="text-lg font-semibold text-ink-900">{role.title}</p>
                <p className="text-sm text-slate-600">{role.location}</p>
              </div>
              <button className="btn-outline">View details</button>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200/70 bg-slate-50">
        <div className="container-page grid gap-8 py-14 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="section-kicker">Internships</p>
            <h2 className="section-title">
              Launch your career with real client exposure.
            </h2>
            <p className="text-sm text-slate-600">
              Our internship program includes advisory shadowing, coaching, and
              hands-on engagements.
            </p>
          </div>
          <div className="card p-6 text-sm text-slate-600">
            <p className="font-semibold text-ink-900">Next cohort</p>
            <p className="mt-2">Applications open in September. Interviews run through November.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
