"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#our-story" },
      { label: "Mission & Values", href: "/about#mission-values" },
      { label: "Awards", href: "/about#awards" },
      { label: "Our Team", href: "/about#our-team" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Tax", href: "/services/tax" },
      { label: "Audit & Assurance", href: "/services/audit-and-assurance" },
      { label: "Advisory & Consulting", href: "/services/advisory-and-consulting" },
      { label: "Business Valuation", href: "/services/business-valuation" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Construction", href: "/industries/construction" },
      { label: "Food & Beverage", href: "/industries/food-and-beverage" },
      { label: "Manufacturing & Distribution", href: "/industries/manufacturing-and-distribution" },
      { label: "Not-for-Profit", href: "/industries/not-for-profit" },
      { label: "Transportation & Logistics", href: "/industries/transportation-and-logistics" },
    ],
  },
  { label: "Insights", href: "/insights" },
  {
    label: "Careers",
    href: "/careers",
    children: [
      { label: "Students & Internships", href: "/careers/students" },
      { label: "Professionals", href: "/careers/professionals" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Client Access", href: "/client" },
];

const clientAccessItems = [
  {
    label: "Secure Upload",
    href: "https://exchange-taxpayer.safesendreturns.com/DropOff/v840000000000",
  },
  {
    label: "Client Portal",
    href: "https://www.ssportal.com/rudlercpa/",
  },
  {
    label: "Pay Invoice",
    href: "https://paynow.aiwyn.ai/payment-portal/RUDLER",
  }
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSubOpen, setMobileSubOpen] = useState({});

  const toggleMobileSub = (label) =>
    setMobileSubOpen((s) => ({ ...s, [label]: !s[label] }));

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Utility bar */}
      <div className="bg-primary text-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-3 py-2.5 text-[11px]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="hidden sm:inline uppercase tracking-[0.2em] text-white">
              Client Access
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {clientAccessItems.map((item) => (
                <a
                  key={item.href}
                  className="group inline-flex items-center gap-1.5 rounded-md border border-white/25 bg-white/10 px-2.5 py-1.5 font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <span className="hidden sm:inline text-white">Ft Wright, KY | 859.331.1717</span>
        </div>
      </div>

      {/* Main nav */}
      <div
        data-main-nav
        className="bg-white/95 backdrop-blur-md shadow-[0_20px_40px_rgba(13,32,59,0.06)] transition-colors"
      >
        <div className="container-page flex items-center justify-between gap-4 py-3 md:py-4 xl:py-5">
          <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <img
              src="/images/RudlerLogo.jpg"
              alt="Rudler CPA + Advisory"
              className="h-14 w-auto object-contain sm:h-16 md:h-20 xl:h-24"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-base">
            {navItems.map((item) => {
              const hasChildren = !!item.children;
              const isOpen = openDropdown === item.label;
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
                  onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={
                      pathname === item.href || (hasChildren && pathname.startsWith(item.href + "/"))
                        ? "inline-flex items-center gap-1 text-primary font-semibold border-b-2 border-primary pb-0.5"
                        : "inline-flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors font-medium"
                    }
                  >
                    {item.label}
                    {hasChildren && (
                      <svg
                        className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    )}
                  </Link>

                  {hasChildren && isOpen && (
                    <div className="absolute left-0 top-full pt-3 min-w-[260px] z-50">
                      <div className="rounded-lg border border-slate-200 bg-white shadow-[0_20px_40px_rgba(13,32,59,0.12)] py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-on-surface-variant hover:bg-primary/5 hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex bg-gradient-to-br from-primary to-primary-container text-white px-7 py-3 rounded-md text-sm font-semibold hover:shadow-lg transition-all"
            >
              Schedule a Consultation
            </Link>

            {/* Hamburger button — mobile only */}
            <button
              className="lg:hidden p-2 rounded-md text-primary hover:bg-slate-100 transition-colors"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const hasChildren = !!item.children;
              const subOpen = !!mobileSubOpen[item.label];
              return (
                <div key={item.href} className="border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={
                        pathname === item.href
                          ? "block flex-1 py-3.5 text-[13px] text-primary font-semibold"
                          : "block flex-1 py-3.5 text-[13px] text-on-surface-variant hover:text-primary transition-colors font-medium"
                      }
                    >
                      {item.label}
                    </Link>
                    {hasChildren && (
                      <button
                        onClick={() => toggleMobileSub(item.label)}
                        className="p-3 text-on-surface-variant hover:text-primary"
                        aria-label={`Toggle ${item.label} submenu`}
                        aria-expanded={subOpen}
                      >
                        <svg
                          className={`w-4 h-4 transition-transform ${subOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                    )}
                  </div>
                  {hasChildren && subOpen && (
                    <div className="pb-3 pl-4 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-2 text-[12px] text-on-surface-variant hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-gradient-to-br from-primary to-primary-container text-white px-6 py-3.5 rounded-md text-[13px] font-semibold text-center hover:shadow-lg transition-all"
            >
              Schedule a Consultation
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
