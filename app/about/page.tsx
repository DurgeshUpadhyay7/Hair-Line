import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "About Us - Attal Gold Hair Line",
  description: "Learn about Attal Gold Hair Line and our commitment to hair health.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-foreground/70 max-w-3xl">
            Attal Gold Hair Line is a premium hair treatment clinic dedicated to providing advanced hair restoration and
            treatment solutions in Bagalkot.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-foreground/80">
              <p className="mb-4">
                Founded and managed by Kirti Nagaraj Hiremath, Attal Gold Hair Line began with a simple vision: to
                provide premium hair treatment solutions that deliver natural results without compromising on quality or
                safety.
              </p>
              <p className="mb-4">
                With over 20 years of experience in the hair care industry, we have successfully transformed the lives
                of over 5,000 clients, helping them regain their confidence through advanced hair restoration techniques
                and personalized treatment plans.
              </p>
              <p>
                Our commitment to excellence, hygiene, and client satisfaction has made us a trusted name in hair
                treatment in Bagalkot and the surrounding regions.
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-foreground/80">
                To provide world-class hair treatment solutions that combine advanced technology, expert care, and
                affordability, helping our clients achieve their best hair health and confidence.
              </p>
            </Card>
            <Card className="p-8 bg-accent/5 border-accent/20">
              <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-foreground/80">
                To be the most trusted and preferred hair treatment clinic in the region, recognized for our innovative
                treatments, exceptional results, and unwavering commitment to client satisfaction.
              </p>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Trust", desc: "Building lasting relationships with our clients" },
                { title: "Excellence", desc: "Delivering superior results through expertise" },
                { title: "Hygiene", desc: "Maintaining highest standards of cleanliness" },
                { title: "Innovation", desc: "Using advanced technology and techniques" },
                { title: "Affordability", desc: "Premium quality at competitive prices" },
                { title: "Care", desc: "Personalized attention for each client" },
              ].map((value, i) => (
                <Card key={i} className="p-6">
                  <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                  <p className="text-foreground/70">{value.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Owner */}
          <div className="bg-secondary/10 rounded-lg p-8 md:p-12 text-center">
            <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl font-serif">KN</span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-2">Kirti Nagaraj Hiremath</h3>
            <p className="text-foreground/70 mb-4">Founder & Hair Treatment Specialist</p>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              With over 20 years of dedicated experience in hair treatment and restoration, Kirti brings passion,
              expertise, and innovation to every client interaction. His commitment to natural results and client
              satisfaction has earned the trust of thousands.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
