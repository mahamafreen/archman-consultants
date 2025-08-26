"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    "/modern-architectural-building-exterior-with-glass-.png",
    "/luxury-residential-interior-design-with-modern-fur.png",
    "/urban-planning-aerial-view-of-modern-city-developm.png",
    "/construction-site-with-architectural-blueprints-an.png",
    "/modern-office-building-interior-with-sleek-design.png",
  ]

  useEffect(() => {
    setIsVisible(true)

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [heroImages.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-30" : "opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Archman Consultants project ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-background/80" />
      </div>

      

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "fade-in" : "opacity-0"}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
            <span className="block text-foreground">ARCHMAN</span>
            <span className="block text-accent">CONSULTANTS</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto text-balance">
            Planning & Engineering Solutions
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
            Redefining urban and architectural landscapes with sustainable, functional, and aesthetically refined spaces
            that elevate daily life.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${isVisible ? "slide-up" : "opacity-0 translate-y-8"}`}
          >
            <Button size="lg" className="hover-lift text-lg px-8 py-6">
              Explore Our Work
            </Button>
            <Button variant="outline" size="lg" className="hover-lift text-lg px-8 py-6 bg-transparent">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
