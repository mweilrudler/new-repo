import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata = {
  title: "Business Valuation Services | Rudler, PSC",
  description:
    "Comprehensive business valuation services for transactions, estate and succession planning, lending, disputes, and strategic decisions.",
};

const content = {
  kicker: "Services",
  title: "Business Valuation Services",
  heroDescription:
    "Understanding the value of your business is critical to making informed financial and strategic decisions. We provide comprehensive valuation services to help owners, investors, and stakeholders determine an accurate and defensible estimate of value.",
  heroImageSrc:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  heroImageAlt:
    "Financial analysts reviewing valuation charts and business performance data",
  introHeading: "A Comprehensive Valuation Approach",
  introBody:
    "Business valuation is a key component of financial and strategic planning. Our valuation process follows established methodologies and combines multiple approaches to determine fair market value.",
  sections: [
    {
      kicker: "Our Methodology",
      title: "Three Approaches, One Reliable Result",
      description:
        "By combining three established approaches, we deliver a well-supported and defensible valuation.",
      lists: [
        {
          title: "Asset Approach",
          items: ["Evaluates the value of a company's assets and liabilities"],
        },
        {
          title: "Income Approach",
          items: ["Assesses value based on projected earnings and cash flow"],
        },
        {
          title: "Market Approach",
          items: ["Compares your business to similar companies and transactions"],
        },
      ],
    },
    {
      kicker: "Types of Reports",
      title: "Full Valuation and Calculation of Value Reports",
      description:
        "We offer both full valuation reports and calculation reports based on your needs.",
      lists: [
        {
          title: "Full Valuation Report",
          items: [
            "A comprehensive analysis including financial performance, industry conditions, and economic factors",
            "Estate and gift tax planning",
            "Goodwill impairment",
            "ESOPs",
            "Divorce proceedings",
            "Buy-sell agreements",
            "Lending and financing",
          ],
        },
        {
          title: "Calculation of Value Report",
          items: [
            "A more limited analysis based on agreed-upon procedures",
            "Often focused on a specific factor",
            "Strategic planning",
            "Determining general business worth",
          ],
        },
      ],
    },
    {
      kicker: "When It's Needed",
      title: "Common Reasons for a Business Valuation",
      description:
        "Business valuations are often requested by attorneys, financial institutions, and advisors for a variety of purposes.",
      items: [
        "Mergers and acquisitions",
        "Estate and succession planning",
        "Divorce and shareholder disputes",
        "SBA lending",
        "409A stock compensation",
        "Charitable giving",
      ],
    },
    {
      kicker: "What We Analyze",
      title: "Information Required for a Valuation",
      description:
        "To perform a valuation, we typically analyze the following. Additional information may be requested depending on the scope and purpose of the engagement.",
      items: [
        "Five years of financial statements",
        "Tax returns",
        "Operational and ownership information",
        "Industry and market data",
      ],
    },
    {
      kicker: "Experienced, Credentialed Professionals",
      title: "Certified Valuation Analysts",
      description:
        "Our valuation professionals are recognized as Certified Valuation Analysts (CVA) through the National Association of Certified Valuators and Analysts.",
      body: [
        "Our team combines technical expertise with practical experience to deliver accurate, defensible valuations.",
      ],
    },
    {
      kicker: "Strategic Insight",
      title: "More Than a Valuation",
      description:
        "We go beyond delivering a report. Our team helps you understand the value of your business and what drives it — so you can make informed decisions about growth, transition, or sale.",
      body: [
        "We also serve as a strategic advisor when you are considering buying or selling a business, helping you evaluate opportunities and navigate complex decisions.",
      ],
    },
  ],
  closing: {
    kicker: "A Partner You Can Trust",
    heading: "Accurate, Defensible Valuations",
    description:
      "We are committed to delivering accurate, defensible valuations backed by experience, integrity, and a deep understanding of your business.",
  },
};

export default function BusinessValuationPage() {
  return <ServicePageLayout {...content} />;
}
