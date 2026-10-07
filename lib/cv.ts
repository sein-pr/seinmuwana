/** Single source of truth for the CV page and the generated PDF. */

export const cv = {
  name: "Sein Muwana",
  title: "Computer Science graduate",
  location: "Windhoek, Namibia",
  email: "seinprince2@gmail.com",
  phone: "+264 81 478 1478",
  phoneHref: "tel:+264814781478",
  website: "seinmuwana.netlify.app",
  websiteHref: "https://seinmuwana.netlify.app",
  linkedin: "linkedin.com/in/sein-muwana",
  linkedinHref: "https://www.linkedin.com/in/sein-muwana-2ab319299/",

  profile:
    "Computer Science Honours graduate with hands-on experience in full-stack development, backend systems and process automation in a banking environment. Built tools that improved operational efficiency by up to 80%. Strong in the Python and JavaScript ecosystems, and now working on AI agent workflows.",

  experience: [
    {
      title: "Software Development Intern",
      org: "Agricultural Bank of Namibia",
      period: "Feb – Jul 2025",
      points: [
        "Developed a user access management system that digitised manual workflows and improved efficiency by up to 80%.",
        "Built automations in Power Automate and UiPath that reduced manual processes by about 75%.",
        "Contributed to backend design for API-driven systems.",
        "Gathered and documented requirements for a website revamp and coordinated business and technical teams.",
        "Ran system tests and supported user acceptance testing.",
      ],
    },
    {
      title: "Student Registration Assistant",
      org: "University of Namibia",
      period: "Jan – Feb 2025",
      points: [
        "Managed and updated student records in institutional systems.",
        "Gave technical support during high-demand registration periods.",
        "Worked with ICT teams to keep the system accurate and performing.",
      ],
    },
  ],

  education: [
    {
      title: "BSc Computer Science (Honours)",
      org: "University of Namibia",
      period: "2021 – 2026",
      note: "Graduated 2026. Thesis: AgriSense, a real-time crop monitoring and disease detection system.",
    },
    {
      title: "NSSCH Certificate, Grade 12",
      org: "Caprivi Senior Secondary School",
      period: "2019 – 2020",
      note: "37 points.",
    },
  ],

  skills: [
    { label: "Backend", value: "Python, Flask, Flask-RESTX, Django, Django REST Framework, C# (.NET), Java, PHP" },
    { label: "Frontend", value: "React, Next.js, JavaScript, HTML, CSS" },
    { label: "Mobile", value: "React Native, Flutter" },
    { label: "Data", value: "PostgreSQL (local and hosted, e.g. Supabase), SQL Server, SQL, database design" },
    { label: "Tools", value: "Git, GitHub, CI/CD, Power Automate, UiPath, n8n, Freshworks" },
  ],

  languages: ["English (fluent)", "Afrikaans (basic)", "Oshikwanyama (basic)"],

  references: [
    { name: "Mr Romeo Tawana", role: "Data Analyst, Agribank", email: "rtawana@agribank.com.na" },
    { name: "Dr. Nalina Suresh", role: "Lecturer, University of Namibia", email: "nsuresh@unam.na" },
    { name: "Ms Rachel Nawa", role: "Business System Analyst, Agribank", email: "rnawa@agribank.com.na" },
  ],
}

export type CV = typeof cv
