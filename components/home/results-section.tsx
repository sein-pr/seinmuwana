"use client"

import { motion } from "motion/react"
import { usePrefersReducedMotion as useReducedMotion } from "@/lib/use-reduced-motion"
import { Section } from "@/components/layout/section"
import { CountUp } from "@/components/motion/count-up"

const stats = [
  { value: <CountUp to={10000} suffix="+" />, label: "client records cleaned across 8 branches", detail: "Bad records fell from over 4,000 to under 500." },
  { value: <CountUp to={7} suffix="M" />, label: "transactions moved off legacy flat files", detail: "Parsed in Python and loaded into SQL for reporting." },
  { value: <CountUp to={80} suffix="%" />, label: "efficiency gain from one data-access app", detail: "Related support tickets fell by 80% too." },
  { value: <CountUp to={93.8} suffix="%" decimals={1} />, label: "mAP50-95 for the AgriSense detector", detail: "Across 9 tomato leaf classes." },
]

export function ResultsSection() {
  const reduce = useReducedMotion()
  return (
    <Section>
      <h2 className="max-w-2xl text-4xl text-foreground sm:text-[3.5rem] sm:leading-[1.06]">What came out of it.</h2>
      <dl className="mt-14 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-background p-7"
          >
            <dd className="tabular text-5xl font-extrabold text-foreground sm:text-6xl">{stat.value}</dd>
            <dt className="mt-3 text-base font-semibold leading-[1.35] text-foreground">{stat.label}</dt>
            <p className="mt-2 text-sm leading-[1.5] text-muted-foreground">{stat.detail}</p>
          </motion.div>
        ))}
      </dl>
    </Section>
  )
}
