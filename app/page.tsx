import { HeroSection } from "@/components/home/hero-section"
import { ProblemSection } from "@/components/home/problem-section"
import { HowSection } from "@/components/home/how-section"
import { ProjectsPreview } from "@/components/home/projects-preview"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowSection />
      <ProjectsPreview />
      <CTASection />
    </>
  )
}
