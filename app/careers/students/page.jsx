import Link from "next/link";

export const metadata = {
  title: "Student Internships | Careers | Rudler CPA",
  description:
    "Launch your accounting career with Rudler CPA's internship program. Real client work, hands-on training, and a team invested in your success.",
};

const whatToExpect = [
  {
    title: "Real-World Experience",
    desc: "Work on real client projects that build practical, career-ready skills.",
  },
  {
    title: "On-the-Job Training",
    desc: "Learn by doing with hands-on training and guidance from experienced professionals.",
  },
  {
    title: "Team Environment",
    desc: "Collaborate with a supportive team that values learning and open communication.",
  },
  {
    title: "Advanced Technology",
    desc: "Use modern tools and software that reflect today's accounting industry.",
  },
  {
    title: "Work & School Balance",
    desc: "Balance your academic commitments with a flexible and supportive work schedule.",
  },
  {
    title: "Engaging Workplace Culture",
    desc: "From games and giveaways to catered meals and team events, we make work a place you'll actually enjoy.",
  },
];

const corePerks = [
  "Professional Development Support – Gain access to training and learning opportunities (including CPA-related education) to support your long-term career growth.",
  "Competitive Compensation – Opportunities for raises and bonuses for extended interns.",
];

const additionalPerks = [
  "Cell Phone Reimbursement – Helping you stay connected and productive.",
  "Employee Committees – Opportunities to get involved and shape our workplace culture (available to extended interns).",
  "Team Activities & Book Clubs – Building connections beyond the day-to-day work.",
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

export default function StudentsPage() {
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
            <p className="section-kicker">Students & Internships</p>
            <h1 className="text-4xl font-semibold text-ink-900">
              Launch Your Accounting Career with Real-World Experience
            </h1>
            <p className="text-lg text-slate-600">
              Start your career with hands-on experience, real client work, and
              a team invested in helping you grow from day one. Our accounting
              internship program serves students from the Cincinnati area and
              surrounding communities and is designed for college students
              seeking real-world experience in public accounting.
            </p>
            <Link href="https://rudlerpsc.applytojob.com/apply/" className="btn-primary inline-flex" target="_blank">
              View Internship Opportunities
            </Link>
          </div>
          <div className="card space-y-4 p-6 border-2 border-slate-400 reveal reveal-delay-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
              Quick Facts
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Based in Northern Kentucky, serving the Cincinnati region
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Two-week in-person training program to start
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Personalized learning plan with webinars & podcasts
              </li>
              <li className="flex gap-2">
                <svg className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Many interns transition to full-time roles
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="container-page py-16">
        <div className="mb-10 reveal">
          <p className="section-kicker">Internship Program</p>
          <h2 className="section-title">What to Expect</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 reveal reveal-delay-1">
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

      {/* Rudsley the Mascot */}
      <section className="border-t border-b border-slate-200/70 bg-slate-50">
        <div className="container-page py-14">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] items-center">
            <div className="space-y-4 reveal">
              <p className="section-kicker">Meet Our Mascot</p>
              <h2 className="section-title">Meet Rudsley, Our Mascot</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                At Rudler, even our culture has personality. Our unofficial
                mascot, Rudsley the pig, started as part of a 2021 stuffed
                animal drive and quickly became a team favorite. His name was
                chosen through a company-wide vote, and as a nod to "piggy
                banks," he's a fun reminder of the work we do every day.
              </p>
            </div>
            <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm reveal reveal-delay-1">
              <img
                src="/images/Career/rudsley.png"
                alt="Rudsley, Rudler's mascot"
                className="h-full min-h-[260px] w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="container-page py-16">
        <div className="max-w-3xl reveal">
          <p className="section-kicker">More About the Program</p>
          <h2 className="section-title">Real Work. Real Growth.</h2>
          <div className="mt-6 space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              Our interns don't just sit back and observe—they contribute to
              real client work with the support and guidance of experienced
              professionals. We take pride in a culture that is both
              professional and progressive, while still knowing how to have fun.
            </p>
            <p>
              Interns are fully immersed in our environment and have the
              opportunity to participate in activities like bingo, company
              celebrations, ticket raffles, community volunteering, and more.
            </p>
            <p>
              Each intern is assigned a personalized learning plan that includes
              recorded webinars, podcasts, and other resources to support their
              development throughout the internship. In addition, interns
              participate in a two-week, in-person training program led by our
              team, helping them build a strong foundation from day one.
            </p>
            <p>
              While not guaranteed, many of our interns continue with us beyond
              the initial timeframe—most commonly after tax season—and
              transition into extended internships or full-time opportunities.
              In fact, many of our full-time team members began their careers
              here as interns.
            </p>
            <p>
              As a full-service accounting firm, we also provide opportunities
              for extended interns and full-time team members to gain exposure
              across multiple departments, helping them discover the path that
              best fits their career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="border-t border-slate-200/70 bg-slate-50">
        <div className="container-page py-16">
          <div className="mb-10 reveal">
            <p className="section-kicker">Benefits & Perks</p>
            <h2 className="section-title">What We Offer</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 reveal reveal-delay-1">
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
      </section>

      {/* Testimonials placeholder */}
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
              <div className="absolute -top-6 -left-4 text-7xl font-headline text-surface-container-highest leading-none select-none">
                &ldquo;
              </div>
              <div className="pt-8 h-full flex flex-col">
                <p className="font-headline text-xl leading-relaxed text-on-surface-variant mb-8 italic flex-1">
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
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
