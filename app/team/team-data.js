// Shared staff data + bio details for the /team/[slug] template.
// Add or update the entries in `bios` to fill in a staff member's full bio.

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const sections = [
  {
    title: "Leadership",
    label: "Our Leadership Team",
    folder: "Leadership",
    people: [
      { name: "Alex Weidner", credentials: "CPA, CFE", title: "President / Shareholder", image: "Alex Weidner.jpg" },
      { name: "Audrey Goetz", credentials: "CPA, CVA", title: "Shareholder", image: "Audrey Goetz.jpg" },
      { name: "David Neuhaus", credentials: "CPA", title: "Shareholder", image: "David Neuhaus.jpg" },
      { name: "Eric Ficke", credentials: "CPA", title: "Director of CAS Department / Principal", image: "Eric Ficke.jpg" },
      { name: "Evan Kandra", credentials: "CPA", title: "Principal", image: "Evan Kandra.jpg" },
      { name: "Greg Lamping", credentials: "CPA", title: "Shareholder", image: "Greg Lamping.jpg" },
      { name: "Jeff Epplen", title: "Shareholder", image: "Jeff Epplen.jpg" },
      { name: "John Wood", credentials: "CPA, CVA", title: "Shareholder", image: "John Wood.jpg" },
      { name: "Melanie Smart", credentials: "CPA", title: "Shareholder", image: "Melanie Smart.jpg" },
      { name: "Tami Lawson", credentials: "CPA", title: "Chief Operating Officer / Shareholder", image: "Tami Lawson.jpg" },
    ],
  },
  {
    title: "Professional",
    label: "Our Professional Team",
    folder: "Professional",
    people: [
      { name: "Alaina Shaffer", credentials: "CPA", title: "Assurance Manager", image: "Alaina Shaffer.jpg" },
      { name: "Alexis Ludtke", credentials: "CPA", title: "Tax Manager", image: "Alexis Ludtke.jpg" },
      { name: "Becca Thorman", credentials: "CPA, CVA", title: "Assurance Manager", image: "Becca Thorman.jpg" },
      { name: "Brooke Kramer", credentials: "CPA", title: "Tax Manager", image: "Brooke Kramer.jpg" },
      { name: "Drew Sullivan", title: "Assurance Manager", image: "Drew Sullivan.jpg" },
      { name: "Emily Demurias", credentials: "CPA", title: "Tax Manager", image: "Emily Demurias.jpg" },
      { name: "Gail Ohr", title: "Client Accounting Manager", image: "Gail Ohr.jpg" },
      { name: "Heather Pillard", title: "Client Accounting Manager", image: "Heather Pillard.jpg" },
      { name: "Kaitlyn Evans", credentials: "CPA", title: "Tax Manager", image: "Kaitlyn Evans.jpg" },
      { name: "Kelsey Baker", credentials: "CPA", title: "Tax Manager", image: "Kelsey Baker.jpeg" },
      { name: "Lisa Dooley", credentials: "CPA", title: "Assurance Manager", image: "Lisa Dooley.jpg" },
      { name: "Lisa Schaible", title: "Client Accounting Manager", image: "Lisa Schaible.jpg" },
      { name: "Mark Benson", credentials: "CPA, CVA", title: "Tax Manager", image: "Mark Benson.jpg" },
      { name: "Matt Topmiller", credentials: "CPA", title: "Tax Manager", image: "Matt Topmiller.jpg" },
      { name: "Megha Pandya", credentials: "CPA", title: "Tax Manager", image: "Megha Pandya.jpg" },
      { name: "Missy Heist", title: "Client Accounting Manager", image: "Missy Heist.jpg" },
      { name: "Brandon Hughes", title: "Senior Accountant", image: "Brandon Hughes.jpg" },
      { name: "Chris Seitz", title: "Senior Client Accounting Specialist", image: "Chris Seitz.jpg" },
      { name: "Erin Mauch", title: "Senior Client Accounting Specialist", image: "Erin Mauch.jpg" },
      { name: "Gina Dabrowski", title: "Senior Client Accounting Specialist", image: "Gina Dabrowski.jpg" },
      { name: "Jon Peul", title: "Senior Accountant", image: "Jon Peul.jpg" },
      { name: "Josh Myers", title: "Senior Accountant", image: "Josh Myers.jpg" },
      { name: "Kacie Hamlett", title: "Senior Accountant", image: "Kacie Hamlett.jpg" },
      { name: "Lisa Totten", title: "Senior Client Accounting Specialist", image: "Lisa Totten.jpg" },
      { name: "Max Epplen", credentials: "CPA", title: "Senior Accountant", image: "Max Epplen.jpg" },
      { name: "Nick Myers", title: "Senior Accountant", image: "Nick Myers.jpg" },
      { name: "Alyssa Monson", title: "Staff Accountant", image: "Alyssa Monson.jpg" },
      { name: "Casey Roaden", title: "Client Accounting Specialist", image: "Casey Roaden.png" },
      { name: "Connor Josselyn", title: "Staff Accountant", image: "Connor Josselyn.jpg" },
      { name: "Gina Earle", credentials: "CPA", title: "Client Accounting Specialist", image: "Gina Earle.jpg" },
      { name: "Grant Haubner", title: "Staff Accountant", image: "Grant Haubner.jpg" },
      { name: "Marianna Kaufman", title: "Staff Accountant", image: "Marianna Kaufman.jpg" },
      { name: "Shelby Adams", title: "Client Accounting Specialist", image: "Shelby Adams.jpg" },
      { name: "Teresa Mann", title: "Client Accounting Specialist", image: "Teresa Mann.jpg" },
      { name: "Thomas Kennedy", title: "Staff Accountant", image: "Thomas Kennedy.jpeg" },
    ],
  },
  {
    title: "Support",
    label: "Our Support Team",
    folder: "Support",
    people: [
      { name: "Carrie Claypool", title: "Accounts Receivable & Billing Specialist", image: "Carrie Claypool.jpg" },
      { name: "Jackie Noll", title: "Director of Human Resources", image: "Jackie Noll.jpeg" },
      { name: "Jenna Polston", title: "Tax Department Administrative Assistant", image: "Jenna Polston.jpg" },
      { name: "Jennifer Smith", title: "HR Coordinator", image: "Jennifer Smith.jpg" },
      { name: "Karen Daugherty", credentials: "CPA, CGMA", title: "Client Support Specialist", image: "Karen Daugherty.jpg" },
      { name: "Kathy Pool", credentials: "CPA", title: "Firm Administrator", image: "Kathy Pool.jpg" },
      { name: "Kelsey McCloskey", title: "Business Development Coordinator", image: "Kelsey McCloskey.jpg" },
      { name: "Kendra Anderson", title: "Talent & Engagement Coordinator", image: "Kendra Anderson.jpg" },
      { name: "Laura Blair", title: "Marketing Coordinator", image: "Laura Blair.jpg" },
      { name: "Lisa Robinson", title: "Reception & Processor", image: "Lisa Robinson.jpg" },
      { name: "Matthew Weil", title: "Technology Operations Coordinator", image: "Matthew Weil.jpg" },
      { name: "Ritu Patel", title: "Department Coordinator", image: "Ritu Patel.jpg" },
    ],
  },
];

