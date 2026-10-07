import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
  className?: string
}

/** Opening block for inner pages: dark band, left-aligned, heading carries the page. */
export function PageHeader({ title, description, children, className }: PageHeaderProps) {
  return (
    <header className={cn("bg-midnight text-white print:bg-white print:text-black", className)}>
      <div className="mx-auto max-w-[1200px] px-6 py-14 sm:py-20">
        <h1 className="motion-safe:animate-rise max-w-3xl text-[2.5rem] leading-[1.05] text-white sm:text-6xl print:text-black">{title}</h1>
        {description && <p style={{ "--delay": "90ms" } as React.CSSProperties} className="motion-safe:animate-rise mt-5 max-w-2xl text-lg leading-[1.55] text-white/75 print:text-black">{description}</p>}
        {children && <div style={{ "--delay": "180ms" } as React.CSSProperties} className="motion-safe:animate-rise mt-8 flex flex-wrap items-center gap-3">{children}</div>}
      </div>
    </header>
  )
}
