"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Award, ArrowRight, Eye } from "lucide-react"
import { certifications } from "@/lib/certifications"

export function CertificationsPreview() {
  const previewItems = certifications.slice(0, 3)

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
                Certifications
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                Professional certifications across data science, graph technology, AI thinking, and software development.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit gap-2 bg-transparent">
              <Link href="/certifications">
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {previewItems.map((certification, index) => (
            <AnimatedSection key={certification.slug} animation="fade-up" delay={index * 100}>
              <div className="group h-full rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary">{certification.level}</Badge>
                </div>

                <h3
                  className="text-lg font-bold text-foreground group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {certification.title}
                </h3>
                <p className="text-sm font-medium text-primary">{certification.issuer}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {certification.shortDescription}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {certification.skills.slice(0, 2).map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-5 border-t border-border pt-4">
                  <Link
                    href={`/certifications/${certification.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    <Eye className="h-4 w-4" />
                    View certificate
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
