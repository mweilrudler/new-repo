import { NavLink, Link } from "react-router-dom";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
  { label: "Client Page", to: "/client"},
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50">
      {/* Utility bar */}
      <div className="bg-primary text-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-3 py-2 text-xs">
          <div className="flex flex-wrap items-center gap-4">
            <span className="uppercase tracking-[0.2em] text-white/50">
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
          <span className="text-white/50">Ft Wright, KY | 859.331.1717</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white/95 backdrop-blur-md shadow-[0_20px_40px_rgba(13,32,59,0.06)]">
        <div className="container-page flex flex-wrap items-center justify-between gap-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/rudler.svg"
              alt="Rudler Logo"
              className="h-9 w-auto object-contain"
            />
            <div>
              <p className="text-base font-semibold text-primary">Rudler</p>
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70">
                CPA + Advisory
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary pb-0.5"
                    : "text-on-surface-variant hover:text-primary transition-colors font-medium"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:shadow-lg transition-all"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
