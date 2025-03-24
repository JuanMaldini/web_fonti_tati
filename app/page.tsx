"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Introduction from "@/components/introduction"
import Gallery from "@/components/gallery"
import FeaturedProjects from "@/components/featured-projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ProjectModal from "@/components/project-modal"
import GalleryModal from "@/components/gallery-modal"
import { projects } from "@/data/projects"
import { galleryItems } from "@/data/gallery"
import type { Project } from "@/data/projects"
import type { GalleryItem } from "@/data/gallery"

// Import components
import ArchitectPresentation from "@/components/architect-presentation"
import MyJourney from "@/components/my-journey"
import Faq from "@/components/faq"
import ImageCarousel from "@/components/image-carousel"
import ArtistWords from "@/components/artist-words"
import SubtleBackground from "@/components/subtle-background"

// Import carousel declarations
import { homeCarousels } from "@/data/carousels"

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null)

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  const openGalleryModal = (item: GalleryItem) => {
    setSelectedGallery(item)
  }

  const closeGalleryModal = () => {
    setSelectedGallery(null)
  }

  // Obtener declaraciones de carruseles desde el archivo de datos
  const structuralVisionCarousel = homeCarousels.structuralVision
  const minimalistApproachCarousel = homeCarousels.minimalistApproach

  return (
    <div className="flex min-h-screen flex-col relative">
      {/* Fondo sutil con imagen desenfocada */}
      <SubtleBackground blur={true} opacity={0.15} />

      <Navbar />
      <Hero />
      <Introduction />
      <ArchitectPresentation />
      <ImageCarousel
        images={structuralVisionCarousel.images}
        fullHeight={structuralVisionCarousel.fullHeight}
        title={structuralVisionCarousel.title}
        subtitle={structuralVisionCarousel.subtitle}
        variant={structuralVisionCarousel.variant}
        indicatorStyle={structuralVisionCarousel.indicatorStyle}
      />
      <Gallery items={galleryItems} openModal={openGalleryModal} />
      <ArtistWords />
      <FeaturedProjects projects={projects} openModal={openProjectModal} />
      <ImageCarousel
        images={minimalistApproachCarousel.images}
        fullHeight={minimalistApproachCarousel.fullHeight}
        title={minimalistApproachCarousel.title}
        subtitle={minimalistApproachCarousel.subtitle}
        variant={minimalistApproachCarousel.variant}
        indicatorStyle={minimalistApproachCarousel.indicatorStyle}
      />
      <MyJourney />
      <Faq />
      <Contact />
      <Footer />

      {/* Modals */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeProjectModal} />}
      {selectedGallery && <GalleryModal item={selectedGallery} onClose={closeGalleryModal} />}
    </div>
  )
}

