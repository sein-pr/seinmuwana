import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, GraduationCap, BookOpen, Lightbulb, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Education | Sein Muwana",
  description: "Academic background and research of Sein Muwana - Computer Science Honours student at the University of Namibia.",
}

const education = [
  {
    degree: "Bachelor of Computer Science Honours",
    institution: "University of Namibia",
    period: "Graduating March 2026",
    status: "In Progress",
    description: "Pursuing advanced studies in computer science with a focus on artificial intelligence and agricultural technology applications.",
    research: {
      title: "AgriSense: A crop and disease monitoring system using affordable technology",
      description: "My honours research project focuses on improving the agricultural sector in Namibia by introducing accessible and affordable AgriTech solutions. The system uses affordable sensors and AI to help farmers monitor crop health and detect diseases early.",
      objectives: [
        "Develop an affordable crop monitoring system using IoT sensors",
        "Implement machine learning algorithms for disease detection",
        "Create a user-friendly interface for farmers with varying technical backgrounds",
        "Ensure the solution is accessible and sustainable in rural areas",
      ],
    },
    highlights: [
      "Focus on AI and Machine Learning applications",
      "Research in Agricultural Technology (AgriTech)",
      "Strong foundation in software engineering principles",
      "Practical experience through internships",
    ],
  },
  {
    degree: "Grade 12 NSSCH Certificate",
    institution: "Caprivi Senior Secondary School",
    period: "Completed March 2020",
    status: "Completed",
    description: "Successfully completed secondary education with strong academic performance, laying the foundation for further studies in computer science.",
    highlights: [
      "Graduated with 37 points",
      "Strong performance in Mathematics and Sciences",
      "Developed early interest in technology and computing",
    ],
  },
]

const certifications = [
  {
    title: "Power Automate Training",
    issuer: "Microsoft",
    description: "Practical training in process automation using Microsoft Power Automate.",
  },
  {
    title: "UIPath RPA Developer",
    issuer: "UIPath",
    description: "Training in Robotic Process Automation development.",
  },
]

export default function EducationPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 
              className="text-4xl font-bold text-foreground sm:text-5xl"
            >
              Education & Research
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              My academic journey has equipped me with strong theoretical foundations and 
              practical skills in computer science, with a special focus on AI and AgriTech research.
            </p>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6 sm:p-8">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 
                        className="text-xl font-bold text-card-foreground"
                      >
                        {edu.degree}
                      </h2>
                      <p className="text-muted-foreground font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                  </div>
                  <Badge variant={edu.status === "In Progress" ? "default" : "secondary"}>
                    {edu.status}
                  </Badge>
                </div>

                {/* Description */}
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>

                {/* Research Section (if applicable) */}
                {edu.research && (
                  <div className="mt-8 rounded-lg bg-secondary/50 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      <h3 
                        className="font-semibold text-foreground"
                      >
                        Research Project
                      </h3>
                    </div>
                    <h4 className="font-medium text-foreground">{edu.research.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {edu.research.description}
                    </p>
                    
                    <div className="mt-4">
                      <h5 className="text-sm font-medium text-foreground mb-2">Research Objectives:</h5>
                      <ul className="space-y-1">
                        {edu.research.objectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-muted-foreground">•</span>
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild variant="link" className="mt-4 h-auto p-0">
                      <Link href="/projects">
                        Learn more about AgriSense
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}

                {/* Highlights */}
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-card-foreground">Highlights</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl font-bold text-foreground sm:text-4xl"
            >
              Training & Certifications
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Additional training and certifications that complement my formal education.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <div key={index} className="rounded-lg border border-border bg-background p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{cert.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground font-medium mb-2">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 
              className="text-3xl font-bold text-foreground sm:text-4xl"
            >
              Explore My Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how I apply my academic knowledge to real-world projects and solutions.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
                <Link href="/cv">Download CV</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
