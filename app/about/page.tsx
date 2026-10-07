import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, Linkedin, GraduationCap, Target, Heart } from "lucide-react"
import { ImageSlider } from "@/components/about/image-slider"

export const metadata: Metadata = {
  title: "About | Sein Muwana",
  description: "Learn more about Sein Muwana - Software Engineer, AI enthusiast, and AgriTech researcher based in Namibia.",
}

const interests = [
  "Artificial Intelligence & Machine Learning",
  "Agricultural Technology (AgriTech)",
  "Process Automation & RPA",
  "Digital Transformation",
  "Full-Stack Development",
  "Quality Assurance",
]

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Constantly seeking new ways to leverage technology for impactful solutions.",
  },
  {
    icon: Heart,
    title: "Excellence",
    description: "Committed to delivering high-quality work and continuous improvement.",
  },
  {
    icon: GraduationCap,
    title: "Learning",
    description: "Passionate about expanding knowledge and staying current with technology.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex-1">
              <h1 
                className="text-4xl font-bold text-foreground sm:text-5xl"
              >
                Software Engineer & AI Enthusiast
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                I&apos;m Sein Muwana, a dedicated software engineer based in Windhoek, Namibia. 
                With expertise in C#, Java, Python, and full-stack development, I&apos;m passionate 
                about leveraging technology to improve processes and deliver impactful solutions.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Currently completing my Bachelor of Computer Science Honours at the University of Namibia, 
                my research focuses on AgriSense - a crop and disease monitoring system designed to make 
                agricultural technology accessible and affordable.
              </p>
              
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild className="gap-2">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="gap-2 bg-transparent">
                  <Link href="/cv">View Full CV</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex-1">
              <ImageSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 
              className="text-3xl font-bold text-foreground sm:text-4xl"
            >
              What Drives Me
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              My core values shape how I approach every project and collaboration.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-foreground">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 
                  className="mt-4 font-semibold text-foreground"
                >
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex-1">
              <h2 
                className="text-3xl font-bold text-foreground sm:text-4xl"
              >
                Areas of Interest
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                My professional interests span across multiple domains, 
                allowing me to bring diverse perspectives to problem-solving.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <Badge 
                    key={interest} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 
                  className="font-semibold text-lg text-foreground"
                >
                  Research Focus
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  My honours research project, AgriSense, focuses on improving the agricultural 
                  sector by introducing affordable and accessible technology for crop and disease 
                  monitoring. This project combines my passion for AI and my desire to create 
                  meaningful impact in Namibia and beyond.
                </p>
                <Button asChild variant="link" className="mt-4 h-auto p-0">
                  <Link href="/projects">
                    Learn more about AgriSense
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 
              className="text-3xl font-bold text-foreground sm:text-4xl"
            >
              Let&apos;s Connect
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I&apos;m always open to discussing new opportunities, collaborations, 
              or simply connecting with fellow tech enthusiasts.
            </p>
            
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <a href="mailto:seinprince2@gmail.com">
                  <Mail className="h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
                <a 
                  href="https://www.linkedin.com/in/sein-muwana-2ab319299/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
