import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { ClosingBand } from "@/components/layout/closing-band"
import { ScrollTimeline, TimelineDot } from "@/components/motion/scroll-timeline"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { cv } from "@/lib/cv"

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
        <ScrollTimeline railClassName="left-[224px]">
          <ol>
            {cv.experience.map((exp) => (
              <li key={exp.title} className="relative grid gap-4 border-t border-border py-12 first:border-t-0 md:grid-cols-[200px_1fr] md:gap-12">
                <TimelineDot className="left-[224px] top-[3.9rem]" />
                <Reveal className="md:sticky md:top-28 md:self-start">
                  <p className="tabular text-sm text-muted-foreground">{exp.period}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{exp.location}</p>
                </Reveal>
                <div className="md:pl-10">
                  <Reveal>
                    <h2 className="text-3xl text-foreground">{exp.title}</h2>
                    <p className="mt-1 text-base text-muted-foreground">{exp.org}</p>
                    <p className="mt-5 max-w-2xl text-lg leading-[1.55] text-graphite">{exp.summary}</p>
                  </Reveal>
                  <Stagger className="mt-5 max-w-2xl space-y-3" gap={0.07}>
                    {exp.points.map((point) => (
                      <StaggerItem key={point} className="flex gap-3 text-base leading-[1.55] text-graphite">
                        <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{point}</span>
                      </StaggerItem>
                    ))}
                  </Stagger>
                  <Reveal>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <li key={skill} className="rounded-full bg-lavender-mist px-3 py-1 text-sm text-carbon">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </li>
            ))}
          </ol>
        </ScrollTimeline>
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
