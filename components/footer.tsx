import Link from "next/link"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-16">
          <div className="max-w-xs">
            <Link href="/" className="inline-block">
              <div className="flex flex-col">
                <span className="text-lg font-light tracking-widest">TATIANA</span>
                <span className="text-lg font-light tracking-widest">FONTI</span>
              </div>
            </Link>
            <p className="text-sm text-gray-500 tracking-wide mt-3">Architecture & Artistic Expression</p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <div>
              <h3 className="text-sm font-normal tracking-wider uppercase mb-5">Navigation</h3>
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                  About
                </Link>
                <Link href="/art" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                  Art
                </Link>
                <Link href="/architecture" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                  Architecture
                </Link>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-sm font-normal tracking-wider uppercase mb-5">Contact</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:contact@tatianafonti.com"
                  className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <Mail size={16} className="text-gray-400" />
                  <span>contact@tatianafonti.com</span>
                </a>
                <a
                  href="https://wa.me/5493576446466"
                  className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone size={16} className="text-gray-400" />
                  <span>+54 9 3576 446466</span>
                </a>
                <a
                  href="https://www.instagram.com/tatifontiarte/"
                  className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={16} className="text-gray-400" />
                  <span>@tatifontiarte</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <MapPin size={16} className="text-gray-400" />
                  <span>Arroyito, Argentina</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {currentYear} TATIANA FONTI. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="https://www.instagram.com/tatifontiarte/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-800 transition-colors hover:scale-[1.04] transition-transform"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="mailto:contact@tatianafonti.com"
              className="text-gray-400 hover:text-gray-800 transition-colors hover:scale-[1.04] transition-transform"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://wa.me/5493576446466"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-800 transition-colors hover:scale-[1.04] transition-transform"
              aria-label="WhatsApp"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

