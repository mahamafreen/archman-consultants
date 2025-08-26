"use client"

import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { TeamSection } from "@/components/TeamSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Navigation />

      <div id="home">
        <HeroSection />
      </div>

      
      <div id="about">
        <AboutSection />
      </div>

      <div id="services">
        <ServicesSection />
      </div>

      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="team">
        <TeamSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <div className="font-bold text-2xl mb-2">
              <span className="text-background">ARCHMAN</span>
              <span className="text-accent ml-1">CONSULTANTS</span>
            </div>
            <p className="text-background/70">Planning & Engineering Solutions</p>
          </div>

          <div className="border-t border-background/20 pt-6">
            <p className="text-background/60">© 2024 Archman Consultants. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
