import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { ClosingBand } from "@/components/layout/closing-band"
import { projects, type Project } from "@/lib/projects"
import { DrawLine } from "@/components/motion/draw-line"
import { Tilt } from "@/components/motion/tilt"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"

export const metadata: Metadata = {
  title: "Projects | Sein Muwana",
  description:
    "AgriSense crop disease detection, data and automation work at Agribank, and websites for small businesses.",
}

const featured = projects.find((p) => p.featured)!
const groups: Project["group"][] = ["Agribank", "Websites"]

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="A research thesis, data and automation work from Agribank, and websites for small businesses."
      />

      <Section>
        <Reveal>
          <Tilt className="rounded-lg">
          <Link
            href={`/projects/${featured.slug}`}
            className="group grid gap-8 rounded-lg bg-lavender-mist p-8 transition-colors hover:bg-periwinkle-tint lg:grid-cols-[1.3fr_1fr] lg:p-12"
          >
            <div>
              <p className="text-sm text-graphite">{featured.subtitle}</p>
              <h2 className="mt-2 text-4xl text-foreground sm:text-5xl">{featured.title}</h2>
              <p className="mt-4 max-w-xl text-lg leading-[1.55] text-graphite">{featured.summary}</p>
              <span className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-foreground underline underline-offset-4">
                Read the case study
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </span>
            </div>
            <ul className="space-y-3 self-end text-base leading-[1.5] text-graphite">
              {featured.highlights.slice(0, 4).map((item) => (
                <li key={item} className="border-t border-foreground/15 pt-3">
                  {item}
                </li>
              ))}
            </ul>
          </Link>
          </Tilt>
        </Reveal>
      </Section>

      {groups.map((group, i) => (
        <Section key={group} tone={i % 2 === 0 ? "fog" : "light"}>
          <h2 className="text-4xl text-foreground sm:text-[2.5rem]">
            {group === "Agribank" ? "Data and automation at Agribank" : "Websites"}
          </h2>
          <Stagger className="mt-10 border-t border-border" gap={0.06}>
            {projects
              .filter((p) => p.group === group)
              .map((project) => (
                <StaggerItem key={project.slug} className="relative">
                  <DrawLine />
                  <Link
                    href={`/projects/${project.slug}`}
                    data-cursor="Open"
                    className="group grid gap-2 py-6 transition-[padding,background-color] duration-300 hover:bg-background md:grid-cols-[1fr_1.4fr_auto] md:items-baseline md:gap-10 md:hover:pl-4"
                  >
                    <div>
                      <h3 className="text-xl text-foreground group-hover:underline group-hover:underline-offset-4">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                    <p className="text-base leading-[1.55] text-graphite">{project.summary}</p>
                    <p className="text-sm text-muted-foreground md:text-right">{project.tags.slice(0, 3).join(" · ")}</p>
                  </Link>
                </StaggerItem>
              ))}
          </Stagger>
        </Section>
      ))}

      <ClosingBand
        title="Need something like this built?"
        description="I take on freelance work alongside full-time roles."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "View CV", href: "/cv" }}
      />
    </>
  )
}
