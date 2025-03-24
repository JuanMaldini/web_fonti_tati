"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Maximize2, Mail, MessageSquare } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null)

  useEffect(() => {
    // Disable scrolling on body when modal is open
    document.body.style.overflow = "hidden"

    // Handle escape key press
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (enlargedImage) {
          setEnlargedImage(null)
        } else {
          handleClose()
        }
      }
    }

    window.addEventListener("keydown", handleEscapeKey)

    // Animate in
    setTimeout(() => {
      setIsVisible(true)
    }, 10)

    return () => {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = "auto"
      window.removeEventListener("keydown", handleEscapeKey)
    }
  }, [enlargedImage])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? project.images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length)
  }

  const enlargeImage = (url: string) => {
    setEnlargedImage(url)
  }

  const closeEnlargedImage = () => {
    setEnlargedImage(null)
  }

  const handleEmailInquiry = () => {
    const subject = encodeURIComponent(`Inquiry about project: ${project.title}`)
    const body = encodeURIComponent(
      `Hello Tatiana,

I'm interested in your project "${project.title}" (${project.year}, ${project.location}).

Please provide more information about this project and your services.

Thank you.`,
    )
    window.open(`mailto:contact@tatianafonti.com?subject=${subject}&body=${body}`)
  }

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hello Tatiana, I'm interested in your project "${project.title}" (${project.year}, ${project.location}). Could you provide more information about this project and your services?`,
    )
    window.open(`https://wa.me/5493576446466?text=${message}`)
  }

  const currentImage = project.images[currentImageIndex]

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/0 p-10 transition-colors ${isVisible ? "bg-black/95" : ""} opacity-0 ${isVisible ? "opacity-100" : ""}`}
    >
      <div className="absolute inset-0 z-0" onClick={handleClose} />

      <div
        className={`relative z-10 w-full max-w-4xl bg-gray-50 overflow-hidden max-h-[90vh] flex flex-col rounded-md transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} transition-all duration-300`}
      >
        <button
          className="absolute right-5 top-5 z-20 h-10 w-10 flex items-center justify-center text-white/70 hover:text-white transition-colors bg-black/50 rounded-full hover:scale-110 transition-transform"
          onClick={handleClose}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-video w-full">
          {project.images.map((image, idx) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                idx === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.url || "/placeholder.svg?height=720&width=1280"}
                alt={image.alt || project.title}
                fill
                className="object-cover"
              />
            </div>
          ))}

          <button
            className="absolute right-5 bottom-5 z-20 h-10 w-10 flex items-center justify-center text-white/70 hover:text-white bg-black/50 rounded-full hover:scale-110 transition-transform"
            onClick={() => enlargeImage(currentImage.url)}
            aria-label="Enlarge image"
          >
            <Maximize2 className="h-5 w-5" />
          </button>

          {project.images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 text-gray-800 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 text-gray-800 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
                onClick={goToNext}
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute left-5 bottom-5 bg-black/60 text-white text-xs py-1.5 px-4 rounded-full">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>

        <div className="p-8 md:p-14 overflow-y-auto flex-1 relative after:absolute after:top-0 after:left-14 after:right-14 after:h-px after:bg-gray-200">
          <div className="mb-10">
            <h2 className="text-xl md:text-2xl font-extralight tracking-widest mb-5 text-gray-800">{project.title}</h2>
            <div className="flex flex-wrap gap-8 text-sm text-gray-500 tracking-wide">
              <p>{project.year}</p>
              <p>{project.location}</p>
              <p className="capitalize">{project.category}</p>
            </div>
          </div>

          <div className="text-gray-700 text-sm md:text-base leading-relaxed font-light mb-10">
            <p>{project.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              className="flex items-center justify-center gap-3 py-3.5 px-7 border border-gray-800 text-gray-800 text-xs tracking-wider uppercase hover:bg-gray-800 hover:text-white hover:scale-[1.04] hover:shadow-md transition-all rounded-md"
              onClick={handleEmailInquiry}
            >
              <Mail className="h-4 w-4" />
              <span>INQUIRE VIA EMAIL</span>
            </button>

            <button
              className="flex items-center justify-center gap-3 py-3.5 px-7 bg-[#25d366] border border-[#25d366] text-white text-xs tracking-wider uppercase hover:bg-[#128c7e] hover:border-[#128c7e] hover:scale-[1.04] hover:shadow-md transition-all rounded-md"
              onClick={handleWhatsAppInquiry}
            >
              <MessageSquare className="h-4 w-4" />
              <span>INQUIRE VIA WHATSAPP</span>
            </button>
          </div>

          {project.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto py-3 mt-10">
              {project.images.map((image, index) => (
                <div
                  key={image.id}
                  className={`w-20 h-16 relative cursor-pointer opacity-60 hover:opacity-100 transition-all hover:scale-105 ${index === currentImageIndex ? "opacity-100 border-2 border-gray-800" : ""}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image.url || "/placeholder.svg?height=160&width=200"}
                    alt={image.alt}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Enlarged image modal */}
      {enlargedImage && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/98 animate-fade-in"
          onClick={closeEnlargedImage}
        >
          <div className="relative w-[90vw] h-[90vh] max-w-[1600px]">
            <Image
              src={enlargedImage || "/placeholder.svg?height=1080&width=1920"}
              alt="Enlarged view"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-5 top-5 z-70 h-12 w-12 flex items-center justify-center text-white/70 hover:text-white bg-black/50 rounded-full hover:scale-[1.04] transition-transform"
              onClick={closeEnlargedImage}
            >
              <X className="h-6 w-6" />
            </button>

            {project.images.length > 1 && (
              <>
                <button
                  className="absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/30 text-white flex items-center justify-center hover:scale-[1.04] transition-transform"
                  onClick={(e) => {
                    e.stopPropagation()
                    const prevIndex = currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1
                    setCurrentImageIndex(prevIndex)
                    setEnlargedImage(project.images[prevIndex].url)
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  className="absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/30 text-white flex items-center justify-center hover:scale-[1.04] transition-transform"
                  onClick={(e) => {
                    e.stopPropagation()
                    const nextIndex = (currentImageIndex + 1) % project.images.length
                    setCurrentImageIndex(nextIndex)
                    setEnlargedImage(project.images[nextIndex].url)
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

