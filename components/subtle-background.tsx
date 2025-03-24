"use client"
import Image from "next/image"

interface SubtleBackgroundProps {
  blur?: boolean
  opacity?: number
  imageUrl?: string
}

export default function SubtleBackground({
  blur = true,
  opacity = 0.15,
  imageUrl = "/placeholder.svg?height=1080&width=1920",
}: SubtleBackgroundProps) {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden -z-10">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          filter: blur ? `blur(8px)` : "none",
          opacity: opacity,
        }}
      >
        <Image src={imageUrl || "/placeholder.svg"} alt="" fill className="object-cover" aria-hidden="true" priority />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/70"></div>
    </div>
  )
}

