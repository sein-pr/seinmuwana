"use client"

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react"

/** Thin bar under the header that fills as the article is read. */
export function ReadingProgress() {
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
