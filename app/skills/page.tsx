import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { ClosingBand } from "@/components/layout/closing-band"
import { VelocityMarquee } from "@/components/motion/velocity-marquee"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { DrawLine } from "@/components/motion/draw-line"
import { cv } from "@/lib/cv"

export const metadata: Metadata = {
  title: "Skills | Sein Muwana",
  description: "SQL, Power BI, Python, automation and machine-learning tools Sein Muwana uses.",
}

const strip = ["SQL", "Power BI", "Python", "Power Automate", "Microsoft Fabric", "SAP", "PyTorch", "React"]

export default function SkillsPage() {
  return (
    <>
      <PageHeader title="Skills" description="What I use day to day, taken from my CV and the projects on this site." />

      <div className="border-b border-border bg-background py-5">
        <VelocityMarquee items={strip} speed={-2} itemClassName="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl" />
      </div>

      <Section>
        <div className="space-y-2">
          {cv.skills.map((group) => (
            <div key={group.label} className="relative grid gap-4 py-8 md:grid-cols-[220px_1fr] md:gap-12">
              <DrawLine className="top-0 bottom-auto" />
              <Reveal>
                <h2 className="text-2xl text-foreground">{group.label}</h2>
              </Reveal>
              <Stagger className="flex flex-wrap gap-2.5" gap={0.045}>
                {group.items.map((item) => (
                  <StaggerItem
                    key={item}
                    as="div"
                    className="rounded-full border border-border bg-background px-4 py-2 text-base text-foreground transition-[background-color,transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-lavender-mist"
                  >
                    {item}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </Section>

      <ClosingBand
        title="See them applied"
        description="The projects page shows where each of these was used."
        primary={{ label: "View projects", href: "/projects" }}
        secondary={{ label: "Experience", href: "/experience" }}
      />
    </>
  )
}
