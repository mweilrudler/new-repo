export default function Contact() {
  const offices = [
    {
      name: "Cincinnati",
      address: "412 Vine Street, Suite 620",
      city: "Cincinnati, OH 45202",
      phone: "513.555.0147",
      hours: "Mon-Fri, 8:00am-5:30pm",
    },
    {
      name: "Columbus",
      address: "88 High Street, Suite 1200",
      city: "Columbus, OH 43215",
      phone: "614.555.0182",
      hours: "Mon-Fri, 8:30am-5:00pm",
    },
  ];

  return (
    <div>
      <section className="border-b border-slate-200/70 bg-white">
        <div className="container-page grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="section-kicker">Contact</p>
            <h1 className="text-4xl font-semibold text-ink-900">
              Let's talk about your next chapter.
            </h1>
            <p className="text-lg text-slate-600">
              Reach out for advisory guidance, tax planning, or assurance support.
              We will respond within one business day.
            </p>
          </div>
          <div className="card space-y-4 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
              Cincinnati Office
            </p>
            <p className="text-sm text-slate-600">
              412 Vine Street, Suite 620<br />
              Cincinnati, OH 45202
            </p>
            <p className="text-sm text-slate-600">513.555.0147</p>
            <button className="btn-outline w-full">Get directions</button>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-8 py-16 md:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <p className="section-kicker">Office Locations</p>
          <h2 className="section-title">Regional offices with local reach.</h2>
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=300&fit=crop"
            alt="Office building"
            className="h-48 w-full rounded-2xl object-cover"
          />
          <div className="grid gap-4">
            {offices.map((office) => (
              <div key={office.name} className="card space-y-2 p-6 text-sm text-slate-600">
                <p className="text-lg font-semibold text-ink-900">{office.name}</p>
                <p>{office.address}</p>
                <p>{office.city}</p>
                <p>{office.phone}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-forest-600">
                  {office.hours}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <p className="section-kicker">Start Here</p>
          <h2 className="text-2xl font-semibold text-ink-900">
            Schedule a consultation
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Tell us a bit about your organization and the services you need.
          </p>
          <form className="mt-6 grid gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
            />
            <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm">
              <option>Advisory & Strategy</option>
              <option>Tax Planning</option>
              <option>Assurance</option>
              <option>Outsourced Accounting</option>
              <option>Transaction Support</option>
            </select>
            <textarea
              rows="4"
              placeholder="Project summary"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
            />
            <button type="submit" className="btn-primary">
              Submit inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
