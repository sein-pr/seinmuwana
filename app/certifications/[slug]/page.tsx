import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Award, Download, Eye } from "lucide-react"
import { certifications, getCertificationBySlug } from "@/lib/certifications"

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

  return (
    <div className="bg-background">
      <section className="bg-card py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Button asChild variant="ghost" className="-ml-4 mb-8">
            <Link href="/certifications">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Certifications
            </Link>
          </Button>

          <div className="rounded-lg border border-border bg-background p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary text-foreground">
                  <Award className="h-7 w-7" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-3">
                    {certification.level}
                  </Badge>
                  <h1
                    className="text-3xl font-bold text-foreground sm:text-4xl"
                  >
                    {certification.title}
                  </h1>
                  <p className="mt-2 text-muted-foreground font-medium">{certification.issuer}</p>
                  <p className="text-sm text-muted-foreground">
                    Issued {new Date(certification.issueDate).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild size="sm" variant="outline" className="bg-transparent">
                  <Link href={`/certifications/${certification.slug}/view`}>
                    <Eye className="h-4 w-4" />
                    View
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={`/certifications/${certification.slug}/view?download=1`}>
                    <Download className="h-4 w-4" />
                    Download
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Overview</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {certification.fullDescription}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-5">
                <h2 className="text-lg font-semibold text-foreground">Credential Information</h2>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted-foreground">Category</dt>
                    <dd className="font-medium text-foreground">{certification.category}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted-foreground">Credential ID</dt>
                    <dd className="font-medium text-foreground">{certification.credentialId}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted-foreground">Level</dt>
                    <dd className="font-medium text-foreground">{certification.level}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-foreground">Skills Validated</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {certification.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-lg border border-border bg-card p-6 sm:p-8 text-center">
            <h2
              className="text-2xl font-bold text-foreground"
            >
              Explore More Credentials
            </h2>
            <p className="mt-3 text-muted-foreground">
              Continue exploring the certification portfolio and verified learning tracks.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/certifications">View All Certifications</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/contact">Discuss My Credentials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return certifications.map((certification) => ({ slug: certification.slug }))
}
