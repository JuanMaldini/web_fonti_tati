"use client"

import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/data/projects"

interface FeaturedProjectsProps {
  projects: Project[]
  openModal: (project: Project) => void
}

export default function FeaturedProjects({ projects, openModal }: FeaturedProjectsProps) {
  // Solo mostrar proyectos de arquitectura
  const architectureProjects = projects.filter((project) => project.category === "architecture").slice(0, 4)

  return (
    <section className="py-20 bg-subtle-blue bg-pattern-dots">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center mb-16 opacity-0 translate-y-8 animate-fade-in">
          <div className="h-px w-16 bg-black/15"></div>
          <h2 className="mx-6 text-xl font-extralight tracking-widest uppercase">ARCHITECTURE</h2>
          <div className="h-px w-16 bg-black/15"></div>
        </div>

        {/* Modificado para mostrar 2 elementos en móvil, 3 en desktop, justificado a la izquierda */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8 justify-items-start">
          {architectureProjects.map((project, index) => (
            <div
              key={`project-${index}`}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:scale-[1.04] hover:shadow-md transition-all duration-300 cursor-pointer opacity-0 translate-y-8 animate-fade-in w-full"
              onClick={() => openModal(project)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.imageUrl || "/placeholder.svg?height=720&width=1280"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
              </div>

              <div className="p-4 md:p-6">
                <div className="text-xs text-gray-500 mb-2 flex flex-wrap items-center">
                  <span>{project.year}</span>
                  <span className="mx-2 md:mx-3">·</span>
                  <span className="truncate">{project.location}</span>
                </div>
                <h3 className="text-base md:text-xl font-extralight tracking-wider mb-3 md:mb-5 line-clamp-2 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-px after:bg-black/10 group-hover:after:w-16 after:transition-all">
                  {project.title}
                </h3>
                <div className="text-xs tracking-wider uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all flex items-center mt-4 md:mt-0">
                  <span>VIEW PROJECT</span>
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center opacity-0 translate-y-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Link
            href="/architecture"
            className="text-sm tracking-wider uppercase pb-2 relative inline-flex items-center transition-all after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-black/20 hover:after:bg-black"
          >
            VIEW ALL PROJECTS
            <span className="ml-2 transition-transform hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

