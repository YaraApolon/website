"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, MapPin, Phone, X, CheckCircle } from "lucide-react";

export function BistroMockup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("pastas");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const menuItems = {
    pastas: [
      { name: "Cacio e Pepe", price: "$22", desc: "Handcrafted tonnarelli, Pecorino Romano, freshly cracked black pepper" },
      { name: "Truffle Tagliatelle", price: "$28", desc: "Fresh egg pasta, black truffle butter, aged Parmesan" },
      { name: "Rigatoni Bolognese", price: "$25", desc: "Slow-cooked beef & pork ragù, San Marzano tomatoes, basil" },
    ],
    starters: [
      { name: "Burrata & Heritage Tomatoes", price: "$18", desc: "Pugliese burrata, heirloom tomatoes, basil oil, grilled sourdough" },
      { name: "Beef Carpaccio", price: "$20", desc: "Prime beef tenderloin, capers, wild arugula, shaved Parmigiano" },
    ],
    wines: [
      { name: "Barolo DOCG 2018", price: "$16 / $75", desc: "Piedmont, Italy — Rich red fruit, rose petal, subtle spice" },
      { name: "Etna Bianco 2021", price: "$14 / $62", desc: "Sicily, Italy — Crisp minerality, citrus, green apple" },
    ],
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#f7f3ed] text-[#2c2420] font-sans">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-2xl font-serif font-bold tracking-tight text-[#2c2420]">Cafe Bistro</span>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5c4f46]">
          <a href="#menu" className="hover:text-[#2c2420] transition-colors">Menu</a>
          <a href="#evenings" className="hover:text-[#2c2420] transition-colors">Evenings</a>
          <a href="#visit" className="hover:text-[#2c2420] transition-colors">Visit</a>
        </nav>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#c85a32] hover:bg-[#b04b27] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow"
        >
          Reserve a table
        </button>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-12 gap-12 items-center">
        {/* Left Text Column */}
        <div className="md:col-span-5 space-y-6">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-[#8c7b70]">
            EST. 2019 · DOWNTOWN
          </span>
          <h1 className="text-5xl md:text-6xl font-serif leading-[1.1] text-[#2c2420]">
            Evenings start at our table.
          </h1>
          <p className="text-lg text-[#6e5d53] leading-relaxed">
            Seasonal plates, house pasta, and a wine list built for long conversations.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#menu"
              className="bg-[#2d4030] hover:bg-[#213024] text-white px-6 py-3 rounded-full text-sm font-medium transition-all"
            >
              See tonight's menu
            </a>
            <span className="px-4 py-2.5 rounded-full border border-[#e2d7cb] text-xs font-medium text-[#6e5d53] bg-[#f2ebe1]">
              Open 11am–11pm
            </span>
          </div>
        </div>

        {/* Right Visual Bento Grid */}
        <div className="md:col-span-7 grid grid-cols-2 gap-4 h-[480px]">
          <div className="relative rounded-3xl overflow-hidden group col-span-2 md:col-span-1 row-span-2 min-h-[240px]">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
              alt="Bistro Interior"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-white text-xs font-mono uppercase tracking-wider">Atmosphere</span>
          </div>

          <div className="relative rounded-3xl overflow-hidden group min-h-[200px]">
            <Image
              src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
              alt="Fresh Pasta"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="relative rounded-3xl overflow-hidden group min-h-[200px]">
            <Image
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80"
              alt="Wine and Cheese"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-[#efe7dc] border-t border-[#e2d7cb]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8c7b70]">Crafted Daily</span>
            <h2 className="text-4xl font-serif text-[#2c2420]">Tonight's Menu</h2>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-3 mb-10">
            {["pastas", "starters", "wines"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-[#2c2420] text-white"
                    : "bg-white/60 text-[#6e5d53] hover:bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items List */}
          <div className="space-y-6">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, idx) => (
              <div key={idx} className="bg-[#f7f3ed] p-6 rounded-2xl flex justify-between items-start gap-4 shadow-sm">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-[#2c2420]">{item.name}</h3>
                  <p className="text-sm text-[#6e5d53] mt-1">{item.desc}</p>
                </div>
                <span className="font-mono text-sm font-semibold text-[#c85a32] whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Visit Section */}
      <section id="visit" className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div className="bg-white/80 p-8 rounded-3xl space-y-4 border border-[#e2d7cb]">
          <MapPin className="size-6 text-[#c85a32]" />
          <h3 className="text-xl font-serif font-semibold">Location</h3>
          <p className="text-sm text-[#6e5d53]">142 Mercer Street, Downtown<br />New York, NY 10012</p>
        </div>

        <div className="bg-white/80 p-8 rounded-3xl space-y-4 border border-[#e2d7cb]">
          <Clock className="size-6 text-[#2d4030]" />
          <h3 className="text-xl font-serif font-semibold">Hours</h3>
          <p className="text-sm text-[#6e5d53]">Tue – Sun: 11:00 AM – 11:00 PM<br />Monday: Closed</p>
        </div>

        <div className="bg-white/80 p-8 rounded-3xl space-y-4 border border-[#e2d7cb]">
          <Phone className="size-6 text-[#c85a32]" />
          <h3 className="text-xl font-serif font-semibold">Reservations</h3>
          <p className="text-sm text-[#6e5d53]">Direct line: (212) 555-0182<br />Email: hello@cafebistro.com</p>
        </div>
      </section>

      {/* Modal: Reserve Table */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#f7f3ed] max-w-md w-full rounded-3xl p-8 relative shadow-2xl border border-[#e2d7cb]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-[#8c7b70] hover:text-[#2c2420]"
            >
              <X className="size-5" />
            </button>

            {bookingSuccess ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle className="size-12 text-[#2d4030] mx-auto" />
                <h3 className="text-2xl font-serif text-[#2c2420]">Table Reserved!</h3>
                <p className="text-sm text-[#6e5d53]">We look forward to hosting you tonight.</p>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4">
                <h3 className="text-2xl font-serif text-[#2c2420] mb-2">Reserve a Table</h3>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#8c7b70] mb-1">Your Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e2d7cb] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c85a32]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8c7b70] mb-1">Date</label>
                    <input
                      required
                      type="date"
                      className="w-full px-3 py-2.5 rounded-xl border border-[#e2d7cb] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c85a32]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8c7b70] mb-1">Guests</label>
                    <select className="w-full px-3 py-2.5 rounded-xl border border-[#e2d7cb] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c85a32]">
                      <option>2 People</option>
                      <option>4 People</option>
                      <option>6+ People</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 bg-[#c85a32] hover:bg-[#b04b27] text-white py-3 rounded-full text-sm font-medium transition-all"
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