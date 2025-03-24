"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectModal from "@/components/project-modal"
import { projects } from "@/data/projects"
import type { Project } from "@/data/projects"
import Image from "next/image"

export default function ArchitecturePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />

      <main className="pt-20">
        <section className="h-[40vh] min-h-[300px] bg-gray-50 flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-0 opacity-50"></div>

          <div className="text-center z-1 px-6">
            <h1 className="text-4xl md:text-5xl font-extralight tracking-widest mb-6 text-gray-800">
              ARCHITECTURE PROJECTS
            </h1>
            <p className="text-base md:text-lg font-light tracking-wider text-gray-600 max-w-[600px] mx-auto">
              Sustainable design with harmonious integration
            </p>
          </div>
        </section>

        <section className="py-24 bg-subtle-cream border-b border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-[60px] h-px bg-foreground mx-auto mb-8"></div>
              <h2 className="text-2xl md:text-3xl font-extralight tracking-wider mb-8 leading-relaxed">
                Creating Spaces That Inspire and Endure
              </h2>
              <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                My architectural practice is founded on the belief that thoughtful design can transform how we
                experience and interact with our surroundings. Each project represents a unique opportunity to create
                spaces that are not only aesthetically compelling but also environmentally responsible and functionally
                sophisticated.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button
                className={`py-3 px-6 md:px-8 text-sm tracking-wider uppercase border ${
                  activeCategory === "all"
                    ? "bg-gray-800 text-white border-gray-800"
                    : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-800 hover:text-gray-800"
                } transition-all rounded-sm relative ${
                  activeCategory === "all"
                    ? "after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-gray-800"
                    : ""
                }`}
                onClick={() => setActiveCategory("all")}
              >
                All Projects
              </button>
              <button
                className={`py-3 px-6 md:px-8 text-sm tracking-wider uppercase border ${
                  activeCategory === "architecture"
                    ? "bg-gray-800 text-white border-gray-800"
                    : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-800 hover:text-gray-800"
                } transition-all rounded-sm relative ${
                  activeCategory === "architecture"
                    ? "after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-gray-800"
                    : ""
                }`}
                onClick={() => setActiveCategory("architecture")}
              >
                Architecture
              </button>
              <button
                className={`py-3 px-6 md:px-8 text-sm tracking-wider uppercase border ${
                  activeCategory === "interior"
                    ? "bg-gray-800 text-white border-gray-800"
                    : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-800 hover:text-gray-800"
                } transition-all rounded-sm relative ${
                  activeCategory === "interior"
                    ? "after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-gray-800"
                    : ""
                }`}
                onClick={() => setActiveCategory("interior")}
              >
                Interior
              </button>
              <button
                className={`py-3 px-6 md:px-8 text-sm tracking-wider uppercase border ${
                  activeCategory === "urban"
                    ? "bg-gray-800 text-white border-gray-800"
                    : "bg-transparent text-gray-500 border-gray-200 hover:border-gray-800 hover:text-gray-800"
                } transition-all rounded-sm relative ${
                  activeCategory === "urban"
                    ? "after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-gray-800"
                    : ""
                }`}
                onClick={() => setActiveCategory("urban")}
              >
                Urban
              </button>
            </div>

            {/* Modificado para mostrar 2 elementos en móvil, 3 en desktop, justificado a la izquierda */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8 lg:gap-12 justify-items-start">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:shadow-md w-full"
                  onClick={() => openProjectModal(project)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative aspect-video overflow-hidden border border-gray-100 rounded-md mb-4 md:mb-6">
                    <Image
                      src={project.imageUrl || "/placeholder.svg?height=720&width=1280"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                    <div
                      className={`absolute inset-0 bg-black transition-opacity duration-500 ${hoveredIndex === index ? "opacity-60" : "opacity-20"}`}
                    />

                    {hoveredIndex === index && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 text-center text-white animate-fade-in">
                        <h3 className="text-base md:text-xl font-light tracking-wider mb-2 md:mb-3">{project.title}</h3>
                        <p className="text-xs md:text-sm text-gray-200 mb-3 md:mb-6">
                          {project.year} · {project.location}
                        </p>
                        <div className="border border-white/30 px-4 py-2 md:px-6 md:py-3 text-xs tracking-wider uppercase hover:bg-white/10 transition-colors">
                          <span>VIEW PROJECT</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pb-4 md:pb-6 border-b border-gray-100">
                    <h3 className="text-base md:text-xl font-extralight tracking-wider mb-2 md:mb-4 line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <p className="text-xs md:text-sm text-gray-500">
                        {project.year} · {project.location}
                      </p>
                      <p className="text-xs text-gray-500 px-2 py-1 md:px-3 md:py-1 border border-gray-200 rounded-sm capitalize">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedProject && <ProjectModal project={selectedProject} onClose={closeProjectModal} />}
    </div>
  )
}

