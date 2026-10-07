import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { ClosingBand } from "@/components/layout/closing-band"

export const metadata: Metadata = {
  title: "Skills | Sein Muwana",
  description: "Languages, frameworks, databases and automation tools Sein Muwana uses.",
}

const groups = [
  { title: "Backend", items: ["Python", "Flask and Flask-RESTX", "Django and Django REST Framework", "C# (.NET)", "Java", "PHP"] },
  { title: "Frontend", items: ["React", "Next.js", "JavaScript", "HTML and CSS"] },
  { title: "Mobile", items: ["React Native", "Flutter and Dart"] },
  { title: "Data", items: ["PostgreSQL (local and hosted, e.g. Supabase)", "SQL Server", "SQL", "Database design"] },
  { title: "Automation and tooling", items: ["Power Automate", "UiPath", "n8n", "Freshworks", "Git and GitHub", "CI/CD"] },
  { title: "Machine learning", items: ["Computer vision with YOLO models", "Attention modules (CBAM)", "Model training in Jupyter"] },
  { title: "Practice", items: ["Requirements gathering", "System and acceptance testing", "Project coordination"] },
]

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        title="Skills"
        description="What I use day to day, taken from my CV and the projects on this site."
      />

      <Section>
        <dl className="grid gap-x-16 gap-y-12 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="border-t border-border pt-6">
              <dt className="text-2xl font-semibold text-foreground">{group.title}</dt>
              <dd className="mt-4">
                <ul className="space-y-2 text-base leading-[1.5] text-graphite">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <ClosingBand
        title="See them applied"
        description="The projects page shows where each of these was used."
        primary={{ label: "View projects", href: "/projects" }}
        secondary={{ label: "Experience", href: "/experience" }}
      />
    </>
  )
}
