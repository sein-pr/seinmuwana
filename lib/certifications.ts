export type Certification = {
  slug: string
  title: string
  issuer: string
  issueDate: string
  category: string
  credentialId?: string
  /** Issuer-hosted page where the credential can be checked. */
  verifyUrl?: string
  shortDescription: string
  fullDescription: string
  skills: string[]
  level: "Foundation" | "Intermediate" | "Advanced"
}

export const certifications: Certification[] = [
  {
    slug: "elements-of-data-science-epfl",
    title: "Elements of Data Science",
    issuer: "EPFL Extension School",
    issueDate: "2026-04-10",
    category: "Data Science",
    credentialId: "Gn6bVlmlZhSE",
    verifyUrl: "https://learn.extensionschool.ch/verify/Gn6bVlmlZhSE",
    shortDescription:
      "Verified certificate of attendance for EPFL's online data science course, taught by Prof. Anne-Marie Kermarrec.",
    fullDescription:
      "A Verified Certificate of Attendance from the EPFL Extension School for the Elements of Data Science course. The issuer hosts a verification page for this certificate.",
    skills: ["Data Science", "Python", "Data Analysis"],
    level: "Intermediate",
  },
  {
    slug: "basics-of-data-science",
    title: "Basics of Data Science",
    issuer: "Professional Training Program",
    issueDate: "2024-01-15",
    category: "Data Science",
    shortDescription:
      "Foundational training in data science concepts, data handling, and practical analytical workflows.",
    fullDescription:
      "This certification introduced core data science principles including data preparation, exploratory analysis, and structured problem solving for real-world data tasks.",
    skills: ["Data Analysis", "Data Cleaning", "Statistics", "Problem Solving"],
    level: "Foundation",
  },
  {
    slug: "neo4j-fundamentals",
    title: "Neo4j Fundamentals",
    issuer: "Neo4j",
    issueDate: "2024-04-24",
    category: "Graph Databases",
    credentialId: "e8cb0abc-3b09-4ca2-9d65-41a2928c6e46",
    verifyUrl: "https://graphacademy.neo4j.com/c/e8cb0abc-3b09-4ca2-9d65-41a2928c6e46/",
    shortDescription:
      "Core Neo4j knowledge covering graph modeling, Cypher basics, and graph-first thinking.",
    fullDescription:
      "The Neo4j Fundamentals certification validates understanding of graph database concepts, data relationships, Cypher query patterns, and practical usage of Neo4j for connected data.",
    skills: ["Neo4j", "Cypher", "Graph Modeling", "Database Design"],
    level: "Foundation",
  },
  {
    slug: "graph-data-science-neo4j",
    title: "Certificate in Graph Data Science",
    issuer: "Neo4j",
    issueDate: "2024-04-27",
    category: "Graph Data Science",
    credentialId: "2ba6ecc3-96ff-458d-b9d4-d9862331cd86",
    verifyUrl: "https://graphacademy.neo4j.com/c/2ba6ecc3-96ff-458d-b9d4-d9862331cd86/",
    shortDescription:
      "Applied graph data science including graph algorithms and insight generation from connected data.",
    fullDescription:
      "This certification demonstrates practical understanding of graph algorithms and graph data science workflows in Neo4j to extract patterns, strengthen decision support, and improve data intelligence.",
    skills: ["Graph Algorithms", "Neo4j GDS", "Connected Data Analysis", "Machine Learning Concepts"],
    level: "Intermediate",
  },
  {
    slug: "python-cisco",
    title: "Python Certificate",
    issuer: "Cisco",
    issueDate: "2024-06-11",
    category: "Programming",
    shortDescription:
      "Python programming certification focused on practical scripting and software development fundamentals.",
    fullDescription:
      "This Cisco Python certificate validates hands-on programming ability with Python, covering syntax, control flow, functions, modular thinking, and practical automation-oriented coding patterns.",
    skills: ["Python", "Scripting", "Functions", "Programming Fundamentals"],
    level: "Intermediate",
  },
  {
    slug: "agrisense-environmental-sustainability",
    title: "AgriSense Certificate for Environmental Sustainability",
    issuer: "AgriSense Initiative",
    issueDate: "2025-01-25",
    category: "Sustainability",
    shortDescription:
      "Recognition for sustainability-focused innovation through the AgriSense initiative.",
    fullDescription:
      "This certificate recognizes contribution to environmentally sustainable technology direction within AgriSense, with a focus on practical agricultural impact and responsible innovation.",
    skills: ["Sustainable Innovation", "AgriTech", "Environmental Awareness", "Impact Thinking"],
    level: "Intermediate",
  },
  {
    slug: "critical-thinking-ai-era",
    title: "Critical Thinking in the AI Era",
    issuer: "Professional Development Program",
    issueDate: "2025-03-09",
    category: "AI Strategy",
    shortDescription:
      "Certification focused on reasoning, decision quality, and critical evaluation in AI-driven environments.",
    fullDescription:
      "This certification emphasizes structured critical thinking for the AI era, including bias awareness, evidence-based reasoning, and stronger decision-making in technology and business contexts.",
    skills: ["Critical Thinking", "AI Literacy", "Decision Making", "Analytical Reasoning"],
    level: "Advanced",
  },
  {
    slug: "hackeratom-participation",
    title: "Participation Certificate - HackerAtom",
    issuer: "HackerAtom Hackathon",
    issueDate: "2025-07-18",
    category: "Hackathon",
    shortDescription:
      "Participation recognition in a uranium-focused hackathon exploring applied innovation.",
    fullDescription:
      "This participation certificate reflects active involvement in the HackerAtom uranium-based hackathon, contributing ideas and technical collaboration under real problem constraints.",
    skills: ["Hackathon Collaboration", "Rapid Prototyping", "Innovation", "Team Problem Solving"],
    level: "Intermediate",
  },
]

export function getCertificationBySlug(slug: string) {
  return certifications.find((certification) => certification.slug === slug)
}
