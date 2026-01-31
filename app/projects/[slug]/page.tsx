import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, 
  ArrowRight, 
  Leaf, 
  Bot, 
  Globe, 
  Database, 
  ExternalLink, 
  Github,
  CheckCircle2,
  Target,
  Lightbulb,
  Zap
} from "lucide-react"

const projects: Record<string, {
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
  description: string
  longDescription: string
  challenge: string
  solution: string
  status: string
  tags: string[]
  objectives: string[]
  technologies: string[]
  impact: string
  liveUrl: string | null
  githubUrl: string | null
}> = {
  "agrisense": {
    icon: Leaf,
    title: "AgriSense",
    subtitle: "Honours Research Project",
    description: "A comprehensive crop and disease monitoring system designed to improve the agricultural sector in Namibia through affordable and accessible technology.",
    longDescription: "AgriSense is my honours research project that combines IoT sensors, machine learning, and mobile technology to help farmers monitor crop health and detect diseases early. The system is designed to be affordable and accessible, specifically targeting smallholder farmers in rural areas who often lack access to advanced agricultural technology.",
    challenge: "Namibian farmers face significant challenges including limited access to real-time crop health information, late detection of plant diseases, inefficient water and resource management, and high costs of existing agricultural technology. These issues contribute to reduced crop yields and food insecurity.",
    solution: "AgriSense addresses these challenges by providing an affordable IoT-based monitoring system combined with AI-powered disease detection. Using low-cost sensors and a mobile-friendly interface, farmers can monitor their crops in real-time and receive early warnings about potential disease outbreaks.",
    status: "In Development",
    tags: ["Python", "Machine Learning", "IoT", "AgriTech", "Mobile", "TensorFlow"],
    objectives: [
      "Real-time crop health monitoring using affordable sensors",
      "AI-powered disease detection and early warning system",
      "Mobile-friendly interface for farmers",
      "Data analytics for crop yield optimization",
      "Offline capability for areas with limited connectivity",
    ],
    technologies: ["Python", "TensorFlow", "Raspberry Pi", "Flutter", "Firebase", "OpenCV"],
    impact: "Aimed at improving food security and agricultural productivity in Namibia by providing farmers with accessible technology solutions that can help increase crop yields by up to 30% through early disease detection and optimized resource management.",
    liveUrl: null,
    githubUrl: "https://github.com/seinmuwana",
  },
  "rpa-automation-suite": {
    icon: Bot,
    title: "RPA Automation Suite",
    subtitle: "Agribank Project",
    description: "A collection of automation bots built to streamline internal processes and reduce manual workload at the Agricultural Bank of Namibia.",
    longDescription: "During my internship at Agribank, I developed multiple RPA (Robotic Process Automation) solutions using Power Automate and UIPath to automate repetitive tasks and improve operational efficiency. This suite of bots handles various workflows across different departments.",
    challenge: "The bank faced significant challenges with manual, paper-based processes that were time-consuming, error-prone, and difficult to track. Employees spent considerable time on repetitive tasks that could be automated, reducing their capacity for value-added work.",
    solution: "Implemented a comprehensive suite of RPA bots that automate user access requests, document processing, and IT service management workflows. The solution integrates with existing systems and provides audit trails for compliance.",
    status: "Completed",
    tags: ["Power Automate", "UIPath", "RPA", "Process Automation", "FreshWorks"],
    objectives: [
      "Automated user access request workflows",
      "Streamlined document processing tasks",
      "Integrated with existing IT management tools",
      "Reduced manual intervention in routine processes",
      "Created audit trails for compliance",
    ],
    technologies: ["Microsoft Power Automate", "UIPath", "FreshWorks", "SharePoint", "Microsoft 365"],
    impact: "Significantly reduced manual workload and improved process efficiency across multiple departments. Achieved approximately 60% reduction in processing time for user access requests and improved accuracy in document handling.",
    liveUrl: null,
    githubUrl: null,
  },
  "user-access-management": {
    icon: Globe,
    title: "User Access Management System",
    subtitle: "Agribank Project",
    description: "A custom application developed to digitize manual data workflows and improve operational efficiency in user access management.",
    longDescription: "Designed and developed a comprehensive user access management application that replaced paper-based workflows with a digital solution, enabling faster processing and better tracking of access requests. The system provides centralized management, automated approvals, and comprehensive audit capabilities.",
    challenge: "The existing paper-based user access management process was slow, lacked visibility, and made it difficult to track requests and maintain compliance records. IT teams spent excessive time on administrative tasks rather than strategic initiatives.",
    solution: "Built a full-stack web application with a centralized dashboard for managing user access requests, automated approval workflows, and comprehensive audit trail functionality. The system integrates with existing infrastructure and provides real-time status updates.",
    status: "Completed",
    tags: ["C#", "Full-Stack", "Database", "Enterprise", ".NET"],
    objectives: [
      "Digital transformation of manual processes",
      "Centralized user access request tracking",
      "Automated approval workflows",
      "Audit trail and compliance reporting",
      "Real-time status notifications",
    ],
    technologies: ["C#", ".NET Core", "SQL Server", "Entity Framework", "HTML/CSS", "JavaScript"],
    impact: "Transformed manual data workflows into efficient digital processes, improving operational speed and accuracy. Reduced average request processing time from 3 days to 4 hours and achieved 100% audit compliance.",
    liveUrl: null,
    githubUrl: null,
  },
  "website-revamp": {
    icon: Database,
    title: "Website Revamp Project",
    subtitle: "Agribank Project - Project Manager",
    description: "Led the requirements gathering and project management for a comprehensive website revamp initiative.",
    longDescription: "Served as project manager for the Agricultural Bank of Namibia website revamp project, coordinating between stakeholders, developers, and designers to deliver an improved digital presence. The project involved modernizing the user experience, improving accessibility, and enhancing the bank's online services.",
    challenge: "The existing website was outdated, difficult to navigate, and didn't effectively showcase the bank's services or meet modern accessibility standards. Customer feedback indicated frustration with the user experience.",
    solution: "Led a cross-functional team through a structured project management approach, gathering detailed requirements from stakeholders, creating wireframes and prototypes, and overseeing the development and testing phases to deliver a modern, user-friendly website.",
    status: "Completed",
    tags: ["Project Management", "Requirements Gathering", "Stakeholder Management", "UX"],
    objectives: [
      "Gathered and documented software requirements",
      "Coordinated cross-functional teams",
      "Managed project timeline and deliverables",
      "Ensured alignment with business objectives",
      "Improved website accessibility and user experience",
    ],
    technologies: ["Jira", "Figma", "Confluence", "Microsoft Teams", "Agile Methodology"],
    impact: "Successfully delivered a modernized website that better serves the bank's customers and stakeholders. The new website saw a 45% increase in user engagement and a 30% reduction in customer service inquiries related to navigation issues.",
    liveUrl: "https://www.agribank.com.na",
    githubUrl: null,
  },
}

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const project = projects[slug]
  
  if (!project) {
    return {
      title: "Project Not Found | Sein Muwana",
    }
  }
  
  return {
    title: `${project.title} | Projects | Sein Muwana`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params
  const project = projects[slug]
  
  if (!project) {
    notFound()
  }

  const IconComponent = project.icon
  
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="bg-card py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-8 -ml-4">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <IconComponent className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Badge variant={project.status === "Completed" ? "secondary" : "default"}>
                  {project.status}
                </Badge>
              </div>
              <h1 
                className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {project.title}
              </h1>
              <p className="mt-1 text-lg text-primary font-medium">{project.subtitle}</p>
            </div>
          </div>
          
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>
          
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Site
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant={project.liveUrl ? "outline" : "default"} className={project.liveUrl ? "bg-transparent" : ""}>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            )}
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/contact">
                Discuss This Project
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                  <Target className="h-5 w-5" />
                </div>
                <h2 
                  className="text-xl font-bold text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  The Challenge
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h2 
                  className="text-xl font-bold text-foreground"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  The Solution
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-card py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 
            className="text-2xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Key Objectives
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.objectives.map((objective, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl bg-background p-4 border border-border">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <span className="text-foreground">{objective}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Impact */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 
                className="text-2xl font-bold text-foreground mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h2 
                className="text-2xl font-bold text-foreground mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Impact
              </h2>
              <div className="rounded-xl bg-primary/5 border border-primary/20 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Project Impact</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 
            className="text-2xl font-bold text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Interested in This Project?
          </h2>
          <p className="mt-2 text-muted-foreground">
            I&apos;d love to discuss the technical details or explore collaboration opportunities.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
