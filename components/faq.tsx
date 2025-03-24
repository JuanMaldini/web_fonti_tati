"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { faqItems } from "@/data/faq"

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-subtle-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-black/15"></div>
            <h2 className="mx-6 text-xl font-extralight tracking-widest uppercase">FAQ</h2>
            <div className="h-px w-16 bg-black/15"></div>
          </div>
          <p className="text-gray-600 font-light max-w-xl mx-auto">
            Find answers to common questions about my work, process, and services
          </p>
        </div>

        <div className="space-y-0">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="flex justify-between items-center w-full text-left py-6 focus:outline-none group"
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-base font-light tracking-wide pr-8">{item.question}</h3>
                <div className="text-gray-400 group-hover:text-gray-800 transition-colors">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
                }`}
              >
                <p className="text-gray-600 font-light leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

