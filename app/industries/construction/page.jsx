import IndustryPageLayout from "../../../components/IndustryPageLayout";

export const metadata = {
  title: "Construction Accounting & Advisory Services | Rudler, PSC",
  description:
    "Accounting, tax, and advisory services tailored to contractors and construction companies — job costing, multi-state tax, succession planning, and more.",
};

const content = {
  kicker: "Industries",
  title: "Construction Accounting & Advisory Services",
  heroDescription:
    "At Rudler, PSC, we work with contractors and construction companies to provide accounting, tax, and advisory services tailored to the unique demands of the industry. From job costing to tax planning and succession strategies, we help you manage complexity and improve profitability.",
  heroImageSrc:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
  heroImageAlt:
    "Construction professionals reviewing plans at an active commercial job site",
  challenges: {
    heading: "Built for the Complexities of the Construction Industry",
    description: "Construction companies often face:",
    items: [
      "Revenue recognition and job costing complexities",
      "Multi-state tax and compliance requirements",
      "Cash flow fluctuations across projects",
      "Equipment investment and capital planning",
      "Long-term succession and transition planning",
    ],
  },
  howWeHelp: {
    heading: "Practical, Industry-Specific Solutions",
    description:
      "We provide practical, industry-specific solutions designed to improve visibility and profitability on every project.",
    items: [
      "Job costing and financial reporting support",
      "Tax planning and compliance, including credits and AMT considerations",
      "Multi-state tax planning and city tax calculations",
      "Equipment purchase and sale analysis",
      "Bid evaluation and profitability analysis",
      "Succession planning and business transitions",
    ],
  },
  strategicInsight: {
    kicker: "Strategic Insight for Your Business",
    heading: "Aligning Project Management and Accounting",
    description:
      "We help align your project management and accounting processes — giving you better visibility into performance and helping you make informed decisions for both short-term success and long-term growth.",
  },
  servicesHeading: "Services for Construction Companies",
  serviceGroups: [
    {
      title: "Tax",
      items: [
        "Corporate and individual tax reporting",
        "Tax credits and planning strategies",
        "Multi-state tax compliance",
        "Alternative minimum tax considerations",
      ],
    },
    {
      title: "Accounting & Assurance",
      items: [
        "Financial statements, audits, reviews, and compilations",
        "Employee benefit plan audits",
        "Back office accounting support",
      ],
    },
    {
      title: "Advisory",
      items: [
        "Cash flow management",
        "Strategic planning",
        "Equipment investment decisions",
        "Business valuation and succession planning",
      ],
    },
  ],
};

export default function ConstructionPage() {
  return <IndustryPageLayout {...content} />;
}
