"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function ArchitectPresentation() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      const animatedElements = sectionRef.current.querySelectorAll(".animate-on-scroll")
      animatedElements.forEach((el) => {
        observer.observe(el)
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Tatiana Fonti"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gray-200 rounded-md z-[-1]"></div>
            </div>
          </div>

          <div>
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <h2 className="text-2xl font-extralight tracking-wider mb-6">TATIANA FONTI</h2>
              <p className="text-base font-light tracking-wider text-gray-500 mb-8">Architect & Artist</p>

              <p className="text-gray-600 font-light leading-relaxed mb-6">
                With over 10 years of experience in architecture and fine arts, I create spaces and artworks that blend
                functionality with aesthetic sensibility. My approach is characterized by clean lines, thoughtful
                spatial relationships, and a deep appreciation for how light and shadow shape our experience.
              </p>

              <p className="text-gray-600 font-light leading-relaxed mb-10">
                Based in Buenos Aires, my work spans residential architecture, commercial spaces, and artistic
                explorations through various mediums including painting, drawing, and mixed media.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center text-sm tracking-wider uppercase pb-2 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-black/20 hover:after:bg-black transition-all"
              >
                LEARN MORE ABOUT ME
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

