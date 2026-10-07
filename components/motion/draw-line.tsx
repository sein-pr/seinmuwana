"use client"

import { motion } from "motion/react"
import { usePrefersReducedMotion as useReducedMotion } from "@/lib/use-reduced-motion"
import { cn } from "@/lib/utils"

/** A hairline that draws itself from the left when it scrolls into view. Parent must be `relative`. */
export function DrawLine({ className, delay = 0 }: { className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.span
      aria-hidden="true"
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "left" }}
      className={cn("absolute inset-x-0 bottom-0 h-px bg-border", className)}
    />
  )
}
