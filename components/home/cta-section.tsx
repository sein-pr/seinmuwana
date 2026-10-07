"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { usePrefersReducedMotion as useReducedMotion } from "@/lib/use-reduced-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SplitHeading } from "@/components/motion/split-heading"
import { Magnetic } from "@/components/motion/magnetic"

export function CTASection() {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden bg-midnight py-24 text-white sm:py-36">
      <div
        aria-hidden="true"
        className="absolute -bottom-1/2 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full opacity-60"
        style={{ background: "radial-gradient(closest-side, rgba(150,113,255,0.28), transparent)" }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6">
        <SplitHeading
          text="Have a process that eats time?"
          inView
          className="max-w-4xl text-5xl text-white sm:text-[5.5rem] sm:leading-[1.02]"
        />
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.35, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mt-6 max-w-xl text-lg leading-[1.55] text-white/80">
            Tell me what the work looks like today. I&apos;m open to full-time roles, freelance projects and collaborations.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Button asChild size="lg" className="group h-14 px-9 text-lg">
                <Link href="/contact" data-cursor="Hi">
                  Get in touch
                  <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" />
                </Link>
              </Button>
            </Magnetic>
            <Button asChild size="lg" variant="outline" className="h-14 border-white bg-transparent px-8 text-lg text-white hover:bg-white/10">
              <Link href="/projects">View my work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
