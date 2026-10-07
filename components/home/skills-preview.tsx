"use client"

import { AnimatedSection } from "@/components/ui/animated-section"

const skills = [
  {
    title: "Build",
    description: "Full-stack web applications with a focus on maintainable code and clear data models.",
    technologies: ["JavaScript", "PHP", "HTML/CSS", "C#", "Java"],
  },
  {
    title: "Learn",
    description: "AI and machine learning applied to real problems, from crop monitoring to data analysis.",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
  },
  {
    title: "Automate",
    description: "RPA bots and custom tooling that take repetitive work off people's desks.",
    technologies: ["Power Automate", "UiPath", "Freshworks"],
  },
  {
    title: "Deliver",
    description: "Requirements gathering, agile planning and coordination across teams.",
    technologies: ["Agile", "Requirements", "Team leadership"],
  },
]

export function SkillsPreview() {
  return (
    <section className="bg-midnight py-20 text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection animation="fade-up" className="max-w-2xl">
          <h2 className="text-4xl text-white sm:text-[2.5rem]">Four things I do well</h2>
          <p className="mt-3 text-lg leading-[1.55] text-white/70">
            Technical depth plus the organisational habits that get software shipped.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.title} animation="fade-up" delay={index * 80}>
              <h3 className="font-label text-base font-semibold text-white">{skill.title}</h3>
              <p className="mt-3 text-base leading-[1.55] text-white/70">{skill.description}</p>
              <p className="mt-4 text-sm leading-[1.7] text-white/50">{skill.technologies.join(" · ")}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
