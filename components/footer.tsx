import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Company Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">
              Attal Gold Hair Line
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Premium hair treatment and restoration clinic in Bagalkot.
              Advanced technology, natural results, and trusted expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/services" className="footer-link">Services</Link></li>
              <li><Link href="/gallery" className="footer-link">Gallery</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="footer-link">Hair Patch</Link></li>
              <li><Link href="/services" className="footer-link">Hair Fixing</Link></li>
              <li><Link href="/services" className="footer-link">Hair Treatment</Link></li>
              <li><Link href="/services" className="footer-link">Scalp Care</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li className="flex gap-2">
                <Phone size={16} className="text-primary mt-0.5" />
                <a href="tel:+919108125835" className="hover:text-primary">
                  +91 9108125835
                </a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="text-primary mt-0.5" />
                <a
                  href="mailto:attalgoldhairline@gmail.com"
                  className="hover:text-primary"
                >
                  attalgoldhairline@gmail.com
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span className="text-xs leading-snug">
                  Sector 4, Plot 20 & 21,  
                  Nav Nagar, Bagalkot
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className="text-foreground/60 text-sm">
            © 2026 Attal Gold Hair Line. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-5">
            <a
              href="https://facebook.com/"
              target="_blank"
              className="footer-icon"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              className="footer-icon"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="footer-icon"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* TechPotli Credit */}
        <div className="mt-10 text-center border-t border-border pt-6">
          <p className="text-xs text-foreground/60">
            Website Designed & Developed by
          </p>

          <a
            href="https://techpotli.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center mt-3"
          >
            <img
              src="/techpotli_logo.jpeg"
              alt="TechPotli"
              className="h-10 opacity-90 hover:opacity-100 transition"
            />
          </a>

          <p className="text-xs text-foreground/50 mt-2">
            Professional Business Solutions • Digital Excellence
          </p>
        </div>

      </div>
    </footer>
  )
}
