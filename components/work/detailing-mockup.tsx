"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ShieldCheck,
  Droplets,
  Car,
  Check,
  X,
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  Flame,
  ArrowRight,
} from "lucide-react";

export function DetailingMockup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("Studio Precision");
  const [vehicleType, setVehicleType] = useState("Sedan / Coupe");
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const packages = [
    {
      name: "Reset Detail",
      price: "$149",
      badge: "Essential",
      desc: "Complete deep refresh for daily drivers looking to restore showroom cleanliness.",
      points: [
        "pH-neutral safe hand wash",
        "Deep interior vacuum & steam clean",
        "Tire dressing & rim decontamination",
        "Interior glass & dash protection",
      ],
      featured: false,
    },
    {
      name: "Studio Precision",
      price: "$349",
      badge: "Most Popular",
      desc: "1-stage paint enhancement combined with intense interior sanitization.",
      points: [
        "All Reset Detail features included",
        "Clay bar treatment & iron decontamination",
        "1-stage machine paint polish (removes 60%+ swirls)",
        "Leather seat conditioning & stain defense",
        "Engine bay deep cleaning & dressing",
      ],
      featured: true,
    },
    {
      name: "Ceramic Shield",
      price: "$899",
      badge: "Ultimate Defense",
      desc: "Multi-stage correction sealed with professional 3-year hydrophobic ceramic coating.",
      points: [
        "All Studio Precision features included",
        "2-stage paint correction (removes 90%+ scratches)",
        "3-Year certified Ceramic Coating application",
        "Hydrophobic glass & rim coating",
        "2-Year warranty & gloss inspection certificate",
      ],
      featured: false,
    },
  ];

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => {
      setQuoteSubmitted(false);
      setIsModalOpen(false);
    }, 2200);
  };

  const openQuoteFor = (pkgName?: string) => {
    if (pkgName) setSelectedPackage(pkgName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07090d] text-white font-sans selection:bg-sky-500 selection:text-black">
      {/* Glow Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-1/2 top-0 -translate-x-1/2 size-[600px] rounded-full bg-sky-500/10 blur-[140px]"
      />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#07090d]/80 backdrop-blur-xl border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-400">
              <Sparkles className="size-5" />
            </div>
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-white">
              Car Spa <span className="text-sky-400">Studio</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-slate-400">
            <a href="#packages" className="hover:text-sky-400 transition-colors">
              Packages
            </a>
            <a href="#proofs" className="hover:text-sky-400 transition-colors">
              Before/After
            </a>
            <a href="#features" className="hover:text-sky-400 transition-colors">
              Technology
            </a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">
              Contact
            </a>
          </nav>

          <button
            onClick={() => openQuoteFor()}
            className="rounded-full bg-sky-400 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 hover:bg-sky-300 transition-all shadow-lg shadow-sky-400/20"
          >
            Get a Quote
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-20">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-sky-300">
              <Flame className="size-3.5 fill-sky-300" /> Paint. Interior. Ceramic Defense.
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Your car, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500">
                after the storm.
              </span>
            </h1>

            <p className="max-w-xl text-base md:text-lg text-slate-400 leading-relaxed">
              Precision studio detailing with paint correction, hydrophobicity testing,
              and 3-year ceramic armor. Restoring mirror reflections since 2018.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => openQuoteFor()}
                className="group flex items-center gap-2 rounded-full bg-sky-400 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-sky-300 transition-all shadow-lg shadow-sky-400/25"
              >
                Instant Quote <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#proofs"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:bg-white/10 transition-all"
              >
                See Transformation
              </a>
            </div>

            {/* Quick Stats */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/10">
              <div>
                <p className="text-2xl font-bold text-white font-mono">99.8%</p>
                <p className="text-[11px] text-slate-500 uppercase tracking-wider mt-0.5">Gloss Rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-mono">3-Year</p>
                <p className="text-[11px] text-slate-500 uppercase tracking-wider mt-0.5">Ceramic Guarantee</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-mono">500+</p>
                <p className="text-[11px] text-slate-500 uppercase tracking-wider mt-0.5">Cars Perfected</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="md:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/5 p-2 shadow-2xl backdrop-blur-xl">
              <div className="relative h-[380px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
                  alt="Ceramic Coated Supercar"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-3">
                    <Droplets className="size-5 text-sky-400" />
                    <div>
                      <p className="text-xs font-bold text-white">9H Ceramic Shield</p>
                      <p className="text-[10px] text-slate-400">Hydrophobic Sheeting Active</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-sky-400/20 text-sky-300 uppercase">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 border-t border-white/10 bg-[#0a0d14]/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-16">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-sky-400">Tailored Care</p>
            <h2 className="text-4xl font-bold text-white tracking-tight">Detailing Packages</h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              Transparent flat-rate pricing. Upgrade options available for larger SUVs and trucks.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 items-stretch">
            {packages.map((pack) => (
              <article
                key={pack.name}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  pack.featured
                    ? "bg-gradient-to-b from-sky-950/40 via-slate-900/90 to-slate-950 border-2 border-sky-400 shadow-2xl shadow-sky-500/10 scale-[1.02]"
                    : "bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-xl"
                }`}
              >
                {pack.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-sky-400 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-950 shadow-md">
                    {pack.badge}
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-sky-300">{pack.name}</p>
                      <p className="mt-3 text-4xl font-bold font-mono text-white">{pack.price}</p>
                    </div>
                    {!pack.featured && (
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/10 text-slate-400">
                        {pack.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-xs text-slate-400 leading-relaxed">{pack.desc}</p>

                  <ul className="mt-8 space-y-3 text-xs text-slate-300">
                    {pack.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <Check className="size-4 shrink-0 text-sky-400 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => openQuoteFor(pack.name)}
                  className={`mt-8 w-full rounded-2xl py-3 text-xs font-bold uppercase tracking-wider transition-all ${
                    pack.featured
                      ? "bg-sky-400 text-slate-950 hover:bg-sky-300 shadow-lg shadow-sky-400/20"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  }`}
                >
                  Book {pack.name}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section id="proofs" className="border-t border-white/10 py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-sky-400">Proof of Quality</p>
            <h2 className="text-4xl font-bold text-white tracking-tight">Paint Correction Transformation</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Before Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-rose-500/20 bg-white/5">
              <div className="relative h-72 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=800&q=80"
                  alt="Before Polish"
                  fill
                  className="object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute top-4 left-4 rounded-full bg-rose-500/20 border border-rose-500/40 px-4 py-1.5 backdrop-blur-md">
                  <span className="text-xs font-mono uppercase tracking-widest text-rose-300">Before — Swirls & Oxidation</span>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-white">Heavily Oxidized Paintwork</h3>
                <p className="text-xs text-slate-400">
                  Micro-scratches from automated car washes, water spots, and faded clear coat sheen.
                </p>
              </div>
            </div>

            {/* After Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-sky-400/30 bg-white/5">
              <div className="relative h-72 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1607603750909-408e193868c7?auto=format&fit=crop&w=800&q=80"
                  alt="After Ceramic Polish"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 rounded-full bg-sky-400/20 border border-sky-400/40 px-4 py-1.5 backdrop-blur-md">
                  <span className="text-xs font-mono uppercase tracking-widest text-sky-300">After — 2-Stage + Ceramic</span>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold text-white">Deep Wet-Look Mirror Finish</h3>
                <p className="text-xs text-slate-400">
                  95%+ defect removal, 9H ceramic hydrophobicity, and deep color saturation restored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="border-t border-white/10 bg-[#05070a] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
            <MapPin className="size-6 text-sky-400" />
            <h3 className="text-lg font-bold text-white">Studio Location</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              742 Industrial Parkway, Bay 12<br />
              North Auto District, NY 10013
            </p>
          </div>

          <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
            <Clock className="size-6 text-sky-400" />
            <h3 className="text-lg font-bold text-white">Operating Hours</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mon – Fri: 8:00 AM – 6:00 PM<br />
              Saturday: By Appointment Only
            </p>
          </div>

          <div className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10">
            <Phone className="size-6 text-sky-400" />
            <h3 className="text-lg font-bold text-white">Direct Line</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Booking: (555) 839-2001<br />
              Email: quotes@carspastudio.com
            </p>
          </div>
        </div>
      </section>

      {/* Modal: Get a Quote */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#0b0e14] border border-white/20 max-w-md w-full rounded-3xl p-8 relative shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X className="size-5" />
            </button>

            {quoteSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="size-14 text-sky-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Quote Request Received!</h3>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Our detailing technician will review your vehicle specs and contact you within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400">
                    Fast Estimate
                  </span>
                  <h3 className="text-2xl font-bold text-white">Get a Same-Day Quote</h3>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                    Select Package
                  </label>
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="w-full bg-[#141824] border border-white/10 rounded-xl text-xs px-3.5 py-2.5 text-white focus:border-sky-400 focus:outline-none"
                  >
                    {packages.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name} ({p.price})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                    Vehicle Category
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["Sedan / Coupe", "SUV / Crossover", "Truck / Supercar"].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setVehicleType(type)}
                        className={`py-2 px-1 text-[10px] font-mono uppercase rounded-xl border transition-all ${
                          vehicleType === type
                            ? "bg-sky-400/20 border-sky-400 text-sky-300"
                            : "bg-[#141824] border-white/10 text-slate-400 hover:border-white/20"
                        }`}
                      >
                        {type.split(" ")[0]}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                    Car Make & Model
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. BMW M4 2023"
                    className="w-full bg-[#141824] border border-white/10 rounded-xl text-xs px-3.5 py-2.5 text-white focus:border-sky-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                    Phone or Email
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="john@example.com"
                    className="w-full bg-[#141824] border border-white/10 rounded-xl text-xs px-3.5 py-2.5 text-white focus:border-sky-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-sky-400 text-slate-950 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-sky-300 transition-all shadow-lg shadow-sky-400/20"
                >
                  Send Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}