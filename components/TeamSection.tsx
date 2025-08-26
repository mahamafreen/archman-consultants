"use client"

import { Card, CardContent } from "@/components/ui/card"

export function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h3 className="text-5xl font-bold text-center mb-12">
          Our <span className="text-accent">Team</span>
        </h3>

        {/* CEO Card */}
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

        {/* Other team members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Saleh */}
          <Card className="hover-lift bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-lg overflow-hidden mb-4">
                  <img src="/saleh.png" alt="Saleh Babar" className="w-full h-full object-cover" />
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

          {/* Zaid */}
          <Card className="hover-lift bg-gradient-to-br from-card to-muted/20 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 rounded-lg overflow-hidden mb-4">
                  <img src="/zaid.jpg" alt="Zaid Arshad Thakur" className="w-full h-full object-cover" />
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

        {/* Other team members without images */}
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
    </section>
  )
}
