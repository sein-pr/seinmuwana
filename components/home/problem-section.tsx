"use client"

import { useRef, useState } from "react"
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react"
import { FileText, Keyboard, Mail, Table2, UserCheck } from "lucide-react"
import { Section } from "@/components/layout/section"
import { SplitHeading } from "@/components/motion/split-heading"

const steps = [
  { icon: FileText, label: "Paper or form request" },
  { icon: Mail, label: "Forwarded by email" },
  { icon: Table2, label: "Logged in a spreadsheet" },
  { icon: UserCheck, label: "Approved by hand" },
  { icon: Keyboard, label: "Typed into the system" },
]

export function ProblemSection() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] })
  const [reached, setReached] = useState(reduce ? steps.length : 0)

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (reduce) return
    setReached(Math.min(steps.length, Math.max(0, Math.ceil(v * steps.length - 0.05))))
  })

  const line = useTransform(scrollYProgress, [0, 1], [0, 1])
  const handoffs = Math.max(0, reached - 1)

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <SplitHeading
            text="Manual work doesn't scale."
            inView
            className="text-4xl text-foreground sm:text-[3.5rem] sm:leading-[1.08]"
          />
          <p className="mt-5 max-w-md text-lg leading-[1.6] text-graphite">
            Many internal processes began as a form, an email and a spreadsheet. Every hand-off adds waiting time and another
            chance for the same data to be typed wrong.
          </p>
        </div>

        <div ref={ref} aria-label="A manual approval process with five steps" role="group">
          <ol className="relative space-y-3">
            {/* Connector line, drawn as you scroll. */}
            <span aria-hidden="true" className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-border" />
            <motion.span
              aria-hidden="true"
              style={{ scaleY: reduce ? 1 : line, transformOrigin: "top" }}
              className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-foreground"
            />
            {steps.map((step, i) => {
              const on = i < reached
              return (
                <motion.li
                  key={step.label}
                  animate={{ opacity: on ? 1 : 0.35, x: on ? 0 : -6 }}
                  transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex items-center gap-4 rounded-lg border border-border bg-background py-3 pl-3 pr-5"
                >
                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      on ? "border-foreground bg-foreground text-white" : "border-border bg-background text-muted-foreground"
                    }`}
                  >
                    <step.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-base text-foreground">{step.label}</span>
                </motion.li>
              )
            })}
          </ol>

          <dl className="mt-6 flex gap-10 border-t border-border pt-5">
            <div>
              <dt className="text-sm text-muted-foreground">Hand-offs</dt>
              <dd className="tabular text-3xl font-extrabold text-foreground">{handoffs}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Places data is re-typed</dt>
              <dd className="tabular text-3xl font-extrabold text-foreground">{reached >= 3 ? Math.min(reached - 1, 3) : 0}</dd>
            </div>
          </dl>
          <p className="mt-3 text-sm text-muted-foreground">A simplified manual approval, for illustration.</p>
        </div>
      </div>
    </Section>
  )
}
