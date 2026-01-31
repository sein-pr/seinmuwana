"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building2, GraduationCap } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const experiences = [
  {
    icon: Building2,
    title: "Software Developer Intern",
    company: "Agricultural Bank of Namibia",
    period: "Feb 2025 - July 2025",
    description:
      "Developed user access applications, built automation bots using Power Automate and UIPath, and served as project manager for website revamp.",
    type: "Work",
  },
  {
    icon: GraduationCap,
    title: "Student Assistant",
    company: "University of Namibia",
    period: "Jan 2025 - Feb 2025",
    description:
      "Managed student registration, collaborated with ICT team, and led process improvements for the registration system.",
    type: "Academic",
  },
]

export function ExperiencePreview() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Recent Experience
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                Proven track record of delivering impactful solutions in real-world environments.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit gap-2 bg-transparent">
              <Link href="/experience">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <AnimatedSection key={exp.title} animation="fade-up" delay={index * 150}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <exp.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary">{exp.type}</Badge>
                </div>

                <div className="mt-4 space-y-2">
                  <h3
                    className="font-semibold text-lg text-card-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-primary">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
