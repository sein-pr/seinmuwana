"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SplitHeading } from "@/components/motion/split-heading"

export function CTASection() {
  const reduce = useReducedMotion()
  return (
    <section className="bg-midnight py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SplitHeading
          text="Have a process that eats time?"
          inView
          className="max-w-3xl text-4xl text-white sm:text-[4.5rem] sm:leading-[1.05]"
        />
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.35, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mt-5 max-w-xl text-lg leading-[1.55] text-white/80">
            Tell me what the work looks like today. I&apos;m open to full-time roles, freelance projects and collaborations.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Get in touch
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <Link href="/projects">View my work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
