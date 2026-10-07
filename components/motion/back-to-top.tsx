"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { motion, useScroll } from "motion/react"
import { AnimatePresence } from "motion/react"

/** Round button that appears after the first screen and draws a ring as you read. */
export function BackToTop() {
  const [show, setShow] = useState(false)
  const { scrollYProgress, scrollY } = useScroll()

  useEffect(() => scrollY.on("change", (y) => setShow(y > 700)), [scrollY])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-40 flex size-12 items-center justify-center rounded-full bg-carbon text-white shadow-md print:hidden"
        >
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <motion.circle cx="24" cy="24" r="22" fill="none" stroke="#9671ff" strokeWidth="2" strokeLinecap="round" style={{ pathLength: scrollYProgress }} />
          </svg>
          <ArrowUp className="relative h-4 w-4" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
