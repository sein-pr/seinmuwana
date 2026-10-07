"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, type MotionValue } from "motion/react"
import { usePrefersReducedMotion as useReducedMotion } from "@/lib/use-reduced-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/section"
import { getProjectBySlug } from "@/lib/projects"

const featured = [
  { slug: "agrisense", stat: "93.8%", statLabel: "mAP50-95 across 9 tomato leaf classes", tone: "bg-lavender-mist" },
  { slug: "finance-dashboard", stat: "1 week → live", statLabel: "prep time before each war room meeting", tone: "bg-fog" },
  { slug: "client-data-cleanup", stat: "4,000 → <500", statLabel: "client records with bad data", tone: "bg-periwinkle-tint" },
]

function StackCard({
  index,
  total,
  progress,
  slug,
  stat,
  statLabel,
  tone,
}: (typeof featured)[number] & { index: number; total: number; progress: MotionValue<number> }) {
  const reduce = useReducedMotion()
  const project = getProjectBySlug(slug)!
  // Each card shrinks and dims a little as the next one slides over it.
  const target = 1 - (total - index - 1) * 0.045
  const scale = useTransform(progress, [index / total, 1], reduce ? [1, 1] : [1, target])

  return (
    <div className="sticky" style={{ top: `calc(5.5rem + ${index * 1.1}rem)` }}>
      <motion.div style={{ scale, transformOrigin: "top center" }}>
        <Link
          href={`/projects/${project.slug}`}
          data-cursor="Open"
          className={`group grid min-h-[22rem] gap-8 rounded-lg border border-foreground/10 p-7 transition-colors sm:p-10 lg:grid-cols-[1.2fr_1fr] ${tone}`}
        >
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm text-graphite">{project.subtitle}</p>
              <h3 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">{project.title}</h3>
              <p className="mt-4 max-w-md text-lg leading-[1.55] text-graphite">{project.summary}</p>
            </div>
            <p className="mt-8 flex items-center gap-2 text-base font-medium text-foreground">
              Read the case study
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </p>
          </div>
          <div className="flex flex-col justify-end border-t border-foreground/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="tabular text-5xl font-extrabold leading-none text-foreground sm:text-6xl">{stat}</p>
            <p className="mt-3 max-w-[16rem] text-base leading-[1.4] text-graphite">{statLabel}</p>
            <p className="mt-6 text-sm text-graphite">{project.tags.slice(0, 4).join(" · ")}</p>
          </div>
        </Link>
      </motion.div>
    </div>
  )
}

export function ProjectsPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })

  return (
    <Section tone="fog" className="pb-24">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="max-w-2xl text-4xl text-foreground sm:text-[3.5rem] sm:leading-[1.06]">Selected work.</h2>
        <Button asChild variant="outline" className="w-fit bg-background">
          <Link href="/projects">
            All projects
            <ArrowRight />
          </Link>
        </Button>
      </div>

      <div ref={ref} className="mt-12 space-y-6 pb-[18vh]">
        {featured.map((item, i) => (
          <StackCard key={item.slug} {...item} index={i} total={featured.length} progress={scrollYProgress} />
        ))}
      </div>
    </Section>
  )
}
