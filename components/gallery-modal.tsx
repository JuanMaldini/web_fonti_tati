"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X, Mail, MessageSquare, Maximize2 } from "lucide-react"
import type { GalleryItem } from "@/data/gallery"

interface GalleryModalProps {
  item: GalleryItem
  onClose: () => void
}

export default function GalleryModal({ item, onClose }: GalleryModalProps) {
  const [isVisible, setIsVisible] = useState(false)
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

  const enlargeImage = () => {
    setEnlargedImage(item.imageUrl)
  }

  const closeEnlargedImage = () => {
    setEnlargedImage(null)
  }

  const handleEmailInquiry = () => {
    const subject = encodeURIComponent(`Inquiry about artwork: ${item.title}`)
    const body = encodeURIComponent(
      `Hello Tatiana,

I'm interested in your artwork "${item.title}" (${item.year}, ${item.medium}).

Please provide more information about availability and pricing.

Thank you.`,
    )
    window.open(`mailto:contact@tatianafonti.com?subject=${subject}&body=${body}`)
  }

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hello Tatiana, I'm interested in your artwork "${item.title}" (${item.year}, ${item.medium}). Could you provide more information about availability and pricing?`,
    )
    window.open(`https://wa.me/5493576446466?text=${message}`)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/0 p-10 transition-colors ${isVisible ? "bg-black/95" : ""} opacity-0 ${isVisible ? "opacity-100" : ""}`}
    >
      <div className="absolute inset-0 z-0" onClick={handleClose} />

      <div
        className={`relative z-10 w-full max-w-3xl bg-gray-50 overflow-hidden max-h-[90vh] flex flex-col rounded-md transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} transition-all duration-300`}
      >
        <button
          className="absolute right-5 top-5 z-20 h-10 w-10 flex items-center justify-center text-white/70 hover:text-white transition-colors bg-black/50 rounded-full hover:scale-110 transition-transform"
          onClick={handleClose}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative flex justify-center items-center bg-gray-100">
          <Image
            src={item.imageUrl || "/placeholder.svg?height=800&width=800"}
            alt={item.title}
            width={800}
            height={800}
            className="w-full h-auto object-contain max-h-[60vh]"
          />
          <button
            className="absolute right-5 bottom-5 z-20 h-10 w-10 flex items-center justify-center text-white/70 hover:text-white bg-black/50 rounded-full hover:scale-[1.04] transition-all"
            onClick={enlargeImage}
            aria-label="Enlarge image"
          >
            <Maximize2 className="h-5 w-5" />
          </button>
        </div>

        <div className="p-8 md:p-10 text-gray-800">
          <h2 className="text-xl font-extralight tracking-widest mb-4">{item.title}</h2>
          <div className="flex flex-wrap gap-8 text-sm text-gray-500 tracking-wide mb-6">
            <p>{item.year}</p>
            <p>{item.medium}</p>
            <p className="capitalize">{item.category}</p>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed font-light mb-8">{item.description}</p>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Price</p>
            <p className="text-base font-light tracking-wide mb-6">Contact for price</p>

            <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
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
              src={enlargedImage || "/placeholder.svg?height=1080&width=1080"}
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
          </div>
        </div>
      )}
    </div>
  )
}

