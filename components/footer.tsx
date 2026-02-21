import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail, Github } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sein-muwana-2ab319299/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:seinprince2@gmail.com",
      icon: Mail,
    },
    {
      name: "GitHub",
      href: "https://github.com/sein-pr",
      icon: Github,
    },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/SD Logo.png" 
              alt="SD Logo" 
              width={40} 
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-lg text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              Sein Muwana
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sein Muwana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
