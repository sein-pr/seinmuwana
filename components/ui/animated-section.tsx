"use client"

import React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "blur-in"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
}

const animationClasses: Record<AnimationType, { initial: string; animate: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-4",
    animate: "opacity-100 translate-y-0",
  },
  "fade-down": {
    initial: "opacity-0 -translate-y-4",
    animate: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 translate-x-4",
    animate: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 -translate-x-4",
    animate: "opacity-100 translate-x-0",
  },
  "zoom-in": {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100",
  },
  "blur-in": {
    initial: "opacity-0 blur-sm",
    animate: "opacity-100 blur-0",
  },
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 500,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold })
  const { initial, animate } = animationClasses[animation]

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:blur-0",
        isVisible ? animate : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

interface AnimatedItemProps {
  children: React.ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  duration?: number
  index?: number
  staggerDelay?: number
}

export function AnimatedItem({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 500,
  index = 0,
  staggerDelay = 100,
}: AnimatedItemProps) {
  const totalDelay = delay + index * staggerDelay
  const { initial, animate } = animationClasses[animation]

  return (
    <div
      className={cn(
        "transition-all ease-out",
        animate,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${totalDelay}ms`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  )
}
