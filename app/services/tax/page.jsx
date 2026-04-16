import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata = {
  title: "Tax Services | Rudler, PSC",
  description:
    "Comprehensive tax services for businesses, individuals, and families — combining technical expertise with proactive, advisory-driven planning.",
};

const content = {
  kicker: "Services",
  title: "Tax Services",
  heroDescription:
    "We provide comprehensive tax services for businesses, individuals, and families — combining technical expertise with a proactive, advisory-driven approach. Our goal is not just compliance, but helping you make informed decisions that minimize tax liability and support long-term success.",
  heroImageSrc:
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
  heroImageAlt:
    "Tax advisor reviewing financial documents and calculations with a client",
  introHeading: "Proactive Tax Strategy, Not Just Compliance",
  introBody:
    "Serving a wide range of industries across Greater Cincinnati, Northern Kentucky, and beyond, we partner with businesses and individuals to navigate complex tax environments and plan strategically for the future.",
  sections: [
    {
      kicker: "Tax Services for Businesses",
      title: "Strategic Tax Support Across Industries",
      description:
        "Our experience spans industries including manufacturing, distribution, construction, healthcare, not-for-profit organizations, professional services, and more — allowing us to deliver tailored solutions based on your specific business needs.",
      lists: [
        {
          title: "Our Business Tax Services Include",
          items: [
            "Entity structure planning (C corporations, S corporations, partnerships)",
            "Multi-state tax compliance and state filings",
            "Sales, use, and property tax planning and compliance",
            "Quarterly estimated tax calculations",
            "Strategic planning for mergers, acquisitions, reorganizations, and succession",
            "Buy-sell agreement and ownership transition planning",
            "IRS and state representation, including audits and dispute resolution",
            "Private letter rulings and complex tax matters",
            "State and local tax (SALT) planning",
            "FAS 109 and FIN 48 calculations",
          ],
        },
      ],
      body: [
        "Our services extend beyond compliance. We work closely with your leadership team to analyze your unique situation, identify opportunities, and provide proactive recommendations that reduce risk and improve outcomes — both now and in the future.",
      ],
    },
    {
      kicker: "Tax Services for Individuals & Families",
      title: "A Personalized, Relationship-Driven Approach",
      description:
        "Rather than focusing solely on tax preparation, we maintain ongoing communication throughout the year to help you plan ahead and avoid surprises.",
      lists: [
        {
          title: "Our Individual Tax Services Include",
          items: [
            "Preparation of federal, state, and local tax returns",
            "Strategic tax planning aligned with personal and family goals",
            "Retirement planning with tax-efficient strategies",
            "Gifting and wealth transfer planning",
            "Annual tax projections and quarterly estimated payments",
            "Planning for changes in tax laws and regulations",
            "Multi-generational wealth and estate planning",
            "Individual tax audit defense and representation",
            "Expatriate tax services",
          ],
        },
      ],
      body: [
        "By staying engaged throughout the year, we help you understand your tax position in advance — allowing you to make informed financial decisions and take advantage of opportunities as they arise.",
      ],
    },
    {
      kicker: "Technology-Driven Tax Solutions",
      title: "Real-Time Visibility Into Your Financial Data",
      description:
        "We leverage modern, cloud-based tools to improve efficiency, accuracy, and visibility into your financial data.",
      items: [
        "Cloud-based accounting solutions integrated with bank accounts",
        "Automated document collection and bill pay systems",
        "Tools such as QuickBooks and Bill.com",
        "Real-time access to financial information for more efficient tax planning",
      ],
    },
    {
      kicker: "Tax Planning & Minimization",
      title: "Year-Round, Not Once-a-Year",
      description:
        "Tax planning is not a once-a-year activity — it's an ongoing process.",
      body: [
        "We provide real-time insight into the tax implications of key financial decisions, helping you minimize liabilities and optimize outcomes through strategic planning, credits, and incentives.",
      ],
    },
    {
      kicker: "A Collaborative Financial Team",
      title: "Aligned with Your Broader Financial Goals",
      description:
        "We work alongside your internal team and external advisors to ensure a comprehensive approach to your financial health.",
      body: [
        "By providing value-added insight and coordination, we help align your tax strategy with your broader financial goals.",
      ],
    },
  ],
  closing: {
    kicker: "A Partner You Can Trust",
    heading: "More Than Tax Preparers — Advisors",
    description:
      "We are committed to helping you navigate complexity, reduce risk, and plan for the future with confidence.",
  },
};

export default function TaxPage() {
  return <ServicePageLayout {...content} />;
}
