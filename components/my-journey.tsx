"use client"

import { useRef, useEffect } from "react"
import ImageCarousel from "./image-carousel"
import { aboutCarousels } from "@/data/carousels"

export default function MyJourney() {
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

  // Obtener declaración del carrusel desde el archivo de datos
  const journeyCarousel = aboutCarousels.journey

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h2 className="text-xl font-extralight tracking-widest uppercase mb-16 relative inline-block after:content-[''] after:absolute after:bottom-[-15px] after:left-0 after:w-[50px] after:h-px after:bg-gray-300 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          MY JOURNEY
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8 text-gray-700 font-light leading-relaxed animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <p>
              Born and raised in Buenos Aires, my journey as an architect and artist began with a fascination for how
              spaces shape human experience. After completing my architectural studies at the University of Buenos
              Aires, I worked with several renowned architectural firms, gaining valuable experience in residential and
              commercial design.
            </p>
            <p>
              In 2015, I established my own practice, focusing on projects that blend functionality with artistic
              sensibility. Alongside my architectural work, I began exploring various artistic mediums as a way to
              further investigate spatial concepts and material expressions.
            </p>
            <p>
              My artistic practice has evolved to include paintings, drawings, and mixed media works that often
              reference architectural elements while transcending their functional constraints. This dual practice
              allows me to move between precision and intuition, structure and expression.
            </p>
            <p>
              Over the years, my work has been exhibited in galleries throughout Argentina and internationally, and my
              architectural projects have been recognized for their innovative approach to sustainable design and
              contextual sensitivity.
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400">
            <ImageCarousel
              images={journeyCarousel.images}
              aspectRatio={journeyCarousel.aspectRatio}
              indicatorStyle={journeyCarousel.indicatorStyle}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

