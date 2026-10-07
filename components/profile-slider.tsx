"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const images = [
  { src: "/images/profile.jpg", alt: "Sein Muwana in a navy suit", caption: "Professional" },
  { src: "/images/profile-working.jpg", alt: "Sein Muwana working", caption: "At work" },
  { src: "/images/profile-casual.jpg", alt: "Sein Muwana in casual clothes", caption: "Casual" },
]

export function ProfileSlider({ className }: { className?: string }) {
  const [index, setIndex] = useState(0)
  const go = (next: number) => setIndex((next + images.length) % images.length)

  // Mouse users can scrub across the photo; touch and keyboard users get the controls below.
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return
    const rect = e.currentTarget.getBoundingClientRect()
    const section = Math.floor(((e.clientX - rect.left) / rect.width) * images.length)
    setIndex(Math.min(Math.max(section, 0), images.length - 1))
  }

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Photos of Sein Muwana"
      className={cn("relative aspect-[4/5] w-full overflow-hidden rounded bg-carbon", className)}
      onPointerMove={onPointerMove}
    >
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 420px, 90vw"
          priority={i === 0}
          aria-hidden={i !== index}
          className={cn(
            "object-cover transition-opacity duration-300 motion-reduce:transition-none",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      <p className="absolute left-3 top-3 rounded-full bg-carbon/80 px-3 py-1 text-xs font-medium text-white" aria-live="polite">
        {images[index].caption}
      </p>

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-carbon/80 text-white transition-colors hover:bg-carbon"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-carbon/80 text-white transition-colors hover:bg-carbon"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show photo: ${image.caption}`}
            aria-current={i === index}
            className="flex size-11 items-center justify-center"
          >
            <span className={cn("block h-1.5 rounded-full bg-white transition-all", i === index ? "w-5" : "w-1.5 opacity-60")} />
          </button>
        ))}
      </div>
    </div>
  )
}
