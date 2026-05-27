import Link from "next/link";

export const metadata = {
  title: "Careers for Experienced Professionals | Rudler CPA",
  description:
    "Advance your accounting career at Rudler CPA. Competitive compensation, flexible work options, mentorship, and long-term growth in Northern Kentucky and remote.",
};

const whatToExpect = [
  {
    title: "Meaningful Client Work",
    desc: "Work directly with clients on impactful projects across a range of service areas.",
  },
  {
    title: "Professional Growth & Development",
    desc: "Ongoing talent development meetings, mentorship, and opportunities to expand your skills.",
  },
  {
    title: "Collaborative Team Environment",
    desc: "A supportive culture that values communication, connection, and shared success.",
  },
];

const corePerks = [
  "Competitive Compensation – Annual raises and performance-based bonuses.",
  "Flexible Work Options – Remote, hybrid, and in-office opportunities available nationwide.",
  "Work-Life Balance – PTO structure where hours worked over 40 convert into additional time off.",
  "Professional Development Support – CPE courses covered, with training time considered chargeable.",
  "Retirement & Profit Sharing – 401(k) plan with profit-sharing opportunities.",
];

const additionalPerks = [
  "Wellness & Gym Reimbursement – Supporting your physical and mental well-being.",
  "Cell Phone Reimbursement – Helping you stay connected and productive.",
  "Employee Committees – Opportunities to get involved and shape our workplace culture.",
  "Team Activities & Book Clubs – Building connections beyond the day-to-day work.",
];

const whyRudler = [
  {
    title: "More Than Just a Job",
    desc: "At Rudler, you're not siloed into tasks—you're building relationships, contributing ideas, and making a real impact on clients and the firm.",
  },
  {
    title: "Flexibility Without Sacrifice",
    desc: "We offer flexible work options while maintaining a collaborative, connected team environment—something many firms struggle to balance.",
  },
  {
    title: "A Firm That Invests in You",
    desc: "Your growth isn't an afterthought. Through mentorship, development conversations, and diverse experience, you have the support to shape your career.",
  },
  {
    title: "A Culture of Trust and Respect",
    desc: "We value your experience and empower you to take ownership of your work, contribute ideas, and collaborate across all levels.",
  },
  {
    title: "Stability with Forward Momentum",
    desc: "With over 50 years of history and a forward-thinking approach, we combine a strong foundation with a focus on the future.",
  },
];

const testimonials = [
  {
    quote:
      "They support a  healthy work life balance and encourage you to purse the direction you want to go in your career, even if it's a complete 180 from where you started.",
    name: "Career Development",
  },
  {
    quote:
      "I truly work at a firm that cares about our work life balance. They care about how we are doing personally, how our families are doing, etc. They also offer a lot of oustide of work activities to grow closer to one another as a team.",
    name: "Great Work-Life Balance",
  },
  {
    quote:
      "There is a positive work culture and the employees/leadership make it this way. There are growth opportunities. They are always trying to promote from within whenever possible.",
    name: "Growth Opportunities",
  },
];

const shareholderPhoto = {
  src: "/images/Career/shareholders.jpg",
  alt: "Rudler shareholders group photo",
};

