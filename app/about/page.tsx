import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProfileSlider } from "@/components/profile-slider"
import { RevealMask } from "@/components/motion/reveal-mask"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { ScrollTimeline, TimelineDot } from "@/components/motion/scroll-timeline"
import { PageHeader } from "@/components/layout/page-header"
import { Section, SectionHeading } from "@/components/layout/section"
import { ClosingBand } from "@/components/layout/closing-band"

export const metadata: Metadata = {
  title: "About | Sein Muwana",
  description:
    "Sein Muwana is a data analyst and software engineer at Agribank Namibia who builds reporting, ETL pipelines, RPA automations and computer-vision tools.",
}

const practice = [
  {
    title: "Requirements first",
    body: "I wrote the Software Requirements Specification for Agribank's website revamp with more than 12 people from ICT, Marketing and Operations, before any build started.",
  },
  {
    title: "Prove the numbers",
    body: "I reconcile reports line by line against the source, and wrote Python scripts to prove the SAP-to-Swordfish robots move data accurately.",
  },
  {
    title: "Remove the manual step",
    body: "A data-access application improved efficiency by 80%, the RPA robots cut manual effort by 75%, and a dashboard replaced a week of report preparation.",
  },
]

const milestones = [
  { when: "2021", what: "Started a BSc in Computer Science at the University of Namibia." },
  { when: "Jan 2025", what: "Student registration assistant at UNAM, keeping records accurate during peak registration." },
  { when: "Feb 2025", what: "Joined Agribank as a software development intern. Extended from three to six months, then again." },
  { when: "Oct 2025", what: "Submitted my honours thesis, AgriSense, supervised by Dr. Nalina Suresh." },
  { when: "Jan 2026", what: "Moved into the Data Analyst Graduate role at Agribank." },
  { when: "Apr 2026", what: "Completed EPFL's Elements of Data Science, a verified certificate of attendance." },
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
        title="Data analyst and software engineer in Windhoek."
        description="I turn messy data and manual process into reports and systems that people can rely on."
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
              I&apos;m a data analyst and software engineer at the Agricultural Bank of Namibia. Day to day I extract data from
              SAP, SharePoint and legacy systems, load it into SQL, check its quality and turn it into Power BI reports that
              Finance and executives present from.
            </p>
            <p>
              I joined Agribank as a software development intern in February 2025. The internship was extended twice on
              performance, and I moved into the graduate data analyst role in January 2026. Along the way I migrated millions
              of legacy transactions into SQL, built Power Automate robots and wrote the requirements for the bank&apos;s
              website revamp.
            </p>
            <p>
              I hold a BSc (Honours) in Computer Science from the University of Namibia. My thesis, AgriSense, applies computer
              vision to tomato disease detection for smallholder farmers.
            </p>
          </div>
          <RevealMask className="mx-auto w-full max-w-[420px]">
            <ProfileSlider />
          </RevealMask>
        </div>
      </Section>

      <Section tone="fog">
        <SectionHeading title="How I work" description="Habits I picked up delivering for a bank and a university." />
        <Stagger className="mt-12 grid gap-10 md:grid-cols-3" gap={0.12}>
          {practice.map((item) => (
            <StaggerItem key={item.title} className="border-t border-foreground/20 pt-5">
              <h3 className="text-xl text-foreground">{item.title}</h3>
              <p className="mt-3 text-base leading-[1.55] text-graphite">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <SectionHeading title="The path so far" description="From a registration desk to a finance dashboard." />
        <ScrollTimeline className="mt-12" railClassName="left-[7.5rem]">
          <ol>
            {milestones.map((m) => (
              <li key={m.when} className="relative grid gap-2 py-5 md:grid-cols-[7.5rem_1fr] md:gap-0">
                <TimelineDot className="left-[7.5rem] top-[1.95rem]" />
                <Reveal className="tabular text-sm text-muted-foreground md:pt-1">{m.when}</Reveal>
                <Reveal className="max-w-2xl text-lg leading-[1.5] text-foreground md:pl-10">{m.what}</Reveal>
              </li>
            ))}
          </ol>
        </ScrollTimeline>
      </Section>

      <Section tone="fog">
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
              A real-time crop monitoring and disease detection system for smallholder farmers in Namibia. An enhanced
              YOLOv8 model with CBAM attention and a BiRepGFPN feature pyramid reached 93.8% mAP50-95 and 92.2% accuracy
              across 9 tomato leaf classes.
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
