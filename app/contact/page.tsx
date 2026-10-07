"use client"

import React from "react"

import type { Metadata } from "next"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send,
  CheckCircle2,
  Clock
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "seinprince2@gmail.com",
    href: "mailto:seinprince2@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+264 81 478 1478",
    href: "tel:+264814781478",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Windhoek, Namibia",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sein-muwana",
    href: "https://www.linkedin.com/in/sein-muwana-2ab319299/",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 
              className="text-4xl font-bold text-foreground sm:text-5xl"
            >
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I&apos;m always open to discussing new opportunities, collaborations, 
              or just having a conversation about technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 
                className="text-2xl font-bold text-foreground"
              >
                Contact Information
              </h2>
              <p className="mt-4 text-muted-foreground">
                Feel free to reach out through any of the following channels. 
                I typically respond within 24-48 hours.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability */}
              <div className="mt-12 rounded-lg border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-3 w-3 rounded-full bg-primary" />
                  <span className="font-medium text-foreground">Available for Work</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I&apos;m currently open to freelance projects, full-time opportunities, 
                  and collaboration on interesting tech projects.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Response time: 24-48 hours</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              <h2 
                className="text-2xl font-bold text-card-foreground"
              >
                Send a Message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <div className="mt-8 text-center py-12">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Message Sent!</h3>
                  <p className="mt-2 text-muted-foreground">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6 bg-transparent"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What is this about?"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 
            className="text-2xl font-bold text-foreground text-center mb-12"
          >
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">What types of projects are you interested in?</h3>
              <p className="mt-2 text-muted-foreground">
                I&apos;m interested in software development projects, automation solutions, AI/ML implementations, 
                and AgriTech innovations. I&apos;m particularly passionate about projects that create meaningful impact.
              </p>
            </div>
            
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Are you available for remote work?</h3>
              <p className="mt-2 text-muted-foreground">
                Yes, I&apos;m open to both remote and on-site opportunities. I have experience working 
                effectively in remote team environments and using collaboration tools.
              </p>
            </div>
            
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">What is your typical response time?</h3>
              <p className="mt-2 text-muted-foreground">
                I typically respond to inquiries within 24-48 hours. For urgent matters, 
                feel free to reach out via phone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
