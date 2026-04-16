import IndustryPageLayout from "../../../components/IndustryPageLayout";

export const metadata = {
  title: "Manufacturing & Distribution Accounting Services | Rudler, PSC",
  description:
    "Specialized accounting and advisory services for manufacturers and distributors — inventory costing, IC-DISC, R&D credits, and global tax strategies.",
};

const content = {
  kicker: "Industries",
  title: "Manufacturing & Distribution Accounting Services",
  heroDescription:
    "Manufacturing and distribution businesses face increasing complexity — from supply chains to global operations. At Rudler, PSC, we provide specialized accounting and advisory services to help you manage risk, improve efficiency, and plan for growth.",
  heroImageSrc:
    "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1400&q=80",
  heroImageAlt:
    "Manufacturing line with packaged goods moving through distribution",
  challenges: {
    heading: "Complexity Across Every Layer of Operations",
    description:
      "From the shop floor to global markets, manufacturers and distributors operate in an increasingly complex environment.",
    items: [
      "Inventory management and cost control",
      "Multi-state and international operations",
      "Supply chain disruptions",
      "Capital investment decisions",
      "Margin pressure and pricing strategies",
    ],
  },
  howWeHelp: {
    heading: "Tailored Solutions Beyond Compliance",
    description:
      "We deliver strategic guidance that helps you manage risk, improve efficiency, and plan for growth.",
    items: [
      "Inventory costing and financial reporting",
      "Tax planning, including IC-DISC and R&D credits",
      "Multi-state and international tax strategies",
      "M&A and valuation support",
      "Product line and operational analysis",
    ],
  },
  strategicInsight: {
    kicker: "Global Perspective, Local Expertise",
    heading: "A Regional Partner with a Global Network",
    description:
      "Through our affiliation with BKR International, we provide access to global resources while maintaining a strong regional presence.",
  },
  servicesHeading: "Services for Manufacturers & Distributors",
  serviceGroups: [
    {
      title: "Tax",
      items: [
        "IC-DISC and international tax planning",
        "R&D tax credits",
        "Multi-state and sales/use tax",
        "Entity structuring and projections",
      ],
    },
    {
      title: "Accounting & Assurance",
      items: [
        "Audits, reviews, and compilations",
        "Employee benefit plan audits",
        "Financial reporting and analysis",
      ],
    },
    {
      title: "Advisory",
      items: [
        "Strategic planning",
        "Process improvement",
        "Cash flow and profitability analysis",
        "Succession planning and valuation",
      ],
    },
  ],
};

export default function ManufacturingAndDistributionPage() {
  return <IndustryPageLayout {...content} />;
}
