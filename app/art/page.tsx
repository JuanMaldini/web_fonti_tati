"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import GalleryModal from "@/components/gallery-modal"
import { galleryItems } from "@/data/gallery"
import type { GalleryItem } from "@/data/gallery"
import Image from "next/image"

export default function ArtPage() {
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  const openGalleryModal = (item: GalleryItem) => {
    setSelectedGallery(item)
  }

  const closeGalleryModal = () => {
    setSelectedGallery(null)
  }

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="pt-20">
        <section className="h-[40vh] min-h-[300px] bg-gray-50 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-0 opacity-50"></div>

          <div className="text-center z-1 px-6">
            <h1 className="text-4xl md:text-5xl font-extralight tracking-widest mb-6 text-gray-800">ART COLLECTION</h1>
            <p className="text-base md:text-lg font-light tracking-wider text-gray-600 max-w-[600px] mx-auto">
              Exploring spatial relationships through various mediums
            </p>
          </div>
        </section>

        <section className="py-24 bg-subtle-cream border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-[60px] h-px bg-foreground mx-auto mb-8"></div>
              <h2 className="text-2xl md:text-3xl font-extralight tracking-wider mb-8 leading-relaxed">
                Where Architecture Meets Artistic Expression
              </h2>
              <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                My artwork explores the dialogue between built environments and artistic freedom. Each piece reflects my
                architectural background while embracing the expressive possibilities of various mediums. From paintings
                to sketches, these works invite viewers to experience space, form, and light through a different lens.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <button
                className={`py-3 px-8 text-sm tracking-wider uppercase border ${
                  activeCategory === "all"
                    ? "bg-gray-800 text-white border-gray-800"
                    : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-800 hover:text-gray-800"
                } transition-all rounded-sm relative ${
                  activeCategory === "all"
                    ? "after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-gray-800"
                    : ""
                }`}
                onClick={() => setActiveCategory("all")}
              >
                All Works
              </button>
              <button
                className={`py-3 px-8 text-sm tracking-wider uppercase border ${
                  activeCategory === "painting"
                    ? "bg-gray-800 text-white border-gray-800"
                    : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-800 hover:text-gray-800"
                } transition-all rounded-sm relative ${
                  activeCategory === "painting"
                    ? "after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-gray-800"
                    : ""
                }`}
                onClick={() => setActiveCategory("painting")}
              >
                Paintings
              </button>
              <button
                className={`py-3 px-8 text-sm tracking-wider uppercase border ${
                  activeCategory === "drawing"
                    ? "bg-gray-800 text-white border-gray-800"
                    : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-800 hover:text-gray-800"
                } transition-all rounded-sm relative ${
                  activeCategory === "drawing"
                    ? "after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-gray-800"
                    : ""
                }`}
                onClick={() => setActiveCategory("drawing")}
              >
                Drawings
              </button>
              <button
                className={`py-3 px-8 text-sm tracking-wider uppercase border ${
                  activeCategory === "sketch"
                    ? "bg-gray-800 text-white border-gray-800"
                    : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-800 hover:text-gray-800"
                } transition-all rounded-sm relative ${
                  activeCategory === "sketch"
                    ? "after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-gray-800"
                    : ""
                }`}
                onClick={() => setActiveCategory("sketch")}
              >
                Sketches
              </button>
            </div>

            {/* Modificado para mostrar 1 elemento en móvil vertical, 2 en horizontal/tablet, 3 en desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:shadow-md"
                  onClick={() => openGalleryModal(item)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative aspect-square overflow-hidden border border-gray-100 rounded-md">
                    <Image
                      src={item.imageUrl || "/placeholder.svg?height=800&width=800"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                          <span>VIEW DETAILS</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="py-6">
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
          </div>
        </section>
      </main>

      <Footer />

      {selectedGallery && <GalleryModal item={selectedGallery} onClose={closeGalleryModal} />}
    </div>
  )
}

