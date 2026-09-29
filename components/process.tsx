import { MessagesSquare, PenTool, Code2, Rocket } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  { icon: MessagesSquare, title: 'Consultation', description: 'Discuss your business goals.' },
  { icon: PenTool, title: 'Concept & Design', description: 'Get a free concept for approval.' },
  { icon: Code2, title: 'Development', description: 'We build your responsive website.' },
  { icon: Rocket, title: 'Launch & Support', description: 'Your new site goes live.' },
]

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="process-title"
          eyebrow="Process"
          title="How It Works"
          description="A simple, transparent path from first call to launch day."
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:right-6 md:h-px md:w-auto md:bg-gradient-to-r"
          />
        <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 120} className="relative flex gap-6 md:flex-col">
                <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-background text-primary shadow-[0_0_30px_-6px] shadow-primary/50">
                  <step.icon className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">Step {String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  )
}
