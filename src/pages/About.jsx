export default function About() {
  const values = [
    {
      title: "Client-Centered",
      description:
        "We build relationships rooted in responsiveness, transparency, and proactive guidance.",
    },
    {
      title: "Industry Fluent",
      description:
        "Our teams invest in sector knowledge so you receive relevant, timely advice.",
    },
    {
      title: "Future Ready",
      description:
        "We embrace technology and data to keep your decisions grounded in real-time insight.",
    },
  ];

  return (
    <div>
      <section className="border-b border-slate-200/70 bg-white">
        <div className="container-page grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="section-kicker">About</p>
            <h1 className="text-4xl font-semibold text-ink-900">
              A regional firm with national-caliber expertise.
            </h1>
            <p className="text-lg text-slate-600">
              Rudler partners with growth-minded organizations
              across the Midwest, delivering assurance, tax, and advisory services
              that keep leadership aligned and confident.
            </p>
          </div>
          <div className="card space-y-4 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
              At a Glance
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Founded in 1988 with a focus on owner-led businesses</li>
              <li>Dedicated advisory, tax, and assurance practice leaders</li>
              <li>Offices in Cincinnati, Columbus, and Louisville</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="mb-10">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop"
            alt="Modern office space"
            className="h-80 w-full rounded-2xl object-cover"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="card p-6">
              <h3 className="text-lg font-semibold text-ink-900">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200/70 bg-slate-50">
        <div className="container-page grid gap-8 py-14 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="section-kicker">Leadership</p>
            <h2 className="section-title">
              Senior advisors with deep industry credibility.
            </h2>
            <p className="text-sm text-slate-600">
              Our leadership team blends public accounting expertise with
              hands-on business operations experience.
            </p>
          </div>
          <div className="card p-6 text-sm text-slate-600">
            <p className="font-semibold text-ink-900">Partner Advisory Board</p>
            <p className="mt-2">A cross-functional group overseeing service quality, innovation, and client experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
