import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { ClosingBand } from "@/components/layout/closing-band"
import { ScrollTimeline, TimelineDot } from "@/components/motion/scroll-timeline"
import { MetricBar } from "@/components/motion/metric-bar"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"

export const metadata: Metadata = {
  title: "Education | Sein Muwana",
  description:
    "BSc Computer Science Honours (graduated 2026) from the University of Namibia, with an honours thesis on crop disease detection.",
}

const training = [
  { title: "Elements of Data Science", issuer: "EPFL Extension School", note: "Verified certificate of attendance, April 2026." },
  { title: "Neo4j Graph Data Science", issuer: "Neo4j GraphAcademy", note: "Certificate issued April 2024." },
  { title: "Neo4j Fundamentals", issuer: "Neo4j GraphAcademy", note: "Certificate issued April 2024." },
  { title: "Power Automate and UiPath training", issuer: "Microsoft, UiPath", note: "Process automation and RPA development." },
]

export default function EducationPage() {
  return (
    <>
      <PageHeader
        title="Education"
        description="A computer science degree at the University of Namibia, with an honours thesis in applied AI."
      />

      <Section>
        <ScrollTimeline railClassName="left-[224px]">
          <ol>
            <li className="relative grid gap-4 py-10 md:grid-cols-[200px_1fr] md:gap-12">
              <TimelineDot className="left-[224px] top-[3.4rem]" />
              <Reveal className="tabular text-sm text-muted-foreground md:sticky md:top-28 md:self-start">2021 – 2026</Reveal>
              <div className="md:pl-10">
                <Reveal>
                  <h2 className="text-3xl text-foreground">BSc Computer Science (Honours)</h2>
                  <p className="mt-1 text-base text-muted-foreground">University of Namibia · Upper Second Class · Graduated 2026</p>
                </Reveal>

                <Reveal className="mt-6 max-w-2xl rounded-lg bg-lavender-mist p-6 sm:p-8">
                  <h3 className="text-xl text-foreground">Thesis: AgriSense</h3>
                  <p className="mt-2 text-base leading-[1.6] text-graphite">
                    A real-time crop monitoring and disease detection system. Supervised by Dr. Nalina Suresh, submitted
                    October 2025. An enhanced YOLOv8 with CBAM attention and a BiRepGFPN feature pyramid, detecting 9
                    tomato leaf classes.
                  </p>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <MetricBar label="mAP50-95" value={93.8} />
                    <MetricBar label="Accuracy" value={92.2} delay={0.1} />
                    <MetricBar label="Precision" value={92.4} delay={0.2} />
                    <MetricBar label="Recall" value={94.1} delay={0.3} />
                  </div>
                  <p className="mt-6 text-sm text-graphite">
                    Modules include Artificial Intelligence, Data Warehousing and Data Mining, Emerging Technologies (88%)
                    and Research Methodology.
                  </p>
                  <Link
                    href="/projects/agrisense"
                    data-cursor="Open"
                    className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-foreground underline underline-offset-4"
                  >
                    Project details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Reveal>
              </div>
            </li>
            <li className="relative grid gap-4 border-t border-border py-10 md:grid-cols-[200px_1fr] md:gap-12">
              <TimelineDot className="left-[224px] top-[3.4rem]" />
              <Reveal className="tabular text-sm text-muted-foreground md:sticky md:top-28 md:self-start">2019 – 2020</Reveal>
              <Reveal className="md:pl-10">
                <h2 className="text-3xl text-foreground">NSSCH Certificate, Grade 12</h2>
                <p className="mt-1 text-base text-muted-foreground">Caprivi Senior Secondary School</p>
                <p className="mt-5 text-base text-graphite">37 points.</p>
              </Reveal>
            </li>
          </ol>
        </ScrollTimeline>
      </Section>

      <Section tone="fog">
        <h2 className="text-4xl text-foreground sm:text-[2.5rem]">Training</h2>
        <Stagger className="mt-8 border-t border-border" gap={0.07}>
          {training.map((item) => (
            <StaggerItem key={item.title} className="grid gap-1 border-b border-border py-5 transition-[padding] duration-300 hover:pl-3 md:grid-cols-[1fr_220px_1.2fr] md:gap-8">
              <p className="text-lg font-semibold text-foreground">{item.title}</p>
              <p className="text-base text-muted-foreground">{item.issuer}</p>
              <p className="text-base text-graphite">{item.note}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-6 text-base text-graphite">
          More credentials are on the{" "}
          <Link href="/certifications" className="text-foreground underline underline-offset-4">
            certifications page
          </Link>
          .
        </p>
      </Section>

      <ClosingBand
        title="See the thesis in practice"
        primary={{ label: "View AgriSense", href: "/projects/agrisense" }}
        secondary={{ label: "View CV", href: "/cv" }}
      />
    </>
  )
}
