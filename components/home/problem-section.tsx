"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion"

const days = [
  { day: "Day 1", title: "Export", body: "Pull the income statement, loan book and balance sheet out of SAP and SharePoint." },
  { day: "Day 2", title: "Clean", body: "Fix formats and stitch the sources together in Excel." },
  { day: "Day 3", title: "Reconcile", body: "Check every line against Finance's management reports." },
  { day: "Day 4", title: "Rebuild", body: "Redraw the charts and slides from the corrected numbers." },
  { day: "Day 5", title: "Redo", body: "Start again, because a number changed overnight." },
]

const captions = [
  "It starts with an export.",
  "Then the spreadsheet.",
  "Then the line-by-line check.",
  "Then the slides.",
  "And then it changes.",
  "The meeting starts.",
]

export function ProblemSection() {
  const reduce = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  const [scrollStep, setStep] = useState(0)
  const step = reduce ? days.length : scrollStep

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (reduce) return
    setStep(Math.min(days.length, Math.max(0, Math.floor(v * (days.length + 1.1)))))
  })

  const line = useTransform(scrollYProgress, [0.04, 0.9], [0, 1])

  return (
    <section ref={ref} className="relative bg-background lg:h-[420vh]" aria-label="The problem">
      <div className="lg:sticky lg:top-0 lg:flex lg:h-svh lg:items-center">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:pb-8 lg:pt-24">
          <div className="lg:self-center">
            <h2 className="text-4xl text-foreground sm:text-[3.5rem] sm:leading-[1.06]">
              A week of prep for every war room meeting.
            </h2>
            <div className="relative mt-6 h-16 max-w-md" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.p
                  key={step}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 text-xl leading-[1.4] text-graphite"
                >
                  {captions[Math.min(step, captions.length - 1)]}
                </motion.p>
              </AnimatePresence>
            </div>
            <p className="mt-6 max-w-md text-base leading-[1.6] text-muted-foreground">
              This is how finance reporting ran before the dashboard: copying between systems, checking by hand, and
              starting over when the data moved. A simplified version of the process.
            </p>
          </div>

          <ol className="relative space-y-3">
            <span aria-hidden="true" className="absolute bottom-8 left-[1.55rem] top-8 w-px bg-border" />
            <motion.span
              aria-hidden="true"
              style={{ scaleY: reduce ? 1 : line, transformOrigin: "top" }}
              className="absolute bottom-8 left-[1.55rem] top-8 w-px bg-foreground"
            />
            {days.map((d, i) => {
              const on = i < step
              const current = i === step - 1
              return (
                <motion.li
                  key={d.day}
                  animate={{ opacity: on ? 1 : 0.3, x: on ? 0 : 10, scale: current ? 1.015 : 1 }}
                  transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex gap-4 rounded-lg border bg-background p-4 pl-3 transition-colors duration-300 ${
                    current ? "border-foreground" : "border-border"
                  }`}
                >
                  <span
                    className={`flex size-[2.4rem] shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-300 ${
                      on ? "bg-foreground text-white" : "bg-fog text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">{d.day}</p>
                    <h3 className="text-lg text-foreground">{d.title}</h3>
                    <p className="mt-0.5 text-base leading-[1.5] text-graphite">{d.body}</p>
                  </div>
                </motion.li>
              )
            })}
            <motion.li
              animate={{ opacity: step > days.length - 1 ? 1 : 0, y: step > days.length - 1 ? 0 : 12 }}
              transition={{ duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-lg bg-midnight px-5 py-4 text-white"
            >
              <p className="text-lg font-semibold">Then the meeting. The numbers are already a day old.</p>
            </motion.li>
          </ol>
        </div>
      </div>
    </section>
  )
}
