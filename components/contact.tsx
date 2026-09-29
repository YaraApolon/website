'use client'

import { useState, type ComponentProps, type FormEvent } from 'react'
import { ArrowRight, ArrowUpRight, CheckCircle2, Clock, Mail, Loader2, Send, type LucideProps } from 'lucide-react'
import {
  SERVICE_OPTIONS as SERVICES,
  parseContactForm,
  sendToFormSubmit,
  validateContact,
  type ContactField,
  type ContactValues,
} from '@/lib/contact'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<ContactField, string>>
  values?: ContactValues
}

const inputClass =
  'w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 aria-[invalid=true]:border-destructive'

function InstagramIcon(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...(props as ComponentProps<'svg'>)}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const SOCIALS = [
  { label: 'Telegram', handle: '@YaraApolon', href: 'https://t.me/YaraApolon', Icon: Send },
  { label: 'Instagram', handle: '@yarakurlz', href: 'https://www.instagram.com/yarakurlz/', Icon: InstagramIcon },
] as const

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-sm text-destructive">
      {message}
    </p>
  )
}

export function Contact() {
  const [state, setState] = useState<ContactState>({ status: 'idle' })
  const [pending, setPending] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (pending) return

    const values = parseContactForm(new FormData(event.currentTarget))
    const fieldErrors = validateContact(values)
    if (Object.keys(fieldErrors).length > 0) {
      setState({ status: 'error', message: 'Please fix the highlighted fields.', errors: fieldErrors, values })
      return
    }

    setPending(true)
    try {
      await sendToFormSubmit(values)
      setState({
        status: 'success',
        message: `Thanks, ${values.name}! I'll send your free concept for ${values.business} within 48 hours.`,
      })
    } catch (error) {
      console.error('[formsubmit]', error)
      setState({
        status: 'error',
        message: 'Sorry, your message could not be sent. Please try again or email me directly.',
        values,
      })
    } finally {
      setPending(false)
    }
  }

  const errors = state.errors ?? {}
  const values = state.values

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden border-t border-border bg-card/40 px-5 py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 top-20 -z-10 size-[480px] rounded-full bg-primary/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 id="contact-title" className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            Ready to Get More Customers?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Tell me about your business and I&apos;ll design a free homepage concept — no strings attached.
          </p>
          <ul className="mt-10 flex flex-col gap-5">
            <li className="flex items-center gap-4">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
                <Clock className="size-5" aria-hidden="true" />
              </span>
              <span className="text-muted-foreground">Reply within 24 hours</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <a href="mailto:yara11.as256@gmail.com" className="text-muted-foreground hover:text-foreground">
                yara11.as256@gmail.com
              </a>
            </li>
          </ul>

          <div className="mt-10">
            <p className="text-sm font-medium text-foreground">Find me on social</p>
            <ul className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              {SOCIALS.map(({ label, handle, href, Icon }) => (
                <li key={label} className="flex-1">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label}: ${handle} (opens in a new tab)`}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 transition-colors hover:border-primary/60 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="text-xs text-muted-foreground">{label}</span>
                      <span className="truncate text-sm font-medium text-foreground">{handle}</span>
                    </span>
                    <ArrowUpRight
                      className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-3">
          {state.status === 'success' ? (
            <div
              role="status"
              className="flex h-full flex-col items-center justify-center rounded-2xl border border-primary/40 bg-background p-10 text-center"
            >
              <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-semibold">Request received</h3>
              <p className="mt-2 max-w-sm text-muted-foreground">{state.message}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5 rounded-2xl border border-border bg-background p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="Jane Doe"
                    defaultValue={values?.name}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={inputClass}
                  />
                  <FieldError id="name-error" message={errors.name} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="jane@business.com"
                    defaultValue={values?.email}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={inputClass}
                  />
                  <FieldError id="email-error" message={errors.email} />
                </div>
              </div>

              <div>
                <label htmlFor="business" className="mb-2 block text-sm font-medium">
                  Business Name
                </label>
                <input
                  id="business"
                  name="business"
                  autoComplete="organization"
                  required
                  placeholder="Sunrise Café"
                  defaultValue={values?.business}
                  aria-invalid={!!errors.business}
                  aria-describedby={errors.business ? 'business-error' : undefined}
                  className={inputClass}
                />
                <FieldError id="business-error" message={errors.business} />
              </div>

              <fieldset aria-describedby={errors.services ? 'services-error' : undefined}>
                <legend className="mb-2 block text-sm font-medium">{"Services You're Interested In"}</legend>
                <div className="grid gap-3 sm:grid-cols-3">
                  {SERVICES.map((service) => (
                    <label
                      key={service}
                      className={cn(
                        'flex cursor-pointer items-center gap-3 rounded-xl border border-input px-4 py-3 text-sm transition-colors hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-accent has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary/30',
                        errors.services && 'border-destructive',
                      )}
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        defaultChecked={values?.services.includes(service)}
                        className="size-4 accent-[var(--primary)]"
                      />
                      {service}
                    </label>
                  ))}
                </div>
                <FieldError id="services-error" message={errors.services} />
              </fieldset>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell me a bit about your business and goals..."
                  defaultValue={values?.message}
                  className={cn(inputClass, 'resize-none')}
                />
              </div>

              {state.status === 'error' && state.message && (
                <p role="alert" className="text-sm text-destructive">
                  {state.message}
                </p>
              )}

              <button
                type="submit"
                disabled={pending}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-medium text-primary-foreground shadow-[0_0_40px_-10px] shadow-primary/60 transition-all hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-70"
              >
                {pending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    Request Free Concept
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