export default function ProfessionalsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-200/70 bg-white">
        <div className="container-page grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 reveal">
            <Link
              href="/careers"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Back to Careers
            </Link>
            <p className="section-kicker">Experienced Professionals</p>
            <h1 className="text-4xl font-semibold text-ink-900">
              Advance Your Accounting Career with a Firm That Invests in You
            </h1>
            <p className="text-lg text-slate-600">
              Take the next step in your career with meaningful client work,
              growth opportunities, and a team that supports your long-term
              success. At Rudler, PSC, we offer accounting careers in Northern
              Kentucky and the Cincinnati area, as well as opportunities for
              professionals across the country.
            </p>
            <p className="text-base text-slate-600">
              With flexible work options—including remote, hybrid, and
              in-office roles—we welcome candidates both locally and nationwide
              who are looking to grow in public accounting.
            </p>
            <Link href="https://rudlerpsc.applytojob.com/apply/" className="btn-primary inline-flex" target="_blank">
              View Career Opportunities
            </Link>
          </div>
          <div className="card space-y-4 p-6 border-2 border-slate-400 reveal reveal-delay-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
              At a Glance
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Remote, hybrid, and in-office roles available
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Annual raises and performance-based bonuses
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                401(k) with profit-sharing opportunities
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                50+ years serving Northern Kentucky & Cincinnati
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="container-page py-16">
        <div className="mb-10 reveal">
          <p className="section-kicker">Your Career at Rudler</p>
          <h2 className="section-title">What to Expect</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3 reveal reveal-delay-1">
          {whatToExpect.map((item) => (
            <div key={item.title} className="card p-6 space-y-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-semibold text-ink-900">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="border-t border-slate-200/70 bg-slate-50">
        <div className="container-page grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-10 reveal">
              <p className="section-kicker">Benefits & Perks</p>
              <h2 className="section-title">What We Offer</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 reveal reveal-delay-1">
              <div className="card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-5">
                  Core Benefits
                </h3>
                <ul className="space-y-4">
                  {corePerks.map((perk, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600">
                      <svg className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-5">
                  Additional Perks
                </h3>
                <ul className="space-y-4">
                  {additionalPerks.map((perk, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600">
                      <svg className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <figure className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm reveal reveal-delay-1">
            <img
              src={shareholderPhoto.src}
              alt={shareholderPhoto.alt}
              className="w-full object-contain object-center lg:h-full lg:min-h-[420px] lg:object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      {/* Why Professionals Choose Rudler */}
      <section className="container-page py-16">
        <div className="mb-10 reveal">
          <p className="section-kicker">Why Us</p>
          <h2 className="section-title">Why Experienced Professionals Choose Rudler, PSC</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 reveal reveal-delay-1">
          {whyRudler.map((item) => (
            <div key={item.title} className="card p-6 space-y-2">
              <h3 className="font-semibold text-ink-900">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Build a Career / NKY / Remote */}
      <section className="border-t border-slate-200/70 bg-slate-50">
        <div className="container-page py-16 grid gap-12 md:grid-cols-2">
          <div className="space-y-4 reveal">
            <p className="section-kicker">Build a Career, Not Just a Job</p>
            <h2 className="section-title">Meaningful Work at Every Level</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              At Rudler CPA, our professionals don't just complete tasks—they
              build relationships, solve problems, and make a meaningful impact
              for our clients. You'll work alongside a collaborative team that
              values your input and supports your growth every step of the way.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We believe in investing in our people for the long term. Through
              mentorship, ongoing development conversations, and exposure to a
              variety of service areas, our team members can expand their skills
              and shape their career paths.
            </p>
          </div>
          <div className="space-y-4 reveal reveal-delay-1">
            <p className="section-kicker">Work From Anywhere</p>
            <h2 className="section-title">Northern Kentucky, Cincinnati & Beyond</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our firm is based in Northern Kentucky and serves clients
              throughout the Cincinnati region and beyond, offering
              opportunities for professionals seeking a firm that values
              flexibility, growth, and a strong team culture.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              While our firm is based in Northern Kentucky, we proudly hire
              talented accounting professionals from across the United States.
              Whether you're local to the Cincinnati area or seeking a fully
              remote opportunity, we provide the flexibility and support to help
              you succeed from wherever you are.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials placeholder + CTA */}
      <section id="opportunities" className="border-t border-slate-200/70 bg-white">
        <div className="container-page py-16 text-center reveal">
          <p className="section-kicker">What Our Team Says</p>
          <h2 className="section-title mx-auto max-w-lg">
            Hear from the professionals who've built their careers here.
          </h2>
          <br />< br />
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className={`relative h-full reveal reveal-delay-${i + 1}`}>
              <div className="absolute -top-6 -left-4 text-7xl font-body text-surface-container-highest leading-none select-none">
                &ldquo;
              </div>
              <div className="pt-8 h-full flex flex-col">
                <p className="font-body text-xl leading-relaxed text-on-surface-variant mb-8 italic flex-1">
                  {t.quote}
                </p>
                <div className="border-t border-outline-variant pt-6">
                  <p className="font-body font-bold text-primary">{t.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div> <br />
          <div className="mt-10">
            <Link
              href="https://rudlerpsc.applytojob.com/apply/"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Job Postings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
