"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { cn } from "@/lib/utils"
import { getProjectBySlug } from "@/lib/projects"

const featuredSlugs = ["agrisense", "rpa-automation-suite", "user-access-management"]
const projects = featuredSlugs.map((slug) => getProjectBySlug(slug)!)

export function ProjectsPreview() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-4xl text-foreground sm:text-[2.5rem]">Selected projects</h2>
              <p className="mt-3 max-w-xl text-lg leading-[1.55] text-[#383838]">
                Academic research and professional builds, each solving a concrete problem.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit">
              <Link href="/projects">
                All projects
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              animation="fade-up"
              delay={index * 80}
              className={cn(project.featured ? "lg:col-span-3 lg:row-span-2" : "lg:col-span-2")}
            >
              <Link
                href={`/projects/${project.slug}`}
                className={cn(
                  "group flex h-full flex-col justify-between rounded-lg border p-6 transition-colors",
                  project.featured
                    ? "border-transparent bg-lavender-mist hover:bg-periwinkle-tint lg:p-10"
                    : "border-border bg-background hover:bg-fog",
                )}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={cn("text-foreground", project.featured ? "text-3xl font-extrabold" : "text-xl")}>
                      {project.title}
                    </h3>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <p
                    className={cn(
                      "mt-3 leading-[1.55] text-[#383838]",
                      project.featured ? "max-w-lg text-lg" : "text-base",
                    )}
                  >
                    {project.summary}
                  </p>
                </div>
                <p className="mt-8 text-sm text-muted-foreground">{project.tags.join(" · ")}</p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
