import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  Leaf, 
  Bot, 
  Globe, 
  Database, 
  ExternalLink,
  Github,
  CheckCircle2
} from "lucide-react"

export const metadata: Metadata = {
  title: "Projects | Sein Muwana",
  description: "Explore Sein Muwana's portfolio of software development projects including AgriSense, automation solutions, and full-stack applications.",
}

const projects = [
  {
    slug: "agrisense",
    icon: Leaf,
    title: "AgriSense",
    subtitle: "Honours Research Project",
    description: "A comprehensive crop and disease monitoring system designed to improve the agricultural sector in Namibia through affordable and accessible technology.",
    longDescription: "AgriSense is my honours research project that combines IoT sensors, machine learning, and mobile technology to help farmers monitor crop health and detect diseases early. The system is designed to be affordable and accessible, specifically targeting smallholder farmers in rural areas.",
    status: "In Development",
    featured: true,
    tags: ["Python", "Machine Learning", "IoT", "AgriTech", "Mobile"],
    objectives: [
      "Real-time crop health monitoring using affordable sensors",
      "AI-powered disease detection and early warning system",
      "Mobile-friendly interface for farmers",
      "Data analytics for crop yield optimization",
    ],
    impact: "Aimed at improving food security and agricultural productivity in Namibia by providing farmers with accessible technology solutions.",
    liveUrl: null,
    githubUrl: "https://github.com/seinmuwana",
  },
  {
    slug: "rpa-automation-suite",
    icon: Bot,
    title: "RPA Automation Suite",
    subtitle: "Agribank Project",
    description: "A collection of automation bots built to streamline internal processes and reduce manual workload at the Agricultural Bank of Namibia.",
    longDescription: "During my internship at Agribank, I developed multiple RPA (Robotic Process Automation) solutions using Power Automate and UIPath to automate repetitive tasks and improve operational efficiency.",
    status: "Completed",
    featured: false,
    tags: ["Power Automate", "UIPath", "RPA", "Process Automation"],
    objectives: [
      "Automated user access request workflows",
      "Streamlined document processing tasks",
      "Integrated with existing IT management tools",
      "Reduced manual intervention in routine processes",
    ],
    impact: "Significantly reduced manual workload and improved process efficiency across multiple departments.",
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "user-access-management",
    icon: Globe,
    title: "User Access Management System",
    subtitle: "Agribank Project",
    description: "A custom application developed to digitize manual data workflows and improve operational efficiency in user access management.",
    longDescription: "Designed and developed a comprehensive user access management application that replaced paper-based workflows with a digital solution, enabling faster processing and better tracking of access requests.",
    status: "Completed",
    featured: false,
    tags: ["C#", "Full-Stack", "Database", "Enterprise"],
    objectives: [
      "Digital transformation of manual processes",
      "Centralized user access request tracking",
      "Automated approval workflows",
      "Audit trail and compliance reporting",
    ],
    impact: "Transformed manual data workflows into efficient digital processes, improving operational speed and accuracy.",
    liveUrl: null,
    githubUrl: null,
  },
  {
    slug: "website-revamp",
    icon: Database,
    title: "Website Revamp Project",
    subtitle: "Agribank Project - Project Manager",
    description: "Led the requirements gathering and project management for a comprehensive website revamp initiative.",
    longDescription: "Served as project manager for the Agricultural Bank of Namibia website revamp project, coordinating between stakeholders, developers, and designers to deliver an improved digital presence.",
    status: "Completed",
    featured: false,
    tags: ["Project Management", "Requirements Gathering", "Stakeholder Management"],
    objectives: [
      "Gathered and documented software requirements",
      "Coordinated cross-functional teams",
      "Managed project timeline and deliverables",
      "Ensured alignment with business objectives",
    ],
    impact: "Successfully delivered a modernized website that better serves the bank's customers and stakeholders.",
    liveUrl: "https://www.agribank.com.na",
    githubUrl: null,
  },
]

export default function ProjectsPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">Portfolio</Badge>
            <h1 
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Projects & Portfolio
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A showcase of academic research, professional projects, and personal initiatives 
              that demonstrate my skills in software development, AI, and automation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 
            className="text-2xl font-bold text-foreground mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Featured Project
          </h2>
          
          {projects.filter(p => p.featured).map((project) => (
            <div 
              key={project.title}
              className="rounded-2xl border-2 border-primary/20 bg-card p-6 sm:p-10"
            >
              <div className="flex flex-col gap-8 lg:flex-row">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <project.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    </div>
                  </div>
                  
                  <h3 
                    className="text-2xl font-bold text-card-foreground"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium">{project.subtitle}</p>
                  
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild>
                      <Link href={`/projects/${project.slug}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    {project.githubUrl && (
                      <Button asChild variant="outline" className="bg-transparent">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="rounded-xl bg-secondary/50 p-6">
                    <h4 className="font-semibold text-foreground mb-4">Key Objectives</h4>
                    <ul className="space-y-3">
                      {project.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-2">Impact</h4>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <Badge variant={project.status === "Completed" ? "secondary" : "default"}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 
            className="text-2xl font-bold text-foreground mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Other Projects
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => !p.featured).map((project) => (
              <Link 
                key={project.title}
                href={`/projects/${project.slug}`}
                className="group"
              >
                <div className="h-full rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <project.icon className="h-6 w-6" />
                    </div>
                    <Badge variant={project.status === "Completed" ? "secondary" : "default"}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 
                    className="text-lg font-bold text-foreground group-hover:text-primary transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                  
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Link indicators */}
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm font-medium text-primary group-hover:underline flex items-center gap-1">
                      View project
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    {project.liveUrl && (
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <ExternalLink className="h-3 w-3" />
                        Live
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
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
              Interested in Working Together?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I&apos;m always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
                <Link href="/cv">View My CV</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
