import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { ClosingBand } from "@/components/layout/closing-band"
import { blogCategories, blogPosts, readTime } from "@/lib/blog"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Blog | Sein Muwana",
  description: "Notes on RPA, AgriSense, Python and working inside a bank, written by Sein Muwana.",
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams
  const active = blogCategories.includes(category ?? "") ? (category as string) : "All"
  const posts = blogPosts
    .filter((p) => active === "All" || p.category === active)
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <PageHeader
        title="Blog"
        description="Notes from things I've built: RPA at a bank, crop disease detection, and small Python tools."
      />

      <Section>
        <nav aria-label="Filter posts by category" className="flex flex-wrap gap-2">
          {blogCategories.map((name) => {
            const selected = name === active
            return (
              <Link
                key={name}
                href={name === "All" ? "/blog" : `/blog?category=${encodeURIComponent(name)}`}
                aria-current={selected ? "true" : undefined}
                scroll={false}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full border px-5 text-base font-medium transition-colors",
                  selected
                    ? "border-transparent bg-periwinkle-tint text-carbon"
                    : "border-border text-graphite hover:bg-fog",
                )}
              >
                {name}
              </Link>
            )
          })}
        </nav>

        <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded bg-fog">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0 motion-reduce:transition-none"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {post.category} · <span className="tabular">{formatDate(post.date)}</span> ·{" "}
                  <span className="tabular">{readTime(post)} min read</span>
                </p>
                <h2 className="mt-2 text-xl text-foreground group-hover:underline group-hover:underline-offset-4">
                  {post.title}
                </h2>
                <p className="mt-2 text-base leading-[1.55] text-graphite">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <ClosingBand
        title="Want to talk about any of this?"
        primary={{ label: "Send a message", href: "/contact" }}
        secondary={{ label: "See projects", href: "/projects" }}
      />
    </>
  )
}
