"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Leaf, Bot, Globe } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const projects = [
  {
    icon: Leaf,
    title: "AgriSense",
    slug: "agrisense",
    description:
      "A crop and disease monitoring system using affordable technology. My honours research project aimed at improving the agricultural sector through accessible AgriTech solutions.",
    tags: ["Python", "Machine Learning", "IoT", "AgriTech"],
    featured: true,
  },
  {
    icon: Bot,
    title: "Automation Bots",
    slug: "automation-bots",
    description:
      "Built RPA solutions using Power Automate and UIPath to streamline internal processes and reduce manual workload at Agribank.",
    tags: ["Power Automate", "UIPath", "RPA"],
    featured: false,
  },
  {
    icon: Globe,
    title: "User Access Application",
    slug: "user-access-app",
    description:
      "Developed a user access application that digitized manual data workflows, significantly improving operational efficiency.",
    tags: ["C#", "Full-Stack", "Database"],
    featured: false,
  },
]

export function ProjectsPreview() {
  return (
    <section className="bg-card py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Featured Projects
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                Academic research and professional projects showcasing practical problem-solving.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit gap-2 bg-transparent">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              animation="fade-up"
              delay={index * 100}
            >
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <div
                  className={`group relative h-full overflow-hidden rounded-2xl border bg-background p-6 transition-all hover:shadow-lg ${
                    project.featured
                      ? "border-primary/50 lg:col-span-1 lg:row-span-1"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {project.featured && (
                    <div className="absolute right-4 top-4">
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    </div>
                  )}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <project.icon className="h-6 w-6" />
                  </div>

                  <div className="mt-4 space-y-2">
                    <h3
                      className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
                      Learn more
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
