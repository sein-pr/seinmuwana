"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { SplitHeading } from "@/components/motion/split-heading"

const tags = ["Data and ETL", "Power BI", "Automation (RPA)", "Computer vision", "Microsoft Fabric"]
const workedWith = ["Agribank", "University of Namibia", "Power BI", "Power Automate", "Microsoft Fabric", "SAP"]

/** An empty checkbox that ticks itself after a delay. */
function TickBox({ delay }: { delay: number }) {
  const reduce = useReducedMotion()
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0" aria-hidden="true" fill="none">
      <rect x="1" y="1" width="14" height="14" rx="3" stroke="white" strokeOpacity="0.7" strokeWidth="1.5" />
      <motion.path
        d="M4.5 8.4l2.4 2.4 4.6-5"
        stroke="#c9bbff"
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
  const personY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 70])

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section
      ref={ref}
      className="relative isolate -mt-16 flex min-h-svh flex-col overflow-hidden bg-[#120e0c] text-white"
    >
      {/* Warm studio backdrop: lamp glow bottom right, soft panel slats. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(55% 45% at 86% 92%, rgba(222,128,44,0.38), transparent 62%), radial-gradient(45% 55% at 78% 30%, rgba(120,90,70,0.35), transparent 70%), linear-gradient(115deg, #15100d 0%, #251b15 48%, #1a130f 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-60"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.045) 0 2px, transparent 2px 72px)",
          maskImage: "linear-gradient(to right, transparent 25%, black 75%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 25%, black 75%)",
        }}
      />

      {/* Portrait, cropped at the chest like the reference. */}
      <motion.div
        style={{ y: personY }}
        initial={reduce ? false : { opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -z-10 aspect-[672/939] -bottom-[10rem] right-[-12%] h-[30rem] sm:-bottom-[16rem] sm:right-[4%] sm:h-[52rem] lg:-top-[10%] lg:bottom-auto lg:right-[-8%] lg:h-[150%]"
      >
        <Image
          src="/images/profile-hero.webp"
          alt="Sein Muwana in a navy blazer"
          fill
          priority
          sizes="(min-width: 1024px) 940px, 90vw"
          className="object-contain object-bottom"
        />
      </motion.div>

      {/* Keeps the copy legible over the backdrop. */}
      <div aria-hidden="true" className="absolute inset-0 -z-[5] bg-gradient-to-r from-black/80 via-black/45 to-transparent lg:via-black/30" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-[5] hidden h-2/5 bg-gradient-to-t from-black/70 to-transparent lg:block" />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-between px-6 pb-[19rem] pt-24 sm:pb-[30rem] sm:pt-28 lg:pb-8">
        <div className="max-w-[40rem]">
          <SplitHeading
            as="h1"
            text="Software that removes the busywork."
            delay={0.1}
            className="text-[2.75rem] leading-[1.04] text-white sm:text-7xl lg:text-[4.25rem] lg:leading-[1.05]"
          />
          <motion.p {...rise(0.55)} className="mt-5 max-w-xl text-lg leading-[1.55] text-white/90">
            I&apos;m Sein Muwana, a data analyst and software engineer at Agribank in Windhoek. I turn messy data and
            manual process into reports, pipelines and robots that people rely on.
          </motion.p>

          <ul className="mt-6 flex max-w-xl flex-wrap gap-2.5">
            {tags.map((tag, i) => (
              <motion.li
                key={tag}
                {...rise(0.7 + i * 0.07)}
                className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-base font-medium text-white backdrop-blur-sm"
              >
                <TickBox delay={1.1 + i * 0.22} />
                {tag}
              </motion.li>
            ))}
          </ul>

          <motion.div {...rise(1.0)} className="mt-8">
            <Button asChild size="lg" className="h-14 px-9 text-lg">
              <Link href="/contact">
                Contact me
                <ArrowRight />
              </Link>
            </Button>
            <p className="mt-3 text-xs text-white/80">*Open to full-time roles, freelance work and collaborations.</p>
          </motion.div>
        </div>

        <motion.div {...rise(1.3)} className="mt-10">
          <p className="text-sm text-white/80">Worked with:</p>
          <ul className="mt-3 flex flex-wrap gap-x-9 gap-y-2 text-lg font-semibold text-white/90">
            {workedWith.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
