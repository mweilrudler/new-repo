import IndustryPageLayout from "../../../components/IndustryPageLayout";

export const metadata = {
  title: "Transportation & Logistics Accounting Services | Rudler, PSC",
  description:
    "Accounting, tax, and advisory services for transportation and logistics companies — multi-state compliance, fleet planning, and entity structuring.",
};

const content = {
  kicker: "Industries",
  title: "Transportation & Logistics Accounting Services",
  heroDescription:
    "Transportation businesses operate in a fast-moving, complex environment. At Rudler, PSC, we provide accounting, tax, and advisory services to help you manage costs, navigate regulations, and grow your business.",
  heroImageSrc:
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=80",
  heroImageAlt:
    "Freight trucks and shipping containers in an active logistics yard",
  challenges: {
    heading: "Keeping Pace with a Fast-Moving Industry",
    description:
      "Transportation and logistics operators face moving targets on every front.",
    items: [
      "Multi-state tax compliance",
      "Fluctuating margins and fuel costs",
      "Fleet management and capital planning",
      "Entity structuring and liability protection",
    ],
  },
  howWeHelp: {
    heading: "Practical Solutions for Every Stage",
    description:
      "We provide practical solutions tailored to transportation businesses of all sizes.",
    items: [
      "Multi-state tax planning and compliance",
      "Lease vs. buy analysis",
      "Entity structuring and optimization",
      "Cash flow and profitability management",
      "Operational and maintenance strategy insights",
    ],
  },
  strategicInsight: {
    kicker: "Driving Growth and Efficiency",
    heading: "Built to Support Long-Term Success",
    description:
      "From startups to national operations, we help businesses improve efficiency, identify new revenue opportunities, and plan for long-term success.",
  },
  servicesHeading: "Services for Transportation Companies",
  serviceGroups: [
    {
      title: "Tax",
      items: [
        "Multi-state tax compliance",
        "Tax planning and entity structuring",
        "Owner and partnership tax returns",
      ],
    },
    {
      title: "Accounting & Assurance",
      items: [
        "Audits, reviews, and compilations",
        "Employee benefit plan audits",
        "Back office accounting and payroll",
      ],
    },
    {
      title: "Advisory",
      items: [
        "Cash flow management",
        "Strategic planning",
        "Business valuation and succession planning",
      ],
    },
  ],
};

export default function TransportationAndLogisticsPage() {
  return <IndustryPageLayout {...content} />;
}
