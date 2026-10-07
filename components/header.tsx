"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Certifications", href: "/certifications" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
]

export function Header() {
  const pathname = usePathname()
  // Remember the route the menu was opened on, so navigating closes it without an effect.
  const [openedOn, setOpenedOn] = useState<string | null>(null)
  const mobileMenuOpen = openedOn === pathname
  const setMobileMenuOpen = (open: boolean) => setOpenedOn(open ? pathname : null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // On the home page the bar floats transparent over the hero until you scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenedOn(null)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [mobileMenuOpen])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header
      className={cn(
        "print:hidden sticky top-0 z-50 w-full border-b text-white transition-colors duration-300",
        pathname === "/" && !scrolled && !mobileMenuOpen ? "border-transparent bg-transparent" : "border-white/10 bg-carbon",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className="flex min-h-11 items-center gap-2.5">
          <Image
            src="/SD Logo.png"
            alt=""
            width={40}
            height={28}
            className="h-7 w-auto object-contain brightness-0 invert"
          />
          <span className="hidden text-base font-semibold sm:block">Sein Muwana</span>
        </Link>

        <div className="hidden h-full lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "flex h-full items-center border-b-2 text-base font-medium transition-colors",
                isActive(item.href)
                  ? "border-white text-white"
                  : "border-transparent text-white/70 hover:text-white",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex h-9 items-center gap-2 rounded-full border border-white/20 pl-3 pr-2 text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
            aria-label="Search the site"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search
            <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-sans text-xs text-white/70">Ctrl K</kbd>
          </button>
          <Link href="/cv" className="text-base font-medium text-white/70 transition-colors hover:text-white">
            View CV
          </Link>
          <Button asChild variant="secondary" size="sm">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        <div className="flex items-center lg:hidden">
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          aria-label="Search the site"
          className="inline-flex size-11 items-center justify-center rounded-full text-white hover:bg-white/10"
        >
          <Search className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-white hover:bg-white/10 lg:hidden"
          ref={toggleRef}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div id="mobile-menu" className="border-t border-white/10 lg:hidden">
          <div className="space-y-1 px-6 pb-5 pt-3">
            {[...navigation, { name: "CV", href: "/cv" }].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block rounded-lg px-3 py-3 text-base font-medium",
                  isActive(item.href) ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild variant="secondary" className="w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
      <CommandMenu open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  )
}
