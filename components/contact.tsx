"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-extralight tracking-widest uppercase text-center mb-12">CONTACT</h2>

          {submitStatus === "success" && (
            <div className="p-5 mb-10 text-center text-sm tracking-wide border border-green-500/50 bg-green-500/5 text-green-500 rounded-md">
              Your message has been sent successfully. I'll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-5 mb-10 text-center text-sm tracking-wide border border-red-500/50 bg-red-500/5 text-red-500 rounded-md">
              There was an error sending your message. Please try again or contact me directly.
            </div>
          )}

          <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-xs uppercase tracking-wide text-gray-500">
                  Name
                </label>
                <input
                  id="name"
                  className="w-full border border-gray-200 rounded-md bg-gray-50 p-4 text-gray-800 transition-colors focus:border-gray-800 focus:outline-none"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="text-xs uppercase tracking-wide text-gray-500">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-gray-200 rounded-md bg-gray-50 p-4 text-gray-800 transition-colors focus:border-gray-800 focus:outline-none"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="message" className="text-xs uppercase tracking-wide text-gray-500">
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-200 rounded-md bg-gray-50 p-4 h-32 text-gray-800 transition-colors focus:border-gray-800 focus:outline-none resize-none"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full border border-gray-800 rounded-md p-4 text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:bg-gray-800 hover:text-white hover:scale-[1.04] hover:shadow-md mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">SENDING...</span>
              ) : (
                <>
                  SEND MESSAGE
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

