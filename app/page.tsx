import { HeroSection } from "@/components/home/hero-section"
import { SkillsPreview } from "@/components/home/skills-preview"
import { ExperiencePreview } from "@/components/home/experience-preview"
import { CertificationsPreview } from "@/components/home/certifications-preview"
import { ProjectsPreview } from "@/components/home/projects-preview"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExperiencePreview />
      <SkillsPreview />
      <ProjectsPreview />
      <CertificationsPreview />
      <CTASection />
    </>
  )
}
