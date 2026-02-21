import type { MetadataRoute } from "next"

const siteUrl = "https://seinmuwana.netlify.app"

const staticRoutes = [
  "",
  "/about",
  "/experience",
  "/projects",
  "/cv",
  "/blog",
  "/contact",
  "/skills",
  "/education",
]

const blogSlugs = [
  "getting-started-with-rpa",
  "agritech-namibia-future",
  "machine-learning-crop-diseases",
  "digital-transformation-banking",
  "python-automation-scripts",
  "project-management-tech",
]

const projectSlugs = [
  "agrisense",
  "rpa-automation-suite",
  "user-access-management",
  "website-revamp",
  "ferreiras-garden-centre",
  "js-hardware",
  "gold-ideas",
  "isak-shawapala",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...pages, ...blogPages, ...projectPages]
}
