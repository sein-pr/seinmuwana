import { NextResponse } from "next/server"
import { z } from "zod"

export const dynamic = "force-dynamic"

const noControls = (s: string) => !/[\r\n]/.test(s)

const schema = z.object({
  name: z.string().trim().min(1, "Enter your name.").max(100),
  email: z.string().trim().email("Enter a valid email address.").max(200),
  subject: z.string().trim().min(1, "Add a subject.").max(150).refine(noControls, "No line breaks in the subject."),
  message: z.string().trim().min(10, "Write at least a sentence.").max(5000),
  // Honeypot: real visitors never fill this in.
  website: z.string().max(200).optional(),
  turnstileToken: z.string().max(4096).optional(),
})

const TEST_FROM = "Portfolio contact <onboarding@resend.dev>"
const FREE_MAIL = new Set(["gmail.com", "googlemail.com", "outlook.com", "hotmail.com", "yahoo.com", "icloud.com", "live.com", "proton.me", "protonmail.com"])

const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()
const SITE_ORIGINS = new Set(["https://seinmuwana.netlify.app"])
const MAX_BODY_BYTES = 16 * 1024

/** Strip CR/LF and other control characters so a field can never inject mail headers. */
const clean = (s: string) => s.replace(/[\u0000-\u001f\u007f]+/g, " ").trim()

function clientIp(request: Request) {
  // Netlify sets this itself, so a visitor cannot spoof it the way they can x-forwarded-for.
  return (
    request.headers.get("x-nf-client-connection-ip") ??
    request.headers.get("x-forwarded-for")?.split(",").pop()?.trim() ??
    "unknown"
  )
}

function originAllowed(request: Request) {
  const origin = request.headers.get("origin")
  if (!origin) return false
  if (SITE_ORIGINS.has(origin)) return true
  try {
    const { hostname } = new URL(origin)
    // Netlify deploy previews and local development.
    return (hostname.endsWith(".netlify.app") && hostname.includes("--seinmuwana")) || hostname === "localhost"
  } catch {
    return false
  }
}

async function turnstileOk(token: string | undefined, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true // Not configured: the other defences still apply.
  if (!token) return false
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    })
    return ((await res.json()) as { success?: boolean }).success === true
  } catch {
    return false
  }
}

function rateLimited(ip: string) {
  const now = Date.now()
  if (hits.size > 5000) hits.clear()
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

  if (!originAllowed(request)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 403 })
  }
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return NextResponse.json({ error: "Invalid request." }, { status: 415 })
  }
  if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Message is too large." }, { status: 413 })
  }

  const ip = clientIp(request)
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

  const { website, turnstileToken } = parsed.data
  const name = clean(parsed.data.name)
  const email = clean(parsed.data.email)
  const subject = clean(parsed.data.subject)
  const message = parsed.data.message
  // Honeypot tripped: pretend success so bots learn nothing.
  if (website) return NextResponse.json({ ok: true })
  if (!(await turnstileOk(turnstileToken, ip))) {
    return NextResponse.json({ error: "Verification failed. Refresh the page and try again." }, { status: 400 })
  }

  const to = process.env.CONTACT_TO_EMAIL || "seinprince2@gmail.com"
  const configuredFrom = process.env.CONTACT_FROM_EMAIL || TEST_FROM
  // Resend can only send from a domain you have verified. Free-mail addresses can never be verified.
  const fromDomain = configuredFrom.match(/@([^>\s]+)/)?.[1]?.toLowerCase() ?? ""
  const from = FREE_MAIL.has(fromDomain) ? TEST_FROM : configuredFrom
  if (from !== configuredFrom) {
    console.warn(`contact: CONTACT_FROM_EMAIL uses ${fromDomain}, which Resend cannot verify. Using the test sender instead.`)
  }

  const html = `
    <p><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt; sent a message from your portfolio.</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `

  const send = (sender: string) =>
    fetch(process.env.RESEND_API_URL || "https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: sender,
        to: [to],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html,
        text: `${name} <${email}>\n\n${message}`,
      }),
    })

  try {
    let usedFrom = from
    let res = await send(usedFrom)

    // 403 usually means the sender domain isn't verified yet. Fall back to Resend's test sender once.
    if (res.status === 403 && usedFrom !== TEST_FROM) {
      console.warn(`contact: Resend refused sender "${usedFrom}" (403). Retrying with the test sender.`, await res.text())
      usedFrom = TEST_FROM
      res = await send(usedFrom)
    }

    if (!res.ok) {
      // Resend explains itself in the body (invalid key, test-mode recipient, unverified domain). Keep it in the logs.
      const detail = await res.text()
      console.error(`contact: Resend responded ${res.status} (from: ${usedFrom}, to: ${to})`, detail)
      let reason: string | undefined
      try {
        reason = (JSON.parse(detail) as { message?: string }).message
      } catch {
        reason = undefined
      }
      return NextResponse.json(
        {
          error: "Your message couldn't be sent. Please try again, or email seinprince2@gmail.com.",
          code: `resend_${res.status}`,
          // Only for the site owner: set CONTACT_DEBUG=true in Netlify to see Resend's explanation here.
          ...(process.env.CONTACT_DEBUG === "true" && reason ? { reason } : {}),
        },
        { status: 502 },
      )
    }
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("contact: request to Resend failed", error)
    return NextResponse.json(
      { error: "Your message couldn't be sent. Please try again, or email seinprince2@gmail.com.", code: "resend_unreachable" },
      { status: 502 },
    )
  }
}
