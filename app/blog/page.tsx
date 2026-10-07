import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/layout/page-header"
import { Section } from "@/components/layout/section"
import { ClosingBand } from "@/components/layout/closing-band"
import { blogCategories, blogPosts, readTime } from "@/lib/blog"
import { CategoryNav } from "@/components/blog/category-nav"
import { Stagger, StaggerItem } from "@/components/motion/reveal"

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
        <CategoryNav categories={blogCategories} active={active} />

        <Stagger key={active} className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3" gap={0.09}>
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} data-cursor="Read" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded bg-fog">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale transition-[filter,transform] duration-500 group-hover:scale-105 group-hover:grayscale-0 motion-reduce:transition-none"
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
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <ClosingBand
        title="Want to talk about any of this?"
        primary={{ label: "Send a message", href: "/contact" }}
        secondary={{ label: "See projects", href: "/projects" }}
      />
    </>
  )
}
