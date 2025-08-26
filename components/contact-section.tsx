"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
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
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 text-balance transition-all duration-1000 ${isVisible ? "slide-up" : "opacity-0 translate-y-8"}`}
          >
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto text-pretty transition-all duration-1000 delay-200 ${isVisible ? "slide-up" : "opacity-0 translate-y-8"}`}
          >
            Ready to bring your architectural vision to life? Let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card
            className={`hover-lift text-center transition-all duration-700 delay-300 ${isVisible ? "slide-in-left" : "opacity-0 -translate-x-8"}`}
          >
            <CardHeader>
              <div className="text-4xl mb-4"></div>
              <CardTitle>Office Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-pretty">
                Archman Consultants
                <br />
                Parking Floor, Gulf Center
                <br />
                6th Road, Rawalpindi
              </p>
            </CardContent>
          </Card>

          <Card
            className={`hover-lift text-center transition-all duration-700 delay-500 ${isVisible ? "slide-up" : "opacity-0 translate-y-8"}`}
          >
            <CardHeader>
              <div className="text-4xl mb-4"></div>
              <CardTitle>Phone Numbers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                +92 300 350 9148
                <br />
                +92 345 350 9148
              </p>
            </CardContent>
          </Card>

          <Card
            className={`hover-lift text-center transition-all duration-700 delay-700 ${isVisible ? "slide-in-right" : "opacity-0 translate-x-8"}`}
          >
            <CardHeader>
              <div className="text-4xl mb-4"></div>
              <CardTitle>Email Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">hmc_33@yahoo.com</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
