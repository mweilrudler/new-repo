"use client";

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

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Utility bar — stays exactly the same */}
      <div className="bg-primary text-white">
        {/* ... no changes needed here ... */}
      </div>

      {/* Main nav */}
      <div className="bg-white/95 backdrop-blur-md shadow-[0_20px_40px_rgba(13,32,59,0.06)]">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/rudler.svg" alt="Rudler Logo" className="h-9 w-auto object-contain" />
            <div>
              <p className="text-base font-semibold text-primary">Rudler</p>
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70">CPA + Advisory</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
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

          <Link
            href="/contact"
            className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:shadow-lg transition-all"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}