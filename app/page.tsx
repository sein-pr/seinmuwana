import { HeroSection } from "@/components/home/hero-section"
import { ProblemSection } from "@/components/home/problem-section"
import { HowSection } from "@/components/home/how-section"
import { ResultsSection } from "@/components/home/results-section"
import { ProjectsPreview } from "@/components/home/projects-preview"
import { CTASection } from "@/components/home/cta-section"
import { VelocityMarquee } from "@/components/motion/velocity-marquee"

const strip = ["Data", "ETL", "SQL", "Power BI", "RPA", "Python", "Computer vision", "Microsoft Fabric"]

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="border-y border-border bg-background py-6 text-foreground">
        <VelocityMarquee items={strip} speed={-2.2} itemClassName="text-4xl font-extrabold tracking-tight sm:text-6xl" />
      </div>
      <ProblemSection />
      <HowSection />
      <ResultsSection />
      <ProjectsPreview />
      <CTASection />
    </>
  )
}
