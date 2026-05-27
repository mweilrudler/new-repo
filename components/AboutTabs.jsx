"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { teamSections as staffSections } from "../app/team/team-data.js";

const industries = [
  { name: "Manufacturing & Distribution", href: "/industries/manufacturing-and-distribution" },
  { name: "Construction", href: "/industries/construction" },
  { name: "Food & Beverage", href: "/industries/food-and-beverage" },
  { name: "Transportation", href: "/industries/transportation-and-logistics" },
  { name: "Professional Services", href: "/industries" },
  { name: "Not-for-Profit Organizations", href: "/industries/not-for-profit" },
];

const values = [
  {
    title: "We Are Committed to Our Clients",
    desc: "We value the relationships we build and ensure that everything we do is in our clients' best interests. Our personalized approach is rooted in deep knowledge, consistency, and a commitment to delivering solutions that align with each client's unique goals and business needs.",
  },
  {
    title: "We Respect Our People",
    desc: "We value our employees and the unique perspectives they bring. Each team member is empowered to take ownership of their work, contribute ideas, and collaborate across all levels of the firm—creating an environment where innovation and growth thrive.",
  },
  {
    title: "We Are Proactive",
    desc: "Our goal is to be a trusted advisor to every client. We maintain open communication, anticipate needs, and go beyond what's expected to deliver thoughtful, strategic solutions. Through strong partnerships and collaboration, we help our clients reach their goals.",
  },
  {
    title: "We Are Innovators",
    desc: "We embrace technology and continuously improve our processes to deliver forward-thinking solutions. Our commitment to innovation enhances efficiency, strengthens client service, and supports a healthy work-life balance for our team.",
  },
  {
    title: "We Are Champions for Our Community",
    desc: "Our commitment extends beyond our clients. Through active involvement in nonprofit organizations and community initiatives, we dedicate our time and resources to making a meaningful impact and supporting the communities we serve.",
  },
];

const donaldRudlerPhoto = {
  src: "/images/about us/mr rudler.png",
  alt: "Donald Rudler with early Rudler team members",
};

const presidentPhoto = {
  src: "/images/about us/presidents.png",
  alt: "Rudler firm presidents across generations",
};

const awardSections = [
  {
    title: "Workplace & Culture Recognition",
    items: [
      {
        title: "Accounting Today - Best Accounting Firms to Work For",
        desc: "Recognized nationally as a top accounting firm for workplace culture.",
        years: "2025 (also 2012, 2014, 2015, and 2017-2024)",
        logo: "/images/2025_ARIZENT_AT_BEST-FIRMS-TO-WORK-FOR.png",
      },
      {
        title: "Accounting Today - Best Firms for Young Accountants",
        desc: "Honored for developing and supporting early-career professionals.",
        years: "2025 (also 2024)",
        logo: "/images/2025-ACCOUNTING-TODAY_BEST-FIRMS-FOR-YOUNG-ACCOUNTANTS_LOGO_RGB-cropped.png",
      },
      {
        title: "Northern Kentucky Magazine - Best Workplaces",
        desc: "Recognized for a positive and engaging workplace environment.",
        years: "2024 (also 2022-2023)",
        logo: "/images/2024-Best-NKY-logo.jpg",
      },
    ],
  },
  {
    title: "Industry Recognition",
    items: [
      {
        title: "IPA 500 Firm",
        desc: "Ranked among top U.S. accounting firms based on revenue.",
        years: "2025 (also 2022-2024)",
        logo: "/images/IPA-Award-Logo-Top-500-Firms.png",
      },
      {
        title: "IPA 400 Firm",
        desc: "Recognized among top firms for growth and performance.",
        years: "2021 (also 2018)",
        logo: "/images/2021_IPA-400_JPG-compressed.jpg",
      },
      {
        title: "Accounting Today - Best Firm for Technology",
        desc: "Recognized for innovation and forward-thinking technology use.",
        years: "2019",
        logo: "/images/2025_ARIZENT_AT_BEST-FIRMS-TO-WORK-FOR.png",
      },
    ],
  },
  {
    title: "Community & Regional Awards",
    items: [
      {
        title: "Cincinnati Magazine - Best in Cincy Business",
        desc: "Recognized by the local business community.",
        years: "Also recognized in 2021",
        logo: "/images/best-in-cincy-business-snapshot.png",
      },
      {
        title: "Cincy Magazine - Family Choice Award",
        desc: "Honored for supporting families in Greater Cincinnati.",
        years: "Community recognition",
        logo: "/images/family-choice-awards-screen-shot.png",
      },
      {
        title: "NKY Chamber - Business Impact Award (Heritage)",
        desc: "Recognized for long-term stability and community impact.",
        years: "Heritage Award",
        logo: "/images/nky-chamber.jpg",
      },
      {
        title: "Medical Mutual Pillar Award for Community Service",
        desc: "Honored for commitment to volunteerism and service.",
        years: "Community service recognition",
        logo: "/images/nky-chamber.jpg",
      },
      {
        title: "Business Impact Award - Community Champions",
        desc: "Recognized for giving back and supporting inclusion.",
        years: "2017",
        logo: "/images/nky-chamber.jpg",
      },
    ],
  },
];

