"use client"

import { useEffect } from "react"

// Survives route changes, so the very first page load skips the wipe.
let hasNavigated = false

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!hasNavigated) {
      hasNavigated = true
      return
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    // Drawn outside React so it can't cause a hydration mismatch.
    const curtain = document.createElement("div")
    curtain.setAttribute("aria-hidden", "true")
    curtain.className = "pointer-events-none fixed inset-0 z-[90] bg-midnight print:hidden"
    curtain.style.transformOrigin = "top"
    document.body.appendChild(curtain)
    const animation = curtain.animate([{ transform: "scaleY(1)" }, { transform: "scaleY(0)" }], {
      duration: 520,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
    })
    animation.onfinish = () => curtain.remove()
    return () => {
      animation.cancel()
      curtain.remove()
    }
  }, [])

  return <div className="animate-page-in motion-reduce:animate-none">{children}</div>
}
