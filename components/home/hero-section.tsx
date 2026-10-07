"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { ProfileSlider } from "@/components/profile-slider"

const tags = ["Full-Stack", "AI & Machine Learning", "Process Automation", "Quality Assurance"]

type GitHubStats = {
  commits: number | null
  projects: number | null
  githubUrl: string
}

export function HeroSection() {
  const [stats, setStats] = useState<GitHubStats | null>(null)

  useEffect(() => {
    fetch("/api/github-stats")
      .then((res) => (res.ok ? (res.json() as Promise<GitHubStats>) : null))
      .then((data) => data && setStats(data))
      .catch(() => {
        // Non-blocking: the hero reads fine without live stats.
      })
  }, [])

  const facts = [
    stats?.commits != null ? `${stats.commits.toLocaleString()} commits` : null,
    stats?.projects != null ? `${stats.projects} public projects` : null,
  ].filter(Boolean)

  return (
    <section className="bg-midnight text-white">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-24">
        <div className="motion-safe:[&>*]:animate-rise">
          <h1 className="text-[2.75rem] leading-[1.05] text-white sm:text-6xl lg:text-[4.5rem]">
            Software that removes the busywork.
          </h1>
          <p style={{ "--delay": "80ms" } as React.CSSProperties} className="mt-6 max-w-xl text-lg leading-[1.55] text-white/80">
            I&apos;m Sein Muwana, a software engineer in Windhoek. I build full-stack systems, AI tools and RPA bots in
            C#, Java and Python, and I&apos;ve shipped them inside a bank.
          </p>

          <ul style={{ "--delay": "160ms" } as React.CSSProperties} className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-periwinkle-tint px-3.5 py-1.5 text-sm font-medium text-carbon"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div style={{ "--delay": "240ms" } as React.CSSProperties} className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact me
                <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/projects">See my work</Link>
            </Button>
          </div>

          <div style={{ "--delay": "320ms" } as React.CSSProperties} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
            <div className="flex items-center gap-4">
              <a
                href={stats?.githubUrl ?? "https://github.com/sein-pr"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sein-muwana-2ab319299/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:seinprince2@gmail.com" aria-label="Email" className="transition-colors hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            {facts.length > 0 && <p className="tabular">{facts.join(" · ")}</p>}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[380px] lg:ml-auto">
          <ProfileSlider />
          <p className="mt-4 text-sm text-white/70">
            Sein Muwana · BSc Computer Science (Honours), University of Namibia
          </p>
        </div>
      </div>
    </section>
  )
}
