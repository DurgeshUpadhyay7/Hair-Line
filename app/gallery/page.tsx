"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const galleryImages = [
  {
    src: "/modern-hair-clinic-interior-professional.jpg",
    alt: "Clinic Interior",
    category: "Clinic",
  },
  {
    src: "/hair-treatment-room-equipment-advanced.jpg",
    alt: "Treatment Room",
    category: "Clinic",
  },
  {
    src: "/hair-restoration-process-step-by-step.jpg",
    alt: "Treatment Process",
    category: "Treatment",
  },
  {
    src: "/hair-patch-application-professional.jpg",
    alt: "Hair Patch Application",
    category: "Results",
  },
  {
    src: "/hair-clinic-consultation-room.jpg",
    alt: "Consultation Area",
    category: "Clinic",
  },
  {
    src: "/hair-treatment-therapy-healthy-scalp.jpg",
    alt: "Hair Treatment",
    category: "Treatment",
  },
  {
    src: "/hair-restoration-success-transformation.jpg",
    alt: "Success Result",
    category: "Results",
  },
  {
    src: "/modern-salon-equipment-latest-technology.jpg",
    alt: "Modern Equipment",
    category: "Clinic",
  },
  {
    src: "/hair-care-products-professional-grade.jpg",
    alt: "Products",
    category: "Treatment",
  },
]

const categories = ["All", "Clinic", "Treatment", "Results"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore our clinic, treatment process, and amazing client results
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-64"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-semibold">{image.alt}</p>
                    <p className="text-white/80 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
