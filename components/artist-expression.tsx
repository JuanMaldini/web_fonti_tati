"use client"

import { useRef, useEffect } from "react"
import ImageCarousel from "./image-carousel"
import { aboutCarousels } from "@/data/carousels"

export default function ArtistExpression() {
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
  const artistExpressionCarousel = aboutCarousels.artistExpression

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-subtle-blue">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Carrusel a la izquierda en desktop */}
          <div className="order-2 md:order-1 mb-8 md:mb-0">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <ImageCarousel
                images={artistExpressionCarousel.images}
                aspectRatio={artistExpressionCarousel.aspectRatio}
                indicatorStyle={artistExpressionCarousel.indicatorStyle}
              />
            </div>
          </div>

          {/* Texto a la derecha en desktop */}
          <div className="order-1 md:order-2">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-xl sm:text-2xl font-extralight tracking-wider mb-6 md:mb-8">
                "Architecture and art are two expressions of the same creative impulse"
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6 md:mb-8">
                My work explores the dialogue between structure and expression, between the built environment and the
                emotional response it evokes. I believe that every space tells a story, and every artwork captures a
                moment in time.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                Through my architectural practice and artistic endeavors, I seek to create experiences that resonate on
                both intellectual and emotional levels, inviting viewers and inhabitants to engage with their
                surroundings in meaningful ways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

