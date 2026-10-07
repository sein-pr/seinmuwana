import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/section"
import { SplitHeading } from "@/components/motion/split-heading"
import { Magnetic } from "@/components/motion/magnetic"
import { Reveal } from "@/components/motion/reveal"

interface ClosingBandProps {
  title: string
  description?: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}

export function ClosingBand({ title, description, primary, secondary }: ClosingBandProps) {
  return (
    <Section tone="dark" className="relative overflow-hidden py-24 sm:py-28 print:hidden">
      <div
        aria-hidden="true"
        className="absolute -bottom-1/2 right-0 h-[40rem] w-[40rem] rounded-full opacity-60 motion-safe:animate-drift"
        style={{ background: "radial-gradient(closest-side, rgba(150,113,255,0.26), transparent)" }}
      />
      <div className="relative">
        <SplitHeading text={title} inView className="max-w-3xl text-4xl text-white sm:text-6xl sm:leading-[1.04]" />
        <Reveal delay={0.25}>
          {description && <p className="mt-5 max-w-xl text-lg leading-[1.55] text-white/70">{description}</p>}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button asChild size="lg" className="h-14 px-9 text-lg">
                <Link href={primary.href} data-cursor="Go">{primary.label}</Link>
              </Button>
            </Magnetic>
            {secondary && (
              <Button asChild size="lg" variant="outline" className="h-14 border-white bg-transparent px-8 text-lg text-white hover:bg-white/10">
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
