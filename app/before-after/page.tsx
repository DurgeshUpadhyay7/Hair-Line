"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

const transformations = [
  {
    title: "Hair Loss to Full Hair",
    category: "Hair Restoration",
    duration: "6 months",
  },
  {
    title: "Scalp Treatment Results",
    category: "Scalp Health",
    duration: "3 months",
  },
  {
    title: "Hair Thickening Success",
    category: "Hair Treatment",
    duration: "4 months",
  },
  {
    title: "Advanced Hair Patch",
    category: "Hair Patch",
    duration: "Immediate",
  },
  {
    title: "Complete Hair Recovery",
    category: "Hair Loss Solution",
    duration: "5 months",
  },
  {
    title: "Hair Fixing Results",
    category: "Hair Fixing",
    duration: "1 day",
  },
]

function BeforeAfterCard({ index }: { index: number }) {
  const [position, setPosition] = useState(50)

  return (
    <Card className="overflow-hidden">
      <div className="relative w-full h-80">
        {/* After Image */}
        <img src="/placeholder.svg?key=n766g" alt="After" className="w-full h-full object-cover" />

        {/* Before Image */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img src="/placeholder.svg?key=kjvsj" alt="Before" className="w-full h-full object-cover" />
        </div>

        {/* Slider Line */}
        <div className="absolute top-0 bottom-0 w-1 bg-primary cursor-col-resize" style={{ left: `${position}%` }} />

        {/* Labels */}
        <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs font-semibold">
          Before
        </div>
        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs font-semibold">
          After
        </div>
      </div>

      {/* Controls and Info */}
      <div className="p-4">
        <Slider
          value={[position]}
          onValueChange={(value) => setPosition(value[0])}
          min={0}
          max={100}
          step={1}
          className="w-full"
        />
        <h3 className="font-semibold mt-4 mb-2">{transformations[index].title}</h3>
        <div className="flex justify-between text-sm text-foreground/70">
          <span>{transformations[index].category}</span>
          <span>{transformations[index].duration}</span>
        </div>
      </div>
    </Card>
  )
}

export default function BeforeAfterPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Before & After Gallery</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Real transformations from our valued clients. Drag the slider to compare results.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformations.map((_, index) => (
              <BeforeAfterCard key={index} index={index} />
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-primary/10 rounded-lg">
              <p className="text-4xl font-bold text-primary mb-2">5000+</p>
              <p className="text-foreground/70">Happy Clients</p>
            </div>
            <div className="p-8 bg-accent/10 rounded-lg">
              <p className="text-4xl font-bold text-accent mb-2">98%</p>
              <p className="text-foreground/70">Satisfaction Rate</p>
            </div>
            <div className="p-8 bg-secondary/10 rounded-lg">
              <p className="text-4xl font-bold text-secondary mb-2">20+</p>
              <p className="text-foreground/70">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
