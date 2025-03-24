"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import type { GalleryItem } from "@/data/gallery"

interface GalleryProps {
  items: GalleryItem[]
  openModal: (item: GalleryItem) => void
}

export default function Gallery({ items, openModal }: GalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Solo mostrar 6 items
  const displayedItems = items.slice(0, 6)

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
      const header = sectionRef.current.querySelector(".section-header")
      if (header) observer.observe(header)

      const items = sectionRef.current.querySelectorAll(".gallery-item")
      items.forEach((item) => {
        observer.observe(item)
      })

      const viewAll = sectionRef.current.querySelector(".view-all")
      if (viewAll) observer.observe(viewAll)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-subtle-cream bg-pattern-dots relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-1">
        <div className="section-header flex items-center justify-center mb-16 opacity-0 translate-y-8 transition-all duration-700">
          <div className="h-px w-16 bg-black/15"></div>
          <h2 className="mx-6 text-xl font-extralight tracking-widest uppercase">ART</h2>
          <div className="h-px w-16 bg-black/15"></div>
        </div>

        {/* Modificado para mostrar 2 elementos en móvil vertical, 3 en horizontal */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {displayedItems.map((item, index) => (
            <div
              key={`gallery-${index}`}
              className="gallery-item cursor-pointer opacity-0 translate-y-8 transition-all duration-300 bg-white rounded-lg overflow-hidden shadow-sm hover:scale-[1.04] hover:shadow-md"
              onClick={() => openModal(item)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.imageUrl || "/placeholder.svg?height=600&width=600"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-500 ${hoveredIndex === index ? "opacity-60" : "opacity-0"}`}
                />

                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white animate-fade-in">
                    <h3 className="text-lg font-light tracking-wider mb-3">{item.title}</h3>
                    <p className="text-xs text-gray-200 mb-6">
                      {item.year} · {item.medium}
                    </p>
                    <div className="border border-white/30 px-6 py-3 text-xs tracking-wider uppercase hover:bg-white/10 transition-colors">
                      <span>VIEW ARTWORK</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-base font-light tracking-wider mb-2">{item.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">
                    {item.year} · {item.medium}
                  </p>
                  <p className="text-xs text-gray-500 px-3 py-1 border border-gray-200 rounded-sm capitalize">
                    {item.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="view-all mt-16 text-center opacity-0 translate-y-8 transition-all duration-700"
          style={{ transitionDelay: "0.6s" }}
        >
          <Link
            href="/art"
            className="text-sm tracking-wider uppercase pb-2 relative inline-flex items-center transition-all after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-black/20 hover:after:bg-black"
          >
            VIEW ALL ARTWORKS
            <span className="ml-2 transition-transform hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

