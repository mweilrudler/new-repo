import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata = {
  title: "Audit & Assurance Services | Rudler, PSC",
  description:
    "Financial statement audits, reviews, compilations, and employee benefit plan audits — delivering clarity, confidence, and insight into your operations.",
};

const content = {
  kicker: "Services",
  title: "Audit & Assurance Services",
  heroDescription:
    "Our audit and assurance services provide more than compliance — they deliver clarity, confidence, and insight into your financial operations.",
  heroImageSrc:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
  heroImageAlt:
    "Audit and assurance team reviewing statements in a collaborative meeting",
  introHeading: "More Than Compliance — A Proactive, Value-Driven Approach",
  introBody:
    "We help organizations strengthen internal controls, improve reporting accuracy, and meet regulatory requirements with confidence. Our collaborative approach goes beyond the audit to provide insights that help strengthen processes, reduce risk, and support better decision-making.",
  sections: [
    {
      kicker: "Assurance Services",
      title: "Our Assurance Services",
      description:
        "We take a collaborative approach to every engagement, working closely with your team to understand your operations and identify opportunities for improvement.",
      items: [
        "Financial statement audits",
        "Reviews and compilations",
        "Internal control evaluations",
        "Risk assessment and compliance support",
        "Agreed-upon procedures",
      ],
    },
    {
      kicker: "Employee Benefit Plan Audits",
      title: "Specialized Expertise You Can Rely On",
      description:
        "Rudler, PSC performs numerous employee benefit plan audits each year, giving you the experience, efficiency, and attention of a mid-sized independent firm — with the expertise typically found at larger firms.",
      lists: [
        {
          title: "What You Can Expect",
          items: [
            "A consistent, experienced audit team each year",
            "High-quality audits with competitive fees",
            "Minimal disruption to your team and operations",
          ],
        },
        {
          title: "A Partner in Compliance and Planning",
          items: [
            "Guidance on regulatory and compliance requirements",
            "Insight into legislative changes and filing deadlines",
            "Recommendations to improve internal controls",
            "Support in evaluating plan structure and effectiveness",
          ],
        },
      ],
      body: [
        "As members of the AICPA Employee Benefit Plan Audit Quality Center, we stay at the forefront of industry standards and best practices.",
      ],
    },
    {
      kicker: "Technology-Driven Audits",
      title: "Efficient, Unobtrusive Audit Experiences",
      description:
        "We leverage modern technology and streamlined processes to make the audit experience as efficient and unobtrusive as possible.",
      items: [
        "Minimized disruption to your team",
        "Use of existing systems and data",
        "Secure, electronic information sharing",
        "Ongoing communication throughout the process",
      ],
    },
    {
      kicker: "Experience That Matters",
      title: "Dedicated Employee Benefit Plan Audit Group",
      description:
        "Our dedicated Employee Benefit Plan Audit Group specializes in retirement plan audits and brings deep experience across a wide range of benefit plans.",
      body: [
        "We operate with a commitment to efficiency, accuracy, and continuous improvement — ensuring your audit is handled with care and expertise.",
      ],
    },
  ],
  closing: {
    kicker: "Confidence You Can Trust",
    heading: "We Don't Just Complete Audits — We Build Relationships",
    description:
      "Our goal is to provide confidence in your financial reporting while helping your organization operate more effectively.",
  },
};

export default function AuditAndAssurancePage() {
  return <ServicePageLayout {...content} />;
}
