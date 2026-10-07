import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProfileSlider } from "@/components/profile-slider"
import { PageHeader } from "@/components/layout/page-header"
import { Section, SectionHeading } from "@/components/layout/section"
import { ClosingBand } from "@/components/layout/closing-band"

export const metadata: Metadata = {
  title: "About | Sein Muwana",
  description:
    "Sein Muwana is a computer science graduate in Windhoek who builds full-stack software, RPA automations and computer-vision tools for agriculture.",
}

const practice = [
  {
    title: "Requirements first",
    body: "At Agribank I gathered and documented the requirements for the website revamp before any build started, then coordinated business and technical teams through delivery.",
  },
  {
    title: "Test before handover",
    body: "I run system tests and support user acceptance testing, so the people who rely on a tool find problems before launch, not after.",
  },
  {
    title: "Remove the manual step",
    body: "My user access system and RPA bots replaced paper and spreadsheet steps. The access system improved efficiency by up to 80%, and the bots cut manual processes by about 75%.",
  },
]

const interests = [
  "Machine learning and computer vision",
  "Process automation and RPA",
  "Data analytics and reporting",
  "Full-stack web development",
  "IoT and smart systems",
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Software engineer in Windhoek."
        description="I build web systems, automations and machine-learning tools, with a focus on work that replaces manual process."
      >
        <Button asChild size="lg">
          <Link href="/contact">
            Get in touch
            <ArrowRight />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
          <Link href="/cv">View CV</Link>
        </Button>
      </PageHeader>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div className="space-y-5 text-lg leading-[1.6] text-graphite">
            <p>
              I&apos;m a Computer Science Honours graduate from the University of Namibia. I work mostly in Python, C#,
              Java and JavaScript, with Flask, Django, React and Next.js on the web side, and PostgreSQL and SQL Server for data.
            </p>
            <p>
              In 2025 I interned as a software developer at the Agricultural Bank of Namibia. I built a user access
              management system, automated internal processes with Power Automate and UiPath, and managed the
              requirements for a website revamp.
            </p>
            <p>
              My honours thesis, AgriSense, applies computer vision to tomato disease detection for smallholder
              farmers. I&apos;m now looking for a role where I can keep building systems that people use daily.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[420px]">
            <ProfileSlider />
          </div>
        </div>
      </Section>

      <Section tone="fog">
        <SectionHeading title="How I work" description="Habits I picked up delivering for a bank and a university." />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {practice.map((item) => (
            <div key={item.title}>
              <h3 className="text-xl text-foreground">{item.title}</h3>
              <p className="mt-3 text-base leading-[1.55] text-graphite">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-4xl text-foreground sm:text-[2.5rem]">Where I&apos;m heading</h2>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {interests.map((interest) => (
                <li key={interest} className="py-3.5 text-lg text-foreground">
                  {interest}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-lavender-mist p-8">
            <h3 className="text-2xl text-foreground">Research: AgriSense</h3>
            <p className="mt-3 text-base leading-[1.6] text-graphite">
              A real-time crop monitoring and disease detection system for smallholder farmers in Namibia. It uses an
              enhanced YOLOv8 model with CBAM attention and a BiRepGFPN feature pyramid, plus soil and weather data.
            </p>
            <Link
              href="/projects/agrisense"
              className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-foreground underline underline-offset-4"
            >
              Read about the project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <ClosingBand
        title="Want to work together?"
        description="I'm open to full-time roles, freelance projects and collaborations."
        primary={{ label: "Send a message", href: "/contact" }}
        secondary={{ label: "See projects", href: "/projects" }}
      />
    </>
  )
}
