import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export function DemoFrame({
  client,
  children,
}: {
  client: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-svh bg-background">
      <div className="sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-border bg-background/90 px-4 py-3 backdrop-blur-xl sm:px-6">
        <p className="truncate text-sm text-muted-foreground">
          Live mockup · <span className="text-foreground">{client}</span>
        </p>
        <Link
          href="/#portfolio"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to portfolio
        </Link>
      </div>
      {children}
    </div>
  )
}
