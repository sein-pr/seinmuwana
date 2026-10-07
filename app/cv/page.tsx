import type { Metadata } from "next"
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react"
import { CvDownloadButton } from "@/components/cv/cv-download-button"

export const metadata: Metadata = {
  title: "CV | Sein Muwana",
  description: "Curriculum vitae of Sein Muwana: software development intern at Agribank, BSc Computer Science Honours graduate.",
}

const contact = [
  { icon: Mail, label: "seinprince2@gmail.com", href: "mailto:seinprince2@gmail.com" },
  { icon: Phone, label: "+264 81 478 1478", href: "tel:+264814781478" },
  { icon: MapPin, label: "Windhoek, Namibia", href: null },
  { icon: Globe, label: "seinmuwana.netlify.app", href: "https://seinmuwana.netlify.app" },
  { icon: Linkedin, label: "linkedin.com/in/sein-muwana", href: "https://www.linkedin.com/in/sein-muwana-2ab319299/" },
]

const experience = [
  {
    title: "Software Development Intern",
    org: "Agricultural Bank of Namibia",
    period: "Feb – Jul 2025",
    points: [
      "Developed a user access management system that digitised manual workflows and improved efficiency by up to 80%.",
      "Built automations in Power Automate and UiPath that reduced manual processes by about 75%.",
      "Contributed to backend design for API-driven systems.",
      "Gathered and documented requirements for a website revamp and coordinated business and technical teams.",
      "Ran system tests and supported user acceptance testing.",
    ],
  },
  {
    title: "Student Registration Assistant",
    org: "University of Namibia",
    period: "Jan – Feb 2025",
    points: [
      "Managed and updated student records in institutional systems.",
      "Gave technical support during high-demand registration periods.",
      "Worked with ICT teams to keep the system accurate and performing.",
    ],
  },
]

const skills = [
  ["Backend", "Python, Flask, Flask-RESTX, Django, Django REST Framework, C# (.NET), Java, PHP"],
  ["Frontend", "React, Next.js, JavaScript, HTML, CSS"],
  ["Mobile", "React Native, Flutter"],
  ["Data", "PostgreSQL (local and hosted, e.g. Supabase), SQL Server, SQL, database design"],
  ["Tools", "Git, GitHub, CI/CD, Power Automate, UiPath, n8n, Freshworks"],
]

const references = [
  { name: "Mr Romeo Tawana", role: "Data Analyst, Agribank", email: "rtawana@agribank.com.na" },
  { name: "Dr. Nalina Suresh", role: "Lecturer, University of Namibia", email: "nsuresh@unam.na" },
  { name: "Ms Rachel Nawa", role: "Business System Analyst, Agribank", email: "rnawa@agribank.com.na" },
]

export default function CVPage() {
  return (
    <div className="bg-background py-14 sm:py-20 print:py-0">
      <div className="mx-auto max-w-3xl px-6">
        <header className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-[2.5rem] leading-[1.05] text-foreground sm:text-6xl">Sein Muwana</h1>
            <p className="mt-2 text-xl text-muted-foreground">Computer Science graduate</p>
          </div>
          <CvDownloadButton className="print:hidden" />
        </header>

        <ul className="mt-6 grid gap-x-8 gap-y-1 text-base text-graphite sm:grid-cols-2">
          {contact.map((item) => (
            <li key={item.label} className="flex items-center gap-3">
              <item.icon className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex min-h-9 items-center underline-offset-4 hover:underline"
                >
                  {item.label}
                </a>
              ) : (
                <span className="min-h-9 leading-9">{item.label}</span>
              )}
            </li>
          ))}
        </ul>

        <section className="mt-12">
          <h2 className="text-2xl text-foreground">Profile</h2>
          <p className="mt-3 text-base leading-[1.6] text-graphite">
            Computer Science Honours graduate with hands-on experience in full-stack development, backend systems and
            process automation in a banking environment. Built tools that improved operational efficiency by up to 80%.
            Strong in the Python and JavaScript ecosystems, and now working on AI agent workflows.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl text-foreground">Experience</h2>
          <div className="mt-4 divide-y divide-border border-t border-border">
            {experience.map((job) => (
              <article key={job.title} className="py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg text-foreground">{job.title}</h3>
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

        <section className="mt-12">
          <h2 className="text-2xl text-foreground">Education</h2>
          <div className="mt-4 divide-y divide-border border-t border-border">
            <article className="py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg text-foreground">BSc Computer Science (Honours)</h3>
                <p className="tabular text-sm text-muted-foreground">2021 – 2026</p>
              </div>
              <p className="text-base text-muted-foreground">University of Namibia · Graduated 2026</p>
              <p className="mt-2 text-base text-graphite">
                Thesis: AgriSense, a real-time crop monitoring and disease detection system.
              </p>
            </article>
            <article className="py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg text-foreground">NSSCH Certificate, Grade 12</h3>
                <p className="tabular text-sm text-muted-foreground">2019 – 2020</p>
              </div>
              <p className="text-base text-muted-foreground">Caprivi Senior Secondary School · 37 points</p>
            </article>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl text-foreground">Skills</h2>
          <dl className="mt-4 divide-y divide-border border-t border-border">
            {skills.map(([label, value]) => (
              <div key={label} className="grid gap-1 py-3.5 sm:grid-cols-[140px_1fr] sm:gap-6">
                <dt className="text-base font-semibold text-foreground">{label}</dt>
                <dd className="text-base text-graphite">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12 grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl text-foreground">Languages</h2>
            <p className="mt-3 text-base leading-[1.7] text-graphite">
              English (fluent)
              <br />
              Afrikaans (basic)
              <br />
              Oshikwanyama (basic)
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-foreground">References</h2>
            <ul className="mt-3 space-y-4 text-base leading-[1.5] text-graphite">
              {references.map((ref) => (
                <li key={ref.name}>
                  <p className="font-semibold text-foreground">{ref.name}</p>
                  <p>{ref.role}</p>
                  <a href={`mailto:${ref.email}`} className="inline-flex min-h-9 items-center break-all underline underline-offset-4">
                    {ref.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
