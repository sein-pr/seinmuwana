import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building2, GraduationCap, Calendar, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Experience | Sein Muwana",
  description: "Professional experience and career journey of Sein Muwana - Software Developer Intern at Agribank and Student Assistant at UNAM.",
}

const experiences = [
  {
    icon: Building2,
    title: "Software Developer Intern",
    company: "Agricultural Bank of Namibia",
    location: "Windhoek, Namibia",
    period: "February 2025 - July 2025",
    type: "Internship",
    description: "Contributed to digital transformation initiatives by developing applications, building automation solutions, and managing software projects.",
    responsibilities: [
      "Developed a user access application digitizing manual data workflows, improving operational efficiency",
      "Built automation bots using Power Automate and UIPath, reducing manual workload in internal processes",
      "Gathered and detailed software requirements for a website revamp project",
      "Served as project manager for the website revamp, coordinating cross-functional teams",
      "Implemented IT management tools like FreshWorks to automate user access requests and approvals",
      "Provided daily ad hoc support to business and ICT teams",
    ],
    skills: ["C#", "Power Automate", "UIPath", "FreshWorks", "Project Management", "Requirements Gathering"],
  },
  {
    icon: GraduationCap,
    title: "Student Assistant",
    company: "University of Namibia",
    location: "Windhoek, Namibia",
    period: "January 2025 - February 2025",
    type: "Part-time",
    description: "Supported student registration processes and collaborated with ICT teams to ensure smooth data integration.",
    responsibilities: [
      "Managed registration of senior and new students, ensuring accurate data entry",
      "Collaborated closely with the ICT team to integrate student data into the system",
      "Led the ICT registration team, overseeing process improvements and team coordination",
    ],
    skills: ["Data Entry", "Team Leadership", "Process Improvement", "ICT Collaboration"],
  },
]

export default function ExperiencePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 
              className="text-4xl font-bold text-foreground sm:text-5xl"
            >
              Professional Experience
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              My professional journey has been focused on software development, process automation, 
              and leveraging technology to create meaningful impact in organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 h-full w-px bg-border hidden sm:block" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 -translate-x-1/2 hidden sm:flex h-4 w-4 items-center justify-center rounded-full bg-primary" />
                  
                  <div className="sm:pl-20">
                    <div className="rounded-lg border border-border bg-card p-6 sm:p-8 transition-all hover:border-primary/50">
                      {/* Header */}
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                            <exp.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h2 
                              className="text-xl font-bold text-card-foreground"
                            >
                              {exp.title}
                            </h2>
                            <p className="text-muted-foreground font-medium">{exp.company}</p>
                            <p className="text-sm text-muted-foreground">{exp.location}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-start gap-2 sm:items-end">
                          <Badge variant="secondary">{exp.type}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mt-6">
                        <h3 className="font-semibold text-card-foreground mb-3">Key Responsibilities</h3>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className="mt-6">
                        <h3 className="font-semibold text-card-foreground mb-3">Skills Applied</h3>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 
              className="text-3xl font-bold text-foreground sm:text-4xl"
            >
              View My Full CV
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              For a complete overview of my qualifications, skills, and references, 
              download my curriculum vitae.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/cv">
                  View Full CV
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
                <Link href="/projects">View My Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
