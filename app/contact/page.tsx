"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-subtle-cream text-foreground">
      <Navbar />

      <main className="pt-20">
        <section className="h-[40vh] min-h-[300px] bg-gray-50 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-0 opacity-50"></div>

          <div className="text-center z-1 px-6">
            <h1 className="text-4xl md:text-5xl font-extralight tracking-widest mb-6 text-gray-800">CONTACT</h1>
            <p className="text-base md:text-lg font-light tracking-wider text-gray-600 max-w-[600px] mx-auto">
              Get in touch for inquiries, commissions, or collaborations
            </p>
          </div>
        </section>

        <section className="py-16 bg-subtle-cream border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-[60px] h-px bg-foreground mx-auto mb-8"></div>
              <h2 className="text-2xl md:text-3xl font-extralight tracking-wider mb-8 leading-relaxed">
                Let's Create Something Together
              </h2>
              <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                Whether you're interested in commissioning a piece of art, discussing an architectural project, or
                simply want to connect, I'd love to hear from you. Your vision combined with my expertise can lead to
                extraordinary results.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-pattern-dots">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-[1fr_2fr] gap-16">
              <div className="flex flex-col gap-12">
                <h2 className="text-xl font-extralight tracking-widest uppercase relative inline-block after:content-[''] after:absolute after:bottom-[-15px] after:left-0 after:w-[50px] after:h-px after:bg-gray-300">
                  GET IN TOUCH
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-6">
                  <a
                    href="mailto:contact@tatianafonti.com"
                    className="bg-white p-6 rounded-lg shadow-sm flex gap-6 cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:shadow-md"
                  >
                    <Mail className="text-gray-400 mt-1" />
                    <div>
                      <h3 className="text-base font-normal tracking-wide mb-3">Email</h3>
                      <span className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                        contact@tatianafonti.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/5493576446466"
                    className="bg-white p-6 rounded-lg shadow-sm flex gap-6 cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:shadow-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="text-gray-400 mt-1" />
                    <div>
                      <h3 className="text-base font-normal tracking-wide mb-3">WhatsApp</h3>
                      <span className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                        +54 9 3576 44-6466
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/tatifontiarte/"
                    className="bg-white p-6 rounded-lg shadow-sm flex gap-6 cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:shadow-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="text-gray-400 mt-1" />
                    <div>
                      <h3 className="text-base font-normal tracking-wide mb-3">Instagram</h3>
                      <span className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                        @tatifontiarte
                      </span>
                    </div>
                  </a>

                  <div className="bg-white p-6 rounded-lg shadow-sm flex gap-6">
                    <MapPin className="text-gray-400 mt-1" />
                    <div>
                      <h3 className="text-base font-normal tracking-wide mb-3">Location</h3>
                      <p className="text-sm text-gray-500">Arroyito, Argentina</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
                <Contact />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

