import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SplitHeading } from "@/components/motion/split-heading"
import { VelocityMarquee } from "@/components/motion/velocity-marquee"
import { Magnetic } from "@/components/motion/magnetic"

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-midnight text-white">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 size-[44rem] rounded-full opacity-70 motion-safe:animate-drift"
        style={{ background: "radial-gradient(closest-side, rgba(150,113,255,0.3), transparent)" }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 py-24 sm:py-32">
        <p className="tabular text-sm text-white/60">Error 404</p>
        <SplitHeading as="h1" text="That page doesn't exist." className="mt-3 max-w-2xl text-[2.5rem] leading-[1.05] text-white sm:text-6xl" />
        <p className="mt-5 max-w-xl text-lg leading-[1.55] text-white/75">
          The link may be old or mistyped. Go back to the home page, or pick up with my projects.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Magnetic>
            <Button asChild size="lg" className="h-14 px-9 text-lg">
              <Link href="/">Back to home</Link>
            </Button>
          </Magnetic>
          <Button asChild size="lg" variant="outline" className="h-14 border-white bg-transparent px-8 text-lg text-white hover:bg-white/10">
            <Link href="/projects">See projects</Link>
          </Button>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5">
        <VelocityMarquee items={["404", "Not found", "Wrong turn", "Try the menu"]} speed={-2.5} itemClassName="text-4xl font-extrabold tracking-tight text-white/90 sm:text-6xl" />
      </div>
    </section>
  )
}
