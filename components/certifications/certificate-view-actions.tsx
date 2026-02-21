"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Printer } from "lucide-react"

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
      className="gap-2"
      size="sm"
      aria-label="Download or print certificate"
    >
      <Download className="h-4 w-4" />
      <Printer className="h-4 w-4" />
      Download / Print
    </Button>
  )
}
