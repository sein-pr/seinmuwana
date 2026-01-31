"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export function CTASection() {
  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection animation="zoom-in" className="mx-auto max-w-2xl text-center">
          <h2
            className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            I&apos;m currently available for freelance projects, full-time opportunities, and collaborations.
            Let&apos;s create something impactful together.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href="/contact">
                <Mail className="h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/projects">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
