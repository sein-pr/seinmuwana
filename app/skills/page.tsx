import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { ClosingBand } from "@/components/layout/closing-band"
import { cv } from "@/lib/cv"

export const metadata: Metadata = {
  title: "Skills | Sein Muwana",
  description: "SQL, Power BI, Python, automation and machine-learning tools Sein Muwana uses.",
}

const groups = cv.skills

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
            <div key={group.label} className="border-t border-border pt-6">
              <dt className="text-2xl font-semibold text-foreground">{group.label}</dt>
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
