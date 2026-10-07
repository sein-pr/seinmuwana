"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/ui/animated-section"
import { ArrowRight } from "lucide-react"
import { certifications } from "@/lib/certifications"

export function CertificationsPreview() {
  const previewItems = certifications.slice(0, 3)

  return (
    <section className="bg-fog py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-4xl text-foreground sm:text-[2.5rem]">Certifications</h2>
              <p className="mt-3 max-w-xl text-lg leading-[1.55] text-[#383838]">
                Data science, graph technology, AI and software development.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit bg-background">
              <Link href="/certifications">
                All certifications
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {previewItems.map((certification, index) => (
            <AnimatedSection key={certification.slug} animation="fade-up" delay={index * 80}>
              <Link
                href={`/certifications/${certification.slug}`}
                className="flex h-full flex-col rounded-lg border border-border bg-background p-6 transition-colors hover:border-carbon"
              >
                <span className="w-fit rounded-full bg-lavender-mist px-3.5 py-1 text-sm font-medium text-carbon">
                  {certification.level}
                </span>
                <h3 className="mt-5 text-xl text-foreground">{certification.title}</h3>
                <p className="mt-1 text-base text-muted-foreground">{certification.issuer}</p>
                <p className="mt-4 text-base leading-[1.55] text-[#383838]">{certification.shortDescription}</p>
                <p className="mt-auto pt-6 text-sm text-muted-foreground">
                  {certification.skills.slice(0, 2).join(" · ")}
                </p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
