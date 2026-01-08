"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function HeroSection() {
  const handleWhatsApp = () => {
    const phoneNumber = "919108125835"
    const message = encodeURIComponent("Hello Attal Gold Hair Line, I want to book an appointment.")
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`
  }

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] bg-gradient-to-br from-secondary via-background to-muted flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/premium-hair-clinic-interior-modern-treatment-room.jpg"
          alt="Hair treatment clinic"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 md:py-32">
        <div className="mb-6 inline-block">
          <span className="text-primary font-semibold text-sm tracking-wide uppercase">Premium Hair Treatment</span>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
          Advanced Hair Treatment & Hair Restoration in Bagalkot
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto text-balance">
          Trusted Hair Experts • Natural Results • Advanced Technology
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Book Appointment
            </Button>
          </Link>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
          >
            <MessageCircle size={20} />
            WhatsApp Now
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-foreground/70">20+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-foreground/70">5000+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-foreground/70">Advanced Technology</span>
          </div>
        </div>
      </div>
    </section>
  )
}
