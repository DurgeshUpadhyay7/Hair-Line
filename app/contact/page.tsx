"use client"

import type React from "react"
import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple validation
    if (formData.name && formData.phone && formData.email && formData.message) {
      // WhatsApp integration - send form data to WhatsApp
      const whatsappNumber = "+919108125835"
      const whatsappMessage = `New Contact Form Submission:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
      
      // Open WhatsApp with the form data
      window.open(whatsappUrl, '_blank')
      
      setSubmitted(true)
      setFormData({ name: "", phone: "", email: "", message: "" })
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  const handleCall = () => {
    window.location.href = "tel:+919108125835"
  }

  const handleEmail = () => {
    window.location.href = "mailto:attalgoldhairline@gmail.com"
  }

  const handleWhatsAppDirect = () => {
    const whatsappNumber = "+919108125835"
    const whatsappMessage = "Hello, I'm interested in your hair services. Can I get more information?"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleWhatsAppLocation = () => {
    const whatsappNumber = "+919108125835"
    const locationMessage = "Hello, I need directions to your clinic at:\nSector No 4, Plot No 20 & 21\nNear Government Hospital Chouk\nVidyagiri Road, Nav Nagar, Bagalkot"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(locationMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Get in touch with us for appointments, inquiries, or more information
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Send us a Message</h2>
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 font-semibold">Thank you! Opening WhatsApp with your message...</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    rows={5}
                    placeholder="Tell us about your inquiry..."
                    required
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button type="submit" className="bg-primary hover:bg-primary/90">
                    Send via WhatsApp
                  </Button>
                  <Button 
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Quick Chat
                  </Button>
                </div>
                <p className="text-sm text-foreground/60 text-center">
                  Your message will be sent directly to our WhatsApp for faster response
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">Contact Information</h2>

              {/* Quick Contact Cards */}
              <div className="space-y-4 mb-8">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleCall}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-primary font-semibold">+91 9108125835</p>
                      <p className="text-sm text-foreground/70">Click to call</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleEmail}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-accent font-semibold">attalgoldhairline@gmail.com</p>
                      <p className="text-sm text-foreground/70">Click to email</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={handleWhatsAppLocation}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="font-semibold text-sm">
                        Sector No 4, Plot No 20 & 21
                        <br />
                        Near Government Hospital Chouk
                        <br />
                        Vidyagiri Road, Nav Nagar
                        <br />
                        Bagalkot
                      </p>
                      <p className="text-sm text-foreground/70 mt-1">Click for WhatsApp directions</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Hours</h4>
                      <p className="text-sm text-foreground/70">
                        Monday - Friday: 10:00 AM - 7:00 PM
                        <br />
                        Saturday: 10:00 AM - 5:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Map */}
              <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.5623288475373!2d75.63195!3d16.19047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8b6e7d0000001%3A0x0!2sNav%20Nagar%2C%20Bagalkot!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              {/* WhatsApp Quick Action Button */}
              <div className="mt-6">
                <Button 
                  onClick={handleWhatsAppDirect}
                  className="w-full bg-green-600 hover:bg-green-700 py-6 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Chat on WhatsApp for Instant Response
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}