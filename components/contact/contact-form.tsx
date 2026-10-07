"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Status = "idle" | "sending" | "sent" | "error"
type FieldErrors = Partial<Record<"name" | "email" | "subject" | "message", string[]>>

const empty = { name: "", email: "", subject: "", message: "", website: "" }

export function ContactForm() {
  const [values, setValues] = useState(empty)
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")
  const [code, setCode] = useState("")
  const [reason, setReason] = useState("")
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const update = (key: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }))

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")
    setError("")
    setCode("")
    setReason("")
    setFieldErrors({})

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string; code?: string; reason?: string; fields?: FieldErrors }

      if (!res.ok) {
        setFieldErrors(data.fields ?? {})
        setError(data.error ?? "Your message couldn't be sent. Please try again.")
        setCode(data.code ?? "")
        setReason(data.reason ?? "")
        setStatus("error")
        return
      }
      setValues(empty)
      setStatus("sent")
    } catch {
      setError("You appear to be offline. Check your connection and try again.")
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-lg border border-border bg-fog p-8">
        <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
          <motion.circle cx="24" cy="24" r="21" stroke="#9671ff" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} />
          <motion.path d="M15 25l6 6 12-13" stroke="#1d1d1d" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }} />
        </svg>
        <h3 className="mt-4 text-2xl text-foreground">Message sent</h3>
        <p className="mt-2 text-base leading-[1.55] text-graphite">
          Thanks for writing. I&apos;ll reply to the email address you gave.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another
        </Button>
      </div>
    )
  }

  const sending = status === "sending"

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false} aria-busy={sending}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={fieldErrors.name?.[0]}>
          <Input id="name" name="name" autoComplete="name" required maxLength={100} value={values.name} onChange={update("name")} disabled={sending} aria-invalid={!!fieldErrors.name} />
        </Field>
        <Field id="email" label="Email" error={fieldErrors.email?.[0]}>
          <Input id="email" name="email" type="email" autoComplete="email" required maxLength={200} value={values.email} onChange={update("email")} disabled={sending} aria-invalid={!!fieldErrors.email} />
        </Field>
      </div>
      <Field id="subject" label="Subject" error={fieldErrors.subject?.[0]}>
        <Input id="subject" name="subject" required maxLength={150} value={values.subject} onChange={update("subject")} disabled={sending} aria-invalid={!!fieldErrors.subject} />
      </Field>
      <Field id="message" label="Message" error={fieldErrors.message?.[0]}>
        <Textarea id="message" name="message" rows={6} required minLength={10} maxLength={5000} value={values.message} onChange={update("message")} disabled={sending} aria-invalid={!!fieldErrors.message} />
      </Field>

      {/* Honeypot: hidden from people and assistive tech. */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update("website")} />
      </div>

      <div aria-live="polite">
        {status === "error" && (
          <p className="rounded-lg border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-foreground">{error}
            {code && <span className="mt-1 block text-xs text-muted-foreground">Error code: {code}</span>}
            {reason && <span className="mt-1 block text-xs text-muted-foreground">{reason}</span>}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-auto">
        {sending ? (
          <>
            <Loader2 className="animate-spin motion-reduce:animate-none" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  )
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  )
}
