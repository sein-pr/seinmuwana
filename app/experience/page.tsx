import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { ClosingBand } from "@/components/layout/closing-band"
import { AnimatedSection } from "@/components/ui/animated-section"
import { cv } from "@/lib/cv"
import { DrawLine } from "@/components/motion/draw-line"

const experiences = cv.experience

export const metadata: Metadata = {
  title: "Experience | Sein Muwana",
  description:
    "Data analyst graduate and former software development intern at Agribank Namibia, plus student registration work at the University of Namibia.",
}

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        title="Experience"
        description="Data, reporting and automation at a bank, after an internship that grew from three months to eleven."
      />

      <Section>
        <ol className="relative border-t border-border">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.title} animation="fade-up" delay={index * 80}>
              <li className="relative grid gap-4 py-10 md:grid-cols-[200px_1fr] md:gap-12">
                <DrawLine />
                <p className="tabular text-sm text-muted-foreground md:pt-2">{exp.period}</p>
                <div>
                  <h2 className="text-3xl text-foreground">{exp.title}</h2>
                  <p className="mt-1 text-base text-muted-foreground">
                    {exp.org} · {exp.location}
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
