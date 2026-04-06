export const metadata = {
  title: "Contact Us | Rudler CPA",
  description:
    "Contact Rudler PSC for tax planning, audit, accounting, and advisory services. We respond within one business day.",
};

const whyRudler = [
  "Experienced CPAs and business advisors",
  "Comprehensive tax, audit, and accounting services",
  "Personalized support for businesses and individuals",
  "Local expertise in Northern Kentucky and Greater Cincinnati",
];

const faqs = [
  {
    q: "How quickly will Rudler respond to my inquiry?",
    a: "We typically respond to all contact requests within one business day.",
  },
  {
    q: "Can I schedule a consultation with a CPA?",
    a: "Yes. Submit the form with details about your needs, and we'll connect you with the appropriate tax or advisory professional.",
  },
];

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-200/70 bg-white">
        <div className="container-page grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 reveal">
            <p className="section-kicker">Contact</p>
            <h1 className="text-4xl font-semibold text-ink-900">
              Let's Talk About Your Next Chapter
            </h1>
            <p className="text-lg text-slate-600">
              As a leading CPA and advisory firm in the Cincinnati and Northern
              Kentucky area, Rudler, PSC delivers practical financial guidance
              and responsive service.
            </p>
            <p className="text-sm text-slate-500">
              Complete the form below and a member of our accounting team will
              respond within one business day.
            </p>
          </div>
          <div className="card p-6 space-y-4 border-2 border-slate-400 reveal reveal-delay-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
              Why Choose Rudler, PSC
            </p>
            <ul className="space-y-3">
              {whyRudler.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-600">
                  <svg className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Form + Location */}
      <section className="container-page py-16 grid gap-10 md:grid-cols-[1fr_1fr]">
        {/* Contact form */}
        <div className="card p-6 reveal">
          <p className="section-kicker">Request a Consultation</p>
          <h2 className="text-2xl font-semibold text-ink-900 mt-1 mb-2">
            Ask a Question or Schedule a Meeting
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            A member of our team will respond within one business day.
          </p>
          <form className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option value="">Service Needed</option>
              <option>Tax Planning &amp; Compliance</option>
              <option>Accounting &amp; Bookkeeping</option>
              <option>Audit &amp; Assurance</option>
              <option>Business Advisory Services</option>
              <option>Estate &amp; Trust Services</option>
              <option>Other</option>
            </select>
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <p className="text-xs text-slate-400">
              By submitting this form, you agree to be contacted by Rudler, PSC
              regarding your inquiry.
            </p>
            <button type="submit" className="btn-primary">
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Location */}
        <div className="space-y-6 reveal reveal-delay-1">
          <div>
            <p className="section-kicker">Visit Our Office</p>
            <h2 className="section-title">Northern Kentucky</h2>
          </div>

          {/* Google Map embed */}
          <div className="rounded-2xl h-64 overflow-hidden border border-slate-200">
            <iframe
              title="Rudler, PSC Fort Wright Office Map"
              src="https://www.google.com/maps?q=809+Wright%27s+Summit+Pkwy+Suite+200,+Fort+Wright,+KY+41011&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Office details */}
          <div className="card p-6 space-y-3 text-sm text-slate-600">
            <p className="text-base font-semibold text-ink-900">Rudler, PSC – Fort Wright Office</p>
            <p>809 Wright's Summit Pkwy, Suite 200</p>
            <p>Fort Wright, KY 41011</p>
            <p>
              <a href="tel:8593311717" className="hover:text-primary transition-colors">
                (859) 331-1717
              </a>
            </p>
            <p>
              <a href="mailto:info@rudler.cpa" className="hover:text-primary transition-colors">
                info@rudler.cpa
              </a>
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-secondary pt-1">
              Monday–Friday, 8:00 AM–5:00 PM
            </p>
            <p className="text-xs text-slate-500 pt-1">
              Conveniently located near Covington, KY, serving clients throughout
              Northern Kentucky and the Greater Cincinnati area.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200/70 bg-slate-50">
        <div className="container-page py-14">
          <div className="mb-8 reveal">
            <p className="section-kicker">FAQs</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 reveal reveal-delay-1">
            {faqs.map((faq) => (
              <div key={faq.q} className="card p-6 space-y-2">
                <h3 className="font-semibold text-ink-900">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
