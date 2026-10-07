import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Award, Calendar, FileCheck2 } from "lucide-react"
import { certifications, getCertificationBySlug } from "@/lib/certifications"
import { CertificateViewActions } from "@/components/certifications/certificate-view-actions"

type Params = Promise<{ slug: string }>

export default async function CertificateViewPage({ params }: { params: Params }) {
  const { slug } = await params
  const certification = getCertificationBySlug(slug)

  if (!certification) notFound()

  return (
    <div className="bg-background py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <Button asChild variant="ghost" className="-ml-4">
            <Link href={`/certifications/${certification.slug}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Details
            </Link>
          </Button>
          <CertificateViewActions />
        </div>

        <div className="relative overflow-hidden rounded-lg border border-primary/20 bg-card p-8 sm:p-12 print:shadow-none">
          <div className="absolute inset-x-0 top-0 h-2 bg-primary" />

          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Certificate of Achievement</p>
            <h1
              className="mt-4 text-3xl font-bold text-foreground sm:text-5xl"
            >
              {certification.title}
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              Awarded to <span className="font-semibold text-foreground">Sein Muwana</span>
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-background p-5 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                <Award className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Issuer</p>
              <p className="mt-1 font-semibold text-foreground">{certification.issuer}</p>
            </div>
            <div className="rounded-lg border border-border bg-background p-5 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                <Calendar className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Issue Date</p>
              <p className="mt-1 font-semibold text-foreground">
                {new Date(certification.issueDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-5 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                <FileCheck2 className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Credential ID</p>
              <p className="mt-1 font-semibold text-foreground">{certification.credentialId}</p>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <p className="text-center text-sm leading-relaxed text-muted-foreground">
              This page is generated as a readable certificate view for portfolio verification and can be exported via the
              <span className="font-medium text-foreground"> Download / Print </span>action.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {certification.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return certifications.map((certification) => ({ slug: certification.slug }))
}
