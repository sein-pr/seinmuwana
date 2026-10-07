import type { Metadata } from "next"
import { Mail, MapPin, Phone, Linkedin } from "lucide-react"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact | Sein Muwana",
  description: "Email Sein Muwana about software, automation or AI work. Based in Windhoek, Namibia.",
}

const channels = [
  { icon: Mail, label: "Email", value: "seinprince2@gmail.com", href: "mailto:seinprince2@gmail.com" },
  { icon: Phone, label: "Phone", value: "+264 81 478 1478", href: "tel:+264814781478" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sein-muwana",
    href: "https://www.linkedin.com/in/sein-muwana-2ab319299/",
  },
  { icon: MapPin, label: "Location", value: "Windhoek, Namibia", href: null },
]

const faqs = [
  {
    q: "What kind of work are you looking for?",
    a: "Software development, process automation and applied AI. I've built user-access tooling and RPA bots at a bank, and my research is in crop disease detection.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes. I'm based in Windhoek and open to remote, hybrid or on-site roles.",
  },
  {
    q: "What's the quickest way to reach you?",
    a: "Email. For anything urgent, call or message me on the number above.",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Tell me what you're building."
        description="Open to full-time roles, freelance work and collaborations. Send a message or use any of the channels below."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <h2 className="text-2xl text-foreground">Contact details</h2>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {channels.map((item) => (
                <li key={item.label} className="flex items-center gap-4 py-4">
                  <item.icon className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-block min-h-6 break-all text-base text-foreground underline-offset-4 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base text-foreground">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-foreground">Send a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="fog">
        <h2 className="text-4xl text-foreground sm:text-[2.5rem]">Common questions</h2>
        <dl className="mt-10 grid gap-8 md:grid-cols-3">
          {faqs.map((item) => (
            <div key={item.q}>
              <dt className="text-lg font-semibold text-foreground">{item.q}</dt>
              <dd className="mt-2 text-base leading-[1.55] text-graphite">{item.a}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  )
}
