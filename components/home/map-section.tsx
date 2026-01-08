export default function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Visit Our Clinic</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Located in the heart of Nav Nagar, Bagalkot</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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

          {/* Address Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Address</h3>
            <div className="space-y-4">
              <div>
                <p className="text-foreground/70 text-sm">Street Address</p>
                <p className="font-semibold">
                  Sector No 4, Plot No 20 & 21
                  <br />
                  Near Government Hospital Chouk
                  <br />
                  Vidyagiri Road, Nav Nagar
                  <br />
                  Bagalkot
                </p>
              </div>
              <div>
                <p className="text-foreground/70 text-sm">Phone</p>
                <p className="font-semibold text-primary">+91 9108125835</p>
              </div>
              <div>
                <p className="text-foreground/70 text-sm">Email</p>
                <p className="font-semibold">attalgoldhairline@gmail.com</p>
              </div>
              <div>
                <p className="text-foreground/70 text-sm">Owner</p>
                <p className="font-semibold">Kirti Nagaraj Hiremath</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
