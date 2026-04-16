import Link from "next/link";

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

const services = [
  { label: "Tax", to: "/services/tax" },
  { label: "Audit & Assurance", to: "/services/audit-and-assurance" },
  { label: "Advisory & Consulting", to: "/services/advisory-and-consulting" },
  { label: "Business Valuation", to: "/services/business-valuation" },
];

const firmLinks = [
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
];

const clientLinks = [
  { label: "Client Portal", href: "https://www.ssportal.com/rudlercpa/" },
  { label: "Pay Invoice", href: "https://paynow.aiwyn.ai/payment-portal/RUDLER" },
  {
    label: "Secure Upload",
    href: "https://exchange-taxpayer.safesendreturns.com/DropOff/v840000000000",
  },
];

export default function Footer() {
  return (
    <>
      <div className="bg-white border-t border-slate-200 py-8">
        <div className="container-page">
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
        </div>
      </div>
    <footer className="bg-white w-full pt-16 pb-8 border-t border-slate-200">
      <div className="container-page grid gap-12 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-1">
          <p className="font-headline text-xl text-primary mb-4">Rudler</p>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
            Independent CPA and advisory professionals helping closely held
            businesses, families, and nonprofits navigate growth with clarity.
          </p>
          <p className="text-xs uppercase tracking-[0.15em] text-primary/60">
            Ft Wright, KY | 859.331.1717
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="https://bkr.com/" target="_blank" rel="noopener noreferrer">
              <img src="/images/BKR-Logo.jpg" alt="BKR International" className="h-10 w-auto object-contain" />
            </a>
            <a href="https://www.facebook.com/AccountingRudlerPSC/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-on-surface-variant hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/rudlerpsc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-on-surface-variant hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/rudler-psc/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-on-surface-variant hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-6">
            Services
          </h4>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.to}>
                <Link
                  href={s.to}
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Firm */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-6">
            Firm
          </h4>
          <ul className="space-y-3">
            {firmLinks.map((link) => (
              <li key={link.to}>
                <Link
                  href={link.to}
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Client Access + Address */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-primary mb-6">
            Client Access
          </h4>
          <ul className="space-y-3 mb-8">
            {clientLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="rounded-lg bg-surface-container-low p-4 text-sm text-on-surface-variant leading-relaxed">
            <p className="font-semibold text-primary mb-1">
              809 Wright Summit Pkwy
            </p>
            <p>Suite 200, Ft Wright, KY</p>
            <p>info@rudler.cpa</p>
          </div>
        </div>
      </div>

      <div className="container-page mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-on-surface-variant">&copy; 2026 Rudler. All rights reserved.</p>
        <p className="text-xs text-on-surface-variant">
         Tax | Adivsory | Assurance
        </p>
      </div>
    </footer>
    </>
  );
}
