"use client"

import { motion, useScroll, useSpring } from "motion/react"
import { usePrefersReducedMotion as useReducedMotion } from "@/lib/use-reduced-motion"

/** Thin violet bar under the header that fills as the page is read. */
export function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: reduce ? scrollYProgress : scaleX, transformOrigin: "left" }}
      className="fixed inset-x-0 top-16 z-40 h-0.5 bg-primary print:hidden"
    />
  )
}
