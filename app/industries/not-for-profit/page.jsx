import IndustryPageLayout from "../../../components/IndustryPageLayout";

export const metadata = {
  title: "Not-for-Profit Accounting & Advisory Services | Rudler, PSC",
  description:
    "Dedicated accounting, audit, and tax support for not-for-profit organizations — Form 990, compliance, board governance, and operational risk.",
};

const content = {
  kicker: "Industries",
  title: "Not-for-Profit Accounting & Advisory Services",
  heroDescription:
    "At Rudler, PSC, we understand the increasing financial and regulatory demands placed on not-for-profit organizations. Our dedicated team provides the expertise and support needed to help you remain compliant, strengthen operations, and achieve your mission.",
  heroImageSrc:
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=80",
  heroImageAlt:
    "Community volunteers collaborating on a nonprofit outreach project",
  challenges: {
    heading: "Meeting Rising Demands with Confidence",
    description:
      "Not-for-profits are under pressure to deliver on mission while navigating growing oversight.",
    items: [
      "Increasing regulatory and reporting requirements",
      "Managing funding sources and compliance",
      "Board governance and oversight",
      "Maintaining transparency and donor trust",
    ],
  },
  howWeHelp: {
    heading: "Meaningful Guidance and Strategic Solutions",
    description:
      "We work closely with organizations to provide meaningful guidance and strategic solutions that support both compliance and mission.",
    items: [
      "Financial statement audits, reviews, and compilations",
      "Compliance and funding source management",
      "Operational and fraud risk assessments",
      "Board governance and audit committee support",
      "Form 990 preparation and exempt status applications",
      "Unrelated business income tax, state filings, and compliance",
    ],
  },
  strategicInsight: {
    kicker: "Committed to Your Mission",
    heading: "Hands-On Experience in the Not-for-Profit Community",
    description:
      "Our team is actively involved in the not-for-profit community, serving on boards and supporting organizations firsthand. This hands-on experience allows us to better understand and serve your needs.",
  },
  servicesHeading: "Services for Not-for-Profit Organizations",
  serviceGroups: [
    {
      title: "Financial Accounting & Advisory",
      items: [
        "Financial statement audits, reviews, and compilations",
        "Compliance and funding source management",
        "Operational and fraud risk assessments",
        "Board governance and audit committee support",
      ],
    },
    {
      title: "Tax Compliance & Planning",
      items: [
        "Form 990 preparation",
        "Exempt status applications",
        "Unrelated business income tax",
        "State filings and compliance",
      ],
    },
    {
      title: "Advisory",
      items: [
        "Strategic planning and budgeting",
        "Internal control evaluations",
        "Succession and leadership planning",
      ],
    },
  ],
};

export default function NotForProfitPage() {
  return <IndustryPageLayout {...content} />;
}
