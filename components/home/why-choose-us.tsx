import { Card } from "@/components/ui/card"
import { CheckCircle, Star, Shield, Users } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Star,
      title: "Experience",
      description: "20+ years of expertise in hair treatment and restoration",
    },
    {
      icon: Shield,
      title: "Hygiene",
      description: "Highest standards of cleanliness and safety protocols",
    },
    {
      icon: CheckCircle,
      title: "Results",
      description: "5000+ satisfied clients with proven natural results",
    },
    {
      icon: Users,
      title: "Affordable",
      description: "Premium quality services at competitive prices",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Why Choose Attal Gold Hair Line?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                <p className="text-foreground/70 text-sm">{reason.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
