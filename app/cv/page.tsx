import type { Metadata } from "next"
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { CvDownloadButton } from "@/components/cv/cv-download-button"
import { PrintButton } from "@/components/cv/print-button"
import { cv } from "@/lib/cv"

export const metadata: Metadata = {
  title: "CV | Sein Muwana",
  description:
    "Curriculum vitae of Sein Muwana: software development intern at Agribank, BSc Computer Science Honours graduate.",
}

const contact = [
  { icon: Mail, label: cv.email, href: `mailto:${cv.email}` },
  { icon: Phone, label: cv.phone, href: cv.phoneHref },
  { icon: MapPin, label: cv.location, href: null },
  { icon: Globe, label: cv.website, href: cv.websiteHref },
  { icon: Linkedin, label: cv.linkedin, href: cv.linkedinHref },
]

export default function CVPage() {
  return (
    <>
      <PageHeader title={cv.name} description={cv.title} className="print:bg-white print:text-black">
        <CvDownloadButton className="print:hidden" />
        <div className="print:hidden pb-7">
          <PrintButton />
        </div>
      </PageHeader>

      <Section className="print:py-4">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16 print:grid-cols-[200px_1fr]">
          <aside className="space-y-10 lg:sticky lg:top-24 lg:self-start">
            <div>
              <h2 className="text-lg text-foreground">Contact</h2>
              <ul className="mt-3 space-y-1 text-base text-graphite">
                {contact.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex min-h-9 items-center break-all underline-offset-4 hover:underline"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="min-h-9 leading-9">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg text-foreground">Skills</h2>
              <dl className="mt-3 space-y-4">
                {cv.skills.map((skill) => (
                  <div key={skill.label}>
                    <dt className="text-sm font-semibold text-foreground">{skill.label}</dt>
                    <dd className="mt-0.5 text-sm leading-[1.5] text-graphite">{skill.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="text-lg text-foreground">Languages</h2>
              <ul className="mt-3 space-y-1 text-base text-graphite">
                {cv.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl text-foreground">Profile</h2>
              <p className="mt-3 max-w-2xl text-lg leading-[1.6] text-graphite">{cv.profile}</p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground">Experience</h2>
              <div className="mt-4 divide-y divide-border border-t border-border">
                {cv.experience.map((job) => (
                  <article key={job.title} className="break-inside-avoid py-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-xl text-foreground">{job.title}</h3>
                      <p className="tabular text-sm text-muted-foreground">{job.period}</p>
                    </div>
                    <p className="text-base text-muted-foreground">{job.org}</p>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-[1.55] text-graphite marker:text-smoke">
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl text-foreground">Education</h2>
              <div className="mt-4 divide-y divide-border border-t border-border">
                {cv.education.map((e) => (
                  <article key={e.title} className="break-inside-avoid py-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-xl text-foreground">{e.title}</h3>
                      <p className="tabular text-sm text-muted-foreground">{e.period}</p>
                    </div>
                    <p className="text-base text-muted-foreground">{e.org}</p>
                    <p className="mt-2 text-base text-graphite">{e.note}</p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl text-foreground">References</h2>
              <ul className="mt-4 grid gap-6 border-t border-border pt-5 sm:grid-cols-3">
                {cv.references.map((ref) => (
                  <li key={ref.name} className="text-base leading-[1.5] text-graphite">
                    <p className="font-semibold text-foreground">{ref.name}</p>
                    <p>{ref.role}</p>
                    <a href={`mailto:${ref.email}`} className="inline-flex min-h-9 items-center break-all text-sm underline underline-offset-4">
                      {ref.email}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </Section>
    </>
  )
}
