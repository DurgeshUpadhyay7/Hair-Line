import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import HeroSection from "@/components/home/hero-section"
import ServicesPreview from "@/components/home/services-preview"
import BeforeAfterSlider from "@/components/home/before-after-slider"
import WhyChooseUs from "@/components/home/why-choose-us"
import MapSection from "@/components/home/map-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesPreview />
      <BeforeAfterSlider />
      <WhyChooseUs />
      <MapSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
