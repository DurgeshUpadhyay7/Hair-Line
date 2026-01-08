import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Scissors, Droplets, Zap, Shield } from "lucide-react"

export default function ServicesPreview() {
  const services = [
    {
      icon: Scissors,
      title: "Hair Patch",
      description: "Advanced hair patch technology for natural-looking results",
      color: "from-primary to-primary/50",
    },
    {
      icon: Zap,
      title: "Hair Fixing",
      description: "Non-surgical hair fixing solutions for instant transformation",
      color: "from-accent to-accent/50",
    },
    {
      icon: Droplets,
      title: "Hair Treatment",
      description: "Specialized treatments for hair loss and restoration",
      color: "from-secondary to-secondary/50",
    },
    {
      icon: Shield,
      title: "Scalp Care",
      description: "Complete scalp health and care solutions",
      color: "from-primary/80 to-primary/30",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Comprehensive hair treatment solutions using advanced technology and expert care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className={`h-24 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">{service.description}</p>
                  <Link href="/services">
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" variant="outline">
              Explore All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
