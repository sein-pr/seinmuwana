import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="bg-midnight text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24 sm:py-32">
        <p className="tabular text-sm text-white/60">Error 404</p>
        <h1 className="mt-3 max-w-2xl text-[2.5rem] leading-[1.05] text-white sm:text-6xl">That page doesn&apos;t exist.</h1>
        <p className="mt-5 max-w-xl text-lg leading-[1.55] text-white/75">
          The link may be old or mistyped. Go back to the home page, or pick up with my projects.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
            <Link href="/projects">See projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
