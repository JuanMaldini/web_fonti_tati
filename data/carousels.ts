import type { CarouselImage } from "./carousel-images"

// Interfaz para la declaración completa de un carrusel
export interface CarouselDeclaration {
  id: string
  title?: string
  subtitle?: string
  fullHeight?: boolean
  aspectRatio?: string
  variant?: "light" | "dark"
  indicatorStyle?: "dots" | "bars"
  images: CarouselImage[]
}

// Declaraciones de carruseles para la página Home
export const homeCarousels: Record<string, CarouselDeclaration> = {
  structuralVision: {
    id: "structural-vision",
    title: "STRUCTURAL VISION",
    subtitle: "Where form meets function in architectural design",
    fullHeight: true,
    variant: "dark",
    indicatorStyle: "bars",
    images: [
      {
        src: "/placeholder.svg?height=1080&width=1920",
        alt: "Structural vision example 1",
      },
      {
        src: "/placeholder.svg?height=1080&width=1920",
        alt: "Structural vision example 2",
      },
      {
        src: "/placeholder.svg?height=1080&width=1920",
        alt: "Structural vision example 3",
      },
      {
        src: "/placeholder.svg?height=1080&width=1920",
        alt: "Structural vision example 4",
      },
      {
        src: "/placeholder.svg?height=1080&width=1920",
        alt: "Structural vision example 5",
      },
    ],
  },
  minimalistApproach: {
    id: "minimalist-approach",
    title: "MINIMALIST APPROACH",
    subtitle: "Simplicity and elegance in every detail",
    fullHeight: true,
    variant: "dark",
    indicatorStyle: "bars",
    images: [
      {
        src: "/placeholder.svg?height=1080&width=1920",
        alt: "Minimalist design example 1",
      },
      {
        src: "/placeholder.svg?height=1080&width=1920",
        alt: "Minimalist design example 2",
      },
      {
        src: "/placeholder.svg?height=1080&width=1920",
        alt: "Minimalist design example 3",
      },
    ],
  },
}

// Declaraciones de carruseles para la página About
export const aboutCarousels: Record<string, CarouselDeclaration> = {
  artistExpression: {
    id: "artist-expression",
    aspectRatio: "aspect-square",
    indicatorStyle: "bars",
    images: [
      {
        src: "/placeholder.svg?height=800&width=800",
        alt: "Tatiana Fonti in studio",
      },
      {
        src: "/placeholder.svg?height=800&width=800",
        alt: "Tatiana Fonti artwork process",
      },
      {
        src: "/placeholder.svg?height=800&width=800",
        alt: "Tatiana Fonti exhibition",
      },
      {
        src: "/placeholder.svg?height=800&width=800",
        alt: "Tatiana Fonti sketching",
      },
      {
        src: "/placeholder.svg?height=800&width=800",
        alt: "Tatiana Fonti painting",
      },
      {
        src: "/placeholder.svg?height=800&width=800",
        alt: "Tatiana Fonti architectural model",
      },
    ],
  },
  journey: {
    id: "journey",
    aspectRatio: "aspect-[3/4]",
    indicatorStyle: "bars",
    images: [
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Tatiana Fonti at work",
      },
      {
        src: "/placeholder.svg?height=800&width=600",
        alt: "Tatiana Fonti studio",
      },
    ],
  },
}

// Función para obtener una declaración de carrusel específica
export function getCarousel(page: "home" | "about", id: string): CarouselDeclaration | undefined {
  const carousels = page === "home" ? homeCarousels : aboutCarousels
  return carousels[id]
}

