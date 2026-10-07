"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { SplitHeading } from "@/components/motion/split-heading"

const tags = ["Data and ETL", "Power BI", "Automation (RPA)", "Computer vision"]
const workedWith = ["Agribank", "University of Namibia", "Power BI", "Power Automate", "Microsoft Fabric", "SAP"]

/** A checkbox that ticks itself after a delay. */
function TickBox({ delay }: { delay: number }) {
  const reduce = useReducedMotion()
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0" aria-hidden="true" fill="none">
      <rect x="1" y="1" width="14" height="14" rx="3" className="stroke-carbon/50" strokeWidth="1.5" />
      <motion.path
        d="M4.5 8.4l2.4 2.4 4.6-5"
        stroke="#9671ff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay, duration: 0.35, ease: "easeOut" }}
      />
    </svg>
  )
}

export function HeroSection() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 60])

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section ref={ref} className="overflow-hidden bg-midnight text-white">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 pb-14 pt-14 sm:pt-20 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:pb-16 lg:pt-24">
        <div>
          <SplitHeading
            as="h1"
            text="Software that removes the busywork."
            delay={0.1}
            className="text-[2.75rem] leading-[1.05] text-white sm:text-6xl lg:text-[4.5rem]"
          />
          <motion.p {...rise(0.55)} className="mt-6 max-w-xl text-lg leading-[1.55] text-white/80">
            I&apos;m Sein Muwana, a data analyst and software engineer at Agribank in Windhoek. I turn messy data and
            manual process into reports, pipelines and robots that people rely on.
          </motion.p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <motion.li
                key={tag}
                {...rise(0.7 + i * 0.08)}
                className="flex items-center gap-2 rounded-full bg-periwinkle-tint px-3.5 py-1.5 text-sm font-medium text-carbon"
              >
                <TickBox delay={1.15 + i * 0.25} />
                {tag}
              </motion.li>
            ))}
          </ul>

          <motion.div {...rise(1.0)} className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact me
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
              <Link href="/projects">See my work</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto w-full max-w-[380px] lg:ml-auto"
          initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div style={{ y: imageY }} className="relative aspect-[4/5] overflow-hidden rounded">
            <Image
              src="/images/profile.jpg"
              alt="Sein Muwana in a navy blazer"
              fill
              priority
              sizes="(min-width: 1024px) 380px, 90vw"
              className="object-cover object-top"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div {...rise(1.3)} className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-8 gap-y-3 px-6 py-6">
          <p className="text-sm text-white/60">Worked with</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-base font-semibold text-white/80">
            {workedWith.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
