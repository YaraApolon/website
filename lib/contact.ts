export const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/yara11.as256@gmail.com'

export const SERVICE_OPTIONS = ['Landing Page', 'Business Website', 'Website Redesign'] as const

export type ContactField = 'name' | 'email' | 'business' | 'services' | 'message'

export type ContactValues = {
  name: string
  email: string
  business: string
  message: string
  services: string[]
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function parseContactForm(formData: FormData): ContactValues {
  return {
    name: String(formData.get('name') ?? '').trim().slice(0, 100),
    email: String(formData.get('email') ?? '').trim().slice(0, 200),
    business: String(formData.get('business') ?? '').trim().slice(0, 150),
    message: String(formData.get('message') ?? '').trim().slice(0, 2000),
    services: formData
      .getAll('services')
      .map(String)
      .filter((s) => (SERVICE_OPTIONS as readonly string[]).includes(s)),
  }
}

export function validateContact(values: ContactValues): Partial<Record<ContactField, string>> {
  const errors: Partial<Record<ContactField, string>> = {}
  if (values.name.length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (values.business.length < 2) errors.business = 'Please enter your business name.'
  if (values.services.length === 0) errors.services = 'Select at least one service.'
  return errors
}

export async function sendToFormSubmit(values: ContactValues): Promise<void> {
  const res = await fetch(FORMSUBMIT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      _subject: `New website request from ${values.name} (${values.business})`,
      _template: 'table',
      _captcha: 'false',
      _replyto: values.email,
      Name: values.name,
      Email: values.email,
      Business: values.business,
      Services: values.services.join(', '),
      Message: values.message || '—',
    }),
  })

  const data = (await res.json().catch(() => null)) as { success?: string | boolean; message?: string } | null
  if (!res.ok || !data || String(data.success) !== 'true') {
    throw new Error(data?.message || `FormSubmit request failed (${res.status})`)
  }
}
