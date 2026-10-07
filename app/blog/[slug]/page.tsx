import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Section } from "@/components/layout/section"
import { ClosingBand } from "@/components/layout/closing-band"
import { blogPosts, getPostBySlug, readTime } from "@/lib/blog"

export const dynamicParams = false

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post not found | Sein Muwana" }
  return {
    title: `${post.title} | Sein Muwana`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article", images: [post.image] },
  }
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const date = new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <header className="bg-midnight text-white">
        <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
          <Link
            href="/blog"
            className="inline-flex min-h-11 items-center gap-2 text-base text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All posts
          </Link>
          <p className="mt-4 text-base text-white/60">
            {post.category} · <span className="tabular">{date}</span> · <span className="tabular">{readTime(post)} min read</span>
          </p>
          <h1 className="mt-3 text-[2.25rem] leading-[1.08] text-white sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-[1.55] text-white/75">{post.excerpt}</p>
        </div>
      </header>

      <Section className="pt-12">
        <div className="mx-auto max-w-3xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded bg-fog">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="768px" className="object-cover grayscale" />
          </div>
          <article className="article mt-12" dangerouslySetInnerHTML={{ __html: post.content }} />

          <aside className="mt-16 flex items-center gap-4 border-t border-border pt-8">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
              <Image src="/images/profile.jpg" alt="" fill sizes="56px" className="object-cover" />
            </div>
            <p className="text-base leading-[1.5] text-graphite">
              <span className="font-semibold text-foreground">Sein Muwana</span>, software engineer in Windhoek.{" "}
              <Link href="/about" className="text-foreground underline underline-offset-4">
                About me
              </Link>
            </p>
          </aside>
        </div>
      </Section>

      <Section tone="fog">
        <h2 className="text-2xl text-foreground">Keep reading</h2>
        <ul className="mt-6 grid gap-8 md:grid-cols-2">
          {more.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group block">
                <p className="text-sm text-muted-foreground">{p.category}</p>
                <h3 className="mt-1 text-xl text-foreground group-hover:underline group-hover:underline-offset-4">{p.title}</h3>
                <p className="mt-2 text-base leading-[1.55] text-graphite">{p.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <ClosingBand
        title="Questions or a project in mind?"
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "All posts", href: "/blog" }}
      />
    </>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}
