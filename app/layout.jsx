import "./global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RevealObserver from "../components/RevealObserver";

const siteUrl = "https://www.rudler.cpa"; 

export const metadata = {
  title: {
    default: "Rudler | CPA + Advisory",
    template: "%s | Rudler CPA",
  },
  description:
    "Independent CPA and advisory professionals helping closely held businesses, families, and nonprofits navigate growth with clarity.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    siteName: "Rudler CPA + Advisory",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/OfficePhoto.png",
        width: 1200,
        height: 630,
        alt: "Rudler CPA + Advisory",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Rudler CPA + Advisory",
  url: siteUrl,
  telephone: "+18593311717",
  foundingDate: "1988",
  address: {
    "@type": "PostalAddress",
    streetAddress: "809 Wright's Summit Pkwy Suite 200",
    addressLocality: "Ft Wright",
    addressRegion: "KY",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: "Greater Cincinnati and Northern Kentucky",
  description:
    "Independent CPA and advisory professionals helping closely held businesses, families, and nonprofits navigate growth with clarity.",
  serviceType: [
    "Tax Planning",
    "Assurance Services",
    "Advisory",
    "Outsourced Accounting",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-surface text-on-surface">
        <Header />
        <main className="pt-36">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}