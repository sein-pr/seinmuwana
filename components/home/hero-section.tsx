"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, MapPin } from "lucide-react"
import { HeroImageSlider } from "./hero-image-slider"
import { AnimatedSection } from "@/components/ui/animated-section"

const roles = [
  "Software Engineer",
  "Process Automation Specialist",
  "Quality Assurance Engineer",
  "AI Specialist"
]

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        setIsAnimating(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <AnimatedSection animation="fade-up" delay={0}>
              <Badge variant="secondary" className="w-fit gap-2 px-4 py-2 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Available for Work
              </Badge>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <div className="space-y-4">
                <h1
                  className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Hi, I&apos;m a{" "}
                  <span 
                    className={`text-primary inline-block transition-all duration-500 ${
                      isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                    }`}
                  >
                    {roles[currentRoleIndex]}
                  </span>
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Dedicated software engineer with expertise in C#, Java, Python, full-stack web development,
                  and AI. Passionate about leveraging technology to drive innovation and digital transformation.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contact">
                    Contact Me
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
                  <Link href="/cv">
                    <Download className="h-4 w-4" />
                    Download CV
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content - Profile Card */}
          <AnimatedSection animation="fade-left" delay={300} className="flex flex-1 justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Main Profile Card */}
              <div className="relative z-10 overflow-hidden rounded-2xl bg-card shadow-xl">
                <div className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="space-y-1">
                      <h2
                        className="text-2xl font-bold text-card-foreground"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Sein Muwana
                      </h2>
                      <div className="flex items-center gap-1 text-base text-muted-foreground">
                        <MapPin className="h-5 w-5" />
                        Windhoek, Namibia
                      </div>
                    </div>
                  </div>

                  {/* Profile Image with Slider */}
                  <div className="mt-6">
                    <HeroImageSlider />
                  </div>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-sm px-3 py-1">AI Expert</Badge>
                    <Badge variant="secondary" className="text-sm px-3 py-1">Full-Stack</Badge>
                    <Badge variant="secondary" className="text-sm px-3 py-1">Automation</Badge>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Top Right Corner */}
              <div className="absolute -top-3 -right-4 z-20 rounded-xl bg-primary px-5 py-4 shadow-lg">
                <p className="text-base font-medium text-primary-foreground">CS Honours Graduate</p>
                <p className="text-sm text-primary-foreground/80">University of Namibia</p>
              </div>

              {/* Decorative Element */}
              <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
