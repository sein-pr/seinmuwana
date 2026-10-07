"use client"

import { Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PrintButton() {
  return (
    <Button variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white/10" onClick={() => window.print()}>
      <Printer aria-hidden="true" />
      Print
    </Button>
  )
}
