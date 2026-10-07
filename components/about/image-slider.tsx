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

export function ImageSlider() {
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
    <div className="relative">
      <div 
        className="relative overflow-hidden rounded bg-background cursor-crosshair"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Images */}
        <div className="aspect-[4/5] relative">
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
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Hover Hint Overlay - Only shows when not interacted */}
          {!hasInteracted && (
            <div 
              className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-opacity duration-300 ${
                isHovering ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="mb-3">
                <Hand className="h-8 w-8 text-white" />
              </div>
              <p className="text-white font-medium text-sm">Hover to explore</p>
              <p className="text-white/70 text-xs mt-1">Move cursor across image</p>
            </div>
          )}

          {/* Image Indicator Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setHasInteracted(true)
                  setCurrentIndex(index)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? "w-6 bg-white" 
                    : "w-2 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`View ${image.caption}`}
              />
            ))}
          </div>

          {/* Caption Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-carbon/80 text-white text-xs font-medium px-3 py-1 rounded-full">
              {images[currentIndex].caption}
            </span>
          </div>

          {/* Navigation Arrows - Show on hover */}
          <button
            onClick={goToPrev}
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-carbon/80 text-white p-2 rounded-full transition-opacity ${
              isHovering ? "opacity-100" : "opacity-0"
            } hover:bg-carbon`}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-carbon/80 text-white p-2 rounded-full transition-opacity ${
              isHovering ? "opacity-100" : "opacity-0"
            } hover:bg-carbon`}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Location Badge */}
      <div className="mt-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Windhoek, Namibia</span>
        </div>
      </div>
    </div>
  )
}
