import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { SplitHeading } from "@/components/motion/split-heading"

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
  className?: string
}

/** Opening block for inner pages: dark band, left-aligned, heading carries the page. */
export function PageHeader({ title, description, children, className }: PageHeaderProps) {
  return (
    <header className={cn("relative overflow-hidden bg-midnight text-white print:bg-white print:text-black", className)}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 print:hidden">
        <div
          className="absolute -right-32 -top-40 size-[34rem] rounded-full opacity-70 motion-safe:animate-drift"
          style={{ background: "radial-gradient(closest-side, rgba(150,113,255,0.32), transparent)" }}
        />
        <div
          className="absolute -bottom-52 left-1/3 size-[28rem] rounded-full opacity-40 motion-safe:animate-drift-slow"
          style={{ background: "radial-gradient(closest-side, rgba(222,128,44,0.22), transparent)" }}
        />
      </div>
      <div className="relative mx-auto max-w-[1200px] px-6 py-14 sm:py-20">
        <SplitHeading as="h1" text={title} delay={0.05} className="max-w-3xl text-[2.5rem] leading-[1.05] text-white sm:text-6xl print:text-black" />
        {description && <p style={{ "--delay": "90ms" } as React.CSSProperties} className="motion-safe:animate-rise mt-5 max-w-2xl text-lg leading-[1.55] text-white/75 print:text-black">{description}</p>}
        {children && <div style={{ "--delay": "180ms" } as React.CSSProperties} className="motion-safe:animate-rise mt-8 flex flex-wrap items-center gap-3">{children}</div>}
      </div>
    </header>
  )
}
