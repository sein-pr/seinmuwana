"use client"

import { motion } from "motion/react"
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion"
import { CountUp } from "@/components/motion/count-up"

/** A labelled percentage that fills its bar and counts up when scrolled into view. */
export function MetricBar({ label, value, delay = 0 }: { label: string; value: number; delay?: number }) {
  const reduce = usePrefersReducedMotion()
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-base text-graphite">{label}</span>
        <span className="tabular text-2xl font-extrabold text-foreground">
          <CountUp to={value} decimals={1} suffix="%" />
        </span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-foreground/10">
        <motion.div
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: value / 100 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          className="h-full w-full rounded-full bg-primary"
        />
      </div>
    </div>
  )
}
