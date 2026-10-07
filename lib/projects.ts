export type Project = {
  slug: string
  title: string
  subtitle: string
  group: "Research" | "Agribank" | "Websites"
  status: "In development" | "Completed"
  summary: string
  overview: string
  problem?: string
  approach?: string
  highlights: string[]
  outcome?: string
  tags: string[]
  liveUrl: string | null
  githubUrl: string | null
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "agrisense",
    title: "AgriSense",
    subtitle: "Honours thesis, University of Namibia",
    group: "Research",
    status: "In development",
    featured: true,
    summary:
      "A real-time crop monitoring and disease detection system for smallholder farmers in Namibia, built around an enhanced YOLOv8 model.",
    overview:
      "AgriSense is my honours thesis. It detects tomato leaf diseases from images and combines the result with soil and weather data to give farmers practical advice. The thesis was submitted in October 2025 under Dr. Nalina Suresh.",
    problem:
      "Namibia's semi-arid climate, erratic rainfall and reliance on traditional farming make disease management difficult, and existing agricultural technology is expensive for smallholder farmers.",
    approach:
      "I improved YOLOv8 with a Convolutional Block Attention Module (CBAM) and a Bi-directional Reparameterized Generalized Feature Pyramid Network (BiRepGFPN) to detect diseases such as early blight and septoria more reliably. Detections are paired with soil and weather API data in a decision support platform.",
    highlights: [
      "Enhanced YOLOv8 with CBAM attention and a BiRepGFPN feature pyramid",
      "Detects 9 tomato leaf classes, including early blight and septoria",
      "mAP50-95 93.8%, accuracy 92.2%, precision 92.4%, recall 94.1%",
      "Uses soil and weather API data alongside image detections",
      "IoT sensors and wider accessibility features are planned next",
    ],
    tags: ["Python", "PyTorch", "YOLOv8", "Flask", "PostgreSQL"],
    liveUrl: null,
    githubUrl: "https://github.com/sein-pr",
  },
  {
    slug: "finance-dashboard",
    title: "Finance Dashboard",
    subtitle: "Agribank, 2026",
    group: "Agribank",
    status: "Completed",
    summary: "A Power BI dashboard that replaced a week of manual report preparation before each war room meeting.",
    overview:
      "A Power BI Finance Dashboard covering the income statement, balance sheet, financial ratios and variance analysis. I reconciled it line by line to Finance's management reports, fixing the mapping files until the figures agreed.",
    approach:
      "An RPA robot pulls income statement, loan book and balance sheet data from SAP and SharePoint, and a Microsoft Fabric warehouse feeds SAP, Swordfish, Excel and SharePoint data into the reporting tables.",
    highlights: [
      "Income statement, balance sheet, ratios and variance analysis in one report",
      "Reconciled line by line to Finance's management reports",
      "Data refreshed by an RPA robot from SAP and SharePoint",
      "Microsoft Fabric warehouse behind the reporting tables",
    ],
    outcome: "Managers now present live from the dashboard at war room meetings instead of spending a week preparing reports.",
    tags: ["Power BI", "DAX", "Microsoft Fabric", "RPA"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "client-data-cleanup",
    title: "Client Data Clean-up",
    subtitle: "Agribank, 2026",
    group: "Agribank",
    status: "Completed",
    summary: "A clean-up of about 10,000 SAP Business Partner records across 8 branches.",
    overview:
      "I led the SAP Business Partner clean-up: finding bad records, agreeing fixes with branch managers and sales consultants, and reporting progress to executives each week.",
    approach:
      "I wrote data-quality rules, scorecards and audit requirements for KYC and FIA customer data, plus Python and SQL checks that confirm figures match across systems.",
    highlights: [
      "About 10,000 client records across 8 branches",
      "Weekly clean-up meetings with branch managers and sales consultants",
      "Scorecards and audit requirements for KYC and FIA data",
      "Python and SQL checks that figures match across systems",
    ],
    outcome: "Records with bad data fell from over 4,000 to under 500. The remainder were waiting on clients to bring in updated documents.",
    tags: ["SAP", "SQL", "Python", "Data quality"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "agribot",
    title: "Agribot",
    subtitle: "Agribank, 2026",
    group: "Agribank",
    status: "Completed",
    summary: "A Copilot Studio chatbot that answers only from approved bank content.",
    overview:
      "Agribot answers questions from content the bank has approved, and refuses to handle account numbers.",
    highlights: [
      "Answers only from approved bank content",
      "Declines to process account numbers",
      "Built in Copilot Studio",
    ],
    tags: ["Copilot Studio", "Chatbot", "Data privacy"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "legacy-data-migration",
    title: "Legacy Data Migration",
    subtitle: "Agribank internship, 2025",
    group: "Agribank",
    status: "Completed",
    summary: "7 million transactions and 5,000 client records moved out of Bankmaster flat files into SQL.",
    overview:
      "I parsed the legacy Bankmaster flat files in Python, cleaned them into CSV and loaded them into a relational SQL database for reporting. I also built a data-access application so business users could retrieve legacy banking data themselves.",
    highlights: [
      "7 million transactions and 5,000 client records",
      "Parsed and cleaned in Python, loaded into a relational SQL database",
      "Self-service data-access application for business users",
    ],
    outcome: "Operational efficiency improved by 80% and related support tickets fell by 80%.",
    tags: ["Python", "SQL", "ETL", "C#"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "user-access-management",
    title: "User Access Management System",
    subtitle: "Agribank internship, 2025",
    group: "Agribank",
    status: "Completed",
    summary: "An application that replaced manual user access workflows with a digital process.",
    overview:
      "During my internship at the Agricultural Bank of Namibia I developed a user access management system to digitise manual workflows for access requests.",
    approach:
      "I built the application with the ICT team and supported system testing and user acceptance testing before handover.",
    highlights: [
      "Digitised manual access-request workflows",
      "Backend designed around API-driven architecture",
      "System testing and user acceptance testing supported before release",
    ],
    outcome: "Improved efficiency by up to 80%.",
    tags: ["C#", "SQL Server", "Full-stack"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "rpa-automation-suite",
    title: "RPA Automation Suite",
    subtitle: "Agribank internship, 2025",
    group: "Agribank",
    status: "Completed",
    summary: "Three Power Automate robots for client refresh, promise-to-pay and payment reporting.",
    overview:
      "Three robots built in Power Automate that move data across SAP and Swordfish, plus Python reconciliation scripts that prove the data arrives accurately. I later switched the Prelegal Dashboard to read the recovery API directly.",
    highlights: [
      "Client refresh, promise-to-pay and payment reporting robots",
      "Python reconciliation scripts for the SAP-to-Swordfish transfers",
      "Freshworks workflows for access requests and approvals",
    ],
    outcome: "Reduced manual effort by 75%.",
    tags: ["Power Automate", "UiPath", "Python", "RPA"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "website-revamp",
    title: "Agribank Website Revamp",
    subtitle: "Agribank internship, 2025",
    group: "Agribank",
    status: "Completed",
    summary: "The Software Requirements Specification for the bank's website revamp.",
    overview:
      "I gathered requirements and wrote the Software Requirements Specification for the Agricultural Bank of Namibia's website revamp, working with more than 12 people from ICT, Marketing and Operations.",
    highlights: [
      "Requirements gathered from ICT, Marketing and Operations",
      "Software Requirements Specification written and agreed",
      "Business and technical teams coordinated through delivery",
    ],
    tags: ["Requirements", "SRS", "Stakeholder coordination"],
    liveUrl: "https://www.agribank.com.na",
    githubUrl: null,
  },
  {
    slug: "ferreiras-garden-centre",
    title: "Ferreiras Garden Centre",
    subtitle: "Business website",
    group: "Websites",
    status: "Completed",
    summary: "A responsive site for a garden centre showing its products and contact details.",
    overview: "A responsive website for Ferreiras Garden Centre covering products, contact information and in-store offerings.",
    highlights: ["Responsive layout for phone and desktop", "Deployed on Netlify"],
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://ferreirasgardencentre.netlify.app/",
    githubUrl: null,
  },
  {
    slug: "js-hardware",
    title: "JS Hardware",
    subtitle: "Business website",
    group: "Websites",
    status: "Completed",
    summary: "A mobile-friendly website for a hardware business, covering its products and services.",
    overview: "A website for JS Hardware with a clear structure for products, services and customer enquiries.",
    highlights: ["Mobile-friendly layouts", "Deployed on Netlify"],
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://jshardware.netlify.app/",
    githubUrl: null,
  },
  {
    slug: "gold-ideas",
    title: "Gold Ideas",
    subtitle: "Ideas showcase",
    group: "Websites",
    status: "Completed",
    summary: "A site for presenting ideas and concepts with simple navigation.",
    overview: "A website built to present concept-driven content with straightforward navigation.",
    highlights: ["Content-first layout", "Deployed on Netlify"],
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://gold-ideas.netlify.app/",
    githubUrl: null,
  },
  {
    slug: "isak-shawapala",
    title: "Isak Shawapala Portfolio",
    subtitle: "Personal portfolio",
    group: "Websites",
    status: "Completed",
    summary: "A personal portfolio site with a clean, responsive layout.",
    overview: "A portfolio website presenting profile information and achievements.",
    highlights: ["Responsive layout", "Deployed on Netlify"],
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://isakshawapala.netlify.app/",
    githubUrl: null,
  },
]

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug)
