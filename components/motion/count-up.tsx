"use client"

import { useEffect, useRef, useState } from "react"
import { animate, useInView, useReducedMotion } from "motion/react"

interface CountUpProps {
  to: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export function CountUp({ to, prefix = "", suffix = "", duration = 1.4, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setValue(Math.round(v)) })
    return () => controls.stop()
  }, [inView, reduce, to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {reduce ? to : value}
      {suffix}
    </span>
  )
}
