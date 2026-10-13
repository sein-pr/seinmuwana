import type { MetadataRoute } from "next"
import { absoluteUrl } from "@/lib/seo"
import { blogPosts } from "@/lib/blog"
import { projects } from "@/lib/projects"
import { certifications } from "@/lib/certifications"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/experience", "/skills", "/education", "/certifications", "/projects", "/blog", "/contact", "/cv"]
  return [
    ...pages.map((p) => ({ url: absoluteUrl(p) })),
    ...projects.map((p) => ({ url: absoluteUrl(`/projects/${p.slug}`) })),
    ...blogPosts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: new Date(p.date) })),
    ...certifications.map((c) => ({ url: absoluteUrl(`/certifications/${c.slug}`), lastModified: new Date(c.issueDate) })),
  ]
}
