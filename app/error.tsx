"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="bg-midnight text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24 sm:py-32">
        <h1 className="max-w-2xl text-[2.5rem] leading-[1.05] text-white sm:text-6xl">Something broke on this page.</h1>
        <p className="mt-5 max-w-xl text-lg leading-[1.55] text-white/75">
          It&apos;s not you. Try again, and if it keeps happening, email me at seinprince2@gmail.com.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" onClick={reset}>
            Try again
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
