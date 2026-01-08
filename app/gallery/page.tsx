"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { X } from "lucide-react"

const galleryItems = [
  { type: "image", src: "/gallery/1.jpeg", alt: "Gallery Image 1" },
  { type: "image", src: "/gallery/2.jpeg", alt: "Gallery Image 2" },
  { type: "image", src: "/gallery/3.jpeg", alt: "Gallery Image 3" },
  { type: "image", src: "/gallery/4.jpeg", alt: "Gallery Image 4" },
  { type: "image", src: "/gallery/5.jpeg", alt: "Gallery Image 5" },
  { type: "video", src: "/gallery/1.mp4" },
]

export default function GalleryPage() {
  const [activeItem, setActiveItem] = useState<any>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our clinic, treatments, and real results at Attal Gold Hair Line
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {galleryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => item.type === "image" && setActiveItem(item)}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-64 cursor-pointer"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-full object-cover"
                  />
                )}

                {item.type === "image" && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                    <span className="text-white text-sm opacity-0 group-hover:opacity-100">
                      Click to Zoom
                    </span>
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* IMAGE ZOOM MODAL */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          
          <button
            onClick={() => setActiveItem(null)}
            className="absolute top-6 right-6 text-white hover:scale-110 transition"
          >
            <X size={32} />
          </button>

          <img
            src={activeItem.src}
            alt={activeItem.alt}
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
