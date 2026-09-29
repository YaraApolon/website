import type { ComponentType } from 'react'
import { notFound } from 'next/navigation'
import { BarberMockup } from '@/components/work/barber-mockup'
import { BistroMockup } from '@/components/work/bistro-mockup'
import { DetailingMockup } from '@/components/work/detailing-mockup'
import { DemoFrame } from '@/components/work/demo-frame'
import { getProject, projects, type ProjectSlug } from '@/lib/projects'

const mockups: Record<ProjectSlug, ComponentType> = {
  'cafe-bistro': BistroMockup,
  'local-barber': BarberMockup,
  'car-spa': DetailingMockup,
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Work' }
  return {
    title: `${project.title} — ${project.client}`,
    description: project.description,
  }
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const Mockup = mockups[project.slug]

  return (
    <DemoFrame client={project.client}>
      <Mockup />
    </DemoFrame>
  )
}
