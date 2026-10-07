"use client"

import { useEffect, useRef, useState } from "react"
import { animate, useInView } from "motion/react"
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion"

interface CountUpProps {
  to: number
  prefix?: string
  suffix?: string
  duration?: number
  decimals?: number
  className?: string
}

export function CountUp({ to, prefix = "", suffix = "", duration = 1.4, decimals = 0, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const reduce = usePrefersReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, { duration, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setValue(Number(v.toFixed(decimals))) })
    return () => controls.stop()
  }, [inView, reduce, to, duration, decimals])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {(reduce ? to : value).toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  )
}
