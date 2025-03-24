"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  aspectRatio?: string
  fullHeight?: boolean
  title?: string
  subtitle?: string
  variant?: "light" | "dark"
  indicatorStyle?: "dots" | "bars"
}

export default function ImageCarousel({
  images,
  aspectRatio = "aspect-[3/4]",
  fullHeight = false,
  title,
  subtitle,
  variant = "dark",
  indicatorStyle = "bars",
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToIndex = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 500)
    },
    [isTransitioning],
  )

  const goToNext = useCallback(() => {
    goToIndex((currentIndex + 1) % images.length)
  }, [currentIndex, goToIndex, images.length])

  // Auto-advance the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [goToNext])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
      } else if (e.key === "ArrowRight") {
        goToIndex((currentIndex + 1) % images.length)
      }
    }

    if (fullHeight) {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentIndex, fullHeight, goToIndex, images.length])

  const textColor = variant === "light" ? "text-white" : "text-black"
  const indicatorColor = variant === "light" ? "bg-white" : "bg-black"

  return (
    <div className={`relative ${fullHeight ? "h-screen" : aspectRatio} w-full overflow-hidden`}>
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes={fullHeight ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
          />
          {fullHeight && variant === "light" && <div className="absolute inset-0 bg-black/30"></div>}
        </div>
      ))}

      {/* Overlay with grid pattern for full height carousels */}
      {fullHeight && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
      )}

      {/* Content */}
      {fullHeight && (title || subtitle) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6">
          <div className="max-w-4xl text-center">
            {title && (
              <h2 className={`text-4xl md:text-6xl font-extralight tracking-widest mb-6 ${textColor}`}>{title}</h2>
            )}
            {subtitle && (
              <p className={`text-lg md:text-xl font-thin tracking-wider ${textColor} max-w-2xl mx-auto`}>{subtitle}</p>
            )}
          </div>
        </div>
      )}

      {/* Indicators */}
      <div className={`absolute ${fullHeight ? "bottom-10" : "bottom-4"} left-1/2 -translate-x-1/2 flex gap-3 z-10`}>
        {images.map((_, index) =>
          indicatorStyle === "dots" ? (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex ? `${indicatorColor} scale-110` : `${indicatorColor}/40`
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ) : (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`h-1 transition-all ${
                index === currentIndex ? `${indicatorColor} w-16` : `${indicatorColor}/40 w-8`
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ),
        )}
      </div>
    </div>
  )
}

