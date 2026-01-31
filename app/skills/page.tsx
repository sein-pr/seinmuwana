import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Code2, 
  Brain, 
  Cog, 
  Users,
  Database,
  Wrench,
  CheckCircle2
} from "lucide-react"

export const metadata: Metadata = {
  title: "Skills | Sein Muwana",
  description: "Technical and soft skills of Sein Muwana - Programming languages, frameworks, tools, and professional competencies.",
}

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    description: "Core programming languages I use for software development.",
    skills: [
      { name: "C#", level: "Advanced", description: "Desktop and web applications" },
      { name: "Java", level: "Advanced", description: "Enterprise applications" },
      { name: "Python", level: "Advanced", description: "AI/ML and automation" },
      { name: "JavaScript", level: "Intermediate", description: "Web development" },
      { name: "PHP", level: "Intermediate", description: "Backend development" },
      { name: "HTML/CSS", level: "Advanced", description: "Web markup and styling" },
      { name: "Dart/Flutter", level: "Intermediate", description: "Mobile development" },
    ],
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "AI and machine learning capabilities.",
    skills: [
      { name: "Machine Learning", level: "Intermediate", description: "Model development and training" },
      { name: "Data Analysis", level: "Intermediate", description: "Data processing and insights" },
      { name: "Computer Vision", level: "Beginner", description: "Image processing for AgriSense" },
      { name: "Natural Language Processing", level: "Beginner", description: "Text analysis" },
    ],
  },
  {
    icon: Cog,
    title: "Automation & RPA",
    description: "Process automation tools and platforms.",
    skills: [
      { name: "Power Automate", level: "Advanced", description: "Microsoft workflow automation" },
      { name: "UIPath", level: "Intermediate", description: "Robotic process automation" },
      { name: "FreshWorks", level: "Intermediate", description: "IT service management" },
    ],
  },
  {
    icon: Database,
    title: "Development Tools",
    description: "Frameworks, databases, and development environments.",
    skills: [
      { name: "Git/GitHub", level: "Intermediate", description: "Version control" },
      { name: "SQL Databases", level: "Intermediate", description: "MySQL, PostgreSQL" },
      { name: "REST APIs", level: "Intermediate", description: "API design and consumption" },
      { name: "Visual Studio", level: "Advanced", description: "IDE for .NET development" },
    ],
  },
  {
    icon: Users,
    title: "Soft Skills",
    description: "Professional and interpersonal competencies.",
    skills: [
      { name: "Project Management", level: "Intermediate", description: "Leading cross-functional teams" },
      { name: "Problem Solving", level: "Advanced", description: "Analytical thinking" },
      { name: "Team Collaboration", level: "Advanced", description: "Working in diverse teams" },
      { name: "Communication", level: "Advanced", description: "Technical and non-technical audiences" },
      { name: "Leadership", level: "Intermediate", description: "Team coordination and mentoring" },
    ],
  },
  {
    icon: Wrench,
    title: "Quality Assurance",
    description: "Testing and quality control methodologies.",
    skills: [
      { name: "Software Testing", level: "Intermediate", description: "Manual and automated testing" },
      { name: "Requirements Analysis", level: "Advanced", description: "Gathering and documenting requirements" },
      { name: "Code Review", level: "Intermediate", description: "Ensuring code quality" },
    ],
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-primary text-primary-foreground"
    case "Intermediate":
      return "bg-accent text-accent-foreground"
    case "Beginner":
      return "bg-secondary text-secondary-foreground"
    default:
      return "bg-secondary text-secondary-foreground"
  }
}

export default function SkillsPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">Capabilities</Badge>
            <h1 
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Skills & Expertise
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A comprehensive overview of my technical skills, tools, and professional 
              competencies developed through education and practical experience.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div 
                key={category.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 
                      className="text-lg font-bold text-card-foreground"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {category.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex items-center justify-between rounded-lg bg-secondary/30 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium text-foreground text-sm">{skill.name}</p>
                          <p className="text-xs text-muted-foreground">{skill.description}</p>
                        </div>
                      </div>
                      <Badge className={`text-xs ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="bg-card py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-sm text-muted-foreground">Proficiency Levels:</span>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-primary text-primary-foreground text-xs">Advanced</Badge>
                <span className="text-xs text-muted-foreground">Extensive experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-accent text-accent-foreground text-xs">Intermediate</Badge>
                <span className="text-xs text-muted-foreground">Solid understanding</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-secondary text-secondary-foreground text-xs">Beginner</Badge>
                <span className="text-xs text-muted-foreground">Learning/Growing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              See My Skills in Action
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore my projects to see how I apply these skills to solve real-world problems.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
                <Link href="/experience">View Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
