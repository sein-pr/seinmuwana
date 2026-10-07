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
    <header className={cn("bg-midnight text-white", className)}>
      <div className="mx-auto max-w-[1200px] px-6 py-14 sm:py-20">
        <h1 className="max-w-3xl text-[2.5rem] leading-[1.05] text-white sm:text-6xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg leading-[1.55] text-white/75">{description}</p>}
        {children && <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>}
      </div>
    </header>
  )
}
