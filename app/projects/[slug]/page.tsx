import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/section"
import { ClosingBand } from "@/components/layout/closing-band"
import { getProjectBySlug, projects } from "@/lib/projects"
import { SplitHeading } from "@/components/motion/split-heading"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"

export const dynamicParams = false

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Project not found | Sein Muwana" }
  return {
    title: `${project.title} | Projects | Sein Muwana`,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const next = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <>
      <header className="bg-midnight text-white">
        <div className="mx-auto max-w-[1200px] px-6 py-12 sm:py-16">
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center gap-2 text-base text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All projects
          </Link>
          <p className="mt-4 text-base text-white/60">
            {project.subtitle} · {project.status}
          </p>
          <SplitHeading as="h1" text={project.title} delay={0.05} className="mt-2 max-w-3xl text-[2.5rem] leading-[1.05] text-white sm:text-6xl" />
          <p className="mt-5 max-w-2xl text-lg leading-[1.55] text-white/75">{project.summary}</p>
          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <Button asChild size="lg">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Visit site
                    <ArrowUpRight />
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github />
                    GitHub profile
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </header>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div className="space-y-10">
            <Reveal>
              <h2 className="text-2xl text-foreground">Overview</h2>
              <p className="mt-3 max-w-2xl text-lg leading-[1.6] text-graphite">{project.overview}</p>
            </Reveal>
            {project.problem && (
              <Reveal>
                <h2 className="text-2xl text-foreground">The problem</h2>
                <p className="mt-3 max-w-2xl text-lg leading-[1.6] text-graphite">{project.problem}</p>
              </Reveal>
            )}
            {project.approach && (
              <Reveal>
                <h2 className="text-2xl text-foreground">What I built</h2>
                <p className="mt-3 max-w-2xl text-lg leading-[1.6] text-graphite">{project.approach}</p>
              </Reveal>
            )}
          </div>

          <aside className="space-y-10">
            <div>
              <h2 className="text-2xl text-foreground">Details</h2>
              <Stagger className="mt-4 divide-y divide-border border-y border-border" gap={0.08}>
                {project.highlights.map((item) => (
                  <StaggerItem key={item} className="py-3.5 text-base leading-[1.5] text-graphite">
                    {item}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            {project.outcome && (
              <Reveal className="rounded-lg bg-lavender-mist p-6">
                <h2 className="text-lg text-foreground">Result</h2>
                <p className="mt-2 text-xl font-semibold leading-[1.4] text-foreground">{project.outcome}</p>
              </Reveal>
            )}
            <div>
              <h2 className="text-lg text-foreground">Built with</h2>
              <p className="mt-2 text-base text-graphite">{project.tags.join(" · ")}</p>
            </div>
          </aside>
        </div>
      </Section>

      <ClosingBand
        title={`Next: ${next.title}`}
        description={next.summary}
        primary={{ label: "View project", href: `/projects/${next.slug}` }}
        secondary={{ label: "Contact me", href: "/contact" }}
      />
    </>
  )
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}
