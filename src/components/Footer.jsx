import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-ink-900">
            Rudler
          </p>
          <p className="text-sm text-slate-600">
            Independent CPA and advisory professionals helping closely held
            businesses, families, and nonprofits navigate growth with clarity.
          </p>
          <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4 text-sm text-slate-700">
            <p className="font-semibold text-ink-900">Ft Wright Office</p>
            <p>809 Wright Summit Pkwy Suite 200</p>
            <p>Ft Wright, KY</p>
            <p>859.555.0147</p>
            <p>hello@rudler.com</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay-600">
            Quick Links
          </p>
          <div className="flex flex-col gap-2 text-sm text-slate-600">
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-ink-900">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay-600">
            Client Access
          </p>
          <div className="flex flex-col gap-2 text-sm text-slate-600">
            <a className="hover:text-ink-900" href="#">
              Client Portal
            </a>
            <a className="hover:text-ink-900" href="#">
              Pay Invoice
            </a>
            <a className="hover:text-ink-900" href="#">
              Secure Upload
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200/70 bg-slate-50">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-4 text-xs text-slate-500">
          <span>(c) 2026 Rudler. All rights reserved.</span>
          <span>Assurance | Tax | Advisory | Outsourced Accounting</span>
        </div>
      </div>
    </footer>
  );
}
