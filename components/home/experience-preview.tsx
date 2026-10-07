"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Agricultural Bank of Namibia",
    period: "Feb 2025 – Jul 2025",
    description:
      "Developed user access applications, built automation bots using Power Automate and UiPath, and served as project manager for the website revamp.",
  },
  {
    title: "Student Assistant",
    company: "University of Namibia",
    period: "Jan 2025 – Feb 2025",
    description:
      "Managed student registration, collaborated with the ICT team, and led process improvements for the registration system.",
  },
]

export function ExperiencePreview() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-4xl text-foreground sm:text-[2.5rem]">Recent experience</h2>
              <p className="mt-3 max-w-xl text-lg leading-[1.55] text-[#383838]">
                Work inside a bank and a university, on systems people use every day.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit">
              <Link href="/experience">
                All experience
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        <div className="mt-12 border-t border-border">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.title} animation="fade-up" delay={index * 100}>
              <div className="grid gap-3 border-b border-border py-8 md:grid-cols-[200px_1fr_1.4fr] md:gap-10">
                <p className="tabular text-sm text-muted-foreground md:pt-1">{exp.period}</p>
                <div>
                  <h3 className="text-xl text-foreground">{exp.title}</h3>
                  <p className="mt-1 text-base text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-base leading-[1.55] text-[#383838]">{exp.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
