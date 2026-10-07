"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { BookOpen, FileText, FolderGit2, Award, Mail } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { projects } from "@/lib/projects"
import { blogPosts } from "@/lib/blog"
import { certifications } from "@/lib/certifications"

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  { label: "Certifications", href: "/certifications" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
]

export function CommandMenu({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const router = useRouter()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, onOpenChange])

  const go = (href: string) => {
    onOpenChange(false)
    router.push(href)
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange} title="Search the site" description="Jump to a page, project, post or certification.">
      <CommandInput placeholder="Search pages, projects, posts…" />
      <CommandList>
        <CommandEmpty>Nothing matches that.</CommandEmpty>
        <CommandGroup heading="Pages">
          {pages.map((page) => (
            <CommandItem key={page.href} value={`page ${page.label}`} onSelect={() => go(page.href)}>
              <FileText aria-hidden="true" />
              {page.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Projects">
          {projects.map((project) => (
            <CommandItem key={project.slug} value={`project ${project.title} ${project.tags.join(" ")}`} onSelect={() => go(`/projects/${project.slug}`)}>
              <FolderGit2 aria-hidden="true" />
              {project.title}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Blog posts">
          {blogPosts.map((post) => (
            <CommandItem key={post.slug} value={`post ${post.title} ${post.tags.join(" ")}`} onSelect={() => go(`/blog/${post.slug}`)}>
              <BookOpen aria-hidden="true" />
              {post.title}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Certifications">
          {certifications.map((c) => (
            <CommandItem key={c.slug} value={`certification ${c.title} ${c.issuer}`} onSelect={() => go(`/certifications/${c.slug}`)}>
              <Award aria-hidden="true" />
              {c.title}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Actions">
          <CommandItem value="email me contact" onSelect={() => go("/contact")}>
            <Mail aria-hidden="true" />
            Send me a message
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
