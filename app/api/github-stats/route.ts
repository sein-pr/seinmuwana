import { NextResponse } from "next/server"

export const revalidate = 3600
export const dynamic = "force-dynamic"

const DEFAULT_USERNAME = "sein-pr"

function getHeaders() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "sein-portfolio",
  }

  const token = process.env.GITHUB_TOKEN
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  return headers
}

export async function GET() {
  const username = process.env.GITHUB_USERNAME || DEFAULT_USERNAME
  const baseHeaders = getHeaders()

  try {
    const commitSearchHeaders = {
      ...baseHeaders,
      // Required by GitHub commit search API.
      Accept: "application/vnd.github.cloak-preview+json",
    }

    const [reposResponse, commitsResponse] = await Promise.allSettled([
      fetch(`https://api.github.com/users/${username}/repos?type=owner&per_page=100`, {
        headers: baseHeaders,
        next: { revalidate },
      }),
      fetch(`https://api.github.com/search/commits?q=author:${username}`, {
        headers: commitSearchHeaders,
        next: { revalidate },
      }),
    ])

    let projects: number | null = null
    if (reposResponse.status === "fulfilled" && reposResponse.value.ok) {
      const reposData = (await reposResponse.value.json()) as Array<{ fork: boolean }>
      projects = reposData.filter((repo) => !repo.fork).length
    }

    let commits: number | null = null
    if (commitsResponse.status === "fulfilled" && commitsResponse.value.ok) {
      const commitsData = (await commitsResponse.value.json()) as { total_count?: number }
      commits = commitsData.total_count ?? null
    }

    if (projects === null && commits === null) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub stats." },
        { status: 502 }
      )
    }

    return NextResponse.json({
      username,
      projects,
      commits,
      githubUrl: `https://github.com/${username}`,
    })
  } catch {
    return NextResponse.json(
      { error: "Unexpected error while fetching GitHub stats." },
      { status: 500 }
    )
  }
}
