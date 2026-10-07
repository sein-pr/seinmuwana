import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ArrowRight, Download, Eye } from "lucide-react"
import { certifications } from "@/lib/certifications"

export const metadata: Metadata = {
  title: "Certifications | Sein Muwana",
  description:
    "Professional certifications earned by Sein Muwana across data science, graph technologies, AI critical thinking, and software development.",
}

export default function CertificationsPage() {
  return (
    <div className="bg-background">
      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="text-4xl font-bold text-foreground sm:text-5xl"
            >
              Certifications
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Verified learning milestones that strengthen my software engineering, data, AI, and innovation capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((certification) => (
              <article
                key={certification.slug}
                className="group relative h-full overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50"
              >

                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-foreground">
                    <Award className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary">{certification.level}</Badge>
                </div>

                <h2
                  className="text-lg font-bold text-card-foreground group-hover:text-foreground transition-colors"
                >
                  {certification.title}
                </h2>
                <p className="text-sm font-medium text-muted-foreground">{certification.issuer}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Issued {new Date(certification.issueDate).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {certification.shortDescription}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {certification.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
                  <Button asChild size="sm">
                    <Link href={`/certifications/${certification.slug}`}>
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="bg-transparent">
                    <Link href={`/certifications/${certification.slug}/view`}>
                      <Eye className="h-4 w-4" />
                      View
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="bg-transparent">
                    <Link href={`/certifications/${certification.slug}/view?download=1`}>
                      <Download className="h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