const tabs = [
  { label: "Our Story", hash: "our-story" },
  { label: "Mission & Values", hash: "mission-values" },
  { label: "Awards", hash: "awards" },
  { label: "Our Team", hash: "our-team" },
];

export default function AboutTabs() {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef([]);

  const scrollToSection = (index) => {
    const el = sectionRefs.current[index];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 220;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  const handleTabChange = (index) => {
    setActive(index);
    if (typeof window !== "undefined") {
      history.replaceState(null, "", `#${tabs[index].hash}`);
    }
    scrollToSection(index);
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const idx = tabs.findIndex((t) => t.hash === hash);
    if (idx >= 0) {
      setActive(idx);
      // Give the layout one frame so refs are populated.
      requestAnimationFrame(() => scrollToSection(idx));
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const idx = Number(visible[0].target.dataset.sectionIndex);
          setActive(idx);
        }
      },
      {
        rootMargin: "-220px 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-200/70 bg-white">
        <div className="container-page grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5 reveal">
            <p className="section-kicker">About Rudler</p>
            <h1 className="text-4xl font-semibold text-ink-900">
              A Different Kind of Accounting Firm
            </h1>
            <p className="text-lg text-slate-600">
              At Rudler, PSC, we believe accounting is more than numbers—it's
              about relationships, trust, and helping people move forward with
              confidence.
            </p>
            <p className="text-base text-slate-600">
              Founded in 1969 by Donald Rudler, our firm has been serving
              clients for over 50 years. Today, we are a full-service public
              accounting and advisory firm based in Northern Kentucky, serving
              the Cincinnati region and beyond.
            </p>
          </div>
          <div className="card space-y-4 p-6 border-2 border-slate-400 reveal reveal-delay-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest-600">
              At a Glance
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                "Founded in 1969 by Donald Rudler",
                "50+ years serving Northern Kentucky & Cincinnati",
                "Full-service tax, assurance & advisory",
                "Deeply rooted in the communities we serve",
              ].map((item) => (
                <li key={item} className="flex gap-2">
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

      {/* Tab strip — horizontal, sticky, acts as scroll anchors */}
      <div
        data-about-tabstrip
        className="sticky top-32 z-40 bg-white border-b border-slate-200 shadow-sm transition-colors sm:top-36 md:top-40 xl:top-44"
      >
        <div className="container-page flex gap-0 flex-wrap">
          {tabs.map((tab, i) => (
            <button
              key={tab.hash}
              data-about-tab
              onClick={() => handleTabChange(i)}
              className={`about-tab whitespace-nowrap px-6 py-4 text-sm font-medium transition-colors border-b-2 -mb-px ${
                active === i
                  ? "border-primary text-primary"
                  : "border-transparent text-on-surface-variant hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab: Our Story */}
      <div
        id="our-story"
        ref={(el) => (sectionRefs.current[0] = el)}
        data-section-index="0"
        className="scroll-mt-[220px]"
      >
          {/* Relationships + Strategic Partner */}
          <section className="container-page py-16">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-4 reveal">
                <p className="section-kicker">Our Foundation</p>
                <h2 className="section-title">Built on Relationships That Last</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  For decades, our clients have trusted us not just as
                  accountants, but as advisors. Many of those relationships have
                  spanned generations—because we take the time to understand
                  each client's goals, challenges, and vision for the future.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We believe the best results come from strong relationships.
                  That means being accessible, proactive, and committed to doing
                  what's right—every time.
                </p>
              </div>
              <div className="space-y-4 reveal reveal-delay-1">
                <p className="section-kicker">Our Approach</p>
                <h2 className="section-title">More Than Accounting—A Strategic Partner</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Rudler, PSC is a full-service accounting firm offering tax,
                  assurance, and business advisory services. But what truly sets
                  us apart is our approach.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {[
                    "Navigate complex tax and financial decisions",
                    "Manage risk and improve performance",
                    "Plan for growth, transition, and long-term success",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
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

          {/* Industries */}
          <section className="container-page py-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-10 reveal">
                  <p className="section-kicker">Industries We Serve</p>
                  <h2 className="section-title">Deep Expertise Across Industries</h2>
                  <p className="mt-3 text-sm text-slate-600 max-w-2xl">
                    We work with a wide range of industries throughout Northern
                    Kentucky, Cincinnati, and across the region.
                  </p>
                </div>
                <div className="grid gap-4 grid-cols-2 reveal reveal-delay-1">
                  {industries.map((industry) => (
                    <Link
                      key={industry.name}
                      href={industry.href}
                      className="card p-5 flex items-center gap-3 transition hover:-translate-y-0.5 hover:shadow-soft hover:bg-primary/5"
                    >
                      <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                      <span className="text-sm font-medium text-ink-900">{industry.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <figure className="mx-auto w-full max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm reveal reveal-delay-1">
                <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                  <img
                    src={presidentPhoto.src}
                    alt={presidentPhoto.alt}
                    className="h-full w-full object-cover object-[45%_center]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
            </div>
          </section>

          {/* Culture + Community */}
          <section className="border-t border-slate-200/70 bg-slate-50">
            <div className="container-page grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
              <figure className="order-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm reveal lg:order-1">
                <img
                  src={donaldRudlerPhoto.src}
                  alt={donaldRudlerPhoto.alt}
                  className="w-full object-contain object-center"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="order-1 space-y-10 lg:order-2">
                <div className="space-y-4 reveal reveal-delay-1">
                  <p className="section-kicker">Our Culture</p>
                  <h2 className="section-title">A Culture That Puts People First</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our commitment to relationships extends beyond our
                    clients—it's at the core of our team culture. We foster an
                    environment that is professional and progressive, collaborative
                    and supportive, focused on growth and development, and engaged
                    in our community.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    We believe when our people thrive, our clients do too.
                  </p>
                </div>
                <div className="space-y-4 reveal reveal-delay-1">
                  <p className="section-kicker">Our Community</p>
                  <h2 className="section-title">Rooted in Community, Focused on the Future</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    From our beginnings in 1969 to where we are today, Rudler,
                    PSC has remained deeply connected to the communities we serve.
                    We are committed to giving back, building meaningful
                    connections, and contributing to the success of local
                    businesses and organizations.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    At the same time, we continue to evolve—embracing new
                    technologies, expanding our services, and investing in our
                    people to better serve the future.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-slate-200/70 bg-white">
            <div className="container-page py-16 reveal">
              <div className="max-w-2xl">
                <p className="section-kicker">Move Forward with Confidence</p>
                <h2 className="section-title">The right partner helps you get where you want to go.</h2>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  Whether you're a business owner planning for growth, an
                  individual navigating complex financial decisions, or an
                  organization preparing for what's next—Rudler, PSC is here to
                  help.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="btn-primary">
                    Schedule a Consultation
                  </Link>
                  <Link href="/services" className="btn-outline">
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </section>
      </div>

      {/* Tab: Mission & Values */}
      <div
        id="mission-values"
        ref={(el) => (sectionRefs.current[1] = el)}
        data-section-index="1"
        className="scroll-mt-[220px] border-t border-slate-200/70"
      >
          {/* Mission / Vision / Motto */}
          <section className="container-page py-16">
            <div className="mb-10 reveal">
              <p className="section-kicker">Who We Are</p>
              <h2 className="section-title">Our Mission, Vision & Values</h2>
              <p className="mt-3 text-sm text-slate-600 max-w-2xl">
                Our mission, vision, and values guide everything we do—from how
                we serve our clients to how we support our team and engage with
                our community.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 reveal reveal-delay-1">
              <div className="card p-6 space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Mission</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  At Rudler, we strive to deliver a passionate, innovative, and
                  personalized approach to everything we do by creating a
                  culture where employees feel valued, by establishing trusted
                  relationships with clients, and by committing to serve our
                  community.
                </p>
              </div>
              <div className="card p-6 space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Vision</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We are a CPA firm that prides ourselves on being a valued
                  partner in the personal relationships we create with our team,
                  clients and community now and in the future.
                </p>
              </div>
              <div className="card p-6 space-y-3 bg-primary text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Our Motto</p>
                <p className="text-xl font-body font-semibold">Pursue Your Vision</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  For our clients, it means helping them achieve their financial
                  and business goals. For our people, it means supporting their
                  professional growth and helping them build the careers they
                  aspire to.
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="border-t border-slate-200/70 bg-slate-50">
            <div className="container-page py-16">
              <div className="mb-10 reveal">
                <p className="section-kicker">Our Values</p>
                <h2 className="section-title">What We Stand For</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 reveal reveal-delay-1">
                {values.map((value) => (
                  <div key={value.title} className="card p-6 space-y-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-ink-900">{value.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
      </div>

      {/* Tab: Awards */}
      <div
        id="awards"
        ref={(el) => (sectionRefs.current[2] = el)}
        data-section-index="2"
        className="scroll-mt-[220px] border-t border-slate-200/70"
      >
          <section className="container-page py-16">
            <div className="mb-10 reveal">
              <p className="section-kicker">Awards & Recognition</p>
              <h2 className="section-title">Recognized for Excellence</h2>
              <p className="mt-3 text-sm text-slate-600 max-w-3xl">
                Rudler CPA is proud to be recognized both nationally and locally
                for our commitment to our people, clients, and community.
              </p>
            </div>

            <div className="space-y-12">
              {awardSections.map((section, sectionIndex) => (
                <div
                  key={section.title}
                  className={`reveal ${sectionIndex > 0 ? "reveal-delay-1" : ""}`}
                >
                  <h3 className="text-2xl font-semibold text-ink-900 mb-5">
                    {section.title}
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {section.items.map((award) => (
                      <div
                        key={award.title}
                        className="card rounded-xl border border-slate-300 bg-white p-6"
                      >
                        <div className="h-16 w-full flex items-center justify-center">
                          <img
                            src={award.logo}
                            alt={award.title}
                            className="max-h-14 w-auto object-contain"
                          />
                        </div>
                        <h4 className="mt-4 text-base font-semibold text-ink-900 leading-snug">
                          {award.title}
                        </h4>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                          {award.desc}
                        </p>
                        <p className="mt-2 text-xs font-medium text-slate-500">
                          {award.years}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
      </div>

      {/* Tab: Our Team */}
      <div
        id="our-team"
        ref={(el) => (sectionRefs.current[3] = el)}
        data-section-index="3"
        className="scroll-mt-[220px] border-t border-slate-200/70"
      >
          <section className="container-page py-16">
            <div className="max-w-3xl reveal">
              <p className="section-kicker">Our Team</p>
              <h2 className="section-title">Meet the people behind the work.</h2>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                At Rudler, our firm's expertise comes from our collective depth
                of knowledge and the people who put that knowledge to work for
                our clients every day.
              </p>
            </div>

            <div className="mt-12 space-y-16">
              {staffSections.map((section, sectionIndex) => (
                <div
                  key={section.title}
                  className={`reveal ${sectionIndex > 0 ? "reveal-delay-1" : ""}`}
                >
                  <div className="mb-6 flex flex-col gap-2 border-b border-slate-200 pb-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                        {section.title}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold text-ink-900">
                        {section.label}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500">
                      {section.people.length} team members
                    </p>
                  </div>

                  <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {section.people.map((person) => (
                      <Link
                        key={`${section.folder}-${person.name}`}
                        href={`/team/${person.slug}`}
                        className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(13,32,59,0.08)]"
                      >
                        <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                          <img
                            src={person.imageSrc}
                            alt={person.name}
                            className="h-full w-full object-cover object-top grayscale-[4%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                            loading={sectionIndex === 0 ? "eager" : "lazy"}
                            decoding="async"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-base font-semibold text-ink-900">
                            <span>{person.name}</span>
                            {person.credentials && (
                              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                                {person.credentials}
                              </span>
                            )}
                          </h4>
                          <p className="mt-1 text-sm leading-snug text-slate-600">
                            {person.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
      </div>
    </div>
  );
}
