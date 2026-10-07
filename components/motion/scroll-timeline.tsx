"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion"
import { cn } from "@/lib/utils"

/**
 * A vertical rail that fills as you scroll through the list. Put <TimelineItem> children inside.
 * The rail sits in the left gutter on desktop and is hidden on small screens.
 */
export function ScrollTimeline({ children, className, railClassName = "left-0" }: { children: React.ReactNode; className?: string; railClassName?: string }) {
  const reduce = usePrefersReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] })
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref} className={cn("relative", className)}>
      <span aria-hidden="true" className={cn("absolute bottom-0 top-0 hidden w-px bg-border md:block", railClassName)} />
      <motion.span
        aria-hidden="true"
        style={{ scaleY: reduce ? 1 : fill, transformOrigin: "top" }}
        className={cn("absolute bottom-0 top-0 hidden w-px bg-foreground md:block", railClassName)}
      />
      {children}
    </div>
  )
}

/** A dot on the rail that pops when its row scrolls into view. */
export function TimelineDot({ className }: { className?: string }) {
  const reduce = usePrefersReducedMotion()
  return (
    <motion.span
      aria-hidden="true"
      initial={reduce ? false : { scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ type: "spring", stiffness: 500, damping: 24 }}
      className={cn("absolute hidden size-3 -translate-x-1/2 rounded-full border-2 border-foreground bg-background md:block", className)}
    />
  )
}
