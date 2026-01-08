"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"

const transformations = [
  {
    title: "Hair Loss to Full Hair",
    category: "Hair Restoration",
    duration: "6 months",
    image: "/patch.jpg",
  },
  {
    title: "Scalp Treatment Results",
    category: "Scalp Health",
    duration: "3 months",
    image: "/2.jpg",
  },
  {
    title: "Hair Thickening Success",
    category: "Hair Treatment",
    duration: "4 months",
    image: "/3.jpg",
  },
  {
    title: "Advanced Hair Patch",
    category: "Hair Patch",
    duration: "Immediate",
    image: "/4.jpg",
  },
  {
    title: "Complete Hair Recovery",
    category: "Hair Loss Solution",
    duration: "5 months",
    image: "/5.jpg",
  },
  {
    title: "Hair Fixing Results",
    category: "Hair Fixing",
    duration: "1 day",
    image: "/6.jpg",
  },
]

function TransformationCard({ item }: { item: any }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <div className="relative w-full h-64 md:h-80">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <span className="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1 text-xs rounded">
          Before → After
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.title}</h3>

        <div className="flex justify-between text-sm text-muted-foreground mt-2">
          <span>{item.category}</span>
          <span>{item.duration}</span>
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
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Before & After Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real transformations from our satisfied clients at Attal Gold Hair Line.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformations.map((item, index) => (
              <TransformationCard key={index} item={item} />
            ))}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-primary/10 rounded-lg">
              <p className="text-4xl font-bold text-primary mb-2">5000+</p>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="p-8 bg-accent/10 rounded-lg">
              <p className="text-4xl font-bold text-accent mb-2">98%</p>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="p-8 bg-secondary/10 rounded-lg">
              <p className="text-4xl font-bold text-secondary mb-2">20+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
