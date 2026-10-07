"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

export function CTASection() {
  return (
    <section className="bg-midnight py-24 text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <AnimatedSection animation="fade-up" className="max-w-2xl">
          <h2 className="text-4xl text-white sm:text-[3.5rem] sm:leading-[1.08]">Have something to build?</h2>
          <p className="mt-4 text-lg leading-[1.55] text-white/80">
            I&apos;m open to freelance projects, full-time roles and collaborations. Tell me what you&apos;re working on.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact">Get in touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/projects">
                View my work
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
