import Link from "next/link";

export const metadata = {
  title: "Careers | Rudler CPA",
  description:
    "Build your career at Rudler CPA. Opportunities for students, interns, and experienced professionals in Northern Kentucky and remote across the US.",
};

const awards = [
  { src: "/images/2025_ARIZENT_AT_BEST-FIRMS-TO-WORK-FOR.png", alt: "2025 Arizent Best Firms to Work For" },
  { src: "/images/2025-ACCOUNTING-TODAY_BEST-FIRMS-FOR-YOUNG-ACCOUNTANTS_LOGO_RGB-cropped.png", alt: "2025 Accounting Today Best Firms for Young Accountants" },
  { src: "/images/IPA-Award-Logo-Top-500-Firms.png", alt: "IPA Top 500 Firms" },
  { src: "/images/2024-Best-NKY-logo.jpg", alt: "2024 Best of NKY" },
  { src: "/images/best-in-cincy-business-snapshot.png", alt: "Best in Cincinnati Business" },
  { src: "/images/family-choice-awards-screen-shot.png", alt: "Family Choice Awards" },
  { src: "/images/2021_IPA-400_JPG-compressed.jpg", alt: "2021 IPA 400" },
  { src: "/images/nky-chamber.jpg", alt: "NKY Chamber" },
];

const whyRudler = [
  {
    title: "Meaningful Work",
    desc: "Build relationships and make an impact with real clients.",
  },
  {
    title: "Flexible Work Options",
    desc: "Remote, hybrid, and in-office opportunities available nationwide.",
  },
  {
    title: "Growth & Development",
    desc: "Mentorship, career planning, and ongoing professional development.",
  },
  {
    title: "Work-Life Balance",
    desc: "PTO structure that rewards your time and supports flexibility.",
  },
  {
    title: "Supportive Culture",
    desc: "A collaborative team environment that values your ideas and contributions.",
  },
];

export default function Careers() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-200/70 bg-white">
        <div className="container-page grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 reveal">
            <p className="section-kicker">Careers</p>
            <h1 className="text-4xl font-semibold text-ink-900">
              Build Your Career at Rudler
            </h1>
            <p className="text-lg text-slate-600">
              Whether you're just starting out or looking to take the next step,
              Rudler offers opportunities to grow, contribute, and succeed in a
              supportive and forward-thinking environment.
            </p>
            <p className="text-base text-slate-600">
              As a full-service accounting and advisory firm based in Northern
              Kentucky and serving the Cincinnati region and beyond, we are
              always looking for motivated individuals who want to make an
              impact.
            </p>
            <Link href="https://rudlerpsc.applytojob.com/apply/" target="_blank" className="btn-primary inline-flex">
              View Open Positions
            </Link>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {awards.map((award) => (
              <img
                key={award.alt}
                src={award.src}
                alt={award.alt}
                className="h-16 w-auto object-contain"
              />
            ))}
          </div>
          {/* <div className="card space-y-4 p-6 reveal reveal-delay-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
              Why Rudler
            </p>
            <ul className="space-y-3">
              {whyRudler.map((item) => (
                <li key={item.title} className="flex gap-3 text-sm text-slate-600">
                  <span className="mt-0.5 text-secondary flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span>
                    <span className="font-semibold text-ink-900">{item.title}</span>
                    {" – "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </section>

      {/* Find the Right Path */}
      <section className="container-page py-16">
        <div className="mb-10 reveal">
          <p className="section-kicker">Find the Right Path for You</p>
          <h2 className="section-title">Where do you want to start?</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 reveal reveal-delay-1">
          {/* Students card */}
          <div className="card p-8 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-ink-900 mb-2">Students & Internships</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Start your accounting career with hands-on experience, real
                client work, and a team invested in your growth. Our internship
                program is designed to give you the skills and confidence you
                need to succeed in public accounting.
              </p>
            </div>
            <Link href="/careers/students" className="btn-outline self-start">
              Explore Our Students Page
            </Link>
          </div>

          {/* Professionals card */}
          <div className="card p-8 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-ink-900 mb-2">Experienced Professionals</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Take the next step in your career with meaningful work, flexible
                options, and opportunities for long-term growth. Whether you're
                looking for remote, hybrid, or in-office roles, we provide the
                support and flexibility to help you succeed.
              </p>
            </div>
            <Link href="/careers/professionals" className="btn-outline self-start">
              Explore Our Professionals Page
            </Link>
          </div>
        </div>
      </section>

      {/* Why Work at Rudler CPA */}
      <section className="border-t border-slate-200/70 bg-white">
        <div className="container-page py-16">
          <div className="mb-10 reveal">
            <p className="section-kicker">Why Work at Rudler CPA</p>
            <h2 className="section-title">More Than Just a Job</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 reveal reveal-delay-1">
            {whyRudler.map((item) => (
              <div key={item.title} className="card border-2 border-slate-500 p-6">
                <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="border-t border-slate-200/70 bg-slate-50">
        <div className="container-page py-16">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-4 reveal">
              <p className="section-kicker">Our Culture</p>
              <h2 className="section-title text-3xl md:text-4xl">A Culture That Supports Your Success</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                At Rudler PSC, we believe our people are our greatest asset. We
                are committed to creating a workplace that is professional,
                progressive, and supportive—where individuals are empowered to
                grow and succeed.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                From mentorship and development opportunities to a team-oriented
                culture, we provide an environment where you can build a
                meaningful and rewarding career.
              </p>
            </div>
            <div className="space-y-4 reveal reveal-delay-1">
              <p className="section-kicker">Work From Anywhere</p>
              <h2 className="section-title text-3xl md:text-4xl">Work With Us—From Anywhere</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                While our firm is based in Northern Kentucky, we proudly hire
                talented professionals from across the United States. Whether
                you're local to the Cincinnati area or seeking a fully remote
                opportunity, we offer the flexibility to support your career
                goals.
              </p>
            </div>
            <div className="space-y-4 reveal reveal-delay-1">
              <p className="section-kicker">Awards & Recognition</p>
              <h2 className="section-title text-3xl md:text-4xl">Recognized as a Great Place to Work</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our commitment to our people has been recognized both nationally and locally:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 leading-relaxed">
                <li>Named on of Accounting Today's <strong>Best Accounting Firms to Work For</strong></li>
                <li>Recognized as a <strong>Best Firm for Young Accountants</strong></li>
                <li>Featured as a <strong>Best Workplace in Northern Kentucky</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions CTA */}
      <section id="open-positions" className="border-t border-slate-200/70 bg-white">
        <div className="container-page py-16 text-center reveal">
          <p className="section-kicker">Ready to Get Started?</p>
          <h2 className="section-title mx-auto max-w-xl">
            Explore our current opportunities.
          </h2>
          <p className="mt-4 text-slate-600 max-w-lg mx-auto">
            Take the next step in your career with Rudler CPA.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers/students" className="btn-primary">
              Students & Internships
            </Link>
            <Link href="/careers/professionals" className="btn-outline">
              Experienced Professionals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
