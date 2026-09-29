"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Scissors,
  Clock,
  MapPin,
  Phone,
  Calendar,
  User,
  X,
  CheckCircle,
  Star,
} from "lucide-react";

export function BarberMockup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const services = [
    {
      name: "Classic Haircut",
      price: "$35",
      time: "45 min",
      desc: "Precision wash, consultation, custom haircut, and styled finish with premium pomade.",
    },
    {
      name: "Skin Fade & Beard Sculpt",
      price: "$55",
      time: "60 min",
      desc: "Seamless razor fade combined with hot towel beard shaping and line-up.",
    },
    {
      name: "Beard Sculpt & Hot Towel",
      price: "$28",
      time: "30 min",
      desc: "Trimming, shaping, essential oils treatment, and steam towel relaxation.",
    },
    {
      name: "Royal Hot Towel Shave",
      price: "$40",
      time: "45 min",
      desc: "Traditional straight-razor shave with pre-shave oil, hot steam towels, and balm.",
    },
  ];

  const barbers = [
    {
      name: "Marcus Vance",
      role: "Head Barber & Founder",
      exp: "12 years exp",
      img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Leo Rossi",
      role: "Fade & Detail Specialist",
      exp: "8 years exp",
      img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsModalOpen(false);
    }, 2200);
  };

  const openBookingFor = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0c0b0a] text-[#f4ead6] font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0c0b0a]/90 backdrop-blur-md border-b border-[#d4af37]/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Scissors className="size-6 text-[#d4af37]" />
            <span className="font-serif text-2xl italic tracking-wide text-[#d4af37]">
              Local Barber
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-[#cbbd9e]">
            <a href="#services" className="hover:text-[#d4af37] transition-colors">
              Services
            </a>
            <a href="#craft" className="hover:text-[#d4af37] transition-colors">
              The Craft
            </a>
            <a href="#masters" className="hover:text-[#d4af37] transition-colors">
              Barbers
            </a>
            <a href="#visit" className="hover:text-[#d4af37] transition-colors">
              Visit
            </a>
          </nav>

          <button
            onClick={() => openBookingFor()}
            className="rounded-sm border border-[#d4af37] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0c0b0a] transition-all duration-300"
          >
            Book a chair
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 border border-[#d4af37]/30 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[#d4af37] bg-[#141210]">
              <Star className="size-3 fill-[#d4af37]" /> Est. 1984 · Classic Grooming
            </div>

            <h1 className="font-serif text-5xl md:text-7xl italic leading-[1.05] text-[#f4ead6]">
              Sharp. Simple. <br />
              <span className="text-[#d4af37]">Done right.</span>
            </h1>

            <p className="max-w-lg text-base md:text-lg text-[#cbbd9e] leading-relaxed">
              Walk in for a precision fade, stay for the hot towel ritual.
              Heritage techniques tailored for the modern gentleman.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => openBookingFor()}
                className="bg-[#d4af37] text-[#0c0b0a] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#c29f2e] transition-all shadow-lg shadow-[#d4af37]/10"
              >
                Reserve Your Appointment
              </button>

              <a
                href="#services"
                className="border border-[#d4af37]/30 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#cbbd9e] hover:border-[#d4af37] hover:text-[#f4ead6] transition-all"
              >
                View Price Board
              </a>
            </div>

            {/* Quick Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["Walk-ins Welcome", "Master Barbers", "Hot Towel Included", "Free Drink"].map(
                (item) => (
                  <div
                    key={item}
                    className="border border-[#d4af37]/20 bg-[#141210] py-3 px-2 text-center text-[10px] uppercase tracking-[0.15em] text-[#d4af37]"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Hero Visual Collage */}
          <div className="md:col-span-5 grid grid-cols-2 gap-3 h-[420px]">
            <div className="relative rounded-sm overflow-hidden border border-[#d4af37]/20 col-span-2 h-[220px]">
              <Image
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80"
                alt="Barber Shop Interior"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="relative rounded-sm overflow-hidden border border-[#d4af37]/20 h-[180px]">
              <Image
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80"
                alt="Razor Shave"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="relative rounded-sm overflow-hidden border border-[#d4af37]/20 h-[180px]">
              <Image
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80"
                alt="Barber Tools"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services & Price Board */}
      <section id="services" className="bg-[#141210] py-20 border-y border-[#d4af37]/20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center space-y-3 mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">Services & Pricing</p>
            <h2 className="font-serif text-4xl italic text-[#f4ead6]">The Board</h2>
          </div>

          <div className="space-y-4">
            {services.map((s) => (
              <div
                key={s.name}
                className="group border border-[#d4af37]/20 bg-[#0c0b0a] p-6 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#d4af37]/60 transition-all"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-xl italic text-[#f4ead6] group-hover:text-[#d4af37] transition-colors">
                      {s.name}
                    </h3>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-[#8c806b]">
                      <Clock className="size-3" /> {s.time}
                    </span>
                  </div>
                  <p className="text-xs text-[#cbbd9e] leading-relaxed">{s.desc}</p>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 border-[#d4af37]/10 pt-3 sm:pt-0">
                  <span className="font-serif text-2xl italic text-[#d4af37]">{s.price}</span>
                  <button
                    onClick={() => openBookingFor(s.name)}
                    className="border border-[#d4af37]/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0c0b0a] transition-all"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Barbers Section */}
      <section id="masters" className="py-20 mx-auto max-w-6xl px-6">
        <div className="text-center space-y-3 mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">Craftsmen</p>
          <h2 className="font-serif text-4xl italic text-[#f4ead6]">Meet Your Barbers</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {barbers.map((b) => (
            <div
              key={b.name}
              className="border border-[#d4af37]/20 bg-[#141210] p-6 flex items-center gap-6 rounded-sm"
            >
              <div className="relative size-24 shrink-0 rounded-full overflow-hidden border border-[#d4af37]">
                <Image src={b.img} alt={b.name} fill className="object-cover grayscale" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37]">
                  {b.exp}
                </span>
                <h3 className="font-serif text-2xl italic text-[#f4ead6]">{b.name}</h3>
                <p className="text-xs text-[#cbbd9e]">{b.role}</p>
                <button
                  onClick={() => openBookingFor()}
                  className="pt-2 text-xs text-[#d4af37] uppercase tracking-wider underline hover:text-[#f4ead6] transition-colors"
                >
                  Book with {b.name.split(" ")[0]} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location / Hours Footer Section */}
      <section id="visit" className="bg-[#141210] py-16 border-t border-[#d4af37]/20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-3 border border-[#d4af37]/10 p-6">
            <MapPin className="size-6 text-[#d4af37] mx-auto md:mx-0" />
            <h3 className="font-serif text-xl italic text-[#f4ead6]">Location</h3>
            <p className="text-xs text-[#cbbd9e] leading-relaxed">
              22 Main Street, Suite 4<br />
              Downtown District, NY 10001
            </p>
          </div>

          <div className="space-y-3 border border-[#d4af37]/10 p-6">
            <Clock className="size-6 text-[#d4af37] mx-auto md:mx-0" />
            <h3 className="font-serif text-xl italic text-[#f4ead6]">Hours</h3>
            <p className="text-xs text-[#cbbd9e] leading-relaxed">
              Tue – Fri: 9:00 AM – 8:00 PM<br />
              Saturday: 8:00 AM – 6:00 PM<br />
              Sun – Mon: Closed
            </p>
          </div>

          <div className="space-y-3 border border-[#d4af37]/10 p-6">
            <Phone className="size-6 text-[#d4af37] mx-auto md:mx-0" />
            <h3 className="font-serif text-xl italic text-[#f4ead6]">Contact</h3>
            <p className="text-xs text-[#cbbd9e] leading-relaxed">
              Direct: (555) 234-5678<br />
              Email: info@localbarber.com
            </p>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#141210] border border-[#d4af37]/50 max-w-md w-full p-8 relative shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-[#cbbd9e] hover:text-[#d4af37]"
            >
              <X className="size-5" />
            </button>

            {bookingSuccess ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle className="size-12 text-[#d4af37] mx-auto" />
                <h3 className="font-serif text-2xl italic text-[#f4ead6]">Chair Booked!</h3>
                <p className="text-xs text-[#cbbd9e]">
                  We saved a spot for you. Confirmation details sent to your phone.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="border-b border-[#d4af37]/20 pb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37]">
                    Online Booking
                  </span>
                  <h3 className="font-serif text-2xl italic text-[#f4ead6]">Reserve Your Chair</h3>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#cbbd9e] mb-1">
                    Select Service
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-[#0c0b0a] border border-[#d4af37]/30 text-xs px-3 py-2.5 text-[#f4ead6] focus:border-[#d4af37] focus:outline-none"
                  >
                    <option value="">Choose a service...</option>
                    {services.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name} ({s.price})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#cbbd9e] mb-1">
                      Date
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full bg-[#0c0b0a] border border-[#d4af37]/30 text-xs px-3 py-2 text-[#f4ead6] focus:border-[#d4af37] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#cbbd9e] mb-1">
                      Barber
                    </label>
                    <select className="w-full bg-[#0c0b0a] border border-[#d4af37]/30 text-xs px-3 py-2.5 text-[#f4ead6] focus:border-[#d4af37] focus:outline-none">
                      <option>Any Available</option>
                      <option>Marcus Vance</option>
                      <option>Leo Rossi</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#cbbd9e] mb-1">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#0c0b0a] border border-[#d4af37]/30 text-xs px-3 py-2.5 text-[#f4ead6] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#cbbd9e] mb-1">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full bg-[#0c0b0a] border border-[#d4af37]/30 text-xs px-3 py-2.5 text-[#f4ead6] focus:border-[#d4af37] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-[#d4af37] text-[#0c0b0a] py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#c29f2e] transition-all"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}