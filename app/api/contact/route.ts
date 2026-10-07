import { NextResponse } from "next/server"
import { z } from "zod"

export const dynamic = "force-dynamic"

const schema = z.object({
  name: z.string().trim().min(1, "Enter your name.").max(100),
  email: z.string().trim().email("Enter a valid email address.").max(200),
  subject: z.string().trim().min(1, "Add a subject.").max(150),
  message: z.string().trim().min(10, "Write at least a sentence.").max(5000),
  // Honeypot: real visitors never fill this in.
  website: z.string().max(200).optional(),
})

const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("contact: RESEND_API_KEY is not set")
    return NextResponse.json(
      { error: "The contact form isn't configured yet. Please email seinprince2@gmail.com directly." },
      { status: 503 },
    )
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again in a few minutes." }, { status: 429 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    const fields = parsed.error.flatten().fieldErrors
    return NextResponse.json({ error: "Please check the highlighted fields.", fields }, { status: 400 })
  }

  const { name, email, subject, message, website } = parsed.data
  // Honeypot tripped: pretend success so bots learn nothing.
  if (website) return NextResponse.json({ ok: true })

  const to = process.env.CONTACT_TO_EMAIL || "seinprince2@gmail.com"
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio contact <onboarding@resend.dev>"

  const html = `
    <p><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt; sent a message from your portfolio.</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html,
        text: `${name} <${email}>\n\n${message}`,
      }),
    })

    if (!res.ok) {
      console.error("contact: Resend responded", res.status, await res.text())
      return NextResponse.json(
        { error: "Your message couldn't be sent. Please try again, or email seinprince2@gmail.com." },
        { status: 502 },
      )
    }
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("contact: request to Resend failed", error)
    return NextResponse.json(
      { error: "Your message couldn't be sent. Please try again, or email seinprince2@gmail.com." },
      { status: 502 },
    )
  }
}
