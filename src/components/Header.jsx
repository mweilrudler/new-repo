import { NavLink, Link } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="bg-ink-900 text-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-3 py-2 text-xs">
          <div className="flex flex-wrap items-center gap-4">
            <span className="uppercase tracking-[0.2em] text-white/70">
              Client Access
            </span>
            <div className="flex flex-wrap items-center gap-3 text-white/90">
              <a className="hover:text-white" href="#">
                Client Portal
              </a>
              <span className="text-white/40">/</span>
              <a className="hover:text-white" href="#">
                Pay Invoice
              </a>
              <span className="text-white/40">/</span>
              <a className="hover:text-white" href="#">
                Secure Upload
              </a>
            </div>
          </div>
          <span className="text-white/70">
            Cincinnati, OH | 513.555.0147
          </span>
        </div>
      </div>

      <div className="container-page flex flex-wrap items-center justify-between gap-4 py-5">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-ink-900">
            <span className="text-lg font-semibold">R</span>
          </div>
          <div>
            <p className="text-base font-semibold text-ink-900">
              Rudler
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-forest-600">
              CPA + Advisory
            </p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-5 text-sm text-slate-700">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition hover:text-ink-900 ${
                  isActive ? "text-ink-900 font-semibold" : "text-slate-600"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="btn-primary">
          Schedule a Consultation
        </Link>
      </div>
    </header>
  );
}
