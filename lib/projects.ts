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
      "Detects tomato leaf diseases including early blight and septoria",
      "Uses soil and weather API data alongside image detections",
      "Validated with simulation and limited field data",
      "IoT sensors and wider accessibility features are planned next",
    ],
    tags: ["Python", "YOLOv8", "Computer vision", "AgriTech"],
    liveUrl: null,
    githubUrl: "https://github.com/sein-pr",
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
    summary: "Power Automate and UiPath bots that took repetitive work out of internal processes.",
    overview:
      "A set of automations built in Power Automate and UiPath, plus Freshworks workflows that handle user access requests and approvals.",
    highlights: [
      "Bots built in Power Automate and UiPath",
      "Freshworks workflows for access requests and approvals",
      "Built to fit the bank's existing IT tools",
    ],
    outcome: "Reduced manual processes by about 75%.",
    tags: ["Power Automate", "UiPath", "Freshworks", "RPA"],
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "website-revamp",
    title: "Agribank Website Revamp",
    subtitle: "Agribank internship, 2025",
    group: "Agribank",
    status: "Completed",
    summary: "Requirements gathering and project coordination for the bank's website revamp.",
    overview:
      "I gathered and documented the software requirements for the Agricultural Bank of Namibia's website revamp and acted as project manager, coordinating between business stakeholders and the technical team.",
    highlights: [
      "Gathered and documented software requirements",
      "Coordinated business and technical teams",
      "Tracked deliverables against the project timeline",
    ],
    tags: ["Project management", "Requirements gathering"],
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