// Optional bio overrides keyed by slug. Fill these in as content is approved.
// Any field omitted will simply hide its section in the rendered page.
const bios = {
  "eric-ficke": {
    email: "eficke@rudler.cpa",
    phone: "859-331-1717",
    bio: [
      "Eric Ficke serves as Director of the Client Accounting Services (CAS) Department and Principal at Rudler, PSC, where he leads a team focused on delivering proactive accounting and advisory support to small and mid-size businesses.",
      "Before entering public accounting, Eric spent 13 years as a master technician in the automobile industry. That background shaped how he approaches his work today — emphasizing efficiency, attention to detail, and the ability to diagnose a problem at the root rather than just at the surface.",
      "\"Efficiency is key as a mechanic, and that mindset translates well to a fast-paced environment like accounting. My clients appreciate that I take the time to understand their business before recommending a solution.\"",
    ],
    areasOfConcentration: [
      "Client Accounting Services (CAS)",
      "Tax preparation & planning",
      "Outsourced accounting & advisory",
      "Small business consulting",
    ],
    industries: [
      "Small to mid-size businesses",
      "Automotive & repair",
      "Professional services",
      "Individuals & families",
    ],
    designations: ["Certified Public Accountant (CPA)"],
    education: [
      "B.S. in Accounting, magna cum laude — Northern Kentucky University (2020)",
      "Associate's in Automotive Technology — Gateway Community & Technical College",
    ],
    memberships: [
      "American Institute of Certified Public Accountants (AICPA)",
      "Kentucky Society of Certified Public Accountants (KyCPA)",
    ],
    community: [
      "Active volunteer in Northern Kentucky community initiatives",
    ],
    personal:
      "Eric lives in Villa Hills, KY with his family. Outside the office he enjoys spending time with his kids, working on cars, and supporting local community events.",
  },
};

export const teamSections = sections.map((section) => ({
  ...section,
  people: section.people.map((person) => {
    const slug = slugify(person.name);
    return {
      ...person,
      slug,
      department: section.title,
      folder: section.folder,
      imageSrc: `/images/staff/${section.folder}/${person.image}`,
      ...(bios[slug] || {}),
    };
  }),
}));

export const teamMembers = teamSections.flatMap((s) => s.people);

export const getTeamMemberBySlug = (slug) =>
  teamMembers.find((m) => m.slug === slug);

export const getRelatedTeamMembers = (slug, limit = 4) => {
  const current = getTeamMemberBySlug(slug);
  if (!current) return [];
  return teamMembers
    .filter((m) => m.slug !== slug && m.department === current.department)
    .slice(0, limit);
};
