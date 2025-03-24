"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"

export default function ArtistWords() {
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
          <div className="order-2 md:order-1">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-2xl font-extralight tracking-wider mb-8">IN MY OWN WORDS</h2>

              <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                <p className="text-xl italic">
                  "I see architecture and art as two languages expressing the same fundamental ideas about space, light,
                  and human experience."
                </p>

                <p>
                  My creative process begins with observation—of light patterns, spatial relationships, and the subtle
                  interplay between built and natural environments. Whether I'm designing a building or creating a
                  painting, I'm exploring the same questions about how we perceive and inhabit space.
                </p>

                <p>
                  There's a beautiful tension between the precision required in architecture and the freedom found in
                  artistic expression. I find that moving between these disciplines enriches both—my architectural work
                  becomes more poetic, and my artwork gains structural integrity.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Tatiana Fonti in studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gray-200 z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

