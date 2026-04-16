import ServicePageLayout from "../../../components/ServicePageLayout";

export const metadata = {
  title: "Advisory & Consulting Services | Rudler, PSC",
  description:
    "Strategic guidance that goes beyond accounting — Efficient CFO services, Virtual Back Office, and growth advisory for business owners and leadership teams.",
};

const content = {
  kicker: "Services",
  title: "Advisory & Consulting Services",
  heroDescription:
    "At Rudler, PSC, our advisory services go beyond traditional accounting to provide strategic guidance that helps businesses grow, improve performance, and plan for the future.",
  heroImageSrc:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
  heroImageAlt:
    "Business advisory session with executives discussing strategy and growth",
  introHeading: "Insight, Structure, and Support to Move Forward",
  introBody:
    "We partner with business owners and leadership teams to deliver insight, structure, and support — helping you make informed decisions with confidence.",
  sections: [
    {
      kicker: "Efficient CFO Services",
      title: "Executive-Level Insight Without the Full-Time Cost",
      description:
        "As your business grows, there often comes a point where executive-level financial leadership is needed — but not necessarily a full-time CFO. Our Efficient CFO services provide the experience, knowledge, and resources to support your business at that critical stage.",
      body: [
        "We offer both ongoing and interim CFO support, customized to your specific needs — freeing up your time and helping you make more informed, strategic decisions.",
      ],
      lists: [
        {
          title: "Financial & Operational Improvement",
          items: [
            "Budgeting and forecasting",
            "Cash flow management",
            "Revenue strategy and profitability enhancement",
            "Risk management and internal controls",
            "Fraud prevention and process improvement",
            "Training and oversight of accounting staff",
            "Accounting system selection and implementation",
            "Communication with leadership and Board of Directors",
          ],
        },
        {
          title: "Strategic Planning & Decision Support",
          items: [
            "Coordination with bankers, attorneys, and advisors",
            "Bank financing and investor meeting preparation",
            "Capital asset planning",
            "Private equity and debt financing support",
            "Mergers and acquisitions guidance",
            "Leadership transitions and business continuity support",
          ],
        },
        {
          title: "Technology & Insight",
          items: [
            "Cloud-based accounting systems (QuickBooks, Hubdoc, Bill.com)",
            "Real-time financial reporting and KPI tracking",
            "Benchmarking and performance analysis (Fathom, RMA, FirstResearch)",
            "Process improvement strategies, including Lean Six Sigma",
          ],
        },
      ],
    },
    {
      kicker: "Virtual Back Office Services",
      title: "Reliable Financial Data to Support Your Growth",
      description:
        "Running a successful business requires accurate, timely financial information. Our Virtual Back Office (VBO) services provide the structure and support needed to keep your financial operations running smoothly — so you can focus on growing your business.",
      lists: [
        {
          title: "Our Back Office Services Include",
          items: [
            "Bookkeeping and general accounting",
            "Accounts receivable and invoicing",
            "Accounts payable and bill payment processing",
            "Payroll processing, reporting, and compliance",
            "Bank reconciliations and deposit tracking",
            "Inventory and basis reporting",
            "Fixed asset tracking and depreciation",
            "Loan covenant reporting",
            "Financial reporting and analysis",
          ],
        },
        {
          title: "Streamlined, Technology-Driven Processes",
          items: [
            "Integrated accounting systems synced with bank accounts",
            "Automated document collection and bill pay",
            "Real-time access to financial data",
            "Standardized, cloud-based platform for efficiency and accuracy",
          ],
        },
      ],
      body: [
        "By outsourcing your back-office functions to Rudler, PSC, your team can focus on strategic priorities, customer experience, and business growth — while we ensure your financial processes are accurate, efficient, and reliable.",
      ],
    },
    {
      kicker: "Strategic Growth Advisory",
      title: "Guidance for Growth, Performance, and Transition",
      description:
        "Businesses looking to scale and improve performance need more than traditional accounting — they need strategic insight. Through our partnership with Anavo Growth Partners, we help companies strengthen operations, improve profitability, and plan for the future.",
      items: [
        "Performance improvement strategies",
        "Growth planning and execution",
        "Transition and succession planning",
        "Profitability and operational analysis",
      ],
      body: [
        "At Rudler, PSC, we are committed to being proactive advisors. Through our strategic partnerships, we offer deeper insight, expanded resources, and a more comprehensive approach — supporting our clients at every stage of the business lifecycle.",
      ],
    },
  ],
  closing: {
    kicker: "A True Strategic Partnership",
    heading: "Business Valuation Services",
    description:
      "Understand the true value of your business with expert analysis and insight. Our valuation services support key decisions including transactions, succession planning, and dispute resolution.",
    linkHref: "/services/business-valuation",
    linkText: "Learn More About Business Valuation Services",
  },
};

export default function AdvisoryAndConsultingPage() {
  return <ServicePageLayout {...content} />;
}
