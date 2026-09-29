export const projects = [
  {
    slug: 'cafe-bistro',
    title: 'Modern Bistro Website',
    client: 'Cafe Bistro',
    image: '/images/project-bistro.png',
    description:
      'A warm, appetizing site with an online menu and table reservations that increased bookings.',
    tags: ['Business Website', 'Reservations'],
  },
  {
    slug: 'local-barber',
    title: 'Classic Barbershop Page',
    client: 'Local Barber',
    image: '/images/project-barber.png',
    description: 'A bold, vintage-inspired page with a clear price list and one-tap appointment booking.',
    tags: ['Landing Page', 'Booking'],
  },
  {
    slug: 'car-spa',
    title: 'Premium Car Detailing Site',
    client: 'Car Spa',
    image: '/images/project-detailing.png',
    description: 'A sleek redesign showcasing detailing packages with before-and-after galleries and quotes.',
    tags: ['Redesign', 'Lead Capture'],
  },
] as const

export type ProjectSlug = (typeof projects)[number]['slug']

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
