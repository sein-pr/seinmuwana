import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { certifications, getCertificationBySlug } from "@/lib/certifications"
import { CertificateViewActions } from "@/components/certifications/certificate-view-actions"

export const dynamicParams = false

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const certification = getCertificationBySlug(slug)
  return {
    title: certification ? `${certification.title} credential summary | Sein Muwana` : "Credential | Sein Muwana",
    robots: { index: false },
  }
}

export default async function CertificateViewPage({ params }: { params: Params }) {
  const { slug } = await params
  const certification = getCertificationBySlug(slug)
  if (!certification) notFound()

  const issued = new Date(certification.issueDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })

  return (
    <div className="bg-background py-10 sm:py-16 print:py-0">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <Link
            href={`/certifications/${certification.slug}`}
            className="inline-flex min-h-11 items-center gap-2 text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to details
          </Link>
          <CertificateViewActions />
        </div>

        <article className="rounded-lg border border-border p-8 sm:p-12 print:border-0 print:p-0">
          <p className="text-sm text-muted-foreground">Credential summary</p>
          <h1 className="mt-3 text-[2rem] leading-[1.1] text-foreground sm:text-5xl">{certification.title}</h1>
          <p className="mt-3 text-lg text-graphite">Earned by Sein Muwana</p>

          <dl className="mt-10 divide-y divide-border border-y border-border text-base">
            <div className="flex justify-between gap-4 py-4">
              <dt className="text-muted-foreground">Issuer</dt>
              <dd className="text-right text-foreground">{certification.issuer}</dd>
            </div>
            <div className="flex justify-between gap-4 py-4">
              <dt className="text-muted-foreground">Issued</dt>
              <dd className="tabular text-right text-foreground">{issued}</dd>
            </div>
            <div className="flex justify-between gap-4 py-4">
              <dt className="text-muted-foreground">Credential ID</dt>
              <dd className="tabular break-all text-right text-foreground">{certification.credentialId}</dd>
            </div>
          </dl>

          <p className="mt-8 text-base leading-[1.6] text-graphite">{certification.fullDescription}</p>
          <p className="mt-4 text-sm text-muted-foreground">{certification.skills.join(" · ")}</p>

          <p className="mt-10 border-t border-border pt-6 text-sm leading-[1.6] text-muted-foreground">
            This is a summary of the credential, not the certificate itself. To verify it with the issuer, ask for the
            link through the contact page.
          </p>
        </article>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return certifications.map((certification) => ({ slug: certification.slug }))
}
