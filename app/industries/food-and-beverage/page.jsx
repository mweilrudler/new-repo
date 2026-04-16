import IndustryPageLayout from "../../../components/IndustryPageLayout";

export const metadata = {
  title: "Food & Beverage Accounting & Advisory Services | Rudler, PSC",
  description:
    "Guidance and support for food and beverage businesses — tax, accounting, franchise reporting, and strategic growth support.",
};

const content = {
  kicker: "Industries",
  title: "Food & Beverage Accounting & Advisory Services",
  heroDescription:
    "Operating a food and beverage business comes with unique financial and operational challenges. At Rudler, PSC, we provide the guidance and support needed to help you stay compliant, manage costs, and grow your business.",
  heroImageSrc:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
  heroImageAlt:
    "Restaurant team preparing meals in a busy modern commercial kitchen",
  challenges: {
    heading: "Navigating a Demanding Industry",
    description:
      "Food and beverage operators juggle tight margins, complex compliance, and constant change.",
    items: [
      "Managing thin margins and fluctuating costs",
      "Complex tax structures across locations",
      "Inventory and cost control",
      "Wage and tip compliance",
      "Multi-entity ownership and franchise structures",
    ],
  },
  howWeHelp: {
    heading: "Support at Every Stage",
    description:
      "We support food and beverage businesses at every stage — from startups to multi-location operations.",
    items: [
      "Day-to-day accounting and financial reporting",
      "Monthly franchise and tax reporting",
      "Tax planning for multi-ownership structures",
      "Leasehold improvement and equipment decisions",
      "Payroll, tip compliance, and inventory management",
    ],
  },
  strategicInsight: {
    kicker: "Supporting Growth and Expansion",
    heading: "Insight to Simplify the Next Step",
    description:
      "Whether you're opening your first location or expanding into multiple markets, we provide the financial insight needed to simplify decisions and support long-term success.",
  },
  servicesHeading: "Services for Food & Beverage Businesses",
  serviceGroups: [
    {
      title: "Tax",
      items: [
        "Corporate and individual tax reporting",
        "Multi-state tax compliance",
        "Tax planning and projections",
      ],
    },
    {
      title: "Accounting & Assurance",
      items: [
        "Financial reporting and reconciliations",
        "Audits, reviews, and compilations",
        "Franchise reporting",
        "Back office accounting support",
      ],
    },
    {
      title: "Advisory",
      items: [
        "Cash flow management",
        "Product line and profitability analysis",
        "Strategic planning and growth",
        "Business valuation and succession planning",
      ],
    },
  ],
};

export default function FoodAndBeveragePage() {
  return <IndustryPageLayout {...content} />;
}
