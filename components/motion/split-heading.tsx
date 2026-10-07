"use client"

import { motion, useReducedMotion } from "motion/react"

interface SplitHeadingProps {
  text: string
  as?: "h1" | "h2"
  className?: string
  /** Seconds before the first word starts. */
  delay?: number
  /** Animate when scrolled into view instead of on mount. */
  inView?: boolean
}

/** Words slide up out of a mask, one after another. Plain text when reduced motion is on. */
export function SplitHeading({ text, as = "h2", className, delay = 0, inView = false }: SplitHeadingProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  const words = text.split(" ")

  if (reduce) return <Tag className={className}>{text}</Tag>

  const trigger = inView
    ? { initial: "hidden", whileInView: "shown", viewport: { once: true, margin: "-80px" } }
    : { initial: "hidden", animate: "shown" }

  return (
    <Tag
      className={className}
      aria-label={text}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: 0.06, delayChildren: delay } } }}
      {...trigger}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{ hidden: { y: "105%" }, shown: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
