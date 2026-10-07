/** Single source of truth for the CV page, the experience page and the generated PDF. */

export const cv = {
  name: "Sein Muwana",
  title: "Data analyst and software engineer",
  location: "Windhoek, Namibia",
  email: "seinprince2@gmail.com",
  phone: "+264 81 478 1478",
  phoneHref: "tel:+264814781478",
  website: "seinmuwana.netlify.app",
  websiteHref: "https://seinmuwana.netlify.app",
  linkedin: "linkedin.com/in/sein-muwana",
  linkedinHref: "https://www.linkedin.com/in/sein-muwana-2ab319299/",
  github: "github.com/sein-pr",
  githubHref: "https://github.com/sein-pr",

  profile:
    "Data analyst and software engineer at Agribank Namibia, with close to two years in banking. I extract, transform and load data from SAP, SharePoint and legacy systems into SQL, check its quality, and turn it into Power BI reports that Finance and executives present from. BSc (Honours) in Computer Science from the University of Namibia, 2026.",

  experience: [
    {
      title: "Data Analyst Graduate",
      org: "Agricultural Bank of Namibia (Agribank)",
      location: "Windhoek",
      period: "Jan 2026 – Present",
      summary: "Data quality, reporting and automation for Finance and branch operations.",
      points: [
        "Led the SAP Business Partner clean-up of about 10,000 client records across 8 branches. Records with bad data fell from over 4,000 to under 500, and the rest were waiting on clients to bring in updated documents.",
        "Ran weekly clean-up meetings with branch managers and sales consultants, and reported progress to executives.",
        "Built the Finance Dashboard in Power BI (income statement, balance sheet, financial ratios, variance analysis) and reconciled it line by line to Finance's management reports.",
        "Built an RPA robot that pulls income statement, loan book and balance sheet data from SAP and SharePoint, so managers present live from the dashboard instead of spending a week preparing reports.",
        "Set up a Microsoft Fabric warehouse that feeds SAP, Swordfish, Excel and SharePoint data into reporting tables.",
        "Wrote data-quality rules, scorecards and audit requirements for KYC and FIA customer data, plus Python and SQL checks that confirm figures match across systems.",
        "Built Agribot, a Copilot Studio chatbot that answers only from approved bank content and refuses to handle account numbers.",
      ],
      skills: ["Power BI", "SQL", "Python", "Microsoft Fabric", "SAP", "RPA", "Copilot Studio"],
    },
    {
      title: "Software Development Intern",
      org: "Agricultural Bank of Namibia (Agribank)",
      location: "Windhoek",
      period: "Feb – Dec 2025",
      summary: "Extended from three to six months, then again, on performance.",
      points: [
        "Moved 7 million transactions and 5,000 client records out of the legacy Bankmaster flat files: parsed them in Python, cleaned them into CSV and loaded them into a relational SQL database for reporting.",
        "Built a data-access application that let business users retrieve legacy banking data themselves, improving operational efficiency by 80% and cutting related support tickets by 80%.",
        "Developed a user access management system that digitised manual workflows.",
        "Built three RPA robots in Power Automate for client refresh, promise-to-pay and payment reporting across SAP and Swordfish, reducing manual effort by 75%.",
        "Wrote Python reconciliation scripts to prove the SAP-to-Swordfish robots moved data accurately.",
        "Gathered requirements and wrote the Software Requirements Specification for the bank's website revamp, working with more than 12 people from ICT, Marketing and Operations.",
      ],
      skills: ["Python", "SQL", "Power Automate", "UiPath", "C#", "Requirements"],
    },
    {
      title: "Student Registration Assistant",
      org: "University of Namibia",
      location: "Windhoek",
      period: "Jan – Feb 2025",
      summary: "Part-time support during the registration period.",
      points: [
        "Managed and updated student records in institutional systems, with data-quality checks during high-volume registration periods.",
        "Worked with ICT teams to keep the registration system accurate and running.",
      ],
      skills: ["Data accuracy", "ICT support"],
    },
  ],

  education: [
    {
      title: "BSc Computer Science (Honours), Upper Second Class",
      org: "University of Namibia",
      period: "2021 – 2026",
      note: "Thesis: AgriSense, an enhanced YOLOv8 model for crop disease detection. Modules include Artificial Intelligence, Data Warehousing and Data Mining, and Research Methodology.",
    },
    {
      title: "Elements of Data Science",
      org: "EPFL Extension School (online)",
      period: "Apr 2026",
      note: "Verified certificate of attendance.",
    },
    {
      title: "Neo4j Graph Data Science and Neo4j Fundamentals",
      org: "Neo4j GraphAcademy",
      period: "Apr 2024",
      note: "Two certificates, both verifiable on GraphAcademy.",
    },
    {
      title: "NSSCH Certificate, Grade 12",
      org: "Caprivi Senior Secondary School",
      period: "2019 – 2020",
      note: "37 points.",
    },
  ],

  skills: [
    { label: "Data and ETL", items: ["SQL (T-SQL)", "Python (pandas, NumPy)", "Power Query", "Data validation and quality", "Data modelling"] },
    { label: "Databases and cloud", items: ["SQL Server", "PostgreSQL (incl. Supabase)", "Microsoft Fabric (OneLake, Lakehouse, Data Factory)", "Neo4j"] },
    { label: "Analytics", items: ["Power BI", "DAX", "Excel", "Executive reporting"] },
    { label: "Automation", items: ["Power Automate", "UiPath", "Copilot Studio", "REST APIs", "SAP", "Requirements gathering"] },
    { label: "Software", items: ["Python (Flask, Django)", "C# (.NET)", "Java", "PHP", "React", "Next.js", "React Native", "Flutter"] },
    { label: "Machine learning", items: ["PyTorch", "TensorFlow", "YOLOv8 and Ultralytics", "Computer vision"] },
    { label: "Tools", items: ["Git and GitHub", "CI/CD", "n8n", "Freshworks"] },
  ],

  languages: ["English (fluent)", "Silozi (native)", "Afrikaans (intermediate)", "Oshikwanyama (basic)"],

  references: [
    { name: "Mr Romeo Tawana", role: "Data Analyst, Agribank", email: "rtawana@agribank.com.na" },
    { name: "Dr. Nalina Suresh", role: "Lecturer, University of Namibia", email: "nsuresh@unam.na" },
    { name: "Ms Rachel Nawa", role: "Business Systems Analyst, Agribank", email: "rnawa@agribank.com.na" },
  ],
}

export type CV = typeof cv
