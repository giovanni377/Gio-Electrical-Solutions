import React from "react";

// Single-file React component (Tailwind CSS classes used)
// Replace `/assets/logo.png` with your actual logo path (e.g. uploaded image file)

export default function GioWebsite() {
  return (
    <div className="min-h-screen bg-black text-gray-100 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/assets/logo.png" alt="Gio Electrical Solutions" className="w-20 h-20 object-contain" />
          <div>
            <h1 className="text-2xl font-serif text-yellow-400">Gio Electrical Solutions</h1>
            <p className="text-sm text-gray-300">Residential & Commercial Electrical • HVAC • Installations</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-gray-200">
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>

        <a href="#contact" className="hidden sm:inline-block bg-yellow-400 text-black px-4 py-2 rounded-md font-medium">Get a Quote</a>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">Reliable Electrical & HVAC Services</h2>
            <p className="mt-4 text-gray-300">Fast, safe, and affordable electrical and HVAC solutions for homes and businesses. Licensed technicians, transparent pricing, and same-day service options.</p>

            <div className="mt-6 flex gap-4">
              <a href="#contact" className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold">Book Service</a>
              <a href="#services" className="border border-gray-700 px-6 py-3 rounded-md text-gray-200 hover:text-yellow-400">View Services</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <strong className="text-white">Licensed & Insured</strong>
                <div>Certified electricians & HVAC techs</div>
              </div>
              <div>
                <strong className="text-white">Satisfaction Guarantee</strong>
                <div>Quality workmanship and parts</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            {/* Showcase card with logo and illustration */}
            <div className="w-80 h-80 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-xl p-6 flex items-center justify-center">
              <img src="/assets/logo.png" alt="Gio logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-12">
          <h3 className="text-3xl text-white font-semibold">Our Services</h3>
          <p className="text-gray-300 mt-2">We provide a wide range of electrical and HVAC services for residential and commercial customers.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl text-yellow-400 font-semibold">Electrical Installations</h4>
              <p className="text-gray-300 mt-2">Panel upgrades, lighting, outlets, and rewiring.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl text-yellow-400 font-semibold">HVAC Service & Repair</h4>
              <p className="text-gray-300 mt-2">AC repairs, maintenance, and installations.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl text-yellow-400 font-semibold">Emergency Service</h4>
              <p className="text-gray-300 mt-2">24/7 emergency electrical support and troubleshooting.</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-12">
          <h3 className="text-3xl text-white font-semibold">About Gio Electrical Solutions</h3>
          <p className="text-gray-300 mt-2">Family-owned and operated — we pride ourselves on prompt service, fair pricing, and attention to detail. Our team brings years of field experience and a commitment to customer satisfaction.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <ul className="text-gray-300 list-disc pl-5 space-y-2">
                <li>Licensed electricians & HVAC technicians</li>
                <li>Free estimates</li>
                <li>Commercial projects and maintenance plans</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-300">Want to discuss a job? Get in touch and we’ll send a technician to evaluate and provide a transparent quote.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12">
          <h3 className="text-3xl text-white font-semibold">Contact Us</h3>
          <p className="text-gray-300 mt-2">Fill out the form and we’ll respond within one business day.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <form className="bg-gray-900 p-6 rounded-lg space-y-4">
              <div>
                <label className="block text-sm text-gray-300">Name</label>
                <input className="mt-1 w-full rounded-md bg-black border border-gray-700 px-3 py-2 text-gray-100" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-gray-300">Email</label>
                <input className="mt-1 w-full rounded-md bg-black border border-gray-700 px-3 py-2 text-gray-100" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-gray-300">Phone</label>
                <input className="mt-1 w-full rounded-md bg-black border border-gray-700 px-3 py-2 text-gray-100" placeholder="(555) 555-5555" />
              </div>
              <div>
                <label className="block text-sm text-gray-300">Message</label>
                <textarea className="mt-1 w-full rounded-md bg-black border border-gray-700 px-3 py-2 text-gray-100" rows={4} placeholder="Tell us about your project" />
              </div>

              <div className="flex gap-4">
                <button type="button" className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold">Send Message</button>
                <button type="button" className="border border-gray-700 px-4 py-2 rounded-md text-gray-200">Call: (555) 555-5555</button>
              </div>
            </form>

            <div className="bg-gray-900 p-6 rounded-lg space-y-4">
              <div>
                <h4 className="text-lg text-yellow-400 font-semibold">Service Area</h4>
                <p className="text-gray-300 mt-1">Serving the greater metro area — residential and commercial.</p>
              </div>

              <div>
                <h4 className="text-lg text-yellow-400 font-semibold">Hours</h4>
                <p className="text-gray-300 mt-1">Mon - Fri: 8am - 6pm • Sat: 9am - 2pm • Emergency: 24/7</p>
              </div>

              <div>
                <h4 className="text-lg text-yellow-400 font-semibold">Follow</h4>
                <div className="flex gap-3 mt-2">
                  <a className="text-gray-300 hover:text-yellow-400">Instagram</a>
                  <a className="text-gray-300 hover:text-yellow-400">Facebook</a>
                  <a className="text-gray-300 hover:text-yellow-400">TikTok</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="mt-12 border-t border-gray-800 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          © {new Date().getFullYear()} Gio Electrical Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
