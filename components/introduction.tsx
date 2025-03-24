"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Introduction() {
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
      const animatedElements = sectionRef.current.querySelectorAll(".animate-fade-up")
      animatedElements.forEach((el) => {
        observer.observe(el)
      })
    }

    return () => {
      if (sectionRef.current) {
        const animatedElements = sectionRef.current.querySelectorAll(".animate-fade-up")
        animatedElements.forEach((el) => {
          observer.unobserve(el)
        })
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-subtle-cream bg-pattern-dots relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-1">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-10 animate-fade-up opacity-0 translate-y-5 transition-all duration-700">
            <div className="h-px w-12 bg-black/15"></div>
            <p className="mx-6 text-sm tracking-widest uppercase text-gray-600">ARCHITECTURE & ART</p>
            <div className="h-px w-12 bg-black/15"></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-extralight tracking-wider mb-6 leading-relaxed animate-fade-up opacity-0 translate-y-5 transition-all duration-700 delay-100">
            Blending structural precision with artistic expression
          </h2>

          <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed mb-16 animate-fade-up opacity-0 translate-y-5 transition-all duration-700 delay-200">
            As an architect and artist based in Buenos Aires, I explore the intersection between built environments and
            artistic creation. My work is characterized by a minimalist approach that emphasizes clean lines, thoughtful
            spatial relationships, and the interplay of light and shadow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div
              className="text-center animate-fade-up opacity-0 translate-y-5 transition-all duration-700 delay-300"
              style={{ "--delay": "0s" } as React.CSSProperties}
            >
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 border border-black/10"></div>
              </div>
              <h3 className="text-sm font-normal tracking-wider uppercase mb-4">ARCHITECTURE</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed max-w-xs mx-auto">
                Residential and commercial projects focused on sustainable design and harmonious integration with
                surroundings.
              </p>
            </div>

            <div
              className="text-center animate-fade-up opacity-0 translate-y-5 transition-all duration-700 delay-500"
              style={{ "--delay": "0.2s" } as React.CSSProperties}
            >
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rounded-full border border-black/10"></div>
              </div>
              <h3 className="text-sm font-normal tracking-wider uppercase mb-4">PAINTINGS</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed max-w-xs mx-auto">
                Abstract explorations of space, form, and color inspired by architectural principles and urban
                landscapes.
              </p>
            </div>

            <div
              className="text-center animate-fade-up opacity-0 translate-y-5 transition-all duration-700 delay-700"
              style={{ "--delay": "0.4s" } as React.CSSProperties}
            >
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 rotate-45 border border-black/10"></div>
              </div>
              <h3 className="text-sm font-normal tracking-wider uppercase mb-4">DRAWINGS</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed max-w-xs mx-auto">
                Detailed technical and artistic drawings that examine structural elements and spatial compositions.
              </p>
            </div>
          </div>

          <div
            className="animate-fade-up opacity-0 translate-y-5 transition-all duration-700 delay-800"
            style={{ "--delay": "0.6s" } as React.CSSProperties}
          >
            <Link
              href="/about"
              className="text-sm tracking-wider uppercase pb-2 relative inline-flex items-center transition-all after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-black/20 hover:after:bg-black"
            >
              LEARN MORE ABOUT MY WORK
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-150px] right-[-150px] w-[300px] h-[300px] border border-black/3 rotate-45 z-0"></div>
    </section>
  )
}

