"use client"

import { useEffect, useRef } from "react
import Image from "next/image"

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current && subtitleRef.current) {
        const scrollY = window.scrollY
        const opacity = Math.max(1 - scrollY / 500, 0.2)
        const translateY = scrollY * 0.3

        titleRef.current.style.opacity = opacity.toString()
        titleRef.current.style.transform = `translateY(${translateY}px)`

        subtitleRef.current.style.opacity = opacity.toString()
        subtitleRef.current.style.transform = `translateY(${translateY * 1.2}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden pt-20 md:pt-24">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-black/5 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none z-[2]"></div>

      {/* Hero image */}
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Tatiana Fonti"
        fill
        className="object-cover opacity-90 filter grayscale-[30%]"
        priority
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/10 z-1"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center max-w-7xl mx-auto px-5 md:px-8 text-foreground">
        <div className="max-w-full md:max-w-[70%] text-left">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extralight tracking-widest leading-tight mb-4 md:mb-6 text-gray-800"
          >
            TATIANA FONTI
          </h1>
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wider text-gray-600 max-w-full md:max-w-[80%]"
          >
            ARCHITECTURE & ARTISTIC EXPRESSION.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 opacity-70">
        <div className="w-px h-16 bg-foreground mb-2.5 animate-[scroll_2s_infinite]"></div>
        <span className="text-xs tracking-widest">SCROLL</span>
      </div>
    </section>
  )
}

