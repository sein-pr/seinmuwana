import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { ClosingBand } from "@/components/layout/closing-band"

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
        <ol className="border-t border-border">
          <li className="grid gap-4 border-b border-border py-10 md:grid-cols-[200px_1fr] md:gap-12">
            <p className="tabular text-sm text-muted-foreground md:pt-2">2021 – 2026</p>
            <div>
              <h2 className="text-3xl text-foreground">BSc Computer Science (Honours)</h2>
              <p className="mt-1 text-base text-muted-foreground">University of Namibia · Upper Second Class · Graduated 2026</p>
              <div className="mt-6 max-w-2xl rounded-lg bg-lavender-mist p-6">
                <h3 className="text-lg text-foreground">Thesis: AgriSense</h3>
                <p className="mt-2 text-base leading-[1.6] text-graphite">
                  A real-time crop monitoring and disease detection system. Supervised by Dr. Nalina Suresh, submitted
                  October 2025. Relevant modules: Artificial Intelligence, Data Warehousing and Data Mining, Emerging
                  Technologies (88%) and Research Methodology.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-[1.55] text-graphite marker:text-smoke">
                  <li>Enhanced YOLOv8 with CBAM attention and a BiRepGFPN feature pyramid.</li>
                  <li>Detects 9 tomato leaf classes. mAP50-95 93.8%, accuracy 92.2%, precision 92.4%, recall 94.1%.</li>
                  <li>Combines detections with soil and weather API data for farmer-facing advice.</li>
                  <li>IoT sensor support is planned as future work.</li>
                </ul>
                <Link
                  href="/projects/agrisense"
                  className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-base font-medium text-foreground underline underline-offset-4"
                >
                  Project details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </li>
          <li className="grid gap-4 border-b border-border py-10 md:grid-cols-[200px_1fr] md:gap-12">
            <p className="tabular text-sm text-muted-foreground md:pt-2">2019 – 2020</p>
            <div>
              <h2 className="text-3xl text-foreground">NSSCH Certificate, Grade 12</h2>
              <p className="mt-1 text-base text-muted-foreground">Caprivi Senior Secondary School</p>
              <p className="mt-5 text-base text-graphite">37 points.</p>
            </div>
          </li>
        </ol>
      </Section>

      <Section tone="fog">
        <h2 className="text-4xl text-foreground sm:text-[2.5rem]">Training</h2>
        <ul className="mt-8 border-t border-border bg-fog">
          {training.map((item) => (
            <li key={item.title} className="grid gap-1 border-b border-border py-5 md:grid-cols-[1fr_200px_1.2fr] md:gap-8">
              <p className="text-lg font-semibold text-foreground">{item.title}</p>
              <p className="text-base text-muted-foreground">{item.issuer}</p>
              <p className="text-base text-graphite">{item.note}</p>
            </li>
          ))}
        </ul>
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
