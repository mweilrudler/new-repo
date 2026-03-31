"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Client Page", href: "/client" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Utility bar */}
      <div className="bg-primary text-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-3 py-2 text-xs">
          <div className="flex flex-wrap items-center gap-4">
            <span className="hidden sm:inline uppercase tracking-[0.2em] text-white/50">
              Client Access
            </span>
            <div className="flex flex-wrap items-center gap-3 text-white/70">
              <a
                className="hover:text-white transition-colors"
                href="https://www.ssportal.com/rudlercpa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Client Portal
              </a>
              <a
                className="hover:text-white transition-colors"
                href="https://paynow.aiwyn.ai/payment-portal/RUDLER"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pay Invoice
              </a>
              <a
                className="hover:text-white transition-colors"
                href="https://exchange-taxpayer.safesendreturns.com/DropOff/v840000000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                Secure Upload
              </a>
            </div>
          </div>
          <span className="hidden sm:inline text-white/50">Ft Wright, KY | 859.331.1717</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white/95 backdrop-blur-md shadow-[0_20px_40px_rgba(13,32,59,0.06)]">
        <div className="container-page flex items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <img src="/rudler.svg" alt="Rudler Logo" className="h-9 w-auto object-contain" />
            <div>
              <p className="text-base font-semibold text-primary">Rudler</p>
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70">CPA + Advisory</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  pathname === item.href
                    ? "text-primary font-semibold border-b-2 border-primary pb-0.5"
                    : "text-on-surface-variant hover:text-primary transition-colors font-medium"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:shadow-lg transition-all"
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={
                  pathname === item.href
                    ? "block py-3 text-primary font-semibold border-b border-slate-100"
                    : "block py-3 text-on-surface-variant hover:text-primary transition-colors font-medium border-b border-slate-100"
                }
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-gradient-to-br from-primary to-primary-container text-white px-6 py-3 rounded-md font-semibold text-sm text-center hover:shadow-lg transition-all"
            >
              Schedule a Consultation
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
