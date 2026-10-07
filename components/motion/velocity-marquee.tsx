"use client"

import { useRef } from "react"
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "motion/react"
import { usePrefersReducedMotion as useReducedMotion } from "@/lib/use-reduced-motion"
import { cn } from "@/lib/utils"

const wrap = (min: number, max: number, v: number) => {
  const range = max - min
  return ((((v - min) % range) + range) % range) + min
}

interface VelocityMarqueeProps {
  items: string[]
  /** Percent of track per second. Negative moves left. */
  speed?: number
  className?: string
  itemClassName?: string
}

/** Endless text strip that speeds up, and reverses, with your scroll. */
export function VelocityMarquee({ items, speed = -3, className, itemClassName }: VelocityMarqueeProps) {
  const reduce = useReducedMotion()
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 })
  const factor = useTransform(smooth, [0, 1000], [0, 4], { clamp: false })
  const direction = useRef(speed < 0 ? -1 : 1)
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`)

  useAnimationFrame((_, delta) => {
    if (reduce) return
    let move = direction.current * Math.abs(speed) * (delta / 1000)
    if (factor.get() < -0.05) direction.current = speed < 0 ? 1 : -1
    else if (factor.get() > 0.05) direction.current = speed < 0 ? -1 : 1
    move += direction.current * Math.abs(move) * Math.abs(factor.get())
    baseX.set(baseX.get() + move)
  })

  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden={key === "b" ? "true" : undefined}>
      {items.map((item) => (
        <span key={item} className={cn("flex items-center whitespace-nowrap", itemClassName)}>
          {item}
          <span className="mx-[0.6em] inline-block size-[0.28em] rounded-full bg-primary" aria-hidden="true" />
        </span>
      ))}
    </div>
  )

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div style={{ x }} className="flex w-max">
        {row("a")}
        {row("b")}
      </motion.div>
    </div>
  )
}
