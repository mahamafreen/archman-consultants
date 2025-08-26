"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? "slide-in-left" : "opacity-0 -translate-x-8"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
              About <span className="text-accent">Archman</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="text-pretty">
                Founded over 13 years ago by <strong className="text-foreground">Arshad Thakur</strong>, Archman
                Consultants has grown from a vision of practical market insight into a leading architectural
                consultancy.
              </p>
              <p className="text-pretty">
                With 21+ years in the field and 16 years in Real Estate Marketing, our founder brings unique market
                realism to every design challenge, creating spaces that are both beautiful and buildable.
              </p>
              <p className="text-pretty">
                Today, we continue to shape urban landscapes with sustainable, functional, and aesthetically refined
                solutions that elevate daily life.
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "slide-in-right" : "opacity-0 translate-x-8"}`}
          >
            <Card className="hover-lift bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
              <CardContent className="p-8">
                <blockquote className="text-xl italic text-center text-pretty">
                  "With over two decades of experience, I've learned architecture is more than structures — it's about
                  shaping environments where people thrive. At Archman Consultants, every project is a partnership: our
                  expertise meeting your vision to build lasting value."
                </blockquote>
                <div className="mt-6 text-center">
                  <div className="font-semibold text-foreground">Arshad Thakur</div>
                  <div className="text-sm text-muted-foreground">CEO & Founder</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-5xl font-bold text-center mb-12">
            Our <span className="text-accent">Team</span>
          </h3>

          {/* CEO Card - Large and prominent */}
          <div className="mb-12 flex justify-center">
            <Card className="hover-lift bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg max-w-2xl w-full">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-40 h-50 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src="/arshad.png"
                      alt="Arshad Thakur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-2xl font-bold text-foreground mb-2">Arshad Thakur</h4>
                    <p className="text-accent font-semibold mb-3">CEO & Founder</p>
                    <p className="text-muted-foreground">
                      Visionary leader focused on quality, innovation, and client outcomes. 21+ years of experience in
                      architecture and real estate.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Saleh and Zaid - Side by side with images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="hover-lift bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-lg overflow-hidden mb-4">
                    <img
                      src="/saleh.png"
                      alt="Saleh Babar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Saleh Babar</h4>
                  <p className="text-accent font-semibold mb-3">Supervisor & Contractor</p>
                  <p className="text-muted-foreground text-sm">
                    Manages on-ground activities, schedule, budget, and coordination with expertise in construction
                    management.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-lg overflow-hidden mb-4">
                    <img
                      src="/zaid.jpg"
                      alt="Zaid Arshad Thakur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Zaid Arshad Thakur</h4>
                  <p className="text-accent font-semibold mb-3">Construction & Site Supervisor</p>
                  <p className="text-muted-foreground text-sm">
                    Oversees day-to-day site operations, quality control, and health & safety enforcement.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Three other team members without images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-lift bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
               
                <h4 className="text-lg font-bold text-foreground mb-2">Sajjad Sabir</h4>
                <p className="text-accent font-semibold mb-3">Senior Draftsman</p>
                <p className="text-muted-foreground text-sm">
                  Expert in working drawings and technical detailing with precision and accuracy.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                
                <h4 className="text-lg font-bold text-foreground mb-2">Muhammad Shakir</h4>
                <p className="text-accent font-semibold mb-3">Junior Draftsman</p>
                <p className="text-muted-foreground text-sm">
                  Supports documentation, modeling, and presentation with attention to detail.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                
                <h4 className="text-lg font-bold text-foreground mb-2">Muhammad Ghufran</h4>
                <p className="text-accent font-semibold mb-3">Senior Supervisor</p>
                <p className="text-muted-foreground text-sm">
                  Coordinates supervisors and site milestones ensuring project success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
