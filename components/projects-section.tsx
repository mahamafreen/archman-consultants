"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Oslo Heights",
    location: "Mumtaz City, Islamabad",
    type: "Mixed-Use High-Rise",
    description:
      "12-storey multipurpose development combining apartments with commercial frontage. Emphasis on vertical mobility, parking, safety systems, and proximity to Islamabad International Airport.",
    image: "/oslo-heights.jfif",
  },
  {
    title: "Rabi Center 1",
    location: "Bahria Town Phase 7 (Wallayat Complex)",
    type: "Retail / Mixed-Use",
    description:
      "Retail-led tower with shops at lower levels and apartments above. High footfall catchment; security, elevators, backup power, and active tenancy.",
    image: "/rabi-centre.png",
  },
  {
    title: "Hamdan Heights",
    location: "Ghauri Town Phase 5, Islamabad",
    type: "Mixed-Use Mid-Rise",
    description:
      "Residential and commercial floors with basement parking and high-speed lifts. Public listings credit Archman Consultants with design; efficient cores and circulation.",
    image: "/hamdan.jpg",
  },
 
  {
    title: "Suzuki Gujarkhan Motors",
    location: "GT Road, Gujar Khan",
    type: "Automotive Dealership, 3S",
    description:
      "Sales, service, and spares facility on a regional artery; brand-compliant façade and customer-first layout.",
    image: "/gujjarkhan.jpg",
  },
  {
    title: "Crown Vista",
    location: "Ghauri Town Phase 5, Islamabad",
    type: "Apartments over Commercial",
    description:
      "Mixed-use development with apartments above retail; daylight-oriented layouts, balconies, and independent vertical circulation.",
    image: "/crown-vista.jpg",
  },
  {
    title: "Qazi Mall",
    location: "Ghauri Town Phase 7, Islamabad",
    type: "Mall + Apartments",
    description:
      "Community-scale mall with retail on lower floors and 1–3 bed apartments above; designed for family-friendly amenities and easy access.",
    image: "/qazi-mall.jpg",
  },
  
]

export function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleProjects((prev) => [...prev, projectIndex])
          }
        })
      },
      { threshold: 0.1 },
    )

    const projectCards = sectionRef.current?.querySelectorAll("[data-index]")
    projectCards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Showcasing our commitment to innovative design and exceptional execution across diverse project types
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              data-index={index}
              className={`hover-lift transition-all duration-700 overflow-hidden ${
                visibleProjects.includes(index) ? "slide-up" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute top-4 right-4 text-sm text-accent-foreground font-medium px-3 py-1 bg-accent rounded-full">
                  {project.type}
                </span>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">📍 {project.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty text-sm leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
