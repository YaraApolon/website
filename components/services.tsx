import { LayoutTemplate, Store, RefreshCcw } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    icon: LayoutTemplate,
    title: 'Landing Pages',
    description: 'Perfect for one-time promotions and lead capture.',
    points: ['Focused single-page layout', 'Lead capture forms', 'Fast turnaround'],
  },
  {
    icon: Store,
    title: 'Business Websites',
    description: 'Full-featured sites with service menus, maps, and booking.',
    points: ['Menus & price lists', 'Google Maps & hours', 'Online booking'],
  },
  {
    icon: RefreshCcw,
    title: 'Website Redesign',
    description: 'Transform your outdated site into a modern sales tool.',
    points: ['Modern, mobile-first UI', 'Speed & SEO boost', 'Clearer calls to action'],
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="Web Solutions Designed to Drive Sales"
          description="Everything a local business needs to turn online visitors into paying customers."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-30px] hover:shadow-primary/40">
                <div className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{service.description}</p>
                <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
