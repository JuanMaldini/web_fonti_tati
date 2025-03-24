"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentPath, setCurrentPath] = useState("")

  // Detectar la ruta actual
  useEffect(() => {
    setCurrentPath(window.location.pathname)

    // Actualizar la ruta si cambia (por ejemplo, al navegar)
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener("popstate", handleRouteChange)
    return () => window.removeEventListener("popstate", handleRouteChange)
  }, [])

  // Detectar scroll para cambiar el estilo de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Manejar el scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT ME" },
    { href: "/art", label: "ART" },
    { href: "/architecture", label: "ARCHITECTURE" },
    { href: "/contact", label: "CONTACT" },
  ]

  // Vamos a simplificar y usar la misma clase para PC y móvil, solo cambiando el ancho del contenedor

  // Reemplazar la definición de las clases linkClass, desktopLinkClass y mobileLinkClass con:
  const linkClass = (href: string) => `
    text-base font-light tracking-wider relative py-2 transition-colors
    ${
      currentPath === href
        ? "text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-black"
        : "text-gray-600 hover:text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300"
    }
  `

  // Clase para los enlaces de navegación en escritorio
  const desktopLinkClass = (href: string) => `
    text-base font-light tracking-wider relative py-2 transition-colors
    ${
      currentPath === href
        ? "text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-black"
        : "text-gray-600 hover:text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black hover:after:w-full after:transition-all after:duration-300"
    }
  `

  // Clase para los enlaces de navegación en móvil
  const mobileLinkClass = (href: string) => `
    text-base font-light tracking-wider relative py-5 transition-colors w-full text-center
    ${currentPath === href ? "text-black" : "text-gray-600 hover:text-black"}
  `

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-white/90"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-50" onClick={closeMenu}>
          <div className="bg-gray-100 p-1.5 rounded">
            <div className="w-8 h-8 bg-gray-200 rounded"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extralight tracking-widest">TATIANA</span>
            <span className="text-lg font-extralight tracking-widest">FONTI</span>
          </div>
        </Link>

        {/* Menú de escritorio */}
        <nav className="hidden md:flex gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={desktopLinkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botón de menú móvil */}
        <button
          className="md:hidden p-2 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-800 z-50 transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menú móvil con un único fondo blanco */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-24 md:hidden">
          <div className="flex flex-col items-center w-full px-4 bg-white">
            {navLinks.map((link) => (
              <div key={link.href} className="py-3 flex justify-center">
                <Link href={link.href} className={linkClass(link.href)} onClick={closeMenu}>
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

