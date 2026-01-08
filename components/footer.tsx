import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Attal Gold Hair Line</h3>
            <p className="text-foreground/70 text-sm">
              Premium hair treatment and restoration clinic in Bagalkot. Advanced technology, natural results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-foreground/70 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/70 hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/70 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-foreground/70 hover:text-primary">
                  Hair Patch
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/70 hover:text-primary">
                  Hair Fixing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/70 hover:text-primary">
                  Hair Treatment
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/70 hover:text-primary">
                  Scalp Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span>+91 9108125835</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span>attalgoldhairline@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-primary flex-shrink-0" />
                <span className="text-xs">Sector 4, Plot 20 & 21, Nav Nagar, Bagalkot</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">&copy; 2026 Attal Gold Hair Line. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
