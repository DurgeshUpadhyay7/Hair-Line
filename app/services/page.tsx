import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "Services - Attal Gold Hair Line",
  description: "Explore our comprehensive hair treatment and restoration services in Bagalkot.",
}

const services = [
  {
    title: "Hair Patch",
    description: "Advanced hair patch technology for natural-looking results",
    benefits: [
      "Natural appearance",
      "Quick application",
      "Customizable color and texture",
      "Long-lasting results",
      "Painless procedure",
    ],
    image: "/placeholder.svg?key=yovgc",
  },
  {
    title: "Hair Fixing (Non-Surgical)",
    description: "Non-surgical hair fixing solutions for instant transformation",
    benefits: [
      "No surgery required",
      "Immediate results",
      "Removable option",
      "Natural movement",
      "Various style options",
    ],
    image: "/placeholder.svg?key=ewf9d",
  },
  {
    title: "Hair Treatment",
    description: "Specialized treatments for hair loss and restoration",
    benefits: [
      "Addresses root causes",
      "Stimulates growth",
      "Advanced formulations",
      "Visible results",
      "Safe and natural",
    ],
    image: "/placeholder.svg?key=g6wan",
  },
  {
    title: "Hair Loss Solution",
    description: "Comprehensive solutions for various types of hair loss",
    benefits: [
      "Personalized treatment",
      "Multiple options",
      "Expert consultation",
      "Proven effectiveness",
      "Affordable packages",
    ],
    image: "/placeholder.svg?key=4ksom",
  },
  {
    title: "Scalp Treatment",
    description: "Complete scalp health and care solutions",
    benefits: ["Deep cleansing", "Reduces dandruff", "Improves circulation", "Strengthens roots", "Long-term health"],
    image: "/placeholder.svg?key=15q1g",
  },
  {
    title: "Hair Care Consultation",
    description: "Expert guidance for your hair care journey",
    benefits: [
      "Personalized assessment",
      "Treatment planning",
      "Home care advice",
      "Ongoing support",
      "Free follow-ups",
    ],
    image: "/placeholder.svg?key=2gmms",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive hair treatment and restoration services using advanced technology
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-foreground/70 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-primary hover:bg-primary/90">Learn More</Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Hair?</h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Book a free consultation with our experts and discover the best treatment for your needs.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
