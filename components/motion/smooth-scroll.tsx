"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import "lenis/dist/lenis.css"

/** Inertial scrolling on desktop. Native scrolling stays for touch, reduced motion and dialogs. */
export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const finePointer = window.matchMedia("(pointer: fine)").matches
    if (reduce || !finePointer) return

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.95,
      autoRaf: true,
      anchors: true,
      prevent: (node) => !!node.closest('[role="dialog"], [data-lenis-prevent]'),
    })
    return () => lenis.destroy()
  }, [])

  return null
}
