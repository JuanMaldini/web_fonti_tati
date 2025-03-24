export interface GalleryItem {
  id: number
  title: string
  year: string
  medium: string
  description: string
  imageUrl: string
  category: "painting" | "drawing" | "sketch"
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "URBAN FRAGMENTS I",
    year: "2023",
    medium: "Acrylic on canvas",
    description:
      "An abstract interpretation of urban landscapes, exploring the relationship between architectural forms and negative space. The composition balances geometric precision with expressive brushwork.",
    imageUrl: "/placeholder.svg?height=800&width=800",
    category: "painting",
  },
  {
    id: 2,
    title: "STRUCTURAL STUDY",
    year: "2022",
    medium: "Charcoal on paper",
    description:
      "A detailed drawing examining the interplay of light and shadow on architectural structures. The work explores the tension between solidity and transparency in built forms.",
    imageUrl: "/placeholder.svg?height=800&width=800",
    category: "drawing",
  },
  {
    id: 3,
    title: "SPATIAL COMPOSITION",
    year: "2023",
    medium: "Mixed media on canvas",
    description:
      "A mixed media exploration of spatial relationships, combining architectural elements with abstract forms. The layered composition creates a sense of depth and movement.",
    imageUrl: "/placeholder.svg?height=800&width=800",
    category: "painting",
  },
  {
    id: 4,
    title: "FACADE VARIATIONS",
    year: "2022",
    medium: "Ink on paper",
    description:
      "A series of detailed ink drawings exploring variations on architectural facades. The work examines patterns, rhythms, and the modulation of light through different surface treatments.",
    imageUrl: "/placeholder.svg?height=800&width=800",
    category: "drawing",
  },
  {
    id: 5,
    title: "LIGHT STUDIES",
    year: "2021",
    medium: "Watercolor on paper",
    description:
      "Delicate watercolor studies examining how light interacts with architectural spaces throughout the day. The series captures the ephemeral quality of natural light and its transformative effect on built environments.",
    imageUrl: "/placeholder.svg?height=800&width=800",
    category: "painting",
  },
  {
    id: 6,
    title: "CONCEPTUAL SKETCH I",
    year: "2023",
    medium: "Graphite on paper",
    description:
      "A preliminary sketch exploring conceptual ideas for an architectural project. The drawing captures the initial thought process and spatial relationships that would later inform a built work.",
    imageUrl: "/placeholder.svg?height=800&width=800",
    category: "sketch",
  },
]

