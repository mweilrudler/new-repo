const clientLinks = [
  {
    label: "Client Portal",
    href: "https://www.ssportal.com/rudlercpa/",
    description:
      "Access your secure client portal to view documents, tax returns, reports, and communications shared by your Rudler team.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    label: "Pay Invoice",
    href: "https://paynow.aiwyn.ai/payment-portal/RUDLER",
    description:
      "Securely pay your outstanding Rudler invoices online. Fast, convenient, and available any time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      </svg>
    ),
  },
  {
    label: "Secure Upload",
    href: "https://exchange-taxpayer.safesendreturns.com/DropOff/v840000000000",
    description:
      "Securely upload tax documents, financial statements, or any files your Rudler advisor has requested.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
      </svg>
    ),
  },
];

export default function Client() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-slate-200/70 bg-white">
        <div className="container-page py-16 space-y-5 reveal">
          <p className="section-kicker">Client Access</p>
          <h1 className="text-4xl font-semibold text-ink-900">
            Your Rudler portal, all in one place.
          </h1>
          <p className="text-lg text-slate-600 max-w-xl">
            Access your client portal, pay invoices, and securely upload documents — all linked below.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 py-12 md:px-12 md:py-20 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 reveal reveal-delay-1">
          {clientLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between bg-white border border-outline-variant rounded-xl p-10 shadow-soft hover:shadow-md hover:border-primary transition-all"
            >
              <div>
                <div className="text-primary mb-6">{link.icon}</div>
                <h2 className="font-headline text-2xl text-on-surface font-semibold mb-3 group-hover:text-primary transition-colors">
                  {link.label}
                </h2>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {link.description}
                </p>
              </div>
              <div className="mt-10 flex items-center gap-2 text-primary font-semibold text-sm">
                Open {link.label}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Help callout */}
        <div className="mt-16 bg-surface-container-low rounded-xl reveal reveal-delay-2 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-headline text-xl text-on-surface font-semibold mb-1">
              Need help accessing your account?
            </p>
            <p className="text-on-surface-variant text-sm">
              Contact our office and we'll get you set up right away.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 bg-primary text-white px-8 py-3 rounded-md font-semibold text-sm hover:shadow-lg transition-all"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
