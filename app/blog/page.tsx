import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Sein Muwana",
  description: "Technical articles and insights on software engineering, AI, automation, and AgriTech by Sein Muwana.",
}

const blogPosts = [
  {
    slug: "getting-started-with-rpa",
    title: "Getting Started with Robotic Process Automation",
    excerpt: "An introduction to RPA and how it can transform business processes. Learn about popular tools like Power Automate and UIPath.",
    date: "2025-06-15",
    readTime: "5 min read",
    category: "Automation",
    tags: ["RPA", "Power Automate", "UIPath", "Automation"],
    image: "/images/blog/rpa-automation.jpg",
  },
  {
    slug: "agritech-namibia-future",
    title: "The Future of AgriTech in Namibia",
    excerpt: "Exploring how technology can revolutionize agriculture in Namibia and improve food security through affordable solutions.",
    date: "2025-05-20",
    readTime: "7 min read",
    category: "AgriTech",
    tags: ["AgriTech", "Agriculture", "Namibia", "Innovation"],
    image: "/images/blog/agritech-namibia.jpg",
  },
  {
    slug: "machine-learning-crop-diseases",
    title: "Using Machine Learning to Detect Crop Diseases",
    excerpt: "A deep dive into how machine learning algorithms can be trained to identify crop diseases early, helping farmers protect their yields.",
    date: "2025-04-10",
    readTime: "8 min read",
    category: "AI",
    tags: ["Machine Learning", "Agriculture", "Python", "Computer Vision"],
    image: "/images/blog/machine-learning-crops.jpg",
  },
  {
    slug: "digital-transformation-banking",
    title: "Digital Transformation in Banking: Lessons from My Internship",
    excerpt: "Insights and experiences from implementing digital solutions at a major financial institution in Namibia.",
    date: "2025-03-25",
    readTime: "6 min read",
    category: "Career",
    tags: ["Digital Transformation", "Banking", "Career", "Internship"],
    image: "/images/blog/digital-banking.jpg",
  },
  {
    slug: "python-automation-scripts",
    title: "Essential Python Scripts for Automation",
    excerpt: "A collection of useful Python scripts that can help automate everyday tasks and improve productivity.",
    date: "2025-02-18",
    readTime: "10 min read",
    category: "Programming",
    tags: ["Python", "Automation", "Scripting", "Productivity"],
    image: "/images/blog/python-automation.jpg",
  },
  {
    slug: "project-management-tech",
    title: "Project Management for Tech Projects: A Practical Guide",
    excerpt: "Practical tips and strategies for managing software development projects effectively, based on real-world experience.",
    date: "2025-01-30",
    readTime: "6 min read",
    category: "Career",
    tags: ["Project Management", "Software Development", "Leadership"],
    image: "/images/blog/project-management.jpg",
  },
]

const categories = ["All", "Automation", "AgriTech", "AI", "Programming", "Career"]

export default function BlogPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">Blog</Badge>
            <h1 
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Technical Blog
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Sharing insights, tutorials, and experiences in software engineering, 
              artificial intelligence, automation, and AgriTech.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-border py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg h-full">
                  {/* Blog Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex flex-1 flex-col p-6">
                    <h2 
                      className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors line-clamp-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {post.title}
                    </h2>
                    
                    <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <span className="flex items-center gap-1 text-xs font-medium text-primary group-hover:underline">
                        Read more
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Stay Updated
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              More articles coming soon! Follow my journey as I share insights 
              on technology, automation, and innovation in Namibia.
            </p>
            <div className="mt-8">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Get in touch to discuss collaboration
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
