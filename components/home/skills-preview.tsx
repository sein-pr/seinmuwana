"use client"

import { Code2, Brain, Cog, Users } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const skills = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building robust web applications with modern frameworks and technologies.",
    technologies: ["JavaScript", "PHP", "HTML/CSS", "C#", "Java"],
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Implementing AI solutions for automation and intelligent systems.",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Streamlining workflows with RPA tools and custom automation solutions.",
    technologies: ["Power Automate", "UIPath", "FreshWorks"],
  },
  {
    icon: Users,
    title: "Project Management",
    description: "Leading cross-functional teams and coordinating software projects.",
    technologies: ["Agile", "Requirements Gathering", "Team Leadership"],
  },
]

export function SkillsPreview() {
  return (
    <section className="bg-card py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection animation="fade-up" className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Core Expertise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Combining technical skills with strong organizational abilities to deliver impactful solutions.
          </p>
        </AnimatedSection>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <AnimatedSection
              key={skill.title}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group relative h-full rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3
                      className="font-semibold text-foreground"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {skill.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
