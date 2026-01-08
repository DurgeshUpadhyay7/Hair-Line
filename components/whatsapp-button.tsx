"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    const phoneNumber = "919108125835"
    const message = encodeURIComponent("Hello Attal Gold Hair Line, I want to book an appointment.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg animate-pulse-glow transition-all duration-300 hover:scale-110 md:bottom-8 md:right-8"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}
