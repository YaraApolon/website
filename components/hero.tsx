import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'

const highlights = ['Launch in 3 days', 'Mobile-first design', 'Built to convert']

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-16">
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-24 -z-10 size-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col items-start justify-center px-5 py-24">
        <span className="animate-in fade-in slide-in-from-bottom-2 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-accent-foreground duration-700">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Booking new projects this month
        </span>

        <h1 className="animate-in fade-in slide-in-from-bottom-4 mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight duration-700 sm:text-6xl lg:text-7xl">
          I Build <span className="text-primary">High-Converting</span> Websites That Grow Local Businesses.
        </h1>

        <p className="animate-in fade-in slide-in-from-bottom-4 mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground delay-150 duration-700 fill-mode-both">
          Get a custom-made website for your café, barber shop, or service business in just 5 days.
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-4 mt-10 flex flex-col gap-4 delay-300 duration-700 fill-mode-both sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-medium text-primary-foreground shadow-[0_0_40px_-8px] shadow-primary/60 transition-transform hover:-translate-y-0.5"
          >
            Get a Free Website Preview
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 font-medium transition-colors hover:bg-secondary"
          >
            See My Work
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check className="size-4 text-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
