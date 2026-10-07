"use client"

import { useEffect, useState, useSyncExternalStore } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"
import { usePrefersReducedMotion as useReducedMotion } from "@/lib/use-reduced-motion"

const FINE = "(pointer: fine)"
const subscribeFine = (cb: () => void) => {
  const mql = window.matchMedia(FINE)
  mql.addEventListener("change", cb)
  return () => mql.removeEventListener("change", cb)
}

/** Soft ring that trails the pointer, grows over links and names the target when it has data-cursor. */
export function Cursor() {
  const reduce = useReducedMotion()
  const fine = useSyncExternalStore(subscribeFine, () => window.matchMedia(FINE).matches, () => false)
  const enabled = fine && !reduce
  const [hover, setHover] = useState(false)
  const [label, setLabel] = useState("")
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 })
  const ry = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 })

  useEffect(() => {
    if (!enabled) return

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e: PointerEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("a, button, [data-cursor], input, textarea, label")
      setHover(!!el)
      setLabel(el?.dataset.cursor ?? "")
    }
    window.addEventListener("pointermove", move, { passive: true })
    window.addEventListener("pointerover", over, { passive: true })
    return () => {
      window.removeEventListener("pointermove", move)
      window.removeEventListener("pointerover", over)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -ml-[3px] -mt-[3px] size-[6px] rounded-full bg-white mix-blend-difference print:hidden"
      />
      <motion.div
        aria-hidden="true"
        style={{ x: rx, y: ry }}
        className="pointer-events-none fixed left-0 top-0 z-[100] print:hidden"
      >
        <motion.div
          animate={{ scale: label ? 2.6 : hover ? 1.7 : 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="-ml-4 -mt-4 flex size-8 items-center justify-center rounded-full border border-white mix-blend-difference"
        >
          {label && <span className="text-[5px] font-semibold uppercase tracking-wider text-white">{label}</span>}
        </motion.div>
      </motion.div>
    </>
  )
}
