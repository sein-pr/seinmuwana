"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Bot, Database, ExternalLink, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type IconKey = "bot" | "globe" | "database"

type OtherProject = {
  slug: string
  title: string
  subtitle: string
  description: string
  status: string
  tags: string[]
  liveUrl: string | null
  iconKey: IconKey
  category: string
}

const iconMap = {
  bot: Bot,
  globe: Globe,
  database: Database,
}

const ITEMS_PER_PAGE = 3

export function OtherProjectsSection({ projects }: { projects: OtherProject[] }) {
  const [activeFilter, setActiveFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const filters = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects]
  )

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter, projects])

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE))

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1)
    }
  }, [currentPage, totalPages])

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE)
  }, [currentPage, filteredProjects])

  const withTransition = (updater: () => void) => {
    setIsTransitioning(true)
    setTimeout(() => {
      updater()
      setIsTransitioning(false)
    }, 180)
  }

  const handleFilterChange = (nextFilter: string) => {
    if (nextFilter === activeFilter) return
    withTransition(() => {
      setActiveFilter(nextFilter)
      setCurrentPage(1)
    })
  }

  const handlePageChange = (nextPage: number) => {
    if (nextPage < 1 || nextPage > totalPages || nextPage === currentPage) return
    withTransition(() => setCurrentPage(nextPage))
  }

  return (
    <section className="bg-card py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          className="mb-8 text-2xl font-bold text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Other Projects
        </h2>

        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === activeFilter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div
          className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-300 ${
            isTransitioning
              ? "translate-y-3 scale-[0.985] opacity-0"
              : "translate-y-0 scale-100 opacity-100"
          }`}
        >
          {paginatedProjects.map((project) => {
            const Icon = iconMap[project.iconKey]

            return (
              <Link key={project.title} href={`/projects/${project.slug}`} className="group">
                <div className="h-full rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-lg">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant={project.status === "Completed" ? "secondary" : "default"}>
                      {project.status}
                    </Badge>
                  </div>

                  <h3
                    className="text-lg font-bold text-foreground transition-colors group-hover:text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-primary">{project.subtitle}</p>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
                      View project
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    {project.liveUrl && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <ExternalLink className="h-3 w-3" />
                        Live
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          <Button
            variant="outline"
            className="bg-transparent"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || isTransitioning}
          >
            <ArrowLeft className="h-4 w-4" />
            Prev
          </Button>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1
            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                disabled={isTransitioning}
                className={`h-9 w-9 rounded-full text-sm font-medium transition-all ${
                  page === currentPage
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
                aria-label={`Go to page ${page}`}
              >
                {page}
              </button>
            )
          })}

          <Button
            variant="outline"
            className="bg-transparent"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || isTransitioning}
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
