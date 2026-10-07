"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

export function CertificateViewActions() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("download") === "1") {
      const timer = setTimeout(() => {
        window.print()
      }, 450)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <Button
      onClick={() => window.print()}
      size="sm"
    >
      <Printer aria-hidden="true" />
      Print or save as PDF
    </Button>
  )
}
