"use client"

import { MotionConfig } from "motion/react"

/** One place to honour the OS reduced-motion setting: transform and layout animations are dropped, fades stay. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
