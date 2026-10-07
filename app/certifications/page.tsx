import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, BadgeCheck } from "lucide-react"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/layout/page-header"
import { ClosingBand } from "@/components/layout/closing-band"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { DrawLine } from "@/components/motion/draw-line"
import { certifications } from "@/lib/certifications"

export const metadata: Metadata = {
  title: "Certifications | Sein Muwana",
  description:
    "Certifications in data science, graph data, Python and AI-era critical thinking, plus hackathon participation.",
}

const byYear = Object.entries(
  [...certifications]
    .sort((a, b) => b.issueDate.localeCompare(a.issueDate))
    .reduce<Record<string, typeof certifications>>((acc, c) => {
      const year = c.issueDate.slice(0, 4)
      ;(acc[year] ??= []).push(c)
      return acc
    }, {}),
).sort(([a], [b]) => Number(b) - Number(a))

const formatDate = (iso: string) => new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" })

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        title="Certifications"
        description={`${certifications.length} credentials across data science, graph databases, Python and critical thinking.`}
      />

      <Section>
        <div className="space-y-4">
          {byYear.map(([year, items]) => (
            <div key={year} className="relative grid gap-4 py-8 md:grid-cols-[200px_1fr] md:gap-12">
              <DrawLine className="top-0 bottom-auto" />
              <Reveal className="md:sticky md:top-28 md:self-start">
                <h2 className="tabular text-5xl font-extrabold text-foreground md:text-6xl">{year}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {items.length} credential{items.length > 1 ? "s" : ""}
                </p>
              </Reveal>
              <Stagger className="space-y-2" gap={0.1}>
                {items.map((c) => (
                  <StaggerItem key={c.slug} className="group relative rounded-lg border border-border p-6 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-fog">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-2xl text-foreground">
                          <Link href={`/certifications/${c.slug}`} data-cursor="Open" className="after:absolute after:inset-0">
                            {c.title}
                          </Link>
                        </h3>
                        <p className="mt-1 text-base text-muted-foreground">
                          {c.issuer} · <span className="tabular">{formatDate(c.issueDate)}</span>
                        </p>
                      </div>
                      <span className="rounded-full bg-lavender-mist px-3.5 py-1 text-sm font-medium text-carbon">{c.level}</span>
                    </div>
                    <p className="mt-3 max-w-2xl text-base leading-[1.55] text-graphite">{c.shortDescription}</p>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
                      <span>{c.skills.slice(0, 4).join(" · ")}</span>
                      <span className="flex items-center gap-1.5">
                        {c.verifyUrl && (
                          <span className="flex items-center gap-1 text-foreground">
                            <BadgeCheck className="h-4 w-4" aria-hidden="true" /> Verifiable
                          </span>
                        )}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </Section>

      <ClosingBand
        title="Questions about a credential?"
        description="Ask and I'll share the issuer's verification link."
        primary={{ label: "Send a message", href: "/contact" }}
        secondary={{ label: "View CV", href: "/cv" }}
      />
    </>
  )
}
