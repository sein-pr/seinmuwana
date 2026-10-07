import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/layout/section"
import { PageHeader } from "@/components/layout/page-header"
import { ClosingBand } from "@/components/layout/closing-band"
import { AnimatedSection } from "@/components/ui/animated-section"
import { certifications } from "@/lib/certifications"

export const metadata: Metadata = {
  title: "Certifications | Sein Muwana",
  description:
    "Certifications in data science, graph data, Python and AI-era critical thinking, plus hackathon participation.",
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" })

export default function CertificationsPage() {
  return (
    <>
      <PageHeader
        title="Certifications"
        description={`${certifications.length} credentials across data science, graph databases, Python and critical thinking.`}
      />

      <Section>
        <ul className="border-t border-border">
          {certifications.map((certification, index) => (
            <AnimatedSection key={certification.slug} animation="fade-up" delay={Math.min(index, 4) * 50}>
              <li className="grid gap-4 border-b border-border py-8 md:grid-cols-[200px_1fr_auto] md:gap-12">
                <p className="tabular text-sm text-muted-foreground md:pt-1.5">{formatDate(certification.issueDate)}</p>
                <div>
                  <h2 className="text-2xl text-foreground">
                    <Link
                      href={`/certifications/${certification.slug}`}
                      className="underline-offset-4 hover:underline"
                    >
                      {certification.title}
                    </Link>
                  </h2>
                  <p className="mt-1 text-base text-muted-foreground">{certification.issuer}</p>
                  <p className="mt-3 max-w-2xl text-base leading-[1.55] text-graphite">
                    {certification.shortDescription}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">{certification.skills.slice(0, 4).join(" · ")}</p>
                </div>
                <div className="flex items-start gap-3 md:justify-end md:pt-1">
                  <span className="rounded-full bg-lavender-mist px-3.5 py-1 text-sm font-medium text-carbon">
                    {certification.level}
                  </span>
                </div>
              </li>
            </AnimatedSection>
          ))}
        </ul>
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
