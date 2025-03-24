export interface ProjectImage {
  id: number
  url: string
  alt: string
}

export interface Project {
  id: number
  title: string
  year: string
  location: string
  description: string
  imageUrl: string
  images: ProjectImage[]
  category: "architecture" | "interior" | "urban"
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MINIMALIST RESIDENCE",
    year: "2023",
    location: "Buenos Aires, Argentina",
    description:
      "A contemporary residential project that embraces minimalist principles while creating a harmonious relationship with its natural surroundings. The design focuses on clean lines, open spaces, and natural light, creating a serene living environment that blends indoor and outdoor experiences. Materials were carefully selected to enhance the minimalist aesthetic while ensuring durability and sustainability.",
    imageUrl: "/placeholder.svg?height=720&width=1280",
    images: [
      {
        id: 1,
        url: "/placeholder.svg?height=720&width=1280",
        alt: "Minimalist Residence Exterior",
      },
      {
        id: 2,
        url: "/placeholder.svg?height=720&width=1280",
        alt: "Minimalist Residence Living Room",
      },
      {
        id: 3,
        url: "/placeholder.svg?height=720&width=1280",
        alt: "Minimalist Residence Kitchen",
      },
    ],
    category: "architecture",
  },
  {
    id: 2,
    title: "URBAN RENEWAL COMPLEX",
    year: "2022",
    location: "Córdoba, Argentina",
    description:
      "This urban renewal project transforms a former industrial site into a mixed-use development that serves as a catalyst for community revitalization. The design preserves elements of the site's industrial heritage while introducing contemporary architectural elements. The complex includes residential units, commercial spaces, and public plazas that encourage social interaction and create a vibrant urban environment.",
    imageUrl: "/placeholder.svg?height=720&width=1280",
    images: [
      {
        id: 1,
        url: "/placeholder.svg?height=720&width=1280",
        alt: "Urban Renewal Complex Aerial View",
      },
      {
        id: 2,
        url: "/placeholder.svg?height=720&width=1280",
        alt: "Urban Renewal Complex Plaza",
      },
    ],
    category: "urban",
  },
  {
    id: 3,
    title: "CULTURAL CENTER EXPANSION",
    year: "2021",
    location: "Mendoza, Argentina",
    description:
      "An expansion project for an existing cultural center that creates additional exhibition spaces while respecting the original building's architectural language. The design introduces a dialogue between old and new, using contrasting materials and forms that complement rather than compete with the existing structure. The expansion includes flexible gallery spaces, a lecture hall, and a rooftop terrace with panoramic views.",
    imageUrl: "/placeholder.svg?height=720&width=1280",
    images: [
      {
        id: 1,
        url: "/placeholder.svg?height=720&width=1280",
        alt: "Cultural Center Expansion Exterior",
      },
      {
        id: 2,
        url: "/placeholder.svg?height=720&width=1280",
        alt: "Cultural Center Expansion Gallery Space",
      },
      {
        id: 3,
        url: "/placeholder.svg?height=720&width=1280",
        alt: "Cultural Center Expansion Rooftop Terrace",
      },
      {
        id: 4,
        url: "/placeholder.svg?height=720&width=1280",
        alt: "Cultural Center Expansion Lecture Hall",
      },
    ],
    category: "architecture",
  },
  {
    id: 4,
    title: "SUSTAINABLE OFFICE BUILDING",
    year: "2022",
    location: "Buenos Aires, Argentina",
    description:
      "A forward-thinking office building designed with sustainability as a core principle. The project incorporates passive design strategies, renewable energy systems, and biophilic elements to create a healthy, energy-efficient workplace. The façade features a responsive shading system that adapts to changing environmental conditions, while interior spaces are organized around a central atrium that facilitates natural ventilation and daylighting.",
    imageUrl: "/placeholder.svg?height=720&width=1280",
    images: [
      {
        id: 1,
        url: "/placeholder.svg?height=720&width=1280",
        alt: "Sustainable Office Building Exterior",
      },
      {
        id: 2,
        url: "/placeholder.svg?height=720&width=1280",
        alt: "Sustainable Office Building Atrium",
      },
      {
        id: 3,
        url: "/placeholder.svg?height=720&width=1280",
        alt: "Sustainable Office Building Workspace",
      },
    ],
    category: "architecture",
  },
]

