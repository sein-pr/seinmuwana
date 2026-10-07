"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

/** Category filter whose highlight slides between pills. Still plain links, so it works without JS. */
export function CategoryNav({ categories, active }: { categories: string[]; active: string }) {
  return (
    <nav aria-label="Filter posts by category" className="flex flex-wrap gap-2">
      {categories.map((name) => {
        const selected = name === active
        return (
          <Link
            key={name}
            href={name === "All" ? "/blog" : `/blog?category=${encodeURIComponent(name)}`}
            aria-current={selected ? "true" : undefined}
            scroll={false}
            className={cn(
              "relative inline-flex min-h-11 items-center rounded-full border px-5 text-base font-medium transition-colors",
              selected ? "border-transparent text-carbon" : "border-border text-graphite hover:bg-fog",
            )}
          >
            {selected && (
              <motion.span
                layoutId="blog-pill"
                className="absolute inset-0 rounded-full bg-periwinkle-tint"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative">{name}</span>
          </Link>
        )
      })}
    </nav>
  )
}
