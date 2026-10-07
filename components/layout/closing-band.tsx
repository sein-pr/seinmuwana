import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/section"

interface ClosingBandProps {
  title: string
  description?: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}

export function ClosingBand({ title, description, primary, secondary }: ClosingBandProps) {
  return (
    <Section tone="dark" className="py-20">
      <h2 className="max-w-2xl text-4xl text-white sm:text-[2.5rem]">{title}</h2>
      {description && <p className="mt-3 max-w-xl text-lg leading-[1.55] text-white/70">{description}</p>}
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link href={primary.href}>{primary.label}</Link>
        </Button>
        {secondary && (
          <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10">
            <Link href={secondary.href}>{secondary.label}</Link>
          </Button>
        )}
      </div>
    </Section>
  )
}
