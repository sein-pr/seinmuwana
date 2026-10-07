import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { ClosingBand } from "@/components/layout/closing-band"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata: Metadata = {
  title: "Experience | Sein Muwana",
  description:
    "Software development internship at the Agricultural Bank of Namibia and student assistant work at the University of Namibia.",
}

const experiences = [
  {
    title: "Software Development Intern",
    company: "Agricultural Bank of Namibia",
    location: "Windhoek",
    period: "Feb – Jul 2025",
    summary: "Built internal tools and automations for the bank's ICT and business teams.",
    points: [
      "Developed a user access management system that digitised manual workflows and improved efficiency by up to 80%.",
      "Built automations in Power Automate and UiPath that reduced manual processes by about 75%.",
      "Contributed to backend design for API-driven systems.",
      "Gathered and documented requirements for a website revamp, and coordinated the business and technical teams as its project manager.",
      "Set up Freshworks workflows to automate user access requests and approvals.",
      "Ran system tests and supported user acceptance testing.",
    ],
    skills: ["C#", "Power Automate", "UiPath", "Freshworks", "Requirements", "Testing"],
  },
  {
    title: "Student Registration Assistant",
    company: "University of Namibia",
    location: "Windhoek",
    period: "Jan – Feb 2025",
    summary: "Part-time support during the registration period.",
    points: [
      "Managed and updated student records, including senior and new student registrations.",
      "Gave technical support during high-demand registration days.",
      "Worked with the ICT team to keep the registration system accurate, and helped lead the registration team.",
    ],
    skills: ["Data accuracy", "Team coordination", "ICT support"],
  },
]

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        title="Experience"
        description="An internship at a bank and a registration role at a university. Both involved systems other people depended on."
      />

      <Section>
        <ol className="border-t border-border">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.title} animation="fade-up" delay={index * 80}>
              <li className="grid gap-4 border-b border-border py-10 md:grid-cols-[200px_1fr] md:gap-12">
                <p className="tabular text-sm text-muted-foreground md:pt-2">{exp.period}</p>
                <div>
                  <h2 className="text-3xl text-foreground">{exp.title}</h2>
                  <p className="mt-1 text-base text-muted-foreground">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="mt-5 max-w-2xl text-lg leading-[1.55] text-graphite">{exp.summary}</p>
                  <ul className="mt-5 max-w-2xl list-disc space-y-2.5 pl-5 text-base leading-[1.55] text-graphite marker:text-smoke">
                    {exp.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-muted-foreground">{exp.skills.join(" · ")}</p>
                </div>
              </li>
            </AnimatedSection>
          ))}
        </ol>
      </Section>

      <ClosingBand
        title="Read the full CV"
        description="Education, skills, languages and references in one page."
        primary={{ label: "View CV", href: "/cv" }}
        secondary={{ label: "See projects", href: "/projects" }}
      />
    </>
  )
}
