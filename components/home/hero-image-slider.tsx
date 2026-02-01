"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Hand } from "lucide-react"

const images = [
  {
    src: "/images/profile.jpg",
    alt: "Sein Muwana - Professional Portrait",
    caption: "Professional",
  },
  {
    src: "/images/profile-working.jpg",
    alt: "Sein Muwana - At Work",
    caption: "At Work",
  },
  {
    src: "/images/profile-casual.jpg",
    alt: "Sein Muwana - Casual",
    caption: "Casual",
  },
]

export function HeroImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hasInteracted) setHasInteracted(true)

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const width = rect.width
    const section = Math.floor((x / width) * images.length)
    const newIndex = Math.min(Math.max(section, 0), images.length - 1)

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex)
    }
  }

  const goToNext = () => {
    setHasInteracted(true)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrev = () => {
    setHasInteracted(true)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div
      className="relative overflow-hidden rounded-xl cursor-crosshair"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Images */}
      <div className="aspect-[4/5] relative w-full max-w-[380px]">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-300 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover rounded-xl"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Hover Hint Overlay - Only shows when not interacted */}
        {!hasInteracted && (
          <div
            className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-opacity duration-300 rounded-xl ${
              isHovering ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 mb-2">
              <Hand className="h-6 w-6 text-white animate-pulse" />
            </div>
            <p className="text-white font-medium text-sm">Hover to explore</p>
            <p className="text-white/70 text-xs mt-1">Move cursor across image</p>
          </div>
        )}

        {/* Image Indicator Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((image, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => {
                setHasInteracted(true)
                setCurrentIndex(index)
              }}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex
                  ? "w-5 bg-white"
                  : "w-1.5 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`View ${image.caption}`}
            />
          ))}
        </div>

        {/* Caption Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
            {images[currentIndex].caption}
          </span>
        </div>

        {/* Navigation Arrows - Show on hover */}
        <button
          onClick={goToPrev}
          className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-1.5 rounded-full transition-opacity ${
            isHovering ? "opacity-100" : "opacity-0"
          } hover:bg-white/30`}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={goToNext}
          className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-1.5 rounded-full transition-opacity ${
            isHovering ? "opacity-100" : "opacity-0"
          } hover:bg-white/30`}
          aria-label="Next image"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
