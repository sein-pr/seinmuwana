import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Section } from "@/components/layout/section"
import { SplitHeading } from "@/components/motion/split-heading"
import { Reveal } from "@/components/motion/reveal"
import { certifications, getCertificationBySlug } from "@/lib/certifications"

export const dynamicParams = false

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const certification = getCertificationBySlug(slug)

  if (!certification) {
    return { title: "Certification Not Found | Sein Muwana" }
  }

  return {
    title: `${certification.title} | Certifications | Sein Muwana`,
    description: certification.shortDescription,
  }
}

export default async function CertificationDetailPage({ params }: { params: Params }) {
  const { slug } = await params
  const certification = getCertificationBySlug(slug)

  if (!certification) notFound()

  const issued = new Date(certification.issueDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })

  return (
    <>
      <header className="bg-midnight text-white">
        <div className="mx-auto max-w-[1200px] px-6 py-12 sm:py-16">
          <Link
            href="/certifications"
            className="inline-flex min-h-11 items-center gap-2 text-base text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All certifications
          </Link>
          <SplitHeading as="h1" text={certification.title} delay={0.05} className="mt-4 max-w-3xl text-[2.25rem] leading-[1.08] text-white sm:text-5xl" />
          <p className="mt-4 text-lg text-white/75">
            {certification.issuer} · <span className="tabular">{issued}</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {certification.verifyUrl && (
              <Button asChild size="lg">
                <a href={certification.verifyUrl} target="_blank" rel="noopener noreferrer">
                  Verify with {certification.issuer}
                </a>
              </Button>
            )}
            <Button asChild size="lg" variant="secondary">
              <Link href={`/certifications/${certification.slug}/view`}>View credential summary</Link>
            </Button>
          </div>
        </div>
      </header>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="text-2xl text-foreground">Overview</h2>
            <p className="mt-4 max-w-2xl text-lg leading-[1.6] text-graphite">{certification.fullDescription}</p>
            <h2 className="mt-10 text-2xl text-foreground">Skills covered</h2>
            <p className="mt-4 text-base leading-[1.7] text-graphite">{certification.skills.join(" · ")}</p>
          </Reveal>
          <dl className="divide-y divide-border border-y border-border text-base">
            <div className="flex justify-between gap-4 py-4">
              <dt className="text-muted-foreground">Category</dt>
              <dd className="text-right text-foreground">{certification.category}</dd>
            </div>
            <div className="flex justify-between gap-4 py-4">
              <dt className="text-muted-foreground">Level</dt>
              <dd className="text-right text-foreground">{certification.level}</dd>
            </div>
            {certification.credentialId && (
              <div className="flex justify-between gap-4 py-4">
                <dt className="text-muted-foreground">Credential ID</dt>
                <dd className="tabular break-all text-right text-foreground">{certification.credentialId}</dd>
              </div>
            )}
          </dl>
        </div>
      </Section>
    </>
  )
}

export async function generateStaticParams() {
  return certifications.map((certification) => ({ slug: certification.slug }))
}
