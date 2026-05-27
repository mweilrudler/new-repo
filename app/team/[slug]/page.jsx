import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getRelatedTeamMembers,
  getTeamMemberBySlug,
  teamMembers,
} from "../team-data.js";

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return { title: "Team" };
  }

  const credentialSuffix = member.credentials ? `, ${member.credentials}` : "";
  return {
    title: `${member.name}${credentialSuffix} — ${member.title}`,
    description:
      (member.bio && member.bio[0]) ||
      `${member.name} is a ${member.title} at Rudler, PSC.`,
  };
}

function DetailList({ kicker, title, items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="card p-6 space-y-4">
      <p className="section-kicker">{kicker}</p>
      <h3 className="text-xl font-semibold text-ink-900">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-slate-600"
          >
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function TeamMemberPage({ params }) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  const related = getRelatedTeamMembers(member.slug, 4);
  const hasBio = Array.isArray(member.bio) && member.bio.length > 0;
  const hasPersonal = Boolean(member.personal);
  const hasCommunity =
    Array.isArray(member.community) && member.community.length > 0;
  const hasContact = Boolean(member.email || member.phone);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-200/70 bg-surface-container-low">
        <div className="container-page py-12 md:py-16">
          <Link
            href="/about#our-team"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            <span aria-hidden="true">&lt;-</span> Back to Our Team
          </Link>

          <div className="grid gap-10 lg:grid-cols-[minmax(280px,360px)_minmax(0,1fr)] lg:items-start">
            <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm reveal">
              <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </figure>

            <div className="space-y-6 reveal reveal-delay-1">
              <p className="section-kicker">{member.department}</p>
              <div className="space-y-3">
                <h1 className="flex flex-wrap items-baseline gap-x-3 gap-y-2 text-4xl font-semibold leading-tight text-ink-900 md:text-5xl">
                  <span>{member.name}</span>
                  {member.credentials && (
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary md:text-base">
                      {member.credentials}
                    </span>
                  )}
                </h1>
                <p className="text-lg text-slate-600">{member.title}</p>
              </div>

              {hasContact && (
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-5 text-sm">
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`}
                      className="inline-flex items-center gap-2 font-semibold text-ink-900 transition hover:text-primary"
                    >
                      <svg
                        className="h-4 w-4 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                      {member.phone}
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 font-semibold text-ink-900 transition hover:text-primary"
                    >
                      <svg
                        className="h-4 w-4 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                      {member.email}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bio + sidebar */}
      <section className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-start">
          <article className="space-y-6 reveal">
            <p className="section-kicker">About {member.name.split(" ")[0]}</p>
            <h2 className="section-title">Background & Approach</h2>
            {hasBio ? (
              member.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-8 text-on-surface-variant md:text-lg"
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-base leading-8 text-on-surface-variant md:text-lg">
                A detailed bio for {member.name} is coming soon. In the
                meantime, feel free to reach out through our contact page to
                connect with our team.
              </p>
            )}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-48 reveal reveal-delay-1">
            <div className="rounded-xl bg-primary p-6 text-white shadow-sm">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-secondary-fixed">
                Connect With {member.name.split(" ")[0]}
              </p>
              <h2 className="font-body text-2xl font-semibold leading-tight">
                Have a question or want to chat?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Reach out to schedule a conversation with our team about how we
                can support your goals.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-secondary-fixed"
              >
                Schedule a Consultation
              </Link>
            </div>

            <DetailList
              kicker="Designations"
              title="Credentials"
              items={member.designations}
            />
            <DetailList
              kicker="Education"
              title="Academic Background"
              items={member.education}
            />
          </aside>
        </div>
      </section>

      {/* Areas of Concentration / Industries */}
      {(member.areasOfConcentration?.length > 0 ||
        member.industries?.length > 0) && (
        <section className="border-t border-slate-200/70 bg-slate-50">
          <div className="container-page py-16">
            <div className="grid gap-6 md:grid-cols-2 reveal">
              <DetailList
                kicker="Areas of Concentration"
                title="What I Focus On"
                items={member.areasOfConcentration}
              />
              <DetailList
                kicker="Industry Experience"
                title="Who I Serve"
                items={member.industries}
              />
            </div>
          </div>
        </section>
      )}

      {/* Memberships / Community */}
      {(member.memberships?.length > 0 || hasCommunity) && (
        <section className="border-t border-slate-200/70 bg-white">
          <div className="container-page py-16">
            <div className="grid gap-6 md:grid-cols-2 reveal">
              <DetailList
                kicker="Professional Memberships"
                title="Affiliations"
                items={member.memberships}
              />
              <DetailList
                kicker="Community Involvement"
                title="Giving Back"
                items={member.community}
              />
            </div>
          </div>
        </section>
      )}

      {/* Personal */}
      {hasPersonal && (
        <section className="border-t border-slate-200/70 bg-slate-50">
          <div className="container-page py-16 reveal">
            <div className="max-w-3xl">
              <p className="section-kicker">Outside the Office</p>
              <h2 className="section-title">A Little More About Me</h2>
              <p className="mt-4 text-base leading-8 text-on-surface-variant md:text-lg">
                {member.personal}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Related team members */}
      {related.length > 0 && (
        <section className="border-t border-slate-200/70 bg-white py-16">
          <div className="container-page">
            <div className="mb-10 max-w-3xl reveal">
              <p className="section-kicker">More from Our {member.department} Team</p>
              <h2 className="section-title">Meet the rest of the team.</h2>
            </div>
            <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 reveal reveal-delay-1">
              {related.map((person) => (
                <Link
                  key={person.slug}
                  href={`/team/${person.slug}`}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(13,32,59,0.08)]"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                    <img
                      src={person.imageSrc}
                      alt={person.name}
                      className="h-full w-full object-cover object-top grayscale-[4%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm font-semibold text-ink-900">
                      <span>{person.name}</span>
                      {person.credentials && (
                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-secondary">
                          {person.credentials}
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 text-xs leading-snug text-slate-600">
                      {person.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
