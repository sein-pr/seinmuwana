import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Tone = "light" | "fog" | "dark"

const tones: Record<Tone, string> = {
  light: "bg-background text-foreground",
  fog: "bg-fog text-foreground",
  dark: "bg-midnight text-white",
}

interface SectionProps {
  tone?: Tone
  className?: string
  innerClassName?: string
  id?: string
  children: ReactNode
}

export function Section({ tone = "light", className, innerClassName, id, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", tones[tone], className)}>
      <div className={cn("mx-auto max-w-[1200px] px-6", innerClassName)}>{children}</div>
    </section>
  )
}

interface SectionHeadingProps {
  title: string
  description?: string
  tone?: Tone
  action?: ReactNode
  className?: string
}

export function SectionHeading({ title, description, tone = "light", action, className }: SectionHeadingProps) {
  const dark = tone === "dark"
  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="max-w-2xl">
        <h2 className={cn("text-4xl sm:text-[2.5rem]", dark ? "text-white" : "text-foreground")}>{title}</h2>
        {description && (
          <p className={cn("mt-3 text-lg leading-[1.55]", dark ? "text-white/70" : "text-graphite")}>{description}</p>
        )}
      </div>
      {action}
    </div>
  )
}
