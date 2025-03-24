"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import ArtistExpression from "@/components/artist-expression"
import MyJourney from "@/components/my-journey"

export default function AboutPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="pt-20">
        <section className="h-[40vh] min-h-[300px] bg-gray-50 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-0 opacity-50"></div>

          <div className="text-center z-1 px-6">
            <h1 className="text-4xl md:text-5xl font-extralight tracking-widest mb-6 text-gray-800">ABOUT ME</h1>
            <p className="text-base md:text-lg font-light tracking-wider text-gray-600 max-w-[600px] mx-auto">
              The intersection of architecture and artistic expression
            </p>
          </div>
        </section>

        <section className="py-24 bg-subtle-cream border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-[60px] h-px bg-foreground mx-auto mb-8"></div>
              <h2 className="text-2xl md:text-3xl font-extralight tracking-wider mb-8 leading-relaxed">
                Blending Structural Precision with Creative Vision
              </h2>
              <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                As an architect and artist, I explore the delicate balance between form and function, creating spaces
                and artworks that evoke emotion while serving their intended purpose. My approach combines technical
                expertise with artistic sensibility, resulting in designs that are both aesthetically pleasing and
                practically sound.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-20">
              <div className="relative aspect-[3/4] overflow-hidden border border-gray-100 rounded-md">
                <Image
                  src="/placeholder.svg?height=1200&width=900"
                  alt="Tatiana Fonti"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-extralight tracking-widest mb-3 text-gray-800">TATIANA FONTI</h2>
                <p className="text-base font-light tracking-wider text-gray-500 mb-10">Architect & Artist</p>

                <div className="flex flex-col gap-8 text-gray-700 font-light leading-relaxed">
                  <p>
                    I'm an architect and artist passionate about exploring the intersection of structural design and
                    artistic expression. My work spans from architectural projects to paintings and detailed drawings.
                  </p>
                  <p>
                    With a background in architecture, I bring a unique perspective to my artistic creations, focusing
                    on spatial relationships, light, and form. Each piece reflects my commitment to blending technical
                    precision with creative freedom.
                  </p>
                  <p>
                    My inspiration comes from urban landscapes, natural environments, and the interplay between built
                    and organic structures. I'm constantly exploring new techniques and mediums to expand my artistic
                    vocabulary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MyJourney />
        <ArtistExpression />
      </main>

      <Footer />
    </div>
  )
}

